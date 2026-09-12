import React from 'react';
import { 
  Award, 
  Flame, 
  Zap, 
  Target, 
  CheckCircle2, 
  Lock, 
  Crown, 
  Sparkles,
  Calendar,
  Layers,
  Smartphone,
  UserCheck
} from 'lucide-react';
import { UserProfile, BadgeItem, Subject } from '../types';

interface ProfileGamificationViewProps {
  user: UserProfile;
  badges: BadgeItem[];
  subjects: Subject[];
  validatedSkillsCount?: number;
  totalSkillsCount?: number;
  isLevelCompleted?: boolean;
  onPromoteNextLevel?: () => void;
  onOpenAccountSwitcher?: () => void;
}

export const ProfileGamificationView: React.FC<ProfileGamificationViewProps> = ({
  user,
  badges,
  subjects,
  validatedSkillsCount = 0,
  totalSkillsCount = 0,
  isLevelCompleted = false,
  onPromoteNextLevel,
  onOpenAccountSwitcher,
}) => {
  const currentLevel = Math.floor(user.totalXp / 250) + 1;
  const xpInCurrentLevel = user.totalXp % 250;

  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2452FF] to-blue-400 text-white flex items-center justify-center font-heading font-black text-2xl shadow-md shadow-blue-500/20">
            {user.name.slice(0, 1)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                {user.name}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2452FF] text-xs font-semibold border border-blue-200 flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#2452FF]" />
                {user.currentClass}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-xs text-slate-500">
                {user.email}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                Compte Élève
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                ID : #AX-{user.id.toUpperCase()}-{user.classId.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
              <span>{user.schoolName || 'Lycée National Léon Mba'}</span>
              <span>•</span>
              <span className="font-semibold text-slate-700">{validatedSkillsCount}/{totalSkillsCount} notions validées</span>
            </p>

            {onOpenAccountSwitcher && (
              <div className="mt-2.5">
                <button
                  id="btn-profile-switch-account"
                  onClick={onOpenAccountSwitcher}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#2452FF] text-xs font-bold border border-slate-200 transition-colors cursor-pointer shadow-2xs active:scale-98"
                >
                  <UserCheck className="w-3.5 h-3.5 text-[#2452FF]" />
                  <span>Changer de compte</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Level Banner */}
        <div className="flex items-center gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 w-full md:w-auto">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Niveau Académique
            </span>
            <span className="font-heading font-extrabold text-xl text-slate-900">
              Niveau {currentLevel}
            </span>
            <div className="w-36 h-2 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
              <div 
                className="h-full bg-[#FFC93C] rounded-full"
                style={{ width: `${(xpInCurrentLevel / 250) * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">
              {xpInCurrentLevel} / 250 XP vers Niv. {currentLevel + 1}
            </span>
          </div>

          <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-600 font-bold text-lg font-heading">
                <Flame className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                {user.streakDays}
              </div>
              <span className="text-[10px] text-slate-500">Jours de série</span>
            </div>
            <div className="text-center pl-3">
              <div className="flex items-center justify-center gap-1 text-amber-600 font-bold text-lg font-heading">
                <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
                {user.totalXp}
              </div>
              <span className="text-[10px] text-slate-500">Points Axiom</span>
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
                Félicitations ! Programme de {user.currentClass} complété !
              </h3>
              <p className="text-xs text-emerald-100 max-w-xl">
                Tu as validé 100% des notions requises pour cette classe. Tu es officiellement admis au niveau supérieur !
              </p>
            </div>
          </div>
          <button
            onClick={onPromoteNextLevel}
            className="px-5 py-3 rounded-2xl bg-white text-emerald-800 hover:bg-emerald-50 font-black text-xs transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Passer en classe supérieure</span>
          </button>
        </div>
      )}

      {/* Two columns: XP breakdown by subject + Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* XP by Subject */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2452FF]" />
              Points Axiom par Discipline
            </h3>
            <span className="text-xs text-slate-500 font-medium">Programme Gabon</span>
          </div>

          <div className="space-y-3">
            {subjects.slice(0, 5).map(subj => {
              const xpAmount = user.subjectXp[subj.id] || (subj.id === 'math' ? 320 : subj.id === 'physics' ? 180 : 70);
              const maxSubjectXp = 500;
              const ratio = Math.min(100, Math.round((xpAmount / maxSubjectXp) * 100));

              return (
                <div key={subj.id} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-2">
                      <span 
                        className="w-2.5 h-2.5 rounded-full inline-block"
                        style={{ backgroundColor: subj.color }}
                      />
                      {subj.name}
                    </span>
                    <span className="font-bold text-slate-900">{xpAmount} XP</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${ratio}%`,
                        backgroundColor: subj.color 
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badges Collection */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Trophées & Accomplissements Axiom
            </h3>
            <span className="text-xs text-slate-500 font-bold">
              {badges.filter(b => b.unlocked).length} / {badges.length} débloqués
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {badges.map(badge => (
              <div 
                key={badge.id}
                className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                  badge.unlocked 
                    ? 'bg-amber-50/50 border-amber-200 text-slate-900 shadow-2xs' 
                    : 'bg-slate-50/70 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  badge.unlocked ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-400'
                }`}>
                  {badge.unlocked ? (
                    <Crown className="w-5 h-5 text-amber-600" />
                  ) : (
                    <Lock className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-slate-900">
                    {badge.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {badge.condition}
                  </p>
                  {badge.unlockedAt && (
                    <span className="text-[10px] text-emerald-600 font-semibold block mt-1">
                      Débloqué le {badge.unlockedAt}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
