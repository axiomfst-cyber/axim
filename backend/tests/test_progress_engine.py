from datetime import datetime, timezone, timedelta
from app.services.progress_engine import AxiomProgressEngine, EvaluationAttempt, MasteryTier

def test_initial_zero_mastery():
    score = AxiomProgressEngine.calculate_mastery_score([])
    assert score == 0.0
    assert AxiomProgressEngine.get_mastery_tier(score) == MasteryTier.NON_COMMENCEE

def test_mastery_tiers_boundaries():
    assert AxiomProgressEngine.get_mastery_tier(0.0) == MasteryTier.NON_COMMENCEE
    assert AxiomProgressEngine.get_mastery_tier(1.0) == MasteryTier.DECOUVERTE
    assert AxiomProgressEngine.get_mastery_tier(39.0) == MasteryTier.DECOUVERTE
    assert AxiomProgressEngine.get_mastery_tier(40.0) == MasteryTier.EN_COURS
    assert AxiomProgressEngine.get_mastery_tier(59.9) == MasteryTier.EN_COURS
    assert AxiomProgressEngine.get_mastery_tier(60.0) == MasteryTier.ACQUISE
    assert AxiomProgressEngine.get_mastery_tier(79.9) == MasteryTier.ACQUISE
    assert AxiomProgressEngine.get_mastery_tier(80.0) == MasteryTier.MAITRISEE
    assert AxiomProgressEngine.get_mastery_tier(94.9) == MasteryTier.MAITRISEE
    assert AxiomProgressEngine.get_mastery_tier(95.0) == MasteryTier.EXCELLENCE
    assert AxiomProgressEngine.get_mastery_tier(100.0) == MasteryTier.EXCELLENCE

def test_recency_and_difficulty_weighting():
    now = datetime.now(timezone.utc)
    old_time = now - timedelta(days=60) # 2 half-lives ago

    # Old low-difficulty score (100% on diff 1, but 60 days ago)
    old_attempt = EvaluationAttempt(score=100.0, assessment_type="exercise", difficulty=1, timestamp=old_time)
    
    # Recent high-difficulty score (80% on diff 5, today)
    recent_attempt = EvaluationAttempt(score=80.0, assessment_type="exam", difficulty=5, timestamp=now)

    score = AxiomProgressEngine.calculate_mastery_score([old_attempt, recent_attempt], current_time=now)
    # The recent exam attempt with difficulty 5 has vastly higher weight than the decayed 60-day old exercise
    assert score < 85.0
