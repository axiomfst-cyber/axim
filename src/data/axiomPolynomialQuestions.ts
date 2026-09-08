import { ExerciseQuestion } from '../types';

// =====================================================================
// QUESTIONS DE MATHÉMATIQUES : POLYNÔMES DU SECOND DEGRÉ (SECONDE S)
// Programme Gabon / Afrique Francophone (Seconde C / Seconde S)
// =====================================================================

export const SECONDE_POLY_CANONIQUE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-poly-can-1',
    exerciseId: 'ex-poly-can-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte & Orientation de la Parabole',
    microConcept: 'Un polynôme du second degré s\'écrit P(x) = ax² + bx + c avec a ≠ 0. Sa représentation graphique est une parabole. Le signe du coefficient "a" dicte son orientation : si a > 0, branches tournées vers le haut (minimum) ; si a < 0, branches vers le bas (maximum).',
    hint: 'Regarde le nombre placé devant x². Est-il positif ou négatif ?',
    prompt: 'Soit la fonction polynôme P(x) = -3x² + 12x - 5. Quel est le coefficient "a" et l\'orientation de sa courbe parabolique ?',
    options: [
      'a = -3 < 0 : Branches tournées vers le bas (admet un maximum)',
      'a = -3 < 0 : Branches tournées vers le haut (admet un minimum)',
      'a = 12 > 0 : Branches tournées vers le haut (admet un minimum)',
      'a = -5 < 0 : Parabole horizontale sans extremum'
    ],
    correctAnswer: 'a = -3 < 0 : Branches tournées vers le bas (admet un maximum)',
    commonMistake: 'Confondre le coefficient a (devant x²) avec b (devant x) ou penser que le signe négatif oriente les branches vers le haut.',
    explanation: 'Ici a = -3. Comme a < 0, la parabole a les branches tournées vers le bas (forme de cloche ∩) et admet un maximum à son sommet.',
    steps: [
      '1. On identifie les coefficients de P(x) = ax² + bx + c : a = -3, b = 12, c = -5.',
      '2. On étudie le signe de a : a = -3 < 0.',
      '3. Règle du cours : si a < 0, la parabole est orientée vers les ordonnées négatives (branches vers le bas), le sommet correspond donc au point le plus haut (maximum).'
    ]
  },
  {
    id: 'q-2s-poly-can-2',
    exerciseId: 'ex-poly-can-2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Abscisse du Sommet (Formule α = -b / 2a)',
    microConcept: 'Le sommet S de la parabole représentant f(x) = ax² + bx + c a pour coordonnées S(α ; β) où l\'abscisse vaut α = -b / (2a) et l\'ordonnée vaut β = f(α). La droite verticale d\'équation x = α est l\'axe de symétrie de la parabole.',
    hint: 'Identifie clairement a et b, puis applique la formule α = -b / (2a). Attention au double signe moins !',
    prompt: 'Déterminer l\'abscisse α du sommet de la parabole d\'équation y = 2x² - 8x + 3. (Entrer un nombre entier)',
    correctAnswer: 2,
    commonMistake: 'Oublier le signe "-" de la formule et calculer 8 / 4 = 2 par hasard, ou calculer b / 2a = -8/4 = -2.',
    explanation: 'a = 2 et b = -8. Donc α = -(-8) / (2 × 2) = 8 / 4 = 2. Le sommet a pour abscisse x = 2.',
    steps: [
      '1. Coefficients : a = 2, b = -8, c = 3.',
      '2. Formule de l\'abscisse du sommet : α = -b / (2a).',
      '3. Remplacement : α = -(-8) / (2 × 2) = 8 / 4 = 2.'
    ]
  },
  {
    id: 'q-2s-poly-can-3',
    exerciseId: 'ex-poly-can-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Forme Canonique (Cas simple a = 1)',
    microConcept: 'La forme canonique de P(x) = ax² + bx + c s\'écrit a(x - α)² + β. Pour x² + 6x - 7, on remarque que x² + 6x est le début du développement de (x + 3)² = x² + 6x + 9, donc x² + 6x = (x + 3)² - 9.',
    hint: 'Prends la moitié du coefficient de x (qui vaut 6/2 = 3). On a (x + 3)² = x² + 6x + 9. N\'oublie pas de retrancher 9 puis de soustraire 7 !',
    prompt: 'Quelle est la forme canonique du trinôme f(x) = x² + 6x - 7 ?',
    options: [
      '(x + 3)² - 16',
      '(x - 3)² - 16',
      '(x + 3)² + 2',
      '(x + 6)² - 7'
    ],
    correctAnswer: '(x + 3)² - 16',
    commonMistake: 'Oublier de retrancher 3² = 9 ou faire une faute de calcul -9 - 7 = -16 (ne pas mettre -2 ou +2).',
    explanation: 'x² + 6x - 7 = [(x + 3)² - 9] - 7 = (x + 3)² - 16. La forme canonique est (x + 3)² - 16.',
    steps: [
      '1. x² + 6x correspond au début de (x + 3)² car (x + 3)² = x² + 6x + 9.',
      '2. Ainsi, x² + 6x = (x + 3)² - 9.',
      '3. On remplace dans f(x) : f(x) = (x + 3)² - 9 - 7 = (x + 3)² - 16.',
      '4. Le sommet de la parabole est S(-3 ; -16).'
    ]
  },
  {
    id: 'q-2s-poly-can-4',
    exerciseId: 'ex-poly-can-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Forme Canonique avec a ≠ 1',
    microConcept: 'Quand a ≠ 1, on factorise d\'abord par "a" sur les termes en x : ax² + bx + c = a[x² + (b/a)x] + c. Puis on fait apparaître le carré parfait à l\'intérieur du crochet.',
    hint: 'Factorise par 2 : 2x² - 12x + 10 = 2(x² - 6x) + 10. Transforme ensuite x² - 6x en (x - 3)² - 9.',
    prompt: 'Quelle est la forme canonique du trinôme P(x) = 2x² - 12x + 10 ?',
    options: [
      '2(x - 3)² - 8',
      '2(x + 3)² - 8',
      '(2x - 6)² - 8',
      '2(x - 3)² + 10'
    ],
    correctAnswer: '2(x - 3)² - 8',
    commonMistake: 'Oublier de redistribuer le facteur a = 2 sur le carré retranché : 2 × (-9) = -18, et -18 + 10 = -8.',
    explanation: '2x² - 12x + 10 = 2[x² - 6x] + 10 = 2[(x - 3)² - 9] + 10 = 2(x - 3)² - 18 + 10 = 2(x - 3)² - 8.',
    steps: [
      '1. Factoriser 2 sur les termes en x : 2(x² - 6x) + 10.',
      '2. Compléter le carré : x² - 6x = (x - 3)² - 9.',
      '3. Développer le crochet : 2[(x - 3)² - 9] + 10 = 2(x - 3)² - 18 + 10.',
      '4. Simplifier : 2(x - 3)² - 8.'
    ]
  },
  {
    id: 'q-2s-poly-can-5',
    exerciseId: 'ex-poly-can-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi - Extremum et Axe de Symétrie',
    microConcept: 'Pour f(x) = a(x - α)² + β : comme un carré (x - α)² est toujours ≥ 0, si a > 0 alors a(x - α)² ≥ 0 d\'où f(x) ≥ β. La fonction admet donc un minimum égal à β, atteint exactement quand x = α.',
    hint: 'Le terme (x + 4)² est toujours positif ou nul. Quelle est la plus petite valeur possible pour 5(x + 4)² ?',
    prompt: 'Soit la fonction g(x) = 5(x + 4)² - 11 définie sur R. Quel est son extremum et en quelle valeur est-il atteint ?',
    options: [
      'Un minimum de -11 atteint en x = -4',
      'Un maximum de -11 atteint en x = -4',
      'Un minimum de -11 atteint en x = 4',
      'Un minimum de 5 atteint en x = -4'
    ],
    correctAnswer: 'Un minimum de -11 atteint en x = -4',
    commonMistake: 'Penser que le sommet est en x = +4 à cause de "+4" dans la parenthèse (attention : x - α = x - (-4) = x + 4).',
    explanation: 'Puisque a = 5 > 0, la parabole admet un minimum. Comme (x + 4)² ≥ 0, la plus petite valeur est obtenue quand x + 4 = 0, soit x = -4. Le minimum vaut g(-4) = -11.',
    steps: [
      '1. On observe la forme canonique : g(x) = a(x - α)² + β avec a = 5, α = -4 et β = -11.',
      '2. a = 5 > 0 donc les branches vont vers le haut : g admet un minimum.',
      '3. Pour tout x réel, (x + 4)² ≥ 0, donc 5(x + 4)² ≥ 0, d\'où 5(x + 4)² - 11 ≥ -11.',
      '4. L\'égalité est atteinte si et seulement si x + 4 = 0, c\'est-à-dire x = -4.'
    ]
  },
  {
    id: 'q-2s-poly-can-6',
    exerciseId: 'ex-poly-can-6',
    type: 'numeric',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Identification du Coefficient c (Ordonnée à l\'origine)',
    microConcept: 'Pour tout trinôme P(x) = ax² + bx + c, l\'image de 0 est P(0) = c. Le point d\'intersection de la parabole avec l\'axe des ordonnées est donc le point (0 ; c).',
    hint: 'Calcule P(0) pour P(x) = 4x² - 7x + 15.',
    prompt: 'Quelle est l\'ordonnée à l\'origine (valeur de P(0)) de la parabole d\'équation y = 4x² - 7x + 15 ? (Entrer un nombre entier)',
    correctAnswer: 15,
    commonMistake: 'Confondre le coefficient c (terme constant) avec le coefficient a = 4.',
    explanation: 'En remplaçant x par 0 : P(0) = 4(0)² - 7(0) + 15 = 15.',
    steps: [
      '1. On pose x = 0.',
      '2. P(0) = a(0)² + b(0) + c = c.',
      '3. Ici c = 15.'
    ]
  },
  {
    id: 'q-2s-poly-can-7',
    exerciseId: 'ex-poly-can-7',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Ordonnée du Sommet β = f(α)',
    microConcept: 'L\'ordonnée du sommet est β = f(α) où α = -b / (2a). On peut aussi utiliser la formule directe β = -(b² - 4ac) / (4a) = -Δ / (4a).',
    hint: 'Pour f(x) = x² - 4x + 1, l\'abscisse du sommet est α = -(-4) / 2 = 2. Calcule f(2).',
    prompt: 'Quelle est l\'ordonnée β du sommet de la parabole d\'équation y = x² - 4x + 1 ? (Entrer un nombre entier)',
    correctAnswer: -3,
    commonMistake: 'Calculer 2² - 4(2) + 1 = 4 - 8 + 1 = -3 mais oublier le signe moins.',
    explanation: 'α = 4 / 2 = 2. Alors β = f(2) = 2² - 4(2) + 1 = 4 - 8 + 1 = -3.',
    steps: [
      '1. Abscisse du sommet : α = -(-4) / (2 × 1) = 2.',
      '2. Ordonnée du sommet : β = f(2) = 2² - 4(2) + 1.',
      '3. β = 4 - 8 + 1 = -3.'
    ]
  },
  {
    id: 'q-2s-poly-can-8',
    exerciseId: 'ex-poly-can-8',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Axe de Symétrie d\'une Parabole',
    microConcept: 'Toute parabole d\'équation y = ax² + bx + c admet un axe de symétrie vertical unique d\'équation x = α = -b / (2a).',
    hint: 'Calcule α = -b / (2a) pour f(x) = 3x² - 18x + 5.',
    prompt: 'Quelle est l\'équation de l\'axe de symétrie de la parabole représentant f(x) = 3x² - 18x + 5 ?',
    options: [
      'x = 3',
      'x = -3',
      'y = 3',
      'x = 6'
    ],
    correctAnswer: 'x = 3',
    commonMistake: 'Écrire y = 3 (une droite horizontale) au lieu de x = 3 (droite verticale).',
    explanation: 'L\'axe de symétrie est la droite verticale passant par le sommet : x = -b / (2a) = -(-18) / (2 × 3) = 18 / 6 = 3.',
    steps: [
      '1. Identifier les coefficients : a = 3, b = -18.',
      '2. Formule de l\'axe de symétrie : x = -b / (2a).',
      '3. Calcul : x = 18 / 6 = 3.'
    ]
  },
  {
    id: 'q-2s-poly-can-9',
    exerciseId: 'ex-poly-can-9',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Forme Canonique avec Signe Moins Dominant',
    microConcept: 'Pour factoriser un trinôme où a = -1, on met le signe négatif en facteur : -x² + 4x + 5 = -[x² - 4x] + 5 = -[(x - 2)² - 4] + 5 = -(x - 2)² + 4 + 5 = -(x - 2)² + 9.',
    hint: 'Attention au changement de signe lors de la distribution du signe moins : -(-4) = +4 !',
    prompt: 'Quelle est la forme canonique du trinôme P(x) = -x² + 4x + 5 ?',
    options: [
      '-(x - 2)² + 9',
      '-(x + 2)² + 9',
      '-(x - 2)² + 1',
      '(x - 2)² - 9'
    ],
    correctAnswer: '-(x - 2)² + 9',
    commonMistake: 'Oublier que -(-4) = +4 et obtenir 5 - 4 = 1 au lieu de 5 + 4 = 9.',
    explanation: '-x² + 4x + 5 = -(x² - 4x) + 5 = -[(x - 2)² - 4] + 5 = -(x - 2)² + 4 + 5 = -(x - 2)² + 9.',
    steps: [
      '1. Factoriser par -1 : -(x² - 4x) + 5.',
      '2. Compléter le carré : x² - 4x = (x - 2)² - 4.',
      '3. Distribuer le moins : -[(x - 2)² - 4] + 5 = -(x - 2)² + 4 + 5.',
      '4. Résultat final : -(x - 2)² + 9.'
    ]
  },
  {
    id: 'q-2s-poly-can-10',
    exerciseId: 'ex-poly-can-10',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Maximum d\'une Parabole Tournée vers le Bas',
    microConcept: 'Si a < 0, la forme canonique P(x) = a(x - α)² + β prouve que P(x) ≤ β pour tout x. La valeur maximale atteinte est donc exactement β.',
    hint: 'Pour P(x) = -2(x - 5)² + 18, quelle est la plus grande valeur possible ?',
    prompt: 'Quelle est la valeur maximale atteinte par la fonction f(x) = -2(x - 5)² + 18 sur R ? (Entrer un nombre entier)',
    correctAnswer: 18,
    commonMistake: 'Répondre 5 (qui est la position du maximum) au lieu de 18 (la valeur du maximum).',
    explanation: 'Comme -2(x - 5)² ≤ 0 pour tout x, f(x) ≤ 18. L\'égalité est atteinte pour x = 5, donc le maximum vaut 18.',
    steps: [
      '1. (x - 5)² ≥ 0 pour tout réel x.',
      '2. En multipliant par -2 : -2(x - 5)² ≤ 0.',
      '3. En ajoutant 18 : f(x) ≤ 18.',
      '4. Le maximum est donc 18.'
    ]
  },
  {
    id: 'q-2s-poly-can-11',
    exerciseId: 'ex-poly-can-11',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Tableau de Variations d\'un Trinôme',
    microConcept: 'Si a > 0, le trinôme est strictement décroissant sur ]-∞ ; α], puis strictement croissant sur [α ; +∞[. Si a < 0, il est croissant puis décroissant.',
    hint: 'Regarde le signe de a = 2 > 0 et la valeur de α pour f(x) = 2(x - 1)² + 4.',
    prompt: 'Soit la fonction f(x) = 2x² - 4x + 6 = 2(x - 1)² + 4. Quelles sont ses variations ?',
    options: [
      'Décroissante sur ]-∞ ; 1] puis croissante sur [1 ; +∞[',
      'Croissante sur ]-∞ ; 1] puis décroissante sur [1 ; +∞[',
      'Croissante sur tout R',
      'Décroissante sur ]-∞ ; 4] puis croissante sur [4 ; +∞['
    ],
    correctAnswer: 'Décroissante sur ]-∞ ; 1] puis croissante sur [1 ; +∞[',
    commonMistake: 'Confondre α = 1 (abscisse où s\'effectue le changement de variation) avec β = 4 (ordonnée).',
    explanation: 'Puisque a = 2 > 0, la parabole a les branches tournées vers le haut. Elle descend de -∞ jusqu\'au sommet S(1 ; 4), puis remonte vers +∞.',
    steps: [
      '1. a = 2 > 0 donc la parabole a la forme en U.',
      '2. Le sommet est atteint en x = 1.',
      '3. Elle est donc décroissante sur ]-∞ ; 1] et croissante sur [1 ; +∞[.'
    ]
  },
  {
    id: 'q-2s-poly-can-12',
    exerciseId: 'ex-poly-can-12',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Détermination Algébrique de β via la Formule Canonique',
    microConcept: 'La relation fondamentale reliant la forme développée et la forme canonique est β = c - b²/(4a).',
    hint: 'Calcule β = 7 - (12)² / (4 × 3) pour f(x) = 3x² + 12x + 7.',
    prompt: 'Calculer la constante β de la forme canonique 3(x - α)² + β pour f(x) = 3x² + 12x + 7. (Entrer un nombre entier)',
    correctAnswer: -5,
    commonMistake: 'Oublier de diviser par 4a = 12 : 144 / 12 = 12, puis 7 - 12 = -5.',
    explanation: 'α = -12 / 6 = -2. Alors β = f(-2) = 3(-2)² + 12(-2) + 7 = 12 - 24 + 7 = -5.',
    steps: [
      '1. α = -12 / (2 × 3) = -2.',
      '2. β = f(-2) = 3(4) - 24 + 7 = 12 - 24 + 7 = -5.',
      '3. Forme canonique : 3(x + 2)² - 5.'
    ]
  },
  {
    id: 'q-2s-poly-can-13',
    exerciseId: 'ex-poly-can-13',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Nombre de Solutions selon le Signe de a et β',
    microConcept: 'Pour a(x - α)² + β = 0 <=> (x - α)² = -β/a. Si -β/a > 0, il y a 2 racines ; si -β/a = 0, il y a 1 racine double ; si -β/a < 0, il n\'y a aucune racine réelle.',
    hint: 'Si a = 3 > 0 et β = 5 > 0, est-ce que 3(x - 1)² + 5 peut être égal à 0 ?',
    prompt: 'L\'équation 3(x - 1)² + 5 = 0 possède combien de solutions réelles ?',
    options: [
      'Aucune solution réelle (car un carré ne peut pas être négatif)',
      'Une solution réelle unique x = 1',
      'Deux solutions réelles distinctes',
      'Une infinité de solutions'
    ],
    correctAnswer: 'Aucune solution réelle (car un carré ne peut pas être négatif)',
    commonMistake: 'Vouloir développer sans remarquer immédiatement que 3(x - 1)² + 5 ≥ 5 > 0 pour tout x.',
    explanation: '3(x - 1)² + 5 = 0 <=> 3(x - 1)² = -5 <=> (x - 1)² = -5/3. Or un carré réel est toujours ≥ 0, ce qui est impossible. L\'équation n\'a aucune solution dans R.',
    steps: [
      '1. Isoler le carré : (x - 1)² = -5/3.',
      '2. Or un carré dans R est toujours positif ou nul.',
      '3. Il n\'existe aucun nombre réel dont le carré est -5/3.',
      '4. L\'ensemble des solutions est l\'ensemble vide ∅.'
    ]
  },
  {
    id: 'q-2s-poly-can-14',
    exerciseId: 'ex-poly-can-14',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise - Retrouver les Coefficients d\'un Trinôme',
    microConcept: 'Une parabole de sommet S(2 ; 3) s\'écrit f(x) = a(x - 2)² + 3. Si elle passe par le point A(0 ; 7), alors f(0) = 7 <=> a(0 - 2)² + 3 = 7 <=> 4a + 3 = 7 <=> a = 1.',
    hint: 'Pose f(x) = a(x - 2)² + 3 et remplace x par 0 pour trouver a.',
    prompt: 'Une parabole a pour sommet S(2 ; 3) et passe par le point (0 ; 7). Que vaut le coefficient dominant "a" ? (Entrer un nombre entier)',
    correctAnswer: 1,
    commonMistake: 'Prendre l\'ordonnée à l\'origine 7 comme valeur de a.',
    explanation: 'f(x) = a(x - 2)² + 3. Comme f(0) = 7 : a(-2)² + 3 = 7 <=> 4a + 3 = 7 <=> 4a = 4 <=> a = 1.',
    steps: [
      '1. Écriture avec le sommet : f(x) = a(x - 2)² + 3.',
      '2. Condition de passage en (0 ; 7) : f(0) = 7.',
      '3. 4a + 3 = 7 <=> 4a = 4 <=> a = 1.'
    ]
  },
  {
    id: 'q-2s-poly-can-15',
    exerciseId: 'ex-poly-can-15',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise - Translation de Paraboles',
    microConcept: 'La parabole d\'équation y = a(x - α)² + β est l\'image de la parabole fondamentale y = ax² par la translation de vecteur v = αi + βj (déplacement de α vers la droite et β vers le haut).',
    hint: 'Compare y = 2(x - 3)² + 4 avec y = 2x².',
    prompt: 'Par quelle transformation géométrique obtient-on la parabole y = 2(x - 3)² + 4 à partir de la parabole y = 2x² ?',
    options: [
      'Une translation de vecteur 3i + 4j (3 unités à droite, 4 unités vers le haut)',
      'Une translation de vecteur -3i + 4j (3 unités à gauche, 4 unités vers le haut)',
      'Une symétrie par rapport à l\'origine',
      'Une rotation de 90 degrés'
    ],
    correctAnswer: 'Une translation de vecteur 3i + 4j (3 unités à droite, 4 unités vers le haut)',
    commonMistake: 'Penser que (x - 3) décale vers la gauche (c\'est vers la droite, car x = 3 annule x - 3).',
    explanation: 'L\'expression 2(x - 3)² + 4 correspond à la translation du sommet O(0 ; 0) vers le point S(3 ; 4). Le vecteur de translation est donc (3 ; 4) = 3i + 4j.',
    steps: [
      '1. Le sommet de y = 2x² est en (0 ; 0).',
      '2. Le sommet de y = 2(x - 3)² + 4 est en (3 ; 4).',
      '3. Le vecteur reliant les deux sommets est u(3 ; 4) = 3i + 4j.'
    ]
  }
];

