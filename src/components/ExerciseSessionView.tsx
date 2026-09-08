import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  RotateCcw, 
  ShieldCheck, 
  Lightbulb, 
  AlertTriangle,
  BookOpen,
  Check,
  HelpCircle,
  Award,
  ChevronDown,
  ChevronUp,
  Flame,
  CheckCheck
} from 'lucide-react';
import { ExerciseQuestion, SkillNode } from '../types';
import { getSkillWorkoutQuestions } from '../data/axiomQuestions';
import { getTierFromScore, getTierColor } from '../data/axiomData';
import { MascotId, MASCOTS, MascotMood } from './mascot/mascotData';
import { MascotCharacter } from './mascot/MascotCharacter';
import { AvatarCustomization } from './mascot/avatarTypes';

interface ExerciseSessionViewProps {
  skill: SkillNode;
  onCompleteExercise: (newScore: number, xpGained: number) => void;
  onBackToTree: () => void;
  mascotId?: MascotId;
  onOpenMascotSelector?: () => void;
  customization?: AvatarCustomization;
  onOpenAvatarCustomizer?: (mode?: 'wizard' | 'studio') => void;
}

export const ExerciseSessionView: React.FC<ExerciseSessionViewProps> = ({
  skill,
  onCompleteExercise,
  onBackToTree,
  mascotId = 'avatar',
  onOpenMascotSelector,
  customization,
  onOpenAvatarCustomizer,
}) => {
  // Retrieve strictly unique questions for this skill (no duplicated questions/QCM)
  const questions: ExerciseQuestion[] = useMemo(() => {
    return getSkillWorkoutQuestions(skill.id);
  }, [skill.id]);
  
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [numericAnswer, setNumericAnswer] = useState<string>('');
  const [showHint, setShowHint] = useState(false);
  const [showConcept, setShowConcept] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  
  // Track attempts and wrong choices on the current question
  const [failedAttemptsCount, setFailedAttemptsCount] = useState<number>(0);
  const [failedOptions, setFailedOptions] = useState<string[]>([]);
  const [firstTryCorrectCount, setFirstTryCorrectCount] = useState<number>(0);
  const [answersLog, setAnswersLog] = useState<{ isFirstTry: boolean; question: ExerciseQuestion; totalAttempts: number }[]>([]);

  const currentQuestion = questions[currentQuestionIdx] || questions[0];
  const currentMascot = MASCOTS[mascotId] || MASCOTS.avatar;
  const isCustomAvatar = mascotId === 'avatar' || mascotId === 'koko';
  const currentMascotDisplayName = isCustomAvatar && customization?.name ? customization.name : currentMascot.name;

  const mascotMood: MascotMood = useMemo(() => {
    if (sessionCompleted) return 'celebrating';
    if (isSubmitted) {
      return isCorrect ? 'correct' : 'incorrect';
    }
    if (selectedOption || numericAnswer.trim()) {
      return 'option_selected';
    }
    if (showHint) {
      return 'thinking';
    }
    return 'idle';
  }, [sessionCompleted, isSubmitted, isCorrect, selectedOption, numericAnswer, showHint]);

  // Pedagogical Phase helper
  const getPhaseInfo = (idx: number, total: number) => {
    if (total <= 3) {
      return { phase: 1, totalPhases: 1, title: 'Session Pratique Ciblée', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    }
    const third = Math.ceil(total / 3);
    if (idx < third) {
      return { phase: 1, totalPhases: 3, title: 'Phase 1 : Fondations & Découverte', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    } else if (idx < third * 2) {
      return { phase: 2, totalPhases: 3, title: 'Phase 2 : Entraînement & Automatisation', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    } else {
      return { phase: 3, totalPhases: 3, title: 'Phase 3 : Approfondissement & Maîtrise', color: 'text-purple-700 bg-purple-50 border-purple-200' };
    }
  };

  const phaseInfo = getPhaseInfo(currentQuestionIdx, questions.length);

  // Helper for difficulty badge styling
  const getDifficultyBadge = (diff: number) => {
    switch (diff) {
      case 1:
        return { label: 'Niveau 1 : Découverte', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' };
      case 2:
        return { label: 'Niveau 2 : Application directe', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
      case 3:
        return { label: 'Niveau 3 : Intermédiaire', bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' };
      case 4:
        return { label: 'Niveau 4 : Avancé', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' };
      case 5:
      default:
        return { label: 'Niveau 5 : Très difficile', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' };
    }
  };

  const diffBadge = getDifficultyBadge(currentQuestion.difficulty);

  const handleVerify = () => {
    let correct = false;
    if (currentQuestion.type === 'mcq' || currentQuestion.type === 'true_false') {
      correct = selectedOption === String(currentQuestion.correctAnswer);
    } else if (currentQuestion.type === 'numeric') {
      const userNum = parseFloat(numericAnswer.trim().replace(',', '.'));
      const correctNum = parseFloat(String(currentQuestion.correctAnswer));
      correct = !isNaN(userNum) && Math.abs(userNum - correctNum) < 0.001;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      if (failedAttemptsCount === 0) {
        setFirstTryCorrectCount(prev => prev + 1);
      }
    } else {
      // Record failed attempt on this question
      setFailedAttemptsCount(prev => prev + 1);
      if (selectedOption && !failedOptions.includes(selectedOption)) {
        setFailedOptions(prev => [...prev, selectedOption]);
      }
      // Proactively open hint to assist the student
      setShowHint(true);
    }
  };

  // When student made a mistake, allow them to retry the current question until validated
  const handleRetryQuestion = () => {
    setIsSubmitted(false);
    setIsCorrect(false);
    setSelectedOption('');
    setNumericAnswer('');
  };

  const handleNext = () => {
    // STRICT VALIDATION BARRIER: As long as the question is not validated, user CANNOT advance!
    if (!isCorrect) {
      return;
    }

    // Save validated question to log
    const isFirstTry = failedAttemptsCount === 0;
    setAnswersLog(prev => [
      ...prev,
      { isFirstTry, question: currentQuestion, totalAttempts: failedAttemptsCount + 1 }
    ]);

    if (currentQuestionIdx + 1 < questions.length) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption('');
      setNumericAnswer('');
      setShowHint(false);
      setShowConcept(true);
      setIsSubmitted(false);
      setIsCorrect(false);
      setFailedAttemptsCount(0);
      setFailedOptions([]);
    } else {
      // Completed session
      setSessionCompleted(true);
      const totalFirstTry = firstTryCorrectCount + (failedAttemptsCount === 0 ? 1 : 0);
      const sessionScoreRatio = totalFirstTry / questions.length;
      
      // Calculate new mastery score via Axiom adaptive engine
      const scoreGain = Math.round(15 + sessionScoreRatio * 15);
      const updatedScore = Math.min(100, Math.round(skill.masteryScore + scoreGain));
      const xpReward = totalFirstTry * 30 + (questions.length - totalFirstTry) * 15 + 40;

      onCompleteExercise(updatedScore, xpReward);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption('');
    setNumericAnswer('');
    setShowHint(false);
    setShowConcept(true);
    setIsSubmitted(false);
    setIsCorrect(false);
    setFailedAttemptsCount(0);
    setFailedOptions([]);
    setFirstTryCorrectCount(0);
    setSessionCompleted(false);
    setAnswersLog([]);
  };

  // Final summary view when all questions are validated
  if (sessionCompleted) {
    const totalFirstTry = answersLog.filter(a => a.isFirstTry).length;
    const scorePct = Math.round((totalFirstTry / questions.length) * 100);
    const newTier = getTierFromScore(Math.min(100, skill.masteryScore + Math.round(15 + (totalFirstTry / questions.length) * 15)));
    const tierStyle = getTierColor(newTier);

    return (
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-6">
        {/* Duolingo Style Celebrating Mascot with Fanfare & Confetti */}
        <div className="flex flex-col items-center justify-center py-2">
          <MascotCharacter
            mascotId={mascotId}
            customization={customization}
            mood="celebrating"
            size="lg"
            showSpeechBubble={true}
            customMessage={`Félicitations ! Tu as validé toutes les questions de ${skill.name} avec brio !`}
            interactive={true}
            showAudioToggle={true}
          />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Toutes les {questions.length} questions ont été validées avec succès
          </span>
          <h2 className="font-heading text-2xl font-bold text-slate-900 mt-3">
            Compétence Validée & Acquise !
          </h2>
          <p className="text-slate-600 text-xs mt-1">
            Module maîtrisé : <strong>{skill.name}</strong>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] text-slate-500 block font-medium">Réussite directe</span>
            <span className="text-xl font-black text-slate-900 font-heading">
              {totalFirstTry} / {questions.length}
            </span>
            <span className="text-[10px] text-slate-400 block">{scorePct}% 1er coup</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="text-[11px] text-amber-700 block font-medium">XP Obtenu</span>
            <span className="text-xl font-black text-amber-600 font-heading flex items-center justify-center gap-1">
              <Zap className="w-4 h-4 fill-amber-500" />
              +{totalFirstTry * 30 + (questions.length - totalFirstTry) * 15 + 40}
            </span>
            <span className="text-[10px] text-amber-600/80 block">Points de maîtrise</span>
          </div>

          <div className={`p-3.5 rounded-2xl border ${tierStyle.bg} ${tierStyle.border}`}>
            <span className="text-[11px] text-slate-500 block font-medium">Palier atteint</span>
            <span className={`text-sm font-bold block ${tierStyle.text} mt-1`}>
              {newTier}
            </span>
            <span className="text-[10px] text-slate-400 block">Niveau validé</span>
          </div>
        </div>

        {/* Question Review List */}
        <div className="text-left bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2.5 max-h-64 overflow-y-auto pr-2">
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
            Détail des questions validées (100% complétées) :
          </span>
          {answersLog.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200/60 last:border-b-0">
              <div className="flex items-center gap-2">
                {item.isFirstTry ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" title="Validé du premier coup" />
                ) : (
                  <CheckCheck className="w-4 h-4 text-blue-600 shrink-0" title={`Validé après ${item.totalAttempts} essais`} />
                )}
                <span className="text-slate-800 font-medium line-clamp-1">
                  Q{idx + 1} : {item.question.prompt}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-semibold shrink-0 ml-2">
                {item.isFirstTry ? '1er essai' : `${item.totalAttempts} essais`}
              </span>
            </div>
          ))}
        </div>

        {/* Security / Pedagogical Guarantee */}
        <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-left flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <p className="text-[11px] text-emerald-900 leading-relaxed">
            <strong>Exigence Validée :</strong> Toutes les questions ont été validées sans exception. Vous maîtrisez désormais les notions clés de ce chapitre.
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            id="btn-restart-exercise"
            onClick={handleRestart}
            className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Refaire la série
          </button>
          <button
            id="btn-return-map"
            onClick={onBackToTree}
            className="flex-1 py-3 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
          >
            Retour au parcours
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Active question session layout
  return (
    <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
      {/* Top Header with segmented progress bar and workout selector */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToTree}
              className="text-xs text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1 font-medium"
            >
              ← Quitter
            </button>
            <span className="text-slate-300">|</span>
            <span className="text-[11px] font-bold text-slate-800 truncate max-w-[180px] sm:max-w-xs">
              {skill.name}
            </span>
          </div>

          {/* Clean indicator of unique questions in this chapter */}
          <div className="flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-[#2452FF]"></span>
            <span className="text-[11px] font-bold text-[#2452FF]">
              Question {currentQuestionIdx + 1} sur {questions.length} (Sans répétition)
            </span>
          </div>
        </div>

        {/* Phase milestone & XP header */}
        <div className="flex items-center justify-between text-xs pt-1">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${phaseInfo.color}`}>
            {phaseInfo.title}
          </span>

          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${diffBadge.bg} ${diffBadge.text} ${diffBadge.border}`}>
              {currentQuestion.difficultyLabel || `Niveau ${currentQuestion.difficulty}/5`}
            </span>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-200">
              <Zap className="w-3 h-3 fill-amber-500" />
              +30 XP
            </span>
          </div>
        </div>

        {/* Responsive Segmented Progress Bar (15 questions scaled smoothly) */}
        <div className="flex gap-1 sm:gap-1.5 w-full">
          {questions.map((q, idx) => {
            let bgClass = "bg-slate-200";
            if (idx < currentQuestionIdx) {
              const logItem = answersLog[idx];
              bgClass = logItem?.isCorrect ? "bg-emerald-500" : "bg-rose-400";
            } else if (idx === currentQuestionIdx) {
              bgClass = "bg-[#2452FF] ring-2 ring-blue-300 animate-pulse";
            }
            return (
              <div 
                key={idx} 
                className={`flex-1 h-2 sm:h-2.5 rounded-full transition-all duration-300 ${bgClass}`}
                title={`Question ${idx + 1}/${questions.length} (Niveau ${q.difficulty}/5)`}
              />
            );
          })}
        </div>
      </div>

      {/* Mimo-style Micro-Concept Callout Banner (Bite-sized rule before answering) */}
      {currentQuestion.microConcept && (
        <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-white rounded-2xl p-4 border border-blue-200/80 shadow-xs">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-blue-100 text-[#2452FF] flex items-center justify-center shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2452FF] block">
                  Rappel Clé de Cours (Micro-Concept)
                </span>
                {showConcept && (
                  <p className="text-xs text-slate-700 font-medium mt-1 leading-relaxed">
                    {currentQuestion.microConcept}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => setShowConcept(!showConcept)}
              className="text-slate-400 hover:text-slate-600 p-1 transition-colors"
              title={showConcept ? "Masquer le concept" : "Afficher le concept"}
            >
              {showConcept ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}

      {/* Main Question Card with Duolingo-style Mascot */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xs space-y-5">
        <div>
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">
              Question {currentQuestionIdx + 1} sur {questions.length} • {
                currentQuestion.type === 'mcq' 
                  ? 'Choix Multiple' 
                  : currentQuestion.type === 'true_false' 
                    ? 'Vrai / Faux' 
                    : 'Valeur Numérique'
              }
            </span>

            <div className="flex items-center gap-2">
              {onOpenMascotSelector && (
                <button
                  onClick={onOpenMascotSelector}
                  className="text-xs font-bold text-slate-600 hover:text-[#2452FF] bg-slate-50 hover:bg-blue-50 border border-slate-200 px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Changer de compagnon animé"
                >
                  <span>{currentMascot.badge}</span>
                  <span className="hidden sm:inline">{currentMascotDisplayName}</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </button>
              )}

              {/* Hint Button */}
              {currentQuestion.hint && !isSubmitted && (
                <button
                  id="btn-toggle-hint"
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/70 border border-amber-200/80 px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors font-medium cursor-pointer"
                >
                  <Lightbulb className="w-3.5 h-3.5 fill-amber-400 text-amber-600" />
                  {showHint ? "Masquer l'indice" : "Besoin d'un indice ?"}
                </button>
              )}
            </div>
          </div>

          {/* Mascot & Duolingo Speech Dialogue Stage */}
          <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-slate-50/90 to-blue-50/20 border border-slate-200/80">
            <div className="shrink-0 flex flex-col items-center">
              <MascotCharacter
                mascotId={mascotId}
                customization={customization}
                mood={mascotMood}
                size="sm"
                showSpeechBubble={false}
                interactive={true}
                showAudioToggle={true}
              />
            </div>

            <div className="flex-1 w-full space-y-2">
              <div className={`p-3 rounded-xl border text-xs transition-all ${
                isSubmitted && isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                  : isSubmitted && !isCorrect
                    ? 'bg-rose-50 border-rose-300 text-rose-950 font-medium'
                    : selectedOption || numericAnswer.trim()
                      ? 'bg-blue-50/80 border-blue-200 text-blue-950 font-medium'
                      : 'bg-white border-slate-200 text-slate-700'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {currentMascot.name} ({currentMascot.species}) :
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Clique sur le compagnon pour l'animer !
                  </span>
                </div>
                <p className="mt-1 font-bold text-sm leading-snug">
                  {isSubmitted && isCorrect
                    ? (failedAttemptsCount === 0
                        ? '✓ Extraordinaire ! Validé du premier coup avec brio (+30 XP) !'
                        : '✓ Bravo pour ta persévérance ! La correction est validée (+15 XP) !')
                    : isSubmitted && !isCorrect
                      ? "Ne baisse pas les bras ! Relis l'explication et retente, tu vas y arriver !"
                      : selectedOption || numericAnswer.trim()
                        ? "Ce choix te paraît solide ? Clique sur 'Vérifier ma réponse' pour tester !"
                        : showHint
                          ? "Prends ton temps pour lire l'indice, il te guide vers la solution !"
                          : (currentMascot.dialogues.idle[currentQuestionIdx % currentMascot.dialogues.idle.length] || '').replace(/\{name\}/g, customization?.name || 'Moussa')}
                </p>
              </div>

              {/* Prompt */}
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 pt-1 leading-relaxed">
                {currentQuestion.prompt}
              </h3>
            </div>
          </div>
        </div>

        {/* Hint Display */}
        {showHint && currentQuestion.hint && !isSubmitted && (
          <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1">
            <div className="font-bold flex items-center gap-1 text-amber-800">
              <Lightbulb className="w-3.5 h-3.5 fill-amber-400" />
              Indice pédagogique :
            </div>
            <p className="leading-relaxed">{currentQuestion.hint}</p>
          </div>
        )}

        {/* Options & Input Area */}
        <div className="space-y-3 pt-2">
          {/* MCQ and True/False */}
          {(currentQuestion.type === 'mcq' || currentQuestion.type === 'true_false') && (
            <div className="space-y-2.5">
              {currentQuestion.options?.map((opt, optIdx) => {
                const isSelected = selectedOption === opt;
                const wasPreviouslyTestedAndFailed = failedOptions.includes(opt);
                let btnStyle = "border-slate-200 hover:border-slate-300 bg-white text-slate-700";

                if (isSubmitted) {
                  if (opt === String(currentQuestion.correctAnswer)) {
                    btnStyle = "border-emerald-500 bg-emerald-50/80 text-emerald-900 font-semibold";
                  } else if (isSelected) {
                    btnStyle = "border-rose-400 bg-rose-50/80 text-rose-900";
                  } else {
                    btnStyle = "border-slate-100 bg-slate-50/40 text-slate-400 opacity-60";
                  }
                } else if (wasPreviouslyTestedAndFailed) {
                  btnStyle = "border-rose-200 bg-rose-50/40 text-rose-400 line-through opacity-70 cursor-not-allowed";
                } else if (isSelected) {
                  btnStyle = "border-[#2452FF] bg-blue-50/70 text-[#2452FF] font-semibold ring-1 ring-[#2452FF]";
                }

                return (
                  <button
                    key={optIdx}
                    id={`opt-choice-${optIdx}`}
                    disabled={isSubmitted || wasPreviouslyTestedAndFailed}
                    onClick={() => setSelectedOption(opt)}
                    className={`w-full p-4 rounded-2xl border text-left text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="leading-snug">{opt}</span>
                      {wasPreviouslyTestedAndFailed && !isSubmitted && (
                        <span className="text-[10px] font-bold text-rose-600 no-underline bg-rose-100 px-2 py-0.5 rounded-md border border-rose-200 shrink-0">
                          ✗ Déjà testé (incorrect)
                        </span>
                      )}
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#2452FF] bg-[#2452FF] text-white' : 'border-slate-300'
                    }`}>
                      {isSubmitted && opt === String(currentQuestion.correctAnswer) ? (
                        <Check className="w-3 h-3 stroke-[3]" />
                      ) : isSelected ? (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Numeric Input */}
          {currentQuestion.type === 'numeric' && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 block">
                Saisissez votre réponse numérique (valeur exacte ou décimale) :
              </label>
              <div className="relative">
                <input
                  id="input-numeric-answer"
                  type="text"
                  disabled={isSubmitted}
                  value={numericAnswer}
                  onChange={(e) => setNumericAnswer(e.target.value)}
                  placeholder="Ex : -3, 0.5, 4..."
                  className={`w-full p-4 rounded-2xl border text-base font-semibold outline-none transition-all ${
                    isSubmitted
                      ? isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-rose-400 bg-rose-50 text-rose-900'
                      : 'border-slate-200 focus:border-[#2452FF] focus:ring-2 focus:ring-blue-100'
                  }`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Feedback block after validation */}
        {isSubmitted && (
          <div className={`p-4 rounded-2xl border text-xs space-y-3 ${
            isCorrect 
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' 
              : 'bg-rose-50/70 border-rose-200 text-rose-950'
          }`}>
            <div className="flex items-center gap-2 font-bold text-sm">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700">
                    {failedAttemptsCount === 0 
                      ? '✓ Question validée du premier coup (+30 XP)' 
                      : '✓ Question validée après correction (+15 XP)'}
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-rose-700">
                    ✗ Réponse incorrecte — Question non validée
                  </span>
                </>
              )}
            </div>

            {/* Mandatory rule warning when incorrect */}
            {!isCorrect && (
              <div className="p-2.5 rounded-xl bg-white border border-rose-200 text-rose-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold block">Règle pédagogique obligatoire :</span>
                  <span>Tant que cette question n'est pas validée, vous ne pouvez pas avancer. Corrigez votre choix pour continuer !</span>
                </div>
              </div>
            )}

            {/* Error trap reminder */}
            {!isCorrect && currentQuestion.commonMistake && (
              <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-950 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Indication sur votre erreur :</span>
                  <span>{currentQuestion.commonMistake}</span>
                </div>
              </div>
            )}

            {/* Clear explanation when correct */}
            {isCorrect && (
              <div className="space-y-1.5 pt-1">
                <span className="font-bold text-slate-800 block">Explication détaillée :</span>
                <p className="text-slate-700 leading-relaxed">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Step by step when correct */}
            {isCorrect && currentQuestion.steps && currentQuestion.steps.length > 0 && (
              <div className="space-y-1 pt-1 border-t border-slate-200/50">
                <span className="font-bold text-slate-800 block">Étapes de résolution :</span>
                <ul className="space-y-1 text-slate-600 pl-1">
                  {currentQuestion.steps.map((step, sIdx) => (
                    <li key={sIdx} className="leading-relaxed">{step}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Action Button: Strict flow - NO NEXT BUTTON IF NOT VALIDATED */}
        <div className="pt-2">
          {!isSubmitted ? (
            <button
              id="btn-verify-answer"
              disabled={
                (currentQuestion.type === 'mcq' || currentQuestion.type === 'true_false') 
                  ? !selectedOption 
                  : !numericAnswer.trim()
              }
              onClick={handleVerify}
              className="w-full py-4 rounded-2xl bg-[#2452FF] hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm shadow-md shadow-blue-500/20 disabled:shadow-none transition-all flex items-center justify-center gap-2"
            >
              Vérifier ma réponse
            </button>
          ) : !isCorrect ? (
            /* USER CANNOT ADVANCE WHEN WRONG: They must retry the question! */
            <button
              id="btn-retry-question"
              onClick={handleRetryQuestion}
              className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Réessayer cette question (Corriger mon choix)
            </button>
          ) : (
            /* ONLY WHEN VALIDATED: User can proceed to the next question */
            <button
              id="btn-next-question"
              onClick={handleNext}
              className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              {currentQuestionIdx + 1 < questions.length ? (
                <>
                  Question suivante ({currentQuestionIdx + 2}/{questions.length})
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Terminer la série et valider les acquis
                  <Award className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
