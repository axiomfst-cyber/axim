import { SkillNode } from '../types';

export interface WeeklyChallenge {
  id: string;
  weekNumber: number;
  weekLabel: string;
  daysRemaining: number;
  classIdMatch: string; // e.g., '1ere-ab', '1ere-s', 'term-cd', 'all'
  targetSkillId: string;
  sequenceNumber?: number;
  title: string;
  domain: string;
  subjectName: string;
  subjectId: string;
  description: string;
  keyObjective: string;
  xpBonus: number;
  requiredMasteryScore: number; // default 60 (Acquise)
}

// Calculate current week of year and days remaining until Sunday 23:59
export function getCurrentSchoolWeekInfo() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;
  const currentWeek = Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);

  // Days left until Sunday (day 0)
  const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday ...
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  const hoursUntilMidnight = 23 - now.getHours();

  return {
    weekNumber: currentWeek,
    weekLabel: `Semaine ${currentWeek}`,
    daysRemaining: daysUntilSunday,
    hoursRemaining: hoursUntilMidnight,
    timeRemainingText: daysUntilSunday === 0 
      ? `${hoursUntilMidnight}h restantes (Dernier jour !)` 
      : `${daysUntilSunday}j ${hoursUntilMidnight}h restants`,
  };
}

export const WEEKLY_CHALLENGES_CATALOG: WeeklyChallenge[] = [
  // 1ère A1 / 1ère B (Programme 29 Séquences Gabon)
  {
    id: 'challenge-1ab-seq2',
    weekNumber: 37,
    weekLabel: 'Semaine 37',
    daysRemaining: 4,
    classIdMatch: '1ere-a',
    targetSkillId: 'skill-1ab-m-seq2-second-degre-res',
    sequenceNumber: 2,
    title: 'Séquence 2 : Résolution d’équations et inéquations du 2nd degré',
    domain: 'Algèbre',
    subjectName: 'Mathématiques 1ère A1 & B',
    subjectId: 'math',
    description: 'Calculez le discriminant Δ = b² - 4ac, trouvez les racines réelles et dressez le tableau de signe.',
    keyObjective: 'Valider 100% des questions avec le chrono 10s et atteindre le palier "Acquis" (≥ 60%).',
    xpBonus: 350,
    requiredMasteryScore: 60
  },
  {
    id: 'challenge-1ab-seq4',
    weekNumber: 38,
    weekLabel: 'Semaine 38',
    daysRemaining: 6,
    classIdMatch: '1ere-b',
    targetSkillId: 'skill-1ab-m-seq4-denombrement-tirages',
    sequenceNumber: 4,
    title: 'Séquence 4 : Dénombrement et Tirages dans une urne',
    domain: 'Organisation de données',
    subjectName: 'Mathématiques 1ère B',
    subjectId: 'math',
    description: 'Distinguez arrangements sans remise et combinaisons simultanées sans hésiter face au chrono.',
    keyObjective: 'Maîtriser les formules A_n^p et C_n^p en situation concrète de tirage.',
    xpBonus: 350,
    requiredMasteryScore: 60
  },
  // 1ère S
  {
    id: 'challenge-1s-cinematique',
    weekNumber: 37,
    weekLabel: 'Semaine 37',
    daysRemaining: 4,
    classIdMatch: '1ere-s',
    targetSkillId: 'skill-1s-pc-chap1-cinematique',
    title: 'Chapitre 1 : Cinématique & Vecteur Vitesse',
    domain: 'Mécanique',
    subjectName: 'Physique-Chimie 1ère S',
    subjectId: 'physics',
    description: 'Déterminez la nature du mouvement rectiligne uniforme ou uniformément varié et calculez l’accélération.',
    keyObjective: 'Résoudre les équations horaires sans copier-coller en moins de 10 secondes.',
    xpBonus: 300,
    requiredMasteryScore: 60
  },
  // Terminale C / D
  {
    id: 'challenge-term-cinematique',
    weekNumber: 37,
    weekLabel: 'Semaine 37',
    daysRemaining: 4,
    classIdMatch: 'term-c',
    targetSkillId: 'skill-tc-pc-ch1-cinematique-curviligne',
    title: 'Chapitre 1 : Cinématique dans le Repère de Frenet',
    domain: 'Mécanique Newtonienne',
    subjectName: 'Physique Terminale C & D',
    subjectId: 'physics',
    description: 'Exprimez l’accélération tangentielle et normale dans la base de Frenet (a_t et a_n = v²/ρ).',
    keyObjective: 'Appliquer immédiatement la deuxième loi de Newton.',
    xpBonus: 400,
    requiredMasteryScore: 60
  },
  // Seconde S
  {
    id: 'challenge-2s-reels',
    weekNumber: 37,
    weekLabel: 'Semaine 37',
    daysRemaining: 4,
    classIdMatch: '2nde-s',
    targetSkillId: 'skill-2s-m-reels',
    title: 'Séquence Fondations : Calculs dans ℝ et Intervalles',
    domain: 'Nombres et Calculs',
    subjectName: 'Mathématiques Seconde S',
    subjectId: 'math',
    description: 'Simplifiez les racines carrées, manipulez les valeurs absolues et intersections d’intervalles.',
    keyObjective: 'Développer des réflexes instantanés de calcul mental sans antisèche.',
    xpBonus: 250,
    requiredMasteryScore: 60
  }
];

