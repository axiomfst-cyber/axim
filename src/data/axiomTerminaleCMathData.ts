import { SkillNode } from '../types';

// =========================================================================================
// PROGRAMME OFFICIEL DE MATHÉMATIQUES : TERMINALE C (GABON - IPN / IGS-R)
// Répartition complète selon les 4 Blocs fondamentaux du Baccalauréat C
// =========================================================================================

export const TERMINALE_C_MATH_SKILLS: SkillNode[] = [
  // =======================================================================================
  // 📐 BLOC 1 : ALGÈBRE ET ARITHMÉTIQUE
  // =======================================================================================
  {
    id: 'skill-tc-arithmetique-z',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Arithmétique dans ℤ & Équations Diophantiennes',
    description: 'Divisibilité dans ℤ, division euclidienne, congruences modulo n, PGCD, PPCM, algorithme d’Euclide, théorèmes de Bézout et de Gauss, équations diophantiennes ax + by = c et systèmes de numération.',
    difficulty: 5,
    prerequisiteIds: [],
    masteryScore: 65,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Bloc 1 : Algèbre et Arithmétique',
    order: 1,
    topics: [
      'Divisibilité, division euclidienne et congruences dans ℤ',
      'PGCD, PPCM et algorithme d’Euclide',
      'Théorème de Bézout, entiers premiers entre eux et identité de Bézout',
      'Théorème de Gauss et conséquences arithmétiques',
      'Résolution générale des équations diophantiennes ax + by = c',
      'Systèmes de numération en base b et critères de divisibilité'
    ]
  },
  {
    id: 'skill-tc-nombres-complexes',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Nombres Complexes & Applications Géométriques',
    description: 'Formes algébrique, trigonométrique et exponentielle, formules d’Euler et de Moivre, résolution d’équations dans ℂ (second degré, degré supérieur, racines n-ièmes), et interprétations géométriques (distances, angles orientés, cocyclicité).',
    difficulty: 4,
    prerequisiteIds: ['skill-tc-arithmetique-z'],
    masteryScore: 78,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Bloc 1 : Algèbre et Arithmétique',
    order: 2,
    topics: [
      'Forme algébrique, conjugaison, module et argument dans ℂ',
      'Forme exponentielle, formules d’Euler et formule de De Moivre',
      'Résolution d’équations du second degré et factorisation de polynômes complexes',
      'Racines n-ièmes de l’unité et d’un nombre complexe',
      'Interprétations géométriques : affixes de vecteurs, barycentres, orthogonalité et alignement',
      'Configurations remarquables du plan complexe et cocyclicité'
    ]
  },
  {
    id: 'skill-tc-structures-algebriques',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Structures Algébriques (Groupes, Anneaux, Corps)',
    description: 'Lois de composition internes (associativité, commutativité, élément neutre, symétrique), structure de groupe (G, *), sous-groupes, morphismes de groupes, anneaux intègres et corps commutatifs (ℚ, ℝ, ℂ, ℤ/pℤ).',
    difficulty: 5,
    prerequisiteIds: ['skill-tc-arithmetique-z'],
    masteryScore: 50,
    tier: 'En cours',
    status: 'in_progress',
    unit: 'Bloc 1 : Algèbre et Arithmétique',
    order: 3,
    topics: [
      'Lois de composition interne (LCI) et propriétés caractéristiques',
      'Définition et axiomes de la structure de groupe (G, *)',
      'Caractérisation fondamentale d’un sous-groupe',
      'Homomorphismes de groupes, noyau (Ker f) et image (Im f)',
      'Structure d’anneau : distributivité, éléments inversibles et diviseurs de zéro',
      'Structure de corps commutatif et étude de (ℤ/pℤ, +, ×)'
    ]
  },

  // =======================================================================================
  // 📈 BLOC 2 : ANALYSE
  // =======================================================================================
  {
    id: 'skill-tc-suites-numeriques',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Suites Numériques & Raisonnement par Récurrence',
    description: 'Principe de récurrence (faible et forte), limites de suites réelles, théorèmes d’encadrement et de comparaison, suites monotones bornées, suites adjacentes et suites récurrentes u_{n+1} = f(u_n).',
    difficulty: 4,
    prerequisiteIds: [],
    masteryScore: 82,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Bloc 2 : Analyse',
    order: 4,
    topics: [
      'Axiome et méthode rigoureuse de démonstration par récurrence',
      'Limites de suites, théorèmes de comparaison et théorème des gendarmes',
      'Convergence des suites monotones (théorème de la convergence monotone)',
      'Suites adjacentes : définition et théorème fondamental de la limite commune',
      'Suites récurrentes u_{n+1} = f(u_n), points fixes et études de stabilité'
    ]
  },
  {
    id: 'skill-tc-limites-continuite-derivation',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Limites, Continuité, Dérivation & TAF',
    description: 'Limites finies et infinies, branches infinies et asymptotes, continuité en un point et sur un intervalle, prolongement par continuité, Théorème des Valeurs Intermédiaires (TVI), bijection, dérivabilité, extremums et Théorème des Accroissements Finis (TAF).',
    difficulty: 4,
    prerequisiteIds: ['skill-tc-suites-numeriques'],
    masteryScore: 75,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Bloc 2 : Analyse',
    order: 5,
    topics: [
      'Calculs de limites, formes indéterminées et asymptotes (horizontale, verticale, oblique)',
      'Continuité d’une fonction et prolongement par continuité',
      'Théorème des Valeurs Intermédiaires (TVI) et corollaire de la bijection stricte',
      'Nombre dérivé, interprétation géométrique et équation de la tangente',
      'Théorème de Rolle et Théorème des Accroissements Finis (TAF)',
      'Inégalité des accroissements finis et encadrement de fonctions'
    ]
  },
  {
    id: 'skill-tc-fonctions-usuelles',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Fonctions Usuelles (Logarithmes, Exponentielles & Puissances)',
    description: 'Étude analytique approfondie de la fonction logarithme népérien (ln) et décimal (log), de la fonction exponentielle (exp), des croissances comparées, des fonctions puissances (x ↦ x^α) et exponentielles de base a.',
    difficulty: 4,
    prerequisiteIds: ['skill-tc-limites-continuite-derivation'],
    masteryScore: 80,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Bloc 2 : Analyse',
    order: 6,
    topics: [
      'Fonction logarithme népérien (ln) : définition, propriétés algébriques et dérivée',
      'Limites remarquables de ln(x) et théorèmes de croissances comparées',
      'Fonction exponentielle : bijection réciproque, propriétés et dérivation',
      'Fonctions exponentielles de base quelconque a > 0 (x ↦ a^x = e^{x ln a})',
      'Fonctions puissances x ↦ x^α (α ∈ ℝ) et études de branches infinies',
      'Résolution d’équations et d’inéquations avec exponentielles et logarithmes'
    ]
  },
  {
    id: 'skill-tc-integration-primitives',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Intégration, Primitives, Aires & Volumes',
    description: 'Primitives des fonctions continues, intégrale de Riemann sur un segment, propriétés (linéarité, positivité, Chasles), intégration par parties, valeur moyenne d’une fonction, calculs d’aires planes et de volumes de révolution.',
    difficulty: 5,
    prerequisiteIds: ['skill-tc-fonctions-usuelles'],
    masteryScore: 60,
    tier: 'En cours',
    status: 'in_progress',
    unit: 'Bloc 2 : Analyse',
    order: 7,
    topics: [
      'Recherche de primitives et formulaire usuel (u\'/u, u\'e^u, u\'u^n, u\'/(u²+1))',
      'Définition de l’intégrale ∫_a^b f(t)dt, théorème fondamental de l’analyse',
      'Propriétés fondamentales : linéarité, relation de Chasles, positivité et ordre',
      'Méthode d’intégration par parties (IPP) simple et itérée',
      'Inégalité de la moyenne et valeur moyenne d’une fonction sur un intervalle',
      'Calculs rigoureux d’aires géométriques planes et de volumes de solides de révolution'
    ]
  },
  {
    id: 'skill-tc-equations-differentielles',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Équations Différentielles Linéaires (1er & 2nd ordre)',
    description: 'Équations différentielles linéaires du premier ordre y\' + ay = f(x), équations différentielles linéaires du second ordre à coefficients constants ay\'\' + by\' + cy = 0 (équation caractéristique, cas Δ > 0, Δ = 0, Δ < 0), et recherche de solutions particulières.',
    difficulty: 5,
    prerequisiteIds: ['skill-tc-integration-primitives'],
    masteryScore: 55,
    tier: 'En cours',
    status: 'in_progress',
    unit: 'Bloc 2 : Analyse',
    order: 8,
    topics: [
      'Équations différentielles du premier ordre homogènes : y\' + ay = 0',
      'Équations avec second membre y\' + ay = f(x) et solutions particulières',
      'Équations du second ordre homogènes : ay\'\' + by\' + cy = 0',
      'Équation caractéristique ar² + br + c = 0 et étude selon le signe de Δ',
      'Solutions à base d’exponentielles réelles ou de fonctions trigonométriques (cos, sin)',
      'Détermination de la solution unique vérifiant des conditions initiales de Cauchy'
    ]
  },

  // =======================================================================================
  // 🗺️ BLOC 3 : GÉOMÉTRIE DU PLAN ET DE L'ESPACE
  // =======================================================================================
  {
    id: 'skill-tc-orientation-plan-espace',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Orientation du Plan & de l’Espace, Angles Orientés',
    description: 'Orientation d’un espace vectoriel, bases et repères orthonormés directs, déterminant de deux et trois vecteurs, mesure principale d’angles orientés de vecteurs dans ]-π, π], relation de Chasles pour les angles.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 85,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Bloc 3 : Géométrie du plan et de l\'espace',
    order: 9,
    topics: [
      'Orientation du plan et de l’espace : règle du bonhomme d’Ampère et de la main droite',
      'Bases et repères orthonormés directs (O, i, j, k)',
      'Déterminant de vecteurs dans le plan et dans l’espace',
      'Angles orientés de deux vecteurs non nuls et mesure principale',
      'Propriétés opératoires et relation de Chasles pour les angles orientés'
    ]
  },
  {
    id: 'skill-tc-isometries-plan',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Isométries du Plan & Classification',
    description: 'Définition et propriétés des isométries affines (conservation des distances, barycentres, angles orientés), classification complète : déplacements (translations, rotations) et antidéplacements (réflexions, symétries glissées), décomposition en réflexions.',
    difficulty: 4,
    prerequisiteIds: ['skill-tc-orientation-plan-espace'],
    masteryScore: 70,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Bloc 3 : Géométrie du plan et de l\'espace',
    order: 10,
    topics: [
      'Définition générale d’une isométrie et conservation de la norme euclidienne',
      'Ensemble des points invariants et classification morphologique',
      'Déplacements : identité, translations et rotations planes',
      'Antidéplacements : réflexions (symétries axiales) et symétries glissées',
      'Décomposition de toute isométrie en produit d’au plus trois réflexions',
      'Composition d’isométries et forme réduite'
    ]
  },
  {
    id: 'skill-tc-similitudes-directes-indirectes',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Similitudes Directes & Indirectes du Plan',
    description: 'Définition géométrique d’une similitude (rapport k > 0), éléments caractéristiques d’une similitude directe (centre Ω, rapport k, angle θ), forme canonique s = homothétie o rotation, écriture complexe z\' = az + b et z\' = a z̄ + b.',
    difficulty: 5,
    prerequisiteIds: ['skill-tc-isometries-plan', 'skill-tc-nombres-complexes'],
    masteryScore: 68,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Bloc 3 : Géométrie du plan et de l\'espace',
    order: 11,
    topics: [
      'Définition géométrique : rapport de similitude k = A\'B\' / AB',
      'Similitudes directes : décomposition canonique h(Ω, k) ∘ r(Ω, θ)',
      'Détermination des éléments caractéristiques : centre Ω, rapport k et angle θ',
      'Expression complexe d’une similitude directe : z\' = az + b (a ∈ ℂ*, b ∈ ℂ)',
      'Similitudes indirectes et écriture complexe : z\' = a z̄ + b',
      'Images de figures remarquables (droites, cercles, triangles semblables)'
    ]
  },
  {
    id: 'skill-tc-coniques',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Coniques (Parabole, Ellipse, Hyperbole)',
    description: 'Définition unifocale par foyer F, directrice (D) et excentricité e (MF / d(M, D) = e) : parabole (e = 1), ellipse (0 < e < 1), hyperbole (e > 1), équations réduites, axes de symétrie, sommets et asymptotes de l’hyperbole.',
    difficulty: 5,
    prerequisiteIds: ['skill-tc-orientation-plan-espace'],
    masteryScore: 45,
    tier: 'En cours',
    status: 'in_progress',
    unit: 'Bloc 3 : Géométrie du plan et de l\'espace',
    order: 12,
    topics: [
      'Définition unifocale d’une conique : foyer F, directrice (D) et excentricité e',
      'Classification selon l’excentricité : Parabole (e=1), Ellipse (0<e<1), Hyperbole (e>1)',
      'Équation réduite de la parabole : y² = 2px, sommet, foyer et directrice',
      'Équation réduite de l’ellipse : x²/a² + y²/b² = 1, foyers, directrices et cercles directeurs',
      'Équation réduite de l’hyperbole : x²/a² - y²/b² = 1, foyers et asymptotes y = ±(b/a)x',
      'Construction géométrique des tangentes et propriétés focales'
    ]
  },
  {
    id: 'skill-tc-geometrie-espace-produits',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Géométrie de l’Espace : Produit Scalaire, Vectoriel & Mixte',
    description: 'Produit scalaire dans l’espace et orthogonalité, produit vectoriel u ∧ v (propriétés, norme, vecteur normal à un plan), produit mixte [u, v, w] et calculs de volumes, représentations paramétriques et équations cartésiennes de droites et de plans.',
    difficulty: 4,
    prerequisiteIds: ['skill-tc-orientation-plan-espace'],
    masteryScore: 72,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Bloc 3 : Géométrie du plan et de l\'espace',
    order: 13,
    topics: [
      'Produit scalaire euclidien dans l’espace : calcul analytique et orthogonalité',
      'Produit vectoriel u ∧ v : définition géométrique, bilinéarité et antisymétrie',
      'Calcul analytique des composantes du produit vectoriel via déterminants 2×2',
      'Interprétation géométrique du produit vectoriel : aire du parallélogramme et du triangle',
      'Produit mixte [u, v, w] = (u ∧ v) · w et calcul de volume du tétraèdre',
      'Équations cartésiennes et systèmes d’équations paramétriques de plans et droites'
    ]
  },

  // =======================================================================================
  // 📊 BLOC 4 : PROBABILITÉS ET STATISTIQUES
  // =======================================================================================
  {
    id: 'skill-tc-denombrement',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Dénombrement & Combinatoire',
    description: 'Principe fondamental du dénombrement, p-listes (arrangements avec répétition n^p), arrangements sans répétition A_n^p = n! / (n - p)!, permutations n!, combinaisons C_n^p, formule de Pascal et formule du binôme de Newton.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 90,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Bloc 4 : Probabilités et Statistiques',
    order: 14,
    topics: [
      'Principe additif et principe multiplicatif du dénombrement',
      'p-uplets (p-listes) d’éléments d’un ensemble fini : cardinal n^p',
      'Arrangements sans répétition : A_n^p = n! / (n-p)!',
      'Permutations de n éléments : factorielle n!',
      'Combinaisons d’éléments : C_n^p = n! / (p! (n-p)!) et propriétés de symétrie',
      'Formule du triangle de Pascal et formule du binôme de Newton'
    ]
  },
  {
    id: 'skill-tc-probabilites-variables-aleatoires',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Probabilités de Base & Variables Aléatoires Discrètes',
    description: 'Espaces probabilisés finis (Ω, P), équiprobabilité, événements, variables aléatoires réelles discrètes, loi de probabilité, fonction de répartition, espérance mathématique E(X), variance V(X), écart-type et schéma de Bernoulli / loi binomiale B(n, p).',
    difficulty: 4,
    prerequisiteIds: ['skill-tc-denombrement'],
    masteryScore: 78,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Bloc 4 : Probabilités et Statistiques',
    order: 15,
    topics: [
      'Vocabulaire des événements : certain, impossible, incompatibles, contraires',
      'Calculs en situation d’équiprobabilité : P(A) = card(A) / card(Ω)',
      'Variables aléatoires discrètes : univers-image X(Ω) et loi de probabilité',
      'Indicateurs de position et de dispersion : espérance E(X), variance V(X) et écart-type σ(X)',
      'Épreuve et schéma de Bernoulli : succès (p) et échec (1-p)',
      'Loi binomiale B(n, p) : formule de probabilité, espérance E(X) = np et variance V(X) = np(1-p)'
    ]
  },
  {
    id: 'skill-tc-probabilites-conditionnelles-bayes',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Probabilités Conditionnelles & Formule de Bayes',
    description: 'Probabilité conditionnelle P_B(A) = P(A ∩ B) / P(B), indépendance de deux événements, arbres pondérés, partition d’un univers, formule des probabilités totales et formule d’inversion de Bayes.',
    difficulty: 4,
    prerequisiteIds: ['skill-tc-probabilites-variables-aleatoires'],
    masteryScore: 74,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Bloc 4 : Probabilités et Statistiques',
    order: 16,
    topics: [
      'Définition et propriétés de la probabilité conditionnelle P(A|B) ou P_B(A)',
      'Règle de multiplication : P(A ∩ B) = P(A) × P(B|A)',
      'Indépendance de deux événements : P(A ∩ B) = P(A) × P(B)',
      'Système complet d’événements (partition de l’univers Ω)',
      'Formule des probabilités totales : P(B) = ∑ P(B|A_i)P(A_i)',
      'Formule de Bayes et calculs de probabilités a posteriori'
    ]
  },
  {
    id: 'skill-tc-statistiques-deux-variables',
    subjectId: 'math',
    levelId: 'term-c',
    name: 'Statistiques à Deux Variables & Moindres Carrés',
    description: 'Séries statistiques doubles (X, Y), nuage de points, point moyen G(x̄, ȳ), covariance Cov(X, Y), ajustement affine par la méthode des moindres carrés (droite de régression de Y en X : y = ax + b) et coefficient de corrélation linéaire r.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 84,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Bloc 4 : Probabilités et Statistiques',
    order: 17,
    topics: [
      'Tableau de données à deux variables et tracé du nuage de points',
      'Calcul des coordonnées du point moyen du nuage : G(x̄, ȳ)',
      'Calcul de la variance V(X) et de la covariance Cov(X, Y)',
      'Équation de la droite d’ajustement affine par moindres carrés : y = ax + b avec a = Cov(X, Y) / V(X)',
      'Calcul du coefficient de corrélation linéaire r = Cov(X, Y) / (σ_X σ_Y)',
      'Interprétation de la validité de l’ajustement (|r| ≥ 0,87) et prévisions'
    ]
  }
];
