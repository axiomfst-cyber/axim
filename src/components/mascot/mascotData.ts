import { AvatarCustomization, DEFAULT_AVATAR_CUSTOMIZATION } from './avatarTypes';

export type MascotId = 'avatar' | 'koko';

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
  // Alias pointing to avatar
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
  }
};
