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
  Layers
} from 'lucide-react';
import { UserProfile, BadgeItem, Subject, UserRole } from '../types';

interface ProfileGamificationViewProps {
  user: UserProfile;
  badges: BadgeItem[];
  subjects: Subject[];
  onRoleChange?: (role: UserRole) => void;
}

export const ProfileGamificationView: React.FC<ProfileGamificationViewProps> = ({
  user,
  badges,
  subjects,
  onRoleChange,
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
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2452FF] text-xs font-semibold border border-blue-200">
                {user.currentClass} (Gabon)
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-xs text-slate-500">
                {user.email}
              </span>
              {onRoleChange && (
                <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                  <button
                    onClick={() => onRoleChange('student')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                      user.role === 'student' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    Élève
                  </button>
                  <button
                    onClick={() => onRoleChange('teacher')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                      user.role === 'teacher' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    Prof
                  </button>
                  <button
                    onClick={() => onRoleChange('admin')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                      user.role === 'admin' ? 'bg-white text-rose-600 shadow-xs' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    Admin
                  </button>
                </div>
              )}
            </div>
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
              <span className="text-[10px] text-slate-500">Total XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two columns: XP breakdown by subject + Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* XP by Subject */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2452FF]" />
              Répartition des XP par Matière
            </h3>
            <span className="text-xs text-slate-500">XP_TRANSACTIONS</span>
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
              Trophées & Badges Débloqués
            </h3>
            <span className="text-xs text-slate-500">
              {badges.filter(b => b.unlocked).length} / {badges.length} obtenus
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {badges.map(badge => (
              <div 
                key={badge.id}
                className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                  badge.unlocked 
                    ? 'bg-amber-50/50 border-amber-200 text-slate-900' 
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
