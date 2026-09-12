import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  School, 
  GraduationCap, 
  Flame, 
  Zap, 
  Sparkles, 
  Trophy, 
  Compass, 
  Network, 
  CheckCircle2,
  SlidersHorizontal,
  Palette,
  Lock,
  UserCheck
} from 'lucide-react';
import { UserProfile } from '../types';
import { MascotId, MASCOTS } from './mascot/mascotData';
import { AvatarCustomization } from './mascot/avatarTypes';

interface HeaderProps {
  user: UserProfile;
  activeTab: string;
  onTabChange: (tab: string) => void;
  mascotId?: MascotId;
  customization?: AvatarCustomization;
  onOpenAvatarCustomizer?: (mode?: 'wizard' | 'studio') => void;
  onOpenAccountSwitcher?: () => void;
  validatedSkillsCount?: number;
  totalSkillsCount?: number;
  isLevelCompleted?: boolean;
  onPromoteNextLevel?: () => void;
  onOpenOnboarding?: () => void;
}

// Format short class name for compact displays
function formatShortClass(className: string): string {
  if (!className) return 'Lycée';
  if (/première s/i.test(className) || /1ère s/i.test(className)) return '1ère S';
  if (/terminale c/i.test(className) || /term c/i.test(className)) return 'Term C';
  if (/terminale d/i.test(className) || /term d/i.test(className)) return 'Term D';
  if (/terminale a/i.test(className) || /term a/i.test(className)) return 'Term A';
  if (/seconde s/i.test(className) || /2nde s/i.test(className)) return '2nde S';
  if (/seconde a/i.test(className) || /2nde a/i.test(className)) return '2nde A';
  return className.split('(')[0].trim();
}

// Format clean school name
function formatShortSchool(schoolName?: string): string {
  if (!schoolName) return 'Lycée Léon Mba';
  return schoolName.replace(/\s*\(.*?\)\s*/g, '').trim();
}

