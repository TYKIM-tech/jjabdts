from contextlib import asynccontextmanager
from typing import Optional, List
from datetime import datetime, timezone
from fastapi import FastAPI, Depends, HTTPException, WebSocket, WebSocketDisconnect
from sqlmodel import SQLModel, Field, Relationship, Session, select, create_engine
from ai_service import TraumaAnalyzer

# ==========================================
# Database & Models
# ==========================================

sqlite_file_name = "mdts_database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, echo=True, connect_args=connect_args)

def get_session():
    with Session(engine) as session:
        yield session

class CrewsBase(SQLModel):
    name: str
    age: int
    gender: str
    position: str
    blood_type: str
    medical_history: Optional[str] = None
    allergies: Optional[str] = None

class Crews(CrewsBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    charts: List["Medical_Charts"] = Relationship(back_populates="crew")

class Medical_ChartsBase(SQLModel):
    crew_id: int = Field(foreign_key="crews.id")
    symptoms: str
    risk_level: int
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Medical_Charts(Medical_ChartsBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    crew: Optional[Crews] = Relationship(back_populates="charts")
    vital_signs: List["Vital_Signs"] = Relationship(back_populates="chart")

class Vital_SignsBase(SQLModel):
    chart_id: int = Field(foreign_key="medical_charts.id")
    heart_rate: int
    blood_pressure_systolic: int
    blood_pressure_diastolic: int
    oxygen_saturation: int
    recorded_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Vital_Signs(Vital_SignsBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    chart: Optional[Medical_Charts] = Relationship(back_populates="vital_signs")

class VitalSignsUpdate(SQLModel):
    heart_rate: Optional[int] = None
    blood_pressure_systolic: Optional[int] = None
    blood_pressure_diastolic: Optional[int] = None
    oxygen_saturation: Optional[int] = None

# ==========================================
# FastAPI App & Endpoints
# ==========================================

# AI Analyzer 인스턴스 전역 생성 (모델 1회 로딩)
trauma_analyzer = TraumaAnalyzer()

@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield

app = FastAPI(title="MDTS API", description="해상 응급 의료 지원 시스템 백엔드 API", version="1.0.0", lifespan=lifespan)

@app.post("/crews", response_model=Crews)
def create_crew(crew: CrewsBase, session: Session = Depends(get_session)):
    """새로운 선원 정보를 등록합니다."""
    db_crew = Crews.model_validate(crew)
    session.add(db_crew)
    session.commit()
    session.refresh(db_crew)
    return db_crew

@app.patch("/vitals/{chart_id}", response_model=Vital_Signs)
def update_vitals(chart_id: int, vitals_update: VitalSignsUpdate, session: Session = Depends(get_session)):
    """특정 환자(차트)의 실시간 바이탈을 업데이트합니다."""
    chart = session.get(Medical_Charts, chart_id)
    if not chart:
        raise HTTPException(status_code=404, detail="해당 차트를 찾을 수 없습니다.")
        
    statement = select(Vital_Signs).where(Vital_Signs.chart_id == chart_id).order_by(Vital_Signs.recorded_at.desc())
    latest_vitals = session.exec(statement).first()
    
    if not latest_vitals:
        new_vitals = Vital_Signs(
            chart_id=chart_id,
            heart_rate=vitals_update.heart_rate or 0,
            blood_pressure_systolic=vitals_update.blood_pressure_systolic or 0,
            blood_pressure_diastolic=vitals_update.blood_pressure_diastolic or 0,
            oxygen_saturation=vitals_update.oxygen_saturation or 0
        )
        session.add(new_vitals)
        session.commit()
        session.refresh(new_vitals)
        return new_vitals
        
    vitals_data = vitals_update.model_dump(exclude_unset=True)
    for key, value in vitals_data.items():
        setattr(latest_vitals, key, value)
    latest_vitals.recorded_at = datetime.now(timezone.utc)
        
    session.add(latest_vitals)
    session.commit()
    session.refresh(latest_vitals)
    return latest_vitals

# ==========================================
# AI Model WebSocket Endpoint
# ==========================================

@app.websocket("/ws/analyze")
async def websocket_analyze_endpoint(websocket: WebSocket):
    """
    프론트엔드로부터 웹캠 프레임(Base64)을 실시간으로 수신받아
    YOLOv8 추론을 수행한 뒤 탐지 결과(JSON)를 반환하는 WebSocket 엔드포인트입니다.
    """
    await websocket.accept()
    try:
        while True:
            # 1. 프론트엔드로부터 데이터(Base64 인코딩된 이미지 문자열) 수신
            data = await websocket.receive_text()
            
            # 2. AI 분석 수행
            analysis_result = trauma_analyzer.process_frame_base64(data)
            
            # 3. 분석된 결과(JSON)를 다시 프론트엔드에 전송
            await websocket.send_json(analysis_result)
            
    except WebSocketDisconnect:
        print("WebSocket disconnected")
    except Exception as e:
        print(f"Error processing frame: {e}")
        await websocket.close()