export const SECONDE_POLY_RACINES_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-poly-rac-1',
    exerciseId: 'ex-poly-rac-1',
    type: 'numeric',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Calcul du Discriminant Δ = b² - 4ac',
    microConcept: 'Pour tout trinôme ax² + bx + c, le discriminant noté Δ (delta) est défini par Δ = b² - 4ac. Attention : si b est négatif, b² est strictement positif ! Exemple : (-5)² = +25.',
    hint: 'Identifie a = 2, b = -5, c = 2. Calcule (-5)² puis soustrais 4 × 2 × 2.',
    prompt: 'Calculer la valeur du discriminant Δ du trinôme P(x) = 2x² - 5x + 2. (Entrer un nombre entier)',
    correctAnswer: 9,
    commonMistake: 'Écrire (-5)² = -25 au lieu de +25, ce qui donnerait un discriminant erroné et négatif (-41).',
    explanation: 'a = 2, b = -5, c = 2. Δ = b² - 4ac = (-5)² - 4(2)(2) = 25 - 16 = 9. Comme Δ > 0, il y aura 2 racines réelles distinctes.',
    steps: [
      '1. Identifier les coefficients : a = 2, b = -5, c = 2.',
      '2. Poser la formule : Δ = b² - 4ac.',
      '3. Calculer : (-5)² = 25 et 4 × a × c = 4 × 2 × 2 = 16.',
      '4. Soustraction : Δ = 25 - 16 = 9.'
    ]
  },
  {
    id: 'q-2s-poly-rac-2',
    exerciseId: 'ex-poly-rac-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Calcul des Deux Racines Distinctes (Δ > 0)',
    microConcept: 'Lorsque Δ > 0, l\'équation ax² + bx + c = 0 possède deux solutions réelles distinctes : x₁ = (-b - √Δ) / (2a) et x₂ = (-b + √Δ) / (2a).',
    hint: 'On sait que b = -5, donc -b = +5. Ici Δ = 9 donc √Δ = 3. Le dénominateur est 2a = 2 × 2 = 4.',
    prompt: 'Quelles sont les racines de l\'équation 2x² - 5x + 2 = 0 ? (sachant que Δ = 9 et √Δ = 3)',
    options: [
      'x₁ = 1/2 et x₂ = 2',
      'x₁ = -1/2 et x₂ = -2',
      'x₁ = 1 et x₂ = 2',
      'x₁ = 2 et x₂ = 5/2'
    ],
    correctAnswer: 'x₁ = 1/2 et x₂ = 2',
    commonMistake: 'Oublier de diviser par 2a (diviser par a seulement ou par 2 sans tenir compte de a = 2).',
    explanation: 'x₁ = (5 - 3) / (2 × 2) = 2 / 4 = 1/2. x₂ = (5 + 3) / (2 × 2) = 8 / 4 = 2. Les racines sont 1/2 et 2.',
    steps: [
      '1. -b = -(-5) = 5, √Δ = √9 = 3, 2a = 2 × 2 = 4.',
      '2. Première racine : x₁ = (5 - 3) / 4 = 2 / 4 = 1/2.',
      '3. Deuxième racine : x₂ = (5 + 3) / 4 = 8 / 4 = 2.',
      '4. Ensemble des solutions S = {1/2 ; 2}.'
    ]
  },
  {
    id: 'q-2s-poly-rac-3',
    exerciseId: 'ex-poly-rac-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Factorisation Complète du Trinôme (Règle du a)',
    microConcept: 'Théorème de factorisation : Si le trinôme P(x) = ax² + bx + c admet deux racines x₁ et x₂, sa factorisation dans R est IMPÉRATIVEMENT P(x) = a(x - x₁)(x - x₂). Ne jamais oublier le facteur "a" devant !',
    hint: 'Regarde le coefficient de x² : ici a = 3. Si on ne met pas le 3 devant, en développant on obtiendrait x² et non 3x².',
    prompt: 'Le polynôme P(x) = 3x² - 7x + 2 admet pour racines x₁ = 1/3 et x₂ = 2. Quelle est sa forme factorisée exacte ?',
    options: [
      '3(x - 1/3)(x - 2) ou (3x - 1)(x - 2)',
      '(x - 1/3)(x - 2)',
      '3(x + 1/3)(x + 2)',
      '(3x + 1)(x - 2)'
    ],
    correctAnswer: '3(x - 1/3)(x - 2) ou (3x - 1)(x - 2)',
    commonMistake: 'Oublier le coefficient a = 3 et répondre (x - 1/3)(x - 2). C\'est l\'une des erreurs les plus fréquentes au lycée !',
    explanation: 'P(x) = a(x - x₁)(x - x₂) = 3(x - 1/3)(x - 2). En distribuant le 3 sur la première parenthèse : 3(x - 1/3) = 3x - 1, ce qui s\'écrit aussi (3x - 1)(x - 2).',
    steps: [
      '1. Règle fondamentale : P(x) = a(x - x₁)(x - x₂).',
      '2. Ici a = 3, x₁ = 1/3, x₂ = 2.',
      '3. P(x) = 3(x - 1/3)(x - 2).',
      '4. En multipliant 3 par (x - 1/3), on obtient (3x - 1)(x - 2).'
    ]
  },
  {
    id: 'q-2s-poly-rac-4',
    exerciseId: 'ex-poly-rac-4',
    type: 'true_false',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Racine Double & Identité Remarquable (Δ = 0)',
    microConcept: 'Lorsque Δ = 0, le trinôme possède une UNIQUE racine double x₀ = -b / (2a). Sa forme factorisée est a(x - x₀)². Lorsque Δ < 0, il n\'y a AUCUNE racine réelle et le trinôme n\'est PAS factorisable dans R.',
    hint: 'Calcule Δ = (-12)² - 4(4)(9) = 144 - 144. Que vaut le discriminant ?',
    prompt: 'L\'équation 4x² - 12x + 9 = 0 admet une unique racine réelle double x₀ = 3/2, et s\'écrit sous forme factorisée (2x - 3)².',
    options: [
      'Vrai (Δ = 0, racine double x₀ = 12/8 = 3/2, factorisation 4(x - 3/2)² = (2x - 3)²)',
      'Faux (Le discriminant est strictement positif et donne 2 racines distinctes)'
    ],
    correctAnswer: 'Vrai (Δ = 0, racine double x₀ = 12/8 = 3/2, factorisation 4(x - 3/2)² = (2x - 3)²)',
    commonMistake: 'Penser que si l\'expression ressemble à une identité remarquable, on ne peut pas utiliser le discriminant Δ.',
    explanation: 'Δ = (-12)² - 4 × 4 × 9 = 144 - 144 = 0. Δ = 0 donc racine double x₀ = -(-12) / (2 × 4) = 12 / 8 = 3/2. Factorisation : 4(x - 3/2)² = [2(x - 3/2)]² = (2x - 3)². C\'est vrai.',
    steps: [
      '1. Coefficients : a = 4, b = -12, c = 9.',
      '2. Δ = (-12)² - 4(4)(9) = 144 - 144 = 0.',
      '3. Racine double : x₀ = -b / (2a) = 12 / 8 = 3/2.',
      '4. Factorisation : P(x) = 4(x - 3/2)² = (2x - 3)².'
    ]
  },
  {
    id: 'q-2s-poly-rac-5',
    exerciseId: 'ex-poly-rac-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise - Signe du Trinôme & Inéquation',
    microConcept: 'Règle du signe d\'un trinôme ax² + bx + c lorsque Δ > 0 (avec x₁ < x₂) : le trinôme est du signe de "a" à l\'EXTÉRIEUR des racines (]-∞ ; x₁[ ∪ ]x₂ ; +∞[) et du signe OPPOSÉ à "a" à l\'INTÉRIEUR des racines (]x₁ ; x₂[).',
    hint: 'Ici a = 1 > 0. Le trinôme est donc négatif ou nul (signe contraire de a) ENTRE les racines.',
    prompt: 'Résoudre dans R l\'inéquation x² - 4x - 5 ≤ 0 (sachant que les racines de l\'équation x² - 4x - 5 = 0 sont x₁ = -1 et x₂ = 5, et que a = 1 > 0).',
    options: [
      '[-1 ; 5]',
      ']-∞ ; -1] ∪ [5 ; +∞[',
      ']-1 ; 5[',
      '∅ (aucun réel ne vérifie cette inéquation)'
    ],
    correctAnswer: '[-1 ; 5]',
    commonMistake: 'Choisir ]-∞ ; -1] ∪ [5 ; +∞[ en oubliant que ce sont les intervalles où le trinôme est POSITIF (signe de a = 1).',
    explanation: 'Le coefficient a = 1 est strictement positif. Le trinôme est du signe opposé à "a" (donc négatif ≤ 0) à l\'intérieur des racines. Comme l\'inégalité est large (≤), on inclut les racines : S = [-1 ; 5].',
    steps: [
      '1. Les racines sont x₁ = -1 et x₂ = 5.',
      '2. Le coefficient dominant est a = 1 > 0.',
      '3. Tableau de signes : positif sur ]-∞ ; -1], nul en -1, négatif sur [-1 ; 5], nul en 5, positif sur [5 ; +∞[.',
      '4. On cherche où x² - 4x - 5 ≤ 0 : c\'est l\'intervalle fermé [-1 ; 5].'
    ]
  },
  {
    id: 'q-2s-poly-rac-6',
    exerciseId: 'ex-poly-rac-6',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Signe du Discriminant et Nombre de Racines',
    microConcept: 'Le nombre de solutions réelles de ax² + bx + c = 0 dépend exclusivement du signe de Δ = b² - 4ac : si Δ > 0, 2 solutions distinctes ; si Δ = 0, 1 solution double ; si Δ < 0, 0 solution réelle.',
    hint: 'Si Δ = -7, peut-on extraire la racine carrée d\'un nombre négatif dans R ?',
    prompt: 'Soit un trinôme dont le discriminant calculé vaut Δ = -7. Combien de racines réelles possède-t-il ?',
    options: [
      'Aucune racine réelle dans R',
      'Une racine double',
      'Deux racines réelles distinctes',
      'Sept racines réelles'
    ],
    correctAnswer: 'Aucune racine réelle dans R',
    commonMistake: 'Penser que le signe de Δ indique le signe des racines plutôt que leur existence.',
    explanation: 'Comme la racine carrée d\'un nombre strictement négatif n\'est pas définie dans l\'ensemble des réels R, l\'équation ax² + bx + c = 0 n\'admet aucune solution réelle quand Δ < 0.',
    steps: [
      '1. Valeur de Δ : Δ = -7 < 0.',
      '2. Règle du cours : si Δ < 0, pas de racine réelle.',
      '3. Conclusion : 0 racine réelle.'
    ]
  },
  {
    id: 'q-2s-poly-rac-7',
    exerciseId: 'ex-poly-rac-7',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Somme des Racines (Formule S = -b/a)',
    microConcept: 'Pour tout trinôme ax² + bx + c = 0 admettant deux racines x₁ et x₂, leur somme vaut toujours S = x₁ + x₂ = -b / a.',
    hint: 'Pour 2x² - 10x + 3 = 0, a = 2 et b = -10. Calcule -(-10) / 2.',
    prompt: 'Quelle est la somme S = x₁ + x₂ des deux racines de l\'équation 2x² - 10x + 3 = 0 ? (Entrer un nombre entier)',
    correctAnswer: 5,
    commonMistake: 'Oublier le signe moins de la formule et calculer b/a = -10/2 = -5.',
    explanation: 'S = -b / a = -(-10) / 2 = 10 / 2 = 5.',
    steps: [
      '1. Identifier les coefficients : a = 2, b = -10, c = 3.',
      '2. Formule de Viète pour la somme : S = -b / a.',
      '3. Calcul : S = -(-10) / 2 = 5.'
    ]
  },
  {
    id: 'q-2s-poly-rac-8',
    exerciseId: 'ex-poly-rac-8',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Produit des Racines (Formule P = c/a)',
    microConcept: 'Pour tout trinôme ax² + bx + c = 0 admettant deux racines x₁ et x₂, leur produit vaut toujours P = x₁ × x₂ = c / a.',
    hint: 'Pour 3x² + 4x - 21 = 0, calcule c / a = -21 / 3.',
    prompt: 'Quel est le produit P = x₁ × x₂ des racines de l\'équation 3x² + 4x - 21 = 0 ? (Entrer un nombre entier)',
    correctAnswer: -7,
    commonMistake: 'Mettre un signe moins devant la formule (confondre avec la somme -b/a).',
    explanation: 'P = c / a = -21 / 3 = -7.',
    steps: [
      '1. Coefficients : a = 3, b = 4, c = -21.',
      '2. Formule du produit : P = c / a.',
      '3. Calcul : P = -21 / 3 = -7.'
    ]
  },
  {
    id: 'q-2s-poly-rac-9',
    exerciseId: 'ex-poly-rac-9',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Racine Évidente (x = 1)',
    microConcept: 'Si la somme des coefficients a + b + c = 0, alors x₁ = 1 est une racine évidente du trinôme, et la seconde racine vaut x₂ = c / a.',
    hint: 'Vérifie que 5 + (-8) + 3 = 0. Alors x = 1 est racine. Quelle est la seconde racine ?',
    prompt: 'Soit le trinôme 5x² - 8x + 3 = 0. Sachant que 1 est une racine évidente, que vaut la seconde racine x₂ ? (Entrer 0.6 ou fraction 3/5)',
    correctAnswer: 0.6,
    commonMistake: 'Calculer tout le discriminant sans profiter de la propriété de la racine évidente.',
    explanation: 'Comme a + b + c = 5 - 8 + 3 = 0, x₁ = 1 est racine. Le produit des racines vaut x₁ × x₂ = c / a = 3/5 = 0.6. Donc x₂ = 0.6.',
    steps: [
      '1. Somme des coefficients : 5 - 8 + 3 = 0.',
      '2. Donc x₁ = 1 est racine.',
      '3. Produit P = x₁ × x₂ = c / a = 3 / 5 = 0.6.',
      '4. x₂ = 0.6.'
    ]
  },
  {
    id: 'q-2s-poly-rac-10',
    exerciseId: 'ex-poly-rac-10',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Factorisation d\'un Trinôme quand Δ > 0',
    microConcept: 'Lorsque ax² + bx + c admet deux racines x₁ et x₂, sa factorisation complète est impérativement a(x - x₁)(x - x₂). Ne jamais oublier le facteur "a" devant !',
    hint: 'Les racines de 2x² - 6x + 4 = 0 sont 1 et 2. Quelle est la factorisation avec a = 2 ?',
    prompt: 'Quelle est la factorisation du trinôme P(x) = 2x² - 6x + 4 sachant que ses racines sont x₁ = 1 et x₂ = 2 ?',
    options: [
      '2(x - 1)(x - 2)',
      '(x - 1)(x - 2)',
      '2(x + 1)(x + 2)',
      '(2x - 1)(x - 2)'
    ],
    correctAnswer: '2(x - 1)(x - 2)',
    commonMistake: 'Oublier le coefficient dominant a = 2 et écrire simplement (x - 1)(x - 2) qui ne vaut que x² - 3x + 2.',
    explanation: 'La formule générale de factorisation est a(x - x₁)(x - x₂). Ici a = 2, x₁ = 1, x₂ = 2, donc P(x) = 2(x - 1)(x - 2).',
    steps: [
      '1. Formule de factorisation : a(x - x₁)(x - x₂).',
      '2. Remplacer a par 2, x₁ par 1 et x₂ par 2.',
      '3. P(x) = 2(x - 1)(x - 2).'
    ]
  },
  {
    id: 'q-2s-poly-rac-11',
    exerciseId: 'ex-poly-rac-11',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Signe Constant quand Δ < 0',
    microConcept: 'Si Δ < 0, le trinôme ne s\'annule JAMAIS sur R et garde un SIGNE STRICTEMENT CONSTANT, qui est celui de "a" sur tout l\'intervalle ]-∞ ; +∞[.',
    hint: 'Pour P(x) = 3x² + 2x + 5, a = 3 > 0 et Δ = 4 - 60 = -56 < 0. Quel est son signe ?',
    prompt: 'Quel est le signe de l\'expression P(x) = 3x² + 2x + 5 pour tout x ∈ R (sachant que Δ = -56 < 0 et a = 3) ?',
    options: [
      'Strictement positif sur R (P(x) > 0 pour tout x)',
      'Strictement négatif sur R',
      'Positif puis négatif',
      'Nul en au moins un point'
    ],
    correctAnswer: 'Strictement positif sur R (P(x) > 0 pour tout x)',
    commonMistake: 'Penser que si Δ < 0 l\'expression est négative. Le signe est celui de "a" (ici a = 3 > 0).',
    explanation: 'Comme Δ < 0, la parabole ne coupe jamais l\'axe des abscisses. Comme a = 3 > 0, elle est située entièrement au-dessus de l\'axe : P(x) > 0 pour tout réel x.',
    steps: [
      '1. Δ = 2² - 4(3)(5) = 4 - 60 = -56 < 0.',
      '2. Pas de racine réelle.',
      '3. a = 3 > 0, donc le trinôme est strictement positif sur R.'
    ]
  },
  {
    id: 'q-2s-poly-rac-12',
    exerciseId: 'ex-poly-rac-12',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Inéquation Stricte et Tableau de Signes',
    microConcept: 'Pour une inéquation STRICTE ax² + bx + c > 0 ou < 0, les bornes des racines sont STRICTEMENT EXCLUES des intervalles de solution.',
    hint: 'Si (x - 2)(x - 7) < 0, les racines sont 2 et 7. Faut-il inclure ou exclure 2 et 7 ?',
    prompt: 'Résoudre dans R l\'inéquation x² - 9x + 14 < 0 (sachant que les racines sont 2 et 7).',
    options: [
      ']2 ; 7[',
      '[2 ; 7]',
      ']-∞ ; 2[ ∪ ]7 ; +∞[',
      '∅'
    ],
    correctAnswer: ']2 ; 7[',
    commonMistake: 'Mettre des crochets fermés [2 ; 7] alors que l\'inégalité est stricte (< 0 et non ≤ 0).',
    explanation: 'Le trinôme est négatif entre les racines. Comme l\'inégalité est stricte (< 0), les racines x = 2 et x = 7 (où le trinôme vaut 0) sont exclues : S = ]2 ; 7[.',
    steps: [
      '1. Racines : x₁ = 2 et x₂ = 7.',
      '2. a = 1 > 0, donc négatif à l\'intérieur des racines.',
      '3. Inégalité stricte < 0 : intervalle ouvert ]2 ; 7[.'
    ]
  },
  {
    id: 'q-2s-poly-rac-13',
    exerciseId: 'ex-poly-rac-13',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Équation Bicarrée (Changement de variable X = x²)',
    microConcept: 'Une équation bicarrée s\'écrit ax⁴ + bx² + c = 0. En posant X = x² (avec X ≥ 0), on obtient une équation du 2nd degré aX² + bX + c = 0.',
    hint: 'Pose X = x². L\'équation x⁴ - 5x² + 4 = 0 devient X² - 5X + 4 = 0. Quelles sont les valeurs de X ? Combien de valeurs réelles de x en découlent ?',
    prompt: 'Combien de solutions réelles possède l\'équation bicarrée x⁴ - 5x² + 4 = 0 ? (Entrer un nombre entier)',
    correctAnswer: 4,
    commonMistake: 'Répondre 2 en ne comptant que les solutions en X (X = 1 et X = 4), sans résoudre x² = 1 (x = ±1) et x² = 4 (x = ±2).',
    explanation: 'Posons X = x². X² - 5X + 4 = 0 a pour solutions X₁ = 1 et X₂ = 4. Comme les deux sont > 0 : x² = 1 donne x = -1 ou 1 ; x² = 4 donne x = -2 ou 2. Cela donne 4 solutions réelles {-2, -1, 1, 2}.',
    steps: [
      '1. Poser X = x².',
      '2. X² - 5X + 4 = 0 <=> (X - 1)(X - 4) = 0 <=> X = 1 ou X = 4.',
      '3. x² = 1 => x = ±1.',
      '4. x² = 4 => x = ±2.',
      '5. Il y a 4 solutions réelles distinctes.'
    ]
  },
  {
    id: 'q-2s-poly-rac-14',
    exerciseId: 'ex-poly-rac-14',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi - Condition sur m pour une Racine Double',
    microConcept: 'Une équation ax² + bx + c = 0 avec paramètre admet une unique racine double si et seulement si son discriminant Δ(m) est rigoureusement nul.',
    hint: 'Pour x² - 6x + m = 0, calcule Δ = (-6)² - 4(1)(m) = 36 - 4m. Résous 36 - 4m = 0.',
    prompt: 'Pour quelle valeur du réel m l\'équation x² - 6x + m = 0 admet-elle une unique racine réelle double ? (Entrer un nombre entier)',
    correctAnswer: 9,
    commonMistake: 'Faire 36 / 2 = 18 au lieu de 36 / 4 = 9.',
    explanation: 'Δ = b² - 4ac = (-6)² - 4(1)(m) = 36 - 4m. L\'équation admet une racine double <=> Δ = 0 <=> 36 - 4m = 0 <=> 4m = 36 <=> m = 9.',
    steps: [
      '1. Condition racine double : Δ = 0.',
      '2. Δ = 36 - 4m.',
      '3. 36 - 4m = 0 <=> 4m = 36 <=> m = 9.'
    ]
  },
  {
    id: 'q-2s-poly-rac-15',
    exerciseId: 'ex-poly-rac-15',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Synthèse - Détermination de Deux Nombres Connaissant Somme et Produit',
    microConcept: 'Deux réels ont pour somme S et pour produit P si et seulement si ils sont solutions de l\'équation du second degré X² - SX + P = 0.',
    hint: 'Si deux nombres ont pour somme S = 7 et produit P = 12, résous X² - 7X + 12 = 0.',
    prompt: 'Quels sont les deux nombres réels dont la somme vaut 7 et le produit vaut 12 ?',
    options: [
      '3 et 4',
      '2 et 6',
      '1 et 6',
      '5 et 2'
    ],
    correctAnswer: '3 et 4',
    commonMistake: 'Prendre 2 et 6 dont le produit vaut 12 mais la somme vaut 8 (et non 7).',
    explanation: 'Les deux nombres sont solutions de X² - 7X + 12 = 0. Δ = 49 - 48 = 1. X₁ = (7 - 1)/2 = 3 et X₂ = (7 + 1)/2 = 4. Les nombres sont bien 3 et 4 (car 3 + 4 = 7 et 3 × 4 = 12).',
    steps: [
      '1. Équation caractéristique : X² - SX + P = 0 <=> X² - 7X + 12 = 0.',
      '2. Factorisation : (X - 3)(X - 4) = 0.',
      '3. Solutions : X = 3 ou X = 4.'
    ]
  }
];

export const POLYNOMIAL_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  'skill-2s-poly-canonique': SECONDE_POLY_CANONIQUE_QUESTIONS,
  'skill-2s-poly-racines': SECONDE_POLY_RACINES_QUESTIONS,
};
