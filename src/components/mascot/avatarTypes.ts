// Configuration and data structures for the Customizable Duolingo-style Avatar
// Allows full user customization of skin, hair, clothes, accessories, and personality

export type HeadShape = 
  | 'round' 
  | 'oval' 
  | 'square' 
  | 'heart' 
  | 'diamond' 
  | 'rectangular';

export type SkinTone = 
  | 'deep' 
  | 'ebony' 
  | 'warm_brown' 
  | 'caramel' 
  | 'amber' 
  | 'golden' 
  | 'fair';

export type HairStyle = 
  | 'afro' 
  | 'dreads' 
  | 'braids' 
  | 'fade' 
  | 'curls' 
  | 'side_part' 
  | 'high_puff'
  | 'buzz';

export type HairColor = 
  | 'black' 
  | 'dark_brown' 
  | 'caramel' 
  | 'auburn' 
  | 'blonde' 
  | 'electric_blue' 
  | 'purple';

export type ClothingStyle = 
  | 'uniform_blazer' 
  | 'gabon_jersey' 
  | 'street_hoodie' 
  | 'stem_polo' 
  | 'academic_robe'
  | 'traditional_wax'
  | 'lab_coat';

export type ClothingColor = 
  | 'blue' 
  | 'green' 
  | 'red' 
  | 'amber' 
  | 'purple' 
  | 'slate';

export type Accessory = 
  | 'none' 
  | 'glasses_round' 
  | 'glasses_square' 
  | 'headphones' 
  | 'gabon_headband' 
  | 'scholar_cap' 
  | 'cap_reversed';

export interface AvatarCustomization {
  name: string;
  genderStyle: 'neutral' | 'masculine' | 'feminine';
  headShape: HeadShape;
  skinTone: SkinTone;
  hairStyle: HairStyle;
  hairColor: HairColor;
  clothingStyle: ClothingStyle;
  clothingColor: ClothingColor;
  accessory: Accessory;
  isInitialized?: boolean;
}

export function extractFirstName(fullName?: string): string {
  if (!fullName || !fullName.trim()) return 'Moussa';
  const parts = fullName.trim().split(/\s+/);
  return parts[0] || 'Moussa';
}

export const HEAD_SHAPES_MAP: Record<HeadShape, { label: string; description: string; icon: string }> = {
  round: { 
    label: 'Ronde & Douce', 
    description: 'Style Duolingo classique, joues pleines et joviales',
    icon: '⚪'
  },
  oval: { 
    label: 'Ovale Harmonieuse', 
    description: 'Équilibrée, menton doux et traits gracieux',
    icon: '🥚'
  },
  square: { 
    label: 'Carrée & Structurée', 
    description: 'Mâchoire affirmée, caractère déterminé et énergique',
    icon: '⏹️'
  },
  heart: { 
    label: 'En Cœur & Délicate', 
    description: 'Front large, pommettes hautes et menton effilé',
    icon: '💖'
  },
  diamond: { 
    label: 'Diamant Évocatrice', 
    description: 'Pommettes bien dessinées et menton fin expressif',
    icon: '💎'
  },
  rectangular: { 
    label: 'Rectangulaire & Haute', 
    description: 'Silhouette élancée, port altier et sérieux',
    icon: '📏'
  },
};

export const SKIN_TONES_MAP: Record<SkinTone, { label: string; color: string; shadow: string }> = {
  deep: { label: 'Ébène profond', color: '#3B2215', shadow: '#24140B' },
  ebony: { label: 'Chocolat intense', color: '#55341F', shadow: '#382012' },
  warm_brown: { label: 'Brun chaleureux', color: '#744728', shadow: '#4F2D17' },
  caramel: { label: 'Caramel doré', color: '#9E653A', shadow: '#6E4324' },
  amber: { label: 'Ambre solaire', color: '#C58648', shadow: '#965E2A' },
  golden: { label: 'Hâle doux', color: '#E0AA6F', shadow: '#B57E44' },
  fair: { label: 'Teint clair', color: '#F3C79A', shadow: '#D09B66' },
};

export const HAIR_COLORS_MAP: Record<HairColor, { label: string; color: string; highlight: string }> = {
  black: { label: 'Noir ébène', color: '#18181B', highlight: '#3F3F46' },
  dark_brown: { label: 'Brun chocolat', color: '#382012', highlight: '#5C341F' },
  caramel: { label: 'Châtain caramel', color: '#78350F', highlight: '#B45309' },
  auburn: { label: 'Roux cuivré', color: '#9A3412', highlight: '#EA580C' },
  blonde: { label: 'Blond doré', color: '#D97706', highlight: '#FBBF24' },
  electric_blue: { label: 'Bleu électrique', color: '#1D4ED8', highlight: '#60A5FA' },
  purple: { label: 'Violet branché', color: '#7E22CE', highlight: '#C084FC' },
};

