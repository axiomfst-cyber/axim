import React from 'react';
import { Flame, Zap, GraduationCap, Sparkles, Palette } from 'lucide-react';
import { UserRole, UserProfile } from '../types';
import { MascotId, MASCOTS } from './mascot/mascotData';
import { AvatarCustomization } from './mascot/avatarTypes';

interface HeaderProps {
  user: UserProfile;
  onRoleChange?: (role: UserRole) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenOnboarding: () => void;
  mascotId?: MascotId;
  onOpenMascotSelector?: () => void;
  customization?: AvatarCustomization;
  onOpenAvatarCustomizer?: (mode?: 'wizard' | 'studio') => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  activeTab,
  onTabChange,
  onOpenOnboarding,
  mascotId = 'avatar',
  onOpenMascotSelector,
  customization,
  onOpenAvatarCustomizer,
}) => {
  const currentMascot = MASCOTS[mascotId] || MASCOTS.avatar;
  const isCustomAvatar = mascotId === 'avatar' || mascotId === 'koko';
  const mascotDisplayName = isCustomAvatar && customization?.name ? customization.name : currentMascot.name;
  const isAvatarInitialized = Boolean(customization?.isInitialized);
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2452FF] flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900">
                  AXIOM<span className="text-[#2452FF]">.</span>ACADEMY
                </span>
                {/* Clickable Class Badge */}
                <button
                  id="btn-header-change-class"
                  onClick={onOpenOnboarding}
                  title="Changer de niveau ou créer un compte (2nde à Terminale)"
                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 text-[#2452FF] border border-blue-200 hover:bg-blue-100 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Gabon • {user.currentClass}</span>
                  <span className="text-[10px] text-blue-500">▼</span>
                </button>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block">
                {user.schoolName || 'Lycée National Léon Mba'} • {user.name}
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              id="tab-btn-setup"
              onClick={() => onTabChange('setup')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'setup'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Architecture & Monorepo
            </button>
            <button
              id="tab-btn-home"
              onClick={() => onTabChange('home')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'home'
                  ? 'bg-[#2452FF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Accueil & Missions
            </button>
            <button
              id="tab-btn-skills"
              onClick={() => onTabChange('skills')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'skills'
                  ? 'bg-[#2452FF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Carte de Compétences
            </button>
            <button
              id="tab-btn-exercise"
              onClick={() => onTabChange('exercise')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'exercise'
                  ? 'bg-[#2452FF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Moteur d'Exercices
            </button>
            <button
              id="tab-btn-profile"
              onClick={() => onTabChange('profile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'profile'
                  ? 'bg-[#2452FF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Profil & Badges
            </button>
          </nav>

          {/* Gamification Stats & Mascot Companion */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mascot Companion & Avatar Customizer Quick Buttons */}
            <div className="flex items-center gap-1">
              {onOpenMascotSelector && (
                <button
                  id="btn-header-mascot"
                  onClick={onOpenMascotSelector}
                  title={`Compagnon animé : ${mascotDisplayName} (${currentMascot.species}). Cliquer pour changer.`}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-[#2452FF] transition-all cursor-pointer text-xs font-bold"
                >
                  <span>{currentMascot.badge}</span>
                  <span className="hidden md:inline">{mascotDisplayName}</span>
                </button>
              )}

              {isCustomAvatar && onOpenAvatarCustomizer && (
                <button
                  id="btn-header-avatar-customizer"
                  onClick={() => onOpenAvatarCustomizer(isAvatarInitialized ? 'studio' : 'wizard')}
                  title={isAvatarInitialized 
                    ? `Modifier l'avatar de ${mascotDisplayName}` 
                    : `Initialiser l'avatar de ${mascotDisplayName} (Style Duolingo)`}
                  className={`p-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1 ${
                    isAvatarInitialized
                      ? 'bg-blue-50 hover:bg-blue-100 text-[#2452FF] border-blue-200'
                      : 'bg-linear-to-r from-blue-600 to-indigo-600 text-white border-blue-500 animate-pulse px-2'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  {!isAvatarInitialized && (
                    <span className="text-[10px] font-bold hidden sm:inline">Créer mon Avatar</span>
                  )}
                </button>
              )}
            </div>

            {/* Streak */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-[#16C784] border border-emerald-200">
              <Flame className="w-4 h-4 fill-[#16C784]" />
              <span className="text-xs font-bold">{user.streakDays} j</span>
            </div>

            {/* Total XP */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
              <Zap className="w-4 h-4 fill-[#FFC93C] text-[#FFC93C]" />
              <span className="text-xs font-bold">{user.totalXp} XP</span>
            </div>

            {/* User Profile Avatar with Initial & Name */}
            <button
              id="btn-header-user-profile"
              onClick={() => onTabChange('profile')}
              title={`Profil de ${user.name} (${user.currentClass})`}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-blue-50 border-blue-200 text-[#2452FF]'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2452FF] to-blue-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                {user.name ? user.name.trim().charAt(0).toUpperCase() : 'U'}
              </div>
              <span className="text-xs font-semibold hidden sm:inline max-w-[120px] truncate">
                {user.name}
              </span>
            </button>

            {/* Quick Change Class / New Account Button */}
            <button
              id="btn-header-onboarding-cta"
              onClick={onOpenOnboarding}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
              title="Créer un compte ou changer de niveau (2nde à Terminale)"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
              <span>Niveau & Compte</span>
            </button>
          </div>
        </div>

        {/* Mobile Tab Bar */}
        <div className="flex lg:hidden overflow-x-auto gap-2 py-2 border-t border-slate-100 no-scrollbar">
          <button
            onClick={() => onTabChange('setup')}
            className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap ${
              activeTab === 'setup' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Setup Monorepo
          </button>
          <button
            onClick={() => onTabChange('home')}
            className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap ${
              activeTab === 'home' ? 'bg-[#2452FF] text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Accueil
          </button>
          <button
            onClick={() => onTabChange('skills')}
            className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap ${
              activeTab === 'skills' ? 'bg-[#2452FF] text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Carte de Compétences
          </button>
          <button
            onClick={() => onTabChange('exercise')}
            className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap ${
              activeTab === 'exercise' ? 'bg-[#2452FF] text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Exercice
          </button>
          <button
            onClick={() => onTabChange('profile')}
            className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap ${
              activeTab === 'profile' ? 'bg-[#2452FF] text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Profil
          </button>
        </div>
      </div>
    </header>
  );
};
