import { ExerciseQuestion } from '../types';

// =========================================================================================
// BANQUE DE QUESTIONS CALIBRÉES BACCALAURÉAT SÉRIE C (MATHÉMATIQUES TERMINALE C)
// Couvre l'intégralité des 4 Blocs du Programme Officiel Gabonais
// =========================================================================================

export const TERMINALE_C_MATH_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // =======================================================================================
  // 📐 BLOC 1 : ALGÈBRE ET ARITHMÉTIQUE
  // =======================================================================================
  'skill-tc-arithmetique-z': [
    {
      id: 'q-tc-arith-1',
      exerciseId: 'ex-tc-arith',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Arithmétique : Théorème de Bézout & Équation Diophantienne',
      microConcept: 'L\'équation diophantienne ax + by = c admet des solutions entières dans ℤ² si et seulement si le PGCD(a, b) divise c. Deux entiers a et b sont premiers entre eux si et seulement s\'il existe un couple (u, v) ∈ ℤ² tel que au + bv = 1 (Identité de Bézout).',
      hint: 'Calculez le PGCD(13, 7) à l\'aide de l\'algorithme d\'Euclide pour trouver une solution particulière.',
      prompt: 'On considère dans ℤ² l\'équation diophantienne (E) : 13x - 7y = 1. Sachant qu\'un couple solution particulier est (x₀, y₀) = (-1, -2) car 13(-1) - 7(-2) = -13 + 14 = 1, quel est l\'ensemble général des solutions (x, y) ∈ ℤ² ?',
      options: [
        'S = {(-1 + 7k, -2 + 13k), k ∈ ℤ}',
        'S = {(-1 + 13k, -2 + 7k), k ∈ ℤ}',
        'S = {(7k, 13k), k ∈ ℤ}',
        'S = {(-1 - 7k, -2 + 13k), k ∈ ℤ}'
      ],
      correctAnswer: 'S = {(-1 + 7k, -2 + 13k), k ∈ ℤ}',
      explanation: 'On a 13x - 7y = 1 et 13(-1) - 7(-2) = 1. Par soustraction membre à membre : 13(x + 1) = 7(y + 2). Comme 13 divise 7(y + 2) et que PGCD(13, 7) = 1, d\'après le théorème de Gauss, 13 divise y + 2, donc y + 2 = 13k, soit y = -2 + 13k. En remplaçant, x + 1 = 7k, soit x = -1 + 7k (k ∈ ℤ).',
      steps: [
        '1. Soustraire l\'équation particulière à l\'équation générale : 13(x - x₀) = 7(y - y₀) ⇒ 13(x + 1) = 7(y + 2).',
        '2. Appliquer le théorème de Gauss : 13 est premier avec 7, donc 13 divise (y + 2).',
        '3. Poser y + 2 = 13k, d\'où y = -2 + 13k, et en déduire x + 1 = 7k, d\'où x = -1 + 7k avec k ∈ ℤ.'
      ]
    },
    {
      id: 'q-tc-arith-2',
      exerciseId: 'ex-tc-arith',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Arithmétique : Congruences & Petit Théorème de Fermat',
      microConcept: 'Si p est un nombre premier et si a est un entier non divisible par p, alors a^{p-1} ≡ 1 [p]. Ce résultat permet de simplifier les puissances élevées lors du calcul de restes dans la division euclidienne.',
      hint: 'Utilisez la congruence modulo 7 en remarquant que 3⁶ ≡ 1 [7] d\'après Fermat.',
      prompt: 'Quel est le reste de la division euclidienne de l\'entier N = 3²⁰²⁴ par 7 ?',
      options: [
        '2',
        '4',
        '1',
        '6'
      ],
      correctAnswer: '2',
      explanation: '7 est premier et ne divise pas 3. D\'après le petit théorème de Fermat, 3⁶ ≡ 1 [7]. On effectue la division euclidienne de 2024 par 6 : 2024 = 6 × 337 + 2. Ainsi 3²⁰²⁴ = (3⁶)³³⁷ × 3² ≡ 1³³⁷ × 9 [7] ≡ 2 [7]. Le reste est donc 2.',
      steps: [
        '1. Déterminer la période modulo 7 : 3⁶ ≡ 1 [7] d\'après le petit théorème de Fermat.',
        '2. Effectuer la division euclidienne de 2024 par 6 : 2024 = 6 × 337 + 2 (reste 2).',
        '3. Calculer le reste : 3²⁰²⁴ ≡ 3² [7] ≡ 9 [7] ≡ 2 [7].'
      ]
    }
  ],

  'skill-tc-nombres-complexes': [
    {
      id: 'q-tc-cplx-1',
      exerciseId: 'ex-tc-cplx',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Nombres Complexes : Forme Exponentielle & Trigonométrie',
      microConcept: 'Tout nombre complexe z = a + ib non nul s\'écrit sous forme exponentielle z = r e^{iθ} où r = |z| = √(a² + b²) et θ = arg(z) [2π]. La formule de Moivre (e^{iθ})^n = e^{inθ} permet de calculer les puissances entières de z.',
      hint: 'Mettez d\'abord le nombre 1 + i√3 sous forme trigonométrique ou exponentielle.',
      prompt: 'Quelle est la valeur exacte du nombre complexe Z = (1 + i√3)⁶ dans ℂ ?',
      options: [
        '64',
        '-64',
        '64i',
        '-64i'
      ],
      correctAnswer: '64',
      explanation: 'Le module de 1 + i√3 est r = √(1² + 3) = 2. On a 1 + i√3 = 2(1/2 + i√3/2) = 2 e^{iπ/3}. Ainsi Z = (2 e^{iπ/3})⁶ = 2⁶ × e^{i × 6 × π/3} = 64 × e^{i 2π} = 64 × 1 = 64.',
      steps: [
        '1. Calculer le module : |1 + i√3| = √(1 + 3) = 2.',
        '2. Trouver l\'argument : cos θ = 1/2, sin θ = √3/2 ⇒ θ = π/3.',
        '3. Élever à la puissance 6 : Z = (2 e^{iπ/3})⁶ = 64 e^{i2π} = 64.'
      ]
    },
    {
      id: 'q-tc-cplx-2',
      exerciseId: 'ex-tc-cplx',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Nombres Complexes : Interprétation Géométrique des Angles & Triangles',
      microConcept: 'Pour trois points A, B, C d\'affixes respectives z_A, z_B, z_C deux à deux distincts, l\'angle orienté (AB, AC) a pour mesure arg((z_C - z_A)/(z_B - z_A)) [2π] et AC/AB = |(z_C - z_A)/(z_B - z_A)|. Si ce quotient vaut i ou -i, le triangle ABC est rectangle et isocèle en A.',
      hint: 'Examinez le module et l\'argument du quotient (z_C - z_A) / (z_B - z_A).',
      prompt: 'Dans le plan complexe muni d\'un repère orthonormé direct, on donne A(1 + i), B(3 + 2i) et C(0 + 3i). Quelle est la nature exacte du triangle ABC ?',
      options: [
        'Rectangle et isocèle en A',
        'Équilatéral',
        'Rectangle en B mais non isocèle',
        'Quelconque'
      ],
      correctAnswer: 'Rectangle et isocèle en A',
      explanation: 'On calcule (z_C - z_A) / (z_B - z_A) = (3i - (1 + i)) / ((3 + 2i) - (1 + i)) = (-1 + 2i) / (2 + i) = i(2 + i) / (2 + i) = i. Le module vaut |i| = 1 donc AC = AB. L\'argument vaut arg(i) = π/2 [2π] donc (AB, AC) = π/2 [2π]. Le triangle ABC est donc rectangle et isocèle en A.',
      steps: [
        '1. Former le rapport complexe : (z_C - z_A)/(z_B - z_A) = (-1 + 2i)/(2 + i).',
        '2. Simplifier en remarquant que i(2 + i) = 2i - 1 = -1 + 2i, le rapport vaut i.',
        '3. En déduire |z_C - z_A|/|z_B - z_A| = 1 (isocèle) et angle = π/2 (rectangle en A).'
      ]
    }
  ],

  'skill-tc-structures-algebriques': [
    {
      id: 'q-tc-struct-1',
      exerciseId: 'ex-tc-struct',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Structures Algébriques : Caractérisation d’un Sous-Groupe',
      microConcept: 'Une partie non vide H d\'un groupe (G, *) est un sous-groupe de (G, *) si et seulement si : ∀ x, y ∈ H, x * y\' ∈ H, où y\' est le symétrique de y dans (G, *).',
      hint: 'Rappelez-vous la condition condensée nécessaire et suffisante de stabilité par composition avec le symétrique.',
      prompt: 'Soit (G, ·) un groupe noté multiplicativement d\'élément neutre e. Quelle proposition constitue la condition nécessaire et suffisante pour qu’une partie non vide H de G soit un sous-groupe de G ?',
      options: [
        'Pour tout (x, y) ∈ H², x · y⁻¹ ∈ H',
        'Pour tout (x, y) ∈ H², x · y ∈ H uniquement',
        'H contient tous les éléments de G',
        'Pour tout x ∈ H, x · x = e'
      ],
      correctAnswer: 'Pour tout (x, y) ∈ H², x · y⁻¹ ∈ H',
      explanation: 'Cette caractérisation assure à la fois que l\'élément neutre appartient à H (en prenant x = y), que tout élément admet son symétrique dans H (en prenant x = e) et la stabilité par la loi interne.',
      steps: [
        '1. Vérifier que H est non vide (il contient au moins e).',
        '2. La condition x · y⁻¹ ∈ H pour tous x, y ∈ H regroupe la stabilité par la loi interne et par passage au symétrique.',
        '3. C\'est le théorème de caractérisation fondamentale des sous-groupes.'
      ]
    }
  ],

  // =======================================================================================
  // 📈 BLOC 2 : ANALYSE
  // =======================================================================================
  'skill-tc-suites-numeriques': [
    {
      id: 'q-tc-suites-1',
      exerciseId: 'ex-tc-suites',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Suites Numériques : Théorème des Suites Adjacentes',
      microConcept: 'Deux suites réelles (u_n) et (v_n) sont dites adjacentes si : 1) l\'une est croissante, 2) l\'autre est décroissante, et 3) lim_{n→+∞} (v_n - u_n) = 0. Deux suites adjacentes sont convergentes et possèdent la même limite finie ℓ, avec u_n ≤ ℓ ≤ v_n pour tout n.',
      hint: 'Les trois conditions fondamentales : sens de variations opposés et différence tendant vers 0.',
      prompt: 'Soient (u_n) et (v_n) deux suites telles que (u_n) est croissante, (v_n) est décroissante et lim_{n→+∞} (v_n - u_n) = 0. Que peut-on rigoureusement affirmer ?',
      options: [
        'Elles convergent vers une même limite finie ℓ, et pour tout n, u_n ≤ ℓ ≤ v_n',
        'Elles divergent vers +∞ toutes les deux',
        'Leur limite commune est nécessairement égale à 0',
        'Elles oscillent sans converger'
      ],
      correctAnswer: 'Elles convergent vers une même limite finie ℓ, et pour tout n, u_n ≤ ℓ ≤ v_n',
      explanation: 'C\'est l\'énoncé fondamental du théorème des suites adjacentes. L\'encadrement u_n ≤ u_p ≤ v_p ≤ v_n montre que (u_n) est majorée par v₀ et (v_n) minorée par u₀, d\'où leur convergence vers une limite commune.',
      steps: [
        '1. Constater les sens de variation : u_n croissant et v_n décroissant.',
        '2. Constater que la distance |v_n - u_n| tend vers 0.',
        '3. Conclure : suites adjacentes ⇒ convergence vers une unique limite commune ℓ avec u_n ≤ ℓ ≤ v_n.'
      ]
    },
    {
      id: 'q-tc-suites-2',
      exerciseId: 'ex-tc-suites',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Suites Récurrentes : Point Fixe & Limite',
      microConcept: 'Soit (u_n) définie par u_0 ∈ I et u_{n+1} = f(u_n). Si f est continue sur l\'intervalle I stable par f (f(I) ⊂ I) et si la suite (u_n) converge vers ℓ ∈ I, alors ℓ est un point fixe de f, c\'est-à-dire que f(ℓ) = ℓ.',
      hint: 'Passez à la limite dans la relation u_{n+1} = f(u_n) en utilisant la continuité de f.',
      prompt: 'On considère la suite définie par u₀ = 1 et u_{n+1} = √(2 + u_n). En admettant que la suite (u_n) converge vers un réel positif ℓ, quelle est la valeur de ℓ ?',
      options: [
        '2',
        '√2',
        '1',
        '4'
      ],
      correctAnswer: '2',
      explanation: 'La fonction f(x) = √(2 + x) est continue sur [0, +∞[. La limite ℓ vérifie l\'équation de point fixe ℓ = √(2 + ℓ), soit ℓ² = 2 + ℓ avec ℓ ≥ 0. Cela donne ℓ² - ℓ - 2 = 0. Les racines sont ℓ = 2 ou ℓ = -1. Comme u_n > 0 pour tout n, la seule valeur admissible est ℓ = 2.',
      steps: [
        '1. Écrire l\'équation du point fixe : f(ℓ) = ℓ ⇔ √(2 + ℓ) = ℓ.',
        '2. Élever au carré avec la condition ℓ ≥ 0 : ℓ² - ℓ - 2 = 0.',
        '3. Factoriser : (ℓ - 2)(ℓ + 1) = 0. Comme ℓ ≥ 0, ℓ = 2.'
      ]
    }
  ],

  'skill-tc-limites-continuite-derivation': [
    {
      id: 'q-tc-lim-1',
      exerciseId: 'ex-tc-lim',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Continuité : Théorème des Valeurs Intermédiaires (TVI)',
      microConcept: 'Si une fonction f est continue et strictement monotone sur un intervalle [a, b], alors pour tout réel k compris entre f(a) et f(b), l\'équation f(x) = k admet une unique solution α dans [a, b] (Corollaire de la bijection).',
      hint: 'Vérifiez les trois hypothèses : continuité, stricte monotonie, et le fait que 0 appartienne à l\'intervalle image [f(a), f(b)].',
      prompt: 'Soit f(x) = x³ + 2x - 5 définie sur ℝ. Combien de solutions réelles l\'équation f(x) = 0 admet-elle sur [1, 2] ?',
      options: [
        'Exactement une unique solution',
        'Aucune solution',
        'Deux solutions distinctes',
        'Trois solutions'
      ],
      correctAnswer: 'Exactement une unique solution',
      explanation: 'f est un polynôme donc continue et dérivable sur ℝ. Sa dérivée f\'(x) = 3x² + 2 > 0 pour tout x, donc f est strictement croissante. De plus, f(1) = 1 + 2 - 5 = -2 < 0 et f(2) = 8 + 4 - 5 = 7 > 0. 0 est compris entre f(1) et f(2). Par le corollaire du TVI, f(x) = 0 admet une unique solution sur [1, 2].',
      steps: [
        '1. Calculer f\'(x) = 3x² + 2 > 0 : f est strictement croissante.',
        '2. Évaluer aux bornes : f(1) = -2 < 0 et f(2) = 7 > 0.',
        '3. Appliquer le corollaire du TVI : f réalise une bijection de [1, 2] sur [-2, 7]. 0 ∈ [-2, 7], donc l\'équation a une solution unique.'
      ]
    }
  ],

  'skill-tc-fonctions-usuelles': [
    {
      id: 'q-tc-fct-1',
      exerciseId: 'ex-tc-fct',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Fonctions Usuelles : Croissances Comparées',
      microConcept: 'Au voisinage de +∞, la fonction exponentielle l\'emporte sur toute puissance de x, et toute puissance de x l\'emporte sur le logarithme népérien : lim_{x→+∞} (e^x / x^n) = +∞ et lim_{x→+∞} (ln(x) / x^n) = 0 pour tout n > 0.',
      hint: 'Mettez en facteur le terme prépondérant ou appliquez directement le théorème de croissances comparées.',
      prompt: 'Quelle est la limite lorsque x tend vers +∞ de l’expression f(x) = (e^{2x} - 5x³) / (e^{2x} + 1) ?',
      options: [
        '1',
        '+∞',
        '0',
        '-5'
      ],
      correctAnswer: '1',
      explanation: 'On factorise numérateur et dénominateur par e^{2x} : f(x) = [e^{2x}(1 - 5x³/e^{2x})] / [e^{2x}(1 + e^{-2x})] = (1 - 5x³/e^{2x}) / (1 + e^{-2x}). Par croissances comparées, lim_{x→+∞} x³/e^{2x} = 0, et lim_{x→+∞} e^{-2x} = 0. Le quotient tend donc vers (1 - 0)/(1 + 0) = 1.',
      steps: [
        '1. Lever l\'indétermination ∞/∞ en factorisant par le terme dominant e^{2x}.',
        '2. Appliquer la croissance comparée : x³/e^{2x} → 0 quand x → +∞.',
        '3. Obtenir la limite : 1 / 1 = 1.'
      ]
    }
  ],

  'skill-tc-integration-primitives': [
    {
      id: 'q-tc-int-1',
      exerciseId: 'ex-tc-int',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Calcul Intégral : Intégration par Parties (IPP)',
      microConcept: 'Si u et v sont deux fonctions de classe C¹ sur [a, b], alors ∫_a^b u(x)v\'(x)dx = [u(x)v(x)]_a^b - ∫_a^b u\'(x)v(x)dx. L\'astuce classique pour intégrer ln(x) consiste à poser u(x) = ln(x) et v\'(x) = 1.',
      hint: 'Posez u(x) = x et v\'(x) = e^x pour abaisser le degré du polynôme.',
      prompt: 'Quelle est la valeur de l\'intégrale I = ∫₀¹ x e^x dx ?',
      options: [
        '1',
        'e - 1',
        'e',
        '2'
      ],
      correctAnswer: '1',
      explanation: 'On utilise une intégration par parties en posant : u(x) = x ⇒ u\'(x) = 1, et v\'(x) = e^x ⇒ v(x) = e^x. Alors I = [x e^x]₀¹ - ∫₀¹ 1 × e^x dx = (1 × e¹ - 0) - [e^x]₀¹ = e - (e¹ - e⁰) = e - e + 1 = 1.',
      steps: [
        '1. Poser u(x) = x (dérivée u\'(x) = 1) et v\'(x) = e^x (primitive v(x) = e^x).',
        '2. Appliquer la formule : I = [x e^x]₀¹ - ∫₀¹ e^x dx.',
        '3. Calculer les crochets : (e - 0) - (e - 1) = 1.'
      ]
    }
  ],

  'skill-tc-equations-differentielles': [
    {
      id: 'q-tc-eqdiff-1',
      exerciseId: 'ex-tc-eqdiff',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Équations Différentielles : Second Ordre à Coefficients Constants',
      microConcept: 'Pour l\'équation ay\'\' + by\' + cy = 0, l\'équation caractéristique est ar² + br + c = 0. Si le discriminant Δ < 0, les racines caractéristiques sont r = α ± iβ, et les solutions générales sur ℝ sont y(x) = e^{αx} (A cos(βx) + B sin(βx)) où A, B ∈ ℝ.',
      hint: 'Résolvez l\'équation caractéristique r² + 4 = 0 pour trouver les solutions harmoniques.',
      prompt: 'Quelle est la solution générale de l’équation différentielle y\'\' + 4y = 0 sur ℝ ?',
      options: [
        'y(x) = A cos(2x) + B sin(2x), (A, B) ∈ ℝ²',
        'y(x) = A e^{2x} + B e^{-2x}, (A, B) ∈ ℝ²',
        'y(x) = (Ax + B) e^{2x}, (A, B) ∈ ℝ²',
        'y(x) = A cos(4x) + B sin(4x), (A, B) ∈ ℝ²'
      ],
      correctAnswer: 'y(x) = A cos(2x) + B sin(2x), (A, B) ∈ ℝ²',
      explanation: 'L\'équation caractéristique associée est r² + 4 = 0, soit r² = -4 = (2i)². Ses racines complexes sont r₁ = 2i et r₂ = -2i (partie réelle α = 0, partie imaginaire β = 2). La forme générale des solutions réelles est donc y(x) = e^{0x}(A cos(2x) + B sin(2x)) = A cos(2x) + B sin(2x).',
      steps: [
        '1. Écrire l\'équation caractéristique : r² + 4 = 0.',
        '2. Trouver les racines imaginaires pures : r = ±2i (α = 0, β = 2).',
        '3. Écrire la solution générale : y(x) = A cos(2x) + B sin(2x).'
      ]
    }
  ],

  // =======================================================================================
  // 🗺️ BLOC 3 : GÉOMÉTRIE DU PLAN ET DE L'ESPACE
  // =======================================================================================
  'skill-tc-orientation-plan-espace': [
    {
      id: 'q-tc-orient-1',
      exerciseId: 'ex-tc-orient',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Angles Orientés : Mesure Principale',
      microConcept: 'Tout angle orienté admet une infinité de mesures en radians modulo 2π. La mesure principale est l\'unique mesure θ appartenant à l\'intervalle semi-ouvert ]-π, π]. On l\'obtient en retranchant ou ajoutant un multiple entier de 2π.',
      hint: 'Divisez l\'angle par 2π pour trouver le nombre de tours complets à retrancher.',
      prompt: 'Quelle est la mesure principale de l\'angle orienté de mesure α = 25π / 4 ?',
      options: [
        'π / 4',
        '3π / 4',
        '-3π / 4',
        '5π / 4'
      ],
      correctAnswer: 'π / 4',
      explanation: 'On écrit 25π/4 = (24π + π)/4 = 6π + π/4 = 3 × (2π) + π/4. Comme π/4 ∈ ]-π, π], la mesure principale de cet angle est π/4.',
      steps: [
        '1. Décomposer la fraction : 25/4 = 6 + 1/4.',
        '2. Isoler les tours complets : 25π/4 = 6π + π/4 = 3(2π) + π/4.',
        '3. Vérifier que π/4 est dans ]-π, π] : c\'est bien la mesure principale.'
      ]
    }
  ],

  'skill-tc-isometries-plan': [
    {
      id: 'q-tc-isom-1',
      exerciseId: 'ex-tc-isom',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Isométries : Composition de deux Réflexions',
      microConcept: 'La composée s_{D2} ∘ s_{D1} de deux réflexions d\'axes sécants en un point O sous un angle orienté θ = (D₁, D₂) est la rotation de centre O et d\'angle 2θ. Si les axes sont strictement parallèles, la composée est une translation de vecteur orthogonal aux droites.',
      hint: 'L\'angle de la rotation obtenue est le double de l\'angle entre les deux axes de réflexion.',
      prompt: 'Soient D₁ et D₂ deux droites sécantes en un point O telles que l\'angle orienté de droites (D₁, D₂) = π/6 [π]. Quelle est la nature de la transformation s_{D2} ∘ s_{D1} ?',
      options: [
        'Une rotation de centre O et d’angle π/3',
        'Une rotation de centre O et d’angle π/6',
        'Une symétrie axiale d’axe passant par O',
        'Une translation de vecteur non nul'
      ],
      correctAnswer: 'Une rotation de centre O et d’angle π/3',
      explanation: 'Le produit de deux réflexions d\'axes sécants en O faisant un angle θ est une rotation de centre O et d\'angle 2θ. Ici 2 × (π/6) = π/3.',
      steps: [
        '1. Les axes D₁ et D₂ sont sécants en O : la composée est un déplacement ayant au moins un point fixe O, donc une rotation.',
        '2. L\'angle de la rotation est le double de l\'angle orienté des droites : 2 × (D₁, D₂).',
        '3. Calcul : 2 × (π/6) = π/3.'
      ]
    }
  ],

  'skill-tc-similitudes-directes-indirectes': [
    {
      id: 'q-tc-simil-1',
      exerciseId: 'ex-tc-simil',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Similitudes Directes : Éléments Caractéristiques & Forme Complexe',
      microConcept: 'Une transformation du plan complexe d\'écriture z\' = az + b avec a ∈ ℂ* et a ≠ 1 est une similitude directe de rapport k = |a|, d\'angle θ = arg(a) [2π] et dont le centre Ω est l\'unique point fixe d\'affixe ω = b / (1 - a).',
      hint: 'Identifiez a = 1 + i, calculez son module pour le rapport et son argument pour l\'angle.',
      prompt: 'On considère la similitude directe s d’écriture complexe z\' = (1 + i)z + 2 - i. Quels sont son rapport k et son angle θ ?',
      options: [
        'Rapport k = √2 et angle θ = π/4 [2π]',
        'Rapport k = 2 et angle θ = π/2 [2π]',
        'Rapport k = √2 et angle θ = -π/4 [2π]',
        'Rapport k = 1 et angle θ = π/4 [2π]'
      ],
      correctAnswer: 'Rapport k = √2 et angle θ = π/4 [2π]',
      explanation: 'Le coefficient multiplicatif est a = 1 + i. Le rapport de la similitude est k = |a| = √(1² + 1²) = √2. L\'angle de la similitude est θ = arg(1 + i) = π/4 [2π] car cos θ = 1/√2 et sin θ = 1/√2.',
      steps: [
        '1. Identifier le coefficient devant z : a = 1 + i.',
        '2. Calculer le module : |a| = √(1² + 1²) = √2 (c\'est le rapport k).',
        '3. Déterminer l\'argument : arg(1 + i) = π/4 car 1 + i = √2(cos π/4 + i sin π/4).'
      ]
    }
  ],

  'skill-tc-coniques': [
    {
      id: 'q-tc-conic-1',
      exerciseId: 'ex-tc-conic',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Coniques : Classification par l’Excentricité',
      microConcept: 'Soit F un foyer, (D) une directrice ne passant pas par F, et e > 0 l\'excentricité. L\'ensemble des points M du plan vérifiant MF / d(M, D) = e est une conique : si e = 1 c\'est une parabole ; si 0 < e < 1 c\'est une ellipse ; si e > 1 c\'est une hyperbole.',
      hint: 'Comparez l\'excentricité e à la valeur charnière 1.',
      prompt: 'Une conique a pour excentricité e = √3 / 2 ≈ 0,866. De quelle conique s’agit-il nécessairement ?',
      options: [
        'Une ellipse',
        'Une parabole',
        'Une hyperbole',
        'Un cercle'
      ],
      correctAnswer: 'Une ellipse',
      explanation: 'Puisque 0 < √3 / 2 < 1, l\'excentricité est strictement comprise entre 0 et 1. La conique est donc une ellipse.',
      steps: [
        '1. Comparer e = √3 / 2 avec 1 : (√3/2)² = 3/4 < 1, donc 0 < e < 1.',
        '2. Rappeler les définitions : e = 1 (parabole), e > 1 (hyperbole), 0 < e < 1 (ellipse).',
        '3. Conclure : il s\'agit d\'une ellipse.'
      ]
    }
  ],

  'skill-tc-geometrie-espace-produits': [
    {
      id: 'q-tc-geoesp-1',
      exerciseId: 'ex-tc-geoesp',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Géométrie de l’Espace : Produit Vectoriel & Vecteur Normal',
      microConcept: 'Le produit vectoriel w = u ∧ v de deux vecteurs non colinéaires est orthogonal à la fois à u et à v. Dans un repère orthonormé direct, il sert de vecteur normal au plan défini par ces deux vecteurs.',
      hint: 'Calculez le déterminant formel ou les coordonnées croisées : x = y₁z₂ - z₁y₂, etc.',
      prompt: 'Dans un repère orthonormé direct (O, i, j, k), on donne u(1, 2, 0) et v(0, 1, 3). Quelles sont les composantes du vecteur produit vectoriel w = u ∧ v ?',
      options: [
        'w(6, -3, 1)',
        'w(6, 3, 1)',
        'w(-6, 3, -1)',
        'w(2, 3, 1)'
      ],
      correctAnswer: 'w(6, -3, 1)',
      explanation: 'w_x = 2 × 3 - 0 × 1 = 6. w_y = -(1 × 3 - 0 × 0) = -3. w_z = 1 × 1 - 2 × 0 = 1. Donc u ∧ v = (6, -3, 1). On vérifie l\'orthogonalité : u · w = 1(6) + 2(-3) + 0(1) = 0 et v · w = 0(6) + 1(-3) + 3(1) = 0.',
      steps: [
        '1. Appliquer les formules des composantes de u ∧ v.',
        '2. x = y_u z_v - z_u y_v = 2(3) - 0(1) = 6.',
        '3. y = -(x_u z_v - z_u x_v) = -(1(3) - 0) = -3.',
        '4. z = x_u y_v - y_u x_v = 1(1) - 2(0) = 1. Résultat : (6, -3, 1).'
      ]
    }
  ],

  // =======================================================================================
  // 📊 BLOC 4 : PROBABILITÉS ET STATISTIQUES
  // =======================================================================================
  'skill-tc-denombrement': [
    {
      id: 'q-tc-denom-1',
      exerciseId: 'ex-tc-denom',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Dénombrement : Combinaisons & Tirages Simultanés',
      microConcept: 'Le nombre de façons de choisir p éléments parmi n éléments distincts sans répétition et sans ordre est donné par le coefficient binomial C_n^p = (n choose p) = n! / (p!(n - p)!).',
      hint: 'Pour un tirage simultané de 3 boules parmi 10, l\'ordre ne compte pas.',
      prompt: 'Une urne contient 10 boules indiscernables au toucher. On tire simultanément 3 boules de l’urne. Combien y a-t-il de tirages possibles ?',
      options: [
        '120',
        '720',
        '30',
        '1000'
      ],
      correctAnswer: '120',
      explanation: 'Il s\'agit du nombre de combinaisons de 3 éléments pris parmi 10 : C₁₀³ = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120.',
      steps: [
        '1. Tirage simultané ⇒ l\'ordre n\'intervient pas, pas de remise ⇒ combinaison.',
        '2. Calculer C₁₀³ = (10 × 9 × 8) / (3 × 2 × 1).',
        '3. 10 × 72 / 6 = 120.'
      ]
    }
  ],

  'skill-tc-probabilites-variables-aleatoires': [
    {
      id: 'q-tc-probav-1',
      exerciseId: 'ex-tc-probav',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Variables Aléatoires : Loi Binomiale & Espérance',
      microConcept: 'Une variable aléatoire X suivant la loi binomiale B(n, p) compte le nombre de succès lors de n épreuves de Bernoulli identiques et indépendantes de probabilité de succès p. Son espérance est E(X) = n × p et sa variance est V(X) = n × p × (1 - p).',
      hint: 'Appliquez la formule directe de l\'espérance d\'une loi binomiale B(n, p) : E(X) = np.',
      prompt: 'Une variable aléatoire X suit la loi binomiale B(20 ; 0,35). Quelle est l\'espérance mathématique E(X) de cette variable ?',
      options: [
        '7',
        '4,55',
        '14',
        '0,35'
      ],
      correctAnswer: '7',
      explanation: 'Pour une loi binomiale B(n, p), l\'espérance mathématique est donnée par E(X) = n × p. Ici n = 20 et p = 0,35, donc E(X) = 20 × 0,35 = 7.',
      steps: [
        '1. Identifier les paramètres de la loi : n = 20 et p = 0,35.',
        '2. Formule de l\'espérance : E(X) = n × p.',
        '3. Calcul : 20 × 0,35 = 7.'
      ]
    }
  ],

  'skill-tc-probabilites-conditionnelles-bayes': [
    {
      id: 'q-tc-bayes-1',
      exerciseId: 'ex-tc-bayes',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Probabilités : Formule des Probabilités Totales',
      microConcept: 'Si {A₁, A₂} forme une partition de l\'univers (système complet), alors pour tout événement B : P(B) = P(B ∩ A₁) + P(B ∩ A₂) = P(A₁) × P(B|A₁) + P(A₂) × P(B|A₂).',
      hint: 'Décomposez l\'événement "produit défectueux" selon les deux usines A et B.',
      prompt: 'Une entreprise produit des composants dans deux usines A et B. L’usine A assure 60 % de la production et présente 2 % de pièces défectueuses. L’usine B assure 40 % et présente 5 % de pièces défectueuses. On prélève une pièce au hasard. Quelle est la probabilité qu’elle soit défectueuse ?',
      options: [
        '0,032 (soit 3,2 %)',
        '0,070 (soit 7 %)',
        '0,035 (soit 3,5 %)',
        '0,024 (soit 2,4 %)'
      ],
      correctAnswer: '0,032 (soit 3,2 %)',
      explanation: 'D\'après la formule des probabilités totales : P(D) = P(A) × P(D|A) + P(B) × P(D|B) = 0,60 × 0,02 + 0,40 × 0,05 = 0,012 + 0,020 = 0,032 (soit 3,2 %).',
      steps: [
        '1. Poser les données : P(A) = 0,60, P(D|A) = 0,02, P(B) = 0,40, P(D|B) = 0,05.',
        '2. Formule des probabilités totales : P(D) = P(A)P(D|A) + P(B)P(D|B).',
        '3. Calcul : 0,012 + 0,020 = 0,032.'
      ]
    }
  ],

  'skill-tc-statistiques-deux-variables': [
    {
      id: 'q-tc-stat-1',
      exerciseId: 'ex-tc-stat',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Statistiques Doubles : Droite d’Ajustement des Moindres Carrés',
      microConcept: 'La droite d\'ajustement affine de Y en X par la méthode des moindres carrés a pour équation y = ax + b où la pente est a = Cov(X, Y) / V(X) et l\'ordonnée à l\'origine est b = ȳ - a x̄. Cette droite passe obligatoirement par le point moyen G(x̄, ȳ) du nuage.',
      hint: 'Utilisez la relation a = Cov(X, Y) / V(X) puis b = ȳ - a x̄.',
      prompt: 'Une série double (X, Y) donne les résultats suivants : x̄ = 10, ȳ = 25, V(X) = 4 et Cov(X, Y) = 6. Quelle est l\'équation de la droite d\'ajustement de Y en X par les moindres carrés ?',
      options: [
        'y = 1,5x + 10',
        'y = 1,5x + 25',
        'y = 0,67x + 18,3',
        'y = 2x + 5'
      ],
      correctAnswer: 'y = 1,5x + 10',
      explanation: 'Le coefficient directeur est a = Cov(X, Y) / V(X) = 6 / 4 = 1,5. L\'ordonnée à l\'origine est b = ȳ - a x̄ = 25 - 1,5 × 10 = 25 - 15 = 10. L\'équation est donc y = 1,5x + 10.',
      steps: [
        '1. Calculer la pente a = Cov(X, Y) / V(X) = 6 / 4 = 1,5.',
        '2. Calculer b = ȳ - a x̄ = 25 - 1,5(10) = 25 - 15 = 10.',
        '3. Écrire l\'équation : y = 1,5x + 10.'
      ]
    }
  ]
};
