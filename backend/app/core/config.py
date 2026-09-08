from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "AXIOM ACADEMY API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    SECRET_KEY: str = "axiom_super_secret_jwt_key_change_in_production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 # 24 hours
    
    DATABASE_URL: str = "postgresql+asyncpg://axiom_user:axiom_secret_password@localhost:5432/axiom_db"
    SYNC_DATABASE_URL: str = "postgresql://axiom_user:axiom_secret_password@localhost:5432/axiom_db"
    
    ENVIRONMENT: str = "development"

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
