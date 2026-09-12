import { ExerciseQuestion } from '../types';
import { HISTORY_QUESTIONS_MAP } from './axiomHistoryQuestions';
import { PHYSICS_QUESTIONS_MAP } from './axiomPhysicsQuestions';
import { POLYNOMIAL_QUESTIONS_MAP } from './axiomPolynomialQuestions';
import { PREMIERE_S_QUESTIONS } from './axiomPremiereSData';
import { PREMIERE_S_PHYSICS_QUESTIONS_MAP } from './axiomPremiereSPhysicsData';
import { SVT_QUESTIONS_MAP } from './axiomSvtQuestions';
import { PREMIERE_S_MATH_QUESTIONS_MAP } from './axiomPremiereSMathQuestions';
import { FRENCH_QUESTIONS_MAP } from './axiomFrenchQuestions';
import { PREMIERE_SVT_QUESTIONS_MAP } from './axiomPremiereSvtQuestions';
import { PREMIERE_HG_QUESTIONS_MAP } from './axiomPremiereHistoryQuestions';
import { ENGLISH_QUESTIONS_MAP } from './axiomEnglishQuestions';
import { NEW_HG_QUESTIONS_MAP } from './axiomNewHistoryGeoQuestions';
import { TERMINALE_PHYSICS_CHEMISTRY_QUESTIONS_MAP } from './axiomTerminalePhysicsChemistryQuestions';
import { TERMINALE_PHILOSOPHY_QUESTIONS_MAP } from './axiomTerminalePhilosophyQuestions';
import { COMPUTER_SCIENCE_QUESTIONS_MAP } from './axiomComputerScienceQuestions';
import { PREMIERE_AB_MATH_QUESTIONS_MAP } from './axiomPremiereABMathQuestions';

export const SECONDE_REELS_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-reels-1',
    exerciseId: 'ex-reels-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte des Ensembles',
    microConcept: 'Les ensembles fondamentaux : N (naturels : 0, 1, 2...), Z (entiers relatifs : ... -2, -1, 0, 1...), D (décimaux), Q (rationnels a/b) et R (tous les réels). On a la chaîne d\'inclusion : N ⊂ Z ⊂ D ⊂ Q ⊂ R.',
    hint: 'Pense au signe du nombre. Est-il positif ou négatif ? Comporte-t-il une virgule ?',
    prompt: 'À quel plus petit ensemble fondamental de nombres appartient le nombre -7 ?',
    options: [
      'Entiers naturels (N)',
      'Entiers relatifs (Z)',
      'Décimaux non entiers (D)',
      'Rationnels non décimaux (Q)'
    ],
    correctAnswer: 'Entiers relatifs (Z)',
    commonMistake: 'Attention : -7 a un signe négatif, il n\'appartient donc pas aux entiers naturels N (qui sont strictement positifs ou nuls : 0, 1, 2...).',
    explanation: '-7 est un nombre entier négatif, sans virgule. Le plus petit ensemble qui le contient est Z (ensemble des entiers relatifs).',
    steps: [
      '1. Le nombre -7 ne comporte aucune partie fractionnaire ou décimale.',
      '2. Comme -7 < 0, il n\'appartient pas à N (entiers naturels).',
      '3. Donc -7 appartient au plus petit ensemble Z (entiers relatifs).'
    ]
  },
  {
    id: 'q-2s-reels-2',
    exerciseId: 'ex-reels-2',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Décimaux vs Rationnels)',
    microConcept: 'Un nombre décimal D possède un nombre FINI de chiffres après la virgule (son dénominateur irréductible ne contient que des facteurs 2 et 5). Si l\'écriture décimale est infinie et périodique, c\'est un rationnel non décimal.',
    hint: 'Calcule 1 divisé par 3. La division "tombe-t-elle juste" ou le chiffre 3 se répète-t-il à l\'infini ?',
    prompt: 'Le nombre 1/3 (soit environ 0,3333...) appartient-il à l\'ensemble des nombres décimaux (D) ?',
    options: [
      'Vrai (il appartient à D car c\'est une fraction simple)',
      'Faux (il n\'appartient pas à D car son écriture est infinie)'
    ],
    correctAnswer: 'Faux (il n\'appartient pas à D car son écriture est infinie)',
    commonMistake: 'Piège classique : avoir une virgule ne suffit pas pour être un nombre décimal ! L\'écriture de 1/3 a une infinité de décimales (0,333...). Son dénominateur 3 n\'est pas une puissance de 10.',
    explanation: '1/3 = 0,333333... comporte une infinité de décimales. Il ne peut pas s\'écrire sous la forme a / 10^n. Il appartient à Q mais PAS à D.',
    steps: [
      '1. On effectue la division euclidienne : 1 / 3 = 0,3333...',
      '2. Le reste ne devient jamais nul, le nombre de décimales est infini.',
      '3. Donc 1/3 ∈ Q mais 1/3 ∉ D.'
    ]
  },
  {
    id: 'q-2s-reels-3',
    exerciseId: 'ex-reels-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Intersections & Crochets)',
    microConcept: 'L\'intersection I ∩ J correspond aux réels appartenant à la fois à I ET à J. Crochet tourné vers l\'intérieur [a = nombre inclus ; crochet tourné vers l\'extérieur ]a = nombre exclu.',
    hint: 'Trace mentalement une droite graduée. Où se superposent le segment [-3; 5[ et le segment [1; 8] ?',
    prompt: 'Soient les intervalles réels I = [-3; 5[ et J = [1; 8]. Quelle est l\'intersection I ∩ J ?',
    options: [
      '[-3; 8]',
      '[1; 5[',
      '[1; 5]',
      ']-3; 1]'
    ],
    correctAnswer: '[1; 5[',
    commonMistake: 'Attention au crochet en 5 : dans l\'intervalle I = [-3; 5[, le crochet est ouvert vers l\'extérieur, donc 5 est strictement exclu de I. Il est donc aussi exclu de l\'intersection !',
    explanation: 'Les éléments communs doivent être >= 1 (car J = [1; 8]) et strictement inférieurs à 5 (car I = [-3; 5[). L\'intersection est donc [1; 5[.',
    steps: [
      '1. Borne inférieure commune : max(-3, 1) = 1 (inclus car [1).',
      '2. Borne supérieure commune : min(5, 8) = 5 (exclu car 5[).',
      '3. Conclusion : I ∩ J = [1; 5[.'
    ]
  },
  {
    id: 'q-2s-reels-4',
    exerciseId: 'ex-reels-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Valeur Absolue & Distance)',
    microConcept: 'Pour tous réels x et a, |x - a| représente la distance entre x et a. L\'inéquation |x - a| <= r a pour ensemble de solutions l\'intervalle centré en a de rayon r : [a - r; a + r].',
    hint: 'Repère le centre c = 4 et le rayon r = 3. Calcule 4 - 3 et 4 + 3.',
    prompt: 'Résoudre dans R l\'inéquation |x - 4| <= 3. Quel est l\'intervalle de solutions pour x ?',
    options: [
      '[1; 7]',
      '[-1; 7]',
      '[3; 4]',
      ']-∞; 1] ∪ [7; +∞['
    ],
    correctAnswer: '[1; 7]',
    commonMistake: 'Erreur fréquente de signe : écrire -3 <= x - 4 <= 3, puis oublier d\'ajouter 4 aux deux extrémités.',
    explanation: '|x - 4| <= 3 équivaut à la double inégalité -3 <= x - 4 <= 3. En ajoutant 4 partout : 1 <= x <= 7, soit [1; 7].',
    steps: [
      '1. Définition : |x - 4| <= 3 <=> -3 <= x - 4 <= 3.',
      '2. On ajoute 4 à chaque membre : -3 + 4 <= x <= 3 + 4.',
      '3. On obtient 1 <= x <= 7, c\'est-à-dire l\'intervalle [1; 7].'
    ]
  },
  {
    id: 'q-2s-reels-5',
    exerciseId: 'ex-reels-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Encadrement & Carré)',
    microConcept: 'Si un intervalle contient 0 (comme [-4; 3]), le carré d\'un réel est toujours positif ou nul (x² >= 0). La borne inférieure est donc 0, et la borne supérieure est le plus grand carré entre (-4)² = 16 et 3² = 9.',
    hint: 'Un carré peut-il être négatif ? Que vaut 0² sachant que 0 est compris entre -4 et 3 ?',
    prompt: 'Si le réel x appartient à l\'intervalle [-4; 3], quel est l\'encadrement exact de x² ?',
    options: [
      '[0; 16]',
      '[9; 16]',
      '[-16; 9]',
      '[0; 9]'
    ],
    correctAnswer: '[0; 16]',
    commonMistake: 'Erreur très fréquente : élever directement les bornes au carré pour obtenir [(-4)²; 3²] = [16; 9] ou [9; 16]. Le minimum d\'un carré n\'est jamais 9 quand x peut être égal à 0 !',
    explanation: 'Comme 0 ∈ [-4; 3], le minimum de x² est atteint pour x = 0 (valeur 0). Le maximum est (-4)² = 16 (qui est supérieur à 3² = 9). Donc x² ∈ [0; 16].',
    steps: [
      '1. 0 ∈ [-4; 3], or pour tout réel x, x² >= 0. La borne minimale est donc 0.',
      '2. On compare les carrés des bornes : (-4)² = 16 et 3² = 9. Le maximum est 16.',
      '3. L\'image de l\'intervalle [-4; 3] par la fonction carré est donc [0; 16].'
    ]
  },
  {
    id: 'q-2s-reels-6',
    exerciseId: 'ex-reels-6',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Nature de la fraction 3/4)',
    microConcept: 'Une fraction irréductible a/b est un nombre décimal (D) si et seulement si son dénominateur b ne contient aucun autre facteur premier que 2 et 5. 3/4 = 0,75 possède un nombre fini de décimales.',
    hint: 'Calcule 3 divisé par 4. Le résultat s\'arrête-t-il après deux chiffres après la virgule ?',
    prompt: 'À quel plus petit ensemble fondamental appartient le nombre rationnel 3/4 = 0,75 ?',
    options: [
      'Entiers naturels (N)',
      'Entiers relatifs (Z)',
      'Nombres décimaux (D)',
      'Rationnels non décimaux (Q)'
    ],
    correctAnswer: 'Nombres décimaux (D)',
    commonMistake: 'Penser que toute fraction appartient seulement à Q : comme 3/4 = 0,75 s\'écrit avec un nombre fini de chiffres après la virgule (75/100), il appartient d\'abord à D.',
    explanation: '3/4 = 0,75 possède exactement 2 décimales. Il peut s\'écrire 75/10². Son plus petit ensemble d\'appartenance est donc D (nombres décimaux).',
    steps: [
      '1. 3 / 4 = 0,75.',
      '2. 0,75 s\'écrit 75 / 10² sous forme décimale.',
      '3. Donc 3/4 appartient à D.'
    ]
  },
  {
    id: 'q-2s-reels-7',
    exerciseId: 'ex-reels-7',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Simplification & Racine carrée)',
    microConcept: 'Attention aux faux irrationnels : √16 = 4 est un entier naturel ! Toujours simplifier une écriture avant de déterminer son ensemble d\'appartenance.',
    hint: 'Que vaut la racine carrée de 16 ?',
    prompt: 'Quel est le plus petit ensemble fondamental de nombres contenant le nombre √16 ?',
    options: [
      'Entiers naturels (N)',
      'Entiers relatifs non naturels (Z)',
      'Décimaux non entiers (D)',
      'Réels irrationnels (R \\ Q)'
    ],
    correctAnswer: 'Entiers naturels (N)',
    commonMistake: 'Voir le symbole radical √ et cocher immédiatement irrationnel (R) sans calculer √16 = 4.',
    explanation: 'Comme 4² = 16 et 4 > 0, on a √16 = 4. 4 est un entier positif, donc son plus petit ensemble est N.',
    steps: [
      '1. On calcule la racine carrée : √16 = 4.',
      '2. 4 est un nombre entier positif.',
      '3. Donc √16 ∈ N.'
    ]
  },
  {
    id: 'q-2s-reels-8',
    exerciseId: 'ex-reels-8',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Union d\'Intervalles)',
    microConcept: 'L\'union I ∪ J regroupe tous les réels qui appartiennent à I OU à J (ou aux deux). Si les deux intervalles se chevauchent ou se touchent, leur union forme un seul intervalle.',
    hint: 'Trace mentalement [-2 ; 3] et [1 ; 7]. Où commence le premier et où finit le second ?',
    prompt: 'Soient I = [-2 ; 3] et J = [1 ; 7]. Quel est l\'intervalle représentant l\'union I ∪ J ?',
    options: [
      '[-2 ; 7]',
      '[1 ; 3]',
      '[-2 ; 1]',
      '[3 ; 7]'
    ],
    correctAnswer: '[-2 ; 7]',
    commonMistake: 'Confondre l\'union (∪) qui rassemble tout avec l\'intersection (∩) qui ne garde que la zone commune [1 ; 3].',
    explanation: 'Comme les intervalles se chevauchent entre 1 et 3, l\'union s\'étend de la plus petite borne (-2) jusqu\'à la plus grande borne (7) : [-2 ; 7].',
    steps: [
      '1. Borne inférieure : min(-2, 1) = -2 (inclus).',
      '2. Borne supérieure : max(3, 7) = 7 (inclus).',
      '3. Comme 1 <= 3, les segments se recoupent : I ∪ J = [-2 ; 7].'
    ]
  },
  {
    id: 'q-2s-reels-9',
    exerciseId: 'ex-reels-9',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Distance & Valeur Absolue)',
    microConcept: 'La distance entre deux nombres a et b sur la droite graduée est donnée par |a - b| ou |b - a|. Une distance est TOUJOURS positive ou nulle.',
    hint: 'Calcule |-5 - 3| ou |3 - (-5)|.',
    prompt: 'Quelle est la distance sur la droite graduée entre le point A d\'abscisse -5 et le point B d\'abscisse 3 ? (Entrer un nombre entier positif)',
    correctAnswer: 8,
    commonMistake: 'Faire une soustraction simple (-5 - 3 = -8) et oublier qu\'une distance est strictement positive, ou faire 3 - 5 = -2.',
    explanation: 'd(A, B) = |xB - xA| = |3 - (-5)| = |3 + 5| = |8| = 8 unités.',
    steps: [
      '1. Formule de la distance : d = |xB - xA|.',
      '2. Remplacement : d = |3 - (-5)| = |3 + 5| = 8.',
      '3. La distance vaut 8.'
    ]
  },
  {
    id: 'q-2s-reels-10',
    exerciseId: 'ex-reels-10',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Résolution d\'Inéquation x² < a)',
    microConcept: 'Pour a > 0, l\'inéquation x² < a a pour ensemble de solutions l\'intervalle ouvert ]-√a ; √a[. Pour x² < 25, les solutions sont strictement comprises entre -5 et 5.',
    hint: 'Que vaut √25 ? Quels nombres ont un carré strictement inférieur à 25 ?',
    prompt: 'Quel est l\'ensemble des solutions dans R de l\'inéquation x² < 25 ?',
    options: [
      ']-5 ; 5[',
      '[0 ; 5[',
      ']-∞ ; 5[',
      ']-∞ ; -5[ ∪ ]5 ; +∞['
    ],
    correctAnswer: ']-5 ; 5[',
    commonMistake: 'Oublier les nombres négatifs (comme -3 dont le carré est 9 < 25) et ne répondre que [0 ; 5[.',
    explanation: 'x² < 25 <=> x² - 25 < 0 <=> (x - 5)(x + 5) < 0. Le tableau de signes donne les solutions strictement entre les racines : S = ]-5 ; 5[.',
    steps: [
      '1. x² < 25 <=> (x - 5)(x + 5) < 0.',
      '2. Les racines du produit sont -5 et 5.',
      '3. Le trinôme est négatif strictement à l\'intérieur des racines : S = ]-5 ; 5[.'
    ]
  },
  {
    id: 'q-2s-reels-11',
    exerciseId: 'ex-reels-11',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Intervalles Infinis & Intersection)',
    microConcept: 'L\'intersection avec les demi-droites ]-∞ ; b] et [a ; +∞[ donne le segment fermé [a ; b] si a ≤ b.',
    hint: 'Cherche les réels qui sont en même temps supérieurs ou égaux à -1 ET strictement inférieurs à 4.',
    prompt: 'Soient I = [-1 ; +∞[ et J = ]-∞ ; 4[. Quelle est l\'intersection I ∩ J ?',
    options: [
      '[-1 ; 4[',
      ']-1 ; 4]',
      '[-1 ; 4]',
      ']-∞ ; +∞['
    ],
    correctAnswer: '[-1 ; 4[',
    commonMistake: 'Inverser le sens des crochets en -1 ou en 4.',
    explanation: 'x ∈ I signifie x ≥ -1 (crochet fermé en -1). x ∈ J signifie x < 4 (crochet ouvert en 4). L\'intersection est donc [-1 ; 4[.',
    steps: [
      '1. I est l\'ensemble des x ≥ -1.',
      '2. J est l\'ensemble des x < 4.',
      '3. L\'intersection est l\'ensemble des x vérifiant -1 ≤ x < 4, soit [-1 ; 4[.'
    ]
  },
  {
    id: 'q-2s-reels-12',
    exerciseId: 'ex-reels-12',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Encadrement de l\'Inverse 1/x)',
    microConcept: 'La fonction inverse x ↦ 1/x est STRICTEMENT DÉCROISSANTE sur ]0 ; +∞[. Si 0 < a ≤ x ≤ b, alors 1/b ≤ 1/x ≤ 1/a (l\'ordre des bornes s\'inverse !).',
    hint: 'Si 2 ≤ x ≤ 5, que valent 1/2 et 1/5 ? Lequel est le plus petit ?',
    prompt: 'Sachant que le réel x vérifie 2 ≤ x ≤ 5, quel est l\'encadrement exact de 1/x ?',
    options: [
      '1/5 ≤ 1/x ≤ 1/2 (soit [0,2 ; 0,5])',
      '1/2 ≤ 1/x ≤ 1/5',
      '2 ≤ 1/x ≤ 5',
      '-5 ≤ 1/x ≤ -2'
    ],
    correctAnswer: '1/5 ≤ 1/x ≤ 1/2 (soit [0,2 ; 0,5])',
    commonMistake: 'Garder l\'ordre initial sans inverser les bornes : écrire 1/2 ≤ 1/x ≤ 1/5, ce qui est absurde car 1/2 (0,5) est plus grand que 1/5 (0,2) !',
    explanation: 'La fonction inverse renverse les inégalités entre nombres strictement positifs. Comme 2 ≤ 5, on a 1/5 ≤ 1/x ≤ 1/2.',
    steps: [
      '1. 2 ≤ x ≤ 5 avec tous les termes strictement positifs.',
      '2. La fonction inverse f(t) = 1/t est strictement décroissante sur ]0 ; +∞[.',
      '3. Donc 1/5 ≤ 1/x ≤ 1/2.'
    ]
  },
  {
    id: 'q-2s-reels-13',
    exerciseId: 'ex-reels-13',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Inéquation avec Valeur Absolue Éloignée)',
    microConcept: '|x - a| ≥ r signifie que la distance entre x et a est supérieure ou égale à r. Les solutions sont à l\'EXTÉRIEUR de l\'intervalle : ]-∞ ; a - r] ∪ [a + r ; +∞[.',
    hint: 'Calcule a - r = 2 - 3 = -1 et a + r = 2 + 3 = 5.',
    prompt: 'Résoudre dans R l\'inéquation |x - 2| ≥ 3. Quel est l\'ensemble des solutions ?',
    options: [
      ']-∞ ; -1] ∪ [5 ; +∞[',
      '[-1 ; 5]',
      ']-∞ ; 5]',
      '[-3 ; 3]'
    ],
    correctAnswer: ']-∞ ; -1] ∪ [5 ; +∞[',
    commonMistake: 'Confondre |x - a| ≤ r (intervalle central [-1 ; 5]) et |x - a| ≥ r (les deux branches extérieures).',
    explanation: '|x - 2| ≥ 3 équivaut à x - 2 ≤ -3 OU x - 2 ≥ 3, soit x ≤ -1 OU x ≥ 5. D\'où S = ]-∞ ; -1] ∪ [5 ; +∞[.',
    steps: [
      '1. Par définition : |X| ≥ 3 <=> X ≤ -3 ou X ≥ 3.',
      '2. Cas 1 : x - 2 ≤ -3 => x ≤ -1.',
      '3. Cas 2 : x - 2 ≥ 3 => x ≥ 5.',
      '4. Ensemble solution : ]-∞ ; -1] ∪ [5 ; +∞[.'
    ]
  },
  {
    id: 'q-2s-reels-14',
    exerciseId: 'ex-reels-14',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Centre d\'un Intervalle)',
    microConcept: 'Pour tout intervalle fermé [a ; b], le centre c est donné par la moyenne c = (a + b) / 2 et le rayon r par la demi-largeur r = (b - a) / 2.',
    hint: 'Fais la somme des deux bornes : -7 + 13 = 6, puis divise par 2.',
    prompt: 'Quel est le centre de l\'intervalle [-7 ; 13] ? (Entrer un nombre entier)',
    correctAnswer: 3,
    commonMistake: 'Calculer la largeur 13 - (-7) = 20 au lieu du centre, ou faire une erreur de signe (-7 + 13 = 6 et non -6).',
    explanation: 'Le centre c d\'un intervalle [a ; b] vaut (a + b) / 2. Ici c = (-7 + 13) / 2 = 6 / 2 = 3.',
    steps: [
      '1. Formule du centre : c = (a + b) / 2.',
      '2. Calcul : c = (-7 + 13) / 2 = 6 / 2 = 3.',
      '3. Vérification : distance à -7 = 3 - (-7) = 10 ; distance à 13 = 13 - 3 = 10 (rayon r = 10).'
    ]
  },
  {
    id: 'q-2s-reels-15',
    exerciseId: 'ex-reels-15',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Irrationnalité de √2)',
    microConcept: 'Un nombre irrationnel ne peut pas s\'écrire sous la forme a/b (avec a et b entiers). Son écriture décimale est infinie et non périodique. √2, π et √3 sont des irrationnels fondamentaux appartenant à R \\ Q.',
    hint: 'Peut-on trouver deux entiers a et b tels que (a/b)² = 2 ?',
    prompt: 'Parmi les affirmations suivantes concernant le nombre √2, laquelle est mathématiquement exacte ?',
    options: [
      '√2 est un nombre irrationnel : il appartient à R mais n\'appartient ni à N, ni à Z, ni à D, ni à Q',
      '√2 est un nombre décimal car on peut l\'écrire 1,414',
      '√2 est un nombre rationnel car c\'est la diagonale d\'un carré de côté 1',
      '√2 appartient à l\'ensemble des entiers relatifs Z'
    ],
    correctAnswer: '√2 est un nombre irrationnel : il appartient à R mais n\'appartient ni à N, ni à Z, ni à D, ni à Q',
    commonMistake: 'Confondre une valeur approchée (1,414) avec la valeur exacte de √2 qui possède une infinité de décimales non périodiques.',
    explanation: 'Démontré dès l\'Antiquité par Euclide, √2 ne peut pas s\'écrire comme le quotient de deux entiers. Il appartient donc à R \\ Q (ensemble des irrationnels).',
    steps: [
      '1. √2 n\'admet aucune écriture fractionnaire a/b irréductible.',
      '2. 1,414 n\'est qu\'une troncature approchée.',
      '3. √2 est irrationnel : √2 ∈ R et √2 ∉ Q.'
    ]
  }
];

