import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Check, 
  School, 
  User, 
  Mail, 
  ArrowRight, 
  X, 
  ChevronRight, 
  ShieldCheck,
  Dices,
  Smile,
  Shirt,
  Sparkle
} from 'lucide-react';
import { AVAILABLE_CLASSES, GABON_HIGH_SCHOOLS } from '../data/axiomData';
import { SchoolClassDefinition, UserProfile } from '../types';
import { CustomAvatarSvg } from './mascot/CustomAvatarSvg';
import { 
  AvatarCustomization, 
  GenderStyle,
  GENDER_STYLES_MAP,
  HeadShape, 
  HEAD_SHAPES_MAP, 
  SkinTone, 
  SKIN_TONES_MAP, 
  HairStyle, 
  HAIR_STYLES_MAP, 
  HairColor, 
  HAIR_COLORS_MAP, 
  ClothingStyle, 
  CLOTHING_STYLES_MAP, 
  ClothingColor, 
  CLOTHING_COLORS_MAP, 
  Accessory, 
  ACCESSORIES_MAP, 
  DEFAULT_AVATAR_CUSTOMIZATION, 
  extractFirstName 
} from './mascot/avatarTypes';
import { MascotCelebration } from './mascot/MascotCelebration';

const getOutfitTagBadgeClass = (style: ClothingStyle): string => {
  switch (style) {
    case 'wax_dress_modern':
      return 'bg-pink-100 text-pink-800 border border-pink-200';
    case 'high_school_skirt_uniform':
      return 'bg-sky-100 text-sky-800 border border-sky-200';
    case 'traditional_boubou_femme':
    case 'traditional_wax':
    case 'traditional_kaba':
      return 'bg-amber-100 text-amber-800 border border-amber-200';
    case 'basketball_tank':
      return 'bg-orange-100 text-orange-800 border border-orange-200';
    case 'business_suit_chic':
      return 'bg-violet-100 text-violet-800 border border-violet-200';
    case 'cyber_pilot':
      return 'bg-cyan-100 text-cyan-800 border border-cyan-200';
    case 'lab_coat':
      return 'bg-teal-100 text-teal-800 border border-teal-200';
    case 'gabon_jersey':
      return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
    case 'ecogarde_ranger':
      return 'bg-green-100 text-green-800 border border-green-200';
    case 'varsity_jacket':
      return 'bg-indigo-100 text-indigo-800 border border-indigo-200';
    case 'artist_dungarees':
      return 'bg-purple-100 text-purple-800 border border-purple-200';
    case 'tracksuit_retro':
      return 'bg-rose-100 text-rose-800 border border-rose-200';
    case 'academic_robe':
      return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
    default:
      return 'bg-slate-100 text-slate-700 border border-slate-200';
  }
};

interface StudentOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterStudent: (data: {
    name: string;
    email: string;
    schoolName: string;
    selectedClass: SchoolClassDefinition;
    avatarConfig?: AvatarCustomization;
    openAvatarSetup?: boolean;
    existingAccountId?: string;
  }) => void;
  currentClassId?: string;
  initialProfile?: Partial<UserProfile> | null;
  isNewAccount?: boolean;
}

