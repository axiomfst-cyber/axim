import { SkillNode } from '../types';

// =========================================================================================
// PROGRESSION OFFICIELLE EN INFORMATIQUE & PROGRAMMATION PYTHON
// De la Seconde à la Terminale : De l'initiation aux algorithmes avancés
// =========================================================================================

// -----------------------------------------------------------------------------------------
// 1. CLASSE DE SECONDE : INITIATION À LA LOGIQUE ET À PYTHON
// -----------------------------------------------------------------------------------------
export const SECONDE_CS_SKILLS: SkillNode[] = [
  {
    id: 'skill-2nde-cs-variables-types',
    subjectId: 'cs',
    levelId: '2nde-s',
    name: 'Variables & Types Primitifs (int, float, str, bool)',
    description: 'Découvrir comment stocker une valeur dans une variable. Distinguer les entiers (int), les décimaux/flottants (float), les chaînes de caractères (str) et les booléens (True/False). Fonctions type() et conversions int(), float(), str().',
    difficulty: 1,
    prerequisiteIds: [],
    masteryScore: 70,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Module 1 : Les Fondations de Python',
    order: 1
  },
  {
    id: 'skill-2nde-cs-affectation-calculs',
    subjectId: 'cs',
    levelId: '2nde-s',
    name: 'Affectation (=) & Calculs Algébriques (+, -, *, /, //, %, **)',
    description: 'Comprendre l\'opérateur d\'affectation = (mémoire vs égalité mathématique). Opérations arithmétiques fondamentales, division réelle (/), division entière (//), reste modulo (%) et puissances (**). Priorité des calculs.',
    difficulty: 2,
    prerequisiteIds: ['skill-2nde-cs-variables-types'],
    masteryScore: 50,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 1 : Les Fondations de Python',
    order: 2
  },
  {
    id: 'skill-2nde-cs-entrees-sorties',
    subjectId: 'cs',
    levelId: '2nde-s',
    name: 'Entrées & Sorties Interactives : input() et print()',
    description: 'Interagir avec l\'utilisateur : demander une saisie avec input() (toujours renvoyée en chaîne str), convertir la saisie (int(input()) ou float(input())), et afficher des résultats formatés avec print() et les f-strings.',
    difficulty: 2,
    prerequisiteIds: ['skill-2nde-cs-affectation-calculs'],
    masteryScore: 40,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 2 : Interaction & Entrées-Sorties',
    order: 3
  },
  {
    id: 'skill-2nde-cs-applications-maths',
    subjectId: 'cs',
    levelId: '2nde-s',
    name: 'Applications Mathématiques : Fonctions, Coordonnées & Distances',
    description: 'Traduire une formule mathématique en script Python : calcul d\'images f(x) = ax² + bx + c, calcul des coordonnées du milieu d\'un segment M((xA+xB)/2, (yA+yB)/2), et distance dans un repère avec la racine carrée sqrt().',
    difficulty: 3,
    prerequisiteIds: ['skill-2nde-cs-entrees-sorties'],
    masteryScore: 10,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 2 : Interaction & Entrées-Sorties',
    order: 4
  }
];

// -----------------------------------------------------------------------------------------
// 2. CLASSE DE PREMIÈRE : APPROFONDISSEMENT ET MODULARITÉ
// -----------------------------------------------------------------------------------------
export const PREMIERE_CS_SKILLS: SkillNode[] = [
  {
    id: 'skill-1ere-cs-conditions',
    subjectId: 'cs',
    levelId: '1ere-s',
    name: 'Instructions Conditionnelles (if, elif, else) & Logique Booléenne',
    description: 'Permettre au programme de faire des choix en utilisant if, elif et else. Opérateurs relationnels (==, !=, <, >, <=, >=) et opérateurs logiques (and, or, not). Indentation stricte et tables de vérité.',
    difficulty: 2,
    prerequisiteIds: ['skill-2nde-cs-applications-maths'],
    masteryScore: 60,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Module 1 : Logique & Contrôle du Flux',
    order: 1
  },
  {
    id: 'skill-1ere-cs-boucles',
    subjectId: 'cs',
    levelId: '1ere-s',
    name: 'Les Boucles : Boucle Bornée for & Boucle Non Bornée while',
    description: 'Répéter des actions : parcours borné avec for i in range(n) ou range(debut, fin, pas), et répétition conditionnelle avec while. Gestion du compteur, condition d\'arrêt et prévention des boucles infinies.',
    difficulty: 3,
    prerequisiteIds: ['skill-1ere-cs-conditions'],
    masteryScore: 45,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 1 : Logique & Contrôle du Flux',
    order: 2
  },
  {
    id: 'skill-1ere-cs-fonctions',
    subjectId: 'cs',
    levelId: '1ere-s',
    name: 'Les Fonctions (def, arguments, return) & Modularité',
    description: 'Décomposer un problème en sous-programmes réutilisables avec le mot-clé def. Paramètres d\'entrée, valeur de retour avec return. Distinction fondamentale entre afficher (print) et renvoyer une valeur (return). Portée des variables locales.',
    difficulty: 3,
    prerequisiteIds: ['skill-1ere-cs-boucles'],
    masteryScore: 30,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 2 : Fonctions & Modularité',
    order: 3
  },
  {
    id: 'skill-1ere-cs-listes',
    subjectId: 'cs',
    levelId: '1ere-s',
    name: 'Les Listes en Python : Indexation, Méthodes & Parcours',
    description: 'Première structure de données séquentielle mutable : syntaxe [ ], indexation de 0 à n-1, indices négatifs (L[-1]), longueur len(L). Méthodes indispensables : .append(), .pop(), .insert(), et parcours avec for x in L ou for i in range(len(L)).',
    difficulty: 3,
    prerequisiteIds: ['skill-1ere-cs-fonctions'],
    masteryScore: 15,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 2 : Structures de Données Linéaires',
    order: 4
  }
];

