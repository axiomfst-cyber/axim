import { SkillNode, ExerciseQuestion } from '../types';

// =====================================================================
// PROGRAMME OFFICIEL DE MATHÉMATIQUES : PREMIÈRE S (27 CHAPITRES)
// Représentation uniforme en parcours de compétences (identique à Seconde)
// =====================================================================

export const PREMIERE_S_MATH_SKILLS: SkillNode[] = [
  // -------------------------------------------------------------------
  // MODULE 1 : LOGIQUE & RAISONNEMENT
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap1-logique',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 1 : Éléments de Logique & Raisonnements',
    description: 'Conjonctions « ET » et « OU », implication (P ⇒ Q), équivalence (P ⇔ Q), quantificateurs (∀, ∃), négation et contraposée.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 70,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Module 1 : Logique & Raisonnement',
    order: 1,
    topics: [
      'Les conjonctions « ET » et « OU »',
      'L\'implication et propositions équivalentes',
      'Quantificateurs (∀, ∃) et négation',
      'Contraposée d\'une implication'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 2 : SECOND DEGRÉ & TRINÔMES
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap2-second-degre-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 2 : Second Degré (A) : Trinôme, Discriminant & Racines',
    description: 'Trinôme ax² + bx + c, discriminant Δ = b² - 4ac, racines et factorisation a(x - x₁)(x - x₂), somme (S = -b/a) et produit (P = c/a).',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-chap1-logique'],
    masteryScore: 85,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Module 2 : Second Degré & Trinômes',
    order: 2,
    topics: [
      'Trinôme du second degré et discriminant Δ',
      'Factorisation et calcul des racines réelles',
      'Somme S et produit P des racines'
    ]
  },
  {
    id: 'skill-1s-chap4-second-degre-b',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 3 : Second Degré (B) : Signe du Trinôme & Inéquations',
    description: 'Signe du binôme px + q et du trinôme ax² + bx + c (signe de "a" hors des racines), résolution d\'inéquations et tableaux de signes.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-chap2-second-degre-a'],
    masteryScore: 75,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Module 2 : Second Degré & Trinômes',
    order: 3,
    topics: [
      'Tableaux de signes et règles du signe de ax² + bx + c',
      'Résolution méthodique des inéquations du second degré',
      'Intersections et unions d\'intervalles solutions'
    ]
  },
  {
    id: 'skill-1s-chap6-second-degre-c',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 4 : Second Degré (C) : Forme Canonique & Parabole',
    description: 'Forme canonique a(x - α)² + β, sommet S(α, β), axe de symétrie x = α, tableau récapitulatif complet et optimisation.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap4-second-degre-b'],
    masteryScore: 50,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 2 : Second Degré & Trinômes',
    order: 4,
    topics: [
      'Mise sous forme canonique a(x - α)² + β',
      'Sommet de la parabole et axe de symétrie',
      'Problèmes d\'optimisation et extremums locaux'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 3 : GÉOMÉTRIE ANALYTIQUE DU PLAN
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap3-geom-analytique-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 5 : Géométrie Analytique du Plan : Vecteur Normal & Droites',
    description: 'Vecteur normal n(a ; b) à une droite ax + by + c = 0, équation cartésienne et calcul de la distance d\'un point à une droite.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 60,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Module 3 : Géométrie Analytique du Plan',
    order: 5,
    topics: [
      'Vecteur normal n(a ; b) à une droite',
      'Équation cartésienne ax + by + c = 0',
      'Distance d(A, D) = |axA + byA + c| / √(a² + b²)'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 4 : TRANSFORMATIONS DU PLAN & ISOMÉTRIES
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap5-transformations-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 6 : Transformations du Plan (A) : Isométries Fondamentales',
    description: 'Symétries orthogonales (réflexions), symétries centrales, translations et conservation des distances, angles et alignements.',
    difficulty: 2,
    prerequisiteIds: ['skill-1s-chap3-geom-analytique-a'],
    masteryScore: 40,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 4 : Transformations du Plan',
    order: 6,
    topics: [
      'Symétries axiales et centrales',
      'Translations et vecteurs de glissement',
      'Propriétés de conservation des isométries'
    ]
  },
  {
    id: 'skill-1s-chap27-transformations-b',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 7 : Transformations du Plan (B) : Composées & Rotations',
    description: 'Composée de deux réflexions d\'axes parallèles (translation) ou sécants (rotation d\'angle 2θ), décomposition d\'une isométrie.',
    difficulty: 5,
    prerequisiteIds: ['skill-1s-chap5-transformations-a'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 4 : Transformations du Plan',
    order: 7,
    topics: [
      'Composée de deux réflexions d\'axes parallèles (translation)',
      'Composée de deux réflexions d\'axes sécants (rotation)',
      'Décomposition géométrique des isométries planes'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 5 : GÉOMÉTRIE & VECTEURS DANS L'ESPACE
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap7-vecteurs-espace',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 8 : Vecteurs de l\'Espace : Colinéarité & Coplanarité',
    description: 'Vecteurs dans l\'espace 3D, colinéarité de deux vecteurs, coplanarité de trois vecteurs et caractérisation de plans.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 25,
    tier: 'Découverte',
    status: 'available',
    unit: 'Module 5 : Géométrie dans l\'Espace',
    order: 8,
    topics: [
      'Colinéarité de deux vecteurs dans l\'espace',
      'Coplanarité de trois vecteurs (u = au₁ + bu₂)',
      'Caractérisation vectorielle d\'une droite et d\'un plan'
    ]
  },
  {
    id: 'skill-1s-chap12-bases-repere-espace-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 9 : Bases & Repères Cartésiens de l\'Espace',
    description: 'Bases (i, j, k) de l\'espace vectoriel, repères cartésiens (O; i, j, k), coordonnées de points et calculs métriques.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-chap7-vecteurs-espace'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 5 : Géométrie dans l\'Espace',
    order: 9,
    topics: [
      'Bases de l\'espace (triplets non coplanaires)',
      'Repères cartésiens (O; i, j, k)',
      'Coordonnées du milieu et distance de deux points'
    ]
  },
  {
    id: 'skill-1s-chap16-orthogonalite',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 10 : Orthogonalité dans l\'Espace & Plans Perpendiculaires',
    description: 'Droites orthogonales dans l\'espace, droite perpendiculaire à un plan, plans perpendiculaires et théorèmes clés.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap12-bases-repere-espace-a'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 5 : Géométrie dans l\'Espace',
    order: 10,
    topics: [
      'Droites orthogonales (sans intersection obligatoire)',
      'Droite orthogonale à un plan',
      'Plans perpendiculaires et critères d\'orthogonalité'
    ]
  },
  {
    id: 'skill-1s-chap24-geom-espace-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 11 : Géométrie Analytique de l\'Espace : Droites & Plans',
    description: 'Représentation paramétrique d\'une droite dans l\'espace, vecteur normal n(a, b, c) et équation cartésienne ax + by + cz + d = 0.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap16-orthogonalite'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 5 : Géométrie dans l\'Espace',
    order: 11,
    topics: [
      'Système d\'équations paramétriques d\'une droite',
      'Vecteur normal à un plan',
      'Équation cartésienne ax + by + cz + d = 0 d\'un plan'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 6 : ANALYSE & GÉNÉRALITÉS SUR LES FONCTIONS
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap9-generalites-fonctions-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 12 : Fonctions (A) : Restriction, Monotonie & Composition',
    description: 'Restriction et prolongement, monotonie stricte, composition de fonctions (g ∘ f)(x) = g(f(x)) et domaine de définition.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-chap6-second-degre-c'],
    masteryScore: 15,
    tier: 'Découverte',
    status: 'available',
    unit: 'Module 6 : Analyse & Fonctions',
    order: 12,
    topics: [
      'Restriction et prolongement d\'une fonction',
      'Monotonie sur un intervalle',
      'Composition de fonctions (g ∘ f)'
    ]
  },
  {
    id: 'skill-1s-chap10-generalites-fonctions-b',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 13 : Fonctions (B) : Opérations & Courbes Associées',
    description: 'Opérations f + g, λf, fg, f/g, et déductions graphiques des courbes : f(x) + k, f(x + k), -f(x) et |f(x)|.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-chap9-generalites-fonctions-a'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 6 : Analyse & Fonctions',
    order: 13,
    topics: [
      'Opérations algébriques sur les fonctions',
      'Fonctions associées et transformations de courbes',
      'Symétries et translations de représentations graphiques'
    ]
  },
  {
    id: 'skill-1s-chap15-generalites-fonctions-c',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 14 : Fonctions (C) : Injections, Surjections & Bijections',
    description: 'Applications injectives, surjectives, bijectives, bijection réciproque f⁻¹ et positions relatives de courbes f(x) - g(x).',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap10-generalites-fonctions-b'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 6 : Analyse & Fonctions',
    order: 14,
    topics: [
      'Injections, surjections et bijections',
      'Bijection réciproque et symétrie par rapport à y = x',
      'Positions relatives de deux courbes f(x) et g(x)'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 7 : LIMITES & CONTINUITÉ
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap8-limites-continuite-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 15 : Limites & Continuité (A) : Fonctions de Référence',
    description: 'Approche intuitive de la limite (en un point et en ±∞), limites des fonctions de référence (x², 1/x, √x) et asymptotes.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-chap9-generalites-fonctions-a'],
    masteryScore: 20,
    tier: 'Découverte',
    status: 'available',
    unit: 'Module 7 : Limites & Continuité',
    order: 15,
    topics: [
      'Approche intuitive de la notion de limite',
      'Limites des fonctions usuelles en 0 et en l\'infini',
      'Asymptotes horizontales et verticales'
    ]
  },
  {
    id: 'skill-1s-chap21-limites-continuite-b',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 16 : Limites & Continuité (B) : Continuité en un Point',
    description: 'Définition de la continuité (lim f(x) = f(x₀)), continuité sur un intervalle et prolongement par continuité.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap8-limites-continuite-a'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 7 : Limites & Continuité',
    order: 16,
    topics: [
      'Continuité d\'une fonction en un point',
      'Continuité sur un intervalle',
      'Prolongement par continuité'
    ]
  },
  {
    id: 'skill-1s-chap26-limites-continuite-c',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 17 : Limites & Continuité (C) : Formes Indéterminées',
    description: 'Limites en l\'infini des polynômes et fractions rationnelles (termes de plus haut degré), formes indéterminées et théorèmes de comparaison.',
    difficulty: 5,
    prerequisiteIds: ['skill-1s-chap21-limites-continuite-b'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 7 : Limites & Continuité',
    order: 17,
    topics: [
      'Règle des termes dominants en l\'infini',
      'Résolution des formes indéterminées (0/0, ∞/∞, ∞-∞)',
      'Théorème des gendarmes et encadrements'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 8 : DÉRIVATION & TANGENTES
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap13-derivees-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 18 : Dérivation : Nombre Dérivé & Tangente à la Courbe',
    description: 'Taux d\'accroissement, nombre dérivé f\'(x₀), coefficient directeur et équation cartésienne de la tangente : y = f\'(x₀)(x - x₀) + f(x₀).',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap8-limites-continuite-a'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 8 : Dérivation & Tangentes',
    order: 18,
    topics: [
      'Taux d\'accroissement et nombre dérivé en x₀',
      'Interprétation géométrique comme pente de la tangente',
      'Équation de la tangente y = f\'(x₀)(x - x₀) + f(x₀)'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 9 : SUITES NUMÉRIQUES
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap11-suites-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 19 : Suites Numériques (A) : Définitions & Variations',
    description: 'Définition explicite un = f(n) et par récurrence un+1 = f(un), monotonie (un+1 - un) et suites majorées, minorées ou bornées.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-chap9-generalites-fonctions-a'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 9 : Suites Numériques',
    order: 19,
    topics: [
      'Modes de définition d\'une suite',
      'Sens de variation d\'une suite numérique',
      'Suites majorées, minorées et bornées'
    ]
  },
  {
    id: 'skill-1s-chap19-suites-b',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 20 : Suites Numériques (B) : Arithmétiques & Géométriques',
    description: 'Suites arithmétiques (terme général u₀ + nr, somme Sn) et suites géométriques (terme u₀·qⁿ, somme Sn), raison et limites intuitives.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-chap11-suites-a'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 9 : Suites Numériques',
    order: 20,
    topics: [
      'Suites arithmétiques (formule de récurrence et somme)',
      'Suites géométriques (raison q, terme explicite et somme)',
      'Comportement asymptotique selon la raison'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 10 : PRODUIT SCALAIRE & TRIGONOMÉTRIE
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap14-produit-scalaire',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 21 : Produit Scalaire dans le Plan & Théorème d\'Al-Kashi',
    description: 'Expressions du produit scalaire (u·v = ||u||·||v||·cos θ, projection, analytique xx\' + yy\'), relations métriques et théorème d\'Al-Kashi.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap3-geom-analytique-a'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 10 : Produit Scalaire & Trigonométrie',
    order: 21,
    topics: [
      'Définitions du produit scalaire (géométrique et coordonnées)',
      'Théorème d\'Al-Kashi : a² = b² + c² - 2bc cos Â',
      'Théorème de la médiane et relations métriques'
    ]
  },
  {
    id: 'skill-1s-chap20-angles-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 22 : Angles Orientés de Vecteurs & Cercle Trigonométrique',
    description: 'Angles orientés de vecteurs, mesure principale dans ]-π ; π], relation de Chasles pour les angles et angles au centre/inscrits.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap14-produit-scalaire'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 10 : Produit Scalaire & Trigonométrie',
    order: 22,
    topics: [
      'Mesure principale d\'un angle orienté dans ]-π ; π]',
      'Relation de Chasles pour les angles orientés',
      'Angles au centre et angles inscrits'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 11 : INITIATION À L'ALGORITHMIQUE & DÉNOMBREMENT
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap17-algorithmique',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 23 : Initiation à l\'Algorithmique & Structures de Contrôle',
    description: 'Variables, typage, affectation, instructions conditionnelles (SI... ALORS... SINON) et boucles (POUR, TANT QUE).',
    difficulty: 2,
    prerequisiteIds: ['skill-1s-chap1-logique'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 11 : Algorithmique & Dénombrement',
    order: 23,
    topics: [
      'Variables, typage et instructions d\'affectation',
      'Structures de contrôle conditionnelles (SI/SINON)',
      'Boucles bornées (POUR) et non bornées (TANT QUE)'
    ]
  },
  {
    id: 'skill-1s-chap18-denombrement-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 24 : Dénombrement : Cardinaux, Arrangements & Permutations',
    description: 'Cardinal d\'ensembles finis, produit cartésien, p-listes (n^p), arrangements An^p = n! / (n-p)! et permutations n!.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap17-algorithmique'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 11 : Algorithmique & Dénombrement',
    order: 24,
    topics: [
      'Cardinal d\'ensembles finis et principe de la somme',
      'Produit cartésien et p-listes (avec répétition)',
      'Arrangements et permutations (sans répétition)'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 12 : BARYCENTRE & ARITHMÉTIQUE
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-chap22-barycentre-a',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 25 : Barycentre (A) : Deux Points Pondérés',
    description: 'Barycentre de (A, a) et (B, b) avec a+b ≠ 0 : a·GA + b·GB = 0 ⇔ AG = (b/(a+b))·AB, homogénéité et réduction vectorielle.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 12 : Barycentre & Arithmétique',
    order: 25,
    topics: [
      'Définition vectorielle du barycentre de deux points',
      'Relation de réduction a·MA + b·MB = (a+b)·MG',
      'Alignement des points et position relative'
    ]
  },
  {
    id: 'skill-1s-chap25-barycentre-b',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 26 : Barycentre (B) : 3 et 4 Points & Associativité',
    description: 'Barycentre de 3 et 4 points pondérés, théorème d\'associativité (barycentres partiels), centre de gravité et coordonnées.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap22-barycentre-a'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 12 : Barycentre & Arithmétique',
    order: 26,
    topics: [
      'Barycentre de trois et quatre points pondérés',
      'Théorème d\'associativité (barycentre partiel)',
      'Centre de gravité du triangle et coordonnées barycentriques'
    ]
  },
  {
    id: 'skill-1s-chap23-arithmetique',
    subjectId: 'math',
    levelId: '1ere-s',
    name: 'Chapitre 27 : Arithmétique : Divisibilité, Nombres Premiers & PGCD',
    description: 'Multiples et diviseurs dans Z, division euclidienne, nombres premiers, bases de numération, algorithme d\'Euclide et PGCD.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-chap1-logique'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 12 : Barycentre & Arithmétique',
    order: 27,
    topics: [
      'Multiples, diviseurs et division euclidienne',
      'Nombres premiers et décomposition en facteurs premiers',
      'Écriture en base a (a ≥ 2)',
      'Algorithme d\'Euclide et calcul du PGCD'
    ]
  }
];

// Questions d'exercices clés pour la classe de Première S
export const PREMIERE_S_QUESTIONS: ExerciseQuestion[] = [
  // SÉQUENCE 1 / CHAPITRE 1 : LOGIQUE
  {
    id: 'q-1s-seq1-1',
    exerciseId: 'ex-1s-seq1',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Contraposée d\'une implication',
    microConcept: 'La contraposée de l\'implication (P ⇒ Q) est (non Q ⇒ non P). Une implication et sa contraposée ont TOUJOURS la même valeur de vérité (elles sont logiquement équivalentes).',
    hint: 'La contraposée inverse l\'ordre des propositions et les nie toutes les deux.',
    prompt: 'Quelle est la contraposée exacte de l\'implication : « Si x² = 4, alors x = 2 ou x = -2 » ?',
    options: [
      'Si x ≠ 2 et x ≠ -2, alors x² ≠ 4',
      'Si x ≠ 2 ou x ≠ -2, alors x² ≠ 4',
      'Si x = 2 ou x = -2, alors x² = 4',
      'Si x² ≠ 4, alors x ≠ 2 et x ≠ -2'
    ],
    correctAnswer: 'Si x ≠ 2 et x ≠ -2, alors x² ≠ 4',
    commonMistake: 'Oublier d\'appliquer la loi de De Morgan : la négation de « A ou B » est « non A ET non B ».',
    explanation: 'Pour (P ⇒ Q), la contraposée est (non Q ⇒ non P). Ici Q est « x = 2 OU x = -2 ». Sa négation est « x ≠ 2 ET x ≠ -2 ». Donc la contraposée est « Si x ≠ 2 et x ≠ -2, alors x² ≠ 4 ».',
    steps: [
      '1. Identifier P : « x² = 4 » et Q : « x = 2 ou x = -2 ».',
      '2. Règle de contraposition : non Q ⇒ non P.',
      '3. Négation de (A ou B) selon De Morgan : (non A et non B), soit « x ≠ 2 et x ≠ -2 ».',
      '4. Conclusion : « Si x ≠ 2 et x ≠ -2, alors x² ≠ 4 ».'
    ]
  },
  {
    id: 'q-1s-seq1-2',
    exerciseId: 'ex-1s-seq1',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Négation d\'une proposition avec quantificateurs',
    microConcept: 'La négation de « ∀x ∈ E, P(x) » est « ∃x ∈ E, non P(x) ». Le quantificateur universel (∀) se transforme en quantificateur existentiel (∃) et la propriété est niée.',
    hint: 'Pour nier que TOUS les éléments vérifient une propriété, il suffit qu\'au moins UN ne la vérifie pas.',
    prompt: 'La négation de la proposition « Pour tout réel x, x² > 0 » est « Il existe au moins un réel x tel que x² ≤ 0 ».',
    options: [
      'Vrai (la négation de ∀ est ∃, et la négation stricte de > est ≤)',
      'Faux (la négation de ∀ est encore ∀ avec x² < 0)'
    ],
    correctAnswer: 'Vrai (la négation de ∀ est ∃, et la négation stricte de > est ≤)',
    commonMistake: 'Remplacer > par < au lieu de ≤ (0 est un contre-exemple car 0² = 0 n\'est pas > 0).',
    explanation: 'La négation de « ∀x ∈ R, x² > 0 » est « ∃x ∈ R, non(x² > 0) » soit « ∃x ∈ R, x² ≤ 0 ». C\'est vrai (notamment pour x = 0).',
    steps: [
      '1. Proposition initiale : ∀x ∈ R, x² > 0.',
      '2. Règle : non(∀x, P(x)) ⇔ ∃x, non P(x).',
      '3. La négation de x² > 0 est x² ≤ 0.',
      '4. Donc la proposition est vraie.'
    ]
  },

  // SÉQUENCE 3 / CHAPITRE 5 : GÉOMÉTRIE ANALYTIQUE
  {
    id: 'q-1s-seq3-1',
    exerciseId: 'ex-1s-seq3',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Distance d\'un point à une droite',
    microConcept: 'La distance d\'un point A(xA, yA) à la droite D : ax + by + c = 0 est donnée par la formule : d(A, D) = |a·xA + b·yA + c| / √(a² + b²).',
    hint: 'Remplace xA = 1, yA = 2 dans l\'équation 3x + 4y - 1 = 0, calcule la valeur absolue, puis divise par √(3² + 4²) = 5.',
    prompt: 'Calculer la distance du point A(1 ; 2) à la droite (D) d\'équation cartésienne 3x + 4y - 1 = 0. (Entrer un nombre entier)',
    correctAnswer: 2,
    commonMistake: 'Oublier de prendre la racine au dénominateur : √(3² + 4²) = √25 = 5.',
    explanation: 'Numérateur = |3(1) + 4(2) - 1| = |3 + 8 - 1| = |10| = 10. Dénominateur = √(3² + 4²) = √(9 + 16) = √25 = 5. Distance = 10 / 5 = 2.',
    steps: [
      '1. Formule : d = |a·xA + b·yA + c| / √(a² + b²).',
      '2. Numérateur : |3(1) + 4(2) - 1| = 10.',
      '3. Dénominateur : √(9 + 16) = 5.',
      '4. d = 10 / 5 = 2.'
    ]
  },

  // SÉQUENCE 13 / CHAPITRE 18 : DÉRIVÉES
  {
    id: 'q-1s-seq13-1',
    exerciseId: 'ex-1s-seq13',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Nombre dérivé et coefficient directeur de la tangente',
    microConcept: 'Pour f(x) = x², la dérivée est f\'(x) = 2x. Le nombre dérivé en x₀ = 3 est f\'(3) = 6, qui représente la pente de la tangente au point d\'abscisse 3.',
    hint: 'Calcule la dérivée de f(x) = x² en x = 3 : f\'(3) = 2 × 3.',
    prompt: 'Quel est le coefficient directeur de la tangente à la courbe de f(x) = x² au point d\'abscisse x₀ = 3 ? (Entrer un nombre entier)',
    correctAnswer: 6,
    commonMistake: 'Confondre l\'image f(3) = 9 avec le nombre dérivé f\'(3) = 6.',
    explanation: 'Le coefficient directeur de la tangente en x₀ est égal au nombre dérivé f\'(x₀). Pour f(x) = x², f\'(x) = 2x, donc f\'(3) = 2 × 3 = 6.',
    steps: [
      '1. Fonction : f(x) = x².',
      '2. Fonction dérivée : f\'(x) = 2x.',
      '3. Évaluation en x = 3 : f\'(3) = 2(3) = 6.'
    ]
  },

  // SÉQUENCE 14 / CHAPITRE 21 : THÉORÈME D'AL-KASHI
  {
    id: 'q-1s-seq14-1',
    exerciseId: 'ex-1s-seq14',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Théorème d\'Al-Kashi (Loi des cosinus)',
    microConcept: 'Dans tout triangle ABC, a² = b² + c² - 2bc cos Â, où a = BC, b = AC, c = AB. Si l\'angle Â = 60°, alors cos(60°) = 1/2.',
    hint: 'b = 5, c = 8, Â = 60°. a² = 5² + 8² - 2(5)(8)(1/2) = 25 + 64 - 40 = 49. Que vaut a = √49 ?',
    prompt: 'Dans un triangle ABC, on donne b = AC = 5, c = AB = 8 et l\'angle Â = 60°. Quelle est la longueur du côté a = BC ? (Entrer un nombre entier)',
    correctAnswer: 7,
    commonMistake: 'Oublier le facteur 2 dans le terme -2bc cos Â ou oublier de prendre la racine carrée de a² = 49.',
    explanation: 'D\'après Al-Kashi : a² = b² + c² - 2bc cos Â = 25 + 64 - 2(5)(8)(0.5) = 89 - 40 = 49. Donc a = √49 = 7.',
    steps: [
      '1. Formule d\'Al-Kashi : a² = b² + c² - 2bc cos Â.',
      '2. Remplacement : a² = 5² + 8² - 2(5)(8)(0.5) = 25 + 64 - 40 = 49.',
      '3. Longueur BC : a = √49 = 7.'
    ]
  },

  // SÉQUENCE 22 / CHAPITRE 25 : BARYCENTRE
  {
    id: 'q-1s-seq22-1',
    exerciseId: 'ex-1s-seq22',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Barycentre de deux points pondérés',
    microConcept: 'Si G est le barycentre de (A, a) et (B, b) avec a + b ≠ 0, alors AG = (b / (a + b))·AB.',
    hint: 'Pour (A, 1) et (B, 3), a = 1, b = 3. a + b = 4. Alors AG = (3/4)·AB = 0.75·AB.',
    prompt: 'Soit G le barycentre de (A, 1) et (B, 3). Si AB = 12 cm, quelle est la distance AG en centimètres ? (Entrer un nombre entier)',
    correctAnswer: 9,
    commonMistake: 'Faire AG = (1/4)·AB = 3 cm en attribuant le coefficient de A à la distance AG (rappel : AG = (b/(a+b))·AB, le point G est plus proche du point le plus lourd B).',
    explanation: 'AG = (b / (a + b))·AB = (3 / (1 + 3)) × 12 = (3/4) × 12 = 9 cm.',
    steps: [
      '1. Relation barycentrique : AG = [b / (a + b)]·AB.',
      '2. a = 1, b = 3, donc a + b = 4.',
      '3. AG = (3 / 4) × 12 = 9 cm.'
    ]
  },

  // SÉQUENCE 23 / CHAPITRE 27 : ARITHMÉTIQUE
  {
    id: 'q-1s-seq23-1',
    exerciseId: 'ex-1s-seq23',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Algorithme d\'Euclide et PGCD',
    microConcept: 'L\'algorithme d\'Euclide repose sur la propriété PGCD(a, b) = PGCD(b, r) où r est le reste de la division euclidienne de a par b. Le PGCD est le dernier reste non nul.',
    hint: '132 = 48 × 2 + 36. 48 = 36 × 1 + 12. 36 = 12 × 3 + 0.',
    prompt: 'Calculer le PGCD des nombres 132 et 48 à l\'aide de l\'algorithme d\'Euclide. (Entrer un nombre entier)',
    correctAnswer: 12,
    commonMistake: 'Prendre le reste nul (0) ou s\'arrêter avant le dernier reste non nul.',
    explanation: '132 = 48 × 2 + 36 ; 48 = 36 × 1 + 12 ; 36 = 12 × 3 + 0. Le dernier reste non nul est 12, donc PGCD(132, 48) = 12.',
    steps: [
      '1. 132 = 48 × 2 + 36 (reste = 36).',
      '2. 48 = 36 × 1 + 12 (reste = 12).',
      '3. 36 = 12 × 3 + 0 (reste = 0).',
      '4. Le dernier reste non nul est 12 : PGCD(132, 48) = 12.'
    ]
  }
];
