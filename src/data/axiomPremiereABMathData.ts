import { SkillNode } from '../types';

// =====================================================================
// PROGRAMME ANNUEL OFFICIEL DE MATHÉMATIQUES : 1ère A1 & 1ère B (GABON)
// 29 Séquences réparties sur les 3 Trimestres de l'année scolaire
// =====================================================================

export interface MathSequenceDetail {
  sequenceNumber: number;
  trimestre: 1 | 2 | 3;
  title: string;
  domain: 'Algèbre' | 'Analyse' | 'Probabilités & Dénombrement' | 'Statistiques' | 'Économie & Pourcentages';
  contents: string[];
  keyFormulas: string[];
  competencies: string[];
  skillId: string;
}

export const PREMIERE_AB_MATH_SEQUENCES: MathSequenceDetail[] = [
  // -------------------------------------------------------------------
  // 🍂 1er Trimestre (Séquences 1 à 12)
  // -------------------------------------------------------------------
  {
    sequenceNumber: 1,
    trimestre: 1,
    title: 'Équations, fonctions polynômes du second degré (partie A)',
    domain: 'Algèbre',
    contents: [
      'Fonction polynôme du second degré sous forme factorisée : a(x - x₁)(x - x₂)',
      'Racines et signe du polynôme sous forme factorisée',
      'Expression de la somme des racines : S = x₁ + x₂ = -b/a',
      'Expression du produit des racines : P = x₁ · x₂ = c/a',
      'Forme canonique : f(x) = a(x - α)² + β avec α = -b/(2a) et β = f(α)'
    ],
    keyFormulas: [
      'f(x) = a(x - α)² + β avec α = -b/(2a)',
      'S = x₁ + x₂ = -b/a',
      'P = x₁ · x₂ = c/a',
      'x² - Sx + P = 0'
    ],
    competencies: [
      'Passer de la forme développée à la forme canonique',
      'Déterminer deux nombres connaissant leur somme et leur produit',
      'Dresser le tableau de signes d\'un polynôme factorisé'
    ],
    skillId: 'skill-1ab-m-seq1-second-degre-a'
  },
  {
    sequenceNumber: 2,
    trimestre: 1,
    title: 'Dénombrement et Probabilités (partie A)',
    domain: 'Probabilités & Dénombrement',
    contents: [
      'Vocabulaire ensembliste : univers, sous-ensembles, intersection, réunion, complémentaire',
      'Cardinal d\'une réunion disjointe et générale : Card(A ∪ B) = Card(A) + Card(B) - Card(A ∩ B)',
      'Cardinal d\'un produit cartésien : Card(A × B) = Card(A) × Card(B)',
      'Cardinal d\'un ensemble produit à p dimensions : Card(A^p) = [Card(A)]^p',
      'Factorielle d\'un entier naturel n : n! = n × (n-1) × ... × 1, convention 0! = 1'
    ],
    keyFormulas: [
      'Card(A ∪ B) = Card(A) + Card(B) - Card(A ∩ B)',
      'Card(A × B) = Card(A) × Card(B)',
      'Card(A^p) = n^p avec n = Card(A)',
      'n! = n × (n - 1) × ... × 1 ; 0! = 1'
    ],
    competencies: [
      'Manipuler les ensembles finis et calculer des cardinaux',
      'Simplifier des expressions contenant des factorielles',
      'Dénombrer les éléments d\'un produit cartésien'
    ],
    skillId: 'skill-1ab-m-seq2-denombrement-a'
  },
  {
    sequenceNumber: 3,
    trimestre: 1,
    title: 'Équations, fonctions polynômes du second degré (partie B)',
    domain: 'Algèbre',
    contents: [
      'Discriminant Δ = b² - 4ac d\'un trinôme ax² + bx + c',
      'Résolution dans ℝ de l\'équation ax² + bx + c = 0 selon le signe de Δ',
      'Factorisation complète du trinôme (deux racines, racine double, aucune racine réelle)',
      'Règle du signe du trinôme : signe de "a" à l\'extérieur des racines',
      'Parabole représentative : axe de symétrie x = -b/(2a), sommet S(-b/(2a) ; -Δ/(4a)), concavité'
    ],
    keyFormulas: [
      'Δ = b² - 4ac',
      'Si Δ > 0 : x₁,₂ = (-b ± √Δ) / (2a) et f(x) = a(x - x₁)(x - x₂)',
      'Si Δ = 0 : x₀ = -b / (2a) et f(x) = a(x - x₀)²',
      'Sommet de la parabole : S(-b/(2a) ; f(-b/(2a)))'
    ],
    competencies: [
      'Résoudre des équations et inéquations du second degré',
      'Construire la parabole avec son sommet et son axe de symétrie',
      'Interpréter graphiquement le signe d\'un trinôme'
    ],
    skillId: 'skill-1ab-m-seq3-second-degre-b'
  },
  {
    sequenceNumber: 4,
    trimestre: 1,
    title: 'Pourcentages et Évolutions',
    domain: 'Économie & Pourcentages',
    contents: [
      'Taux d\'évolution relatif : t = (V_final - V_initial) / V_initial',
      'Coefficient multiplicateur CM = 1 + t (hausse si t > 0, baisse si t < 0)',
      'Calcul de la valeur finale V_final = V_initial × CM et valeur initiale V_initial = V_final / CM',
      'Évolutions successives : coefficient multiplicateur global CM_global = CM₁ × CM₂ × ... × CM_k',
      'Taux d\'évolution global T_global = CM_global - 1',
      'Taux d\'évolution réciproque CM_reciproque = 1 / CM'
    ],
    keyFormulas: [
      'CM = 1 + t (avec t en écriture décimale)',
      'V_F = V_I × CM ⇔ V_I = V_F / CM',
      'CM_global = CM₁ × CM₂ × ... × CM_n',
      'CM_reciproque = 1 / CM ⇔ t_reciproque = (1 / CM) - 1'
    ],
    competencies: [
      'Calculer un coefficient multiplicateur associé à une hausse ou une baisse',
      'Déterminer le taux d\'évolution global suite à plusieurs variations successives',
      'Calculer le taux d\'évolution réciproque pour revenir à la valeur initiale'
    ],
    skillId: 'skill-1ab-m-seq4-pourcentages'
  },
  {
    sequenceNumber: 5,
    trimestre: 1,
    title: 'Généralités sur les fonctions (Partie A)',
    domain: 'Analyse',
    contents: [
      'Ensemble de définition D_f : contraintes de dénominateur non nul et radicande positif ou nul',
      'Extremums relatifs : maximum local, minimum local sur un intervalle I',
      'Approche intuitive de la notion de limite finie et limite infinie en un point et en ±∞',
      'Limites des fonctions de référence : x, x², x³, 1/x, √x'
    ],
    keyFormulas: [
      'D_f : dénominateur ≠ 0 et radicande sous √ ≥ 0',
      'M est un maximum local de f en x₀ si f(x) ≤ f(x₀) sur un intervalle centré en x₀',
      'lim_{x → +∞} x² = +∞ ; lim_{x → +∞} (1/x) = 0 ; lim_{x → 0⁺} (1/x) = +∞'
    ],
    competencies: [
      'Déterminer l\'ensemble de définition d\'une fonction rationnelle ou irrationnelle',
      'Identifier graphiquement les extremums locaux',
      'Énoncer les limites fondamentales des fonctions usuelles'
    ],
    skillId: 'skill-1ab-m-seq5-fonctions-a'
  },
  {
    sequenceNumber: 6,
    trimestre: 1,
    title: 'Suites numériques (Partie A)',
    domain: 'Analyse',
    contents: [
      'Définition d\'une suite numérique (u_n)_{n ∈ ℕ} comme application de ℕ dans ℝ',
      'Modes de génération : formule explicite u_n = f(n)',
      'Modes de génération : relation de récurrence u_{n+1} = g(u_n) avec premier terme u₀',
      'Calcul des premiers termes d\'une suite',
      'Représentation graphique des termes d\'une suite sur un axe ou dans le repère'
    ],
    keyFormulas: [
      'Forme explicite : u_n = f(n)',
      'Forme récurrente : u_{n+1} = g(u_n) avec u₀ donné',
      'u₁ = g(u₀), u₂ = g(u₁)...'
    ],
    competencies: [
      'Calculer les termes successifs d\'une suite explicite ou récurrente',
      'Distinguer le terme u_n du rang n',
      'Représenter graphiquement les termes d\'une suite récurrente à l\'aide de la droite y = x'
    ],
    skillId: 'skill-1ab-m-seq6-suites-a'
  },
  {
    sequenceNumber: 7,
    trimestre: 1,
    title: 'Généralités sur les fonctions (Partie B)',
    domain: 'Analyse',
    contents: [
      'Opérations sur les limites finies et infinies : somme, produit, quotient',
      'Formes indéterminées classiques : « +∞ - ∞ », « 0 × ∞ », « 0/0 », « ∞/∞ »',
      'Méthodes élémentaires de levée d\'indétermination (factorisation par le terme prépondérant)',
      'Définition intuitive de la continuité d\'une fonction en un point x₀ : lim_{x → x₀} f(x) = f(x₀)',
      'Interprétation graphique de la continuité : tracé de la courbe sans lever le crayon'
    ],
    keyFormulas: [
      'Continuité en x₀ ⇔ lim_{x → x₀} f(x) = f(x₀)',
      'Formes Indéterminées (F.I.) : [∞ - ∞], [0 × ∞], [0/0], [∞/∞]',
      'Règle du quotient : lim (L / ±∞) = 0 ; lim (L / 0⁺) = ±∞ (pour L ≠ 0)'
    ],
    competencies: [
      'Calculer la limite d\'une somme, d\'un produit ou d\'un quotient de fonctions',
      'Lever une forme indéterminée rationnelle en factorisant',
      'Justifier la continuité d\'une fonction en un point'
    ],
    skillId: 'skill-1ab-m-seq7-fonctions-b'
  },
  {
    sequenceNumber: 8,
    trimestre: 1,
    title: 'Dénombrement et Probabilités (partie B)',
    domain: 'Probabilités & Dénombrement',
    contents: [
      'Listes à p éléments (p-listes) d\'un ensemble à n éléments : nombre n^p',
      'p-listes d\'éléments deux à deux distincts (arrangements) : A_n^p = n! / (n - p)!',
      'Permutations d\'un ensemble à n éléments : n! = A_n^n',
      'Combinaisons : sous-ensembles à p éléments parmi n, C_n^p = binom(n, p) = n! / [p!(n - p)!]',
      'Propriétés des combinaisons : binom(n, 0) = 1, binom(n, n) = 1, binom(n, p) = binom(n, n - p)',
      'Formule de Pascal : binom(n, p) = binom(n-1, p-1) + binom(n-1, p) et triangle de Pascal',
      'Formule du binôme de Newton : (a + b)^n = sum_{k=0}^n binom(n, k) a^{n-k} b^k'
    ],
    keyFormulas: [
      'p-listes : n^p (ordre compte, répétition possible)',
      'Arrangements : A_n^p = n! / (n - p)! = n × (n-1) × ... × (n - p + 1) (ordre compte, sans répétition)',
      'Permutations : n! (ordre de n objets distincts)',
      'Combinaisons : binom(n, p) = n! / [p!(n - p)!] (ordre ne compte pas)',
      'binom(n, p) = binom(n-1, p-1) + binom(n-1, p)',
      '(a + b)² = a² + 2ab + b² ; (a + b)³ = a³ + 3a²b + 3ab² + b³'
    ],
    competencies: [
      'Choisir l\'outil de dénombrement adapté (p-liste, arrangement ou combinaison)',
      'Construire le triangle de Pascal pour développer une puissance entière',
      'Résoudre des problèmes concrets de codage, de tirages et d\'ordonnancement'
    ],
    skillId: 'skill-1ab-m-seq8-denombrement-b'
  },
  {
    sequenceNumber: 9,
    trimestre: 1,
    title: 'Suites numériques (Partie B)',
    domain: 'Analyse',
    contents: [
      'Sens de variation d\'une suite : suite croissante (u_{n+1} ≥ u_n), décroissante (u_{n+1} ≤ u_n), constante',
      'Méthodes d\'étude du sens de variation : signe de la différence u_{n+1} - u_n',
      'Méthode du quotient u_{n+1} / u_n comparé à 1 pour une suite à termes strictement positifs',
      'Méthode fonctionnelle pour u_n = f(n) à partir des variations de f sur [0, +∞[',
      'Introduction intuitive de la notion de limite finie (convergence) ou infinie (divergence) d\'une suite'
    ],
    keyFormulas: [
      'Croissante ⇔ u_{n+1} - u_n ≥ 0 pour tout n ∈ ℕ',
      'Décroissante ⇔ u_{n+1} - u_n ≤ 0 pour tout n ∈ ℕ',
      'Si u_n > 0 : u_{n+1} / u_n ≥ 1 ⇔ suite croissante',
      'lim_{n → +∞} (1/n) = 0 ; lim_{n → +∞} n² = +∞'
    ],
    competencies: [
      'Étudier le sens de variation d\'une suite par le calcul de u_{n+1} - u_n',
      'Conjecturer graphiquement ou numériquement la limite d\'une suite',
      'Démontrer la monotonie d\'une suite issue d\'une fonction'
    ],
    skillId: 'skill-1ab-m-seq9-suites-b'
  },
  {
    sequenceNumber: 10,
    trimestre: 1,
    title: 'Statistiques et Fluctuation d\'Échantillonnage (partie A)',
    domain: 'Statistiques',
    contents: [
      'Organisation des données : effectifs, fréquences, effectifs et fréquences cumulés croissants',
      'Représentations graphiques : histogramme (cas d\'amplitudes égales et inégales), polygone des fréquences, courbe cumulative',
      'Classes modales et mode',
      'Caractéristiques de position : moyenne pondérée x̄, médiane Me, quartiles Q₁ et Q₃',
      'Caractéristiques de dispersion : variance V = (1/N) ∑ n_i (x_i - x̄)², écart-type σ = √V'
    ],
    keyFormulas: [
      'x̄ = (∑ n_i x_i) / N',
      'V = (1/N) ∑ n_i x_i² - x̄² (formule de König)',
      'σ = √V',
      'Médiane Me : valeur partageant la série ordonnée en deux sous-groupes de 50%'
    ],
    competencies: [
      'Construire un histogramme à pas constant ou variable',
      'Déterminer la médiane graphiquement via la courbe cumulative',
      'Calculer la moyenne, la variance et l\'écart-type d\'une série statistique'
    ],
    skillId: 'skill-1ab-m-seq10-statistiques-a'
  },
  {
    sequenceNumber: 11,
    trimestre: 1,
    title: 'Dérivation (partie A)',
    domain: 'Analyse',
    contents: [
      'Taux d\'accroissement de f entre x₀ et x₀ + h : [f(x₀ + h) - f(x₀)] / h',
      'Nombre dérivé f\'(x₀) défini comme limite finie quand h tend vers 0 du taux d\'accroissement',
      'Interprétation géométrique : coefficient directeur de la tangente à la courbe C_f au point A(x₀, f(x₀))',
      'Équation de la tangente : y = f\'(x₀)(x - x₀) + f(x₀)',
      'Approximation affine d\'une fonction au voisinage de x₀ : f(x₀ + h) ≈ f(x₀) + h f\'(x₀)'
    ],
    keyFormulas: [
      'f\'(x₀) = lim_{h → 0} [f(x₀ + h) - f(x₀)] / h',
      'Tangente T : y = f\'(x₀)(x - x₀) + f(x₀)',
      'Approximation affine : f(x₀ + h) ≈ f(x₀) + h · f\'(x₀) pour h proche de 0'
    ],
    competencies: [
      'Calculer le nombre dérivé à l\'aide de la définition de la limite',
      'Déterminer l\'équation réduite de la tangente en un point donné',
      'Utiliser l\'approximation affine pour estimer des valeurs proches'
    ],
    skillId: 'skill-1ab-m-seq11-derivation-a'
  },
  {
    sequenceNumber: 12,
    trimestre: 1,
    title: 'Systèmes linéaires',
    domain: 'Algèbre',
    contents: [
      'Systèmes de 3 équations linéaires à 2 inconnues dans ℝ²',
      'Méthodes de résolution : substitution, combinaison linéaire, méthode du pivot',
      'Interprétation géométrique : intersection de 3 droites du plan (droites concourantes, parallèles ou sécantes deux à deux)',
      'Systèmes de 3 inéquations linéaires à 1 inconnue dans ℝ',
      'Résolution par intersection d\'intervalles sur la droite graduée'
    ],
    keyFormulas: [
      'Système dans ℝ² : { a₁x + b₁y = c₁ ; a₂x + b₂y = c₂ ; a₃x + b₃y = c₃ }',
      'Résolution : résoudre le sous-système de 2 équations puis vérifier dans la 3ème',
      'Système d\'inéquations dans ℝ : S = I₁ ∩ I₂ ∩ I₃'
    ],
    competencies: [
      'Résoudre un système de 3 équations à 2 inconnues et vérifier sa compatibilité',
      'Interpréter graphiquement l\'existence d\'un point de concours',
      'Résoudre un système d\'inéquations à une inconnue par intersection d\'intervalles'
    ],
    skillId: 'skill-1ab-m-seq12-systemes-lineaires'
  },

  // -------------------------------------------------------------------
  // ❄️ 2ème Trimestre (Séquences 13 à 19)
  // -------------------------------------------------------------------
  {
    sequenceNumber: 13,
    trimestre: 2,
    title: 'Suites arithmétiques',
    domain: 'Analyse',
    contents: [
      'Définition d\'une suite arithmétique : u_{n+1} = u_n + r avec r ∈ ℝ (la raison)',
      'Propriété caractéristique : u_{n+1} - u_n = r (constante)',
      'Expression du terme général : u_n = u₀ + n r ou u_n = u_p + (n - p)r',
      'Sens de variation : strictement croissante si r > 0, décroissante si r < 0, constante si r = 0',
      'Somme de termes consécutifs : S = (nombre de termes) × [(1er terme + dernier terme) / 2]',
      'Somme des n premiers entiers naturels : 1 + 2 + ... + n = n(n + 1) / 2'
    ],
    keyFormulas: [
      'u_{n+1} = u_n + r',
      'u_n = u₀ + n·r ⇔ u_n = u_p + (n - p)·r',
      'S_n = (n + 1) · (u₀ + u_n) / 2',
      '1 + 2 + 3 + ... + n = n(n + 1) / 2'
    ],
    competencies: [
      'Reconnaître une suite arithmétique et identifier sa raison',
      'Calculer n\'importe quel terme d\'une suite arithmétique',
      'Calculer la somme de termes consécutifs d\'une suite arithmétique'
    ],
    skillId: 'skill-1ab-m-seq13-suites-arithmetiques'
  },
  {
    sequenceNumber: 14,
    trimestre: 2,
    title: 'Dérivation (partie B)',
    domain: 'Analyse',
    contents: [
      'Fonction dérivable en un point x₀ : existence de f\'(x₀)',
      'Lecture graphique du nombre dérivé : coefficient directeur de la tangente ou des demi-tangentes',
      'Notion de fonction dérivée f\' sur un intervalle I',
      'Domaine de dérivabilité d\'une fonction usuelle'
    ],
    keyFormulas: [
      'f\'(x₀) = (y_B - y_A) / (x_B - x_A) sur la tangente T',
      'Tangente horizontale ⇔ f\'(x₀) = 0',
      'f dérivable sur I si f est dérivable en tout point x ∈ I'
    ],
    competencies: [
      'Lire graphiquement f\'(x₀) à partir du tracé d\'une tangente',
      'Tracer la tangente en un point connaissant f\'(x₀)',
      'Définir la fonction dérivée f\' associée à une fonction f'
    ],
    skillId: 'skill-1ab-m-seq14-derivation-b'
  },
  {
    sequenceNumber: 15,
    trimestre: 2,
    title: 'Généralités sur les fonctions (Partie C)',
    domain: 'Analyse',
    contents: [
      'Limites à l\'infini d\'une fonction polynôme : égale à la limite de son terme de plus haut degré',
      'Limites à l\'infini d\'une fonction rationnelle : égale à la limite du quotient de ses termes de plus haut degré',
      'Asymptotes horizontales : droite d\'équation y = L lorsque lim_{x → ±∞} f(x) = L',
      'Asymptotes verticales : droite d\'équation x = x₀ lorsque lim_{x → x₀} f(x) = ±∞'
    ],
    keyFormulas: [
      'Polynôme en ±∞ : lim (a_n x^n + ... + a₀) = lim (a_n x^n)',
      'Rationnelle en ±∞ : lim [(a_n x^n + ...) / (b_m x^m + ...)] = lim [(a_n x^n) / (b_m x^m)]',
      'Asymptote horizontale : y = L ⇔ lim_{x → ±∞} f(x) = L',
      'Asymptote verticale : x = a ⇔ lim_{x → a} f(x) = ±∞'
    ],
    competencies: [
      'Calculer les limites aux bornes d\'une fonction rationnelle ou polynomiale',
      'Déterminer les équations des asymptotes horizontales et verticales',
      'Interpréter graphiquement la présence d\'asymptotes'
    ],
    skillId: 'skill-1ab-m-seq15-fonctions-c'
  },
  {
    sequenceNumber: 16,
    trimestre: 2,
    title: 'Statistiques et Fluctuation d\'Échantillonnage (partie B)',
    domain: 'Statistiques',
    contents: [
      'Échantillon aléatoire de taille n prélevé dans une population où la proportion d\'un caractère est p',
      'Conditions de validité : n ≥ 30, np ≥ 5, n(1 - p) ≥ 5',
      'Intervalle de fluctuation asymptotique d\'une fréquence au seuil de 95 % : I_F = [p - 1.96√(p(1-p)/n) ; p + 1.96√(p(1-p)/n)] ou formule simplifiée [p - 1/√n ; p + 1/√n]',
      'Prise de décision sur un échantillon : acceptation ou rejet de l\'hypothèse de conformité au seuil de 5%'
    ],
    keyFormulas: [
      'I_F = [p - 1/√n ; p + 1/√n] (seuil 95%, conditions n ≥ 30, 0.2 ≤ p ≤ 0.8)',
      'I_F = [p - 1.96 · √(p(1 - p) / n) ; p + 1.96 · √(p(1 - p) / n)]',
      'Règle de décision : si la fréquence observée f ∈ I_F, on ne rejette pas l\'hypothèse'
    ],
    competencies: [
      'Vérifier les conditions d\'application d\'un intervalle de fluctuation',
      'Calculer les bornes de l\'intervalle de fluctuation à 95%',
      'Prendre une décision argumentée sur la représentativité d\'un échantillon'
    ],
    skillId: 'skill-1ab-m-seq16-statistiques-b'
  },
  {
    sequenceNumber: 17,
    trimestre: 2,
    title: 'Dénombrement et Probabilités (partie C)',
    domain: 'Probabilités & Dénombrement',
    contents: [
      'Tirages successifs avec remise de p éléments parmi n : p-listes, nombre n^p (l\'ordre compte, répétitions permises)',
      'Tirages successifs sans remise de p éléments parmi n : arrangements A_n^p = n! / (n - p)! (l\'ordre compte, pas de répétition)',
      'Tirages simultanés de p éléments parmi n : combinaisons binom(n, p) = n! / [p!(n - p)!] (l\'ordre ne compte pas, pas de répétition)',
      'Comparaison méthodique des trois modes de tirage sur des modèles d\'urnes'
    ],
    keyFormulas: [
      'Avec remise : n^p',
      'Sans remise (successif) : A_n^p = n! / (n - p)!',
      'Simultané : binom(n, p) = n! / [p!(n - p)!]',
      'A_n^p = p! · binom(n, p)'
    ],
    competencies: [
      'Identifier la nature du tirage décrit dans un énoncé probabiliste',
      'Calculer le nombre d\'issues possibles selon le type de tirage',
      'Établir l\'univers Ω et son cardinal dans les trois configurations'
    ],
    skillId: 'skill-1ab-m-seq17-denombrement-c'
  },
  {
    sequenceNumber: 18,
    trimestre: 2,
    title: 'Suites géométriques',
    domain: 'Analyse',
    contents: [
      'Définition d\'une suite géométrique : u_{n+1} = q × u_n avec q ∈ ℝ* (la raison)',
      'Expression du terme général : u_n = u₀ × q^n ou u_n = u_p × q^{n - p}',
      'Lien avec les évolutions successives à taux constant t : q = 1 + t (capitalisation, démographie, dépréciation)',
      'Sens de variation d\'une suite géométrique selon les signes de u₀ et de q',
      'Calcul de la somme des puissances : 1 + q + q² + ... + q^n = (1 - q^{n+1}) / (1 - q) pour q ≠ 1',
      'Somme des termes consécutifs : S = (1er terme) × [(1 - q^{nb termes}) / (1 - q)]'
    ],
    keyFormulas: [
      'u_{n+1} = q · u_n',
      'u_n = u₀ · q^n ⇔ u_n = u_p · q^{n - p}',
      '1 + q + q² + ... + q^n = (1 - q^{n+1}) / (1 - q) (q ≠ 1)',
      'S_n = u₀ · [(1 - q^{n+1}) / (1 - q)]'
    ],
    competencies: [
      'Modéliser une situation d\'évolution à taux constant par une suite géométrique',
      'Calculer un terme de rang quelconque d\'une suite géométrique',
      'Calculer la somme de termes consécutifs d\'une suite géométrique'
    ],
    skillId: 'skill-1ab-m-seq18-suites-geometriques'
  },
  {
    sequenceNumber: 19,
    trimestre: 2,
    title: 'Dérivation (partie C)',
    domain: 'Analyse',
    contents: [
      'Dérivées des fonctions usuelles : constante (k)\' = 0, affine (mx + p)\' = m, (x²)\' = 2x, (x³)\' = 3x², (1/x)\' = -1/x², (√x)\' = 1/(2√x)',
      'Opérations sur les fonctions dérivables : somme (u + v)\' = u\' + v\'',
      'Multiplication par une constante : (k · u)\' = k · u\'',
      'Dérivée d\'un produit : (u · v)\' = u\'v + uv\'',
      'Dérivée de l\'inverse : (1/v)\' = -v\' / v²',
      'Dérivée d\'un quotient : (u / v)\' = (u\'v - uv\') / v²'
    ],
    keyFormulas: [
      '(u + v)\' = u\' + v\'',
      '(k · u)\' = k · u\'',
      '(u · v)\' = u\'v + uv\'',
      '(u / v)\' = (u\'v - uv\') / v²',
      '(1/v)\' = -v\' / v²',
      '(x^n)\' = n x^{n-1} pour n ∈ ℕ*'
    ],
    competencies: [
      'Calculer la dérivée d\'une fonction polynomiale',
      'Appliquer la formule du produit et du quotient de deux fonctions dérivables',
      'Simplifier l\'expression de la dérivée pour préparer l\'étude de son signe'
    ],
    skillId: 'skill-1ab-m-seq19-derivation-c'
  },

  // -------------------------------------------------------------------
  // 🌱 3ème Trimestre (Séquences 20 à 29)
  // -------------------------------------------------------------------
  {
    sequenceNumber: 20,
    trimestre: 3,
    title: 'Dénombrement et Probabilités (partie D)',
    domain: 'Probabilités & Dénombrement',
    contents: [
      'Applications aux probabilités : univers fini Ω, événements élémentaires',
      'Situation d\'équiprobabilité : chaque issue a la même probabilité 1 / Card(Ω)',
      'Formule fondamentale : P(A) = Card(A) / Card(Ω) = (nombre de cas favorables) / (nombre de cas possibles)',
      'Propriétés des probabilités : 0 ≤ P(A) ≤ 1, P(∅) = 0, P(Ω) = 1',
      'Événement contraire : P(Ā) = 1 - P(A)',
      'Réunion d\'événements : P(A ∪ B) = P(A) + P(B) - P(A ∩ B)'
    ],
    keyFormulas: [
      'Équiprobabilité : P(A) = Card(A) / Card(Ω)',
      'P(Ā) = 1 - P(A)',
      'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
      'Si A et B sont disjoints (incompatibles) : P(A ∪ B) = P(A) + P(B)'
    ],
    competencies: [
      'Calculer la probabilité d\'un événement en situation d\'équiprobabilité par dénombrement',
      'Utiliser la probabilité de l\'événement contraire pour simplifier un calcul',
      'Appliquer la formule de la réunion d\'événements'
    ],
    skillId: 'skill-1ab-m-seq20-denombrement-d'
  },
  {
    sequenceNumber: 21,
    trimestre: 3,
    title: 'Dérivation (partie D)',
    domain: 'Analyse',
    contents: [
      'Théorème fondamental liant le sens de variation d\'une fonction dérivable au signe de sa dérivée sur un intervalle I',
      'f\'(x) > 0 sur I (sauf en un nombre fini de points où elle s\'annule) ⇔ f est strictement croissante sur I',
      'f\'(x) < 0 sur I ⇔ f est strictement décroissante sur I',
      'Caractérisation des fonctions constantes : f\'(x) = 0 pour tout x ∈ I ⇔ f est constante sur I',
      'Élaboration du tableau de variations complet avec limites et valeurs remarquables'
    ],
    keyFormulas: [
      'f\'(x) ≥ 0 sur I ⇔ f est croissante sur I',
      'f\'(x) ≤ 0 sur I ⇔ f est décroissante sur I',
      'f\'(x) = 0 sur I ⇔ f est constante sur I'
    ],
    competencies: [
      'Étudier le signe de la dérivée f\'(x)',
      'Dresser le tableau de variations complet d\'une fonction',
      'Déduire les intervalles de croissance et de décroissance'
    ],
    skillId: 'skill-1ab-m-seq21-derivation-d'
  },
  {
    sequenceNumber: 22,
    trimestre: 3,
    title: 'Dénombrement et Probabilités (partie E)',
    domain: 'Probabilités & Dénombrement',
    contents: [
      'Définition de la probabilité conditionnelle de B sachant A (avec P(A) > 0) : P_A(B) = P(B | A) = P(A ∩ B) / P(A)',
      'Formule des probabilités composées : P(A ∩ B) = P(A) × P_A(B)',
      'Représentation par un arbre de probabilités pondéré (règles des chemins et de la somme)',
      'Représentation par un tableau croisé à double entrée',
      'Formule des probabilités totales : P(B) = P(A ∩ B) + P(Ā ∩ B) = P(A)·P_A(B) + P(Ā)·P_Ā(B)',
      'Indépendance de deux événements : A et B indépendants ⇔ P(A ∩ B) = P(A) × P(B)'
    ],
    keyFormulas: [
      'P_A(B) = P(A ∩ B) / P(A) (P(A) ≠ 0)',
      'P(A ∩ B) = P(A) · P_A(B)',
      'Probabilités totales : P(B) = P(A) · P_A(B) + P(Ā) · P_Ā(B)',
      'Indépendance : P(A ∩ B) = P(A) · P(B) ⇔ P_A(B) = P(B)'
    ],
    competencies: [
      'Construire et pondérer un arbre de probabilités',
      'Calculer une probabilité totale à partir de plusieurs branches',
      'Calculer une probabilité conditionnelle et tester l\'indépendance de deux événements'
    ],
    skillId: 'skill-1ab-m-seq22-denombrement-e'
  },
  {
    sequenceNumber: 23,
    trimestre: 3,
    title: 'Dérivation (partie E) - Extremums et Tangentes',
    domain: 'Analyse',
    contents: [
      'Nombre dérivé en un extremum relatif : si f est dérivable sur un intervalle ouvert I et admet un extremum local en x₀, alors f\'(x₀) = 0',
      'Tangente horizontale à la courbe C_f au point d\'abscisse x₀ : équation y = f(x₀)',
      'Condition suffisante d\'extremum local : f\' s\'annule en x₀ en changeant de signe',
      'Distinction entre condition nécessaire (f\'(x₀) = 0) et condition suffisante (changement de signe de f\')'
    ],
    keyFormulas: [
      'Extremum local en x₀ ∈ ]a, b[ ⇒ f\'(x₀) = 0',
      'Tangente horizontale : y = f(x₀)',
      'Si f\' s\'annule en changeant de + à - : maximum local en x₀',
      'Si f\' s\'annule en changeant de - à + : minimum local en x₀'
    ],
    competencies: [
      'Déterminer les abscisses des points à tangente horizontale',
      'Justifier qu\'un point critique est un extremum local par le changement de signe de f\'',
      'Résoudre des problèmes d\'optimisation économique (maximisation de profit, minimisation de coût)'
    ],
    skillId: 'skill-1ab-m-seq23-derivation-e'
  },
  {
    sequenceNumber: 24,
    trimestre: 3,
    title: 'Dénombrement et Probabilités (partie F) - Variables Aléatoires',
    domain: 'Probabilités & Dénombrement',
    contents: [
      'Modélisation du résultat numérique d\'une expérience aléatoire : variable aléatoire réelle X',
      'Ensemble des valeurs prises par la variable : X(Ω) = {x₁, x₂, ..., x_k}',
      'Événements de la forme (X = x_i), (X ≤ a)',
      'Loi de probabilité d\'une variable aléatoire discrète : tableau donnant pour chaque x_i la probabilité p_i = P(X = x_i)',
      'Vérification de la cohérence : ∑ p_i = 1'
    ],
    keyFormulas: [
      'X : Ω → ℝ',
      'p_i = P(X = x_i) avec p_i ≥ 0',
      '∑_{i=1}^k P(X = x_i) = 1'
    ],
    competencies: [
      'Définir une variable aléatoire associée aux gains ou coûts d\'une situation',
      'Déterminer l\'ensemble des valeurs prises par X',
      'Établir la loi de probabilité de X sous forme de tableau'
    ],
    skillId: 'skill-1ab-m-seq24-denombrement-f'
  },
  {
    sequenceNumber: 25,
    trimestre: 3,
    title: 'Dérivation (partie F) – Variations et Courbes Représentatives',
    domain: 'Analyse',
    contents: [
      'Étude complète de fonctions polynômes de degré ≤ 3 : f(x) = ax³ + bx² + cx + d',
      'Fonctions rationnelles du type x ↦ ax + b + c/(dx + e)',
      'Recherche des asymptotes : verticales (dx + e = 0) et obliques (droite y = ax + b)',
      'Position relative de la courbe C_f par rapport à son asymptote oblique (signe de f(x) - (ax + b))',
      'Tracé soigné de la courbe avec tangentes horizontales, asymptotes et points d\'intersection avec les axes'
    ],
    keyFormulas: [
      'f(x) = ax + b + c / (dx + e)',
      'Asymptote oblique : y = ax + b car lim_{x → ±∞} [f(x) - (ax + b)] = 0',
      'Position relative : étudier le signe de d(x) = f(x) - (ax + b) = c / (dx + e)',
      'Asymptote verticale : x = -e/d'
    ],
    competencies: [
      'Démontrer qu\'une droite est asymptote oblique à une courbe représentative',
      'Étudier la position relative d\'une courbe par rapport à son asymptote',
      'Tracer la courbe représentative complète d\'une fonction rationnelle'
    ],
    skillId: 'skill-1ab-m-seq25-derivation-f'
  },
  {
    sequenceNumber: 26,
    trimestre: 3,
    title: 'Dénombrement et Probabilités (partie G) - Espérance & Variance',
    domain: 'Probabilités & Dénombrement',
    contents: [
      'Espérance mathématique d\'une variable aléatoire X : E(X) = ∑_{i=1}^k x_i · P(X = x_i)',
      'Interprétation concrète de l\'espérance : valeur moyenne attendue sur un grand nombre d\'épreuves',
      'Notion de jeu équitable : jeu où l\'espérance de gain net est nulle (E(X) = 0)',
      'Variance de X : V(X) = ∑ p_i (x_i - E(X))² = E(X²) - [E(X)]² (formule de König-Huygens)',
      'Écart-type de X : σ(X) = √V(X) (mesure de la dispersion et du risque)'
    ],
    keyFormulas: [
      'E(X) = ∑ x_i · P(X = x_i)',
      'V(X) = E(X²) - [E(X)]² avec E(X²) = ∑ x_i² · P(X = x_i)',
      'σ(X) = √V(X)',
      'Jeu équitable ⇔ E(Gain net) = 0'
    ],
    competencies: [
      'Calculer l\'espérance mathématique d\'une variable aléatoire',
      'Calculer la variance et l\'écart-type via la formule de König-Huygens',
      'Déterminer les conditions d\'équité d\'un jeu de hasard'
    ],
    skillId: 'skill-1ab-m-seq26-denombrement-g'
  },
  {
    sequenceNumber: 27,
    trimestre: 3,
    title: 'Dénombrement et Probabilités - Loi Binomiale',
    domain: 'Probabilités & Dénombrement',
    contents: [
      'Épreuve de Bernoulli : expérience aléatoire à deux issues exclusives (Succès S de probabilité p, Échec E de probabilité 1 - p)',
      'Schéma de Bernoulli de paramètres n et p : répétition de n épreuves de Bernoulli identiques et indépendantes',
      'Variable aléatoire X comptant le nombre de succès parmi les n épreuves',
      'Loi binomiale notée ℬ(n, p) : P(X = k) = binom(n, k) · p^k · (1 - p)^{n - k} pour k ∈ {0, 1, ..., n}',
      'Espérance de la loi binomiale : E(X) = n · p',
      'Variance et écart-type de la loi binomiale : V(X) = n · p · (1 - p) et σ(X) = √(n · p · (1 - p))'
    ],
    keyFormulas: [
      'X ~ ℬ(n, p)',
      'P(X = k) = binom(n, k) · p^k · (1 - p)^{n - k}',
      'E(X) = n · p',
      'V(X) = n · p · (1 - p)',
      'σ(X) = √(n · p · (1 - p))'
    ],
    competencies: [
      'Identifier un schéma de Bernoulli et justifier l\'utilisation de la loi binomiale',
      'Calculer la probabilité d\'obtenir exactement k succès',
      'Calculer l\'espérance et l\'écart-type d\'une variable binomiale'
    ],
    skillId: 'skill-1ab-m-seq27-loi-binomiale'
  },
  {
    sequenceNumber: 28,
    trimestre: 3,
    title: 'Dérivation - Fonctions Puissances (n ∈ ℤ)',
    domain: 'Analyse',
    contents: [
      'Rappel des dérivées des fonctions de base : carré (x²)\' = 2x, cube (x³)\' = 3x², inverse (1/x)\' = -1/x², racine (√x)\' = 1/(2√x)',
      'Généralisation à toute puissance entière n ∈ ℤ : dérivée de la fonction x ↦ x^n égale à n · x^{n - 1}',
      'Application aux puissances négatives : (1/x^p)\' = (x^{-p})\' = -p · x^{-p - 1} = -p / x^{p+1}',
      'Application au calcul rapide de dérivées de polynômes et fractions rationnelles simples'
    ],
    keyFormulas: [
      '(x^n)\' = n · x^{n - 1} pour tout n ∈ ℤ',
      '(x⁴)\' = 4x³ ; (x⁵)\' = 5x⁴',
      '(1/x²)\' = (x⁻²)\' = -2x⁻³ = -2/x³',
      '(1/x³)\' = (x⁻³)\' = -3x⁻⁴ = -3/x⁴'
    ],
    competencies: [
      'Appliquer la formule générale (x^n)\' = n x^{n-1} pour des exposants positifs et négatifs',
      'Dériver une fonction contenant des termes en 1/x^p',
      'Réduire au même dénominateur l\'expression d\'une dérivée avec puissances'
    ],
    skillId: 'skill-1ab-m-seq28-derivation-puissances'
  },
  {
    sequenceNumber: 29,
    trimestre: 3,
    title: 'Dérivation - Fonction Valeur Absolue et Dérivabilité en 0',
    domain: 'Analyse',
    contents: [
      'Définition de la fonction valeur absolue x ↦ |x| : égale à x si x ≥ 0 et -x si x < 0',
      'Courbe représentative : réunion de deux demi-droites formant un « V », symétrique par rapport à l\'axe des ordonnées (fonction paire)',
      'Étude de la dérivabilité en 0 par le taux d\'accroissement : [|h| - |0|] / h = |h| / h',
      'Limite à droite en 0 : lim_{h → 0⁺} (h / h) = +1',
      'Limite à gauche en 0 : lim_{h → 0⁻} (-h / h) = -1',
      'Conclusion : les limites à droite et à gauche sont différentes, la fonction |x| n\'est pas dérivable en 0',
      'Interprétation géométrique : présence d\'un point anguleux à l\'origine O(0, 0) avec deux demi-tangentes de coefficients directeurs opposés (-1 et +1)'
    ],
    keyFormulas: [
      '|x| = x si x ≥ 0 ; |x| = -x si x < 0',
      'Taux d\'accroissement en 0 : τ(h) = |h| / h',
      'lim_{h → 0⁺} τ(h) = +1 et lim_{h → 0⁻} τ(h) = -1',
      'f n\'est pas dérivable en 0 (point anguleux)'
    ],
    competencies: [
      'Exprimer une fonction avec valeur absolue par morceaux sans le symbole de valeur absolue',
      'Calculer les nombres dérivés à gauche et à droite en un point de raccordement',
      'Conclure à la non-dérivabilité et interpréter graphiquement le point anguleux'
    ],
    skillId: 'skill-1ab-m-seq29-valeur-absolue'
  }
];

