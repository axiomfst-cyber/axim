import React from 'react';
import { MascotId, MASCOTS } from './mascotData';
import { MascotCharacter } from './MascotCharacter';
import { AvatarCustomization } from './avatarTypes';
import { Sparkles, Flame, Palette } from 'lucide-react';

interface MascotCompanionCardProps {
  mascotId?: MascotId;
  customization?: AvatarCustomization;
  streakDays: number;
  onOpenCustomizer?: (mode?: 'wizard' | 'studio') => void;
  className?: string;
}

export const MascotCompanionCard: React.FC<MascotCompanionCardProps> = ({
  mascotId = 'avatar',
  customization,
  streakDays,
  onOpenCustomizer,
  className = '',
}) => {
  const config = MASCOTS[mascotId] || MASCOTS.avatar;
  const displayName = customization?.name || 'Mon Avatar';
  const isInitialized = Boolean(customization?.isInitialized);

  const dialogue = config.dialogues.idle[0]?.replace(/\{name\}/g, displayName) || '';

  return (
    <div
      className={`bg-white rounded-3xl p-5 border border-slate-200 shadow-xs relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}
    >
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="shrink-0 relative">
          <MascotCharacter
            mascotId="avatar"
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
              (Lycéen AXIOM)
            </span>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
              isInitialized 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-blue-50 text-[#2452FF] border border-blue-200 animate-pulse'
            }`}>
              <Sparkles className="w-3 h-3" />
              {isInitialized ? 'Avatar Configuré' : 'À Personnaliser'}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">
              <Flame className="w-3 h-3 fill-amber-500 text-amber-600" />
              {streakDays} j de série
            </span>
          </div>
          <p className="text-xs text-slate-600 font-medium">
            "{dialogue}"
          </p>
          <p className="text-[11px] text-slate-400">
            {isInitialized
              ? "Avatar officiel associé à ton compte élève. Personnalise son style à tout moment !"
              : "Personnalise ton élève : morphologie, carnation, coiffure et uniforme gabonais !"}
          </p>
        </div>
      </div>

      <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row items-center justify-end gap-2">
        {onOpenCustomizer && (
          !isInitialized ? (
            <button
              onClick={() => onOpenCustomizer('wizard')}
              className="px-4 py-2 rounded-xl bg-linear-to-r from-[#2452FF] to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer w-full sm:w-auto"
              title="Personnaliser ton avatar pas-à-pas"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Personnaliser mon avatar</span>
            </button>
          ) : (
            <button
              onClick={() => onOpenCustomizer('studio')}
              className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2452FF] text-xs font-bold transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer border border-blue-200"
              title="Modifier les caractéristiques de ton avatar"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Modifier mon avatar</span>
            </button>
          )
        )}
      </div>
    </div>
  );
};