export const SECONDE_VECTEURS_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-vect-1',
    exerciseId: 'ex-vect-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Relation de Chasles)',
    microConcept: 'Relation de Chasles : pour tous points A, B, C du plan, on a AB + BC = AC. L\'extrémité du premier vecteur coïncide avec l\'origine du deuxième.',
    hint: 'Regarde les lettres communes : dans MN + NP, le point N disparaît pour donner MP.',
    prompt: 'En appliquant la relation de Chasles, simplifier l\'expression vectorielle : MN + NP + PQ.',
    options: [
      'Vecteur MQ',
      'Vecteur MP',
      'Vecteur nul 0',
      'Vecteur NQ'
    ],
    correctAnswer: 'Vecteur MQ',
    commonMistake: 'Attention à bien enchaîner les points d\'arrivée et de départ : M -> N puis N -> P puis P -> Q mène directement de M à Q.',
    explanation: 'D\'après la relation de Chasles : MN + NP = MP, puis MP + PQ = MQ. Le résultat est le vecteur MQ.',
    steps: [
      '1. On regroupe les deux premiers vecteurs : MN + NP = MP.',
      '2. On applique à nouveau Chasles avec le troisième : MP + PQ = MQ.',
      '3. La somme est égale au vecteur MQ.'
    ]
  },
  {
    id: 'q-2s-vect-2',
    exerciseId: 'ex-vect-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Coordonnées d\'un vecteur)',
    microConcept: 'Dans un repère, si A(xA; yA) et B(xB; yB), le vecteur AB a pour coordonnées : (xB - xA ; yB - yA). Règle mnémotechnique : toujours "Arrivée - Départ" !',
    hint: 'Calcule xB - xA = -1 - 2 et yB - yA = 5 - (-3). Attention au double signe moins !',
    prompt: 'On donne les points A(2; -3) et B(-1; 5). Quelles sont les coordonnées du vecteur AB ?',
    options: [
      '(-3; 8)',
      '(3; -8)',
      '(1; 2)',
      '(-3; 2)'
    ],
    correctAnswer: '(-3; 8)',
    commonMistake: 'Piège de signe sur l\'ordonnée : yB - yA = 5 - (-3) = 5 + 3 = 8 (et non 5 - 3 = 2).',
    explanation: 'x = xB - xA = -1 - 2 = -3. y = yB - yA = 5 - (-3) = 5 + 3 = 8. Donc AB(-3; 8).',
    steps: [
      '1. Abscisse : x = xB - xA = -1 - 2 = -3.',
      '2. Ordonnée : y = yB - yA = 5 - (-3) = 5 + 3 = 8.',
      '3. Conclusion : AB(-3; 8).'
    ]
  },
  {
    id: 'q-2s-vect-3',
    exerciseId: 'ex-vect-3',
    type: 'true_false',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Test de Colinéarité & Déterminant)',
    microConcept: 'Deux vecteurs u(x; y) et v(x\'; y\') sont colinéaires si et seulement si leur déterminant est nul : det(u, v) = x·y\' - y·x\' = 0.',
    hint: 'Calcule le produit en croix : 4 × 9 - (-6) × (-6). Que vaut le résultat ?',
    prompt: 'Les vecteurs u(4; -6) et v(-6; 9) sont-ils colinéaires ?',
    options: [
      'Vrai (ils sont colinéaires car leur déterminant vaut 0)',
      'Faux (ils ne sont pas colinéaires)'
    ],
    correctAnswer: 'Vrai (ils sont colinéaires car leur déterminant vaut 0)',
    commonMistake: 'Attention aux signes lors du produit : (-6) × (-6) = +36, donc 4 × 9 - 36 = 36 - 36 = 0.',
    explanation: 'det(u, v) = 4 × 9 - (-6) × (-6) = 36 - 36 = 0. Le déterminant étant nul, les vecteurs sont bien colinéaires (on remarque aussi que v = -1,5 u).',
    steps: [
      '1. Formule du déterminant : det(u, v) = x·y\' - y·x\'.',
      '2. Calcul : 4 × 9 - (-6) × (-6) = 36 - 36 = 0.',
      '3. Comme det = 0, les vecteurs sont colinéaires.'
    ]
  },
  {
    id: 'q-2s-vect-4',
    exerciseId: 'ex-vect-4',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Recherche d\'inconnue par colinéarité)',
    microConcept: 'Pour déterminer un paramètre inconnu m rendant deux vecteurs colinéaires, on écrit l\'équation det(u, v) = 0 et on isole l\'inconnue m.',
    hint: 'Pose 3 × (-8) - m × 6 = 0, ce qui donne -24 - 6m = 0. Résous pour m.',
    prompt: 'Pour quelle valeur du réel m les vecteurs u(3; m) et v(6; -8) sont-ils colinéaires ? (Entrer un nombre relatif)',
    correctAnswer: -4,
    commonMistake: 'Erreur fréquente : oublier le signe moins lors de la division (-24 / 6 = -4 et non +4).',
    explanation: 'det(u, v) = 3 × (-8) - m × 6 = 0 <=> -24 - 6m = 0 <=> 6m = -24 <=> m = -4.',
    steps: [
      '1. On pose det(u, v) = 0 <=> 3 × (-8) - 6m = 0.',
      '2. -24 - 6m = 0 <=> -6m = 24.',
      '3. m = 24 / (-6) = -4.'
    ]
  },
  {
    id: 'q-2s-vect-5',
    exerciseId: 'ex-vect-5',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Alignement de 3 points)',
    microConcept: 'Trois points A, B et C sont alignés si et seulement si les vecteurs AB et AC sont colinéaires (c\'est-à-dire det(AB, AC) = 0).',
    hint: 'Calcule AB(4 - 1; 8 - 2) = AB(3; 6). Puis AC(x - 1; 14 - 2) = AC(x - 1; 12). Applique le déterminant !',
    prompt: 'On donne les points A(1; 2), B(4; 8) et C(x; 14). Quelle doit être la valeur de l\'abscisse x pour que A, B et C soient alignés ?',
    correctAnswer: 7,
    commonMistake: 'Oublier de soustraire les coordonnées du point A pour obtenir le vecteur AC : x_AC = x - 1 et non simplement x.',
    explanation: 'AB(3; 6) et AC(x - 1; 12). det(AB, AC) = 3 × 12 - 6(x - 1) = 0 <=> 36 - 6x + 6 = 0 <=> 42 = 6x <=> x = 7.',
    steps: [
      '1. Vecteur AB : (4 - 1 ; 8 - 2) = (3 ; 6).',
      '2. Vecteur AC : (x - 1 ; 14 - 2) = (x - 1 ; 12).',
      '3. Colinéarité : 3 × 12 - 6(x - 1) = 0 <=> 36 - 6x + 6 = 0 <=> 42 = 6x <=> x = 7.'
    ]
  },
  {
    id: 'q-2s-vect-6',
    exerciseId: 'ex-vect-6',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Vecteur Opposé)',
    microConcept: 'Le vecteur opposé de AB est le vecteur BA = -AB. Pour tout point A et B, AB + BA = AA = vecteur nul 0.',
    hint: 'Si tu fais l\'aller-retour entre deux points, où te retrouves-tu ?',
    prompt: 'Quelle est la valeur de la somme vectorielle AB + BA ?',
    options: [
      'Le vecteur nul 0',
      'Le double vecteur 2AB',
      'Le vecteur AB',
      'Le scalaire 0'
    ],
    correctAnswer: 'Le vecteur nul 0',
    commonMistake: 'Répondre le nombre 0 au lieu du vecteur nul 0 (avec une flèche), ou répondre 2AB.',
    explanation: 'D\'après la relation de Chasles, AB + BA = AA = 0 (vecteur nul). BA est l\'opposé de AB.',
    steps: [
      '1. On applique la relation de Chasles : AB + BA = AA.',
      '2. Le vecteur reliant un point à lui-même est le vecteur nul 0.',
      '3. Donc AB + BA = 0.'
    ]
  },
  {
    id: 'q-2s-vect-7',
    exerciseId: 'ex-vect-7',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Milieu d\'un Segment)',
    microConcept: 'Le milieu I d\'un segment [AB] a pour coordonnées la demi-somme des coordonnées des extrémités : xI = (xA + xB) / 2 et yI = (yA + yB) / 2.',
    hint: 'Fais la moyenne des abscisses : (2 + 6)/2, et la moyenne des ordonnées : (4 + (-2))/2.',
    prompt: 'On donne les points A(2 ; 4) et B(6 ; -2). Quelles sont les coordonnées du milieu I du segment [AB] ?',
    options: [
      'I(4 ; 1)',
      'I(4 ; 3)',
      'I(8 ; 2)',
      'I(2 ; -3)'
    ],
    correctAnswer: 'I(4 ; 1)',
    commonMistake: 'Faire une soustraction au lieu d\'une addition pour le milieu, ou oublier de diviser par 2.',
    explanation: 'xI = (2 + 6) / 2 = 8 / 2 = 4. yI = (4 + (-2)) / 2 = 2 / 2 = 1. Le milieu est I(4 ; 1).',
    steps: [
      '1. Abscisse du milieu : (xA + xB) / 2 = (2 + 6) / 2 = 4.',
      '2. Ordonnée du milieu : (yA + yB) / 2 = (4 - 2) / 2 = 1.',
      '3. Coordonnées de I : (4 ; 1).'
    ]
  },
  {
    id: 'q-2s-vect-8',
    exerciseId: 'ex-vect-8',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Norme d\'un Vecteur)',
    microConcept: 'Dans un repère orthonormé, la norme du vecteur u(x ; y) est donnée par ||u|| = √(x² + y²).',
    hint: 'Calcule 3² + (-4)² = 9 + 16 = 25, puis prends la racine carrée.',
    prompt: 'Quelle est la norme du vecteur u(3 ; -4) dans un repère orthonormé ? (Entrer un nombre entier)',
    correctAnswer: 5,
    commonMistake: 'Oublier que (-4)² = +16 et calculer 9 - 16 = -7 sous la racine.',
    explanation: '||u|| = √(3² + (-4)²) = √(9 + 16) = √25 = 5.',
    steps: [
      '1. Formule de la norme : ||u|| = √(x² + y²).',
      '2. Calcul des carrés : 3² = 9 et (-4)² = 16.',
      '3. Somme : 9 + 16 = 25, d\'où ||u|| = √25 = 5.'
    ]
  },
  {
    id: 'q-2s-vect-9',
    exerciseId: 'ex-vect-9',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Combinaison Linéaire 2u - 3v)',
    microConcept: 'Si u(x ; y) et v(x\' ; y\'), alors 2u - 3v a pour coordonnées (2x - 3x\' ; 2y - 3y\').',
    hint: 'Calcule 2 × (1) - 3 × (-2) pour x, et 2 × (3) - 3 × (1) pour y.',
    prompt: 'On donne les vecteurs u(1 ; 3) et v(-2 ; 1). Quelles sont les coordonnées du vecteur w = 2u - 3v ?',
    options: [
      'w(8 ; 3)',
      'w(-4 ; 3)',
      'w(8 ; 9)',
      'w(-5 ; 3)'
    ],
    correctAnswer: 'w(8 ; 3)',
    commonMistake: 'Erreur sur le signe moins : 2(1) - 3(-2) = 2 + 6 = 8 (et non 2 - 6 = -4).',
    explanation: 'xw = 2(1) - 3(-2) = 2 + 6 = 8. yw = 2(3) - 3(1) = 6 - 3 = 3. D\'où w(8 ; 3).',
    steps: [
      '1. xw = 2 × 1 - 3 × (-2) = 2 + 6 = 8.',
      '2. yw = 2 × 3 - 3 × 1 = 6 - 3 = 3.',
      '3. Donc w(8 ; 3).'
    ]
  },
  {
    id: 'q-2s-vect-10',
    exerciseId: 'ex-vect-10',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Caractérisation du Parallélogramme)',
    microConcept: 'Le quadrilatère ABCD est un parallélogramme si et seulement si AB = DC (attention à l\'ordre des lettres : DC et non CD !).',
    hint: 'Dessine mentalement ABCD dans l\'ordre cyclique. Quel vecteur est égal à AB ?',
    prompt: 'Quelle égalité vectorielle caractérise le fait que le quadrilatère ABCD soit un parallélogramme ?',
    options: [
      'Vecteur AB = Vecteur DC',
      'Vecteur AB = Vecteur CD',
      'Vecteur AC = Vecteur BD',
      'Vecteur AD = Vecteur BC'
    ],
    correctAnswer: 'Vecteur AB = Vecteur DC',
    commonMistake: 'L\'erreur la plus classique en Seconde : écrire AB = CD ! Si AB = CD, alors ABDC est le parallélogramme et ABCD est croisé !',
    explanation: 'En tournant autour du quadrilatère ABCD, les côtés opposés parallèles et de même sens sont [AB] et [DC]. Donc AB = DC.',
    steps: [
      '1. On trace les sommets consécutifs A, B, C, D.',
      '2. Le vecteur qui va de A vers B a même direction, sens et norme que celui qui va de D vers C.',
      '3. Donc ABCD est un parallélogramme <=> AB = DC.'
    ]
  },
  {
    id: 'q-2s-vect-11',
    exerciseId: 'ex-vect-11',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (4e Sommet d\'un Parallélogramme)',
    microConcept: 'Pour trouver les coordonnées de D(xD ; yD) tel que ABCD soit un parallélogramme, on résout l\'égalité AB = DC : xB - xA = xC - xD => xD = xC - (xB - xA).',
    hint: 'Calcule le vecteur AB(3 - 1 ; 5 - 2) = (2 ; 3). Puis pose xC - xD = 2 et yC - yD = 3 avec C(7 ; 8).',
    prompt: 'On donne A(1 ; 2), B(3 ; 5) et C(7 ; 8). Quelle est l\'abscisse xD du point D pour que ABCD soit un parallélogramme ? (Entrer un entier)',
    correctAnswer: 5,
    commonMistake: 'Inverser le vecteur DC en CD et trouver xD = 9 au lieu de 5.',
    explanation: 'AB(2 ; 3). Pour que ABCD soit un parallélogramme, DC = AB, donc (7 - xD ; 8 - yD) = (2 ; 3). 7 - xD = 2 <=> xD = 5.',
    steps: [
      '1. Vecteur AB : (3 - 1 ; 5 - 2) = (2 ; 3).',
      '2. Vecteur DC : (7 - xD ; 8 - yD).',
      '3. Égalité : 7 - xD = 2 <=> xD = 7 - 2 = 5.'
    ]
  },
  {
    id: 'q-2s-vect-12',
    exerciseId: 'ex-vect-12',
    type: 'true_false',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Vecteurs Directeurs de Droites Parallèles)',
    microConcept: 'Deux droites (D1) et (D2) de vecteurs directeurs respectifs u et v sont parallèles si et seulement si u et v sont colinéaires (det(u, v) = 0).',
    hint: 'Calcule le déterminant de u(2 ; -5) et v(-4 ; 10).',
    prompt: 'Une droite (D1) a pour vecteur directeur u(2 ; -5) et une droite (D2) a pour vecteur directeur v(-4 ; 10). Ces deux droites sont-elles parallèles ?',
    options: [
      'Vrai (les droites sont parallèles car v = -2u)',
      'Faux (les droites sont sécantes)'
    ],
    correctAnswer: 'Vrai (les droites sont parallèles car v = -2u)',
    commonMistake: 'Penser que le coefficient négatif (-2) empêche les droites d\'être parallèles (or les directions sont identiques, seul le sens du vecteur est opposé).',
    explanation: 'det(u, v) = 2 × 10 - (-5) × (-4) = 20 - 20 = 0. Les vecteurs directeurs sont colinéaires (v = -2u), donc les droites sont strictement parallèles ou confondues.',
    steps: [
      '1. det(u, v) = 2(10) - (-5)(-4) = 20 - 20 = 0.',
      '2. Les vecteurs directeurs sont colinéaires.',
      '3. Donc les droites ont la même direction : elles sont parallèles.'
    ]
  },
  {
    id: 'q-2s-vect-13',
    exerciseId: 'ex-vect-13',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Centre de Gravité d\'un Triangle)',
    microConcept: 'Le centre de gravité G d\'un triangle ABC vérifie la relation vectorielle fondamentale GA + GB + GC = 0. Ses coordonnées sont les moyennes arithmétiques des trois sommets : xG = (xA + xB + xC) / 3.',
    hint: 'Additionne les trois abscisses et divise par 3 : (1 + 4 + 7) / 3.',
    prompt: 'Dans un triangle ABC avec A(1 ; 3), B(4 ; 0) et C(7 ; 6), quelles sont les coordonnées du centre de gravité G ?',
    options: [
      'G(4 ; 3)',
      'G(6 ; 4,5)',
      'G(12 ; 9)',
      'G(3 ; 4)'
    ],
    correctAnswer: 'G(4 ; 3)',
    commonMistake: 'Diviser par 2 au lieu de 3 (confondre avec le milieu de 2 points).',
    explanation: 'xG = (1 + 4 + 7) / 3 = 12 / 3 = 4. yG = (3 + 0 + 6) / 3 = 9 / 3 = 3. Donc G(4 ; 3).',
    steps: [
      '1. xG = (xA + xB + xC) / 3 = (1 + 4 + 7) / 3 = 4.',
      '2. yG = (yA + yB + yC) / 3 = (3 + 0 + 6) / 3 = 3.',
      '3. Coordonnées : G(4 ; 3).'
    ]
  },
  {
    id: 'q-2s-vect-14',
    exerciseId: 'ex-vect-14',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Distance AB dans un Repère)',
    microConcept: 'La distance entre deux points A et B est la norme du vecteur AB : AB = √((xB - xA)² + (yB - yA)²).',
    hint: 'Calcule (xB - xA) = 7 - 1 = 6, et (yB - yA) = 11 - 3 = 8. Puis calcule √(6² + 8²).',
    prompt: 'Quelle est la distance exacte entre les points A(1 ; 3) et B(7 ; 11) ? (Entrer un nombre entier)',
    correctAnswer: 10,
    commonMistake: 'Oublier d\'élever au carré avant d\'additionner : faire 6 + 8 = 14 au lieu de √(36 + 64) = √100 = 10.',
    explanation: 'AB² = (7 - 1)² + (11 - 3)² = 6² + 8² = 36 + 64 = 100. Donc AB = √100 = 10.',
    steps: [
      '1. xB - xA = 7 - 1 = 6.',
      '2. yB - yA = 11 - 3 = 8.',
      '3. AB = √(6² + 8²) = √(36 + 64) = √100 = 10.'
    ]
  },
  {
    id: 'q-2s-vect-15',
    exerciseId: 'ex-vect-15',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Décomposition Vectorielle)',
    microConcept: 'Pour exprimer un vecteur AM en fonction de AB et AC, on insère un point intermédiaire avec Chasles : AM = AB + BM. Si M est le milieu de [BC], AM = 1/2 AB + 1/2 AC.',
    hint: 'Utilise Chasles et le fait que BM = 1/2 BC = 1/2 (BA + AC).',
    prompt: 'Soit M le milieu du segment [BC] d\'un triangle ABC. Comment s\'exprime le vecteur AM en fonction des vecteurs AB et AC ?',
    options: [
      'AM = 1/2 AB + 1/2 AC',
      'AM = AB + AC',
      'AM = AB - AC',
      'AM = 2 AB + 2 AC'
    ],
    correctAnswer: 'AM = 1/2 AB + 1/2 AC',
    commonMistake: 'Oublier le facteur 1/2 et répondre AM = AB + AC (qui donnerait le 4e sommet du parallélogramme et non le milieu).',
    explanation: 'AM = AB + BM = AB + 1/2 BC = AB + 1/2 (BA + AC) = AB - 1/2 AB + 1/2 AC = 1/2 AB + 1/2 AC.',
    steps: [
      '1. AM = AB + BM avec BM = 1/2 BC.',
      '2. Or BC = BA + AC = -AB + AC.',
      '3. AM = AB + 1/2 (-AB + AC) = 1/2 AB + 1/2 AC.'
    ]
  }
];

