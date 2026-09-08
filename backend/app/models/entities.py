import uuid
from datetime import datetime
from sqlalchemy import (
    Column,
    String,
    Text,
    Integer,
    Numeric,
    DateTime,
    ForeignKey,
    Table,
    CheckConstraint,
    PrimaryKeyConstraint
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=False)
    role = Column(String(50), nullable=False) # student, teacher, admin, parent
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)

    # Relationships
    user_skills = relationship("UserSkill", back_populates="user", cascade="all, delete-orphan")
    attempts = relationship("Attempt", back_populates="user", cascade="all, delete-orphan")
    xp_transactions = relationship("XPTransaction", back_populates="user", cascade="all, delete-orphan")
    badges = relationship("UserBadge", back_populates="user", cascade="all, delete-orphan")


class Subject(Base):
    __tablename__ = "subjects"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), unique=True, nullable=False)

    courses = relationship("Course", back_populates="subject")
    skills = relationship("Skill", back_populates="subject")


class Level(Base):
    __tablename__ = "levels"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), nullable=False) # e.g. "Terminale C", "3ème"
    school_level = Column(String(100), nullable=False) # "Collège", "Lycée"


class Curriculum(Base):
    __tablename__ = "curriculums"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    country = Column(String(100), nullable=False, default="Gabon")
    school_level = Column(String(100), nullable=False)
    class_name = Column(String(100), nullable=False)


class Course(Base):
    __tablename__ = "courses"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    subject_id = Column(UUID(as_uuid=True), ForeignKey("subjects.id", ondelete="CASCADE"), nullable=False)
    level_id = Column(UUID(as_uuid=True), ForeignKey("levels.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    pdf_url = Column(String(500), nullable=True)
    video_url = Column(String(500), nullable=True)

    subject = relationship("Subject", back_populates="courses")


class Skill(Base):
    __tablename__ = "skills"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    subject_id = Column(UUID(as_uuid=True), ForeignKey("subjects.id", ondelete="CASCADE"), nullable=False)
    level_id = Column(UUID(as_uuid=True), ForeignKey("levels.id", ondelete="CASCADE"), nullable=False)
    name = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    difficulty = Column(Integer, nullable=False) # 1 to 5

    __table_args__ = (
        CheckConstraint("difficulty >= 1 AND difficulty <= 5", name="check_skill_difficulty"),
    )

    subject = relationship("Subject", back_populates="skills")
    exercises = relationship("Exercise", back_populates="skill", cascade="all, delete-orphan")


class SkillPrerequisite(Base):
    __tablename__ = "skill_prerequisites"

    skill_id = Column(UUID(as_uuid=True), ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True)
    prerequisite_id = Column(UUID(as_uuid=True), ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True)

    __table_args__ = (
        CheckConstraint("skill_id != prerequisite_id", name="check_no_self_prerequisite"),
    )


class Exercise(Base):
    __tablename__ = "exercises"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    skill_id = Column(UUID(as_uuid=True), ForeignKey("skills.id", ondelete="CASCADE"), nullable=False)
    difficulty = Column(Integer, nullable=False) # 1 to 5
    type = Column(String(50), nullable=False) # mcq, numeric, text, matching, boolean, image
    question = Column(Text, nullable=False)

    skill = relationship("Skill", back_populates="exercises")
    questions = relationship("Question", back_populates="exercise", cascade="all, delete-orphan")


class Question(Base):
    __tablename__ = "questions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    exercise_id = Column(UUID(as_uuid=True), ForeignKey("exercises.id", ondelete="CASCADE"), nullable=False)
    question = Column(Text, nullable=False)
    answer = Column(Text, nullable=False)
    explanation = Column(Text, nullable=True)

    exercise = relationship("Exercise", back_populates="questions")


class Assessment(Base):
    __tablename__ = "assessments"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(255), nullable=False)
    type = Column(String(50), nullable=False) # quiz, exam, diagnostic, mock_bac
    duration = Column(Integer, nullable=False) # in minutes


class Attempt(Base):
    __tablename__ = "attempts"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    assessment_id = Column(UUID(as_uuid=True), ForeignKey("assessments.id", ondelete="CASCADE"), nullable=False)
    score = Column(Numeric(5, 2), nullable=False)
    date = Column(DateTime(timezone=True), default=datetime.utcnow)

    user = relationship("User", back_populates="attempts")


class UserSkill(Base):
    __tablename__ = "user_skills"

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), primary_key=True)
    skill_id = Column(UUID(as_uuid=True), ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True)
    mastery_score = Column(Numeric(5, 2), default=0.0, nullable=False) # 0 to 100
    last_evaluation = Column(DateTime(timezone=True), default=datetime.utcnow)

    user = relationship("User", back_populates="user_skills")


class XPTransaction(Base):
    __tablename__ = "xp_transactions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    amount = Column(Integer, nullable=False)
    reason = Column(String(255), nullable=False)
    date = Column(DateTime(timezone=True), default=datetime.utcnow)

    user = relationship("User", back_populates="xp_transactions")


class Badge(Base):
    __tablename__ = "badges"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    condition = Column(Text, nullable=False)


class UserBadge(Base):
    __tablename__ = "user_badges"

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), primary_key=True)
    badge_id = Column(UUID(as_uuid=True), ForeignKey("badges.id", ondelete="CASCADE"), primary_key=True)

    user = relationship("User", back_populates="badges")


class Class(Base):
    __tablename__ = "classes"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    level_id = Column(UUID(as_uuid=True), ForeignKey("levels.id", ondelete="CASCADE"), nullable=False)
    teacher_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)


class ClassStudent(Base):
    __tablename__ = "class_students"

    class_id = Column(UUID(as_uuid=True), ForeignKey("classes.id", ondelete="CASCADE"), primary_key=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), primary_key=True)
