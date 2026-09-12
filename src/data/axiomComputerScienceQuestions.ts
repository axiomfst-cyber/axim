import { ExerciseQuestion } from '../types';

// =========================================================================================
// BANQUE DE QUESTIONS CALIBRÉES : INFORMATIQUE & PROGRAMMATION PYTHON
// Progression Seconde -> Première -> Terminale
// =========================================================================================

export const COMPUTER_SCIENCE_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // ---------------------------------------------------------------------------------------
  // SECONDE : INITIATION À LA LOGIQUE ET À PYTHON
  // ---------------------------------------------------------------------------------------
  'skill-2nde-cs-variables-types': [
    {
      id: 'q-2cs-type-1',
      exerciseId: 'ex-2cs-fondations',
      type: 'mcq',
      difficulty: 1,
      difficultyLabel: 'Types primitifs : Reconnaissance de types en Python',
      microConcept: 'En Python, les entiers ont le type int, les nombres à virgule flottante ont le type float, les textes entre guillemets ont le type str (string), et les valeurs de vérité ont le type bool.',
      hint: 'Attention à la présence des guillemets : "42" n\'est pas un nombre mais du texte !',
      prompt: 'Quel est le type de la variable `val` après l\'exécution de l\'instruction suivante ?\n```python\nval = "3.14"\n```',
      options: [
        'str (chaîne de caractères)',
        'float (nombre décimal à virgule flottante)',
        'int (nombre entier relatif)',
        'bool (valeur booléenne)'
      ],
      correctAnswer: 'str (chaîne de caractères)',
      explanation: 'Toute valeur entourée de guillemets simples ou doubles (comme "3.14" ou \'bonjour\') est automatiquement typée comme `str` (chaîne de caractères), même si son contenu ressemble à un nombre décimal. Pour obtenir un float, il faudrait écrire `val = 3.14` sans guillemets ou utiliser la conversion `float("3.14")`.',
      steps: [
        '1. Observer la présence des guillemets doubles autour de 3.14.',
        '2. Se rappeler que les guillemets indiquent une chaîne littérale en Python.',
        '3. Le type de `val` est donc `str`.'
      ]
    },
    {
      id: 'q-2cs-type-2',
      exerciseId: 'ex-2cs-fondations',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Conversion de types : float vers int',
      microConcept: 'La fonction int() convertit un nombre décimal ou une chaîne en entier par troncature (suppression de la partie décimale, sans arrondi au plus proche).',
      hint: 'int() ne réalise pas un arrondi mathématique au plus proche, elle tronque simplement les décimales.',
      prompt: 'Que renvoie l\'expression Python suivante ?\n```python\nint(7.89)\n```',
      options: [
        '7',
        '8',
        '7.0',
        'Une erreur de type ValueError'
      ],
      correctAnswer: '7',
      explanation: 'La conversion `int(x)` sur un float supprime la partie décimale sans arrondir : 7.89 devient 7. Si l\'on souhaitait arrondir à l\'entier le plus proche, il faudrait utiliser la fonction intégrée `round(7.89)`, qui donnerait 8.',
      steps: [
        '1. Identifier la fonction appelée : `int()`.',
        '2. Retenir que `int(float)` effectue une troncature vers zéro de la partie décimale.',
        '3. 7.89 est tronqué en 7.'
      ]
    }
  ],

  'skill-2nde-cs-affectation-calculs': [
    {
      id: 'q-2cs-calc-1',
      exerciseId: 'ex-2cs-calculs',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Opérateurs arithmétiques : Division entière (//) et Modulo (%)',
      microConcept: 'L\'opérateur / donne le quotient réel (float), // donne le quotient entier de la division euclidienne (int), et % donne le reste de la division euclidienne.',
      hint: 'Divisons 17 par 5 : 17 = 5 * 3 + 2. // donne le quotient, % donne le reste.',
      prompt: 'Quelles sont les valeurs respectives de `q` et `r` après ce bloc de code ?\n```python\nq = 17 // 5\nr = 17 % 5\n```',
      options: [
        'q = 3 et r = 2',
        'q = 3.4 et r = 2',
        'q = 2 et r = 3',
        'q = 3 et r = 0.4'
      ],
      correctAnswer: 'q = 3 et r = 2',
      explanation: 'Dans la division euclidienne de 17 par 5 : 17 = 5 × 3 + 2. Le quotient entier obtenu par `17 // 5` vaut 3 (et non 3.4 qui serait donné par 17 / 5), et le reste donné par `17 % 5` vaut 2.',
      steps: [
        '1. Poser la division euclidienne : 17 = 5 * 3 + 2.',
        '2. L\'opérateur `//` renvoie le quotient entier : 3.',
        '3. L\'opérateur `%` renvoie le reste : 2.'
      ]
    },
    {
      id: 'q-2cs-calc-2',
      exerciseId: 'ex-2cs-calculs',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Affectation et réévaluation de variable',
      microConcept: 'Le symbole = en informatique est une affectation et non une égalité mathématique. L\'expression de droite est d\'abord entièrement calculée avec les anciennes valeurs, puis le résultat est stocké dans la variable de gauche.',
      hint: 'Suivez pas à pas la valeur de x après chaque ligne.',
      prompt: 'Quelle est la valeur de `x` à la fin de cette séquence d\'instructions ?\n```python\nx = 5\nx = x * 2 + 3\nx = x - 4\n```',
      options: [
        '9',
        '13',
        '5',
        '11'
      ],
      correctAnswer: '9',
      explanation: 'Ligne 1 : x reçoit 5. Ligne 2 : on calcule 5 * 2 + 3 = 13, donc x devient 13. Ligne 3 : on calcule 13 - 4 = 9, donc x reçoit 9.',
      steps: [
        '1. x = 5.',
        '2. x = (5 * 2) + 3 = 10 + 3 = 13.',
        '3. x = 13 - 4 = 9.'
      ]
    }
  ],

  'skill-2nde-cs-entrees-sorties': [
    {
      id: 'q-2cs-es-1',
      exerciseId: 'ex-2cs-es',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Entrées utilisateur : Comportement fondamental de input()',
      microConcept: 'La fonction input() lit une ligne saisie au clavier et la renvoie TOUJOURS sous forme de chaîne de caractères (str). Pour effectuer un calcul arithmétique, une conversion avec int() ou float() est indispensable.',
      hint: 'Si l\'utilisateur saisit 10 et que input() renvoie une chaîne, que fait "10" + "10" ?',
      prompt: 'Si un utilisateur saisit le nombre 10 lors de l\'exécution du script suivant, qu\'affiche le programme ?\n```python\na = input("Entrez un nombre : ")\nb = a + a\nprint(b)\n```',
      options: [
        '1010',
        '20',
        'Une erreur TypeError',
        '10'
      ],
      correctAnswer: '1010',
      explanation: 'La fonction `input()` renvoie toujours une chaîne de caractères (str), donc `a` vaut `"10"`. L\'opérateur `+` appliqué entre deux chaînes réalise une concaténation (mise bout à bout) et non une addition mathématique : `"10" + "10"` donne donc `"1010"`. Pour obtenir 20, il aurait fallu convertir avec `a = int(input(...))`.',
      steps: [
        '1. input() renvoie la chaîne "10".',
        '2. "10" + "10" concatène les deux chaînes.',
        '3. Le résultat affiché est la chaîne "1010".'
      ]
    }
  ],

  'skill-2nde-cs-applications-maths': [
    {
      id: 'q-2cs-app-1',
      exerciseId: 'ex-2cs-maths',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Application géométrie : Coordonnées du milieu d\'un segment',
      microConcept: 'En mathématiques de 2nde, le milieu M d\'un segment [AB] a pour coordonnées xM = (xA + xB) / 2 et yM = (yA + yB) / 2. En Python, ces calculs nécessitent des parenthèses pour respecter la priorité de l\'addition sur la division.',
      hint: 'Attention aux parenthèses : xA + xB / 2 diviserait seulement xB par 2 !',
      prompt: 'Quel script Python calcule correctement les coordonnées (xM, yM) du milieu du segment reliant A(2, 4) et B(6, 8) ?',
      options: [
        'xM = (xA + xB) / 2 ; yM = (yA + yB) / 2',
        'xM = xA + xB / 2 ; yM = yA + yB / 2',
        'xM = (xA - xB) / 2 ; yM = (yA - yB) / 2',
        'xM = (xA * xB) / 2 ; yM = (yA * yB) / 2'
      ],
      correctAnswer: 'xM = (xA + xB) / 2 ; yM = (yA + yB) / 2',
      explanation: 'Pour calculer la demi-somme des abscisses et des ordonnées, les parenthèses sont indispensables en Python afin d\'obliger l\'addition à s\'exécuter avant la division : `(xA + xB) / 2`. Sans parenthèses, `xA + xB / 2` effectuerait `xA + (xB / 2)`.',
      steps: [
        '1. Rappeler la formule mathématique : M((xA + xB)/2 ; (yA + yB)/2).',
        '2. Priorité des opérations : la division / est prioritaire sur l\'addition +.',
        '3. Les parenthèses sont requises : `(xA + xB) / 2`.'
      ]
    }
  ],

  // ---------------------------------------------------------------------------------------
  // PREMIÈRE : APPROFONDISSEMENT ET MODULARITÉ
  // ---------------------------------------------------------------------------------------
  'skill-1ere-cs-conditions': [
    {
      id: 'q-1cs-cond-1',
      exerciseId: 'ex-1cs-logique',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Conditions imbriquées : Structure if / elif / else',
      microConcept: 'Dans une chaîne if / elif / else, les conditions sont évaluées séquentiellement. Dès qu\'une condition est vraie, son bloc est exécuté et toutes les branches suivantes sont ignorées.',
      hint: 'Vérifiez chaque condition dans l\'ordre d\'apparition.',
      prompt: 'Quelle valeur sera affichée par ce programme si `note = 14` ?\n```python\nnote = 14\nif note >= 16:\n    print("Très Bien")\nelif note >= 12:\n    print("Bien")\nelif note >= 10:\n    print("Passable")\nelse:\n    print("Ajourné")\n```',
      options: [
        'Bien',
        'Passable',
        'Très Bien',
        'Bien et Passable'
      ],
      correctAnswer: 'Bien',
      explanation: '14 >= 16 est faux (False), donc le premier bloc est ignoré. La deuxième condition `14 >= 12` est vraie (True), le programme affiche donc "Bien" et quitte immédiatement la structure conditionnelle sans évaluer le reste.',
      steps: [
        '1. note = 14.',
        '2. Test 1 : 14 >= 16 -> Faux.',
        '3. Test 2 : 14 >= 12 -> Vrai -> Affiche "Bien" et sort de la structure.'
      ]
    },
    {
      id: 'q-1cs-cond-2',
      exerciseId: 'ex-1cs-logique',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Opérateurs booléens : and, or, not',
      microConcept: 'L\'opérateur and requiert que les deux opérandes soient vrais. L\'opérateur or est vrai si au moins l\'un des deux opérandes est vrai. not inverse la valeur de vérité.',
      hint: 'Décomposez chaque sous-expression entre parenthèses.',
      prompt: 'Quelle est la valeur de vérité de l\'expression suivante en Python ?\n```python\n(5 > 3) and not (2 == 4 or 7 < 1)\n```',
      options: [
        'True',
        'False',
        'None',
        'Une erreur de syntaxe'
      ],
      correctAnswer: 'True',
      explanation: 'Sous-expression 1 : `5 > 3` est True. Dans la parenthèse : `2 == 4` est False, `7 < 1` est False, donc `(2 == 4 or 7 < 1)` est False. Avec le `not`, cela devient `not False`, soit True. Enfin, `True and True` est True.',
      steps: [
        '1. Évaluer (5 > 3) : True.',
        '2. Évaluer (2 == 4 or 7 < 1) : False or False = False.',
        '3. Appliquer not : not(False) = True.',
        '4. Conclure : True and True = True.'
      ]
    }
  ],

  'skill-1ere-cs-boucles': [
    {
      id: 'q-1cs-boucle-1',
      exerciseId: 'ex-1cs-boucles',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Boucle for : Comportement de range(debut, fin, pas)',
      microConcept: 'range(a, b, step) génère des entiers en partant de a inclus, avec un pas de step, jusqu\'à la borne supérieure b STRICTEMENT EXCLUE.',
      hint: 'Attention : la borne de fin n\'est jamais atteinte dans un range() en Python !',
      prompt: 'Combien de fois la boucle suivante va-t-elle s\'exécuter ?\n```python\nfor k in range(2, 10, 3):\n    print(k)\n```',
      options: [
        '3 fois (pour k = 2, 5, 8)',
        '4 fois (pour k = 2, 5, 8, 11)',
        '8 fois (de 2 à 10)',
        '3 fois (pour k = 3, 6, 9)'
      ],
      correctAnswer: '3 fois (pour k = 2, 5, 8)',
      explanation: 'La fonction `range(2, 10, 3)` commence à 2. En ajoutant le pas de 3, les valeurs successives prises par `k` sont 2, 5, puis 8. La valeur suivante serait 11, qui dépasse la borne supérieure 10 (exclue). La boucle s\'exécute donc 3 fois avec les valeurs 2, 5 et 8.',
      steps: [
        '1. Premier tour : k = 2.',
        '2. Deuxième tour : k = 2 + 3 = 5 (< 10).',
        '3. Troisième tour : k = 5 + 3 = 8 (< 10).',
        '4. k = 8 + 3 = 11 (>= 10, boucle terminée). Total = 3 itérations.'
      ]
    },
    {
      id: 'q-1cs-boucle-2',
      exerciseId: 'ex-1cs-boucles',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Boucle while : Condition d\'arrêt et terminaison',
      microConcept: 'Une boucle while continue tant que sa condition est vraie. Il faut impérativement modifier la variable de contrôle à chaque tour pour garantir que la condition deviendra fausse (terminaison).',
      hint: 'Suivez la variable n et la variable s à chaque itération.',
      prompt: 'Que vaut `s` après l\'exécution de ce code ?\n```python\ns = 0\nn = 1\nwhile n <= 4:\n    s = s + n\n    n = n + 1\n```',
      options: [
        '10 (car 1 + 2 + 3 + 4 = 10)',
        '6 (car 1 + 2 + 3 = 6)',
        '15 (car 1 + 2 + 3 + 4 + 5 = 15)',
        '4'
      ],
      correctAnswer: '10 (car 1 + 2 + 3 + 4 = 10)',
      explanation: 'Tour 1 : s = 0 + 1 = 1, n = 2. Tour 2 : s = 1 + 2 = 3, n = 3. Tour 3 : s = 3 + 3 = 6, n = 4. Tour 4 (car n <= 4 est encore vrai) : s = 6 + 4 = 10, n = 5. À n = 5, la condition n <= 4 devient fausse et la boucle s\'arrête. s vaut 10.',
      steps: [
        '1. n=1: s=1, n devient 2.',
        '2. n=2: s=1+2=3, n devient 3.',
        '3. n=3: s=3+3=6, n devient 4.',
        '4. n=4: s=6+4=10, n devient 5.',
        '5. n=5: condition 5 <= 4 fausse, fin de la boucle. s = 10.'
      ]
    }
  ],

  'skill-1ere-cs-fonctions': [
    {
      id: 'q-1cs-fct-1',
      exerciseId: 'ex-1cs-fonctions',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Fonctions : Distinction essentielle entre print() et return',
      microConcept: 'L\'instruction return met fin à la fonction et transmet une valeur exploitable par le programme (stockable dans une variable). print() ne fait qu\'afficher du texte sur la console et renvoie None.',
      hint: 'Une fonction sans instruction return explicite renvoie la valeur spéciale None.',
      prompt: 'Soit la fonction suivante :\n```python\ndef carre(x):\n    print(x * x)\n\nresultat = carre(5)\n```\nQuelle est la valeur contenue dans la variable `resultat` ?',
      options: [
        'None',
        '25',
        '5',
        'Une erreur de syntaxe'
      ],
      correctAnswer: 'None',
      explanation: 'La fonction affiche bien 25 à l\'écran via `print()`, mais elle ne possède aucune instruction `return`. En Python, une fonction sans `return` renvoie automatiquement la valeur spéciale `None`. Pour que `resultat` contienne 25, il aurait fallu écrire `return x * x`.',
      steps: [
        '1. La fonction contient `print(x * x)` mais aucun mot-clé `return`.',
        '2. L\'affichage console montre 25, mais la valeur de retour retournée à l\'appelant est vide.',
        '3. La variable `resultat` reçoit la valeur `None`.'
      ]
    }
  ],

  'skill-1ere-cs-listes': [
    {
      id: 'q-1cs-list-1',
      exerciseId: 'ex-1cs-listes',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Listes : Indexation et méthode .append()',
      microConcept: 'Les listes en Python sont indexées à partir de 0. L\'indice -1 fait référence au dernier élément. La méthode .append(x) ajoute l\'élément x à la fin de la liste existante sans créer de nouvelle liste.',
      hint: 'Indice 0 est le premier élément, indice 1 le deuxième, etc.',
      prompt: 'Que renvoie `notes[1]` après ces instructions ?\n```python\nnotes = [12, 15, 18]\nnotes.append(20)\n```',
      options: [
        '15',
        '12',
        '18',
        '20'
      ],
      correctAnswer: '15',
      explanation: 'La liste initiale est `[12, 15, 18]`. Après `notes.append(20)`, la liste devient `[12, 15, 18, 20]`. L\'indice 0 correspond à 12, l\'indice 1 correspond à 15, l\'indice 2 à 18 et l\'indice 3 à 20. Donc `notes[1]` vaut 15.',
      steps: [
        '1. Liste après append : [12, 15, 18, 20].',
        '2. L\'indice commence à 0 : notes[0] = 12, notes[1] = 15.',
        '3. Le résultat est 15.'
      ]
    }
  ],

  // ---------------------------------------------------------------------------------------
  // TERMINALE : ALGORITHMES AVANCÉS ET STRUCTURES COMPLEXES
  // ---------------------------------------------------------------------------------------
  'skill-term-cs-structures-avancees': [
    {
      id: 'q-tcs-struct-1',
      exerciseId: 'ex-tcs-structures',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Structures de données : Dictionnaires vs Piles vs Files',
      microConcept: 'Un dictionnaire associe des clés uniques à des valeurs. Une Pile fonctionne selon le principe LIFO (Last In, First Out : dernier entré, premier sorti). Une File fonctionne selon le principe FIFO (First In, First Out : premier entré, premier sorti).',
      hint: 'Pensez à une file d\'attente au guichet (premier arrivé, premier servi) vs une pile d\'assiettes à laver.',
      prompt: 'Quelle structure de données est régie par le principe LIFO (Last In, First Out), où le dernier élément ajouté est le premier à être retiré ?',
      options: [
        'Une Pile (Stack)',
        'Une File (Queue)',
        'Un Dictionnaire (Dict)',
        'Un Arbre Binaire de Recherche'
      ],
      correctAnswer: 'Une Pile (Stack)',
      explanation: 'La Pile (Stack) est une structure LIFO : comme pour une pile d\'assiettes, on empile au sommet et on dépile depuis le sommet (le dernier posé est le premier retiré). À l\'inverse, la File (Queue) est FIFO (premier entré, premier sorti, comme dans une file d\'attente).',
      steps: [
        '1. LIFO signifie Last In, First Out.',
        '2. L\'analogie classique est la pile d\'assiettes.',
        '3. La structure correspondante est la Pile (Stack).'
      ]
    },
    {
      id: 'q-tcs-struct-2',
      exerciseId: 'ex-tcs-structures',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Dictionnaires : Accès par clé et recherche en temps constant',
      microConcept: 'Dans un dictionnaire Python, l\'accès à une valeur par sa clé d[cle] s\'effectue en temps moyen O(1) grâce à une table de hachage interne.',
      hint: 'Les clés d\'un dictionnaire doivent être immuables (comme des chaînes ou des entiers) et uniques.',
      prompt: 'Que produit l\'instruction suivante ?\n```python\ncapitale = {"Gabon": "Libreville", "Sénégal": "Dakar"}\nprint(capitale["Gabon"])\n```',
      options: [
        'Libreville',
        'Gabon',
        '("Gabon", "Libreville")',
        'Une erreur KeyError'
      ],
      correctAnswer: 'Libreville',
      explanation: 'Dans le dictionnaire, la clé `"Gabon"` est associée à la valeur `"Libreville"`. L\'accès `capitale["Gabon"]` renvoie directement la valeur correspondante, soit `"Libreville"`.',
      steps: [
        '1. Identifier la syntaxe dictionnaire {clé: valeur}.',
        '2. Repérer la clé recherchée : "Gabon".',
        '3. Sa valeur associée est "Libreville".'
      ]
    }
  ],

  'skill-term-cs-tris-recherche': [
    {
      id: 'q-tcs-tri-1',
      exerciseId: 'ex-tcs-algo',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Recherche dichotomique : Précondition indispensable',
      microConcept: 'La recherche dichotomique (binaire) permet de trouver un élément en temps logarithmique O(log n), mais elle exige impérativement que le tableau soit préalablement TRIÉ.',
      hint: 'Pour éliminer la moitié gauche ou droite en comparant avec le milieu, l\'ordre des éléments doit être garanti.',
      prompt: 'Quelle est la condition impérative pour pouvoir appliquer un algorithme de recherche dichotomique sur une liste ?',
      options: [
        'La liste doit être préalablement triée',
        'La liste ne doit contenir que des nombres entiers positifs',
        'La liste doit avoir une longueur paire',
        'La liste ne doit comporter aucun doublon'
      ],
      correctAnswer: 'La liste doit être préalablement triée',
      explanation: 'La recherche dichotomique repose sur la comparaison de l\'élément cherché avec l\'élément médian : si l\'élément cherché est plus petit, on cherche dans la moitié gauche, sinon dans la moitié droite. Ce raisonnement n\'est valide que si la liste est strictement ordonnée (triée).',
      steps: [
        '1. Rappeler le principe de la dichotomie : division par 2 de l\'espace de recherche.',
        '2. Pour savoir quelle moitié éliminer, les données doivent être ordonnées.',
        '3. La précondition est donc que la liste soit triée.'
      ]
    },
    {
      id: 'q-tcs-tri-2',
      exerciseId: 'ex-tcs-algo',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Algorithmes de Tri : Tri par sélection vs Tri par insertion',
      microConcept: 'Le tri par sélection cherche à chaque étape le minimum de la partie non triée et l\'échange avec le premier élément non trié. Le tri par insertion prend le premier élément non trié et l\'insère à sa place parmi les éléments déjà triés.',
      hint: 'Pensez à un joueur de cartes qui range sa main au fur et à mesure qu\'il reçoit chaque carte.',
      prompt: 'Quel algorithme de tri fonctionne en insérant chaque élément non trié à sa juste place dans la sous-liste déjà triée, de manière analogue à un joueur rangeant son jeu de cartes ?',
      options: [
        'Le tri par insertion',
        'Le tri par sélection',
        'Le tri à bulles',
        'Le tri rapide (Quicksort)'
      ],
      correctAnswer: 'Le tri par insertion',
      explanation: 'Le tri par insertion parcourt la liste de gauche à droite et insère chaque nouvel élément à sa position exacte parmi les éléments précédents déjà ordonnés, exactement comme lorsqu\'on organise sa main dans un jeu de cartes.',
      steps: [
        '1. Le tri par sélection sélectionne le minimum de la sous-liste restante.',
        '2. Le tri par insertion insère l\'élément courant dans la partie déjà triée (analogie des cartes).',
        '3. Il s\'agit donc du tri par insertion.'
      ]
    }
  ],

  'skill-term-cs-recursivite': [
    {
      id: 'q-tcs-rec-1',
      exerciseId: 'ex-tcs-recursivite',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Récursivité : Rôle obligatoire du cas de base',
      microConcept: 'Toute fonction récursive doit comporter au moins un cas de base (condition d\'arrêt sans appel récursif). Sans cas de base, la fonction s\'appelle indéfiniment jusqu\'à provoquer une erreur RecursionError (débordement de pile d\'appels).',
      hint: 'Pourquoi un algorithme récursif ne doit-il pas s\'appeler indéfiniment ?',
      prompt: 'Dans une fonction récursive, que se passe-t-il si l\'on oublie de programmer le cas de base (la condition d\'arrêt) ?',
      options: [
        'Le programme entre dans une récursion infinie et plante avec une erreur RecursionError (dépassement de pile)',
        'Le programme s\'arrête immédiatement en renvoyant 0',
        'Python convertit automatiquement la fonction en boucle for',
        'La fonction s\'exécute exactement 100 fois puis se termine'
      ],
      correctAnswer: 'Le programme entre dans une récursion infinie et plante avec une erreur RecursionError (dépassement de pile)',
      explanation: 'Sans cas de base, chaque appel de la fonction en engendre un autre sans jamais s\'arrêter. La mémoire allouée à la pile d\'appels (call stack) s\'emplit jusqu\'à atteindre la limite maximale fixée par le système, provoquant une exception `RecursionError: maximum recursion depth exceeded`.',
      steps: [
        '1. La récursivité repose sur la division en sous-problèmes jusqu\'à un cas trivial.',
        '2. L\'absence de condition d\'arrêt crée une cascade infinie d\'empilements de contextes d\'exécution.',
        '3. La pile sature et lève une `RecursionError`.'
      ]
    },
    {
      id: 'q-tcs-rec-2',
      exerciseId: 'ex-tcs-recursivite',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Récursivité : Déroulement de la factorielle',
      microConcept: 'La factorielle d\'un entier n >= 1 est définie récursivement par fact(0) = 1 (cas de base) et fact(n) = n * fact(n - 1) (cas récursif).',
      hint: 'Calculez fact(3) = 3 * fact(2) = 3 * (2 * fact(1)) = 3 * 2 * 1.',
      prompt: 'Que renvoie l\'appel `fact(4)` pour la fonction récursive suivante ?\n```python\ndef fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\n```',
      options: [
        '24',
        '10',
        '16',
        '12'
      ],
      correctAnswer: '24',
      explanation: 'fact(4) = 4 * fact(3) = 4 * (3 * fact(2)) = 4 * 3 * (2 * fact(1)) = 4 * 3 * 2 * 1 = 24. Le cas de base n <= 1 renvoie 1 et permet à la pile d\'appels de se dénouer en multipliant successivement les résultats.',
      steps: [
        '1. fact(4) = 4 * fact(3).',
        '2. fact(3) = 3 * fact(2) = 3 * 2 = 6.',
        '3. fact(4) = 4 * 6 = 24.'
      ]
    }
  ],

  'skill-term-cs-complexite-diviser-regner': [
    {
      id: 'q-tcs-comp-1',
      exerciseId: 'ex-tcs-complexite',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Complexité algorithmique : Efficacité de la dichotomie vs parcours linéaire',
      microConcept: 'La recherche séquentielle (linéaire) dans une liste de taille n a une complexité temporelle dans le pire des cas en O(n). La recherche dichotomique sur tableau trié a une complexité en O(log n) car la taille du problème est divisée par 2 à chaque étape.',
      hint: 'Si n = 1 000 000, log₂(1 000 000) vaut environ 20 étapes au lieu de 1 000 000 !',
      prompt: 'Quelle est la complexité temporelle dans le pire des cas de la recherche dichotomique dans un tableau trié de taille n ?',
      options: [
        'O(log n) - logarithmique',
        'O(n) - linéaire',
        'O(n²) - quadratique',
        'O(1) - constante'
      ],
      correctAnswer: 'O(log n) - logarithmique',
      explanation: 'À chaque comparaison, la recherche dichotomique divise l\'espace de recherche par deux (n/2, n/4, n/8...). Le nombre d\'étapes maximal pour atteindre un tableau de taille 1 est donc égal au logarithme en base 2 de n, noté O(log n). C\'est incomparablement plus rapide qu\'un parcours linéaire en O(n).',
      steps: [
        '1. La taille du tableau est divisée par 2 à chaque étape.',
        '2. L\'équation 2^k = n donne k = log₂(n) étapes.',
        '3. La complexité est donc O(log n).'
      ]
    },
    {
      id: 'q-tcs-comp-2',
      exerciseId: 'ex-tcs-complexite',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Paradigme « Diviser pour Régner » : Exemple du Tri Fusion',
      microConcept: 'La méthode « Diviser pour Régner » (Divide and Conquer) résout un problème en 3 étapes : Diviser (découper le problème en sous-problèmes plus petits), Régner (résoudre récursivement les sous-problèmes), et Combiner (fusionner les solutions des sous-problèmes pour obtenir la solution globale).',
      hint: 'Le tri fusion (Merge Sort) coupe la liste en deux moitiés, les trie récursivement, puis fusionne les deux listes triées en temps O(n log n).',
      prompt: 'Quelles sont les 3 étapes fondamentales de la stratégie algorithmique « Diviser pour Régner » ?',
      options: [
        'Diviser le problème en sous-problèmes, Régner en les résolvant récursivement, Combiner leurs solutions',
        'Compiler le code, Déboguer les erreurs, Exécuter le programme',
        'Initialiser les variables, Itérer avec une boucle, Afficher avec print',
        'Trier par sélection, Trier par insertion, Trier par fusion'
      ],
      correctAnswer: 'Diviser le problème en sous-problèmes, Régner en les résolvant récursivement, Combiner leurs solutions',
      explanation: 'Le paradigme "Diviser pour Régner" (utilisé par exemple dans le Tri Fusion ou la recherche dichotomique) consiste à : 1. Diviser le problème en sous-problèmes disjoints de même nature mais de plus petite taille ; 2. Régner en résolvant ces sous-problèmes récursivement ; 3. Combiner les sous-solutions pour former la solution finale.',
      steps: [
        '1. Étape 1 : Diviser (Divide).',
        '2. Étape 2 : Régner (Conquer).',
        '3. Étape 3 : Combiner (Combine).',
        '4. C\'est le triptyque classique des algorithmes efficaces comme le Tri Fusion.'
      ]
    }
  ]
};