export const SECONDE_ANGLES_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-ang-1',
    exerciseId: 'ex-ang-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Sens trigonométrique & Cercle)',
    microConcept: 'Le cercle trigonométrique est de rayon 1, centré à l\'origine. Par convention internationale, le sens positif (sens direct) est le sens inverse des aiguilles d\'une montre (anti-horaire). Son périmètre vaut 2π.',
    hint: 'Pense à une montre : le sens trigonométrique tourne à l\'envers des aiguilles d\'une horloge.',
    prompt: 'Sur le cercle trigonométrique, dans quel sens se déplace-t-on pour parcourir des angles positifs ?',
    options: [
      'Sens inverse des aiguilles d\'une montre (anti-horaire)',
      'Sens des aiguilles d\'une montre (horaire)',
      'Dans les deux sens indifféremment',
      'Toujours de haut en bas'
    ],
    correctAnswer: 'Sens inverse des aiguilles d\'une montre (anti-horaire)',
    commonMistake: 'Piège : ne pas confondre le sens horaire d\'une montre avec le sens trigonométrique direct qui tourne dans le sens rétrograde.',
    explanation: 'Le sens direct (ou trigonométrique) est par convention le sens anti-horaire. En partant du point (1; 0), on monte vers (0; 1).',
    steps: [
      '1. Convention fondamentale : les angles croissent dans le sens anti-horaire.',
      '2. Un angle de +π/2 amène au point sommet (0; 1).',
      '3. C\'est donc bien le sens inverse des aiguilles d\'une montre.'
    ]
  },
  {
    id: 'q-2s-ang-2',
    exerciseId: 'ex-ang-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Conversion Degrés ↔ Radians)',
    microConcept: 'La relation fondamentale est : 180° = π radians. Pour convertir un angle de D degrés en radians : R = D × (π / 180).',
    hint: 'Calcule 60 / 180 et simplifie par 60.',
    prompt: 'Quelle est la mesure exacte en radians d\'un angle de 60 degrés ?',
    options: [
      'π / 3 rad',
      'π / 6 rad',
      'π / 4 rad',
      '2π / 3 rad'
    ],
    correctAnswer: 'π / 3 rad',
    commonMistake: 'L\'erreur classique est d\'inverser π/3 et π/6. Retiens : 180 / 3 = 60° et 180 / 6 = 30° !',
    explanation: '60° × (π / 180) = (60/180) π = (1/3) π = π / 3 rad.',
    steps: [
      '1. Formule de conversion : R = 60 × π / 180.',
      '2. Simplification : 60 / 180 = 1 / 3.',
      '3. Donc 60° = π / 3 radians.'
    ]
  },
  {
    id: 'q-2s-ang-3',
    exerciseId: 'ex-ang-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Points images & Tours complets 2kπ)',
    microConcept: 'Deux réels repèrent le même point sur le cercle trigonométrique s\'ils diffèrent d\'un nombre entier de tours complets, c\'est-à-dire d\'un multiple de 2π (2kπ avec k ∈ Z).',
    hint: 'Ajoute un tour complet (+2π = +8π/4) au réel π/4.',
    prompt: 'Parmi les réels suivants, lequel repère EXACTEMENT le même point que π/4 sur le cercle trigonométrique ?',
    options: [
      '9π / 4',
      '5π / 4',
      '3π / 4',
      '7π / 4'
    ],
    correctAnswer: '9π / 4',
    commonMistake: 'Attention : 5π/4 = π/4 + π est le point diamétralement opposé ! Pour revenir au même point, il faut faire un tour complet (+2π = +8π/4).',
    explanation: 'π/4 + 2π = π/4 + 8π/4 = 9π/4. Comme ils diffèrent d\'un tour complet (2π), ils ont le même point image.',
    steps: [
      '1. Un tour complet correspond à 2π = 8π/4.',
      '2. π/4 + 8π/4 = 9π/4.',
      '3. 9π/4 et π/4 ont exactement le même point image sur le cercle.'
    ]
  },
  {
    id: 'q-2s-ang-4',
    exerciseId: 'ex-ang-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Mesure Principale dans ]-π; π])',
    microConcept: 'La mesure principale d\'un angle orienté est l\'unique réel θ appartenant à l\'intervalle semi-ouvert ]-π; π] tel que l\'angle soit égal à θ + 2kπ.',
    hint: '19π/6 = 3,16π. Retranche des tours complets (2π = 12π/6) pour entrer dans ]-π; π].',
    prompt: 'Quelle est la mesure principale de l\'angle 19π / 6 ?',
    options: [
      '-5π / 6',
      '7π / 6',
      'π / 6',
      '-π / 6'
    ],
    correctAnswer: '-5π / 6',
    commonMistake: 'Piège : 7π/6 est supérieur à π (car 7/6 > 1), il n\'appartient donc pas à ]-π; π]. Il faut encore retrancher 2π : 7π/6 - 12π/6 = -5π/6.',
    explanation: '19π/6 = 12π/6 + 7π/6 = 2π + 7π/6. Retranchons 2π à 7π/6 : 7π/6 - 12π/6 = -5π/6. Comme -5π/6 ∈ ]-π; π], c\'est la mesure principale.',
    steps: [
      '1. 19π/6 - 2π = 19π/6 - 12π/6 = 7π/6 (encore trop grand car > π).',
      '2. 7π/6 - 2π = 7π/6 - 12π/6 = -5π/6.',
      '3. On vérifie : -π < -5π/6 <= π. La mesure principale est donc -5π/6.'
    ]
  },
  {
    id: 'q-2s-ang-5',
    exerciseId: 'ex-ang-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Enroulement négatif & Grands angles)',
    microConcept: 'Pour un angle négatif comme -25π/4, on cherche l\'entier k tel que -π < -25π/4 + 2kπ <= π.',
    hint: '-25 / 4 = -6,25. Le multiple pair supérieur le plus proche est +6π = +24π/4 ou +8π = +32π/4. Calcule -25π/4 + 24π/4.',
    prompt: 'Quelle est la mesure principale de l\'angle orienté -25π / 4 ?',
    options: [
      '-π / 4',
      'π / 4',
      '3π / 4',
      '-3π / 4'
    ],
    correctAnswer: '-π / 4',
    commonMistake: 'Attention au calcul avec les fractions négatives : -25π/4 + 24π/4 = -π/4 (et non +π/4).',
    explanation: '-25π/4 + 6π = -25π/4 + 24π/4 = -π/4. Or -π < -π/4 <= π, donc -π/4 est la mesure principale.',
    steps: [
      '1. On ajoute 6π (soit 3 tours complets, 24π/4) : -25π/4 + 24π/4 = -π/4.',
      '2. On contrôle l\'intervalle : -1 < -1/4 <= 1, donc -π/4 ∈ ]-π; π].',
      '3. La mesure principale est -π/4.'
    ]
  },
  {
    id: 'q-2s-ang-6',
    exerciseId: 'ex-ang-6',
    type: 'numeric',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Conversion Degrés vers Radians)',
    microConcept: 'La relation de conversion entre degrés et radians est : 180° = π radians. Ainsi, 90° = π/2 rad, 60° = π/3 rad, 45° = π/4 rad, et 30° = π/6 rad.',
    hint: 'Si 180° correspond à π, à quelle fraction correspond 45° (180 / 4) ?',
    prompt: 'Quel dénominateur entier n correspond à la conversion de 45° sous la forme π / n radians ? (Entrer l\'entier n)',
    correctAnswer: 4,
    commonMistake: 'Confondre avec 60° (π/3) ou 30° (π/6). 180 / 45 = 4.',
    explanation: '45° = 45 × π / 180 = π / 4 radians. Le dénominateur n vaut donc 4.',
    steps: [
      '1. Formule : angle en rad = angle en deg × (π / 180).',
      '2. 45 × π / 180 = π / 4.',
      '3. Le dénominateur est n = 4.'
    ]
  },
  {
    id: 'q-2s-ang-7',
    exerciseId: 'ex-ang-7',
    type: 'numeric',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Longueur d\'Arc de Cercle)',
    microConcept: 'Sur un cercle de rayon R, la longueur d\'un arc intercepté par un angle au centre de θ radians est donnée par la formule fondamentale L = R × θ.',
    hint: 'Calcule R × θ avec R = 5 et θ = 2.',
    prompt: 'Sur un cercle de rayon R = 5 cm, quelle est la longueur en cm d\'un arc intercepté par un angle au centre de 2 radians ? (Entrer un entier)',
    correctAnswer: 10,
    commonMistake: 'Multiplier par 180 ou diviser par π au lieu d\'appliquer directement L = R × θ (qui fonctionne directement avec les radians !).',
    explanation: 'La formule de la longueur d\'arc est L = R · θ lorsque θ est en radians. Ici L = 5 × 2 = 10 cm.',
    steps: [
      '1. Formule : L = R × θ (avec θ en radians).',
      '2. Remplacer les valeurs : L = 5 × 2 = 10.',
      '3. La longueur de l\'arc est 10 cm.'
    ]
  },
  {
    id: 'q-2s-ang-8',
    exerciseId: 'ex-ang-8',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Angle Plat & Tour Complet)',
    microConcept: 'Un angle de π radians correspond à un angle plat (180° ou un demi-tour). Un tour complet équivaut à 2π radians (360°).',
    hint: 'Combien de degrés vaut un demi-tour ?',
    prompt: 'À quel type d\'angle géométrique correspond un angle orienté de mesure π radians ?',
    options: [
      'Un angle plat (demi-tour, 180°)',
      'Un angle droit (90°)',
      'Un angle plein (tour complet, 360°)',
      'Un angle nul (0°)'
    ],
    correctAnswer: 'Un angle plat (demi-tour, 180°)',
    commonMistake: 'Confondre avec le tour complet 2π.',
    explanation: 'Le périmètre complet du cercle de rayon 1 est 2π. Un demi-tour correspond donc à une distance parcourue de π, soit 180° (angle plat).',
    steps: [
      '1. Cercle unité : circonférence = 2π.',
      '2. Demi-cercle = 2π / 2 = π.',
      '3. En degrés, un demi-tour vaut 180° (angle plat).'
    ]
  },
  {
    id: 'q-2s-ang-9',
    exerciseId: 'ex-ang-9',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Angles Opposés)',
    microConcept: 'Deux angles orientés opposés θ et -θ ont des points images symétriques par rapport à l\'axe horizontal des abscisses (axe des cosinus).',
    hint: 'Quand on change le sens de rotation (sens horaire vs anti-horaire), quelle symétrie observe-t-on sur le cercle ?',
    prompt: 'Sur le cercle trigonométrique, comment sont positionnés les points images des réels x et -x ?',
    options: [
      'Symétriques par rapport à l\'axe des abscisses (axe horizontal)',
      'Symétriques par rapport à l\'axe des ordonnées (axe vertical)',
      'Symétriques par rapport à l\'origine du repère O',
      'Confondus au même endroit'
    ],
    correctAnswer: 'Symétriques par rapport à l\'axe des abscisses (axe horizontal)',
    commonMistake: 'Confondre avec la symétrie centrale par rapport à l\'origine O (qui correspond à x et x + π).',
    explanation: 'Les points associés à x et -x ont la même abscisse cos(x) = cos(-x) et des ordonnées opposées sin(-x) = -sin(x). Ils sont donc symétriques par rapport à l\'axe horizontal.',
    steps: [
      '1. Coordonnées de M(x) : (cos x ; sin x).',
      '2. Coordonnées de M\'(-x) : (cos x ; -sin x).',
      '3. Même abscisse, ordonnées opposées : symétrie axiale par rapport à l\'axe des abscisses.'
    ]
  },
  {
    id: 'q-2s-ang-10',
    exerciseId: 'ex-ang-10',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Relation de Chasles pour les Angles)',
    microConcept: 'Pour trois vecteurs non nuls u, v et w, la relation de Chasles s\'écrit : (u, v) + (v, w) = (u, w) [mod 2π].',
    hint: 'Additionne π/4 et π/3 en réduisant au même dénominateur 12.',
    prompt: 'Soient u, v et w trois vecteurs tels que (u, v) = π/4 et (v, w) = π/3. Quelle est la mesure de l\'angle (u, w) ?',
    options: [
      '7π / 12',
      '2π / 7',
      '5π / 12',
      'π / 12'
    ],
    correctAnswer: '7π / 12',
    commonMistake: 'Additionner les dénominateurs (4 + 3 = 7) pour trouver 2π/7 au lieu de réduire au même dénominateur 12 : 3π/12 + 4π/12 = 7π/12.',
    explanation: 'D\'après la relation de Chasles : (u, w) = (u, v) + (v, w) = π/4 + π/3 = 3π/12 + 4π/12 = 7π/12.',
    steps: [
      '1. Chasles : (u, w) = (u, v) + (v, w).',
      '2. Dénominateur commun : π/4 = 3π/12 et π/3 = 4π/12.',
      '3. Somme : 3π/12 + 4π/12 = 7π/12.'
    ]
  },
  {
    id: 'q-2s-ang-11',
    exerciseId: 'ex-ang-11',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Quadrant du Point Image)',
    microConcept: 'Le cercle trigonométrique est divisé en 4 quadrants : Q1 [0; π/2], Q2 [π/2; π], Q3 [-π; -π/2] ou [π; 3π/2], et Q4 [-π/2; 0] ou [3π/2; 2π].',
    hint: '3π/4 = 0,75π. Est-il compris entre 0,5π (π/2) et 1π (π) ?',
    prompt: 'Dans quel quadrant du cercle trigonométrique se situe le point image du réel 3π / 4 ?',
    options: [
      'Deuxième quadrant (en haut à gauche : x < 0, y > 0)',
      'Premier quadrant (en haut à droite : x > 0, y > 0)',
      'Troisième quadrant (en bas à gauche : x < 0, y < 0)',
      'Quatrième quadrant (en bas à droite : x > 0, y < 0)'
    ],
    correctAnswer: 'Deuxième quadrant (en haut à gauche : x < 0, y > 0)',
    commonMistake: 'Confondre avec le troisième quadrant. Comme π/2 < 3π/4 < π, le point est dans la partie supérieure gauche.',
    explanation: 'Comme 0,5π < 0,75π < π (soit π/2 < 3π/4 < π), le point image se trouve dans le deuxième quadrant (abscisse négative, ordonnée positive).',
    steps: [
      '1. π/2 = 2π/4 et π = 4π/4.',
      '2. On a 2π/4 < 3π/4 < 4π/4, donc l\'angle est entre π/2 et π.',
      '3. Cela correspond au 2e quadrant (en haut à gauche).'
    ]
  },
  {
    id: 'q-2s-ang-12',
    exerciseId: 'ex-ang-12',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Mesure Principale de 13π/3)',
    microConcept: 'Pour trouver la mesure principale de 13π/3, on divise 13 par 3 = 4,33. Le multiple pair de π le plus proche est 4π = 12π/3. 13π/3 - 12π/3 = π/3 ∈ ]-π; π].',
    hint: 'Retranche 2 tours complets, c\'est-à-dire 4π = 12π/3.',
    prompt: 'Quelle est la mesure principale de l\'angle orienté 13π / 3 ?',
    options: [
      'π / 3',
      '-2π / 3',
      '4π / 3',
      '-π / 3'
    ],
    correctAnswer: 'π / 3',
    commonMistake: 'S\'arrêter à 7π/3 (en ne retirant qu\'un seul tour 2π = 6π/3) qui reste supérieur à π.',
    explanation: '13π/3 = 12π/3 + π/3 = 4π + π/3 = 2 × (2π) + π/3. Comme π/3 ∈ ]-π; π], la mesure principale est π/3.',
    steps: [
      '1. 13π/3 - 2π = 13π/3 - 6π/3 = 7π/3 (> π).',
      '2. 7π/3 - 2π = 7π/3 - 6π/3 = π/3.',
      '3. -π < π/3 <= π, donc π/3 est la mesure principale.'
    ]
  },
  {
    id: 'q-2s-ang-13',
    exerciseId: 'ex-ang-13',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Nombre de Tours Complets)',
    microConcept: 'Un tour complet équivaut à 2π radians. Pour savoir combien de tours entiers sont contenus dans un angle 14π, on calcule 14π / 2π = 7 tours.',
    hint: 'Combien de fois 2π y a-t-il dans 18π ?',
    prompt: 'Combien de tours complets (dans le sens direct) représente un angle de 18π radians ? (Entrer un nombre entier)',
    correctAnswer: 9,
    commonMistake: 'Diviser par π au lieu de 2π et trouver 18 au lieu de 9.',
    explanation: 'Chaque tour correspond à 2π radians. Le nombre de tours est 18π / (2π) = 9 tours complets.',
    steps: [
      '1. 1 tour = 2π radians.',
      '2. 18π / 2π = 9.',
      '3. L\'angle correspond exactement à 9 tours complets.'
    ]
  },
  {
    id: 'q-2s-ang-14',
    exerciseId: 'ex-ang-14',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Mesure Principale de -17π/6)',
    microConcept: 'Pour -17π/6, -17/6 ≈ -2,83. On ajoute 4π = 24π/6 pour obtenir -17π/6 + 24π/6 = 7π/6, puis 7π/6 - 12π/6 = -5π/6 ∈ ]-π; π]. Ou directement -17π/6 + 2π = -5π/6.',
    hint: 'Ajoute 2π = 12π/6 à -17π/6 : -17π/6 + 12π/6 = -5π/6. Vérifie si -5π/6 est dans ]-π ; π].',
    prompt: 'Quelle est la mesure principale de l\'angle orienté -17π / 6 ?',
    options: [
      '-5π / 6',
      '7π / 6',
      '-π / 6',
      '5π / 6'
    ],
    correctAnswer: '-5π / 6',
    commonMistake: 'Répondre 7π/6 (qui est supérieur à π) au lieu de -5π/6.',
    explanation: '-17π/6 + 2π = -17π/6 + 12π/6 = -5π/6. Comme -1 < -5/6 <= 1, -5π/6 ∈ ]-π; π], c\'est bien la mesure principale.',
    steps: [
      '1. On ajoute 2π (12π/6) : -17π/6 + 12π/6 = -5π/6.',
      '2. On vérifie : -π < -5π/6 <= π.',
      '3. La mesure principale est -5π/6.'
    ]
  },
  {
    id: 'q-2s-ang-15',
    exerciseId: 'ex-ang-15',
    type: 'true_false',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Unicité de la Mesure Principale)',
    microConcept: 'Pour tout angle orienté réel x, il existe un UNIQUE réel θ dans l\'intervalle semi-ouvert ]-π ; π] tel que x = θ + 2kπ avec k ∈ Z. La borne -π est exclue alors que π est incluse.',
    hint: 'L\'intervalle est-il bien semi-ouvert à gauche ]-π ; π] ?',
    prompt: 'La mesure principale d\'un angle orienté appartient toujours à l\'intervalle semi-ouvert ]-π ; π] (excluant -π et incluant π).',
    options: [
      'Vrai (]-π ; π] garantit l\'unicité stricte de la mesure principale)',
      'Faux (l\'intervalle est [-π ; π])'
    ],
    correctAnswer: 'Vrai (]-π ; π] garantit l\'unicité stricte de la mesure principale)',
    commonMistake: 'Penser que l\'intervalle est fermé des deux côtés [-π ; π], ce qui donnerait deux mesures pour un même point (-π et π).',
    explanation: 'Pour éviter l\'ambiguïté au point diamétralement opposé à l\'origine, la convention universelle fixe ]-π ; π]. Il y a donc unicité stricte.',
    steps: [
      '1. -π et π représentent le même point sur le cercle.',
      '2. Pour avoir une unique mesure par angle, on exclut -π et on garde π.',
      '3. L\'intervalle de référence est bien ]-π ; π].'
    ]
  }
];

