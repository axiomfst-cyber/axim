import React from 'react';
import { MascotId, MASCOTS } from './mascotData';
import { MascotCharacter } from './MascotCharacter';
import { AvatarCustomization } from './avatarTypes';
import { X, Check, Sparkles, Palette } from 'lucide-react';

interface MascotSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMascotId: MascotId;
  onSelectMascot: (id: MascotId) => void;
  customization?: AvatarCustomization;
  onOpenCustomizer?: (mode?: 'wizard' | 'studio') => void;
}

export const MascotSelectorModal: React.FC<MascotSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedMascotId,
  onSelectMascot,
  customization,
  onOpenCustomizer,
}) => {
  if (!isOpen) return null;

  // Present the 3 companions: Customizable Avatar (first!), Bao, and Lily
  const companionsToDisplay: MascotId[] = ['avatar', 'bao', 'lily'];
  const isAvatarInit = Boolean(customization?.isInitialized);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-100 relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2452FF] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Compagnon d'Étude Animé Style Duolingo
          </div>
          <h3 className="font-heading text-xl font-bold text-slate-900">
            Choisis ton Compagnon de Révision
          </h3>
          <p className="text-slate-500 text-xs max-w-sm mx-auto">
            Sélectionne ton avatar personnalisé avec ton prénom ou un de nos compagnons nationaux pour t'accompagner au quotidien !
          </p>
        </div>

        {/* Mascot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {companionsToDisplay.map((mId) => {
            const m = MASCOTS[mId];
            const isSelected = selectedMascotId === mId || (mId === 'avatar' && selectedMascotId === 'koko');
            const isAvatar = mId === 'avatar';

            return (
              <div
                key={mId}
                onClick={() => onSelectMascot(mId)}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center cursor-pointer transition-all duration-200 relative group ${
                  isSelected
                    ? 'border-[#2452FF] bg-blue-50/40 shadow-md ring-2 ring-blue-200'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#2452FF] text-white flex items-center justify-center text-xs shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                )}

                {isAvatar && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-extrabold uppercase tracking-wider">
                    {isAvatarInit ? 'Ton Avatar' : 'À créer'}
                  </span>
                )}

                <div className="py-1">
                  <MascotCharacter
                    mascotId={mId}
                    customization={customization}
                    mood={isSelected ? 'correct' : 'idle'}
                    size="sm"
                    showSpeechBubble={false}
                    interactive={false}
                  />
                </div>

                <div className="mt-2 space-y-0.5">
                  <span className="text-xs font-bold text-slate-800 block">
                    {isAvatar && customization?.name ? customization.name : m.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    {isAvatar ? "Ton double élève AXIOM" : m.species}
                  </span>
                </div>

                <span
                  className="mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${m.primaryColor}15`,
                    color: m.primaryColor,
                  }}
                >
                  {m.personality.split(',')[0]}
                </span>

                {/* Quick customize button on the avatar card */}
                {isAvatar && onOpenCustomizer && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectMascot('avatar');
                      onOpenCustomizer(isAvatarInit ? 'studio' : 'wizard');
                    }}
                    className={`mt-3 w-full py-1.5 px-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                      isAvatarInit
                        ? 'bg-blue-100/80 hover:bg-blue-200 text-[#2452FF]'
                        : 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xs'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{isAvatarInit ? 'Personnaliser' : 'Initialiser (Duolingo)'}</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          {onOpenCustomizer && (
            <button
              type="button"
              onClick={() => {
                onSelectMascot('avatar');
                onOpenCustomizer(isAvatarInit ? 'studio' : 'wizard');
              }}
              className="text-xs font-bold text-[#2452FF] hover:text-blue-700 flex items-center gap-1.5 cursor-pointer py-1"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {isAvatarInit 
                  ? "Atelier d'Avatar & Look"
                  : "Initialiser mon personnage style Duolingo"}
              </span>
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer ml-auto"
          >
            Confirmer le choix
          </button>
        </div>
      </div>
    </div>
  );
};
