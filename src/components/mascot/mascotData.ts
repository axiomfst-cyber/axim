import { AvatarCustomization, DEFAULT_AVATAR_CUSTOMIZATION } from './avatarTypes';

export type MascotId = 'avatar' | 'bao' | 'lily' | 'koko';

export type MascotMood = 
  | 'idle' 
  | 'thinking' 
  | 'option_selected' 
  | 'correct' 
  | 'incorrect' 
  | 'celebrating';

export interface MascotConfig {
  id: MascotId;
  name: string;
  species: string;
  tagline: string;
  personality: string;
  primaryColor: string;
  accentColor: string;
  badge: string;
  dialogues: {
    idle: string[];
    thinking: string[];
    optionSelected: string[];
    correct: string[];
    incorrect: string[];
    celebrating: string[];
  };
}

export const MASCOTS: Record<MascotId, MascotConfig> = {
  avatar: {
    id: 'avatar',
    name: 'Mon Avatar',
    species: 'Lycéen d\'AXIOM (Personnalisable)',
    tagline: 'Ton double animé stylé & motivé',
    personality: 'Curieux, ambitieux et toujours prêt à progresser',
    primaryColor: '#2452FF',
    accentColor: '#10B981',
    badge: '🎓',
    dialogues: {
      idle: [
        "Salut {name} ! Prêt à relever le défi de ce chapitre ?",
        "Une question après l'autre, on avance ensemble {name} !",
        "Je suis à tes côtés {name}, vise la mention Très Bien !",
        "Donnons le meilleur de nous-mêmes aujourd'hui {name} !"
      ],
      thinking: [
        "Regardons bien les hypothèses de l'énoncé...",
        "Quelle formule s'applique ici, {name} ?",
        "Prends le temps d'analyser chaque indice avec méthode."
      ],
      optionSelected: [
        "Choix validé ! Voyons si notre raisonnement tient la route !",
        "Intéressant ! On lance la vérification !",
        "C'est parti pour le verdict !"
      ],
      correct: [
        "YES {name} ! En plein dans le mille !",
        "Trop fort {name} ! Notre méthode est redoutable !",
        "Parfaitement raisonné ! Continue sur cette lancée {name} !",
        "Boom ! Un pas de plus vers l'Excellence !"
      ],
      incorrect: [
        "Pas de souci {name} ! C'est en faisant des erreurs qu'on progresse.",
        "Relis l'explication attentivement, la prochaine sera la bonne !",
        "Respire un bon coup {name}, on repart à l'assaut !",
        "On ne lâche rien {name}, j'ai confiance en notre logique !"
      ],
      celebrating: [
        "VICTOIRE {name} ! Chapitre validé avec brio !",
        "On a tout déchiré {name} ! Félicitations !",
        "Quel niveau impressionnant ! Tu es un vrai champion !"
      ]
    }
  },
  // Fallback alias for backward compatibility
  koko: {
    id: 'koko',
    name: 'Mon Avatar',
    species: 'Lycéen d\'AXIOM (Personnalisable)',
    tagline: 'Ton double animé stylé & motivé',
    personality: 'Curieux, ambitieux et toujours prêt à progresser',
    primaryColor: '#2452FF',
    accentColor: '#10B981',
    badge: '🎓',
    dialogues: {
      idle: [
        "Prêt à relever le défi de ce chapitre ?",
        "Une question après l'autre, on avance ensemble !"
      ],
      thinking: [
        "Regardons bien les hypothèses de l'énoncé..."
      ],
      optionSelected: [
        "Choix validé ! Vérifions ensemble !"
      ],
      correct: [
        "YES ! En plein dans le mille !"
      ],
      incorrect: [
        "Pas de souci ! On réessaie et on réussit !"
      ],
      celebrating: [
        "VICTOIRE ! Félicitations !"
      ]
    }
  },
  bao: {
    id: 'bao',
    name: 'Bao',
    species: 'La Panthère du Gabon',
    tagline: 'L\'énergie & la détermination',
    personality: 'Combattif, ultra dynamique et fier des réussites',
    primaryColor: '#F59E0B',
    accentColor: '#2452FF',
    badge: '🐆',
    dialogues: {
      idle: [
        "En forme pour tout déchirer aujourd'hui ?",
        "La persévérance, c'est le secret des grands bacheliers !",
        "Ton streak est impressionnant, ne lâche rien !",
        "Allez champion, montre de quoi tu es capable !"
      ],
      thinking: [
        "Concentration maximale, regarde les détails !",
        "Prépare ton tir, vise la bonne réponse !",
        "Garde le rythme, tu l'as !"
      ],
      optionSelected: [
        "Bien calé ! Prêt pour le verdict !",
        "C'est ton choix ? Allons-y à fond !",
        "C'est l'heure de vérité !"
      ],
      correct: [
        "BOOM ! En plein dans le mille !",
        "Quel réflexe magistral, respect !",
        "Tu es inarrêtable aujourd'hui !",
        "C'est du niveau mention Très Bien ça !"
      ],
      incorrect: [
        "Garde la tête haute ! On ajuste le tir et on repart !",
        "Un petit faux pas, c'est rien ! Tu as l'esprit d'un battant.",
        "Regarde le piège et passe à l'offensive !",
        "La prochaine est la bonne, j'ai confiance en toi !"
      ],
      celebrating: [
        "VICTOIRE TOTALE ! Quel champion !",
        "Niveau validé avec brio ! Respect infini !",
        "Tu as mis K.O. ce chapitre !"
      ]
    }
  },
  lily: {
    id: 'lily',
    name: 'Lily',
    species: 'La Renarde Ingénieuse',
    tagline: 'La logique, le calme & l\'élégance',
    personality: 'Astucieuse, ordonnée et toujours pleine de bons conseils',
    primaryColor: '#EC4899',
    accentColor: '#8B5CF6',
    badge: '🦊',
    dialogues: {
      idle: [
        "Chaque problème a sa solution méthodique !",
        "La rigueur est la politesse des esprits brillants.",
        "Besoin d'astuces ? Je suis à tes côtés !",
        "Un esprit calme résout tout avec aisance."
      ],
      thinking: [
        "Élimine d'abord les propositions impossibles...",
        "Vérifie la cohérence des unités et des signes !",
        "Applique la règle pas à pas."
      ],
      optionSelected: [
        "Très bon réflexe d'analyse !",
        "Ce choix a du sens, testons !",
        "Une hypothèse intéressante, vérifions !"
      ],
      correct: [
        "Parfaitement raisonné ! Tout en élégance !",
        "Logique implacable ! C'est net et sans bavure.",
        "Un travail d'orfèvre, bravo !",
        "Tu as déjoué tous les pièges, formidable !"
      ],
      incorrect: [
        "C'était un piège subtil ! Découvrons la clé.",
        "Ne te décourage surtout pas, analyse l'erreur.",
        "Prends le temps de lire le rappel de cours.",
        "La persévérance bat le talent quand le talent dort !"
      ],
      celebrating: [
        "Triomphe mérité ! Tu as fait preuve d'une logique remarquable !",
        "Chapitre complété avec honneur et distinction !",
        "Une vraie démonstration de maîtrise !"
      ]
    }
  }
};
