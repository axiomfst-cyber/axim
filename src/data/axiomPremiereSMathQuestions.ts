import { ExerciseQuestion } from '../types';

// =====================================================================
// BANQUE DE QUESTIONS OFFICIELLES DE MATHÉMATIQUES : PREMIÈRE S (GABON)
// 27 Chapitres officiels - Progression didactique & validation stricte
// =====================================================================

export const PREMIERE_S_MATH_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // -------------------------------------------------------------------
  // CHAPITRE 1 : ÉLÉMENTS DE LOGIQUE & RAISONNEMENTS
  // -------------------------------------------------------------------
  'skill-1s-chap1-logique': [
    {
      id: 'q-1s-logique-1',
      exerciseId: 'ex-1s-m-logique-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Contraposée d\'une implication',
      microConcept: 'La contraposée de (P ⇒ Q) est (non Q ⇒ non P). Une implication et sa contraposée ont exactement la même valeur de vérité.',
      hint: 'Inverse les deux membres et nie chacun d\'eux. Applique la loi de De Morgan pour la négation de « ou » qui devient « et ».',
      prompt: 'Quelle est la contraposée exacte de l\'implication : « Si x² = 9, alors x = 3 ou x = -3 » ?',
      options: [
        'Si x ≠ 3 et x ≠ -3, alors x² ≠ 9',
        'Si x ≠ 3 ou x ≠ -3, alors x² ≠ 9',
        'Si x = 3 et x = -3, alors x² = 9',
        'Si x² ≠ 9, alors x ≠ 3 et x ≠ -3'
      ],
      correctAnswer: 'Si x ≠ 3 et x ≠ -3, alors x² ≠ 9',
      commonMistake: 'Oublier que la négation d\'un « OU » logique est un « ET » logique (lois de De Morgan).',
      explanation: 'Pour (P ⇒ Q), la contraposée est (non Q ⇒ non P). La négation de (x = 3 ou x = -3) est (x ≠ 3 et x ≠ -3). Donc la contraposée est « Si x ≠ 3 et x ≠ -3, alors x² ≠ 9 ».',
      steps: [
        '1. P : « x² = 9 » et Q : « x = 3 ou x = -3 ».',
        '2. Contraposée : non Q ⇒ non P.',
        '3. non Q = « x ≠ 3 et x ≠ -3 ».',
        '4. Conclusion : « Si x ≠ 3 et x ≠ -3, alors x² ≠ 9 ».'
      ]
    },
    {
      id: 'q-1s-logique-2',
      exerciseId: 'ex-1s-m-logique-2',
      type: 'true_false',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Négation avec quantificateurs universels',
      microConcept: 'La négation de « ∀x ∈ E, P(x) » est « ∃x ∈ E, non P(x) ». Pour nier une propriété universelle, il suffit d\'un seul contre-exemple.',
      hint: 'Le quantificateur « pour tout » (∀) se transforme en « il existe au moins un » (∃) et l\'inégalité stricte > devient ≤.',
      prompt: 'La négation de la proposition « Pour tout réel x, x² > 0 » est « Il existe au moins un réel x tel que x² ≤ 0 ».',
      options: [
        'Vrai (la négation de ∀ est ∃ et la négation de > est ≤)',
        'Faux (la négation de ∀ est encore ∀)'
      ],
      correctAnswer: 'Vrai (la négation de ∀ est ∃ et la négation de > est ≤)',
      commonMistake: 'Remplacer > par < au lieu de ≤ (0 est un contre-exemple car 0² = 0 n\'est pas > 0).',
      explanation: 'La négation formelle de (∀x ∈ R, x² > 0) est (∃x ∈ R, x² ≤ 0). Elle est vraie car pour x = 0, 0² = 0 ≤ 0.',
      steps: [
        '1. Règle : non(∀x, P(x)) ⇔ ∃x, non P(x).',
        '2. La négation de x² > 0 est x² ≤ 0.',
        '3. L\'énoncé est donc rigoureusement vrai.'
      ]
    },
    {
      id: 'q-1s-logique-3',
      exerciseId: 'ex-1s-m-logique-3',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Raisonnement par l\'absurde',
      microConcept: 'Pour démontrer par l\'absurde qu\'une proposition P est vraie, on suppose que sa négation (non P) est vraie, et on en déduit une contradiction logique avec les hypothèses ou un théorème établi.',
      hint: 'Que suppose-t-on au début d\'un raisonnement par l\'absurde pour prouver que √2 est irrationnel ?',
      prompt: 'Dans la démonstration classique que √2 est un nombre irrationnel par l\'absurde, quelle est l\'hypothèse de départ que l\'on pose ?',
      options: [
        'On suppose que √2 est un nombre rationnel, c\'est-à-dire qu\'il s\'écrit p/q avec p et q entiers et fraction irréductible',
        'On suppose que √2 = 0',
        'On suppose que 2 est un nombre premier impair',
        'On suppose que la racine carrée n\'existe pas'
      ],
      correctAnswer: 'On suppose que √2 est un nombre rationnel, c\'est-à-dire qu\'il s\'écrit p/q avec p et q entiers et fraction irréductible',
      commonMistake: 'Confondre le raisonnement par l\'absurde (supposer le contraire de ce qu\'on veut prouver) avec le raisonnement par récurrence ou contraposition.',
      explanation: 'Le principe de l\'absurde consiste à supposer le contraire de la thèse (ici : √2 ∈ Q, soit √2 = p/q sous forme irréductible) pour aboutir à une contradiction (p et q tous deux pairs).',
      steps: [
        '1. Thèse visée : √2 est irrationnel (√2 ∉ Q).',
        '2. Hypothèse contraire : √2 ∈ Q, donc √2 = p/q avec PGCD(p, q) = 1.',
        '3. Développement algébrique : 2q² = p², donc p² est pair et p est pair.',
        '4. Déduction : q est aussi pair, contredisant le fait que p/q soit irréductible.'
      ]
    },
    {
      id: 'q-1s-logique-4',
      exerciseId: 'ex-1s-m-logique-4',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Niveau 4 : Équivalence logique vs Implication simple',
      microConcept: 'Une implication (P ⇒ Q) n\'entraîne pas automatiquement la réciproque (Q ⇒ P). L\'équivalence (P ⇔ Q) n\'a lieu que si les deux implications sont vraies simultanément.',
      hint: 'Élever au carré conserve-t-il l\'équivalence sans condition sur le signe ?',
      prompt: 'Parmi les assertions suivantes portant sur des réels x et y, laquelle constitue une équivalence logique (P ⇔ Q) vraie pour tous réels ?',
      options: [
        'x³ = y³ ⇔ x = y',
        'x² = y² ⇔ x = y',
        '|x| = |y| ⇔ x = y',
        'x > y ⇔ x² > y²'
      ],
      correctAnswer: 'x³ = y³ ⇔ x = y',
      commonMistake: 'Croire que x² = y² ⇔ x = y, ce qui est faux car si x = -2 et y = 2, (-2)² = 2² mais -2 ≠ 2.',
      explanation: 'La fonction cube x ↦ x³ est strictement croissante et bijective sur R, donc x³ = y³ si et seulement si x = y. Pour le carré ou la valeur absolue, on a seulement x = y ou x = -y.',
      steps: [
        '1. Contre-exemple pour le carré : (-3)² = 3² alors que -3 ≠ 3.',
        '2. Contre-exemple pour l\'inégalité : 1 > -5 mais 1² < (-5)² (1 < 25).',
        '3. Pour le cube : f(x) = x³ est strictement monotone sur R, donc injective : x³ = y³ ⇔ x = y.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 2 : SECOND DEGRÉ (A) : TRINÔME, DISCRIMINANT & RACINES
  // -------------------------------------------------------------------
  'skill-1s-chap2-second-degre-a': [
    {
      id: 'q-1s-degre-a-1',
      exerciseId: 'ex-1s-m-degre-a-1',
      type: 'numeric',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Somme des racines S = -b/a',
      microConcept: 'Pour un trinôme ax² + bx + c = 0 admettant deux racines x₁ et x₂, la somme des racines vaut S = x₁ + x₂ = -b/a et le produit vaut P = x₁·x₂ = c/a.',
      hint: 'Identifie a = 2, b = -10, c = 7. Calcule -b/a = -(-10)/2.',
      prompt: 'Quelle est la somme S des racines de l\'équation du second degré 2x² - 10x + 7 = 0 ? (Entrer un nombre entier)',
      correctAnswer: 5,
      commonMistake: 'Oublier le signe moins dans la formule S = -b/a, ce qui donnerait -5 au lieu de +5.',
      explanation: 'S = -b / a = -(-10) / 2 = 10 / 2 = 5.',
      steps: [
        '1. Coefficients du trinôme : a = 2, b = -10, c = 7.',
        '2. Formule de Viète pour la somme : S = -b / a.',
        '3. Calcul : S = -(-10) / 2 = 5.'
      ]
    },
    {
      id: 'q-1s-degre-a-2',
      exerciseId: 'ex-1s-m-degre-a-2',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Calcul du discriminant Δ',
      microConcept: 'Le discriminant d\'un trinôme ax² + bx + c est Δ = b² - 4ac. Si Δ > 0, il y a deux racines réelles distinctes.',
      hint: 'a = 1, b = -6, c = 5. Calcule (-6)² - 4(1)(5).',
      prompt: 'Calculer la valeur du discriminant Δ du trinôme P(x) = x² - 6x + 5. (Entrer un nombre entier)',
      correctAnswer: 16,
      commonMistake: 'Calculer -6² = -36 au lieu de (-6)² = +36.',
      explanation: 'Δ = b² - 4ac = (-6)² - 4 × 1 × 5 = 36 - 20 = 16.',
      steps: [
        '1. Identification : a = 1, b = -6, c = 5.',
        '2. Formule : Δ = b² - 4ac.',
        '3. Remplacement : Δ = 36 - 20 = 16.'
      ]
    },
    {
      id: 'q-1s-degre-a-3',
      exerciseId: 'ex-1s-m-degre-a-3',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Factorisation avec racine évidente',
      microConcept: 'Si la somme des coefficients d\'un trinôme ax² + bx + c est nulle (a + b + c = 0), alors 1 est racine évidente et l\'autre racine est c/a.',
      hint: 'Pour 3x² - 5x + 2 = 0, calcule 3 + (-5) + 2.',
      prompt: 'Quelles sont les racines réelles de l\'équation 3x² - 5x + 2 = 0 ?',
      options: [
        '1 et 2/3',
        '1 et -2/3',
        '-1 et 2/3',
        '2 et 3'
      ],
      correctAnswer: '1 et 2/3',
      commonMistake: 'Calculer un long discriminant au lieu de remarquer la racine évidente x = 1 (car 3 - 5 + 2 = 0).',
      explanation: 'a + b + c = 3 - 5 + 2 = 0, donc x₁ = 1 est racine. Comme le produit P = x₁·x₂ = c/a = 2/3, la seconde racine est x₂ = 2/3.',
      steps: [
        '1. Test racine évidente : 3(1)² - 5(1) + 2 = 0, donc x₁ = 1.',
        '2. Produit des racines : P = c / a = 2 / 3.',
        '3. x₂ = P / x₁ = (2/3) / 1 = 2/3.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 3 : SECOND DEGRÉ (B) : SIGNE DU TRINÔME & INÉQUATIONS
  // -------------------------------------------------------------------
  'skill-1s-chap4-second-degre-b': [
    {
      id: 'q-1s-degre-b-1',
      exerciseId: 'ex-1s-m-degre-b-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Signe du trinôme avec discriminant positif',
      microConcept: 'Lorsque Δ > 0, le trinôme ax² + bx + c est du signe de "a" à l\'extérieur des racines x₁ et x₂, et du signe de "-a" entre les racines.',
      hint: 'Pour P(x) = x² - 4x + 3, les racines sont 1 et 3, et a = 1 > 0. Le trinôme est négatif STRICTEMENT entre les racines.',
      prompt: 'Quel est l\'ensemble des solutions de l\'inéquation x² - 4x + 3 < 0 ?',
      options: [
        ']1; 3[',
        '[1; 3]',
        ']-∞; 1[ ∪ ]3; +∞[',
        ']-∞; 1] ∪ [3; +∞['
      ],
      correctAnswer: ']1; 3[',
      commonMistake: 'Confondre intérieur et extérieur des racines ou mettre des crochets fermés alors que l\'inégalité est stricte (<).',
      explanation: 'Δ = 16 - 12 = 4 > 0. Racines : x₁ = 1, x₂ = 3. Comme a = 1 > 0, le trinôme est du signe de -a (négatif) strictement entre les racines, soit sur ]1; 3[.',
      steps: [
        '1. Racines : x² - 4x + 3 = (x - 1)(x - 3) = 0 => x₁ = 1, x₂ = 3.',
        '2. Signe de a = 1 > 0 : positif hors des racines, négatif entre les racines.',
        '3. L\'inéquation est < 0 stricte : S = ]1; 3[.'
      ]
    },
    {
      id: 'q-1s-degre-b-2',
      exerciseId: 'ex-1s-m-degre-b-2',
      type: 'true_false',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Trinôme à discriminant strictement négatif',
      microConcept: 'Si Δ < 0, le trinôme ax² + bx + c ne s\'annule jamais sur R et garde un signe constant pour tout réel : il est TOUJOURS du signe de "a".',
      hint: 'Pour 2x² + 3x + 5, a = 2 > 0 et Δ = 9 - 40 = -31 < 0.',
      prompt: 'Pour tout réel x, le trinôme 2x² + 3x + 5 est strictement positif.',
      options: [
        'Vrai (Δ = -31 < 0 et a = 2 > 0, donc le trinôme est toujours strictement positif)',
        'Faux (il s\'annule en deux points)'
      ],
      correctAnswer: 'Vrai (Δ = -31 < 0 et a = 2 > 0, donc le trinôme est toujours strictement positif)',
      commonMistake: 'Penser que si Δ < 0, le trinôme est négatif. Non, il est du signe de "a" qui vaut ici +2.',
      explanation: 'Δ = 3² - 4(2)(5) = 9 - 40 = -31 < 0. Comme a = 2 > 0, la parabole est entièrement au-dessus de l\'axe des abscisses. Pour tout x ∈ R, 2x² + 3x + 5 > 0.',
      steps: [
        '1. Calcul de Δ = 9 - 40 = -31 < 0.',
        '2. Pas de racine réelle.',
        '3. Comme a = 2 > 0, le trinôme est strictement positif pour tout x.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 4 : SECOND DEGRÉ (C) : FORME CANONIQUE & PARABOLE
  // -------------------------------------------------------------------
  'skill-1s-chap6-second-degre-c': [
    {
      id: 'q-1s-degre-c-1',
      exerciseId: 'ex-1s-m-degre-c-1',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Abscisse du sommet de la parabole',
      microConcept: 'La forme canonique est a(x - α)² + β. Le sommet de la parabole représentant ax² + bx + c a pour abscisse α = -b / (2a) et pour ordonnée β = f(α) = -Δ / (4a).',
      hint: 'Pour f(x) = 2x² - 8x + 11, calcule α = -(-8) / (2 × 2).',
      prompt: 'Quelle est l\'abscisse α du sommet de la parabole d\'équation y = 2x² - 8x + 11 ? (Entrer un nombre entier)',
      correctAnswer: 2,
      commonMistake: 'Calculer -b/a = 4 au lieu de -b/(2a) = 2 (diviser par a au lieu de 2a).',
      explanation: 'α = -b / (2a) = -(-8) / (2 × 2) = 8 / 4 = 2.',
      steps: [
        '1. a = 2, b = -8, c = 11.',
        '2. Formule du sommet : α = -b / (2a).',
        '3. α = 8 / 4 = 2.'
      ]
    },
    {
      id: 'q-1s-degre-c-2',
      exerciseId: 'ex-1s-m-degre-c-2',
      type: 'numeric',
      difficulty: 4,
      difficultyLabel: 'Niveau 4 : Extremum (minimum / maximum) de la fonction',
      microConcept: 'Lorsque a > 0, la parabole est orientée vers le haut et admet un minimum absolu égal à l\'ordonnée du sommet β = f(α).',
      hint: 'Calcule l\'ordonnée pour x = 2 : f(2) = 2(2)² - 8(2) + 11 = 8 - 16 + 11.',
      prompt: 'Quelle est la valeur minimale atteinte par la fonction f(x) = 2x² - 8x + 11 sur R ? (Entrer un nombre entier)',
      correctAnswer: 3,
      commonMistake: 'Confondre le point où le minimum est atteint (x = 2) avec la valeur minimale elle-même (f(2) = 3).',
      explanation: 'Le sommet est S(2; 3). Comme a = 2 > 0, la fonction f admet un minimum global en x = 2 qui vaut f(2) = 2(4) - 16 + 11 = 8 - 16 + 11 = 3.',
      steps: [
        '1. Abscisse du minimum : α = 2.',
        '2. Évaluation de la fonction : f(2) = 2(2)² - 8(2) + 11.',
        '3. f(2) = 8 - 16 + 11 = 3.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 5 : GÉOMÉTRIE ANALYTIQUE : DROITES & DISTANCE
  // -------------------------------------------------------------------
  'skill-1s-chap3-geom-analytique-a': [
    {
      id: 'q-1s-geom-1',
      exerciseId: 'ex-1s-m-geom-1',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Distance d\'un point à une droite',
      microConcept: 'La distance d\'un point A(xA, yA) à la droite D : ax + by + c = 0 est d(A, D) = |a·xA + b·yA + c| / √(a² + b²).',
      hint: 'Remplace xA = 1, yA = 2 dans l\'équation 3x + 4y - 1 = 0, prends la valeur absolue, puis divise par √(3² + 4²) = 5.',
      prompt: 'Calculer la distance du point A(1; 2) à la droite (D) : 3x + 4y - 1 = 0. (Entrer un nombre entier)',
      correctAnswer: 2,
      commonMistake: 'Oublier la racine carrée au dénominateur : √(3² + 4²) = √25 = 5.',
      explanation: 'Numérateur : |3(1) + 4(2) - 1| = |3 + 8 - 1| = 10. Dénominateur : √(3² + 4²) = 5. Distance = 10 / 5 = 2.',
      steps: [
        '1. Numérateur : |3(1) + 4(2) - 1| = 10.',
        '2. Dénominateur : √(9 + 16) = 5.',
        '3. d = 10 / 5 = 2.'
      ]
    },
    {
      id: 'q-1s-geom-2',
      exerciseId: 'ex-1s-m-geom-2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Vecteur normal à une droite',
      microConcept: 'Toute droite d\'équation cartésienne ax + by + c = 0 admet pour vecteur normal n(a; b) et pour vecteur directeur u(-b; a).',
      hint: 'Pour 5x - 2y + 7 = 0, identifie a et b.',
      prompt: 'Quel est un vecteur normal à la droite d\'équation cartésienne 5x - 2y + 7 = 0 ?',
      options: [
        'n(5; -2)',
        'n(2; 5)',
        'n(-5; -2)',
        'n(5; 2)'
      ],
      correctAnswer: 'n(5; -2)',
      commonMistake: 'Confondre vecteur normal n(a; b) et vecteur directeur u(-b; a).',
      explanation: 'Pour ax + by + c = 0, un vecteur normal est directement donné par les coefficients de x et y : n(a; b) = n(5; -2).',
      steps: [
        '1. Forme générale ax + by + c = 0.',
        '2. Ici a = 5 et b = -2.',
        '3. Le vecteur normal est n(a; b) = n(5; -2).'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 8 : LIMITES & CONTINUITÉ (A)
  // -------------------------------------------------------------------
  'skill-1s-chap8-limites-continuite-a': [
    {
      id: 'q-1s-lim-a-1',
      exerciseId: 'ex-1s-m-lim-a-1',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Limite en l\'infini d\'une fonction rationnelle',
      microConcept: 'En +∞ ou -∞, la limite d\'une fonction rationnelle P(x)/Q(x) est égale à la limite du quotient de ses termes de plus haut degré.',
      hint: 'Garde les termes dominants : (6x²)/(2x²) = 6/2 = 3.',
      prompt: 'Quelle est la limite quand x tend vers +∞ de f(x) = (6x² + 5x - 1) / (2x² - 3x + 4) ? (Entrer un nombre entier)',
      correctAnswer: 3,
      commonMistake: 'Remplacer directement par +∞ et conclure à une forme indéterminée « ∞/∞ » sans factoriser par les monômes de plus haut degré.',
      explanation: 'En +∞, f(x) a la même limite que 6x² / (2x²) = 6 / 2 = 3.',
      steps: [
        '1. Terme de plus haut degré au numérateur : 6x².',
        '2. Terme de plus haut degré au dénominateur : 2x².',
        '3. Quotient simplifié : 6x² / (2x²) = 3.',
        '4. Limite = 3.'
      ]
    },
    {
      id: 'q-1s-lim-a-2',
      exerciseId: 'ex-1s-m-lim-a-2',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Niveau 4 : Levée d\'indétermination 0/0 par factorisation',
      microConcept: 'Pour lever une forme indéterminée « 0/0 » en un point x₀ pour une fraction rationnelle, on factorise par (x - x₀) le numérateur et le dénominateur puis on simplifie.',
      hint: 'x² - 9 = (x - 3)(x + 3). Simplifie par (x - 3) pour x ≠ 3, puis fais tendre x vers 3.',
      prompt: 'Calculer la limite quand x tend vers 3 de la fonction g(x) = (x² - 9) / (x - 3).',
      options: [
        '6',
        '0',
        '+∞',
        '3'
      ],
      correctAnswer: '6',
      commonMistake: 'Penser que la limite n\'existe pas ou vaut 0 car le dénominateur s\'annule en 3.',
      explanation: 'Pour x ≠ 3, (x² - 9)/(x - 3) = (x - 3)(x + 3)/(x - 3) = x + 3. Quand x → 3, x + 3 → 3 + 3 = 6.',
      steps: [
        '1. Forme initiale en 3 : 0 / 0 (forme indéterminée).',
        '2. Factorisation du numérateur : (x - 3)(x + 3).',
        '3. Simplification par (x - 3) ≠ 0 : g(x) = x + 3.',
        '4. Limite : 3 + 3 = 6.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 13 : DÉRIVATION : NOMBRE DÉRIVÉ & TANGENTES
  // -------------------------------------------------------------------
  'skill-1s-chap13-derivees-a': [
    {
      id: 'q-1s-deriv-1',
      exerciseId: 'ex-1s-m-deriv-1',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Nombre dérivé et pente de la tangente',
      microConcept: 'Pour f(x) = x³, la dérivée est f\'(x) = 3x². Le nombre dérivé f\'(x₀) est la pente (coefficient directeur) de la tangente au point d\'abscisse x₀.',
      hint: 'f\'(x) = 3x². Pour x₀ = 2, f\'(2) = 3 × 2².',
      prompt: 'Quel est le coefficient directeur de la tangente à la courbe de f(x) = x³ au point d\'abscisse x₀ = 2 ? (Entrer un nombre entier)',
      correctAnswer: 12,
      commonMistake: 'Confondre l\'image f(2) = 8 avec le nombre dérivé f\'(2) = 12.',
      explanation: 'f\'(x) = 3x², donc f\'(2) = 3 × 2² = 3 × 4 = 12.',
      steps: [
        '1. Fonction : f(x) = x³.',
        '2. Dérivée usuelle : f\'(x) = 3x².',
        '3. Évaluation en x = 2 : f\'(2) = 3(4) = 12.'
      ]
    },
    {
      id: 'q-1s-deriv-2',
      exerciseId: 'ex-1s-m-deriv-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Formule de dérivation d\'un produit (u·v)\'',
      microConcept: 'La dérivée du produit de deux fonctions dérivables est (u·v)\' = u\'·v + u·v\'. Ce n\'est JAMAIS le produit des dérivées u\'·v\' !',
      hint: 'Pense à la règle produit apprise en cours : u\'v + uv\'.',
      prompt: 'Quelle est la dérivée de la fonction f(x) = (2x + 1)(x² + 3) ?',
      options: [
        '6x² + 2x + 6',
        '4x²',
        '2(2x) = 4x',
        '2x³ + x² + 6x + 3'
      ],
      correctAnswer: '6x² + 2x + 6',
      commonMistake: 'Dériver chaque facteur séparément : (2)(2x) = 4x, ce qui est une faute majeure !',
      explanation: 'u(x) = 2x + 1 => u\'(x) = 2. v(x) = x² + 3 => v\'(x) = 2x. (u·v)\' = 2(x² + 3) + (2x + 1)(2x) = 2x² + 6 + 4x² + 2x = 6x² + 2x + 6.',
      steps: [
        '1. u = 2x + 1, u\' = 2.',
        '2. v = x² + 3, v\' = 2x.',
        '3. u\'v + uv\' = 2(x² + 3) + 2x(2x + 1) = 2x² + 6 + 4x² + 2x = 6x² + 2x + 6.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 14 : PRODUIT SCALAIRE & THÉORÈME D'AL-KASHI
  // -------------------------------------------------------------------
  'skill-1s-chap14-produit-scalaire': [
    {
      id: 'q-1s-scalaire-1',
      exerciseId: 'ex-1s-m-scalaire-1',
      type: 'numeric',
      difficulty: 4,
      difficultyLabel: 'Niveau 4 : Théorème d\'Al-Kashi',
      microConcept: 'Dans un triangle quelconque ABC : a² = b² + c² - 2bc cos Â. Pour Â = 60°, cos 60° = 1/2.',
      hint: 'b = 5, c = 8, Â = 60°. a² = 25 + 64 - 2(5)(8)(0.5) = 89 - 40 = 49. a = √49.',
      prompt: 'Dans un triangle ABC, on donne AC = b = 5, AB = c = 8 et l\'angle Â = 60°. Quelle est la longueur a = BC ? (Entrer un nombre entier)',
      correctAnswer: 7,
      commonMistake: 'Oublier le terme -2bc cos Â ou oublier de prendre la racine carrée de a² = 49.',
      explanation: 'a² = 5² + 8² - 2(5)(8)(0.5) = 25 + 64 - 40 = 49. Donc a = √49 = 7.',
      steps: [
        '1. Al-Kashi : a² = b² + c² - 2bc cos(60°).',
        '2. Calcul : a² = 25 + 64 - 40 = 49.',
        '3. Longueur BC = √49 = 7.'
      ]
    },
    {
      id: 'q-1s-scalaire-2',
      exerciseId: 'ex-1s-m-scalaire-2',
      type: 'numeric',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Expression analytique xx\' + yy\'',
      microConcept: 'Dans un repère orthonormé, le produit scalaire des vecteurs u(x; y) et v(x\'; y\') est u · v = x·x\' + y·y\'. Deux vecteurs non nuls sont orthogonaux si et seulement si u · v = 0.',
      hint: 'u(3; 4) et v(2; -1). Calcule 3(2) + 4(-1).',
      prompt: 'Calculer le produit scalaire u · v avec u(3; 4) et v(2; -1). (Entrer un nombre entier)',
      correctAnswer: 2,
      commonMistake: 'Faire le déterminant xy\' - x\'y au lieu du produit scalaire xx\' + yy\'.',
      explanation: 'u · v = 3 × 2 + 4 × (-1) = 6 - 4 = 2.',
      steps: [
        '1. Formule : u · v = x·x\' + y·y\'.',
        '2. Calcul : 3(2) + 4(-1) = 6 - 4 = 2.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 18 : DÉNOMBREMENT : COMBINAISONS & ARRANGEMENTS
  // -------------------------------------------------------------------
  'skill-1s-chap18-denombrement-a': [
    {
      id: 'q-1s-denombrement-1',
      exerciseId: 'ex-1s-m-denombrement-1',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Combinaisons C(n, p)',
      microConcept: 'Le nombre de sous-ensembles de p éléments choisis parmi n sans répétition et sans ordre est donné par les combinaisons : C(n, p) = n! / (p!(n - p)!).',
      hint: 'C(5, 2) = (5 × 4) / (2 × 1) = 20 / 2 = 10.',
      prompt: 'Combien de comités différents de 2 élèves peut-on former dans un groupe de 5 élèves ? (Entrer un nombre entier)',
      correctAnswer: 10,
      commonMistake: 'Tenir compte de l\'ordre et calculer un arrangement A(5, 2) = 20 au lieu d\'une combinaison C(5, 2) = 10.',
      explanation: 'Le choix d\'un comité ne dépend pas de l\'ordre. On utilise les combinaisons C(5, 2) = (5 × 4) / 2 = 10.',
      steps: [
        '1. L\'ordre n\'importe pas : combinaison.',
        '2. Formule : C(5, 2) = 5! / (2! 3!).',
        '3. Calcul : (5 × 4) / 2 = 10.'
      ]
    },
    {
      id: 'q-1s-denombrement-2',
      exerciseId: 'ex-1s-m-denombrement-2',
      type: 'numeric',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Permutations de n éléments',
      microConcept: 'Le nombre de manières d\'ordonner n éléments distincts est le nombre de permutations n! = n × (n - 1) × ... × 1.',
      hint: '4! = 4 × 3 × 2 × 1 = 24.',
      prompt: 'De combien de façons distinctes peut-on classer 4 coureurs sur une ligne d\'arrivée sans ex æquo ? (Entrer un nombre entier)',
      correctAnswer: 24,
      commonMistake: 'Multiplier 4 par 2 (8) au lieu de faire la factorielle 4! = 24.',
      explanation: 'Il s\'agit d\'une permutation de 4 éléments distincts : 4! = 4 × 3 × 2 × 1 = 24.',
      steps: [
        '1. Choix du 1er : 4 possibilités.',
        '2. Choix du 2e : 3 possibilités.',
        '3. Choix du 3e : 2 possibilités, dernier : 1 possibilité.',
        '4. Total = 4! = 24.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 19 & 20 : SUITES NUMÉRIQUES ARITHMÉTIQUES & GÉOMÉTRIQUES
  // -------------------------------------------------------------------
  'skill-1s-chap11-suites-a': [
    {
      id: 'q-1s-suites-a-1',
      exerciseId: 'ex-1s-m-suites-a-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Sens de variation par la différence un+1 - un',
      microConcept: 'Une suite (un) est strictement croissante si pour tout entier n, un+1 - un > 0. Si un+1 - un < 0, elle est strictement décroissante.',
      hint: 'Pour un = 3n - 5, calcule un+1 - un = [3(n + 1) - 5] - [3n - 5] = 3 > 0.',
      prompt: 'Quel est le sens de variation de la suite numérique définie pour tout n ∈ N par un = 3n - 5 ?',
      options: [
        'Strictement croissante (un+1 - un = 3 > 0)',
        'Strictement décroissante',
        'Constante',
        'Non monotone'
      ],
      correctAnswer: 'Strictement croissante (un+1 - un = 3 > 0)',
      commonMistake: 'Regarder seulement u₀ = -5 et croire que la suite est négative ou décroissante.',
      explanation: 'un+1 - un = 3(n + 1) - 5 - (3n - 5) = 3 > 0 pour tout n. La suite est donc strictement croissante sur N.',
      steps: [
        '1. Expression de un+1 : 3(n+1) - 5 = 3n - 2.',
        '2. Différence : un+1 - un = (3n - 2) - (3n - 5) = 3.',
        '3. Comme 3 > 0, la suite est strictement croissante.'
      ]
    }
  ],
  'skill-1s-chap19-suites-b': [
    {
      id: 'q-1s-suites-b-1',
      exerciseId: 'ex-1s-m-suites-b-1',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Terme général d\'une suite arithmétique',
      microConcept: 'Pour une suite arithmétique de premier terme u₀ et de raison r, le terme général est un = u₀ + n·r.',
      hint: 'u₀ = 4, r = 3. u₁₀ = 4 + 10 × 3 = 4 + 30.',
      prompt: 'Soit (un) une suite arithmétique de premier terme u₀ = 4 et de raison r = 3. Quelle est la valeur du terme u₁₀ ? (Entrer un nombre entier)',
      correctAnswer: 34,
      commonMistake: 'Faire u₁₀ = u₀ × r¹⁰ (confondre suite arithmétique et géométrique).',
      explanation: 'un = u₀ + n·r. Pour n = 10 : u₁₀ = 4 + 10 × 3 = 4 + 30 = 34.',
      steps: [
        '1. Formule arithmétique : un = u₀ + n·r.',
        '2. Remplacement : u₁₀ = 4 + 10(3) = 34.'
      ]
    },
    {
      id: 'q-1s-suites-b-2',
      exerciseId: 'ex-1s-m-suites-b-2',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Somme des termes consécutifs d\'une suite géométrique',
      microConcept: 'Pour une suite géométrique de premier terme u₀ et de raison q ≠ 1, la somme des n+1 premiers termes vaut S = u₀ × (1 - qⁿ⁺¹) / (1 - q).',
      hint: '1 + 2 + 4 + 8 + 16 = 2⁵ - 1 = 32 - 1 = 31.',
      prompt: 'Calculer la somme 1 + 2 + 4 + 8 + 16 (somme des puissances de 2 de 2⁰ à 2⁴). (Entrer un nombre entier)',
      correctAnswer: 31,
      commonMistake: 'Compter 4 termes au lieu de 5 termes (de 0 à 4 il y a 5 termes).',
      explanation: 'S = 1 × (1 - 2⁵) / (1 - 2) = (1 - 32) / (-1) = 31.',
      steps: [
        '1. Premier terme u₀ = 1, raison q = 2, nombre de termes = 5.',
        '2. Formule : S = 1 × (2⁵ - 1) / (2 - 1) = 32 - 1 = 31.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 22 & 25 : BARYCENTRES (A : 2 POINTS, B : 3 ET 4 POINTS)
  // -------------------------------------------------------------------
  'skill-1s-chap22-barycentre-a': [
    {
      id: 'q-1s-bary-a-1',
      exerciseId: 'ex-1s-m-bary-a-1',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Position relative du barycentre',
      microConcept: 'Si G est le barycentre de (A, a) et (B, b) avec a + b ≠ 0, alors AG = (b / (a + b))·AB.',
      hint: 'a = 1, b = 3. a + b = 4. AG = (3/4)·AB = (3/4) × 12 = 9.',
      prompt: 'Soit G le barycentre des points pondérés (A, 1) et (B, 3). Si la distance AB = 12 cm, quelle est la distance AG en centimètres ? (Entrer un nombre entier)',
      correctAnswer: 9,
      commonMistake: 'Prendre le coefficient de A pour calculer AG, ce qui donnerait AG = (1/4)·12 = 3 (G est plus proche de B qui est le point le plus lourd !).',
      explanation: 'AG = (b / (a + b))·AB = (3 / (1 + 3)) × 12 = (3/4) × 12 = 9 cm.',
      steps: [
        '1. Relation barycentrique : a·GA + b·GB = 0 => (a+b)·AG = b·AB.',
        '2. AG = (3 / 4) × 12 = 9 cm.'
      ]
    }
  ],
  'skill-1s-chap25-barycentre-b': [
    {
      id: 'q-1s-bary-b-1',
      exerciseId: 'ex-1s-m-bary-b-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Centre de gravité d\'un triangle',
      microConcept: 'Le centre de gravité G d\'un triangle ABC est l\'isobarycentre des sommets A, B, C (pondérés chacun par le coefficient 1). Il vérifie GA + GB + GC = 0 et se situe aux 2/3 de chaque médiane en partant du sommet.',
      hint: 'Pense à la définition de l\'isobarycentre : tous les coefficients sont identiques.',
      prompt: 'Quelle relation vectorielle caractérise de manière exacte le centre de gravité G d\'un triangle ABC ?',
      options: [
        'GA + GB + GC = 0',
        'AG = 2 AB + 2 AC',
        'GA - GB + GC = 0',
        'G = A + B + C'
      ],
      correctAnswer: 'GA + GB + GC = 0',
      commonMistake: 'Oublier que les vecteurs s\'annulent à l\'isobarycentre et écrire des égalités sans vecteurs.',
      explanation: 'Par définition de l\'isobarycentre de 3 points : 1·GA + 1·GB + 1·GC = 0.',
      steps: [
        '1. Définition de l\'isobarycentre de A, B, C.',
        '2. Somme vectorielle : GA + GB + GC = 0.',
        '3. G est l\'intersection des trois médianes.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 23 : ARITHMÉTIQUE DANS Z : DIVISION & PGCD
  // -------------------------------------------------------------------
  'skill-1s-chap23-arithmetique': [
    {
      id: 'q-1s-arithm-1',
      exerciseId: 'ex-1s-m-arithm-1',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Algorithme d\'Euclide et PGCD',
      microConcept: 'Le PGCD de deux entiers a et b est le dernier reste non nul dans les divisions euclidiennes successives de l\'algorithme d\'Euclide.',
      hint: '132 = 48 × 2 + 36 ; 48 = 36 × 1 + 12 ; 36 = 12 × 3 + 0. Le dernier reste non nul est 12.',
      prompt: 'Calculer le PGCD des entiers 132 et 48 à l\'aide de l\'algorithme d\'Euclide. (Entrer un nombre entier)',
      correctAnswer: 12,
      commonMistake: 'Prendre le quotient 3 ou le reste 0.',
      explanation: '132 = 48 × 2 + 36, puis 48 = 36 × 1 + 12, puis 36 = 12 × 3 + 0. Le dernier reste non nul est 12.',
      steps: [
        '1. 132 = 48 × 2 + 36.',
        '2. 48 = 36 × 1 + 12.',
        '3. 36 = 12 × 3 + 0.',
        '4. PGCD(132, 48) = 12.'
      ]
    },
    {
      id: 'q-1s-arithm-2',
      exerciseId: 'ex-1s-m-arithm-2',
      type: 'numeric',
      difficulty: 4,
      difficultyLabel: 'Niveau 4 : Nombres premiers entre eux',
      microConcept: 'Deux entiers a et b sont premiers entre eux si et seulement si leur PGCD est égal à 1.',
      hint: 'Le PGCD de 35 et 12 est 1 car 35 = 5 × 7 et 12 = 2² × 3 (aucun facteur premier commun).',
      prompt: 'Que vaut le PGCD de 35 et 12 ? (Entrer un nombre entier)',
      correctAnswer: 1,
      commonMistake: 'Penser que deux nombres doivent être individuellement premiers pour avoir un PGCD égal à 1 (35 et 12 ne sont pas premiers, mais ils sont premiers entre eux).',
      explanation: '35 = 5 × 7 et 12 = 2² × 3. Ils ne partagent aucun facteur premier commun, donc PGCD(35, 12) = 1.',
      steps: [
        '1. Décomposition de 35 : 5 × 7.',
        '2. Décomposition de 12 : 2² × 3.',
        '3. Facteurs communs : aucun. PGCD = 1.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRES COMPLÉMENTAIRES PREMIÈRE S MATHÉMATIQUES
  // -------------------------------------------------------------------
  'skill-1s-chap5-transformations-a': [
    {
      id: 'q-1s-transf-1',
      exerciseId: 'ex-1s-m-transf-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Homothétie de rapport k',
      microConcept: 'L\'homothétie de centre O et de rapport k transforme tout point M en M\' tel que OM\' = k·OM. Si k < 0, M et M\' sont de part et d\'autre du centre O.',
      hint: 'OM\' = k·OM.',
      prompt: 'Si M\' est l\'image de M par l\'homothétie de centre O et de rapport -2, quelle est la relation vectorielle exacte ?',
      options: [
        'OM\' = -2 OM',
        'OM = -2 OM\'',
        'MM\' = -2 O',
        'OM\' = 2 OM'
      ],
      correctAnswer: 'OM\' = -2 OM',
      commonMistake: 'Inverser M et M\' ou oublier le signe négatif.',
      explanation: 'Par définition de l\'homothétie de centre O et de rapport k : OM\' = k·OM. Ici k = -2, donc OM\' = -2 OM.',
      steps: [
        '1. Formule de l\'homothétie : OM\' = k·OM.',
        '2. Rapport k = -2.',
        '3. Conclusion : OM\' = -2 OM.'
      ]
    }
  ],
  'skill-1s-chap7-vecteurs-espace': [
    {
      id: 'q-1s-vec-esp-1',
      exerciseId: 'ex-1s-m-vec-esp-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Coplanarité de trois vecteurs',
      microConcept: 'Trois vecteurs u, v, w de l\'espace sont coplanaires si et seulement si l\'un d\'eux peut s\'exprimer comme combinaison linéaire des deux autres (w = α·u + β·v).',
      hint: 'Combinaison linéaire signifie qu\'il existe deux scalaires réels α et β.',
      prompt: 'À quelle condition trois vecteurs non colinéaires u, v, w de l\'espace sont-ils coplanaires ?',
      options: [
        'Il existe deux réels α et β tels que w = α·u + β·v',
        'Leur produit scalaire est nul deux à deux',
        'Leurs normes sont toutes égales',
        'Ils ont la même origine'
      ],
      correctAnswer: 'Il existe deux réels α et β tels que w = α·u + β·v',
      commonMistake: 'Confondre coplanarité (même plan) et orthogonalité.',
      explanation: 'Trois vecteurs sont coplanaires s\'ils sont parallèles à un même plan, ce qui équivaut à dire que l\'un est combinaison linéaire des deux autres.',
      steps: [
        '1. Deux vecteurs non colinéaires u et v définissent une direction de plan.',
        '2. w appartient à ce plan ssi w = α·u + β·v.'
      ]
    }
  ],
  'skill-1s-chap9-generalites-fonctions-a': [
    {
      id: 'q-1s-gen-fnc-1',
      exerciseId: 'ex-1s-m-gen-fnc-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Parité d\'une fonction',
      microConcept: 'Une fonction f est paire si pour tout x de son domaine centré, f(-x) = f(x) (symétrie axiale par rapport à l\'axe Oy). Elle est impaire si f(-x) = -f(x) (symétrie centrale par rapport à l\'origine O).',
      hint: 'Calcule f(-x) pour f(x) = x⁴ - 3x² + 5.',
      prompt: 'Quelle est la parité de la fonction f définie sur R par f(x) = x⁴ - 3x² + 5 ?',
      options: [
        'Paire car f(-x) = f(x)',
        'Impaire car f(-x) = -f(x)',
        'Ni paire ni impaire',
        'Périodique de période 2'
      ],
      correctAnswer: 'Paire car f(-x) = f(x)',
      commonMistake: 'Penser que la présence d\'une constante (+5) empêche la fonction d\'être paire (au contraire, (+5) est une puissance paire x⁰).',
      explanation: 'f(-x) = (-x)⁴ - 3(-x)² + 5 = x⁴ - 3x² + 5 = f(x). Tous les exposants sont pairs, donc f est paire.',
      steps: [
        '1. f(-x) = (-x)⁴ - 3(-x)² + 5.',
        '2. (-x)⁴ = x⁴ et (-x)² = x².',
        '3. f(-x) = f(x) => fonction paire.'
      ]
    }
  ],
  'skill-1s-chap10-generalites-fonctions-b': [
    {
      id: 'q-1s-gen-fnc-b-1',
      exerciseId: 'ex-1s-m-gen-fnc-b-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Domaine de définition d\'un quotient',
      microConcept: 'Le domaine de définition d\'un quotient f(x) = u(x) / v(x) est l\'ensemble des réels où v(x) ≠ 0.',
      hint: 'Pour f(x) = (2x + 1) / (x - 4), le dénominateur s\'annule pour x = 4.',
      prompt: 'Quel est l\'ensemble de définition de la fonction rationnelle f(x) = (2x + 1) / (x - 4) ?',
      options: [
        'R \\ {4}',
        'R \\ {-1/2}',
        'R \\ {-4}',
        '[4; +∞['
      ],
      correctAnswer: 'R \\ {4}',
      commonMistake: 'Exclure la valeur qui annule le numérateur au lieu de celle qui annule le dénominateur.',
      explanation: 'La division par zéro étant impossible, le dénominateur x - 4 doit être non nul, soit x ≠ 4. Donc Df = R \\ {4}.',
      steps: [
        '1. Condition d\'existence : x - 4 ≠ 0.',
        '2. x ≠ 4.',
        '3. Df = R \\ {4}.'
      ]
    }
  ],
  'skill-1s-chap15-generalites-fonctions-c': [
    {
      id: 'q-1s-gen-fnc-c-1',
      exerciseId: 'ex-1s-m-gen-fnc-c-1',
      type: 'numeric',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Composée de deux fonctions g ∘ f',
      microConcept: 'La composée (g ∘ f)(x) est définie par g(f(x)). On applique d\'abord f, puis on applique g au résultat.',
      hint: 'f(x) = 2x + 1 et g(x) = x². Calcule f(3) = 7, puis g(7) = 7².',
      prompt: 'Soient f(x) = 2x + 1 et g(x) = x². Quelle est la valeur de (g ∘ f)(3) ? (Entrer un nombre entier)',
      correctAnswer: 49,
      commonMistake: 'Faire (f ∘ g)(3) = f(9) = 19 au lieu de g(f(3)) = g(7) = 49 (l\'ordre de composition compte !).',
      explanation: 'f(3) = 2(3) + 1 = 7. Alors (g ∘ f)(3) = g(f(3)) = g(7) = 7² = 49.',
      steps: [
        '1. Calcul de l\'intérieur : f(3) = 2(3) + 1 = 7.',
        '2. Application de g : g(7) = 7² = 49.'
      ]
    }
  ],
  'skill-1s-chap16-orthogonalite': [
    {
      id: 'q-1s-ortho-1',
      exerciseId: 'ex-1s-m-ortho-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Droite orthogonale à un plan',
      microConcept: 'Une droite (D) est orthogonale à un plan (P) si et seulement si elle est orthogonale à DEUX droites sécantes de ce plan.',
      hint: 'Elle doit être orthogonale à deux directions sécantes pour garantir l\'orthogonalité à tout le plan.',
      prompt: 'À quelle condition une droite (D) est-elle orthogonale à un plan (P) dans l\'espace ?',
      options: [
        'Elle est orthogonale à deux droites sécantes contenues dans (P)',
        'Elle est orthogonale à une seule droite de (P)',
        'Elle est parallèle à une droite de (P)',
        'Elle coupe le plan en son centre'
      ],
      correctAnswer: 'Elle est orthogonale à deux droites sécantes contenues dans (P)',
      commonMistake: 'Croire qu\'être orthogonale à une seule droite du plan suffit.',
      explanation: 'Théorème fondamental de l\'espace : une droite est orthogonale à un plan ssi elle est orthogonale à deux droites sécantes de ce plan.',
      steps: [
        '1. Deux droites sécantes engendrent le plan.',
        '2. L\'orthogonalité à ces deux droites entraîne l\'orthogonalité à toute droite du plan.'
      ]
    }
  ],
  'skill-1s-chap17-algorithmique': [
    {
      id: 'q-1s-algo-1',
      exerciseId: 'ex-1s-m-algo-1',
      type: 'numeric',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Boucle POUR et accumulateur',
      microConcept: 'Dans un algorithme, une boucle « Pour i de 1 à 4 Faire S ← S + i » ajoute successivement 1, 2, 3, 4 à la variable initiale.',
      hint: 'S initial = 0. Étape 1 : S=1. Étape 2 : S=1+2=3. Étape 3 : S=3+3=6. Étape 4 : S=6+4=10.',
      prompt: 'Quelle est la valeur finale de S après l\'exécution de l\'algorithme : S ← 0 ; Pour i de 1 à 4 : S ← S + i ; FinPour ? (Entrer un nombre entier)',
      correctAnswer: 10,
      commonMistake: 'S\'arrêter à i = 3 ou multiplier au lieu d\'additionner.',
      explanation: 'S = 0 + 1 + 2 + 3 + 4 = 10.',
      steps: [
        '1. i=1 => S=1.',
        '2. i=2 => S=3.',
        '3. i=3 => S=6.',
        '4. i=4 => S=10.'
      ]
    }
  ],
  'skill-1s-chap20-angles-a': [
    {
      id: 'q-1s-angles-1',
      exerciseId: 'ex-1s-m-angles-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Formule d\'addition trigonométrique cos(a + b)',
      microConcept: 'Formules d\'addition fondamentales : cos(a + b) = cos(a)·cos(b) - sin(a)·sin(b) et sin(a + b) = sin(a)·cos(b) + cos(a)·sin(b).',
      hint: 'Le cosinus transforme le « + » en « - » entre les cosinus et les sinus.',
      prompt: 'Quelle est la formule exacte de cos(a + b) ?',
      options: [
        'cos(a)·cos(b) - sin(a)·sin(b)',
        'cos(a)·cos(b) + sin(a)·sin(b)',
        'sin(a)·cos(b) + cos(a)·sin(b)',
        'cos(a) + cos(b)'
      ],
      correctAnswer: 'cos(a)·cos(b) - sin(a)·sin(b)',
      commonMistake: 'Mettre un signe « + » ou confondre avec la formule du sinus.',
      explanation: 'cos(a + b) = cos(a)cos(b) - sin(a)sin(b).',
      steps: [
        '1. Formule d\'addition du cosinus.',
        '2. Attention au signe moins : cos(a + b) = cos a cos b - sin a sin b.'
      ]
    }
  ],
  'skill-1s-chap21-limites-continuite-b': [
    {
      id: 'q-1s-lim-b-1',
      exerciseId: 'ex-1s-m-lim-b-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Théorème des valeurs intermédiaires (TVI)',
      microConcept: 'Si f est continue et strictement monotone sur [a; b], alors pour tout réel k compris entre f(a) et f(b), l\'équation f(x) = k admet une UNIQUE solution dans [a; b] (Corollaire du TVI).',
      hint: 'La continuité et la stricte monotonie garantissent l\'existence et l\'unicité.',
      prompt: 'Dans quelles conditions l\'équation f(x) = 0 admet-elle une UNIQUE solution sur un intervalle fermé [a; b] ?',
      options: [
        'Si f est continue, strictement monotone sur [a; b] et f(a)·f(b) < 0',
        'Si f est simplement positive sur [a; b]',
        'Si f est dérivable sans être continue',
        'Si f(a) = f(b)'
      ],
      correctAnswer: 'Si f est continue, strictement monotone sur [a; b] et f(a)·f(b) < 0',
      commonMistake: 'Oublier la condition de stricte monotonie (sans elle, il peut y avoir plusieurs solutions).',
      explanation: 'f(a)·f(b) < 0 assure que 0 est compris entre f(a) et f(b). La continuité assure l\'existence, et la stricte monotonie assure l\'unicité de la solution.',
      steps: [
        '1. Existence : TVI avec f continue et 0 entre f(a) et f(b).',
        '2. Unicité : stricte monotonie de f.'
      ]
    }
  ],
  'skill-1s-chap24-geom-espace-a': [
    {
      id: 'q-1s-esp-pos-1',
      exerciseId: 'ex-1s-m-esp-pos-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Intersection de deux plans sécants',
      microConcept: 'Dans l\'espace, si deux plans distincts se coupent, leur intersection est TOUJOURS une droite.',
      hint: 'Pense à l\'intersection du mur et du sol d\'une salle de classe.',
      prompt: 'Quelle est la nature géométrique de l\'intersection de deux plans sécants dans l\'espace ?',
      options: [
        'Une droite',
        'Un point unique',
        'Un segment',
        'Un cercle'
      ],
      correctAnswer: 'Une droite',
      commonMistake: 'Confondre avec l\'intersection de deux droites sécantes (qui est un point).',
      explanation: 'L\'intersection de deux plans sécants dans l\'espace est une droite géométrique.',
      steps: [
        '1. Deux plans sécants partagent une infinité de points alignés.',
        '2. Leur intersection est donc une droite.'
      ]
    }
  ],
  'skill-1s-chap26-limites-continuite-c': [
    {
      id: 'q-1s-asymptote-1',
      exerciseId: 'ex-1s-m-asymptote-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Asymptote oblique',
      microConcept: 'La droite (D) d\'équation y = ax + b est une asymptote oblique à la courbe Cf en +∞ si et seulement si lim(x→+∞) [f(x) - (ax + b)] = 0.',
      hint: 'L\'écart vertical entre la courbe et la droite doit tendre vers 0.',
      prompt: 'Quelle condition analytique traduit le fait que la droite d\'équation y = 2x + 1 est asymptote oblique à la courbe de f en +∞ ?',
      options: [
        'lim(x→+∞) [f(x) - (2x + 1)] = 0',
        'lim(x→+∞) f(x) = 2',
        'f(2x + 1) = 0',
        'lim(x→+∞) [f(x) / (2x + 1)] = 0'
      ],
      correctAnswer: 'lim(x→+∞) [f(x) - (2x + 1)] = 0',
      commonMistake: 'Confondre asymptote horizontale (lim f(x) = l) et asymptote oblique.',
      explanation: 'Par définition, la distance verticale entre la courbe et l\'asymptote oblique doit s\'annuler à l\'infini : lim [f(x) - (ax + b)] = 0.',
      steps: [
        '1. Écart vertical : d(x) = f(x) - (ax + b).',
        '2. Condition d\'asymptote : lim d(x) = 0.'
      ]
    }
  ],
  'skill-1s-chap27-transformations-b': [
    {
      id: 'q-1s-transf-b-1',
      exerciseId: 'ex-1s-m-transf-b-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Propriétés des rotations',
      microConcept: 'Une rotation est une isométrie du plan : elle conserve les distances, les angles géométriques, les aires et le parallélisme.',
      hint: 'Une rotation fait tourner une figure sans la déformer ni changer sa taille.',
      prompt: 'Parmi les grandeurs géométriques suivantes, laquelle est conservée par une rotation dans le plan ?',
      options: [
        'Les distances, les angles et les aires',
        'Uniquement les abscisses des points',
        'La pente des droites',
        'Les coordonnées des vecteurs'
      ],
      correctAnswer: 'Les distances, les angles et les aires',
      commonMistake: 'Penser que les coordonnées sont conservées alors que les axes tournent par rapport à la figure.',
      explanation: 'La rotation est une isométrie plane : elle conserve toutes les longueurs, les aires et les angles géométriques.',
      steps: [
        '1. La rotation est une isométrie directe.',
        '2. Elle conserve les distances, le produit scalaire et les aires.'
      ]
    }
  ],
  'skill-1s-chap12-bases-repere-espace-a': [
    {
      id: 'q-1s-repere-esp-1',
      exerciseId: 'ex-1s-m-repere-esp-1',
      type: 'numeric',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Milieu d\'un segment dans l\'espace',
      microConcept: 'Dans un repère de l\'espace, le milieu I d\'un segment [AB] avec A(xA, yA, zA) et B(xB, yB, zB) a pour coordonnées I((xA + xB)/2, (yA + yB)/2, (zA + zB)/2).',
      hint: 'A(2, 4, 6) et B(4, 6, 8). zI = (6 + 8)/2 = 7.',
      prompt: 'Soient A(2; 4; 6) et B(4; 6; 8). Quelle est la cote (z) du milieu I du segment [AB] ? (Entrer un nombre entier)',
      correctAnswer: 7,
      commonMistake: 'Soustraire au lieu d\'additionner : (8 - 6)/2 = 1.',
      explanation: 'zI = (zA + zB) / 2 = (6 + 8) / 2 = 14 / 2 = 7.',
      steps: [
        '1. Formule du milieu : zI = (zA + zB) / 2.',
        '2. Calcul : (6 + 8) / 2 = 7.'
      ]
    }
  ]
};
