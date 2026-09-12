import React from 'react';
import { Compass, Network, Zap, Trophy } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  activeSkillName?: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    {
      id: 'skills',
      label: 'Parcours',
      sublabel: 'Chapitres',
      icon: Network,
      badge: null,
    },
    {
      id: 'exercise',
      label: 'Exercices',
      sublabel: '15 Q',
      icon: Zap,
      badge: '15 Q',
      highlight: true,
    },
    {
      id: 'home',
      label: 'Missions',
      sublabel: '50 XP',
      icon: Compass,
      badge: null,
    },
    {
      id: 'profile',
      label: 'Profil',
      sublabel: 'Trophées',
      icon: Trophy,
      badge: null,
    },
  ];

  return (
    <nav
      aria-label="Navigation mobile principale"
      className="w-full bg-white/98 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] z-40 shrink-0 pb-[max(0.4rem,env(safe-area-inset-bottom))]"
    >
      <div className="w-full max-w-lg mx-auto px-2 flex items-center justify-around h-15 sm:h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`mobile-tab-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 h-full py-1 transition-all duration-150 active:scale-95 cursor-pointer select-none ${
                isActive ? 'text-[#2452FF]' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {/* Active Indicator Bar */}
              {isActive && (
                <span className="absolute top-0 w-10 h-1 rounded-b-full bg-[#2452FF] shadow-xs animate-fade-in" />
              )}

              <div className="relative mt-0.5">
                <div
                  className={`p-1 rounded-xl transition-all ${
                    isActive
                      ? 'bg-blue-50 text-[#2452FF]'
                      : tab.highlight
                      ? 'bg-amber-50/80 text-amber-600'
                      : ''
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'scale-110 stroke-[2.5]' : 'stroke-[2]'
                    }`}
                  />
                </div>

                {tab.badge && !isActive && (
                  <span className="absolute -top-1 -right-2.5 px-1 py-0.2 rounded-full bg-amber-500 text-white text-[8px] font-black shadow-xs tracking-tight">
                    {tab.badge}
                  </span>
                )}
              </div>

              <span
                className={`text-[11px] leading-tight mt-0.5 tracking-tight whitespace-nowrap text-center ${
                  isActive ? 'font-bold text-[#2452FF]' : 'font-medium text-slate-600'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
