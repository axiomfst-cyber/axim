from pydantic import BaseModel, EmailStr
from typing import Optional
from enum import Enum

class UserRoleEnum(str, Enum):
    STUDENT = "student"
    TEACHER = "teacher"
    ADMIN = "admin"
    PARENT = "parent"

class StudentRegistration(BaseModel):
    name: str
    email: EmailStr
    password: str
    class_id: str  # ex: '2nde-s', '1ere-s', 'term-c', 'term-d', 'term-a'
    class_name: str # ex: 'Terminale C (Maths & Sciences)'
    school_name: Optional[str] = "Lycée National Léon Mba (Libreville)"
    role: UserRoleEnum = UserRoleEnum.STUDENT

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: str
    name: str
    email: str
    role: str
    class_id: str
    class_name: str