export const SECONDE_TRIGO_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-trigo-1',
    exerciseId: 'ex-trigo-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Repérage de cos(x) et sin(x))',
    microConcept: 'Sur le cercle trigonométrique, pour tout réel x, le point image M a pour coordonnées M(cos(x); sin(x)). L\'abscisse (axe horizontal) donne le cosinus, et l\'ordonnée (axe vertical) donne le sinus.',
    hint: 'Moyen mnémotechnique : Cosinus = Côté horizontal (x), Sinus = Sommet vertical (y).',
    prompt: 'Sur le cercle trigonométrique, à quoi correspond géométriquement le cosinus d\'un réel x ?',
    options: [
      'À l\'abscisse du point image sur l\'axe horizontal',
      'À l\'ordonnée du point image sur l\'axe vertical',
      'À la longueur de la diagonale',
      'À la tangente extérieure'
    ],
    correctAnswer: 'À l\'abscisse du point image sur l\'axe horizontal',
    commonMistake: 'Confusion fréquente entre abscisse et ordonnée : cosinus est sur l\'axe des abscisses (x), sinus est sur l\'axe des ordonnées (y).',
    explanation: 'Par définition du cercle trigonométrique, le point M associé au réel x a pour coordonnées (cos(x); sin(x)). Le cosinus est donc l\'abscisse de M.',
    steps: [
      '1. Tout point du cercle trigonométrique est repéré par M(cos(x); sin(x)).',
      '2. L\'abscisse correspond à la première coordonnée : cos(x).',
      '3. L\'ordonnée correspond à la deuxième coordonnée : sin(x).'
    ]
  },
  {
    id: 'q-2s-trigo-2',
    exerciseId: 'ex-trigo-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Valeurs Remarquables)',
    microConcept: 'Tableau des valeurs remarquables à connaître par cœur : cos(0)=1, cos(π/6)=√3/2, cos(π/4)=√2/2, cos(π/3)=1/2, cos(π/2)=0. Et sin(π/3)=√3/2, sin(π/6)=1/2.',
    hint: 'À π/3 (60°), l\'abscisse est égale à la moitié du rayon.',
    prompt: 'Quelle est la valeur exacte du cosinus de π / 3 ?',
    options: [
      '1/2 (soit 0,5)',
      '√3 / 2',
      '√2 / 2',
      '0'
    ],
    correctAnswer: '1/2 (soit 0,5)',
    commonMistake: 'L\'inversion la plus répandue en Seconde : croire que cos(π/3) = √3/2. En réalité, cos(π/3) = 1/2 et sin(π/3) = √3/2 !',
    explanation: 'Dans le demi-triangle équilatéral de côté 1, le côté adjacent à l\'angle 60° (π/3) mesure 1/2. Donc cos(π/3) = 1/2.',
    steps: [
      '1. L\'angle π/3 correspond à 60°.',
      '2. Son abscisse sur le cercle trigonométrique est exactement au milieu du rayon : 1/2.',
      '3. Donc cos(π/3) = 1/2.'
    ]
  },
  {
    id: 'q-2s-trigo-3',
    exerciseId: 'ex-trigo-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Formule fondamentale cos² + sin² = 1)',
    microConcept: 'Pour tout réel x : cos²(x) + sin²(x) = 1 (théorème de Pythagore sur le cercle unité). On en déduit : sin²(x) = 1 - cos²(x).',
    hint: 'Calcule 1 - (3/5)² = 1 - 9/25 = 16/25. N\'oublie pas de prendre la racine carrée !',
    prompt: 'On sait que cos(x) = 3/5 et que x ∈ [0; π/2] (donc sin(x) >= 0). Quelle est la valeur exacte de sin(x) ?',
    options: [
      '4/5 (soit 0,8)',
      '2/5',
      '16/25',
      '1/5'
    ],
    correctAnswer: '4/5 (soit 0,8)',
    commonMistake: 'Piège : oublier d\'extraire la racine carrée de 16/25, ce qui ferait choisir 16/25 au lieu de 4/5.',
    explanation: 'sin²(x) = 1 - cos²(x) = 1 - (3/5)² = 1 - 9/25 = 16/25. Comme x ∈ [0; π/2], sin(x) >= 0, donc sin(x) = √(16/25) = 4/5 = 0,8.',
    steps: [
      '1. cos²(x) + sin²(x) = 1 <=> sin²(x) = 1 - (3/5)²',
      '2. sin²(x) = 1 - 9/25 = 16/25.',
      '3. Comme sin(x) >= 0, sin(x) = √(16/25) = 4/5.'
    ]
  },
  {
    id: 'q-2s-trigo-4',
    exerciseId: 'ex-trigo-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Angles Associés & Symétries)',
    microConcept: 'Formules de symétrie : sin(π - x) = sin(x) et cos(π - x) = -cos(x). Deux angles supplémentaires ont le même sinus (même hauteur verticale) !',
    hint: 'Remarque que 5π/6 = π - π/6. Quel est le sinus de π/6 ?',
    prompt: 'Quelle est la valeur exacte de sin(5π / 6) ?',
    options: [
      '1/2',
      '-1/2',
      '√3 / 2',
      '-√3 / 2'
    ],
    correctAnswer: '1/2',
    commonMistake: 'Penser que sin(5π/6) est négatif : or 5π/6 se trouve dans le deuxième quadrant (en haut à gauche), son ordonnée (sinus) est positive !',
    explanation: '5π/6 = π - π/6. D\'après la formule des angles associés : sin(π - x) = sin(x), donc sin(5π/6) = sin(π/6) = 1/2.',
    steps: [
      '1. On décompose l\'angle : 5π/6 = π - π/6.',
      '2. Règle des angles associés : sin(π - x) = sin(x).',
      '3. Donc sin(5π/6) = sin(π/6) = 1/2.'
    ]
  },
  {
    id: 'q-2s-trigo-5',
    exerciseId: 'ex-trigo-5',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Résolution d\'équations trigonométriques)',
    microConcept: 'Sur un tour complet [0; 2π], l\'équation cos(x) = c avec -1 < c < 1 admet exactement deux solutions symétriques par rapport à l\'axe horizontal.',
    hint: 'Trace mentalement la droite verticale d\'abscisse x = -1/2. En combien de points coupe-t-elle le cercle trigonométrique ?',
    prompt: 'Combien de solutions réelles distinctes l\'équation cos(x) = -1/2 possède-t-elle dans l\'intervalle [0; 2π] ? (Entrer un nombre entier)',
    correctAnswer: 2,
    commonMistake: 'Répondre 1 en ne trouvant que 2π/3, en oubliant la deuxième solution 4π/3 située dans le troisième quadrant.',
    explanation: 'Dans [0; 2π], les réels dont le cosinus vaut -1/2 sont x1 = 2π/3 (dans le 2e quadrant) et x2 = 4π/3 (dans le 3e quadrant). Il y a donc 2 solutions.',
    steps: [
      '1. On cherche les points du cercle d\'abscisse -1/2.',
      '2. Première solution dans [0; π] : x = π - π/3 = 2π/3.',
      '3. Deuxième solution dans [π; 2π] : x = π + π/3 = 4π/3.',
      '4. Total des solutions : 2.'
    ]
  },
  {
    id: 'q-2s-trigo-6',
    exerciseId: 'ex-trigo-6',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Bornes du Cosinus et Sinus)',
    microConcept: 'Pour tout nombre réel x, le cosinus et le sinus sont STRICTEMENT bornés entre -1 et 1 : -1 ≤ cos(x) ≤ 1 et -1 ≤ sin(x) ≤ 1.',
    hint: 'Le cercle trigonométrique a un rayon égal à 1. Les coordonnées peuvent-elles dépasser le bord du cercle ?',
    prompt: 'Parmi les valeurs suivantes, laquelle est IMPOSSIBLE comme valeur pour le cosinus d\'un angle réel ?',
    options: [
      '1,4',
      '0,8',
      '-0,5',
      '-1'
    ],
    correctAnswer: '1,4',
    commonMistake: 'Penser que le cosinus peut être supérieur à 1. Le cercle ayant pour rayon 1, toute abscisse est comprise entre -1 et 1.',
    explanation: 'Pour tout réel x, -1 ≤ cos(x) ≤ 1. Une valeur comme 1,4 est donc strictement impossible.',
    steps: [
      '1. Définition : cos(x) est l\'abscisse d\'un point du cercle unité.',
      '2. Le cercle unité est contenu dans [-1 ; 1] × [-1 ; 1].',
      '3. Donc cos(x) ne peut jamais dépasser 1 : 1,4 est impossible.'
    ]
  },
  {
    id: 'q-2s-trigo-7',
    exerciseId: 'ex-trigo-7',
    type: 'numeric',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Sinus de π/2)',
    microConcept: 'Au point sommital du cercle (angle π/2 ou 90°), l\'ordonnée est maximale et vaut 1 : sin(π/2) = 1 et cos(π/2) = 0.',
    hint: 'Au sommet vertical du cercle unité, quelle est l\'ordonnée ?',
    prompt: 'Quelle est la valeur exacte de sin(π / 2) ? (Entrer un nombre entier)',
    correctAnswer: 1,
    commonMistake: 'Confondre avec 0 (qui est la valeur du cosinus en π/2).',
    explanation: 'Le point image de π/2 est situé tout en haut du cercle, aux coordonnées (0 ; 1). L\'ordonnée étant le sinus, sin(π/2) = 1.',
    steps: [
      '1. L\'angle π/2 correspond à 90°.',
      '2. Le point image a pour coordonnées (0 ; 1).',
      '3. Le sinus étant l\'ordonnée : sin(π/2) = 1.'
    ]
  },
  {
    id: 'q-2s-trigo-8',
    exerciseId: 'ex-trigo-8',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Valeur de cos(π/4))',
    microConcept: 'À π/4 (45°), la diagonale du carré donne cos(π/4) = sin(π/4) = √2 / 2 ≈ 0,707.',
    hint: 'En π/4, le cosinus et le sinus sont rigoureusement égaux.',
    prompt: 'Quelle est la valeur exacte du cosinus de π / 4 ?',
    options: [
      '√2 / 2',
      '1 / 2',
      '√3 / 2',
      '1'
    ],
    correctAnswer: '√2 / 2',
    commonMistake: 'Confondre avec 1/2 qui est cos(π/3).',
    explanation: 'Pour x = π/4, le triangle rectangle est isocèle, d\'où cos(π/4) = sin(π/4) = 1/√2 = √2 / 2.',
    steps: [
      '1. π/4 = 45° divise le premier quadrant exactement en deux.',
      '2. cos²(π/4) + sin²(π/4) = 1 avec cos = sin.',
      '3. 2 cos²(π/4) = 1 => cos(π/4) = √(1/2) = √2 / 2.'
    ]
  },
  {
    id: 'q-2s-trigo-9',
    exerciseId: 'ex-trigo-9',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Signe du Cosinus dans le Quadrant 2)',
    microConcept: 'Pour tout réel x appartenant à ]π/2 ; π] (deuxième quadrant), l\'abscisse est négative (cos(x) < 0) et l\'ordonnée est positive (sin(x) > 0).',
    hint: 'Regarde le quart supérieur gauche du cercle trigonométrique.',
    prompt: 'Si un angle x est compris entre π/2 et π, quel est le signe de son cosinus ?',
    options: [
      'Strictement négatif (< 0)',
      'Strictement positif (> 0)',
      'Nul (= 0)',
      'Indéterminé'
    ],
    correctAnswer: 'Strictement négatif (< 0)',
    commonMistake: 'Penser que comme le sinus est positif dans le quart supérieur, le cosinus l\'est aussi.',
    explanation: 'Dans l\'intervalle ]π/2 ; π], les points images ont une abscisse située à gauche de l\'axe vertical : cos(x) < 0.',
    steps: [
      '1. L\'intervalle ]π/2 ; π] correspond au 2e quadrant.',
      '2. Sur l\'axe horizontal, la partie gauche correspond aux valeurs négatives.',
      '3. Donc cos(x) < 0.'
    ]
  },
  {
    id: 'q-2s-trigo-10',
    exerciseId: 'ex-trigo-10',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Cosinus de l\'angle opposé cos(-π/3))',
    microConcept: 'La fonction cosinus est PAIRE : pour tout réel x, cos(-x) = cos(x). Ainsi cos(-π/3) = cos(π/3) = 1/2 = 0,5.',
    hint: 'Rappel : cos(-x) = cos(x). Que vaut cos(π/3) ?',
    prompt: 'Quelle est la valeur de cos(-π / 3) sous forme décimale ? (Entrer un nombre décimal comme 0.5)',
    correctAnswer: 0.5,
    commonMistake: 'Mettre un signe moins devant le résultat : penser que cos(-x) = -cos(x) (ce qui est faux, c\'est sin(-x) = -sin(x) !).',
    explanation: 'Par parité du cosinus, cos(-x) = cos(x). Donc cos(-π/3) = cos(π/3) = 1/2 = 0,5.',
    steps: [
      '1. Propriété de parité : cos(-θ) = cos(θ).',
      '2. cos(-π/3) = cos(π/3).',
      '3. cos(π/3) = 0,5.'
    ]
  },
  {
    id: 'q-2s-trigo-11',
    exerciseId: 'ex-trigo-11',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Tangente tan(x) = sin(x)/cos(x))',
    microConcept: 'Pour tout réel x où cos(x) ≠ 0, la tangente est définie par tan(x) = sin(x) / cos(x). En π/4, comme sin(π/4) = cos(π/4) = √2/2, tan(π/4) = 1.',
    hint: 'Divise sin(π/4) par cos(π/4). Comme ils sont égaux, quel est le quotient ?',
    prompt: 'Quelle est la valeur exacte de tan(π / 4) ?',
    options: [
      '1',
      '√3',
      '√3 / 3',
      '0'
    ],
    correctAnswer: '1',
    commonMistake: 'Confondre avec tan(π/3) = √3 ou tan(π/6) = √3/3.',
    explanation: 'tan(π/4) = sin(π/4) / cos(π/4) = (√2/2) / (√2/2) = 1.',
    steps: [
      '1. tan(x) = sin(x) / cos(x).',
      '2. sin(π/4) = √2/2 et cos(π/4) = √2/2.',
      '3. Quotient : (√2/2) / (√2/2) = 1.'
    ]
  },
  {
    id: 'q-2s-trigo-12',
    exerciseId: 'ex-trigo-12',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Formule cos(π + x) = -cos(x))',
    microConcept: 'Pour tout réel x, le point diamétralement opposé x + π a des coordonnées opposées : cos(π + x) = -cos(x) et sin(π + x) = -sin(x).',
    hint: '4π/3 = π + π/3. Que vaut -cos(π/3) ?',
    prompt: 'Quelle est la valeur exacte de cos(4π / 3) ?',
    options: [
      '-1 / 2',
      '1 / 2',
      '-√3 / 2',
      '√3 / 2'
    ],
    correctAnswer: '-1 / 2',
    commonMistake: 'Oublier le signe moins : 4π/3 est dans le troisième quadrant où l\'abscisse est négative.',
    explanation: '4π/3 = π + π/3. D\'après cos(π + x) = -cos(x), on a cos(4π/3) = -cos(π/3) = -1/2.',
    steps: [
      '1. Décomposition : 4π/3 = π + π/3.',
      '2. Formule associée : cos(π + θ) = -cos(θ).',
      '3. Donc cos(4π/3) = -cos(π/3) = -1/2.'
    ]
  },
  {
    id: 'q-2s-trigo-13',
    exerciseId: 'ex-trigo-13',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Formule de passage cos(π/2 - x) = sin(x))',
    microConcept: 'Deux angles complémentaires x et π/2 - x échangent leurs coordonnées : cos(π/2 - x) = sin(x) et sin(π/2 - x) = cos(x).',
    hint: 'La symétrie par rapport à la première bissectrice y = x échange abscisse et ordonnée.',
    prompt: 'Pour tout réel x, à quoi est égale l\'expression cos(π/2 - x) ?',
    options: [
      'sin(x)',
      '-sin(x)',
      '-cos(x)',
      'cos(x)'
    ],
    correctAnswer: 'sin(x)',
    commonMistake: 'Confondre avec cos(π - x) = -cos(x). Avec π/2, la fonction trigonométrique permute (cos devient sin).',
    explanation: 'Dans le triangle rectangle, le côté adjacent à l\'un des angles aigus est le côté opposé à l\'autre angle aigu. Donc cos(π/2 - x) = sin(x).',
    steps: [
      '1. Les angles x et π/2 - x sont complémentaires.',
      '2. La symétrie échange l\'abscisse et l\'ordonnée.',
      '3. Donc cos(π/2 - x) = sin(x).'
    ]
  },
  {
    id: 'q-2s-trigo-14',
    exerciseId: 'ex-trigo-14',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Nombre de solutions de sin(x) = 1/2)',
    microConcept: 'Sur l\'intervalle [-π ; π], l\'équation sin(x) = 1/2 admet exactement 2 solutions : π/6 et 5π/6 (toutes deux positives car sin(x) > 0).',
    hint: 'Sur le demi-cercle supérieur, quels angles ont une ordonnée de 0,5 ?',
    prompt: 'Combien de solutions réelles l\'équation sin(x) = 1/2 possède-t-elle dans l\'intervalle ]-π ; π] ? (Entrer un nombre entier)',
    correctAnswer: 2,
    commonMistake: 'Répondre 1 en ne trouvant que π/6 et en oubliant 5π/6 = π - π/6.',
    explanation: 'Dans ]-π ; π], la droite horizontale y = 1/2 coupe le cercle en deux points : x1 = π/6 et x2 = 5π/6. Il y a donc 2 solutions.',
    steps: [
      '1. On trace la droite horizontale y = 1/2.',
      '2. Premier quadrant : x1 = π/6.',
      '3. Deuxième quadrant : x2 = π - π/6 = 5π/6.',
      '4. Total des solutions : 2.'
    ]
  },
  {
    id: 'q-2s-trigo-15',
    exerciseId: 'ex-trigo-15',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Calcul de cos²(x) + sin²(x))',
    microConcept: 'L\'identité remarquable fondamentale de la trigonométrie cos²(x) + sin²(x) = 1 est vraie pour ABSOLUMENT TOUT réel x, quelle que soit sa valeur !',
    hint: 'Théorème de Pythagore sur l\'hypoténuse qui vaut le rayon 1.',
    prompt: 'Que vaut la valeur exacte de l\'expression cos²(2025π/7) + sin²(2025π/7) ?',
    options: [
      '1',
      '0',
      '2025 / 7',
      'Impossible à déterminer sans calculatrice'
    ],
    correctAnswer: '1',
    commonMistake: 'Se laisser impressionner par la fraction 2025π/7 : l\'identité cos²(θ) + sin²(θ) = 1 est universelle quel que soit θ !',
    explanation: 'Pour tout réel θ, cos²(θ) + sin²(θ) = 1 par le théorème de Pythagore sur le cercle unité. La valeur de θ n\'a aucune importance.',
    steps: [
      '1. Posons θ = 2025π/7.',
      '2. Identité fondamentale : cos²(θ) + sin²(θ) = 1 pour tout θ ∈ R.',
      '3. Le résultat est exactement égal à 1.'
    ]
  }
];

