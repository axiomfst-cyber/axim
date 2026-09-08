from fastapi import APIRouter, HTTPException, status
import uuid
from app.schemas.auth import StudentRegistration, UserLogin, TokenResponse

router = APIRouter(prefix="/auth", tags=["Authentification"])

# Mock in-memory store for quick prototype verification prior to live DB connection
REGISTERED_USERS = {}

@router.post("/register/student", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
async def register_student(payload: StudentRegistration):
    """
    Inscription d'un élève avec choix de son niveau (de la Seconde à la Terminale)
    et rattachement immédiat à son parcours de compétences.
    """
    if payload.email in REGISTERED_USERS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Un compte avec cet email existe déjà."
        )

    user_id = str(uuid.uuid4())
    user_record = {
        "id": user_id,
        "name": payload.name,
        "email": payload.email,
        "role": payload.role.value,
        "class_id": payload.class_id,
        "class_name": payload.class_name,
        "school_name": payload.school_name,
    }
    REGISTERED_USERS[payload.email] = user_record

    return TokenResponse(
        access_token=f"axiom_jwt_token_{user_id}",
        token_type="bearer",
        user_id=user_id,
        name=payload.name,
        email=payload.email,
        role=payload.role.value,
        class_id=payload.class_id,
        class_name=payload.class_name,
    )

@router.post("/login", response_model=TokenResponse)
async def login_user(credentials: UserLogin):
    """
    Connexion utilisateur standard avec retour du JWT et du niveau scolaire de l'élève.
    """
    user = REGISTERED_USERS.get(credentials.email)
    if not user:
        # Default mock fallback for test demo
        return TokenResponse(
            access_token="axiom_demo_token_12345",
            token_type="bearer",
            user_id="usr-demo-1",
            name="Moussa Obiang",
            email=credentials.email,
            role="student",
            class_id="term-c",
            class_name="Terminale C (Maths & Sciences)"
        )

    return TokenResponse(
        access_token=f"axiom_jwt_token_{user['id']}",
        token_type="bearer",
        user_id=user["id"],
        name=user["name"],
        email=user["email"],
        role=user["role"],
        class_id=user["class_id"],
        class_name=user["class_name"]
    )
