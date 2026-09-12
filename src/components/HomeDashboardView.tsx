import React, { useState } from 'react';
import { 
  Flame, 
  Zap, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  Play, 
  Award, 
  Sparkles,
  Target,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Lock,
  Star,
  GraduationCap
} from 'lucide-react';
import { Subject, UserProfile, SkillNode } from '../types';
import { MascotId } from './mascot/mascotData';
import { AvatarCustomization } from './mascot/avatarTypes';
import { MascotCompanionCard } from './mascot/MascotCompanionCard';
import { PhilosophySynthesisModal } from './PhilosophySynthesisModal';
import { ComputerScienceSynthesisModal } from './ComputerScienceSynthesisModal';
import { PremiereABMathSynthesisModal } from './PremiereABMathSynthesisModal';
import { WeeklyChallengeCard } from './WeeklyChallengeCard';
import { Terminal, Calculator } from 'lucide-react';

interface HomeDashboardViewProps {
  user: UserProfile;
  subjects: Subject[];
  skills: SkillNode[];
  selectedSubjectId: string;
  onSelectSubject: (id: string) => void;
  onStartExercise: (skillId: string) => void;
  onNavigateToSkills: () => void;
  mascotId?: MascotId;
  customization?: AvatarCustomization;
  onOpenAvatarCustomizer?: (mode?: 'wizard' | 'studio') => void;
  validatedSkillsCount?: number;
  totalSkillsCount?: number;
  isLevelCompleted?: boolean;
  onPromoteNextLevel?: () => void;
  onClaimWeeklyBonus?: (bonusXp: number, challengeTitle: string) => void;
}