const STORAGE_CLAIMED_WEEKLY_PREFIX = 'axiom_claimed_weekly_challenge_';

export function isWeeklyChallengeClaimed(challengeId: string, weekNumber: number): boolean {
  try {
    const key = `${STORAGE_CLAIMED_WEEKLY_PREFIX}${challengeId}_w${weekNumber}`;
    return localStorage.getItem(key) === 'true';
  } catch {
    return false;
  }
}

export function setWeeklyChallengeClaimed(challengeId: string, weekNumber: number): void {
  try {
    const key = `${STORAGE_CLAIMED_WEEKLY_PREFIX}${challengeId}_w${weekNumber}`;
    localStorage.setItem(key, 'true');
  } catch (e) {
    console.warn('Could not save weekly challenge state', e);
  }
}

// Find appropriate weekly challenge for user's class and current skill tree
export function getActiveWeeklyChallenge(classId: string, skills: SkillNode[]): {
  challenge: WeeklyChallenge;
  skill: SkillNode | undefined;
  isCompleted: boolean;
  isClaimed: boolean;
} {
  const weekInfo = getCurrentSchoolWeekInfo();

  // Find exact match or fallback
  let match = WEEKLY_CHALLENGES_CATALOG.find(c => c.classIdMatch === classId);
  if (!match) {
    // If 1ere-b or 1ere-a
    if (classId === '1ere-b') {
      match = WEEKLY_CHALLENGES_CATALOG.find(c => c.id === 'challenge-1ab-seq4') || WEEKLY_CHALLENGES_CATALOG[0];
    } else if (classId === '1ere-a') {
      match = WEEKLY_CHALLENGES_CATALOG.find(c => c.id === 'challenge-1ab-seq2') || WEEKLY_CHALLENGES_CATALOG[0];
    } else if (classId === 'term-d') {
      match = WEEKLY_CHALLENGES_CATALOG.find(c => c.id === 'challenge-term-cinematique') || WEEKLY_CHALLENGES_CATALOG[2];
    } else {
      match = WEEKLY_CHALLENGES_CATALOG[0];
    }
  }

  // Check if matching skill exists in current class skills
  let matchingSkill = skills.find(s => s.id === match?.targetSkillId);
  
  // If not found in the currently loaded skills (for instance if a different subject is loaded), find first available skill as target
  if (!matchingSkill && skills.length > 0) {
    matchingSkill = skills.find(s => s.status === 'in_progress' || s.status === 'available') || skills[0];
    if (matchingSkill) {
      match = {
        ...match,
        targetSkillId: matchingSkill.id,
        title: matchingSkill.name,
        subjectName: matchingSkill.unit || 'Programme Officiel',
        subjectId: matchingSkill.subjectId,
        description: matchingSkill.description || match.description,
      };
    }
  }

  const isCompleted = Boolean(matchingSkill && (matchingSkill.masteryScore >= match.requiredMasteryScore || matchingSkill.status === 'mastered' || matchingSkill.status === 'acquired' || matchingSkill.status === 'excellence'));
  const isClaimed = isWeeklyChallengeClaimed(match.id, weekInfo.weekNumber);

  return {
    challenge: {
      ...match,
      daysRemaining: weekInfo.daysRemaining,
    },
    skill: matchingSkill,
    isCompleted,
    isClaimed
  };
}
