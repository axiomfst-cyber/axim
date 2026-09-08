from dataclasses import dataclass
from datetime import datetime, timezone
from enum import Enum
from typing import List, Optional
import math

class MasteryTier(str, Enum):
    NON_COMMENCEE = "Non commencée"  # 0 %
    DECOUVERTE = "Découverte"        # 1 - 39 %
    EN_COURS = "En cours"            # 40 - 59 %
    ACQUISE = "Acquise"              # 60 - 79 %
    MAITRISEE = "Maîtrisée"          # 80 - 94 %
    EXCELLENCE = "Excellence"        # 95 - 100 %

@dataclass
class EvaluationAttempt:
    score: float # 0.0 to 100.0
    assessment_type: str # 'exercise', 'quiz', 'exam', 'mock_bac'
    difficulty: int # 1 to 5
    timestamp: datetime

class AxiomProgressEngine:
    """
    Generic pedagogical mastery calculation service.
    Ponders:
    - Assessment nature (exercise, quiz, exam)
    - Question difficulty (1 to 5)
    - Recency decay (half-life of 30 days without practice)
    """

    HALF_LIFE_DAYS = 30.0
    LAMBDA_DECAY = math.log(2) / HALF_LIFE_DAYS

    TYPE_WEIGHTS = {
        "exercise": 0.20,
        "quiz": 0.35,
        "exam": 0.45,
        "mock_bac": 0.50,
    }

    @staticmethod
    def get_mastery_tier(score: float) -> MasteryTier:
        score_val = round(score, 1)
        if score_val <= 0.0:
            return MasteryTier.NON_COMMENCEE
        elif score_val < 40.0:
            return MasteryTier.DECOUVERTE
        elif score_val < 60.0:
            return MasteryTier.EN_COURS
        elif score_val < 80.0:
            return MasteryTier.ACQUISE
        elif score_val < 95.0:
            return MasteryTier.MAITRISEE
        else:
            return MasteryTier.EXCELLENCE

    @classmethod
    def calculate_mastery_score(
        cls,
        attempts: List[EvaluationAttempt],
        current_time: Optional[datetime] = None
    ) -> float:
        if not attempts:
            return 0.0

        now = current_time or datetime.now(timezone.utc)
        weighted_sum = 0.0
        total_weight = 0.0

        for att in attempts:
            # 1. Assessment type weight
            type_weight = cls.TYPE_WEIGHTS.get(att.assessment_type.lower(), 0.25)
            
            # 2. Difficulty multiplier (difficulty 1 => 0.7, difficulty 5 => 1.1)
            diff_factor = 0.6 + (0.1 * min(max(att.difficulty, 1), 5))
            
            # 3. Recency decay
            dt_days = max(0.0, (now - att.timestamp).total_seconds() / 86400.0)
            recency = math.exp(-cls.LAMBDA_DECAY * dt_days)
            
            effective_weight = type_weight * diff_factor * recency
            weighted_sum += att.score * effective_weight
            total_weight += effective_weight

        if total_weight == 0:
            return 0.0

        computed = weighted_sum / total_weight
        # Cap strictly between 0 and 100
        return max(0.0, min(100.0, round(computed, 2)))
