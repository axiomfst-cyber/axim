// =========================================================================================
// SYNTHÈSE OFFICIELLE DE LA PROGRESSION EN INFORMATIQUE & PROGRAMMATION PYTHON
// Gabon - Seconde, Première et Terminale
// =========================================================================================

export interface CSLevelProgression {
  level: string;
  badge: string;
  theme: string;
  description: string;
  modules: {
    title: string;
    description: string;
    syntaxExample: string;
    mathApplication: string;
    skillId: string;
  }[];
}

export const CS_PROGRESSION_DATA: CSLevelProgression[] = [
  {
    level: 'Seconde',
    badge: '🎓 Initiation à la Logique & Python',
    theme: 'Découvrir les bases de la programmation à travers des exemples simples appliqués aux mathématiques.',
    description: 'Comprendre le stockage des données en mémoire, manipuler les opérations de base et créer des programmes interactifs d\'entrées/sorties.',
    modules: [
      {
        title: 'Variables & Types Primitifs',
        description: 'Distinguer les entiers (int), les décimaux flottants (float), les chaînes (str) et les booléens (bool). Fonctions de conversion.',
        syntaxExample: 'age = 16          # int\nmoyenne = 14.75   # float\nnom = "Aïssatou"  # str\nadmis = True      # bool',
        mathApplication: 'Stocker les coefficients a, b, c d\'une équation du second degré.',
        skillId: 'skill-2nde-cs-variables-types'
      },
      {
        title: 'Affectation & Calculs',
        description: 'Utiliser = pour affecter. Calculs avec +, -, *, /, division entière //, reste modulo %, et puissances **.',
        syntaxExample: 'q = 17 // 5   # quotient = 3\nr = 17 % 5    # reste = 2\npuiss = 2 ** 3 # 8',
        mathApplication: 'Calculer l\'image d\'un nombre par une fonction f(x) = 2*x**2 - 3*x + 1.',
        skillId: 'skill-2nde-cs-affectation-calculs'
      },
      {
        title: 'Entrées & Sorties Interactives',
        description: 'Demander des données avec input() (toujours en str) et afficher des résultats clairs avec print() et les f-strings.',
        syntaxExample: 'r = float(input("Rayon : "))\naire = 3.14159 * r**2\nprint(f"Aire = {aire:.2f} cm²")',
        mathApplication: 'Programme interactif demandant le rayon d\'un cercle pour calculer son périmètre et sa surface.',
        skillId: 'skill-2nde-cs-entrees-sorties'
      },
      {
        title: 'Applications Mathématiques',
        description: 'Coordonnées de points dans le plan, calcul du milieu M et de la distance euclidienne AB.',
        syntaxExample: 'from math import sqrt\nxM = (xA + xB) / 2\nyM = (yA + yB) / 2\ndist = sqrt((xB - xA)**2 + (yB - yA)**2)',
        mathApplication: 'Vérifier par script si un triangle ABC est rectangle ou isocèle dans un repère orthonormé.',
        skillId: 'skill-2nde-cs-applications-maths'
      }
    ]
  },
  {
    level: 'Première',
    badge: '📐 Approfondissement & Modularité',
    theme: 'Structurer des programmes autonomes avec des conditions, des boucles, des fonctions et des listes.',
    description: 'Automatiser des calculs itératifs, factoriser son code dans des fonctions pures et stocker des collections séquentielles.',
    modules: [
      {
        title: 'Les Conditions (if / elif / else)',
        description: 'Faire des choix logiques avec des opérateurs relationnels (==, !=, <, >) et logiques (and, or, not).',
        syntaxExample: 'delta = b**2 - 4*a*c\nif delta > 0:\n    print("Deux racines réelles")\nelif delta == 0:\n    print("Une racine double")\nelse:\n    print("Aucune racine réelle")',
        mathApplication: 'Étude complète de la nature des racines d\'un trinôme ax² + bx + c.',
        skillId: 'skill-1ere-cs-conditions'
      },
      {
        title: 'Les Boucles (for & while)',
        description: 'Boucle bornée for i in range(...) pour parcourir un intervalle, boucle indéfinie while pour attendre un seuil.',
        syntaxExample: '# Somme des n premiers carrés\ntotal = 0\nfor i in range(1, n + 1):\n    total += i**2\n\n# Recherche de seuil\nu = 1000\nannee = 0\nwhile u < 2000:\n    u = u * 1.05\n    annee += 1',
        mathApplication: 'Calculs de sommes de termes de suites arithmétiques/géométriques et détermination de seuil.',
        skillId: 'skill-1ere-cs-boucles'
      },
      {
        title: 'Les Fonctions & Modularité',
        description: 'Créer des blocs réutilisables avec def. Paramètres d\'entrée et valeur de retour avec return (ne pas confondre avec print).',
        syntaxExample: 'def image_affine(a, b, x):\n    """Renvoie f(x) = ax + b"""\n    return a * x + b\n\ny = image_affine(3, -5, 4)  # 7',
        mathApplication: 'Encapsuler les calculs de dérivées approchées ou de coefficients directeurs de sécantes.',
        skillId: 'skill-1ere-cs-fonctions'
      },
      {
        title: 'Les Listes en Python',
        description: 'Structure séquentielle mutable : indexation de 0 à n-1, indices négatifs, .append(), .pop(), parcours de listes.',
        syntaxExample: 'notes = [12, 14, 16]\nnotes.append(18)\nmoyenne = sum(notes) / len(notes)',
        mathApplication: 'Calcul de statistiques descriptives (moyenne pondérée, variance, médiane d\'une série de valeurs).',
        skillId: 'skill-1ere-cs-listes'
      }
    ]
  },
  {
    level: 'Terminale',
    badge: '🚀 Algorithmes Avancés & Structures Complexes',
    theme: 'Préparer aux études supérieures avec l\'étude de la performance, des structures abstraites et de la récursivité.',
    description: 'Maîtriser les dictionnaires, piles, files, algorithmes de tri, recherche dichotomique, récursivité et diviser pour régner.',
    modules: [
      {
        title: 'Structures de Données Avancées',
        description: 'Dictionnaires clés-valeurs O(1), tuples immuables ( ), piles LIFO (Last In First Out) et files FIFO (First In First Out).',
        syntaxExample: '# Dictionnaire\nfreq = {"A": 12, "C": 8, "G": 15}\n\n# Pile LIFO\npile = []\npile.append("A") # Empiler\nsommet = pile.pop() # Dépiler',
        mathApplication: 'Comptage de fréquences statistiques et modélisation de parcours dans un graphe.',
        skillId: 'skill-term-cs-structures-avancees'
      },
      {
        title: 'Algorithmes de Tri & Recherche Dichotomique',
        description: 'Tri par sélection du minimum, tri par insertion de cartes. Recherche dichotomique sur tableau trié en temps O(log n).',
        syntaxExample: 'def dicho(tab, cible):\n    g, d = 0, len(tab) - 1\n    while g <= d:\n        m = (g + d) // 2\n        if tab[m] == cible:\n            return m\n        elif tab[m] < cible:\n            g = m + 1\n        else:\n            d = m - 1\n    return -1',
        mathApplication: 'Résolution numérique d\'équations f(x) = 0 par balayage dichotomique (théorème des valeurs intermédiaires).',
        skillId: 'skill-term-cs-tris-recherche'
      },
      {
        title: 'La Récursivité',
        description: 'Fonctions s\'appelant elles-mêmes : cas de base obligatoire (condition d\'arrêt) et cas récursif. Pile d\'appels.',
        syntaxExample: 'def fact(n):\n    if n <= 1:\n        return 1   # Cas de base\n    return n * fact(n - 1) # Appel récursif',
        mathApplication: 'Calcul du terme d\'une suite définie par récurrence un+1 = f(un), calcul du pgcd (algorithme d\'Euclide récursif).',
        skillId: 'skill-term-cs-recursivite'
      },
      {
        title: 'Complexité & « Diviser pour Régner »',
        description: 'Ordre de grandeur Grand O (O(1), O(log n), O(n), O(n²)). Stratégie en 3 temps : Diviser, Régner, Combiner (Tri Fusion).',
        syntaxExample: '# Tri fusion (Merge Sort)\n# Division en deux sous-tableaux récursifs\n# Fusion ordonnée des sous-solutions\n# Complexité optimale : O(n log n)',
        mathApplication: 'Analyse comparative de l\'efficacité algorithmique pour de très grands volumes de données.',
        skillId: 'skill-term-cs-complexite-diviser-regner'
      }
    ]
  }
];
