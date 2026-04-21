import cv2
import numpy as np
import base64
from typing import Dict, Any
import json

try:
    from ultralytics import YOLO
except ImportError:
    # ultralytics 패키지가 없을 경우를 대비한 Mock 클래스
    class YOLO:
        def __init__(self, model_path):
            self.model_path = model_path
        def __call__(self, frame, conf=0.5, iou=0.45):
            class MockResult:
                class Boxes:
                    xyxy = [[10, 10, 100, 100]]
                    conf = [0.85]
                    cls = [0] # 0: 출혈, 1: 골절
            class MockOutput:
                boxes = MockResult.Boxes()
                names = {0: "bleeding", 1: "fracture"}
            return [MockOutput()]

# ==========================================
# Edge AI 최적화 팁 (저사양 장비 고려)
# ==========================================
"""
[Edge 장비 추론 속도 최적화 팁]
1. 모델 경량화 및 양자화 (Quantization): 
   - 모델을 FP32에서 FP16 또는 INT8로 변환하여 사용하세요.
   - 예: TensorRT(NVIDIA 장비), NCNN/TFLite(ARM 기반 장비) 또는 OpenVINO(Intel) 포맷으로 변환.
     `yolo export model=yolov8n.pt format=engine half=True` (TensorRT FP16)
2. 입력 해상도(Resolution) 축소:
   - YOLO 입력 크기를 640x640에서 416x416이나 320x320으로 줄이면 속도가 비약적으로 상승합니다. (정확도와 트레이드오프)
3. 프레임 스킵 (Frame Skipping):
   - 웹캠에서 초당 30프레임(30fps)이 들어오더라도 AI 추론은 초당 5~10프레임(5-10fps)만 수행하고,
     나머지 프레임은 이전 결과를 유지(Tracking)하는 방식을 사용하세요.
4. 모델 크기:
   - YOLOv8 시리즈 중 가장 가벼운 YOLOv8n (Nano) 모델을 사용하세요.
"""

class TraumaAnalyzer:
    def __init__(self, model_path: str = "yolov8n-trauma.pt"):
        # 모델 로드 (실제 환경에서는 훈련된 커스텀 가중치 파일 사용)
        self.model = YOLO(model_path)
        # 클래스 매핑 (가정: 0=bleeding, 1=fracture)
        self.class_names = {0: "bleeding", 1: "fracture"}

    def process_frame_base64(self, base64_img: str) -> Dict[str, Any]:
        """프론트엔드로부터 받은 Base64 이미지를 OpenCV로 디코딩하고 추론을 수행합니다."""
        # 1. Base64 -> OpenCV 이미지 디코딩
        img_data = base64.b64decode(base64_img.split(",")[1] if "," in base64_img else base64_img)
        np_arr = np.frombuffer(img_data, np.uint8)
        frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        if frame is None:
            return {"status": "error", "message": "Invalid image format"}

        # 2. YOLOv8 추론 (최적화: conf 0.5 이상만 탐지, 해상도 축소 가능)
        results = self.model(frame, conf=0.5, iou=0.45)
        
        detections = []
        for r in results:
            boxes = r.boxes
            for i in range(len(boxes.xyxy)):
                cls_id = int(boxes.cls[i].item())
                confidence = float(boxes.conf[i].item())
                
                # Bounding Box 좌표 (선택 사항: 프론트엔드에서 박스 렌더링 시 사용)
                x1, y1, x2, y2 = boxes.xyxy[i].tolist()
                
                label = self.class_names.get(cls_id, "unknown")
                
                detections.append({
                    "label": label,
                    "confidence": round(confidence, 3),
                    "bbox": [int(x1), int(y1), int(x2), int(y2)]
                })

        # 3. JSON 형태의 결과 반환
        return {
            "status": "success",
            "detections": detections,
            "risk_level": self._calculate_risk_level(detections)
        }

    def _calculate_risk_level(self, detections: list) -> int:
        """탐지된 항목에 기반하여 위험도(Risk Level)를 산출합니다."""
        if not detections:
            return 0
        # 출혈(bleeding)이나 골절(fracture)이 탐지되면 위험도 3으로 판단 (예시 로직)
        for det in detections:
            if det["label"] in ["bleeding", "fracture"] and det["confidence"] > 0.7:
                return 3
        return 1