export const HAIR_STYLES_MAP: Record<HairStyle, { label: string; description: string }> = {
  afro: { label: 'Afro Volumineux', description: 'Volume naturel et iconique' },
  dreads: { label: 'Dreadlocks Stylées', description: 'Mèches tressées modernes' },
  braids: { label: 'Tresses & Nattes', description: 'Tressage soigné et élégant' },
  fade: { label: 'Dégradé Court (Taper)', description: 'Coupe fraîche et dynamique' },
  curls: { label: 'Boucles Définies', description: 'Ondulations et texture souple' },
  side_part: { label: 'Court avec Raie', description: 'Style soigné et sérieux' },
  high_puff: { label: 'Chignon Afro Puff', description: 'Puff haut chic avec élastique' },
  buzz: { label: 'Rasé Millimétré', description: 'Minimaliste et athlétique' },
};

export const CLOTHING_STYLES_MAP: Record<ClothingStyle, { label: string; description: string; tag: string }> = {
  uniform_blazer: { 
    label: 'Blazer Lycée National', 
    description: 'Veste de prestige avec chemise blanche, cravate rouge et blason doré AXIOM',
    tag: 'Scolaire'
  },
  gabon_jersey: { 
    label: 'Maillot Panthères (Gabon)', 
    description: 'Bandes tricolores Vert-Jaune-Bleu, écusson Panthère et coupe sportive',
    tag: 'National'
  },
  street_hoodie: { 
    label: 'Sweat à Capuche (Hoodie)', 
    description: 'Capuche enveloppante, cordons de serrage et grande poche kangourou',
    tag: 'Streetwear'
  },
  stem_polo: { 
    label: 'Polo Scientifique & Tech', 
    description: 'Col rabattu contrasté, patte de boutonnage et poche avec stylos de cours',
    tag: 'Tech'
  },
  traditional_wax: { 
    label: 'Tunique Wax & Broderies', 
    description: 'Boubou traditionnel gabonais avec col festonné et broderies dorées',
    tag: 'Tradition'
  },
  lab_coat: { 
    label: 'Blouse Blanche Laboratoire', 
    description: 'Blouse de recherche avec col tailleur, stylo et éprouvette de chimie',
    tag: 'Sciences'
  },
  academic_robe: { 
    label: 'Grande Toge d’Excellence', 
    description: 'Toge de major avec ample étole de lauréat dorée et médaille de promotion',
    tag: 'Honneur'
  },
};

export const CLOTHING_COLORS_MAP: Record<ClothingColor, { label: string; primary: string; secondary: string; light: string }> = {
  blue: { label: 'Bleu Royal', primary: '#2452FF', secondary: '#1D4ED8', light: '#DBEAFE' },
  green: { label: 'Vert Émeraude', primary: '#10B981', secondary: '#047857', light: '#D1FAE5' },
  red: { label: 'Rouge Rubis', primary: '#EF4444', secondary: '#B91C1C', light: '#FEE2E2' },
  amber: { label: 'Jaune Or / Ambre', primary: '#F59E0B', secondary: '#B45309', light: '#FEF3C7' },
  purple: { label: 'Violet Royal', primary: '#8B5CF6', secondary: '#6D28D9', light: '#EDE9FE' },
  slate: { label: 'Noir Anthracite', primary: '#334155', secondary: '#0F172A', light: '#F1F5F9' },
};

export const ACCESSORIES_MAP: Record<Accessory, { label: string; icon: string }> = {
  none: { label: 'Aucun accessoire', icon: '✨' },
  glasses_round: { label: 'Lunettes Rondes Intello', icon: '👓' },
  glasses_square: { label: 'Lunettes Modernes Carrées', icon: '🕶️' },
  headphones: { label: 'Casque Audio autour du cou', icon: '🎧' },
  gabon_headband: { label: 'Bandeau Tricolore Gabon', icon: '🇬🇦' },
  scholar_cap: { label: 'Toque de Major (Mortier)', icon: '🎓' },
  cap_reversed: { label: 'Casquette Visière Inversée', icon: '🧢' },
};

export const DEFAULT_AVATAR_CUSTOMIZATION: AvatarCustomization = {
  name: 'Moussa',
  genderStyle: 'neutral',
  headShape: 'round',
  skinTone: 'caramel',
  hairStyle: 'afro',
  hairColor: 'black',
  clothingStyle: 'uniform_blazer',
  clothingColor: 'blue',
  accessory: 'glasses_round',
  isInitialized: false,
};

const STORAGE_KEY = 'axiom_custom_avatar_v1';

export function loadAvatarCustomization(studentFullName?: string): AvatarCustomization {
  const defaultFirstName = extractFirstName(studentFullName || 'Moussa Obiang');
  const baseDefault: AvatarCustomization = {
    ...DEFAULT_AVATAR_CUSTOMIZATION,
    name: defaultFirstName,
  };

  if (typeof window === 'undefined') return baseDefault;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return baseDefault;
    const parsed = JSON.parse(raw);
    // If name was legacy 'Axiom' or empty, replace with student's first name
    const finalName = (!parsed.name || parsed.name === 'Axiom') ? defaultFirstName : parsed.name;
    const finalHeadShape: HeadShape = parsed.headShape || 'round';
    return { ...baseDefault, ...parsed, headShape: finalHeadShape, name: finalName };
  } catch {
    return baseDefault;
  }
}

export function saveAvatarCustomization(customization: AvatarCustomization): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customization));
  } catch {
    // Ignore storage quota errors
  }
}