export const HomeDashboardView: React.FC<HomeDashboardViewProps> = ({
  user,
  subjects,
  skills,
  selectedSubjectId,
  onSelectSubject,
  onStartExercise,
  onNavigateToSkills,
  mascotId = 'avatar',
  customization,
  onOpenAvatarCustomizer,
  validatedSkillsCount = 0,
  totalSkillsCount = 0,
  isLevelCompleted = false,
  onPromoteNextLevel,
  onClaimWeeklyBonus,
}) => {
  const [isPhiloModalOpen, setIsPhiloModalOpen] = useState(false);
  const [isCSModalOpen, setIsCSModalOpen] = useState(false);
  const [isMathABModalOpen, setIsMathABModalOpen] = useState(false);
  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const nextSkillToLearn = skills.find(s => s.status === 'in_progress' || s.status === 'available') || skills[0];

  // Academic level calculation
  const academicLevel = Math.floor(user.totalXp / 150) + 1;
  const xpInCurrentLevel = user.totalXp % 150;
  const levelTitles = [
    'Initié Curieux',
    'Explorateur Méthodique',
    'Pratiquant Assidu',
    'Bâtisseur de Savoir',
    'Maître des Fondamentaux',
    'Candidat Mention Très Bien'
  ];
  const currentTitle = levelTitles[Math.min(academicLevel - 1, levelTitles.length - 1)];

  // Daily goal calculation (50 XP standard target)
  const dailyTargetXp = 50;
  const dailyProgressXp = Math.min(dailyTargetXp, (user.totalXp % dailyTargetXp) || 35);
  const dailyPercent = Math.round((dailyProgressXp / dailyTargetXp) * 100);

  // 7-day streak track (Monday to Sunday)
  const weekDays = [
    { day: 'Lun', done: true },
    { day: 'Mar', done: true },
    { day: 'Mer', done: true },
    { day: 'Jeu', done: user.streakDays >= 4, active: true },
    { day: 'Ven', done: user.streakDays >= 5 },
    { day: 'Sam', done: user.streakDays >= 6 },
    { day: 'Dim', done: user.streakDays >= 7 },
  ];

  // What will be unlocked after this skill
  const currentSkillIndex = skills.findIndex(s => s.id === nextSkillToLearn?.id);
  const nextUnlockableSkill = currentSkillIndex >= 0 && currentSkillIndex + 1 < skills.length
    ? skills[currentSkillIndex + 1]
    : null;

  return (
    <div className="space-y-6">
      {/* Hero Welcome Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="absolute right-0 top-0 w-80 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2452FF] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Programme Officiel du Gabon • {user.currentClass}
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Bonjour {user.name} 👋 Prêt à valider une compétence ?
          </h2>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
            Établissement : <strong className="text-slate-800">{user.schoolName || 'Lycée National Léon Mba'}</strong>. Chaque exercice réussi contribue directement à votre score de maîtrise calculé par l'Axiom Progress Engine.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <div className="px-4 py-3 rounded-2xl border border-blue-200/80 bg-white/95 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2452FF] flex items-center justify-center border border-blue-200 shrink-0">
              <GraduationCap className="w-4 h-4 text-[#2452FF]" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <span>Classe active</span>
              </div>
              <div className="text-xs font-black text-slate-900">
                {user.currentClass}
              </div>
              <div className="text-[11px] font-semibold text-[#2452FF] mt-0.5">
                {validatedSkillsCount} / {totalSkillsCount} notions validées
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level Completion & Promotion Celebration Banner */}
      {isLevelCompleted && onPromoteNextLevel && (
        <div className="p-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-400/30">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl shrink-0 shadow-inner">
              🎓
            </div>
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/40 text-emerald-100 text-[10px] font-bold uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-3 h-3" /> Toutes les matières validées
              </div>
              <h3 className="font-heading font-extrabold text-lg">
                Félicitations ! Programme de {user.currentClass} achevé !
              </h3>
              <p className="text-xs text-emerald-100 max-w-xl">
                Tu as validé 100% des chapitres requis. Tu débloques officiellement l'accès à la classe supérieure !
              </p>
            </div>
          </div>
          <button
            onClick={onPromoteNextLevel}
            className="px-5 py-3 rounded-2xl bg-white text-emerald-800 hover:bg-emerald-50 font-black text-xs transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Passer en classe supérieure</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Student Personal Avatar Card */}
      <MascotCompanionCard
        mascotId="avatar"
        customization={customization}
        streakDays={user.streakDays}
        onOpenCustomizer={onOpenAvatarCustomizer}
      />

      {/* Axiom Pedagogical Cycle Banner */}
      <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-slate-50 rounded-2xl p-4 border border-blue-200/70 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-[#2452FF] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              A
            </div>
            <div>
              <span className="font-heading font-extrabold text-xs text-slate-900 block">
                Le Cycle Pédagogique Axiom Academy
              </span>
              <span className="text-[11px] text-slate-500">
                Progression pas-à-pas : Apprendre → Pratiquer → Réussir → Valider
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-semibold text-slate-600 no-scrollbar py-1">
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[#2452FF] font-bold">1. Matière</span>
            <span className="text-slate-300">→</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">2. Chapitre</span>
            <span className="text-slate-300">→</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">3. Micro-Concept</span>
            <span className="text-slate-300">→</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-emerald-700 font-bold">4. 15 Exercices</span>
            <span className="text-slate-300">→</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-indigo-700 font-bold">5. Maîtrise & Validation</span>
          </div>
        </div>
      </div>

      {/* Flagship Weekly Curriculum Challenge (Gabon 1ère A1 / B) */}
      <WeeklyChallengeCard
        user={user}
        skills={skills}
        onStartExercise={onStartExercise}
        onClaimBonus={onClaimWeeklyBonus}
      />

      {/* Two columns: Daily Learning Mission & 7-Day Streak + Priority Skill to Validate */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Objectif du Jour & Série d'Apprentissage */}
        <div className="bg-gradient-to-br from-[#1b3bb8] via-[#2452FF] to-indigo-700 text-white rounded-3xl p-6 shadow-md md:col-span-1 flex flex-col justify-between space-y-5">
          <div>
            {/* Header with XP bounty */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider text-white">
                Objectif du Jour
              </span>
              <div className="flex items-center gap-1 font-bold text-xs bg-black/25 px-2.5 py-1 rounded-full text-amber-300">
                <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                +50 XP
              </div>
            </div>

            <h3 className="font-heading text-lg font-bold mb-1 text-white">
              Entraînement Quotidien
            </h3>
            <p className="text-blue-100 text-xs leading-relaxed mb-4">
              Complétez 15 questions calibrées pour consolider votre série et accumuler vos Points Axiom.
            </p>

            {/* Daily XP Gauge */}
            <div className="bg-white/15 p-3 rounded-2xl space-y-1.5 backdrop-blur-xs mb-4">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-blue-100">Points Axiom du jour</span>
                <span className="font-bold text-white">{dailyProgressXp} / {dailyTargetXp} XP</span>
              </div>
              <div className="w-full h-2.5 bg-black/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-amber-400 to-amber-300 rounded-full transition-all duration-500 shadow-xs" 
                  style={{ width: `${dailyPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-blue-200">
                <span>{dailyPercent}% complété</span>
                <span>{dailyPercent >= 100 ? '🎉 Objectif atteint !' : 'Encore 1 exercice'}</span>
              </div>
            </div>

            {/* 7-Day Visual Streak Track */}
            <div className="bg-black/20 p-3 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold flex items-center gap-1 text-emerald-300">
                  <Flame className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  Série d'apprentissage
                </span>
                <span className="font-extrabold text-white text-xs">
                  {user.streakDays} jours d'affilée
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center pt-1">
                {weekDays.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`py-1 rounded-xl flex flex-col items-center justify-center transition-all ${
                      item.done 
                        ? 'bg-emerald-500/30 text-white font-bold border border-emerald-400/40' 
                        : item.active
                        ? 'bg-white/30 text-white font-extrabold border border-white'
                        : 'bg-white/5 text-blue-200'
                    }`}
                  >
                    <span className="text-[9px] uppercase">{item.day}</span>
                    <span className="text-[11px] mt-0.5">
                      {item.done ? '🔥' : item.active ? '⚡' : '·'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            id="btn-start-daily-mission"
            onClick={() => onStartExercise(nextSkillToLearn.id)}
            className="w-full py-3 bg-white text-[#2452FF] hover:bg-blue-50 rounded-2xl font-extrabold text-xs shadow-md shadow-blue-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Lancer l'entraînement du jour
          </button>
        </div>

        {/* Prochaine Compétence & Prévisualisation */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs md:col-span-2 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#2452FF] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Compétence Prioritaire en Cours
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#2452FF] text-xs font-bold border border-blue-200">
                Palier : {nextSkillToLearn.tier} ({nextSkillToLearn.masteryScore}%)
              </span>
            </div>

            <h3 className="font-heading text-xl font-extrabold text-slate-900 mb-1">
              {nextSkillToLearn.name}
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              {nextSkillToLearn.description}
            </p>

            {/* Score progress bar */}
            <div className="space-y-1.5 mb-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Maîtrise actuelle</span>
                <span className="font-extrabold text-slate-900">{nextSkillToLearn.masteryScore} / 100</span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-[#2452FF] to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${nextSkillToLearn.masteryScore}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>0% Non commencée</span>
                <span className="font-bold text-emerald-600">60% Seuil Acquis</span>
                <span className="font-bold text-amber-600">95% Excellence</span>
              </div>
            </div>

            {/* Unlocking Preview */}
            {nextUnlockableSkill ? (
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Prochaine étape du programme
                    </span>
                    <span className="font-bold text-slate-800">
                      Débloquera : {nextUnlockableSkill.name}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                  Dès 60%
                </span>
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-center gap-2.5 text-xs text-blue-900">
                <Trophy className="w-4 h-4 text-[#2452FF] shrink-0" />
                <span>Vous êtes sur le dernier chapitre de ce module du programme officiel gabonais !</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-slate-100">
            <button
              id="btn-launch-exercise"
              onClick={() => onStartExercise(nextSkillToLearn.id)}
              className="flex-1 py-3 px-4 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              Lancer la session d'exercices (15 questions)
            </button>
            <button
              id="btn-view-skill-tree"
              onClick={onNavigateToSkills}
              className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Voir le parcours de compétences
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Daily Challenges Section (Défis Quotidiens Axiom) */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h3 className="font-heading text-lg font-bold text-slate-900">
              Défis Pédagogiques du Jour
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Renouvelés chaque jour à minuit
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Challenge 1 */}
          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                  Défi Précision
                </span>
                <span className="text-xs font-bold text-amber-700 bg-white px-2 py-0.5 rounded-full border border-amber-200">
                  +30 XP
                </span>
              </div>
              <h4 className="font-heading font-bold text-xs text-slate-900">
                Sans-faute Fondations
              </h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Répondez juste du 1er coup aux 5 premières questions d'une session.
              </p>
            </div>
            <div className="w-full bg-amber-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full rounded-full w-3/5" />
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/80 flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2452FF]">
                  Défi Régularité
                </span>
                <span className="text-xs font-bold text-[#2452FF] bg-white px-2 py-0.5 rounded-full border border-blue-200">
                  +40 XP
                </span>
              </div>
              <h4 className="font-heading font-bold text-xs text-slate-900">
                Série 3 Jours Consécutifs
              </h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Connectez-vous et pratiquez 3 jours d'affilée sur Axiom Academy.
              </p>
            </div>
            <div className="w-full bg-blue-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#2452FF] h-full rounded-full w-full" />
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                  Défi Maîtrise
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                  +50 XP
                </span>
              </div>
              <h4 className="font-heading font-bold text-xs text-slate-900">
                Nouveau Palier Validé
              </h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Passez un chapitre au palier « Acquise » (score ≥ 60%).
              </p>
            </div>
            <div className="w-full bg-emerald-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full w-4/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Terminale Philosophy Highlight Banner */}
      {(user.currentClass.includes('Terminale') || skills.some(s => s.subjectId === 'philo')) && (
        <div className="p-5 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white border border-indigo-500/30 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-2xl shrink-0">
              🧠
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Gabon • Philosophie (1ère & Terminale)
              </div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
                Philosophie : Programme Annuel sur 9 Mois & Méthodologie Bac
              </h3>
              <p className="text-xs text-indigo-200/90 max-w-xl">
                Consultez le calendrier des 9 mois officiels, le mémento des notions (problèmes, arguments, citations clés) et la méthode des 3 sujets type Bac (Question, Citation, Texte).
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-stretch sm:self-auto shrink-0">
            <button
              onClick={() => setIsPhiloModalOpen(true)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ouvrir le mémento</span>
            </button>
            <button
              onClick={() => {
                onSelectSubject('philo');
                onNavigateToSkills();
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/20"
            >
              <span>Voir les 17 chapitres</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Featured Informatique & Python Progression Banner (2nde • 1ère • Terminale) */}
      <div className="p-5 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl shadow-md border border-teal-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 text-2xl shadow-inner shrink-0">
            💻
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/30 text-teal-200 text-[10px] font-extrabold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Programme Officiel Gabon • 2nde • 1ère • Terminale
            </div>
            <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
              Informatique & Algorithmique Python
            </h3>
            <p className="text-xs text-teal-200/90 max-w-xl">
              {user.currentClass.includes('2nde') 
                ? 'Seconde : Initiation à la logique, variables, types int/float/str, calculs mathématiques et entrées/sorties.'
                : user.currentClass.includes('1') 
                  ? 'Première : Approfondissement et modularité, conditions if/else, boucles for/while, fonctions def et listes.'
                  : 'Terminale : Algorithmes avancés, structures complexes (piles/files/dicos), tris, récursivité et complexité.'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-stretch sm:self-auto shrink-0">
          <button
            onClick={() => setIsCSModalOpen(true)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <Terminal className="w-4 h-4" />
            <span>Guide Python & Tris</span>
          </button>
          <button
            onClick={() => {
              onSelectSubject('cs');
              onNavigateToSkills();
            }}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/20"
          >
            <span>Modules de {user.currentClass}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Featured Mathématiques 1ère A1 & 1ère B Progression Banner (Gabon 29 Séquences) */}
      {(user.currentClass.includes('Première') || skills.some(s => s.id.startsWith('skill-1ab-m-'))) && (
        <div className="p-5 bg-gradient-to-r from-blue-950 via-indigo-900 to-sky-950 text-white rounded-3xl shadow-md border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-200 text-2xl shadow-inner shrink-0">
              📐
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Gabon • Progression Nationale (29 Séquences)
              </div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
                Mathématiques : 1ère A1 & 1ère B (3 Trimestres)
              </h3>
              <p className="text-xs text-blue-200/90 max-w-xl">
                Parcours unifié des 29 séquences officielles : Second degré, Dénombrement, Probabilités conditionnelles, Suites, Dérivation et Statistiques avec formulaire interactif.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-stretch sm:self-auto shrink-0">
            <button
              onClick={() => setIsMathABModalOpen(true)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Calculator className="w-4 h-4" />
              <span>Consulter les 29 séquences</span>
            </button>
            <button
              onClick={() => {
                onSelectSubject('math');
                onNavigateToSkills();
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/20"
            >
              <span>Exercices & Évaluations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Subject Library Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-bold text-slate-900">
            Matières au Programme (Gabon)
          </h3>
          <span className="text-xs text-slate-500">
            {subjects.length} matières branchées sur le moteur Axiom
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {subjects.map(subj => {
            const isSelected = subj.id === selectedSubjectId;
            return (
              <button
                key={subj.id}
                id={`btn-subject-${subj.id}`}
                onClick={() => onSelectSubject(subj.id)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group cursor-pointer ${
                  isSelected 
                    ? 'border-[#2452FF] bg-blue-50/50 shadow-xs ring-2 ring-[#2452FF]/20' 
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div 
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-xs mb-3 shadow-xs"
                  style={{ backgroundColor: subj.color }}
                >
                  {subj.name.slice(0, 2).toUpperCase()}
                </div>
                <h4 className="font-heading font-bold text-sm text-slate-900 group-hover:text-[#2452FF] transition-colors line-clamp-1">
                  {subj.name}
                </h4>
                {(() => {
                  const classCount = skills.filter(s => s.subjectId === subj.id).length;
                  return (
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {classCount > 0 ? `${classCount} chapitres` : `${subj.totalSkills} compétences`}
                    </p>
                  );
                })()}
                <div className="mt-2 flex items-center text-[10px] font-semibold text-[#2452FF]">
                  Explorer <ChevronRight className="w-3 h-3 ml-0.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal Memento de Philosophie */}
      <PhilosophySynthesisModal
        isOpen={isPhiloModalOpen}
        onClose={() => setIsPhiloModalOpen(false)}
        onSelectNotionSkill={(skillId) => {
          onSelectSubject('philo');
          onStartExercise(skillId);
          setIsPhiloModalOpen(false);
        }}
      />

      {/* Modal Guide Progression Informatique & Python */}
      <ComputerScienceSynthesisModal
        isOpen={isCSModalOpen}
        onClose={() => setIsCSModalOpen(false)}
        onSelectSkill={(skillId) => {
          onSelectSubject('cs');
          onStartExercise(skillId);
          setIsCSModalOpen(false);
        }}
        currentLevel={user.currentClass}
      />

      {/* Modal Mathématiques 1ère A1 & 1ère B (29 Séquences Gabon) */}
      <PremiereABMathSynthesisModal
        isOpen={isMathABModalOpen}
        onClose={() => setIsMathABModalOpen(false)}
        onSelectSequenceSkill={(skillId) => {
          onSelectSubject('math');
          onStartExercise(skillId);
          setIsMathABModalOpen(false);
        }}
      />
    </div>
  );
};
