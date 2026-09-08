from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.auth import router as auth_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Moteur pédagogique générique et plateforme de compétences AXIOM ACADEMY (Gabon)"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api/v1")


@app.get("/health", tags=["Système"])
async def health_check():
    return {
        "status": "healthy",
        "service": "AXIOM ACADEMY Core API",
        "environment": settings.ENVIRONMENT,
        "systems": {
            "content": "COURSES / SUBJECTS / LEVELS / CURRICULUMS",
            "pedagogical_engine": "SKILLS / PREREQUISITES / GRAPH",
            "evaluation_engine": "EXERCISES / ASSESSMENTS / ATTEMPTS",
            "gamification": "XP / BADGES / STREAKS"
        }
    }
