export type UserRole = 'student' | 'teacher' | 'admin' | 'parent';

export type SchoolLevel = 'Collège' | 'Lycée';

export type MasteryTier = 
  | 'Non commencée'   // 0%
  | 'Découverte'      // 1-39%
  | 'En cours'        // 40-59%
  | 'Acquise'         // 60-79%
  | 'Maîtrisée'       // 80-94%
  | 'Excellence';     // 95-100%

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: string;
  totalSkills: number;
}

export interface SkillNode {
  id: string;
  subjectId: string;
  levelId: string;
  name: string;
  description: string;
  difficulty: number; // 1 - 5
  prerequisiteIds: string[];
  masteryScore: number; // 0 - 100
  tier: MasteryTier;
  status: 'locked' | 'available' | 'in_progress' | 'acquired' | 'mastered' | 'excellence';
  unit: string;
  order: number;
  sequenceNumber?: number;
  trimester?: string;
  week?: string;
  evaluationMilestone?: string;
  topics?: string[];
}

export interface ExerciseQuestion {
  id: string;
  exerciseId: string;
  type: 'mcq' | 'numeric' | 'true_false';
  prompt: string;
  microConcept?: string; // Rappel clé ou formule avant la question (style Mimo)
  hint?: string; // Indice à la demande
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  commonMistake?: string; // Piège fréquent expliqué en cas d'erreur
  steps?: string[]; // Décomposition de la résolution étape par étape
  difficulty: number; // 1 (facile) à 5 (très difficile)
  difficultyLabel?: string; // Ex: 'Niveau 1 : Découverte', 'Niveau 5 : Très difficile'
}

export interface BadgeItem {
  id: string;
  name: string;
  condition: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  category: 'streak' | 'mastery' | 'xp' | 'exam';
}

export interface SchoolClassDefinition {
  id: string;
  name: string;
  grade: 'Seconde' | 'Première' | 'Terminale';
  track: string;
  description: string;
  focusSubjects: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  currentClass: string;
  classId: string;
  schoolName?: string;
  schoolLevel: SchoolLevel;
  totalXp: number;
  streakDays: number;
  subjectXp: Record<string, number>;
}