export const Header: React.FC<HeaderProps> = ({
  user,
  activeTab,
  onTabChange,
  customization,
  onOpenAvatarCustomizer,
  onOpenAccountSwitcher,
  validatedSkillsCount = 0,
  totalSkillsCount = 0,
  isLevelCompleted = false,
  onPromoteNextLevel,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const drawerRef = useRef<HTMLDivElement>(null);

  const isAvatarInitialized = Boolean(customization?.isInitialized);

  // Global Touch Gesture Listener to open/close drawer with finger swipe
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now(),
        };
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length > 0) {
        const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
        const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
        const deltaTime = Date.now() - touchStartRef.current.time;

        // Verify gesture is primarily horizontal and swift (< 500ms)
        const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY) * 1.3;
        const isFastEnough = deltaTime < 500;

        if (isHorizontal && isFastEnough) {
          // Swipe Right from the left edge (startX < 85px) -> Open Drawer
          if (deltaX > 45 && touchStartRef.current.x < 85 && !isDrawerOpen) {
            setIsDrawerOpen(true);
          }
          // Swipe Left anywhere when drawer is open -> Close Drawer
          else if (deltaX < -45 && isDrawerOpen) {
            setIsDrawerOpen(false);
          }
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDrawerOpen]);

  // Lock body scroll or handle ESC key when drawer is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  const handleSelectTabFromDrawer = (tabId: string) => {
    onTabChange(tabId);
    setIsDrawerOpen(false);
  };

  const handleOpenAvatarFromDrawer = (mode: 'wizard' | 'studio') => {
    setIsDrawerOpen(false);
    if (onOpenAvatarCustomizer) onOpenAvatarCustomizer(mode);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP COMPACT BAR (Slim, never overflows, acts as anchor) */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs shrink-0">
        <div className="w-full max-w-7xl mx-auto px-2.5 sm:px-4">
          <div className="flex items-center justify-between h-13 sm:h-15 gap-1.5">
            {/* Left: Button to open the Side Drawer with School & Class info */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
              <button
                id="btn-open-sidebar-drawer"
                onClick={() => setIsDrawerOpen(true)}
                title="Ouvrir le menu latéral"
                className="flex items-center gap-1.5 p-1 sm:p-1.5 rounded-xl hover:bg-slate-100 text-slate-800 transition-all cursor-pointer group active:scale-95 border border-transparent hover:border-slate-200"
              >
                {/* Brand A Logo Icon with Menu Hamburger */}
                <div className="relative w-8 h-8 rounded-xl bg-[#2452FF] flex items-center justify-center text-white font-black text-sm shadow-sm shadow-blue-500/25 shrink-0 group-hover:bg-blue-700 transition-colors">
                  <Menu className="w-4.5 h-4.5 text-white" />
                </div>

                {/* Compact School & Class pill with Chevron */}
                <div className="flex flex-col text-left min-w-0">
                  <div className="flex items-center gap-1 leading-none">
                    <span className="font-heading font-black text-xs sm:text-sm tracking-tight text-slate-900 truncate">
                      AXIOM
                    </span>
                    <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-1 py-0.2 rounded border border-blue-200/70 shrink-0">
                      {formatShortClass(user.currentClass)}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 text-[10px] text-slate-500 group-hover:text-[#2452FF] mt-0.5">
                    <span className="truncate max-w-[105px] xs:max-w-[140px] sm:max-w-[200px]">
                      {formatShortSchool(user.schoolName)}
                    </span>
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#2452FF] shrink-0" />
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Tabs (shown on md+ screens) */}
            <nav className="hidden md:flex items-center gap-1.5">
              <button
                id="tab-btn-home"
                onClick={() => onTabChange('home')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'home'
                    ? 'bg-[#2452FF] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Accueil
              </button>
              <button
                id="tab-btn-skills"
                onClick={() => onTabChange('skills')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'skills'
                    ? 'bg-[#2452FF] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Parcours
              </button>
              <button
                id="tab-btn-exercise"
                onClick={() => onTabChange('exercise')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'exercise'
                    ? 'bg-[#2452FF] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Exercices
              </button>
              <button
                id="tab-btn-profile"
                onClick={() => onTabChange('profile')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-[#2452FF] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Profil
              </button>
            </nav>

            {/* Right: Quick Stats, Account Switcher & Avatar */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Streak */}
              <div
                title={`Série : ${user.streakDays} jours consécutifs`}
                className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-50 text-[#16C784] border border-emerald-200 cursor-default shrink-0"
              >
                <Flame className="w-3.5 h-3.5 fill-[#16C784]" />
                <span className="text-[11px] sm:text-xs font-bold">{user.streakDays}j</span>
              </div>

              {/* Total XP */}
              <div
                title={`Points Axiom : ${user.totalXp} XP`}
                className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 cursor-default shrink-0"
              >
                <Zap className="w-3.5 h-3.5 fill-[#FFC93C] text-amber-500" />
                <span className="text-[11px] sm:text-xs font-bold">{user.totalXp}</span>
              </div>

              {/* Account Switcher Button */}
              {onOpenAccountSwitcher && (
                <button
                  id="btn-header-switch-account"
                  onClick={onOpenAccountSwitcher}
                  title="Changer de compte ou connecter un autre élève"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#2452FF] border border-slate-200 text-xs font-bold transition-all cursor-pointer shadow-2xs shrink-0"
                >
                  <UserCheck className="w-3.5 h-3.5 text-[#2452FF]" />
                  <span className="max-w-[90px] truncate hidden md:inline">{user.name ? user.name.split(' ')[0] : 'Élève'}</span>
                  <span className="text-[10px] text-blue-600 bg-white px-1.5 py-0.2 rounded-md border border-blue-200">
                    Changer
                  </span>
                </button>
              )}

              {/* Quick Avatar Toggle Button */}
              <button
                id="btn-header-avatar-toggle"
                onClick={() => setIsDrawerOpen(true)}
                title="Ouvrir le menu latéral"
                className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-[#2452FF] transition-colors cursor-pointer shrink-0"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#2452FF] to-blue-500 text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                  {user.name ? user.name.trim().charAt(0).toUpperCase() : 'U'}
                </div>
                <span className="text-xs hidden sm:inline">🎓</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. FLOATING SIDE PULL TAB (Geste du doigt / Clic facile depuis le bord) */}
      {/* ========================================================================= */}
      <button
        id="btn-floating-side-pulltab"
        onClick={() => setIsDrawerOpen(true)}
        aria-label="Ouvrir le volet latéral"
        title="Ouvrir le volet latéral"
        className={`fixed left-0 top-24 z-35 flex items-center gap-1 pl-1.5 pr-2 py-1.5 rounded-r-2xl bg-white/95 hover:bg-blue-50 text-slate-700 hover:text-[#2452FF] shadow-md border-y border-r border-slate-200/90 transition-all duration-200 cursor-pointer active:scale-95 group ${
          isDrawerOpen ? 'opacity-0 pointer-events-none -translate-x-full' : 'opacity-90 hover:opacity-100 translate-x-0'
        }`}
      >
        <Menu className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-bold tracking-tight text-slate-600 group-hover:text-blue-600 hidden xs:inline">
          Établissement
        </span>
        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* ========================================================================= */}
      {/* 3. SIDE DRAWER (VOLET LATÉRAL ESCAMOTABLE) */}
      {/* ========================================================================= */}
      {/* Backdrop Scrim */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sliding Drawer Container */}
      <aside
        ref={drawerRef}
        aria-label="Volet latéral de navigation et profil"
        className={`fixed top-0 left-0 bottom-0 z-50 w-[85%] max-w-[340px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header with Close button */}
        <div className="p-4 bg-gradient-to-r from-slate-900 to-blue-950 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#2452FF] flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/30">
              A
            </div>
            <div>
              <h2 className="font-heading font-black text-base text-white tracking-tight leading-tight">
                AXIOM ACADEMY
              </h2>
              <p className="text-[11px] text-blue-300 font-medium">
                Plateforme Pédagogique Gabon
              </p>
            </div>
          </div>

          <button
            id="btn-close-sidebar-drawer"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Fermer le volet"
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Scrollable Content inside Side Drawer */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-4">
          {/* =================== ÉTABLISSEMENT & CLASSE CARD =================== */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-blue-200/80 p-3.5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#2452FF] uppercase tracking-wider">
                <School className="w-3.5 h-3.5" />
                <span>Mon Établissement & Niveau</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-extrabold shadow-2xs">
                {formatShortClass(user.currentClass)}
              </span>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs mb-2.5">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {user.schoolName || 'Lycée National Léon Mba'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Filière : <strong className="text-slate-800 font-semibold">{user.currentClass}</strong>
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Identifiant élève : #AX-{user.id.toUpperCase()}-{user.classId.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>

            {/* Class Progress Status */}
            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <GraduationCap className="w-3.5 h-3.5 text-[#2452FF]" />
                  <span>Progression globale</span>
                </span>
                <span className="text-[11px] font-extrabold text-[#2452FF]">
                  {validatedSkillsCount} / {totalSkillsCount} validés
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-[#2452FF] to-emerald-500 transition-all duration-500 rounded-full"
                  style={{ width: `${totalSkillsCount > 0 ? Math.round((validatedSkillsCount / totalSkillsCount) * 100) : 0}%` }}
                />
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                {isLevelCompleted ? (
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Toutes les matières de ce niveau sont validées !
                  </span>
                ) : (
                  "Suivez votre progression par matière pour valider l'ensemble des notions officielles du programme."
                )}
              </p>

              {isLevelCompleted && onPromoteNextLevel && (
                <button
                  id="btn-drawer-promote-level"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onPromoteNextLevel();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer animate-pulse"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Passer en classe supérieure</span>
                </button>
              )}
            </div>
          </div>

          {/* =================== COMPTE ÉLÈVE & AVATAR =================== */}
          <div className="rounded-2xl bg-white border border-slate-200 p-3.5 shadow-2xs">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Mon Compte & Avatar
            </h4>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-2.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#2452FF] to-blue-500 flex items-center justify-center text-white text-xl shadow-sm shrink-0">
                🎓
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-slate-900 text-sm truncate">
                  {user.name}
                </p>
                <p className="text-xs text-slate-500 truncate">
                  {user.email}
                </p>
              </div>
            </div>

            {onOpenAvatarCustomizer && (
              <button
                id="btn-drawer-customize-avatar"
                onClick={() => handleOpenAvatarFromDrawer(isAvatarInitialized ? 'studio' : 'wizard')}
                className="w-full py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2452FF] font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer border border-blue-200 shadow-2xs active:scale-98"
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Personnaliser mon avatar</span>
              </button>
            )}

            {onOpenAccountSwitcher && (
              <button
                id="btn-drawer-switch-account"
                onClick={() => {
                  setIsDrawerOpen(false);
                  onOpenAccountSwitcher();
                }}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-xs active:scale-98"
              >
                <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Changer de compte</span>
              </button>
            )}
          </div>

          {/* =================== SCORES & FLAMMES =================== */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-left">
              <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold mb-1">
                <Flame className="w-4 h-4 fill-[#16C784] text-emerald-600" />
                <span>Série active</span>
              </div>
              <p className="text-xl font-black text-emerald-800">
                {user.streakDays} <span className="text-xs font-semibold text-emerald-600">jours</span>
              </p>
              <p className="text-[10px] text-emerald-700/80 mt-0.5">Assiduité continue</p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-left">
              <div className="flex items-center gap-1.5 text-amber-700 text-xs font-bold mb-1">
                <Zap className="w-4 h-4 fill-[#FFC93C] text-amber-600" />
                <span>Points XP</span>
              </div>
              <p className="text-xl font-black text-amber-800">
                {user.totalXp} <span className="text-xs font-semibold text-amber-600">XP</span>
              </p>
              <p className="text-[10px] text-amber-700/80 mt-0.5">Rang : Apprenti</p>
            </div>
          </div>

          {/* =================== NAVIGATION RAPIDE =================== */}
          <div className="rounded-2xl bg-white border border-slate-200 p-3 shadow-2xs space-y-1">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">
              Navigation Rapide
            </h4>

            <button
              onClick={() => handleSelectTabFromDrawer('home')}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === 'home' ? 'bg-[#2452FF] text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4" />
                <span>Accueil & Missions Quotidiennes</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => handleSelectTabFromDrawer('skills')}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === 'skills' ? 'bg-[#2452FF] text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Network className="w-4 h-4" />
                <span>Carte des Chapitres & Notions</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => handleSelectTabFromDrawer('exercise')}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === 'exercise' ? 'bg-[#2452FF] text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4" />
                <span>Moteur d'Exercices (15 Questions)</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => handleSelectTabFromDrawer('profile')}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === 'profile' ? 'bg-[#2452FF] text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Trophy className="w-4 h-4" />
                <span>Mon Profil, Trophées & Badges</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
