import React from 'react';
import { 
  Flame, 
  Zap, 
  BookOpen, 
  ChevronRight, 
  CheckCircle, 
  Play, 
  Award, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Subject, UserProfile, SkillNode } from '../types';
import { MascotId } from './mascot/mascotData';
import { AvatarCustomization } from './mascot/avatarTypes';
import { MascotCompanionCard } from './mascot/MascotCompanionCard';

interface HomeDashboardViewProps {
  user: UserProfile;
  subjects: Subject[];
  skills: SkillNode[];
  selectedSubjectId: string;
  onSelectSubject: (id: string) => void;
  onStartExercise: (skillId: string) => void;
  onNavigateToSkills: () => void;
  onOpenOnboarding?: () => void;
  mascotId?: MascotId;
  onOpenMascotSelector?: () => void;
  customization?: AvatarCustomization;
  onOpenAvatarCustomizer?: (mode?: 'wizard' | 'studio') => void;
}

export const HomeDashboardView: React.FC<HomeDashboardViewProps> = ({
  user,
  subjects,
  skills,
  selectedSubjectId,
  onSelectSubject,
  onStartExercise,
  onNavigateToSkills,
  onOpenOnboarding,
  mascotId = 'avatar',
  onOpenMascotSelector,
  customization,
  onOpenAvatarCustomizer,
}) => {
  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const nextSkillToLearn = skills.find(s => s.status === 'in_progress' || s.status === 'available') || skills[0];

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

        {onOpenOnboarding && (
          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenOnboarding}
              className="px-4 py-2.5 rounded-2xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-[#2452FF] text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Changer de classe (2nde à Tle)</span>
              <span className="text-xs">🔄</span>
            </button>
          </div>
        )}
      </div>

      {/* Duolingo-style Animated Mascot Companion Card */}
      {onOpenMascotSelector && (
        <MascotCompanionCard
          mascotId={mascotId}
          customization={customization}
          streakDays={user.streakDays}
          onOpenSelector={onOpenMascotSelector}
          onOpenCustomizer={onOpenAvatarCustomizer}
        />
      )}

      {/* Two columns: Daily Mission + Quick Continue */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mission du jour */}
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 text-white rounded-3xl p-6 shadow-md md:col-span-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
                Mission du Jour
              </span>
              <div className="flex items-center gap-1 font-bold text-sm bg-black/20 px-2.5 py-1 rounded-full">
                <Zap className="w-4 h-4 fill-white text-white" />
                +50 XP
              </div>
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">
              {nextSkillToLearn?.name || 'Objectif du Jour'}
            </h3>
            <p className="text-amber-100 text-xs leading-relaxed mb-4">
              Complétez la série d'exercices progressifs (Niveau 1 à 5) pour consolider votre maîtrise.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white/15 p-2 rounded-xl">
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Progression</span>
                <span>1 / 2 validé</span>
              </div>
              <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-1/2" />
              </div>
            </div>
            <button
              id="btn-start-daily-mission"
              onClick={() => onStartExercise(nextSkillToLearn.id)}
              className="w-full py-2.5 bg-white text-amber-700 hover:bg-amber-50 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Continuer la mission
            </button>
          </div>
        </div>

        {/* Prochaine Compétence à Valider */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#2452FF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Compétence en cours
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#2452FF] text-xs font-semibold border border-blue-200">
                Palier : {nextSkillToLearn.tier} ({nextSkillToLearn.masteryScore}%)
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
              {nextSkillToLearn.name}
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              {nextSkillToLearn.description}
            </p>

            {/* Score progress bar */}
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between text-xs font-medium text-slate-600">
                <span>Score de maîtrise actuel</span>
                <span className="font-bold text-slate-900">{nextSkillToLearn.masteryScore} / 100</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div 
                  className="h-full bg-gradient-to-r from-[#2452FF] to-blue-400 rounded-full transition-all duration-500"
                  style={{ width: `${nextSkillToLearn.masteryScore}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Non commencée (0%)</span>
                <span>Seuil Acquis (60%)</span>
                <span>Excellence (95%)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-100">
            <button
              id="btn-launch-exercise"
              onClick={() => onStartExercise(nextSkillToLearn.id)}
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              Lancer la session d'exercices
            </button>
            <button
              id="btn-view-skill-tree"
              onClick={onNavigateToSkills}
              className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
            >
              Voir la carte de compétences
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Subject Library Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-bold text-slate-900">
            Matières au Programme (Gabon)
          </h3>
          <span className="text-xs text-slate-500">
            {subjects.length} matières branchées sur le moteur générique
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
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
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
    </div>
  );
};