export const SECONDE_FONCTIONS_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-fct-1',
    exerciseId: 'ex-fct-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Fonction Carré & Parité',
    microConcept: 'La fonction carré f(x) = x² est définie sur R, toujours positive ou nulle (x² ≥ 0). Elle est paire car f(-x) = (-x)² = x² = f(x). Sa courbe est symétrique par rapport à l\'axe des ordonnées.',
    hint: 'Calcule (-4)² en faisant attention aux parenthèses.',
    prompt: 'Quelle est l\'image de -4 par la fonction carré f(x) = x² ?',
    options: [
      '16',
      '-16',
      '8',
      '-8'
    ],
    correctAnswer: '16',
    commonMistake: 'Écrire -4² = -16 au lieu de (-4)² = +16.',
    explanation: 'f(-4) = (-4)² = (-4) × (-4) = +16. Le carré de tout nombre réel est toujours positif ou nul.',
    steps: [
      '1. On remplace x par -4 dans f(x) = x².',
      '2. f(-4) = (-4) × (-4).',
      '3. Le produit de deux nombres négatifs est positif : f(-4) = 16.'
    ]
  },
  {
    id: 'q-2s-fct-2',
    exerciseId: 'ex-fct-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Fonction Inverse & Valeur Interdite',
    microConcept: 'La fonction inverse f(x) = 1/x est définie sur R* = ]-∞ ; 0[ ∪ ]0 ; +∞[. La division par zéro étant impossible, x = 0 est une valeur interdite. Sa courbe est une hyperbole symétrique par rapport à l\'origine O.',
    hint: 'Peut-on diviser par 0 ?',
    prompt: 'Quel est l\'ensemble de définition de la fonction inverse f(x) = 1/x ?',
    options: [
      'R* = ]-∞ ; 0[ ∪ ]0 ; +∞[ (tous les réels sauf 0)',
      'R tout entier (y compris 0)',
      '[0 ; +∞[ (uniquement les réels positifs)',
      ']0 ; +∞[ (uniquement les réels strictement positifs)'
    ],
    correctAnswer: 'R* = ]-∞ ; 0[ ∪ ]0 ; +∞[ (tous les réels sauf 0)',
    commonMistake: 'Penser que 1/0 = 0. La division par 0 n\'est pas définie en mathématiques.',
    explanation: 'Le dénominateur ne peut jamais être nul, donc x ≠ 0. Le domaine de définition est donc R privé de 0, noté R*.',
    steps: [
      '1. Pour que 1/x existe, le dénominateur doit être non nul.',
      '2. Condition : x ≠ 0.',
      '3. Conclusion : Df = R \\ {0} = ]-∞ ; 0[ ∪ ]0 ; +∞[.'
    ]
  },
  {
    id: 'q-2s-fct-3',
    exerciseId: 'ex-fct-3',
    type: 'true_false',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Fonction Racine Carrée & Sens de Variation',
    microConcept: 'La fonction racine carrée f(x) = √x est définie sur [0 ; +∞[ et est STRICTEMENT CROISSANTE sur [0 ; +∞[. Si 0 ≤ a < b, alors √a < √b.',
    hint: 'Compare √4 et √9. Quand le nombre grandit, sa racine carrée grandit-elle aussi ?',
    prompt: 'La fonction racine carrée est-elle strictement croissante sur son ensemble de définition [0 ; +∞[ ?',
    options: [
      'Vrai (si a < b, alors √a < √b)',
      'Faux (elle est décroissante)'
    ],
    correctAnswer: 'Vrai (si a < b, alors √a < √b)',
    commonMistake: 'Confondre avec la fonction inverse qui renverse l\'ordre.',
    explanation: 'Pour tous réels a et b tels que 0 ≤ a < b, on a √b - √a = (b - a)/(√b + √a) > 0, donc √a < √b. Elle conserve l\'ordre : elle est strictement croissante.',
    steps: [
      '1. Soient 0 ≤ a < b.',
      '2. Comme b - a > 0 et √a + √b > 0, on en déduit √b > √a.',
      '3. L\'ordre des réels est conservé, la fonction est strictement croissante.'
    ]
  },
  {
    id: 'q-2s-fct-4',
    exerciseId: 'ex-fct-4',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Coefficient Directeur d\'une Droite Affine',
    microConcept: 'Pour une fonction affine f(x) = ax + b, le coefficient directeur "a" (taux d\'accroissement) se calcule par a = (yB - yA) / (xB - xA) pour deux points distincts A(xA, yA) et B(xB, yB).',
    hint: 'Applique a = (yB - yA) / (xB - xA) avec A(1, 3) et B(3, 9).',
    prompt: 'Soit la droite passant par les points A(1 ; 3) et B(3 ; 9). Quel est son coefficient directeur "a" ? (Entrer un nombre entier)',
    correctAnswer: 3,
    commonMistake: 'Inverser le rapport et calculer (xB - xA) / (yB - yA) = (3 - 1)/(9 - 3) = 2/6 = 1/3.',
    explanation: 'a = (9 - 3) / (3 - 1) = 6 / 2 = 3. Le coefficient directeur vaut 3.',
    steps: [
      '1. Formule : a = (yB - yA) / (xB - xA).',
      '2. Numérateur : yB - yA = 9 - 3 = 6.',
      '3. Dénominateur : xB - xA = 3 - 1 = 2.',
      '4. a = 6 / 2 = 3.'
    ]
  },
  {
    id: 'q-2s-fct-5',
    exerciseId: 'ex-fct-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi - Encadrement par la Fonction Carré',
    microConcept: 'Attention au piège de la fonction carré sur un intervalle contenant 0 ! Si -3 ≤ x ≤ 2 : x² varie entre 0 (atteint en x = 0) et (-3)² = 9. Donc 0 ≤ x² ≤ 9.',
    hint: 'Pense à la forme en parabole : le point le plus bas est en x = 0 où x² = 0. Quelle est la plus grande valeur atteinte aux bornes ?',
    prompt: 'Si x appartient à l\'intervalle [-3 ; 2], à quel intervalle appartient x² ?',
    options: [
      '[0 ; 9]',
      '[4 ; 9]',
      '[-9 ; 4]',
      '[0 ; 4]'
    ],
    correctAnswer: '[0 ; 9]',
    commonMistake: 'Répondre [4 ; 9] en élevant simplement chaque borne au carré sans penser que 0 appartient à l\'intervalle et que 0² = 0 est le minimum.',
    explanation: 'Sur [-3 ; 0], la fonction carré décroît de 9 à 0. Sur [0 ; 2], elle croît de 0 à 4. Le minimum global sur [-3 ; 2] est 0 (en x = 0) et le maximum est max((-3)², 2²) = max(9, 4) = 9. D\'où x² ∈ [0 ; 9].',
    steps: [
      '1. Comme 0 ∈ [-3 ; 2], le minimum de x² sur cet intervalle est 0² = 0.',
      '2. Aux bornes : (-3)² = 9 et 2² = 4.',
      '3. Le maximum est 9.',
      '4. Donc x² appartient à l\'intervalle [0 ; 9].'
    ]
  },
  {
    id: 'q-2s-fct-6',
    exerciseId: 'ex-fct-6',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Image et Antécédent)',
    microConcept: 'Si f(x) = y, alors y est L\'IMAGE de x par la fonction f, et x est UN ANTÉCÉDENT de y par f. Une image est toujours unique, tandis qu\'un antécédent peut ne pas exister ou être multiple.',
    hint: 'Si f(3) = 7, qui est l\'image de qui ?',
    prompt: 'On donne l\'égalité f(3) = 7. Quelle phrase est mathématiquement correcte ?',
    options: [
      '7 est l\'image de 3 par f, et 3 est un antécédent de 7 par f',
      '3 est l\'image de 7 par f, et 7 est un antécédent de 3 par f',
      '3 et 7 sont deux images de f',
      '3 et 7 sont deux antécédents de f'
    ],
    correctAnswer: '7 est l\'image de 3 par f, et 3 est un antécédent de 7 par f',
    commonMistake: 'Inverser les termes image et antécédent.',
    explanation: 'Le nombre entré dans la fonction (3) est l\'antécédent, et le résultat sortant (7) est son image par f.',
    steps: [
      '1. Dans la notation f(x) = y, x est l\'antécédent.',
      '2. y est l\'image de x.',
      '3. Donc 7 est l\'image de 3 par f.'
    ]
  },
  {
    id: 'q-2s-fct-7',
    exerciseId: 'ex-fct-7',
    type: 'numeric',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Calcul d\'Image Affine)',
    microConcept: 'Pour calculer l\'image d\'un réel x0 par f(x) = ax + b, on remplace x par x0 dans l\'expression algébrique.',
    hint: 'Remplace x par 5 dans f(x) = 3x - 4.',
    prompt: 'Soit la fonction affine f(x) = 3x - 4. Quelle est l\'image de 5 par f ? (Entrer un nombre entier)',
    correctAnswer: 11,
    commonMistake: 'Faire 3 + 5 - 4 = 4 au lieu de la multiplication 3 × 5 - 4 = 11.',
    explanation: 'f(5) = 3 × 5 - 4 = 15 - 4 = 11.',
    steps: [
      '1. Expression : f(x) = 3x - 4.',
      '2. Remplacer x par 5 : f(5) = 3(5) - 4 = 15 - 4.',
      '3. Résultat : f(5) = 11.'
    ]
  },
  {
    id: 'q-2s-fct-8',
    exerciseId: 'ex-fct-8',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Sens de Variation d\'une Fonction Affine)',
    microConcept: 'Une fonction affine f(x) = ax + b est STRICTEMENT CROISSANTE sur R si a > 0, et STRICTEMENT DÉCROISSANTE sur R si a < 0.',
    hint: 'Regarde le signe du coefficient de x dans f(x) = -2x + 7.',
    prompt: 'Quel est le sens de variation de la fonction affine f(x) = -2x + 7 sur R ?',
    options: [
      'Strictement décroissante car son coefficient directeur a = -2 est négatif',
      'Strictement croissante car l\'ordonnée à l\'origine b = 7 est positive',
      'Constante',
      'D\'abord croissante puis décroissante'
    ],
    correctAnswer: 'Strictement décroissante car son coefficient directeur a = -2 est négatif',
    commonMistake: 'Regarder le signe de l\'ordonnée à l\'origine (+7) au lieu du coefficient directeur a = -2.',
    explanation: 'Le sens de variation d\'une droite affine dépend uniquement du signe de a. Ici a = -2 < 0, donc la fonction est strictement décroissante sur R.',
    steps: [
      '1. Identifier le coefficient directeur a : a = -2.',
      '2. Comme a < 0, chaque augmentation de x entraîne une diminution de f(x).',
      '3. La fonction est donc strictement décroissante sur R.'
    ]
  },
  {
    id: 'q-2s-fct-9',
    exerciseId: 'ex-fct-9',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Recherche d\'Antécédent)',
    microConcept: 'Pour trouver l\'antécédent de y0 par f, on résout l\'équation f(x) = y0 pour trouver x.',
    hint: 'Résous l\'équation 2x + 3 = 13.',
    prompt: 'Soit la fonction f(x) = 2x + 3. Quel est l\'antécédent de 13 par f ? (Entrer un nombre entier)',
    correctAnswer: 5,
    commonMistake: 'Calculer l\'image de 13 : faire 2(13) + 3 = 29 au lieu de résoudre 2x + 3 = 13.',
    explanation: 'f(x) = 13 <=> 2x + 3 = 13 <=> 2x = 10 <=> x = 5.',
    steps: [
      '1. On pose l\'équation f(x) = 13.',
      '2. 2x + 3 = 13 <=> 2x = 10.',
      '3. x = 10 / 2 = 5.'
    ]
  },
  {
    id: 'q-2s-fct-10',
    exerciseId: 'ex-fct-10',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Fonction Paire & Symétrie)',
    microConcept: 'Une fonction f est dite PAIRE si son domaine est symétrique par rapport à 0 et pour tout x : f(-x) = f(x). Sa courbe représentative admet l\'axe des ordonnées comme axe de symétrie.',
    hint: 'Pense à la parabole de la fonction carré y = x².',
    prompt: 'Quelle est la propriété géométrique caractéristique de la courbe d\'une fonction paire ?',
    options: [
      'Elle est symétrique par rapport à l\'axe des ordonnées (axe vertical)',
      'Elle est symétrique par rapport à l\'origine du repère O',
      'Elle est symétrique par rapport à l\'axe des abscisses',
      'Elle est périodique'
    ],
    correctAnswer: 'Elle est symétrique par rapport à l\'axe des ordonnées (axe vertical)',
    commonMistake: 'Confondre avec une fonction impaire dont la courbe est symétrique par rapport à l\'origine O.',
    explanation: 'Comme f(-x) = f(x), les points M(x ; f(x)) et M\'(-x ; f(x)) ont la même ordonnée et des abscisses opposées. La courbe est symétrique par rapport à l\'axe vertical (y).',
    steps: [
      '1. Définition algébrique : f(-x) = f(x).',
      '2. M(x ; y) et M\'(-x ; y) ont la même hauteur.',
      '3. L\'axe des ordonnées est donc l\'axe de symétrie de la courbe.'
    ]
  },
  {
    id: 'q-2s-fct-11',
    exerciseId: 'ex-fct-11',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Fonction Impaire)',
    microConcept: 'Une fonction f est dite IMPAIRE si pour tout x : f(-x) = -f(x). Sa courbe est symétrique par rapport à l\'origine O du repère (ex : f(x) = x³ ou f(x) = 1/x).',
    hint: 'Vérifie si f(-x) = (-x)³ = -x³ = -f(x).',
    prompt: 'Parmi les fonctions suivantes, laquelle est une fonction impaire ?',
    options: [
      'f(x) = x³ (fonction cube)',
      'f(x) = x² (fonction carré)',
      'f(x) = |x| (valeur absolue)',
      'f(x) = x² + 4'
    ],
    correctAnswer: 'f(x) = x³ (fonction cube)',
    commonMistake: 'Penser que |x| est impaire : |-x| = |x|, c\'est une fonction paire.',
    explanation: 'Pour f(x) = x³, f(-x) = (-x)³ = -x³ = -f(x). La fonction cube est impaire.',
    steps: [
      '1. Calcul de f(-x) : (-x)³ = (-1)³ × x³ = -x³.',
      '2. On compare avec f(x) : -x³ = -f(x).',
      '3. Conclusion : f est impaire.'
    ]
  },
  {
    id: 'q-2s-fct-12',
    exerciseId: 'ex-fct-12',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Sommet de la Parabole)',
    microConcept: 'Pour une fonction polynôme du second degré f(x) = ax² + bx + c, l\'abscisse du sommet de la parabole est donnée par la formule fondamentale xs = -b / (2a).',
    hint: 'Dans f(x) = 2x² - 8x + 5, a = 2 et b = -8. Calcule -(-8) / (2 × 2).',
    prompt: 'Quelle est l\'abscisse xs du sommet de la parabole d\'équation y = 2x² - 8x + 5 ? (Entrer un nombre entier)',
    correctAnswer: 2,
    commonMistake: 'Oublier le signe moins de la formule et calculer b / (2a) = -8 / 4 = -2 au lieu de -(-8)/4 = +2.',
    explanation: 'xs = -b / (2a) = -(-8) / (2 × 2) = 8 / 4 = 2.',
    steps: [
      '1. Identifier les coefficients : a = 2, b = -8, c = 5.',
      '2. Formule du sommet : xs = -b / (2a).',
      '3. Calcul : xs = -(-8) / (2 × 2) = 8 / 4 = 2.'
    ]
  },
  {
    id: 'q-2s-fct-13',
    exerciseId: 'ex-fct-13',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Résolution Graphique f(x) ≤ g(x))',
    microConcept: 'Résoudre graphiquement l\'inéquation f(x) ≤ g(x) consiste à trouver l\'ensemble des abscisses x pour lesquelles la courbe Cf est située EN DESSOUS (ou coupe) la courbe Cg.',
    hint: 'En dessous signifie ordonnées plus petites ou égales.',
    prompt: 'Que signifie graphiquement la résolution de l\'inéquation f(x) ≤ g(x) ?',
    options: [
      'L\'ensemble des abscisses où la courbe Cf est située en dessous ou coupe la courbe Cg',
      'L\'ensemble des abscisses où Cf est au-dessus de Cg',
      'Le point d\'intersection unique entre les deux courbes',
      'L\'aire comprise entre les deux courbes'
    ],
    correctAnswer: 'L\'ensemble des abscisses où la courbe Cf est située en dessous ou coupe la courbe Cg',
    commonMistake: 'Confondre avec l\'équation f(x) = g(x) qui ne donne que les points de croisement.',
    explanation: 'Sur un graphique, f(x) ≤ g(x) signifie que la hauteur (ordonnée) de Cf est inférieure ou égale à celle de Cg. L\'ensemble des solutions est la projection de ces portions sur l\'axe des abscisses.',
    steps: [
      '1. Identifier les zones où Cf est sous Cg.',
      '2. Repérer les bornes d\'intersection Cf = Cg.',
      '3. Projeter sur l\'axe des abscisses pour lire l\'intervalle.'
    ]
  },
  {
    id: 'q-2s-fct-14',
    exerciseId: 'ex-fct-14',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Extremum d\'une Fonction)',
    microConcept: 'Pour f(x) = (x - 3)² + 7, comme un carré est toujours positif ou nul ((x - 3)² ≥ 0), le minimum de f sur R est atteint lorsque (x - 3)² = 0 (c\'est-à-dire en x = 3) et vaut 7.',
    hint: 'Quelle est la plus petite valeur possible pour un terme au carré ? Quelle valeur en résulte pour f(x) ?',
    prompt: 'Quelle est la valeur minimale atteinte par la fonction f(x) = (x - 3)² + 7 sur R ? (Entrer un nombre entier)',
    correctAnswer: 7,
    commonMistake: 'Répondre 3 (qui est la valeur de x où le minimum est atteint) au lieu de 7 (la valeur du minimum lui-même).',
    explanation: 'Pour tout réel x, (x - 3)² ≥ 0, donc f(x) = (x - 3)² + 7 ≥ 0 + 7 = 7. Comme f(3) = 7, le minimum de f est exactement 7.',
    steps: [
      '1. Propriété : pour tout x ∈ R, (x - 3)² ≥ 0.',
      '2. En ajoutant 7 : (x - 3)² + 7 ≥ 7.',
      '3. Pour x = 3, f(3) = 0 + 7 = 7. Le minimum est donc 7.'
    ]
  },
  {
    id: 'q-2s-fct-15',
    exerciseId: 'ex-fct-15',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Taux de Variation d\'une Fonction Quadratique)',
    microConcept: 'Le taux de variation d\'une fonction f entre a et b est T = (f(b) - f(a)) / (b - a). Pour la fonction carré f(x) = x², T = (b² - a²) / (b - a) = a + b.',
    hint: 'Factorise b² - a² avec l\'identité remarquable (b - a)(b + a).',
    prompt: 'Pour la fonction carré f(x) = x², que vaut le taux de variation T entre deux réels distincts a et b ?',
    options: [
      'T = a + b',
      'T = a - b',
      'T = 2a',
      'T = (a + b) / 2'
    ],
    correctAnswer: 'T = a + b',
    commonMistake: 'Penser que le taux de variation est constant comme pour une droite affine.',
    explanation: 'T = (f(b) - f(a)) / (b - a) = (b² - a²) / (b - a) = (b - a)(b + a) / (b - a) = a + b.',
    steps: [
      '1. T = (f(b) - f(a)) / (b - a) = (b² - a²) / (b - a).',
      '2. Identité remarquable : b² - a² = (b - a)(b + a).',
      '3. En simplifiant par b - a ≠ 0 : T = a + b.'
    ]
  }
];

