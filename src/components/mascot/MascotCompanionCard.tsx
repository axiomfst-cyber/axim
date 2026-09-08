import React from 'react';
import { MascotId, MASCOTS } from './mascotData';
import { MascotCharacter } from './MascotCharacter';
import { AvatarCustomization } from './avatarTypes';
import { Sparkles, Flame, Settings2, Palette } from 'lucide-react';

interface MascotCompanionCardProps {
  mascotId: MascotId;
  customization?: AvatarCustomization;
  streakDays: number;
  onOpenSelector: () => void;
  onOpenCustomizer?: (mode?: 'wizard' | 'studio') => void;
  className?: string;
}

export const MascotCompanionCard: React.FC<MascotCompanionCardProps> = ({
  mascotId,
  customization,
  streakDays,
  onOpenSelector,
  onOpenCustomizer,
  className = '',
}) => {
  const isCustomAvatar = mascotId === 'avatar' || mascotId === 'koko';
  const config = MASCOTS[mascotId] || MASCOTS.avatar;
  const displayName = isCustomAvatar && customization?.name ? customization.name : config.name;
  const isInitialized = isCustomAvatar && Boolean(customization?.isInitialized);

  const dialogue = config.dialogues.idle[0]?.replace(/\{name\}/g, displayName) || '';

  return (
    <div
      className={`bg-white rounded-3xl p-5 border border-slate-200 shadow-xs relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}
    >
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="shrink-0 relative">
          <MascotCharacter
            mascotId={mascotId}
            customization={customization}
            mood="idle"
            size="sm"
            showSpeechBubble={false}
            interactive={true}
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-heading font-extrabold text-base text-slate-900">
              {displayName}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              ({config.species})
            </span>
            {isCustomAvatar && (
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                isInitialized 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-blue-50 text-[#2452FF] border border-blue-200 animate-pulse'
              }`}>
                <Sparkles className="w-3 h-3" />
                {isInitialized ? 'Avatar Initialisé' : 'À Initialiser (Duolingo)'}
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">
              <Flame className="w-3 h-3 fill-amber-500 text-amber-600" />
              {streakDays} j de streak
            </span>
          </div>
          <p className="text-xs text-slate-600 font-medium">
            "{dialogue}"
          </p>
          <p className="text-[11px] text-slate-400">
            {isCustomAvatar 
              ? (isInitialized
                  ? "Personnage synchronisé avec ton prénom d'élève. Prêt pour les révisions !"
                  : "Personnalise la peau, la coiffure et le style de ton élève comme sur Duolingo !")
              : `Clique sur ${displayName} pour l'animer ou change de compagnon !`}
          </p>
        </div>
      </div>

      <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row items-center justify-end gap-2">
        {isCustomAvatar && onOpenCustomizer && (
          !isInitialized ? (
            <button
              onClick={() => onOpenCustomizer('wizard')}
              className="px-4 py-2 rounded-xl bg-linear-to-r from-[#2452FF] to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer w-full sm:w-auto"
              title="Initialiser ton avatar pas-à-pas comme sur Duolingo"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Initialiser mon avatar</span>
            </button>
          ) : (
            <button
              onClick={() => onOpenCustomizer('studio')}
              className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2452FF] text-xs font-bold transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer border border-blue-200"
              title="Modifier les caractéristiques de ton avatar"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Modifier l'avatar</span>
            </button>
          )
        )}

        <button
          onClick={onOpenSelector}
          className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer"
          title="Changer de compagnon d'étude"
        >
          <Settings2 className="w-3.5 h-3.5 text-slate-500" />
          <span>Changer</span>
        </button>
      </div>
    </div>
  );
};
