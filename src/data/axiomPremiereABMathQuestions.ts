import { ExerciseQuestion } from '../types';

// =====================================================================
// BANQUE DE QUESTIONS CALIBRÉES : MATHÉMATIQUES 1ère A1 & 1ère B (GABON)
// 29 Séquences Officielles (1er, 2ème et 3ème Trimestres)
// =====================================================================

export const PREMIERE_AB_MATH_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // -------------------------------------------------------------------
  // SÉQUENCE 1 : Polynômes du second degré (partie A)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq1-second-degre-a': [
    {
      id: 'q-1ab-m-s1-1',
      exerciseId: 'ex-1ab-m-s1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Somme et Produit des racines',
      microConcept: 'Pour tout trinôme ax² + bx + c ayant deux racines x₁ et x₂, leur somme vaut S = x₁ + x₂ = -b/a et leur produit vaut P = x₁ · x₂ = c/a.',
      hint: 'Identifie les coefficients a, b et c de l\'équation 2x² - 10x + 12 = 0, puis applique la formule S = -b/a.',
      prompt: 'Soit l\'équation 2x² - 10x + 12 = 0. Quelles sont la somme S et le produit P de ses racines ?',
      options: [
        'S = 5 et P = 6',
        'S = -5 et P = 6',
        'S = 10 et P = 12',
        'S = -10 et P = -12'
      ],
      correctAnswer: 'S = 5 et P = 6',
      commonMistake: 'Oublier le signe moins dans la formule de la somme : S = -b/a et non b/a.',
      explanation: 'Ici a = 2, b = -10 et c = 12. La somme est S = -(-10)/2 = 10/2 = 5. Le produit est P = 12/2 = 6.',
      steps: [
        '1. Identifier les coefficients : a = 2, b = -10, c = 12.',
        '2. Calculer S = -b/a = -(-10)/2 = 5.',
        '3. Calculer P = c/a = 12/2 = 6.'
      ]
    },
    {
      id: 'q-1ab-m-s1-2',
      exerciseId: 'ex-1ab-m-s1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Forme canonique',
      microConcept: 'La forme canonique d\'un trinôme ax² + bx + c est a(x - α)² + β, avec α = -b/(2a) et β = f(α).',
      hint: 'Calcule α = -b/(2a) avec a = 1 et b = -6, puis calcule f(α).',
      prompt: 'Quelle est la forme canonique de la fonction f(x) = x² - 6x + 5 ?',
      options: [
        'f(x) = (x - 3)² - 4',
        'f(x) = (x + 3)² - 4',
        'f(x) = (x - 3)² + 4',
        'f(x) = (x - 6)² - 4'
      ],
      correctAnswer: 'f(x) = (x - 3)² - 4',
      commonMistake: 'Confondre le signe de α dans (x - α)². Ici α = 3 donc (x - 3)²',
      explanation: 'α = -(-6)/(2 × 1) = 3. On calcule β = f(3) = 3² - 6(3) + 5 = 9 - 18 + 5 = -4. D\'où f(x) = (x - 3)² - 4.',
      steps: [
        '1. Déterminer α = -b/(2a) = 6/2 = 3.',
        '2. Déterminer β = f(3) = 9 - 18 + 5 = -4.',
        '3. Écrire la forme canonique : a(x - α)² + β = (x - 3)² - 4.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 2 : Dénombrement et Probabilités (partie A)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq2-denombrement-a': [
    {
      id: 'q-1ab-m-s2-1',
      exerciseId: 'ex-1ab-m-s2',
      type: 'mcq',
      difficulty: 1,
      difficultyLabel: 'Niveau 1 : Cardinal d\'une réunion',
      microConcept: 'Pour deux ensembles finis A et B : Card(A ∪ B) = Card(A) + Card(B) - Card(A ∩ B).',
      hint: 'Fais la somme des cardinaux puis retranche le nombre d\'éléments communs (l\'intersection).',
      prompt: 'Dans un lycée de Libreville, 25 élèves étudient l\'économie (A), 18 étudient la philosophie (B) et 10 étudient les deux matières. Combien d\'élèves étudient au moins l\'une de ces matières ?',
      options: [
        '33 élèves',
        '43 élèves',
        '35 élèves',
        '53 élèves'
      ],
      correctAnswer: '33 élèves',
      commonMistake: 'Additionner simplement 25 + 18 sans soustraire l\'intersection des 10 élèves comptés deux fois.',
      explanation: 'Card(A ∪ B) = Card(A) + Card(B) - Card(A ∩ B) = 25 + 18 - 10 = 43 - 10 = 33.',
      steps: [
        '1. Appliquer la formule : Card(A ∪ B) = Card(A) + Card(B) - Card(A ∩ B).',
        '2. Remplacer les valeurs : 25 + 18 - 10.',
        '3. Obtenir 33 élèves.'
      ]
    },
    {
      id: 'q-1ab-m-s2-2',
      exerciseId: 'ex-1ab-m-s2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Factorielles',
      microConcept: 'La factorielle d\'un entier naturel n ≥ 1 est n! = n × (n - 1) × ... × 1. Par convention, 0! = 1.',
      hint: 'Écris 6! = 6 × 5! pour simplifier directement la fraction.',
      prompt: 'Quelle est la valeur exacte du quotient 6! / (4! × 2!) ?',
      options: [
        '15',
        '30',
        '12',
        '6'
      ],
      correctAnswer: '15',
      commonMistake: 'Penser que 4! × 2! = 8!.',
      explanation: '6! / (4! × 2!) = (6 × 5 × 4!) / (4! × 2) = (6 × 5) / 2 = 30 / 2 = 15.',
      steps: [
        '1. Décomposer 6! = 6 × 5 × 4!.',
        '2. Simplifier par 4! au numérateur et dénominateur.',
        '3. Calculer (6 × 5) / 2! = 30 / 2 = 15.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 3 : Polynômes du second degré (partie B)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq3-second-degre-b': [
    {
      id: 'q-1ab-m-s3-1',
      exerciseId: 'ex-1ab-m-s3',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Signe du trinôme',
      microConcept: 'Un trinôme ax² + bx + c ayant deux racines réelles distinctes x₁ < x₂ est du signe de a à l\'extérieur des racines et du signe opposé à a entre les racines.',
      hint: 'Identifie les racines de (x - 1)(x - 4) = 0 et le coefficient a = 1 > 0.',
      prompt: 'Quel est l\'ensemble des solutions de l\'inéquation x² - 5x + 4 < 0 dans ℝ ?',
      options: [
        ']1 ; 4[',
        ']-∞ ; 1[ ∪ ]4 ; +∞[',
        '[1 ; 4]',
        '∅'
      ],
      correctAnswer: ']1 ; 4[',
      commonMistake: 'Prendre l\'extérieur des racines au lieu de l\'intérieur pour un signe strictement négatif.',
      explanation: 'Les racines de x² - 5x + 4 = 0 sont x₁ = 1 et x₂ = 4. Comme a = 1 > 0, le trinôme est strictement négatif strictement entre les racines, soit sur ]1 ; 4[.',
      steps: [
        '1. Calculer le discriminant Δ = (-5)² - 4(1)(4) = 25 - 16 = 9 > 0.',
        '2. Calculer les racines : x₁ = (5 - 3)/2 = 1 et x₂ = (5 + 3)/2 = 4.',
        '3. Le coefficient a = 1 est positif, donc le trinôme est négatif entre les racines : ]1 ; 4[.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 4 : Pourcentages et Évolutions
  // -------------------------------------------------------------------
  'skill-1ab-m-seq4-pourcentages': [
    {
      id: 'q-1ab-m-s4-1',
      exerciseId: 'ex-1ab-m-s4',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Évolutions successives',
      microConcept: 'Le coefficient multiplicateur global est le produit des coefficients multiplicateurs individuels : CM_global = CM₁ × CM₂. Le taux global est T = CM_global - 1.',
      hint: 'Une hausse de 20% correspond à CM₁ = 1,20 et une baisse de 20% à CM₂ = 0,80.',
      prompt: 'Le prix d\'un sac de manioc augmente de 20%, puis baisse de 20% le mois suivant. Quelle est la variation globale ?',
      options: [
        'Baisse de 4%',
        'Variation nulle (0%)',
        'Hausse de 4%',
        'Baisse de 2%'
      ],
      correctAnswer: 'Baisse de 4%',
      commonMistake: 'Additionner naïvement les pourcentages (+20% - 20% = 0%). Les pourcentages ne s\'additionnent pas.',
      explanation: 'CM₁ = 1 + 0,20 = 1,20 et CM₂ = 1 - 0,20 = 0,80. CM_global = 1,20 × 0,80 = 0,96. Le taux global est 0,96 - 1 = -0,04 soit une baisse de 4%.',
      steps: [
        '1. Calculer CM₁ = 1,20.',
        '2. Calculer CM₂ = 0,80.',
        '3. Multiplier : CM_global = 1,20 × 0,80 = 0,96.',
        '4. Déduire la variation : 0,96 - 1 = -0,04 = -4% (baisse).'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 5 : Généralités sur les fonctions (Partie A)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq5-fonctions-a': [
    {
      id: 'q-1ab-m-s5-1',
      exerciseId: 'ex-1ab-m-s5',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Ensemble de définition',
      microConcept: 'L\'ensemble de définition d\'une fonction rationnelle exclut les valeurs qui annulent son dénominateur.',
      hint: 'Trouve la valeur de x telle que 2x - 6 = 0.',
      prompt: 'Quel est l\'ensemble de définition de la fonction f(x) = (3x + 1) / (2x - 6) ?',
      options: [
        'ℝ \\ {3}',
        'ℝ \\ {-3}',
        '[3 ; +∞[',
        'ℝ \\ {0}'
      ],
      correctAnswer: 'ℝ \\ {3}',
      commonMistake: 'Résoudre 2x - 6 = 0 en trouvant x = -3 par erreur de signe.',
      explanation: 'Le dénominateur doit être non nul : 2x - 6 ≠ 0 ⇔ 2x ≠ 6 ⇔ x ≠ 3. Donc D_f = ℝ \\ {3}.',
      steps: [
        '1. Poser la condition d\'existence : 2x - 6 ≠ 0.',
        '2. Résoudre 2x = 6 ⇒ x = 3.',
        '3. Exclure cette valeur interdite : D_f = ℝ \\ {3}.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 6 : Suites numériques (Partie A)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq6-suites-a': [
    {
      id: 'q-1ab-m-s6-1',
      exerciseId: 'ex-1ab-m-s6',
      type: 'mcq',
      difficulty: 1,
      difficultyLabel: 'Niveau 1 : Calcul de termes par récurrence',
      microConcept: 'Dans une suite définie par récurrence u_{n+1} = g(u_n), chaque terme se calcule à partir du terme précédent.',
      hint: 'Calcule d\'abord u₁ = 2u₀ + 3, puis utilise cette valeur pour calculer u₂.',
      prompt: 'Soit la suite définie par u₀ = 1 et u_{n+1} = 2u_n + 3. Quelle est la valeur de u₂ ?',
      options: [
        '13',
        '5',
        '11',
        '8'
      ],
      correctAnswer: '13',
      commonMistake: 'Calculer directement u₂ = 2(2) + 3 sans passer par u₁.',
      explanation: 'u₁ = 2(1) + 3 = 5. Ensuite u₂ = 2(u₁) + 3 = 2(5) + 3 = 10 + 3 = 13.',
      steps: [
        '1. Calculer u₁ = 2(u₀) + 3 = 2(1) + 3 = 5.',
        '2. Calculer u₂ = 2(u₁) + 3 = 2(5) + 3 = 13.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 7 : Généralités sur les fonctions (Partie B)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq7-fonctions-b': [
    {
      id: 'q-1ab-m-s7-1',
      exerciseId: 'ex-1ab-m-s7',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Continuité en un point',
      microConcept: 'Une fonction f est continue en un point x₀ si et seulement si lim_{x → x₀} f(x) = f(x₀).',
      hint: 'Vérifie si la limite quand x tend vers 2 est égale à l\'image f(2).',
      prompt: 'Soit la fonction définie par f(x) = (x² - 4)/(x - 2) pour x ≠ 2 et f(2) = 4. La fonction f est-elle continue en 2 ?',
      options: [
        'Oui, car lim_{x → 2} f(x) = 4 = f(2)',
        'Non, car le dénominateur s\'annule en 2',
        'Non, car f(2) devrait valoir 0',
        'On ne peut pas conclure'
      ],
      correctAnswer: 'Oui, car lim_{x → 2} f(x) = 4 = f(2)',
      commonMistake: 'Penser qu\'une fonction n\'est pas continue dès qu\'une formule initiale a une valeur interdite, sans simplifier le quotient.',
      explanation: 'Pour x ≠ 2, (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2) = x + 2. Quand x → 2, x + 2 → 4. Comme lim_{x → 2} f(x) = f(2) = 4, f est continue en 2.',
      steps: [
        '1. Factoriser le numérateur : x² - 4 = (x - 2)(x + 2).',
        '2. Simplifier pour x ≠ 2 : f(x) = x + 2.',
        '3. Calculer la limite : lim_{x → 2} (x + 2) = 4.',
        '4. Comparer avec f(2) = 4 : continuité vérifiée.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 8 : Dénombrement et Probabilités (partie B)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq8-denombrement-b': [
    {
      id: 'q-1ab-m-s8-1',
      exerciseId: 'ex-1ab-m-s8',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Combinaisons',
      microConcept: 'Le nombre de sous-ensembles de p éléments choisis parmi n est donné par le coefficient binomial C_n^p = binom(n, p) = n! / [p!(n - p)!]. L\'ordre ne compte pas.',
      hint: 'Choisis 3 délégués parmi 10 sans hiérarchie (l\'ordre n\'importe pas) : c\'est une combinaison binom(10, 3).',
      prompt: 'Dans une classe de 1ère A1 de 10 élèves, de combien de façons différentes peut-on former un comité de 3 élèves ?',
      options: [
        '120 façons',
        '720 façons',
        '30 façons',
        '1000 façons'
      ],
      correctAnswer: '120 façons',
      commonMistake: 'Calculer des arrangements A_10^3 = 720 en tenant compte de l\'ordre alors qu\'un comité n\'a pas d\'ordre.',
      explanation: 'binom(10, 3) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120.',
      steps: [
        '1. L\'ordre ne compte pas, il s\'agit de combinaisons.',
        '2. Calculer binom(10, 3) = (10 × 9 × 8) / (3 × 2 × 1).',
        '3. Simplifier : 10 × 3 × 4 = 120.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 9 : Suites numériques (Partie B)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq9-suites-b': [
    {
      id: 'q-1ab-m-s9-1',
      exerciseId: 'ex-1ab-m-s9',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Sens de variation d\'une suite',
      microConcept: 'Une suite (u_n) est strictement croissante si pour tout n, u_{n+1} - u_n > 0.',
      hint: 'Exprime u_{n+1} = 3(n + 1) - 4 puis calcule la différence u_{n+1} - u_n.',
      prompt: 'Soit la suite définie pour tout entier n par u_n = 3n - 4. Quel est son sens de variation ?',
      options: [
        'Strictement croissante',
        'Strictement décroissante',
        'Constante',
        'Non monotone'
      ],
      correctAnswer: 'Strictement croissante',
      commonMistake: 'Regarder seulement u₀ = -4 et penser que la suite est négative donc décroissante.',
      explanation: 'u_{n+1} - u_n = [3(n + 1) - 4] - [3n - 4] = 3n + 3 - 4 - 3n + 4 = 3. Comme 3 > 0, la suite est strictement croissante.',
      steps: [
        '1. Calculer u_{n+1} = 3n + 3 - 4 = 3n - 1.',
        '2. Former la différence u_{n+1} - u_n = (3n - 1) - (3n - 4) = 3.',
        '3. Constater que 3 > 0 pour tout n ∈ ℕ, donc la suite est croissante.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 10 : Statistiques (partie A)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq10-statistiques-a': [
    {
      id: 'q-1ab-m-s10-1',
      exerciseId: 'ex-1ab-m-s10',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Écart-type et Variance',
      microConcept: 'L\'écart-type σ est la racine carrée positive de la variance V : σ = √V.',
      hint: 'Prends la racine carrée de la variance V = 16.',
      prompt: 'Une série statistique a une variance V = 16. Quel est son écart-type σ ?',
      options: [
        '4',
        '8',
        '256',
        '2'
      ],
      correctAnswer: '4',
      commonMistake: 'Élever la variance au carré au lieu de prendre sa racine.',
      explanation: 'Par définition, σ = √V = √16 = 4.',
      steps: [
        '1. Appliquer la formule : σ = √V.',
        '2. Calculer √16 = 4.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 11 : Dérivation (partie A)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq11-derivation-a': [
    {
      id: 'q-1ab-m-s11-1',
      exerciseId: 'ex-1ab-m-s11',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Équation de la tangente',
      microConcept: 'L\'équation de la tangente à la courbe C_f au point d\'abscisse x₀ est y = f\'(x₀)(x - x₀) + f(x₀).',
      hint: 'Remplace x₀ = 2, f(2) = 5 et f\'(2) = 3 dans la formule générale.',
      prompt: 'Soit une fonction f telle que f(2) = 5 et f\'(2) = 3. Quelle est l\'équation réduite de la tangente à C_f au point d\'abscisse 2 ?',
      options: [
        'y = 3x - 1',
        'y = 3x + 5',
        'y = 5x + 3',
        'y = 3x + 1'
      ],
      correctAnswer: 'y = 3x - 1',
      commonMistake: 'Oublier de développer f\'(x₀) × (-x₀), ce qui conduit à écrire y = 3x + 5.',
      explanation: 'y = f\'(2)(x - 2) + f(2) = 3(x - 2) + 5 = 3x - 6 + 5 = 3x - 1.',
      steps: [
        '1. Formule générale : y = f\'(x₀)(x - x₀) + f(x₀).',
        '2. Remplacer : y = 3(x - 2) + 5.',
        '3. Développer et réduire : y = 3x - 6 + 5 = 3x - 1.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 12 : Systèmes linéaires
  // -------------------------------------------------------------------
  'skill-1ab-m-seq12-systemes-lineaires': [
    {
      id: 'q-1ab-m-s12-1',
      exerciseId: 'ex-1ab-m-s12',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Inéquations linéaires dans ℝ',
      microConcept: 'La solution d\'un système d\'inéquations à une inconnue est l\'intersection des ensembles de solutions de chaque inéquation.',
      hint: 'Détermine l\'intervalle pour x > 2 et celui pour x ≤ 5, puis trouve leur partie commune.',
      prompt: 'Quel est l\'ensemble des solutions du système d\'inéquations { x > 2 ; x ≤ 5 } dans ℝ ?',
      options: [
        ']2 ; 5]',
        '[2 ; 5]',
        ']-∞ ; 5]',
        ']2 ; +∞['
      ],
      correctAnswer: ']2 ; 5]',
      commonMistake: 'Fermer le crochet en 2 alors que l\'inégalité est stricte (x > 2).',
      explanation: 'x > 2 correspond à ]2 ; +∞[ et x ≤ 5 correspond à ]-∞ ; 5]. L\'intersection est ]2 ; 5].',
      steps: [
        '1. I₁ = ]2 ; +∞[ (crochet ouvert car inégalité stricte).',
        '2. I₂ = ]-∞ ; 5] (crochet fermé car inégalité large).',
        '3. Intersection : S = I₁ ∩ I₂ = ]2 ; 5].'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 13 : Suites arithmétiques
  // -------------------------------------------------------------------
  'skill-1ab-m-seq13-suites-arithmetiques': [
    {
      id: 'q-1ab-m-s13-1',
      exerciseId: 'ex-1ab-m-s13',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Terme général d\'une suite arithmétique',
      microConcept: 'Pour une suite arithmétique de premier terme u₀ et de raison r, le terme général s\'écrit u_n = u₀ + n · r.',
      hint: 'Applique u_n = u₀ + n · r avec u₀ = 4, r = 3 et n = 10.',
      prompt: 'Soit une suite arithmétique de premier terme u₀ = 4 et de raison r = 3. Que vaut u₁₀ ?',
      options: [
        '34',
        '30',
        '37',
        '40'
      ],
      correctAnswer: '34',
      commonMistake: 'Faire u₁₀ = u₀ × r¹⁰ en confondant suite arithmétique et suite géométrique.',
      explanation: 'u₁₀ = u₀ + 10 × r = 4 + 10 × 3 = 4 + 30 = 34.',
      steps: [
        '1. Formule du terme général : u_n = u₀ + n · r.',
        '2. Remplacer les valeurs : u₁₀ = 4 + 10 × 3.',
        '3. Calculer 4 + 30 = 34.'
      ]
    },
    {
      id: 'q-1ab-m-s13-2',
      exerciseId: 'ex-1ab-m-s13',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 2 : Somme des termes',
      microConcept: 'La somme de termes consécutifs d\'une suite arithmétique vaut (nombre de termes) × (premier + dernier) / 2.',
      hint: 'Il y a 100 termes de 1 à 100, applique la formule n(n + 1)/2.',
      prompt: 'Quelle est la valeur de la somme S = 1 + 2 + 3 + ... + 100 ?',
      options: [
        '5050',
        '5000',
        '10100',
        '4950'
      ],
      correctAnswer: '5050',
      commonMistake: 'Calculer 100 × 100 / 2 = 5000 en oubliant le + 1.',
      explanation: 'S = 100 × (100 + 1) / 2 = 100 × 101 / 2 = 50 × 101 = 5050.',
      steps: [
        '1. Formule de Gauss : S = n(n + 1)/2.',
        '2. Remplacer n = 100 : S = 100 × 101 / 2.',
        '3. Calculer : 5050.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 14 : Dérivation (partie B)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq14-derivation-b': [
    {
      id: 'q-1ab-m-s14-1',
      exerciseId: 'ex-1ab-m-s14',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Lecture graphique du nombre dérivé',
      microConcept: 'Le nombre dérivé f\'(x₀) est égal au coefficient directeur de la tangente à la courbe au point d\'abscisse x₀. Si la tangente est horizontale, f\'(x₀) = 0.',
      hint: 'Une droite horizontale a une pente nulle.',
      prompt: 'Au point d\'abscisse 3, la courbe d\'une fonction f admet une tangente horizontale. Que vaut f\'(3) ?',
      options: [
        'f\'(3) = 0',
        'f\'(3) = 3',
        'f\'(3) = 1',
        'f\'(3) n\'existe pas'
      ],
      correctAnswer: 'f\'(3) = 0',
      commonMistake: 'Confondre l\'ordonnée du point f(3) avec la pente f\'(3).',
      explanation: 'Le coefficient directeur d\'une droite horizontale est nul, donc le nombre dérivé f\'(3) vaut 0.',
      steps: [
        '1. La tangente est parallèle à l\'axe des abscisses.',
        '2. Son coefficient directeur m vaut 0.',
        '3. Comme m = f\'(3), on a f\'(3) = 0.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 15 : Généralités sur les fonctions (Partie C)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq15-fonctions-c': [
    {
      id: 'q-1ab-m-s15-1',
      exerciseId: 'ex-1ab-m-s15',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Limite à l\'infini d\'une fonction rationnelle',
      microConcept: 'En ±∞, la limite d\'une fonction rationnelle est égale à la limite du quotient de ses termes de plus haut degré.',
      hint: 'Prends le terme de plus haut degré au numérateur (4x²) et au dénominateur (2x²).',
      prompt: 'Quelle est la limite quand x tend vers +∞ de la fonction f(x) = (4x² - 3x + 1) / (2x² + 5) ?',
      options: [
        '2',
        '+∞',
        '0',
        '4'
      ],
      correctAnswer: '2',
      commonMistake: 'Penser que la limite est +∞ car le numérateur tend vers +∞.',
      explanation: 'En +∞, lim f(x) = lim (4x² / 2x²) = lim (4/2) = 2. La courbe admet la droite y = 2 comme asymptote horizontale.',
      steps: [
        '1. Sélectionner les termes prépondérants : 4x² et 2x².',
        '2. Former le quotient simplifié : 4x² / 2x² = 2.',
        '3. En déduire que la limite vaut 2.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 16 : Statistiques et Fluctuation (partie B)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq16-statistiques-b': [
    {
      id: 'q-1ab-m-s16-1',
      exerciseId: 'ex-1ab-m-s16',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 1 : Intervalle de fluctuation',
      microConcept: 'Pour n ≥ 30 et 0,2 ≤ p ≤ 0,8, l\'intervalle de fluctuation au seuil de 95% est approché par [p - 1/√n ; p + 1/√n].',
      hint: 'Calcule 1/√100 = 1/10 = 0,10, puis retranche et ajoute cette valeur à p = 0,50.',
      prompt: 'Dans une population gabonaise, la proportion théorique d\'un caractère est p = 0,50. Sur un échantillon de taille n = 100, quel est l\'intervalle de fluctuation au seuil de 95% ?',
      options: [
        '[0,40 ; 0,60]',
        '[0,45 ; 0,55]',
        '[0,49 ; 0,51]',
        '[0,30 ; 0,70]'
      ],
      correctAnswer: '[0,40 ; 0,60]',
      commonMistake: 'Oublier la racine carrée sur n et calculer 1/100 = 0,01.',
      explanation: '1/√n = 1/√100 = 0,10. L\'intervalle est [0,50 - 0,10 ; 0,50 + 0,10] = [0,40 ; 0,60].',
      steps: [
        '1. Calculer la demi-amplitude : 1/√100 = 0,10.',
        '2. Borne inférieure : 0,50 - 0,10 = 0,40.',
        '3. Borne supérieure : 0,50 + 0,10 = 0,60.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 17 : Dénombrement (partie C - Types de tirages)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq17-denombrement-c': [
    {
      id: 'q-1ab-m-s17-1',
      exerciseId: 'ex-1ab-m-s17',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Comparaison des modes de tirage',
      microConcept: 'Un tirage successif avec remise correspond à n^p (ordre et répétition). Un tirage successif sans remise correspond à A_n^p (ordre sans répétition). Un tirage simultané correspond à C_n^p (sans ordre ni répétition).',
      hint: 'Les boules sont tirées en même temps, il s\'agit donc d\'un tirage simultané.',
      prompt: 'Une urne contient 8 boules numérotées. On tire simultanément 3 boules de l\'urne. Quel outil de dénombrement utilise-t-on ?',
      options: [
        'Les combinaisons : binom(8, 3)',
        'Les arrangements : A_8^3',
        'Les p-listes : 8³',
        'Les permutations : 8!'
      ],
      correctAnswer: 'Les combinaisons : binom(8, 3)',
      commonMistake: 'Confondre simultané (l\'ordre n\'importe pas) et successif (l\'ordre compte).',
      explanation: 'Comme le tirage est simultané, les 3 boules sont prises ensemble en une seule poignée. L\'ordre n\'a aucune importance, ce sont donc des combinaisons : binom(8, 3) = 56.',
      steps: [
        '1. Le mot-clé est "simultanément".',
        '2. L\'ordre n\'intervient pas dans le résultat du tirage.',
        '3. L\'outil mathématique approprié est la combinaison binom(8, 3).'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 18 : Suites géométriques
  // -------------------------------------------------------------------
  'skill-1ab-m-seq18-suites-geometriques': [
    {
      id: 'q-1ab-m-s18-1',
      exerciseId: 'ex-1ab-m-s18',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Terme général d\'une suite géométrique',
      microConcept: 'Pour une suite géométrique de premier terme u₀ et de raison q, u_n = u₀ · q^n.',
      hint: 'Applique u₄ = u₀ · q⁴ avec u₀ = 5 et q = 2.',
      prompt: 'Soit une suite géométrique de premier terme u₀ = 5 et de raison q = 2. Quelle est la valeur de u₄ ?',
      options: [
        '80',
        '40',
        '13',
        '160'
      ],
      correctAnswer: '80',
      commonMistake: 'Calculer 5 + 4 × 2 = 13 (formule arithmétique).',
      explanation: 'u₄ = 5 × 2⁴ = 5 × 16 = 80.',
      steps: [
        '1. Formule générale : u_n = u₀ · q^n.',
        '2. Calculer 2⁴ = 16.',
        '3. Multiplier : 5 × 16 = 80.'
      ]
    },
    {
      id: 'q-1ab-m-s18-2',
      exerciseId: 'ex-1ab-m-s18',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 2 : Somme des termes géométriques',
      microConcept: '1 + q + q² + ... + q^n = (1 - q^{n+1}) / (1 - q) pour q ≠ 1.',
      hint: 'Ici q = 2 et le dernier exposant est n = 5, il y a 6 termes.',
      prompt: 'Que vaut la somme S = 1 + 2 + 4 + 8 + 16 + 32 ?',
      options: [
        '63',
        '64',
        '31',
        '127'
      ],
      correctAnswer: '63',
      commonMistake: 'Penser que le résultat est 2⁵ - 1 = 31 alors qu\'il y a 6 termes.',
      explanation: 'S = (1 - 2⁶) / (1 - 2) = (1 - 64) / (-1) = -63 / (-1) = 63.',
      steps: [
        '1. Identifier le nombre de termes : de 2⁰ à 2⁵, soit 6 termes.',
        '2. Appliquer la formule : (1 - 2⁶) / (1 - 2).',
        '3. Calculer : (1 - 64)/(-1) = 63.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 19 : Dérivation (partie C - Opérations)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq19-derivation-c': [
    {
      id: 'q-1ab-m-s19-1',
      exerciseId: 'ex-1ab-m-s19',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Dérivée d\'un polynôme',
      microConcept: 'La dérivée d\'une somme de monômes est la somme des dérivées : (ax^n)\' = a · n · x^{n-1}.',
      hint: 'Dérive terme à terme : 2x³ donne 6x², -5x² donne -10x, 7x donne 7 et la constante -3 donne 0.',
      prompt: 'Quelle est la fonction dérivée de f(x) = 2x³ - 5x² + 7x - 3 ?',
      options: [
        'f\'(x) = 6x² - 10x + 7',
        'f\'(x) = 6x² - 5x + 7',
        'f\'(x) = 2x² - 10x + 7',
        'f\'(x) = 6x² - 10x'
      ],
      correctAnswer: 'f\'(x) = 6x² - 10x + 7',
      commonMistake: 'Oublier de dériver le terme en x (penser que (7x)\' = 7x) ou oublier le facteur multiplicatif.',
      explanation: '(2x³)\' = 6x², (-5x²)\' = -10x, (7x)\' = 7 et (-3)\' = 0. Donc f\'(x) = 6x² - 10x + 7.',
      steps: [
        '1. (2x³)\' = 2 × 3x² = 6x².',
        '2. (-5x²)\' = -5 × 2x = -10x.',
        '3. (7x - 3)\' = 7 - 0 = 7.',
        '4. Somme : 6x² - 10x + 7.'
      ]
    },
    {
      id: 'q-1ab-m-s19-2',
      exerciseId: 'ex-1ab-m-s19',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 2 : Dérivée d\'un quotient',
      microConcept: 'La dérivée d\'un quotient est (u/v)\' = (u\'v - uv\') / v².',
      hint: 'Pose u(x) = x + 1 et v(x) = x - 2, calcule u\' = 1 et v\' = 1.',
      prompt: 'Quelle est la dérivée de la fonction f(x) = (x + 1) / (x - 2) pour tout x ≠ 2 ?',
      options: [
        'f\'(x) = -3 / (x - 2)²',
        'f\'(x) = 3 / (x - 2)²',
        'f\'(x) = 1 / (x - 2)²',
        'f\'(x) = -1 / (x - 2)²'
      ],
      correctAnswer: 'f\'(x) = -3 / (x - 2)²',
      commonMistake: 'Dériver le numérateur et le dénominateur séparément : u\'/v\' = 1/1 = 1.',
      explanation: 'u\'v - uv\' = 1(x - 2) - (x + 1)(1) = x - 2 - x - 1 = -3. Donc f\'(x) = -3 / (x - 2)²',
      steps: [
        '1. Identifier u = x + 1 ⇒ u\' = 1 et v = x - 2 ⇒ v\' = 1.',
        '2. Numérateur : u\'v - uv\' = (x - 2) - (x + 1) = -3.',
        '3. Quotient : f\'(x) = -3 / (x - 2)².'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 20 : Dénombrement et Probabilités (partie D)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq20-denombrement-d': [
    {
      id: 'q-1ab-m-s20-1',
      exerciseId: 'ex-1ab-m-s20',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Équiprobabilité',
      microConcept: 'En situation d\'équiprobabilité, P(A) = Card(A) / Card(Ω).',
      hint: 'Calcule le nombre d\'issues paires sur un dé à 6 faces.',
      prompt: 'On lance un dé cubique équilibré à 6 faces. Quelle est la probabilité d\'obtenir un nombre strictement supérieur à 4 ?',
      options: [
        '1/3',
        '1/2',
        '2/3',
        '1/6'
      ],
      correctAnswer: '1/3',
      commonMistake: 'Inclure le 4 alors que l\'inégalité est stricte ("strictement supérieur à 4" = {5, 6}).',
      explanation: 'Les issues favorables sont {5, 6}, soit 2 issues sur 6. La probabilité est P = 2/6 = 1/3.',
      steps: [
        '1. Univers Ω = {1, 2, 3, 4, 5, 6}, Card(Ω) = 6.',
        '2. Événement A = "obtenir > 4" = {5, 6}, Card(A) = 2.',
        '3. P(A) = 2/6 = 1/3.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 21 : Dérivation (partie D - Variations)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq21-derivation-d': [
    {
      id: 'q-1ab-m-s21-1',
      exerciseId: 'ex-1ab-m-s21',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Signe de la dérivée et variations',
      microConcept: 'Si f\'(x) > 0 sur un intervalle I, alors f est strictement croissante sur I. Si f\'(x) < 0, f est strictement décroissante.',
      hint: 'Calcule la dérivée f\'(x) = 2x - 6 et cherche où elle est positive.',
      prompt: 'Sur quel intervalle la fonction f(x) = x² - 6x + 8 est-elle strictement croissante ?',
      options: [
        '[3 ; +∞[',
        ']-∞ ; 3]',
        '[2 ; 4]',
        'ℝ'
      ],
      correctAnswer: '[3 ; +∞[',
      commonMistake: 'Confondre le signe de la fonction f avec le signe de sa dérivée f\'.',
      explanation: 'f\'(x) = 2x - 6. On a f\'(x) ≥ 0 ⇔ 2x ≥ 6 ⇔ x ≥ 3. La fonction f est donc strictement croissante sur [3 ; +∞[.',
      steps: [
        '1. Calculer la dérivée : f\'(x) = 2x - 6.',
        '2. Étudier le signe : 2x - 6 > 0 ⇔ x > 3.',
        '3. Conclure : f est croissante sur [3 ; +∞[.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 22 : Dénombrement et Probabilités (partie E - Conditionnelles)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq22-denombrement-e': [
    {
      id: 'q-1ab-m-s22-1',
      exerciseId: 'ex-1ab-m-s22',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Probabilité conditionnelle',
      microConcept: 'La probabilité conditionnelle de B sachant A est donnée par P_A(B) = P(A ∩ B) / P(A).',
      hint: 'Divise P(A ∩ B) = 0,12 par P(A) = 0,40.',
      prompt: 'On sait que P(A) = 0,40 et P(A ∩ B) = 0,12. Quelle est la probabilité conditionnelle P_A(B) ?',
      options: [
        '0,30',
        '0,48',
        '0,048',
        '0,28'
      ],
      correctAnswer: '0,30',
      commonMistake: 'Multiplier P(A) par P(A ∩ B) au lieu de diviser.',
      explanation: 'P_A(B) = P(A ∩ B) / P(A) = 0,12 / 0,40 = 12 / 40 = 3 / 10 = 0,30.',
      steps: [
        '1. Appliquer la formule de Bayes / conditionnelle : P_A(B) = P(A ∩ B) / P(A).',
        '2. Calculer 0,12 / 0,40 = 0,30.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 23 : Dérivation (partie E - Extremums)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq23-derivation-e': [
    {
      id: 'q-1ab-m-s23-1',
      exerciseId: 'ex-1ab-m-s23',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Extremum local',
      microConcept: 'Si f\' s\'annule en x₀ en changeant de signe, alors f admet un extremum local en x₀.',
      hint: 'Résous f\'(x) = 0 pour trouver le point critique.',
      prompt: 'Pour f(x) = -x² + 8x - 12, en quelle valeur de x la fonction admet-elle un maximum ?',
      options: [
        'x = 4',
        'x = -4',
        'x = 2',
        'x = 6'
      ],
      correctAnswer: 'x = 4',
      commonMistake: 'Donner la valeur du maximum f(4) = 4 au lieu de l\'abscisse où il est atteint.',
      explanation: 'f\'(x) = -2x + 8. f\'(x) = 0 ⇔ -2x = -8 ⇔ x = 4. Comme la dérivée passe de positive à négative, f admet un maximum local en x = 4.',
      steps: [
        '1. Calculer f\'(x) = -2x + 8.',
        '2. Résoudre f\'(x) = 0 ⇒ 2x = 8 ⇒ x = 4.',
        '3. Comme f\'\' = -2 < 0, il s\'agit bien d\'un maximum.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 24 : Variables Aléatoires
  // -------------------------------------------------------------------
  'skill-1ab-m-seq24-denombrement-f': [
    {
      id: 'q-1ab-m-s24-1',
      exerciseId: 'ex-1ab-m-s24',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Loi de probabilité',
      microConcept: 'La somme de toutes les probabilités d\'une loi de variable aléatoire discrète est toujours égale à 1 : ∑ P(X = x_i) = 1.',
      hint: 'Fais la somme des probabilités connues et soustrais-la de 1 pour trouver p.',
      prompt: 'Une variable aléatoire X prend les valeurs {-2, 0, 5} avec les probabilités respectives P(X = -2) = 0,2, P(X = 0) = 0,5 et P(X = 5) = p. Que vaut p ?',
      options: [
        '0,3',
        '0,7',
        '0,2',
        '0,5'
      ],
      correctAnswer: '0,3',
      commonMistake: 'Additionner sans égaler à 1.',
      explanation: '0,2 + 0,5 + p = 1 ⇔ 0,7 + p = 1 ⇔ p = 1 - 0,7 = 0,3.',
      steps: [
        '1. Somme des probabilités = 1.',
        '2. 0,2 + 0,5 + p = 1.',
        '3. p = 1 - 0,7 = 0,3.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 25 : Dérivation (partie F - Asymptote oblique)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq25-derivation-f': [
    {
      id: 'q-1ab-m-s25-1',
      exerciseId: 'ex-1ab-m-s25',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 1 : Asymptote oblique',
      microConcept: 'La droite d\'équation y = ax + b est une asymptote oblique à C_f en ±∞ si et seulement si lim_{x → ±∞} [f(x) - (ax + b)] = 0.',
      hint: 'Regarde l\'expression de f(x) : f(x) = 2x - 3 + 4/(x + 1). Que devient le terme 4/(x + 1) quand x tend vers l\'infini ?',
      prompt: 'Soit f(x) = 2x - 3 + 4/(x + 1). Quelle est l\'équation de l\'asymptote oblique à la courbe C_f en +∞ ?',
      options: [
        'y = 2x - 3',
        'y = 2x',
        'x = -1',
        'y = 4'
      ],
      correctAnswer: 'y = 2x - 3',
      commonMistake: 'Confondre l\'asymptote verticale x = -1 avec l\'asymptote oblique.',
      explanation: 'f(x) - (2x - 3) = 4/(x + 1). Quand x → +∞, lim 4/(x + 1) = 0. Donc la droite y = 2x - 3 est asymptote oblique.',
      steps: [
        '1. Calculer f(x) - (2x - 3) = 4/(x + 1).',
        '2. Calculer lim_{x → +∞} 4/(x + 1) = 0.',
        '3. Conclure que la droite y = 2x - 3 est asymptote oblique.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 26 : Espérance & Variance
  // -------------------------------------------------------------------
  'skill-1ab-m-seq26-denombrement-g': [
    {
      id: 'q-1ab-m-s26-1',
      exerciseId: 'ex-1ab-m-s26',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Espérance mathématique',
      microConcept: 'L\'espérance d\'une variable aléatoire discrète est la moyenne pondérée : E(X) = ∑ x_i · P(X = x_i). Un jeu est équitable si E(X) = 0.',
      hint: 'Multiplie chaque gain par sa probabilité puis additionne les produits.',
      prompt: 'Un jeu propose les gains suivants : gain de +1000 FCFA avec probabilité 0,1 et perte de -100 FCFA avec probabilité 0,9. Quelle est l\'espérance de gain ?',
      options: [
        '+10 FCFA',
        '0 FCFA',
        '-10 FCFA',
        '+100 FCFA'
      ],
      correctAnswer: '+10 FCFA',
      commonMistake: 'Oublier le signe négatif de la perte (-100 FCFA).',
      explanation: 'E(X) = 1000 × 0,1 + (-100) × 0,9 = 100 - 90 = +10 FCFA. Le jeu est favorable au joueur.',
      steps: [
        '1. Calculer le produit pour le gain : 1000 × 0,1 = 100.',
        '2. Calculer le produit pour la perte : (-100) × 0,9 = -90.',
        '3. Sommer : 100 - 90 = +10 FCFA.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 27 : Loi Binomiale
  // -------------------------------------------------------------------
  'skill-1ab-m-seq27-loi-binomiale': [
    {
      id: 'q-1ab-m-s27-1',
      exerciseId: 'ex-1ab-m-s27',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Espérance de la loi binomiale',
      microConcept: 'Pour une variable aléatoire X suivant une loi binomiale ℬ(n, p), l\'espérance vaut E(X) = n · p et la variance vaut V(X) = n · p · (1 - p).',
      hint: 'Multiplie n = 50 par p = 0,2.',
      prompt: 'Une variable aléatoire X suit la loi binomiale ℬ(50 ; 0,2). Que vaut son espérance E(X) ?',
      options: [
        '10',
        '8',
        '25',
        '5'
      ],
      correctAnswer: '10',
      commonMistake: 'Calculer la variance V(X) = 50 × 0,2 × 0,8 = 8 au lieu de l\'espérance.',
      explanation: 'E(X) = n × p = 50 × 0,2 = 10.',
      steps: [
        '1. Identifier les paramètres : n = 50, p = 0,2.',
        '2. Appliquer la formule : E(X) = n · p.',
        '3. Calculer 50 × 0,2 = 10.'
      ]
    },
    {
      id: 'q-1ab-m-s27-2',
      exerciseId: 'ex-1ab-m-s27',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 2 : Formule de la loi binomiale',
      microConcept: 'P(X = k) = binom(n, k) · p^k · (1 - p)^{n - k}.',
      hint: 'Applique la formule avec n = 4, k = 1 et p = 0,5.',
      prompt: 'On lance 4 fois une pièce équilibrée (p = 0,5). Quelle est la probabilité d\'obtenir exactement 1 pile ?',
      options: [
        '4/16 (soit 0,25)',
        '1/16 (soit 0,0625)',
        '6/16 (soit 0,375)',
        '1/4'
      ],
      correctAnswer: '4/16 (soit 0,25)',
      commonMistake: 'Oublier le coefficient binomial binom(4, 1) = 4 et répondre (0,5)⁴ = 1/16.',
      explanation: 'P(X = 1) = binom(4, 1) × (0,5)¹ × (0,5)³ = 4 × (1/2)⁴ = 4/16 = 1/4 = 0,25.',
      steps: [
        '1. binom(4, 1) = 4.',
        '2. p¹ × (1 - p)³ = (1/2)⁴ = 1/16.',
        '3. P(X = 1) = 4 × (1/16) = 4/16 = 0,25.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 28 : Dérivation (Fonctions puissances)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq28-derivation-puissances': [
    {
      id: 'q-1ab-m-s28-1',
      exerciseId: 'ex-1ab-m-s28',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 1 : Dérivée d\'une puissance négative',
      microConcept: 'Pour tout n ∈ ℤ, la dérivée de x ↦ x^n est n · x^{n - 1}. En particulier, pour f(x) = 1/x² = x⁻², f\'(x) = -2x⁻³ = -2/x³.',
      hint: 'Écris 1/x² sous la forme x⁻² puis applique la règle de dérivation.',
      prompt: 'Quelle est la dérivée de la fonction f(x) = 1 / x² sur ]0 ; +∞[ ?',
      options: [
        'f\'(x) = -2 / x³',
        'f\'(x) = 2 / x³',
        'f\'(x) = -1 / x⁴',
        'f\'(x) = -2 / x'
      ],
      correctAnswer: 'f\'(x) = -2 / x³',
      commonMistake: 'Penser que la dérivée de 1/x² est 1/(2x).',
      explanation: 'f(x) = x⁻². Donc f\'(x) = -2 · x⁻²⁻¹ = -2 · x⁻³ = -2 / x³.',
      steps: [
        '1. Écrire sous forme de puissance : f(x) = x⁻².',
        '2. Appliquer (x^n)\' = n · x^{n-1} avec n = -2.',
        '3. f\'(x) = -2 · x⁻³ = -2 / x³.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // SÉQUENCE 29 : Dérivation (Valeur Absolue et Dérivabilité en 0)
  // -------------------------------------------------------------------
  'skill-1ab-m-seq29-valeur-absolue': [
    {
      id: 'q-1ab-m-s29-1',
      exerciseId: 'ex-1ab-m-s29',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 1 : Non-dérivabilité en 0',
      microConcept: 'La fonction valeur absolue f(x) = |x| n\'est pas dérivable en 0 car le taux d\'accroissement admet deux limites différentes à gauche (-1) et à droite (+1). Graphiquement, sa courbe possède un point anguleux à l\'origine.',
      hint: 'Calcule la limite de |h|/h quand h tend vers 0 par valeurs positives (h > 0), puis négatives (h < 0).',
      prompt: 'Pourquoi la fonction f(x) = |x| n\'est-elle pas dérivable en 0 ?',
      options: [
        'Parce que le taux d\'accroissement tend vers +1 à droite et vers -1 à gauche',
        'Parce que f n\'est pas continue en 0',
        'Parce que |0| n\'existe pas',
        'Parce que sa limite en 0 est infinie'
      ],
      correctAnswer: 'Parce que le taux d\'accroissement tend vers +1 à droite et vers -1 à gauche',
      commonMistake: 'Penser que f n\'est pas continue en 0 : f est parfaitement continue en 0 (f(0) = 0), mais elle n\'est pas dérivable en ce point.',
      explanation: 'Le taux d\'accroissement en 0 est τ(h) = (|h| - 0)/h = |h|/h. Pour h > 0, |h|/h = 1 → 1. Pour h < 0, |h|/h = -h/h = -1 → -1. Comme les limites à gauche et à droite sont distinctes, la fonction n\'est pas dérivable en 0.',
      steps: [
        '1. Taux d\'accroissement : τ(h) = (|0 + h| - |0|) / h = |h| / h.',
        '2. Limite à droite (h > 0) : lim_{h → 0⁺} (h / h) = +1.',
        '3. Limite à gauche (h < 0) : lim_{h → 0⁻} (-h / h) = -1.',
        '4. Les limites étant différentes, f n\'est pas dérivable en 0 (point anguleux).'
      ]
    }
  ]
};
