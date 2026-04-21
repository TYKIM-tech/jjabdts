# MDTS (Maritime Digital Telemedicine System) 실행 가이드

MDTS는 Next.js 프론트엔드와 FastAPI 백엔드로 나뉘어 구성되어 있습니다. 로컬 또는 엣지 서버에서 시스템을 실행하기 위해서는 프론트엔드와 백엔드를 각각 실행해 주어야 합니다.

---

## 1. 백엔드(FastAPI + AI) 실행 방법

백엔드는 데이터베이스 및 AI 영상 분석(YOLOv8)을 처리합니다. 파이썬 환경이 필요합니다.

### 1) 폴더 이동
터미널을 열고 `backend` 폴더로 이동합니다.
```bash
cd backend
```

### 2) 가상환경 생성 및 활성화 (권장)
종속성 충돌을 막기 위해 가상환경을 생성합니다.
- **Windows**:
  ```bash
  python -m venv venv
  .\venv\Scripts\activate
  ```
- **Mac/Linux**:
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```

### 3) 패키지 설치
`requirements.txt`에 명시된 필수 패키지들을 설치합니다.
```bash
pip install -r requirements.txt
```

### 4) 백엔드 서버 실행
`uvicorn`을 사용하여 FastAPI 서버를 실행합니다.
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
- 정상 실행 시 `http://localhost:8000/docs` 에서 자동 생성된 API 문서를 확인할 수 있습니다.

---

## 2. 프론트엔드(Next.js) 실행 방법

프론트엔드는 사용자 UI와 실시간 대시보드를 담당합니다. Node.js 환경이 필요합니다.

### 1) 폴더 이동
새로운 터미널 창을 열고 `frontend` 폴더로 이동합니다.
```bash
cd frontend
```

### 2) 패키지 설치
Next.js 및 React 관련 패키지들을 설치합니다.
```bash
npm install
```

### 3) 프론트엔드 서버 실행 (개발 모드)
다음 명령어로 개발 서버를 실행합니다.
```bash
npm run dev
```
- 기본적으로 `http://localhost:3000` 에서 실행됩니다.
- 브라우저를 열고 `http://localhost:3000`에 접속하여 서비스 화면(응급 처치 화면 등)을 확인합니다.

---

## 💡 요약
- **터미널 1**: `backend` 폴더에서 `uvicorn main:app --reload`
- **터미널 2**: `frontend` 폴더에서 `npm run dev`
- 접속: `http://localhost:3000`
