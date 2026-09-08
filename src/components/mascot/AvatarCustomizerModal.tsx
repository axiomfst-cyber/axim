import React, { useState, useEffect } from 'react';
import {
  AvatarCustomization,
  HeadShape,
  SkinTone,
  HairStyle,
  HairColor,
  ClothingStyle,
  ClothingColor,
  Accessory,
  HEAD_SHAPES_MAP,
  SKIN_TONES_MAP,
  HAIR_COLORS_MAP,
  HAIR_STYLES_MAP,
  CLOTHING_STYLES_MAP,
  CLOTHING_COLORS_MAP,
  ACCESSORIES_MAP,
  DEFAULT_AVATAR_CUSTOMIZATION,
  saveAvatarCustomization,
  extractFirstName,
} from './avatarTypes';
import { CustomAvatarSvg } from './CustomAvatarSvg';
import { MascotMood } from './mascotData';
import { MascotCelebration } from './MascotCelebration';
import { mascotAudio } from './mascotAudio';
import {
  X,
  Sparkles,
  Shuffle,
  RotateCcw,
  Check,
  User,
  Smile,
  Scissors,
  Shirt,
  Glasses,
  ArrowRight,
  ArrowLeft,
  SlidersHorizontal,
  Trophy,
  PartyPopper,
} from 'lucide-react';

interface AvatarCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCustomization: AvatarCustomization;
  onSave: (customization: AvatarCustomization) => void;
  studentName?: string;
  initialMode?: 'wizard' | 'studio';
}

type TabType = 'identity' | 'head' | 'skin' | 'hair' | 'clothes' | 'accessories';