// -----------------------------------------------------------------------------------------
// 3. CLASSE DE TERMINALE : ALGORITHMES AVANCÉS ET STRUCTURES COMPLEXES
// -----------------------------------------------------------------------------------------
export const TERMINALE_CS_SKILLS: SkillNode[] = [
  {
    id: 'skill-term-cs-structures-avancees',
    subjectId: 'cs',
    levelId: 'term-c',
    name: 'Structures de Données Avancées : Dictionnaires, Tuples, Piles & Files',
    description: 'Manipuler des structures complexes : dictionnaires {clé: valeur} avec accès O(1) et méthodes .keys(), .values(), .items(). Tuples immuables ( ). Piles (LIFO : Last In, First Out) et Files (FIFO : First In, First Out). Notions d\'arbres et de graphes.',
    difficulty: 4,
    prerequisiteIds: ['skill-1ere-cs-listes'],
    masteryScore: 35,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 1 : Structures de Données Abstraites',
    order: 1
  },
  {
    id: 'skill-term-cs-tris-recherche',
    subjectId: 'cs',
    levelId: 'term-c',
    name: 'Algorithmes de Tri (Sélection, Insertion) & Recherche Dichotomique',
    description: 'Organiser et rechercher efficacement : tri par sélection du minimum, tri par insertion avec décalages successifs. Recherche dichotomique sur tableau trié : principe du pivot médian et division par deux de l\'espace de recherche.',
    difficulty: 4,
    prerequisiteIds: ['skill-term-cs-structures-avancees'],
    masteryScore: 20,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 2 : Algorithmique Fondamentale',
    order: 2
  },
  {
    id: 'skill-term-cs-recursivite',
    subjectId: 'cs',
    levelId: 'term-c',
    name: 'La Récursivité : Cas de Base & Pile d\'Exécution',
    description: 'Concevoir une fonction qui s\'appelle elle-même pour résoudre un problème. Identification impérative du cas de base (condition d\'arrêt) et du cas récursif. Compréhension de la pile d\'appels (call stack) et risque de dépassement de capacité.',
    difficulty: 5,
    prerequisiteIds: ['skill-term-cs-tris-recherche'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 3 : Paradigmes Avancés',
    order: 3
  },
  {
    id: 'skill-term-cs-complexite-diviser-regner',
    subjectId: 'cs',
    levelId: 'term-c',
    name: 'Complexité Temporelle (Grand O) & Paradigme « Diviser pour Régner »',
    description: 'Évaluer l\'efficacité asymptotique d\'un algorithme en temps et en mémoire : O(1), O(log n), O(n), O(n²). Stratégie algorithmique « Diviser pour Régner » : diviser en sous-problèmes indépendants, régner, puis combiner. Exemple du Tri Fusion (Merge Sort).',
    difficulty: 5,
    prerequisiteIds: ['skill-term-cs-recursivite'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'locked',
    unit: 'Module 3 : Paradigmes Avancés',
    order: 4
  }
];

export const ALL_CS_SKILLS: SkillNode[] = [
  ...SECONDE_CS_SKILLS,
  ...PREMIERE_CS_SKILLS,
  ...TERMINALE_CS_SKILLS
];
