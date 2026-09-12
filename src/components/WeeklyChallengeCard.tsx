import React, { useState } from 'react';
import { 
  Trophy, 
  Sparkles, 
  Timer, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  Award, 
  Flame, 
  Target, 
  ChevronRight,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { UserProfile, SkillNode } from '../types';
import { 
  getActiveWeeklyChallenge, 
  getCurrentSchoolWeekInfo, 
  setWeeklyChallengeClaimed,
  WeeklyChallenge
} from '../data/axiomWeeklyChallenge';

interface WeeklyChallengeCardProps {
  user: UserProfile;
  skills: SkillNode[];
  onStartExercise: (skillId: string) => void;
  onClaimBonus?: (bonusXp: number, challengeTitle: string) => void;
}

export const WeeklyChallengeCard: React.FC<WeeklyChallengeCardProps> = ({
  user,
  skills,
  onStartExercise,
  onClaimBonus
}) => {
  const weekInfo = getCurrentSchoolWeekInfo();
  const { challenge, skill, isCompleted, isClaimed: initialClaimed } = getActiveWeeklyChallenge(user.classId, skills);
  const [claimed, setClaimed] = useState<boolean>(initialClaimed);
  const [showExplanationModal, setShowExplanationModal] = useState(false);

  const mastery = skill?.masteryScore || 0;
  const progressPercent = Math.min(100, Math.round((mastery / challenge.requiredMasteryScore) * 100));

  const handleClaim = () => {
    if (claimed || !isCompleted) return;
    setWeeklyChallengeClaimed(challenge.id, weekInfo.weekNumber);
    setClaimed(true);
    if (onClaimBonus) {
      onClaimBonus(challenge.xpBonus, challenge.title);
    }
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white p-5 sm:p-7 border border-indigo-500/30 shadow-xl">
        {/* Subtle decorative background glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-lg shadow-inner">
                ⚡
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Défi Hebdomadaire Officiel
                  </span>
                  <span className="text-xs font-semibold text-slate-300 hidden sm:inline">
                    {weekInfo.weekLabel}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white mt-0.5">
                  1 Séquence Clé par Semaine
                </h3>
              </div>
            </div>

            {/* Countdown Pill & Anti Copy-Paste Badge */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-blue-200">
                <Clock className="w-3.5 h-3.5 text-blue-300 animate-pulse" />
                <span>{weekInfo.timeRemainingText}</span>
              </div>
              <button
                onClick={() => setShowExplanationModal(true)}
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/15"
                title="Pourquoi ce défi & règlement chrono 10s ?"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left: Sequence details */}
            <div className="lg:col-span-7 space-y-3">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-200 font-bold border border-blue-400/30 text-[11px]">
                    {challenge.subjectName}
                  </span>
                  <span className="text-slate-400 font-medium text-[11px]">
                    {challenge.domain}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 font-bold border border-rose-400/30 text-[11px] flex items-center gap-1">
                    <Timer className="w-3 h-3" />
                    Chrono 10s / question (Anti-copie)
                  </span>
                </div>

                <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                  {challenge.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {challenge.description}
                </p>
              </div>

              {/* Anti-cheat and 10s rapid pace notice */}
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-[11px]">Règle du Défi Express :</strong>
                  <span className="text-[11px] text-slate-300 leading-snug">
                    Pour garantir l'acquisition de véritables automatismes, chaque question dispose d'un chrono de 10 secondes. Le copier-coller est bloqué pour vous entraîner dans les conditions réelles d'interrogation.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Progress & XP Bounty Box */}
            <div className="lg:col-span-5 bg-white/10 rounded-2xl p-4 sm:p-5 border border-white/15 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Récompense du Défi
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 animate-pulse">
                  <Zap className="w-3.5 h-3.5 fill-current text-slate-950" />
                  <span>+{challenge.xpBonus} XP BONUS</span>
                </div>
              </div>

              {/* Progress gauge */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Maîtrise de la séquence</span>
                  <span className="font-extrabold text-white">
                    {mastery}% / {challenge.requiredMasteryScore}% requis
                  </span>
                </div>
                <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div 
                    className={`h-full rounded-full transition-all duration-700 ${
                      isCompleted 
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-300 shadow-xs' 
                        : 'bg-gradient-to-r from-blue-400 to-[#2452FF]'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-300">
                  <span>Palier visé : {skill?.tier || 'Non commencée'}</span>
                  <span className="font-bold text-amber-300">
                    {isCompleted ? '✓ Objectif atteint !' : `${challenge.requiredMasteryScore - mastery}% restants`}
                  </span>
                </div>
              </div>

              {/* Interactive Buttons */}
              <div className="pt-1">
                {isCompleted ? (
                  claimed ? (
                    <div className="w-full py-3 px-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-bold flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Bonus +{challenge.xpBonus} XP réclamé ! Rendez-vous lundi pour la suite.</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleClaim}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Trophy className="w-4 h-4 text-slate-950 fill-current" />
                      <span>Réclamer mon Bonus (+{challenge.xpBonus} XP) !</span>
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => {
                      if (challenge.targetSkillId) {
                        onStartExercise(challenge.targetSkillId);
                      }
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#2452FF] hover:bg-blue-600 text-white font-black text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Relever le Défi Hebdomadaire (Chrono 10s)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pedagogical Explanation Modal */}
      {showExplanationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 text-slate-900"
            role="dialog"
          >
            <div className="p-5 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-heading font-extrabold text-base text-white">
                    Pourquoi les Défis Hebdomadaires ?
                  </h3>
                  <span className="text-xs text-blue-200">
                    Méthode pédagogique officielle de renforcement continu
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowExplanationModal(false)}
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 space-y-1">
                <strong className="text-blue-900 font-bold block text-sm">
                  1. Une régularité garantie au fil de l'année scolaire
                </strong>
                <p>
                  En validant une séquence officielle chaque semaine, vous couvrez l'intégralité du programme national gabonais sans retard ni surcharge avant les examens trimestriels ou le Baccalauréat.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                <strong className="text-rose-900 font-bold block text-sm flex items-center gap-1.5">
                  <Timer className="w-4 h-4 text-rose-600" />
                  2. Le Chrono de 10 Secondes & Règle Anti-Copie
                </strong>
                <p>
                  Pour que les notions deviennent de vrais réflexes, chaque question s'accompagne d'un décompte de 10 secondes. Le copier-coller et la recherche d'antisèche sur internet sont désactivés pour favoriser la rapidité mentale.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                <strong className="text-amber-900 font-bold block text-sm flex items-center gap-1.5">
                  <Zap className="w-4 h-4 fill-amber-500 text-amber-600" />
                  3. Un Méga Bonus de +{challenge.xpBonus} XP
                </strong>
                <p>
                  Atteindre le palier « Acquis » (≥ 60%) avant la fin de la semaine débloque le bonus massif d'XP qui fait bondir votre classement dans le tableau d'honneur du lycée.
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
              <button
                onClick={() => setShowExplanationModal(false)}
                className="px-5 py-2.5 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Compris, je relève le défi !
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