export const StudentOnboardingModal: React.FC<StudentOnboardingModalProps> = ({
  isOpen,
  onClose,
  onRegisterStudent,
  currentClassId = 'term-c',
  initialProfile = null,
  isNewAccount = false,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState('Moussa Obiang');
  const [email, setEmail] = useState('moussa.obiang@lycee-leon-mba.ga');
  const [schoolName, setSchoolName] = useState(GABON_HIGH_SCHOOLS[0]);
  const [selectedClassId, setSelectedClassId] = useState<string>(currentClassId);
  const [gradeFilter, setGradeFilter] = useState<'all' | 'Seconde' | 'Première' | 'Terminale'>('all');

  // Synchronize state whenever modal opens or initialProfile changes
  React.useEffect(() => {
    if (isOpen) {
      if (initialProfile && !isNewAccount) {
        setName(initialProfile.name || '');
        setEmail(initialProfile.email || '');
        setSchoolName(initialProfile.schoolName || GABON_HIGH_SCHOOLS[0]);
        setSelectedClassId(initialProfile.classId || currentClassId || '1ere-s');
      } else if (isNewAccount) {
        setName(initialProfile?.name || '');
        setEmail(initialProfile?.email || '');
        setSchoolName(initialProfile?.schoolName || GABON_HIGH_SCHOOLS[0]);
        setSelectedClassId(currentClassId || '1ere-s');
      }
      setStep(1);
    }
  }, [isOpen, initialProfile, isNewAccount, currentClassId]);

  // Avatar Configuration initialized directly during account creation
  const studentFirstName = useMemo(() => extractFirstName(name), [name]);
  const [avatarDraft, setAvatarDraft] = useState<AvatarCustomization>({
    ...DEFAULT_AVATAR_CUSTOMIZATION,
    name: studentFirstName,
    clothingStyle: 'uniform_blazer',
    accessory: 'glasses_round',
    isInitialized: true,
  });

  // Keep avatar's name synchronized with student's first name
  const currentAvatarConfig: AvatarCustomization = useMemo(() => ({
    ...avatarDraft,
    name: studentFirstName,
    isInitialized: true,
  }), [avatarDraft, studentFirstName]);

  // Avatar Sub-tab in Step 2
  const [avatarCategory, setAvatarCategory] = useState<'silhouette' | 'head' | 'skin' | 'hair' | 'clothes' | 'accessory'>('silhouette');
  const [previewMood, setPreviewMood] = useState<'idle' | 'celebrating' | 'correct' | 'thinking'>('idle');
  const [isTapped, setIsTapped] = useState(false);

  if (!isOpen) return null;

  const selectedClass = AVAILABLE_CLASSES.find(c => c.id === selectedClassId) || AVAILABLE_CLASSES[0];

  const filteredClasses = gradeFilter === 'all' 
    ? AVAILABLE_CLASSES 
    : AVAILABLE_CLASSES.filter(c => c.grade === gradeFilter);

  const handleAvatarTap = () => {
    setIsTapped(true);
    setPreviewMood('correct');
    setTimeout(() => {
      setIsTapped(false);
      setPreviewMood('idle');
    }, 900);
  };

  const handleRandomizeAvatar = () => {
    const genderKeys: GenderStyle[] = ['neutral', 'masculine', 'feminine'];
    const headKeys = Object.keys(HEAD_SHAPES_MAP) as HeadShape[];
    const skinKeys = Object.keys(SKIN_TONES_MAP) as SkinTone[];
    const hairKeys = Object.keys(HAIR_STYLES_MAP) as HairStyle[];
    const hairColorKeys = Object.keys(HAIR_COLORS_MAP) as HairColor[];
    const clothKeys = Object.keys(CLOTHING_STYLES_MAP) as ClothingStyle[];
    const clothColorKeys = Object.keys(CLOTHING_COLORS_MAP) as ClothingColor[];
    const accKeys = Object.keys(ACCESSORIES_MAP) as Accessory[];

    const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

    setAvatarDraft(prev => ({
      ...prev,
      name: studentFirstName,
      genderStyle: pick(genderKeys),
      headShape: pick(headKeys),
      skinTone: pick(skinKeys),
      hairStyle: pick(hairKeys),
      hairColor: pick(hairColorKeys),
      clothingStyle: pick(clothKeys),
      clothingColor: pick(clothColorKeys),
      accessory: pick(accKeys),
      isInitialized: true,
    }));

    setPreviewMood('celebrating');
    setTimeout(() => setPreviewMood('idle'), 800);
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onRegisterStudent({
      name: name.trim(),
      email: email.trim() || `${name.trim().toLowerCase().replace(/\s+/g, '.')}@axiom.ga`,
      schoolName,
      selectedClass,
      avatarConfig: currentAvatarConfig,
      openAvatarSetup: false,
      existingAccountId: (!isNewAccount && initialProfile?.id) ? initialProfile.id : undefined,
    });
  };

  const isExistingAccount = Boolean(!isNewAccount && initialProfile?.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2452FF] via-blue-700 to-indigo-800 text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {isExistingAccount ? 'Compte élève reconnu' : 'Nouveau Compte Élève'}
          </div>

          <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
            {isExistingAccount ? `Profil de ${name || 'l’élève'}` : 'Créer un nouveau compte élève'}
          </h2>
          <p className="text-blue-100 text-xs mt-1 max-w-lg">
            {isExistingAccount 
              ? 'Retrouvez votre profil élève, votre progression et vos exercices officiels.' 
              : 'Renseignez votre nom, votre établissement au Gabon et votre classe pour démarrer votre progression.'}
          </p>

          {/* 3-Step Indicator */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/20 text-xs font-medium">
            <button 
              type="button"
              onClick={() => setStep(1)}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${step === 1 ? 'text-white font-bold' : 'text-blue-200 hover:text-white'}`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step === 1 ? 'bg-white text-[#2452FF]' : 'bg-white/30 text-white'
              }`}>1</span>
              <span className="truncate">Profil Élève</span>
            </button>

            <button 
              type="button"
              onClick={() => name.trim() && setStep(2)}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${step === 2 ? 'text-white font-bold' : 'text-blue-200 hover:text-white'}`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step === 2 ? 'bg-white text-[#2452FF]' : 'bg-white/30 text-white'
              }`}>2</span>
              <span className="truncate">Avatar & Tenue</span>
            </button>

            <button 
              type="button"
              onClick={() => name.trim() && setStep(3)}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${step === 3 ? 'text-white font-bold' : 'text-blue-200 hover:text-white'}`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step === 3 ? 'bg-white text-[#2452FF]' : 'bg-white/30 text-white'
              }`}>3</span>
              <span className="truncate">Niveau (Lycée)</span>
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* ==================================================== */}
          {/* STEP 1: PROFIL ÉLÈVE                                */}
          {/* ==================================================== */}
          {step === 1 && (
            <div className="space-y-4 max-w-xl mx-auto py-2">
              {isExistingAccount && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>Compte élève reconnu :</strong> Votre profil et vos paramètres sont prêts. Vous pouvez les ajuster ou continuer directement.
                  </p>
                </div>
              )}

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#2452FF]" />
                  Nom complet de l'élève
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Ex : Moussa Obiang, Danielle Nguema..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 text-sm outline-none"
                  required
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  💡 Ton avatar portera ton prénom (<strong>{studentFirstName}</strong>) gravé sur son badge officiel !
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#2452FF]" />
                  Adresse email scolaire ou personnelle
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="moussa.obiang@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5 text-[#2452FF]" />
                  Établissement scolaire au Gabon
                </label>
                <select
                  value={schoolName}
                  onChange={e => setSchoolName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 text-sm outline-none bg-white"
                >
                  {GABON_HIGH_SCHOOLS.map((hs, i) => (
                    <option key={i} value={hs}>{hs}</option>
                  ))}
                </select>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2452FF] shrink-0 mt-0.5" />
                <p>
                  Compte rattaché au rôle <strong>Élève</strong>. Vos scores et compétences seront sauvegardés avec précision sur votre profil AXIOM.
                </p>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  Passer à l'avatar ({studentFirstName})
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* STEP 2: AVATAR INITIALIZATION (FULL BODY & FINGERS) */}
          {/* ==================================================== */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                    <span>Initialise ton Avatar officiel</span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#2452FF] text-xs font-extrabold">
                      {studentFirstName}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ton personnage possède des jambes, des doigts articulés et porte ton nom gravé sur sa tenue.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleRandomizeAvatar}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors self-start sm:self-auto cursor-pointer"
                >
                  <Dices className="w-3.5 h-3.5 text-[#2452FF]" />
                  <span>Style Aléatoire</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                {/* Live Avatar Preview Card */}
                <div className="md:col-span-5 bg-gradient-to-b from-blue-50/60 to-indigo-50/40 border border-blue-100 rounded-3xl p-4 flex flex-col items-center text-center relative overflow-hidden">
                  <div className="text-center w-full z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-xs border border-blue-100 text-[#2452FF] text-xs font-extrabold">
                      <span>🎓</span>
                      <span>{currentAvatarConfig.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Touche ton avatar pour voir ses réactions !
                    </p>
                  </div>

                  <div
                    onClick={handleAvatarTap}
                    className="relative my-2 flex items-center justify-center cursor-pointer select-none py-1"
                    title="Clique pour animer"
                  >
                    <MascotCelebration active={previewMood === 'correct' || previewMood === 'celebrating'} />
                    <CustomAvatarSvg
                      mood={previewMood}
                      isTapped={isTapped}
                      size={{ width: 140, height: 188 }}
                      customization={currentAvatarConfig}
                    />
                  </div>

                  <div className="w-full bg-white/80 backdrop-blur-xs rounded-2xl p-2.5 border border-blue-100/80 text-[11px] text-slate-600">
                    <span className="font-bold text-slate-800 block">
                      {CLOTHING_STYLES_MAP[currentAvatarConfig.clothingStyle].label}
                    </span>
                    <span className="text-slate-500">
                      {HEAD_SHAPES_MAP[currentAvatarConfig.headShape].label} • {HAIR_STYLES_MAP[currentAvatarConfig.hairStyle].label}
                    </span>
                  </div>
                </div>

                {/* Avatar Customization Controls */}
                <div className="md:col-span-7 space-y-3">
                  {/* Category Nav Pills */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 bg-slate-100 p-1 rounded-2xl text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() => setAvatarCategory('silhouette')}
                      className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                        avatarCategory === 'silhouette' ? 'bg-white text-[#2452FF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Silhouette
                    </button>
                    <button
                      type="button"
                      onClick={() => setAvatarCategory('head')}
                      className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                        avatarCategory === 'head' ? 'bg-white text-[#2452FF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Visage
                    </button>
                    <button
                      type="button"
                      onClick={() => setAvatarCategory('skin')}
                      className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                        avatarCategory === 'skin' ? 'bg-white text-[#2452FF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Peau
                    </button>
                    <button
                      type="button"
                      onClick={() => setAvatarCategory('hair')}
                      className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                        avatarCategory === 'hair' ? 'bg-white text-[#2452FF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Cheveux
                    </button>
                    <button
                      type="button"
                      onClick={() => setAvatarCategory('clothes')}
                      className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                        avatarCategory === 'clothes' ? 'bg-white text-[#2452FF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Tenue
                    </button>
                    <button
                      type="button"
                      onClick={() => setAvatarCategory('accessory')}
                      className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                        avatarCategory === 'accessory' ? 'bg-white text-[#2452FF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Plus
                    </button>
                  </div>

                  {/* Panel: Silhouette / Morphologie */}
                  {avatarCategory === 'silhouette' && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-700 block">
                        Morphologie & Silhouette corporelle :
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {(Object.entries(GENDER_STYLES_MAP) as [GenderStyle, typeof GENDER_STYLES_MAP[GenderStyle]][]).map(([key, info]) => {
                          const isSelected = (currentAvatarConfig.genderStyle || 'neutral') === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => setAvatarDraft(prev => ({ ...prev, genderStyle: key }))}
                              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/80 ring-2 ring-[#2452FF]/20 shadow-xs'
                                  : 'border-slate-200 bg-white hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-xl">{info.icon}</span>
                                <span className="text-xs font-bold text-slate-900">{info.label}</span>
                              </div>
                              <span className="text-[10px] text-slate-500 leading-snug">
                                {info.description}
                              </span>
                              {isSelected && (
                                <span className="mt-2 text-[10px] font-extrabold text-[#2452FF] flex items-center gap-1">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                  Actif
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Panel: Head Shape */}
                  {avatarCategory === 'head' && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-700 block">
                        Forme de la tête & Joues :
                      </span>
                      <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                        {(Object.entries(HEAD_SHAPES_MAP) as [HeadShape, typeof HEAD_SHAPES_MAP[HeadShape]][]).map(([key, info]) => {
                          const isSelected = currentAvatarConfig.headShape === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => setAvatarDraft(prev => ({ ...prev, headShape: key }))}
                              className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/80 ring-2 ring-[#2452FF]/20 shadow-xs'
                                  : 'border-slate-200 bg-white hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{info.icon}</span>
                                <div>
                                  <span className="text-xs font-bold text-slate-900 block">{info.label}</span>
                                  <span className="text-[10px] text-slate-500 leading-tight block">{info.description}</span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Panel: Skin Tone */}
                  {avatarCategory === 'skin' && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-700 block">
                        Teint de peau naturel :
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {(Object.entries(SKIN_TONES_MAP) as [SkinTone, typeof SKIN_TONES_MAP[SkinTone]][]).map(([key, info]) => {
                          const isSelected = currentAvatarConfig.skinTone === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => setAvatarDraft(prev => ({ ...prev, skinTone: key }))}
                              className={`p-2 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/80 ring-2 ring-[#2452FF]/20 shadow-xs'
                                  : 'border-slate-200 bg-white hover:border-slate-300'
                              }`}
                            >
                              <span
                                className="w-6 h-6 rounded-full shrink-0 shadow-xs border border-white"
                                style={{ backgroundColor: info.color }}
                              />
                              <span className="text-xs font-bold text-slate-800 truncate">{info.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Panel: Hair */}
                  {avatarCategory === 'hair' && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-bold text-slate-700 block mb-1.5">
                          Coupe de cheveux :
                        </span>
                        <div className="grid grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1">
                          {(Object.entries(HAIR_STYLES_MAP) as [HairStyle, typeof HAIR_STYLES_MAP[HairStyle]][]).map(([key, info]) => {
                            const isSelected = currentAvatarConfig.hairStyle === key;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => setAvatarDraft(prev => ({ ...prev, hairStyle: key }))}
                                className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-[#2452FF] bg-blue-50 text-[#2452FF] font-bold'
                                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                <span className="text-xs block truncate">{info.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-slate-700 block mb-1">
                          Couleur des cheveux :
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(Object.entries(HAIR_COLORS_MAP) as [HairColor, typeof HAIR_COLORS_MAP[HairColor]][]).map(([key, info]) => {
                            const isSelected = currentAvatarConfig.hairColor === key;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => setAvatarDraft(prev => ({ ...prev, hairColor: key }))}
                                title={info.label}
                                className={`w-7 h-7 rounded-full transition-transform cursor-pointer border-2 ${
                                  isSelected ? 'scale-110 border-[#2452FF] ring-2 ring-[#2452FF]/30' : 'border-white hover:scale-105'
                                }`}
                                style={{ backgroundColor: info.color }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Panel: Clothing Style */}
                  {avatarCategory === 'clothes' && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-700 block">
                        Tenue & Uniforme scolaire officiel :
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                        {(Object.entries(CLOTHING_STYLES_MAP) as [ClothingStyle, typeof CLOTHING_STYLES_MAP[ClothingStyle]][]).map(([key, info]) => {
                          const isSelected = currentAvatarConfig.clothingStyle === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => setAvatarDraft(prev => ({ ...prev, clothingStyle: key }))}
                              className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/80 ring-2 ring-[#2452FF]/20 shadow-xs'
                                  : 'border-slate-200 bg-white hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-bold text-slate-900">{info.label}</span>
                                {info.tag && (
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider shrink-0 ${getOutfitTagBadgeClass(key)}`}>
                                    {info.tag}
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-slate-500 line-clamp-2 leading-snug block">
                                {info.description}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Panel: Accessories */}
                  {avatarCategory === 'accessory' && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-700 block">
                        Accessoires & Signes distinctifs :
                      </span>
                      <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                        {(Object.entries(ACCESSORIES_MAP) as [Accessory, typeof ACCESSORIES_MAP[Accessory]][]).map(([key, info]) => {
                          const isSelected = currentAvatarConfig.accessory === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => setAvatarDraft(prev => ({ ...prev, accessory: key }))}
                              className={`p-2.5 rounded-2xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#2452FF] bg-blue-50/80 ring-2 ring-[#2452FF]/20 shadow-xs'
                                  : 'border-slate-200 bg-white hover:border-slate-300'
                              }`}
                            >
                              <span className="text-lg">{info.icon}</span>
                              <span className="text-xs font-bold text-slate-800 truncate">{info.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  ← Retour au profil
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  Choisir ma classe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* STEP 3: CLASSE & FINAL VALIDATION                   */}
          {/* ==================================================== */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-base">
                    Sélectionnez votre classe de départ
                  </h3>
                  <p className="text-xs text-slate-500">
                    Programmes conformes aux référentiels officiels du Gabon (IPN / Ministère de l'Éducation Nationale).
                  </p>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Accédez directement aux cours, exercices et épreuves officielles de votre classe.</span>
                  </div>
                </div>

                {/* Grade filter pills */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  {(['all', 'Seconde', 'Première', 'Terminale'] as const).map(g => (
                    <button
                      key={g}
                      onClick={() => setGradeFilter(g)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        gradeFilter === g
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {g === 'all' ? 'Toutes' : g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Class Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                {filteredClasses.map(cls => {
                  const isSelected = selectedClassId === cls.id;
                  return (
                    <button
                      key={cls.id}
                      type="button"
                      onClick={() => setSelectedClassId(cls.id)}
                      className={`p-4 rounded-2xl border text-left transition-all relative group flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'border-[#2452FF] bg-blue-50/60 ring-2 ring-[#2452FF]/20 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                            {cls.grade} • {cls.track}
                          </span>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected ? 'bg-[#2452FF] border-[#2452FF] text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>

                        <h4 className="font-heading font-bold text-sm text-slate-900 group-hover:text-[#2452FF] transition-colors">
                          {cls.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                          {cls.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-600">
                        <span>Matières clés :</span>
                        <span className="font-semibold text-slate-800 uppercase">
                          {cls.focusSubjects.join(', ')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Avatar Summary Banner with Personalized Speech */}
              <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl flex items-center gap-3">
                <div className="w-12 h-16 shrink-0 flex items-center justify-center">
                  <CustomAvatarSvg
                    mood="celebrating"
                    size={{ width: 48, height: 64 }}
                    customization={currentAvatarConfig}
                  />
                </div>
                <div className="flex-1 text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>Compagnon {studentFirstName} prêt !</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-extrabold">
                      ✓ Initialisé
                    </span>
                  </div>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-[11px]">
                    « Prêt pour l'excellence en <strong>{selectedClass.name}</strong> ! Je t'accompagnerai dans tous tes exercices et tes examens. »
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  ← Modifier mon avatar
                </button>

                <button
                  type="button"
                  onClick={handleComplete}
                  className="px-6 py-3 rounded-xl bg-[#16C784] hover:bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  {isExistingAccount 
                    ? `Enregistrer mon profil et continuer en ${selectedClass.name}`
                    : `Créer mon compte et commencer en ${selectedClass.name}`}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