export const AvatarCustomizerModal: React.FC<AvatarCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentCustomization,
  onSave,
  studentName = 'Moussa Obiang',
  initialMode,
}) => {
  // Determine if we should start in Duolingo guided wizard mode
  // If not initialized yet, default to 'wizard'
  const [mode, setMode] = useState<'wizard' | 'studio'>('wizard');
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [draft, setDraft] = useState<AvatarCustomization>(() => {
    const studentFirstName = extractFirstName(studentName);
    return {
      ...currentCustomization,
      name: currentCustomization.name && currentCustomization.name !== 'Axiom'
        ? currentCustomization.name
        : studentFirstName,
    };
  });

  const [activeTab, setActiveTab] = useState<TabType>('skin');
  const [previewMood, setPreviewMood] = useState<MascotMood>('idle');
  const [isTapped, setIsTapped] = useState<boolean>(false);

  // Sync state on modal open
  useEffect(() => {
    if (isOpen) {
      const studentFirstName = extractFirstName(studentName);
      const isAlreadyInit = currentCustomization.isInitialized;
      
      setDraft({
        ...currentCustomization,
        name: currentCustomization.name && currentCustomization.name !== 'Axiom'
          ? currentCustomization.name
          : studentFirstName,
      });

      // If specified in prop, use it; otherwise, uninitialized -> wizard, initialized -> studio
      if (initialMode) {
        setMode(initialMode);
      } else {
        setMode(isAlreadyInit ? 'studio' : 'wizard');
      }
      
      setWizardStep(1);
      setPreviewMood('idle');
    }
  }, [isOpen, currentCustomization, studentName, initialMode]);

  if (!isOpen) return null;

  const totalSteps = 6;

  const handleNextStep = () => {
    mascotAudio.playTap();
    if (wizardStep < totalSteps) {
      const next = wizardStep + 1;
      setWizardStep(next);
      if (next === totalSteps) {
        // Final celebration step
        setPreviewMood('celebrating');
        mascotAudio.playVictory();
      } else {
        setPreviewMood('idle');
      }
    } else {
      handleFinalSave();
    }
  };

  const handlePrevStep = () => {
    mascotAudio.playTap();
    if (wizardStep > 1) {
      setWizardStep(wizardStep - 1);
      setPreviewMood('idle');
    }
  };

  const handleRandomize = () => {
    const headShapeKeys = Object.keys(HEAD_SHAPES_MAP) as HeadShape[];
    const skinKeys = Object.keys(SKIN_TONES_MAP) as SkinTone[];
    const hairKeys = Object.keys(HAIR_STYLES_MAP) as HairStyle[];
    const colorKeys = Object.keys(HAIR_COLORS_MAP) as HairColor[];
    const clothKeys = Object.keys(CLOTHING_STYLES_MAP) as ClothingStyle[];
    const clothColorKeys = Object.keys(CLOTHING_COLORS_MAP) as ClothingColor[];
    const accKeys = Object.keys(ACCESSORIES_MAP) as Accessory[];

    const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

    const randomConfig: AvatarCustomization = {
      name: draft.name || extractFirstName(studentName),
      genderStyle: draft.genderStyle,
      headShape: pick(headShapeKeys),
      skinTone: pick(skinKeys),
      hairStyle: pick(hairKeys),
      hairColor: pick(colorKeys),
      clothingStyle: pick(clothKeys),
      clothingColor: pick(clothColorKeys),
      accessory: pick(accKeys),
      isInitialized: true,
    };

    setDraft(randomConfig);
    mascotAudio.playTap();
  };

  const handleReset = () => {
    const studentFirstName = extractFirstName(studentName);
    setDraft({
      ...DEFAULT_AVATAR_CUSTOMIZATION,
      name: studentFirstName,
      isInitialized: false,
    });
    setWizardStep(1);
    mascotAudio.playTap();
  };

  const handleFinalSave = () => {
    const finalized: AvatarCustomization = {
      ...draft,
      name: draft.name.trim() || extractFirstName(studentName),
      isInitialized: true,
    };
    saveAvatarCustomization(finalized);
    onSave(finalized);
    mascotAudio.playCorrect();
    onClose();
  };

  const testMood = (mood: MascotMood) => {
    setPreviewMood(mood);
    if (mood === 'correct' || mood === 'celebrating') {
      mascotAudio.playCorrect();
    } else if (mood === 'incorrect') {
      mascotAudio.playIncorrect();
    } else {
      mascotAudio.playTap();
    }
  };

  const handleAvatarClick = () => {
    setIsTapped(true);
    mascotAudio.playTap();
    setTimeout(() => setIsTapped(false), 500);
  };

  const stepTitles = [
    { title: 'Prénom & Visage', icon: User, desc: 'Prénom de l\'élève et forme du visage' },
    { title: 'Couleur de Peau', icon: Sparkles, desc: 'Choisis ta carnation naturelle' },
    { title: 'Coiffure & Couleur', icon: Scissors, desc: 'Adopte ta coupe signature' },
    { title: 'Tenue & Vêtements', icon: Shirt, desc: 'Blazer, maillot Gabon, wax, blouse labo...' },
    { title: 'Accessoire Signature', icon: Glasses, desc: 'Une touche unique pour briller' },
    { title: 'Avatar Prêt !', icon: PartyPopper, desc: 'Célébration et confirmation' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-5 sm:p-7 shadow-2xl border border-slate-100 relative flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Top Bar / Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-blue-50 text-[#2452FF] flex items-center justify-center font-bold shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  {mode === 'wizard' ? "Initialisation de ton Avatar" : "Atelier de l'Avatar"}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-blue-100/70 text-[#2452FF] text-[10px] font-extrabold uppercase tracking-wider">
                  Style Duolingo
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {mode === 'wizard' 
                  ? "Crée ton double animé pas-à-pas pour t'accompagner à chaque exercice"
                  : "Modifie librement chaque détail de ton compagnon d'étude"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Mode Switcher */}
            {mode === 'wizard' ? (
              <button
                type="button"
                onClick={() => setMode('studio')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                title="Passer à l'atelier libre"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mode Libre</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMode('wizard');
                  setWizardStep(1);
                  setPreviewMood('idle');
                }}
                className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2452FF] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-blue-200"
                title="Relancer le parcours d'initialisation pas-à-pas"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Initialisation Guidée</span>
              </button>
            )}

            <button
              onClick={handleRandomize}
              type="button"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Générer un look aléatoire"
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              type="button"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Réinitialiser"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Wizard Progress Bar (Only in Wizard Mode) */}
        {mode === 'wizard' && (
          <div className="pt-3 pb-1 shrink-0">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-[#2452FF] flex items-center gap-1.5">
                <span>Étape {wizardStep} sur {totalSteps} :</span>
                <span className="text-slate-800">{stepTitles[wizardStep - 1].title}</span>
              </span>
              <span className="text-slate-400 text-[11px] font-medium hidden sm:inline">
                {stepTitles[wizardStep - 1].desc}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div
                className="bg-linear-to-r from-blue-600 via-indigo-600 to-[#2452FF] h-full rounded-full transition-all duration-300 shadow-xs"
                style={{ width: `${(wizardStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Main Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-3 overflow-y-auto flex-1">
          
          {/* LEFT: Live Interactive Avatar Stage */}
          <div className="md:col-span-5 flex flex-col items-center justify-between bg-gradient-to-b from-blue-50/60 via-slate-50 to-white p-4 rounded-3xl border border-blue-100/80 shadow-inner relative overflow-hidden">
            
            {/* Top Tag & Name Badge */}
            <div className="text-center w-full z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-xs border border-blue-100 text-[#2452FF] text-xs font-extrabold">
                <span>🎓</span>
                <span>{draft.name || 'Mon Avatar'}</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {mode === 'wizard' && wizardStep === totalSteps
                  ? "C'est ton compagnon d'étude officiel !"
                  : "Touche ton avatar pour voir ses réactions !"}
              </p>
            </div>

            {/* Avatar Visual with Stage Effects */}
            <div
              onClick={handleAvatarClick}
              className="relative my-2 flex items-center justify-center cursor-pointer select-none py-2"
              title="Clique pour animer"
            >
              <MascotCelebration active={previewMood === 'correct' || previewMood === 'celebrating'} />
              <CustomAvatarSvg
                mood={previewMood}
                isTapped={isTapped}
                size={{ width: 160, height: 175 }}
                customization={draft}
              />
            </div>

            {/* Quick Mood Test Pills */}
            <div className="w-full space-y-1 z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">
                Expressions Duolingo :
              </span>
              <div className="grid grid-cols-4 gap-1">
                <button
                  type="button"
                  onClick={() => testMood('idle')}
                  className={`py-1 px-1.5 text-[10px] font-bold rounded-xl transition-all cursor-pointer ${
                    previewMood === 'idle'
                      ? 'bg-slate-800 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  Repos
                </button>
                <button
                  type="button"
                  onClick={() => testMood('thinking')}
                  className={`py-1 px-1.5 text-[10px] font-bold rounded-xl transition-all cursor-pointer ${
                    previewMood === 'thinking'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  Réfléchit
                </button>
                <button
                  type="button"
                  onClick={() => testMood('correct')}
                  className={`py-1 px-1.5 text-[10px] font-bold rounded-xl transition-all cursor-pointer ${
                    previewMood === 'correct'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  Victoire 🎉
                </button>
                <button
                  type="button"
                  onClick={() => testMood('incorrect')}
                  className={`py-1 px-1.5 text-[10px] font-bold rounded-xl transition-all cursor-pointer ${
                    previewMood === 'incorrect'
                      ? 'bg-rose-500 text-white shadow-xs'
                      : 'bg-white hover:bg-rose-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  Courage
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Controls (Wizard Steps OR Free Studio Tabs) */}
          <div className="md:col-span-7 flex flex-col justify-between">
            
            {/* WIZARD MODE CONTROLS */}
            {mode === 'wizard' ? (
              <div className="flex-1 flex flex-col justify-between space-y-4">
                
                {/* STEP 1: STUDENT NAME, HEAD SHAPE & SILHOUETTE */}
                {wizardStep === 1 && (
                  <div className="space-y-3.5 animate-fade-in">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#2452FF] uppercase tracking-wider">
                        Étape 1 sur 6
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        Prénom de l'élève & Forme de la Tête
                      </h4>
                      <p className="text-xs text-slate-500">
                        Le personnage porte le prénom de l'élève et sa morphologie pour un apprentissage sur-mesure.
                      </p>
                    </div>

                    {/* Prénom Input */}
                    <div className="p-3 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                      <label className="text-xs font-bold text-slate-800 block">
                        Prénom de l'élève :
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={draft.name}
                          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                          placeholder="Ex: Moussa, Jean-Eudes, Amina..."
                          className="w-full px-4 py-2 text-sm rounded-xl border border-blue-200 bg-white focus:outline-hidden focus:border-[#2452FF] focus:ring-2 focus:ring-blue-200 font-bold text-slate-900"
                          maxLength={25}
                        />
                        <span className="absolute right-3 top-2 text-xs text-slate-400 font-medium">
                          Prénom
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        💡 Ton avatar dira : <em>"Salut {draft.name || 'Moussa'} ! Prêt pour le prochain exercice ?"</em>
                      </p>
                    </div>

                    {/* Head Shape Selector (Forme de la tête) */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-800 block">
                          Forme de la tête du personnage :
                        </label>
                        <span className="text-[11px] font-bold text-[#2452FF]">
                          {HEAD_SHAPES_MAP[draft.headShape]?.label || 'Ronde & Douce'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-44 overflow-y-auto pr-1">
                        {(Object.keys(HEAD_SHAPES_MAP) as HeadShape[]).map((shapeKey) => {
                          const item = HEAD_SHAPES_MAP[shapeKey];
                          const isSelected = draft.headShape === shapeKey;
                          return (
                            <button
                              key={shapeKey}
                              type="button"
                              onClick={() => {
                                setDraft({ ...draft, headShape: shapeKey });
                                mascotAudio.playTap();
                              }}
                              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/60 ring-2 ring-blue-200 shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white'
                              }`}
                            >
                              <div>
                                <div className="flex items-center gap-1.5 mb-0.5">
                                  <span className="text-base">{item.icon}</span>
                                  <span className="text-xs font-bold text-slate-900 leading-tight">
                                    {item.label}
                                  </span>
                                </div>
                                <span className="text-[10px] text-slate-500 line-clamp-2 leading-snug">
                                  {item.description}
                                </span>
                              </div>
                              {isSelected && (
                                <span className="mt-1.5 text-[10px] font-extrabold text-[#2452FF] flex items-center gap-1">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                  Choisie
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Silhouette Style */}
                    <div className="space-y-1.5 pt-1 border-t border-slate-100">
                      <label className="text-xs font-bold text-slate-800 block">
                        Style de silhouette :
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'neutral', label: 'Neutre / Polyvalent' },
                          { id: 'masculine', label: 'Masculin' },
                          { id: 'feminine', label: 'Féminin' },
                        ].map((g) => (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() => {
                              setDraft({ ...draft, genderStyle: g.id as any });
                              mascotAudio.playTap();
                            }}
                            className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              draft.genderStyle === g.id
                                ? 'border-[#2452FF] bg-blue-50 text-[#2452FF] ring-2 ring-blue-200'
                                : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                            }`}
                          >
                            {g.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: SKIN TONE */}
                {wizardStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#2452FF] uppercase tracking-wider">
                        Étape 2 sur 6
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        Choisis ta carnation de peau
                      </h4>
                      <p className="text-xs text-slate-500">
                        Sélectionne la teinte qui correspond le mieux à ton élève.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {(Object.keys(SKIN_TONES_MAP) as SkinTone[]).map((key) => {
                        const item = SKIN_TONES_MAP[key];
                        const isSelected = draft.skinTone === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => {
                              setDraft({ ...draft, skinTone: key });
                              mascotAudio.playTap();
                            }}
                            className={`p-3 rounded-2xl border flex items-center gap-3 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#2452FF] bg-blue-50/60 ring-2 ring-blue-200 shadow-xs'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white'
                            }`}
                          >
                            <span
                              className="w-7 h-7 rounded-full border-2 border-white shadow-md shrink-0"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-xs font-bold text-slate-800 text-left leading-tight">
                              {item.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: HAIR STYLE & COLOR */}
                {wizardStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#2452FF] uppercase tracking-wider">
                        Étape 3 sur 6
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        Quelle est ta coupe de cheveux ?
                      </h4>
                      <p className="text-xs text-slate-500">
                        Coiffures volumineuses, tresses, dégradés ou styles modernes.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
                        {(Object.keys(HAIR_STYLES_MAP) as HairStyle[]).map((key) => {
                          const item = HAIR_STYLES_MAP[key];
                          const isSelected = draft.hairStyle === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => {
                                setDraft({ ...draft, hairStyle: key });
                                mascotAudio.playTap();
                              }}
                              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/60 ring-2 ring-blue-200 shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white'
                              }`}
                            >
                              <span className="text-xs font-bold text-slate-900 block">
                                {item.label}
                              </span>
                              <span className="text-[10px] text-slate-500 block truncate">
                                {item.description}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Hair Color Palette */}
                      <div className="pt-2 border-t border-slate-100">
                        <label className="text-xs font-bold text-slate-800 block mb-1.5">
                          Couleur des cheveux :
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {(Object.keys(HAIR_COLORS_MAP) as HairColor[]).map((key) => {
                            const item = HAIR_COLORS_MAP[key];
                            const isSelected = draft.hairColor === key;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => {
                                  setDraft({ ...draft, hairColor: key });
                                  mascotAudio.playTap();
                                }}
                                className={`px-2 py-1 rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-[#2452FF] bg-blue-50 ring-2 ring-blue-200'
                                    : 'border-slate-200 hover:border-slate-300 bg-white'
                                }`}
                              >
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                                  style={{ backgroundColor: item.color }}
                                />
                                <span className="text-[11px] font-medium text-slate-700">
                                  {item.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: CLOTHING STYLE & COLOR */}
                {wizardStep === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#2452FF] uppercase tracking-wider">
                        Étape 4 sur 6
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        Quel est ton style de tenue ?
                      </h4>
                      <p className="text-xs text-slate-500">
                        Vrais vêtements au choix : blazer scolaire, maillot national, wax traditionnel ou blouse de labo.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                        {(Object.keys(CLOTHING_STYLES_MAP) as ClothingStyle[]).map((key) => {
                          const item = CLOTHING_STYLES_MAP[key];
                          const isSelected = draft.clothingStyle === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => {
                                setDraft({ ...draft, clothingStyle: key });
                                mascotAudio.playTap();
                              }}
                              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/60 ring-2 ring-blue-200 shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white'
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-1">
                                  <span className="text-xs font-bold text-slate-900 block">
                                    {item.label}
                                  </span>
                                  {item.tag && (
                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider shrink-0 ${
                                      key === 'traditional_wax' 
                                        ? 'bg-amber-100 text-amber-800'
                                        : key === 'lab_coat'
                                        ? 'bg-teal-100 text-teal-800'
                                        : key === 'gabon_jersey'
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : 'bg-slate-100 text-slate-600'
                                    }`}>
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                                <span className="text-[10px] text-slate-500 block leading-snug">
                                  {item.description}
                                </span>
                              </div>
                              {isSelected && (
                                <span className="mt-1.5 text-[10px] font-extrabold text-[#2452FF] flex items-center gap-1">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                  Sélectionné
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Outfit Color Palette */}
                      <div className="pt-2 border-t border-slate-100">
                        <label className="text-xs font-bold text-slate-800 block mb-1.5">
                          Couleur principale du vêtement :
                        </label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {(Object.keys(CLOTHING_COLORS_MAP) as ClothingColor[]).map((key) => {
                            const item = CLOTHING_COLORS_MAP[key];
                            const isSelected = draft.clothingColor === key;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => {
                                  setDraft({ ...draft, clothingColor: key });
                                  mascotAudio.playTap();
                                }}
                                className={`p-1.5 rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-[#2452FF] bg-blue-50 ring-2 ring-blue-200'
                                    : 'border-slate-200 hover:border-slate-300 bg-white'
                                }`}
                              >
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                                  style={{ backgroundColor: item.primary }}
                                />
                                <span className="text-[11px] font-medium text-slate-700 truncate">
                                  {item.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: ACCESSORIES */}
                {wizardStep === 5 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#2452FF] uppercase tracking-wider">
                        Étape 5 sur 6
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        Un accessoire pour ton look ?
                      </h4>
                      <p className="text-xs text-slate-500">
                        Lunettes d'intello, casque audio, toque de major ou casquette stylée.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(Object.keys(ACCESSORIES_MAP) as Accessory[]).map((key) => {
                        const item = ACCESSORIES_MAP[key];
                        const isSelected = draft.accessory === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => {
                              setDraft({ ...draft, accessory: key });
                              mascotAudio.playTap();
                            }}
                            className={`p-3 rounded-2xl border flex items-center gap-3 text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#2452FF] bg-blue-50/60 ring-2 ring-blue-200 shadow-xs'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white'
                            }`}
                          >
                            <span className="text-xl">{item.icon}</span>
                            <div>
                              <span className="text-xs font-bold text-slate-900 block">
                                {item.label}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 6: FINAL REVELATION & CELEBRATION */}
                {wizardStep === 6 && (
                  <div className="space-y-4 animate-fade-in text-center py-2">
                    <div className="inline-flex p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto">
                      <PartyPopper className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-heading text-xl font-extrabold text-slate-900">
                        Félicitations {draft.name} !
                      </h4>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto">
                        Ton avatar d'étude est officiellement créé dans le style Duolingo. Il sera à tes côtés pour chaque formule, chapitre et examen !
                      </p>
                    </div>

                    {/* Speech Bubble from the newly created avatar */}
                    <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-slate-800 text-xs font-semibold max-w-md mx-auto text-left relative">
                      <div className="absolute -top-2 left-6 w-3 h-3 bg-blue-50 border-t border-l border-blue-200 rotate-45" />
                      <p>
                        👋 « Enchanté, je m'appelle <strong>{draft.name}</strong> ! On va s'entraîner dur et décrocher la mention Très Bien au BAC ! »
                      </p>
                    </div>

                    {/* Recap Badge Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-md mx-auto pt-1">
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] text-slate-400 block font-bold">Prénom</span>
                        <span className="text-xs font-extrabold text-slate-800 truncate block">
                          {draft.name}
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] text-slate-400 block font-bold">Visage</span>
                        <span className="text-xs font-extrabold text-slate-800 truncate block">
                          {HEAD_SHAPES_MAP[draft.headShape]?.label.split(' ')[0]}
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] text-slate-400 block font-bold">Coiffure</span>
                        <span className="text-xs font-extrabold text-slate-800 truncate block">
                          {HAIR_STYLES_MAP[draft.hairStyle]?.label.split(' ')[0]}
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] text-slate-400 block font-bold">Tenue</span>
                        <span className="text-xs font-extrabold text-slate-800 truncate block">
                          {CLOTHING_STYLES_MAP[draft.clothingStyle]?.label.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Wizard Footer Navigation */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  {wizardStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Précédent</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {wizardStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-2.5 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer ml-auto"
                    >
                      <span>Continuer</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleFinalSave}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer ml-auto"
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Valider mon Avatar & Commencer 🚀</span>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* FREE STUDIO MODE (Tabs) */
              <div className="flex-1 flex flex-col justify-between space-y-3">
                {/* Category Navigation Pills */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 border-b border-slate-100 scrollbar-none">
                  <button
                    type="button"
                    onClick={() => setActiveTab('identity')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'identity'
                        ? 'bg-[#2452FF] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Prénom</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('head')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'head'
                        ? 'bg-[#2452FF] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Smile className="w-3.5 h-3.5" />
                    <span>Visage</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('skin')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'skin'
                        ? 'bg-[#2452FF] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Teint</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('hair')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'hair'
                        ? 'bg-[#2452FF] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Scissors className="w-3.5 h-3.5" />
                    <span>Coiffure</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('clothes')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'clothes'
                        ? 'bg-[#2452FF] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Shirt className="w-3.5 h-3.5" />
                    <span>Tenue</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('accessories')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'accessories'
                        ? 'bg-[#2452FF] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Glasses className="w-3.5 h-3.5" />
                    <span>Accessoires</span>
                  </button>
                </div>

                {/* TAB PANELS */}
                <div className="flex-1 space-y-4 pt-1">
                  
                  {/* TAB: IDENTITY & NAME */}
                  {activeTab === 'identity' && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <label className="text-xs font-bold text-slate-800 block mb-1.5">
                          Prénom de l'élève (donné au personnage) :
                        </label>
                        <input
                          type="text"
                          value={draft.name}
                          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                          placeholder="Ex: Moussa, Jean-Eudes, Amina..."
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#2452FF] focus:ring-2 focus:ring-blue-100 font-bold"
                          maxLength={25}
                        />
                        <p className="text-[11px] text-slate-500 mt-1">
                          Le personnage t'appellera par ce prénom dans ses bulles de dialogue !
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-800 block">
                          Silhouette :
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'neutral', label: 'Neutre' },
                            { id: 'masculine', label: 'Masculin' },
                            { id: 'feminine', label: 'Féminin' },
                          ].map((g) => (
                            <button
                              key={g.id}
                              type="button"
                              onClick={() => {
                                setDraft({ ...draft, genderStyle: g.id as any });
                                mascotAudio.playTap();
                              }}
                              className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                                draft.genderStyle === g.id
                                  ? 'border-[#2452FF] bg-blue-50 text-[#2452FF] ring-2 ring-blue-200'
                                  : 'border-slate-200 hover:border-slate-300 text-slate-700'
                              }`}
                            >
                              {g.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB: HEAD / VISAGE */}
                  {activeTab === 'head' && (
                    <div className="space-y-3 animate-fade-in">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-800 block">
                          Forme de la tête & géométrie faciale :
                        </label>
                        <span className="text-xs font-bold text-[#2452FF]">
                          {HEAD_SHAPES_MAP[draft.headShape]?.label}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1">
                        {(Object.keys(HEAD_SHAPES_MAP) as HeadShape[]).map((shapeKey) => {
                          const item = HEAD_SHAPES_MAP[shapeKey];
                          const isSelected = draft.headShape === shapeKey;
                          return (
                            <button
                              key={shapeKey}
                              type="button"
                              onClick={() => {
                                setDraft({ ...draft, headShape: shapeKey });
                                mascotAudio.playTap();
                              }}
                              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/60 ring-2 ring-blue-200 shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white'
                              }`}
                            >
                              <div>
                                <div className="flex items-center gap-1.5 mb-1">
                                  <span className="text-xl">{item.icon}</span>
                                  <span className="text-xs font-bold text-slate-900 leading-tight">
                                    {item.label}
                                  </span>
                                </div>
                                <span className="text-[10px] text-slate-500 block leading-snug">
                                  {item.description}
                                </span>
                              </div>
                              {isSelected && (
                                <span className="mt-2 text-[10px] font-extrabold text-[#2452FF] flex items-center gap-1">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                  Sélectionné
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* TAB: SKIN */}
                  {activeTab === 'skin' && (
                    <div className="space-y-4 animate-fade-in">
                      <label className="text-xs font-bold text-slate-800 block">
                        Couleur de peau & carnation :
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {(Object.keys(SKIN_TONES_MAP) as SkinTone[]).map((key) => {
                          const item = SKIN_TONES_MAP[key];
                          const isSelected = draft.skinTone === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => {
                                setDraft({ ...draft, skinTone: key });
                                mascotAudio.playTap();
                              }}
                              className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/50 ring-2 ring-blue-200 shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              <span
                                className="w-6 h-6 rounded-full border border-black/10 shrink-0 shadow-xs"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-xs font-bold text-slate-800 text-left leading-tight">
                                {item.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* TAB: HAIR */}
                  {activeTab === 'hair' && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <label className="text-xs font-bold text-slate-800 block mb-2">
                          Style de coiffure :
                        </label>
                        <div className="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
                          {(Object.keys(HAIR_STYLES_MAP) as HairStyle[]).map((key) => {
                            const item = HAIR_STYLES_MAP[key];
                            const isSelected = draft.hairStyle === key;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => {
                                  setDraft({ ...draft, hairStyle: key });
                                  mascotAudio.playTap();
                                }}
                                className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-[#2452FF] bg-blue-50/50 ring-2 ring-blue-200 shadow-xs'
                                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                <span className="text-xs font-bold text-slate-800 block">
                                  {item.label}
                                </span>
                                <span className="text-[10px] text-slate-500 block truncate">
                                  {item.description}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Hair Color */}
                      <div className="pt-2 border-t border-slate-100">
                        <label className="text-xs font-bold text-slate-800 block mb-2">
                          Teinte des cheveux :
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {(Object.keys(HAIR_COLORS_MAP) as HairColor[]).map((key) => {
                            const item = HAIR_COLORS_MAP[key];
                            const isSelected = draft.hairColor === key;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => {
                                  setDraft({ ...draft, hairColor: key });
                                  mascotAudio.playTap();
                                }}
                                className={`p-1.5 rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-[#2452FF] bg-blue-50 ring-2 ring-blue-200 shadow-xs'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                              >
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                                  style={{ backgroundColor: item.color }}
                                />
                                <span className="text-[11px] font-medium text-slate-700">
                                  {item.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB: CLOTHES */}
                  {activeTab === 'clothes' && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-bold text-slate-800 block">
                            Tenue & Vêtements réels :
                          </label>
                          <span className="text-xs font-bold text-[#2452FF]">
                            {CLOTHING_STYLES_MAP[draft.clothingStyle]?.label}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                          {(Object.keys(CLOTHING_STYLES_MAP) as ClothingStyle[]).map((key) => {
                            const item = CLOTHING_STYLES_MAP[key];
                            const isSelected = draft.clothingStyle === key;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => {
                                  setDraft({ ...draft, clothingStyle: key });
                                  mascotAudio.playTap();
                                }}
                                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                  isSelected
                                    ? 'border-[#2452FF] bg-blue-50/50 ring-2 ring-blue-200 shadow-xs'
                                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                <div>
                                  <div className="flex items-center justify-between gap-1 mb-1">
                                    <span className="text-xs font-bold text-slate-800 block">
                                      {item.label}
                                    </span>
                                    {item.tag && (
                                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider shrink-0 ${
                                        key === 'traditional_wax' 
                                          ? 'bg-amber-100 text-amber-800'
                                          : key === 'lab_coat'
                                          ? 'bg-teal-100 text-teal-800'
                                          : key === 'gabon_jersey'
                                          ? 'bg-emerald-100 text-emerald-800'
                                          : 'bg-slate-100 text-slate-600'
                                      }`}>
                                        {item.tag}
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-[10px] text-slate-500 block leading-snug">
                                    {item.description}
                                  </span>
                                </div>
                                {isSelected && (
                                  <span className="mt-1.5 text-[10px] font-extrabold text-[#2452FF] flex items-center gap-1">
                                    <Check className="w-3 h-3 stroke-[3]" />
                                    Sélectionné
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Clothing Color */}
                      <div className="pt-2 border-t border-slate-100">
                        <label className="text-xs font-bold text-slate-800 block mb-2">
                          Couleur du vêtement :
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {(Object.keys(CLOTHING_COLORS_MAP) as ClothingColor[]).map((key) => {
                            const item = CLOTHING_COLORS_MAP[key];
                            const isSelected = draft.clothingColor === key;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => {
                                  setDraft({ ...draft, clothingColor: key });
                                  mascotAudio.playTap();
                                }}
                                className={`p-2 rounded-xl border flex items-center gap-2 transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-[#2452FF] bg-blue-50/50 ring-2 ring-blue-200 shadow-xs'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                              >
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                                  style={{ backgroundColor: item.primary }}
                                />
                                <span className="text-xs font-medium text-slate-700 truncate">
                                  {item.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB: ACCESSORIES */}
                  {activeTab === 'accessories' && (
                    <div className="space-y-3 animate-fade-in">
                      <label className="text-xs font-bold text-slate-800 block">
                        Accessoire de tête ou d'ambiance :
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(Object.keys(ACCESSORIES_MAP) as Accessory[]).map((key) => {
                          const item = ACCESSORIES_MAP[key];
                          const isSelected = draft.accessory === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => {
                                setDraft({ ...draft, accessory: key });
                                mascotAudio.playTap();
                              }}
                              className={`p-2.5 rounded-xl border flex items-center gap-2.5 text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/50 ring-2 ring-blue-200 shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              <span className="text-lg">{item.icon}</span>
                              <span className="text-xs font-bold text-slate-800">
                                {item.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Studio Footer Save */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    onClick={handleFinalSave}
                    className="px-5 py-2 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>Sauvegarder les modifications</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