// =====================================================================
// CONVERSION EN SKILL NODES POUR LE GRAPHE DE COMPÉTENCES
// =====================================================================

export const PREMIERE_AB_MATH_SKILLS: SkillNode[] = PREMIERE_AB_MATH_SEQUENCES.map((seq, index) => {
  const trimLabel = seq.trimestre === 1 
    ? '🍂 1er Trimestre' 
    : seq.trimestre === 2 
    ? '❄️ 2ème Trimestre' 
    : '🌱 3ème Trimestre';
  
  // Prerequisite is previous sequence if in same or prior trimestre
  const prereq = index > 0 ? [PREMIERE_AB_MATH_SEQUENCES[index - 1].skillId] : [];

  // Default calibrated scores for realism
  const defaultScore = index === 0 ? 82 : index === 1 ? 75 : index === 2 ? 65 : index < 6 ? 40 : 0;
  const status = defaultScore >= 80 ? 'mastered' : defaultScore >= 60 ? 'acquired' : defaultScore > 0 ? 'in_progress' : index <= 3 ? 'available' : 'locked';
  const tier = defaultScore >= 80 ? 'Maîtrisée' : defaultScore >= 60 ? 'Acquise' : defaultScore >= 40 ? 'En cours' : defaultScore > 0 ? 'Découverte' : 'Non commencée';

  return {
    id: seq.skillId,
    subjectId: 'math',
    levelId: '1ere-a',
    name: `Séquence ${seq.sequenceNumber} : ${seq.title}`,
    description: seq.contents.slice(0, 3).join(' • '),
    difficulty: seq.sequenceNumber <= 5 ? 2 : seq.sequenceNumber <= 15 ? 3 : 4,
    prerequisiteIds: prereq,
    masteryScore: defaultScore,
    tier: tier,
    status: status,
    unit: `${trimLabel} : ${seq.domain}`,
    order: seq.sequenceNumber,
    topics: seq.contents
  };
});