export const SKILL_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  'skill-2s-reels': SECONDE_REELS_QUESTIONS,
  'skill-2s-vecteurs': SECONDE_VECTEURS_QUESTIONS,
  'skill-2s-angles': SECONDE_ANGLES_QUESTIONS,
  'skill-2s-trigo': SECONDE_TRIGO_QUESTIONS,
  'skill-2s-fonctions': SECONDE_FONCTIONS_QUESTIONS,
  ...POLYNOMIAL_QUESTIONS_MAP,
  ...PHYSICS_QUESTIONS_MAP,
  ...PREMIERE_S_PHYSICS_QUESTIONS_MAP,
  ...SVT_QUESTIONS_MAP,
  ...HISTORY_QUESTIONS_MAP,
  // Première S Mathématiques officielles
  ...PREMIERE_S_MATH_QUESTIONS_MAP,
  // Français (Seconde & Première EAF)
  ...FRENCH_QUESTIONS_MAP,
  // SVT Première
  ...PREMIERE_SVT_QUESTIONS_MAP,
  // Histoire-Géographie Première
  ...PREMIERE_HG_QUESTIONS_MAP,
  // Histoire-Géographie Nouveaux Chapitres (Seconde, Première & Terminale)
  ...NEW_HG_QUESTIONS_MAP,
  // Anglais (Seconde & Première)
  ...ENGLISH_QUESTIONS_MAP,
  // Physique-Chimie Terminale Scientifique (Gabon - Programme Officiel)
  ...TERMINALE_PHYSICS_CHEMISTRY_QUESTIONS_MAP,
  // Philosophie Terminale (Gabon - Programme Officiel 20 Notions + Méthodologie Bac)
  ...TERMINALE_PHILOSOPHY_QUESTIONS_MAP,
  // Informatique & Programmation Python (Seconde, Première & Terminale)
  ...COMPUTER_SCIENCE_QUESTIONS_MAP,
  // Mathématiques 1ère A1 & 1ère B (Gabon - Programme Officiel 29 Séquences)
  ...PREMIERE_AB_MATH_QUESTIONS_MAP,

  // Aliases transversaux pour garantir l'accès direct et sans doublon
  'skill-1s-fr-commentaire': FRENCH_QUESTIONS_MAP['skill-2s-fr-commentaire'] || [],
  'skill-1s-fr-dissertation': FRENCH_QUESTIONS_MAP['skill-2s-fr-dissertation'] || [],
  'skill-1s-en-tenses': ENGLISH_QUESTIONS_MAP['skill-2s-en-tenses'] || [],
  'skill-1s-en-modals': ENGLISH_QUESTIONS_MAP['skill-2s-en-modals'] || [],
  'skill-2s-en-reading-env': ENGLISH_QUESTIONS_MAP['skill-1s-en-reading-env'] || [],
  'skill-2s-en-writing-connectors': ENGLISH_QUESTIONS_MAP['skill-1s-en-writing-connectors'] || [],
};

export const SAMPLE_QUESTIONS: ExerciseQuestion[] = SECONDE_REELS_QUESTIONS;

/**
 * Strict Workout Question Builder:
 * Guarantees that every exercise session provides ONLY UNIQUE questions.
 * No question or QCM is ever repeated in the same workout session.
 */
export function getSkillWorkoutQuestions(skillId: string, requestedCount?: number): ExerciseQuestion[] {
  const baseQuestions = SKILL_QUESTIONS_MAP[skillId] || SAMPLE_QUESTIONS;
  
  // Deduplicate strictly by normalized prompt and ID
  const seenPrompts = new Set<string>();
  const seenIds = new Set<string>();
  const uniqueQuestions: ExerciseQuestion[] = [];

  for (const q of baseQuestions) {
    const promptKey = q.prompt.trim().toLowerCase();
    if (!seenPrompts.has(promptKey) && !seenIds.has(q.id)) {
      seenPrompts.add(promptKey);
      seenIds.add(q.id);
      uniqueQuestions.push(q);
    }
  }

  // If a specific limit is requested, return up to that amount; otherwise return all unique questions
  if (requestedCount && requestedCount > 0) {
    return uniqueQuestions.slice(0, requestedCount);
  }

  return uniqueQuestions;
}
