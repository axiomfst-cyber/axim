import { ExerciseQuestion } from '../types';

export const PREMIERE_S_PHYSICS_QUESTIONS: ExerciseQuestion[] = [
  // ===================================================================
  // CHAPITRE 1 : CINÉMATIQUE DU POINT MATÉRIEL (ex-1s-pc-chap1)
  // ===================================================================
  {
    id: 'q-1s-pc-cin-1',
    exerciseId: 'ex-1s-pc-chap1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Définitions (Vecteur Vitesse & Vecteur Accélération)',
    microConcept: 'En cinématique, le vecteur vitesse est la dérivée temporelle du vecteur position : v(t) = dOM/dt. Le vecteur accélération est la dérivée du vecteur vitesse : a(t) = dv/dt = d²OM/dt².',
    hint: 'L\'accélération mesure le taux de variation de la vitesse dans le temps.',
    prompt: 'Quelle est la relation vectorielle exacte liant le vecteur accélération a(t) et le vecteur position OM(t) ?',
    options: [
      'a(t) = d²OM/dt² (dérivée seconde de la position par rapport au temps)',
      'a(t) = dOM/dt (dérivée première de la position)',
      'a(t) = OM(t) × t',
      'a(t) = ∫ OM(t) dt'
    ],
    correctAnswer: 'a(t) = d²OM/dt² (dérivée seconde de la position par rapport au temps)',
    commonMistake: 'Confondre la vitesse (dérivée première) et l\'accélération (dérivée seconde).',
    explanation: 'Le vecteur accélération est la dérivée temporelle du vecteur vitesse. Comme v = dOM/dt, a = dv/dt = d²OM/dt².',
    steps: [
      '1. Vecteur position : OM(t).',
      '2. Vecteur vitesse : v(t) = dOM/dt.',
      '3. Vecteur accélération : a(t) = dv/dt = d²OM/dt².'
    ]
  },
  {
    id: 'q-1s-pc-cin-2',
    exerciseId: 'ex-1s-pc-chap1',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Équation Horaire MRUA)',
    microConcept: 'Pour un mouvement rectiligne uniformément accéléré (MRUA) sans vitesse initiale (v0 = 0) partant de x0 = 0, l\'équation horaire est x(t) = 1/2 · a · t².',
    hint: 'Remplace a = 4 m/s² et t = 3 s dans la formule x = 1/2 · a · t².',
    prompt: 'Un véhicule démarre avec une accélération constante a = 4 m/s² sans vitesse initiale. Quelle distance x en mètres parcourt-il en t = 3 secondes ?',
    correctAnswer: 18,
    commonMistake: 'Oublier le facteur 1/2 et calculer a · t² = 4 × 9 = 36 m.',
    explanation: 'x(t) = 1/2 × a × t² = 1/2 × 4 × 3² = 2 × 9 = 18 m.',
    steps: [
      '1. Formule de la position : x(t) = 1/2 a t².',
      '2. Calcul : x = 0,5 × 4 × (3)² = 2 × 9 = 18 m.'
    ]
  },
  {
    id: 'q-1s-pc-cin-3',
    exerciseId: 'ex-1s-pc-chap1',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Mouvement Circulaire Uniforme',
    microConcept: 'Dans un mouvement circulaire uniforme de rayon R à vitesse angulaire ω, la vitesse linéaire est v = R · ω et l\'accélération est centripète : a_n = v² / R = R · ω².',
    hint: 'La vitesse linéaire est le produit du rayon par la vitesse angulaire.',
    prompt: 'Pour un mobile en mouvement circulaire uniforme de rayon R = 0,5 m tournant à ω = 10 rad/s, quelle est sa vitesse linéaire v ?',
    options: [
      'v = 5 m/s',
      'v = 20 m/s',
      'v = 2,5 m/s',
      'v = 50 m/s'
    ],
    correctAnswer: 'v = 5 m/s',
    commonMistake: 'Diviser ω par R au lieu de multiplier R par ω.',
    explanation: 'La relation fondamentale est v = R · ω = 0,5 m × 10 rad/s = 5 m/s.',
    steps: [
      '1. Relation : v = R · ω.',
      '2. Calcul : v = 0,5 × 10 = 5 m/s.'
    ]
  },
  {
    id: 'q-1s-pc-cin-4',
    exerciseId: 'ex-1s-pc-chap1',
    type: 'true_false',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Caractère Accéléré ou Retardé',
    microConcept: 'Un mouvement est dit accéléré si le produit scalaire a · v > 0 (l\'accélération et la vitesse vont dans le même sens). Il est retardé (décéléré) si a · v < 0.',
    hint: 'Si l\'accélération s\'oppose au sens du vecteur vitesse, la norme de la vitesse diminue.',
    prompt: 'Si le produit scalaire entre l\'accélération et la vitesse vérifie a · v < 0, alors le mouvement du point matériel est obligatoirement retardé (décéléré).',
    options: [
      'Vrai (a · v < 0 signifie que a et v sont de sens opposés, la vitesse diminue)',
      'Faux (a · v < 0 signifie que la trajectoire est obligatoirement circulaire)'
    ],
    correctAnswer: 'Vrai (a · v < 0 signifie que a et v sont de sens opposés, la vitesse diminue)',
    commonMistake: 'Penser que l\'accélération doit être nulle pour un mouvement décéléré.',
    explanation: 'La dérivée de v² par rapport au temps vaut d(v²)/dt = 2(a · v). Si a · v < 0, la vitesse scalaire décroît, le mouvement est donc retardé.',
    steps: [
      '1. d(v²)/dt = 2(v · dv/dt) = 2(a · v).',
      '2. Si a · v < 0, la norme de la vitesse diminue.',
      '3. Le mouvement est donc retardé.'
    ]
  },

  // ===================================================================
  // CHAPITRE 2 : TRAVAIL & PUISSANCE DES FORCES (TRANSLATION) (ex-1s-pc-chap2)
  // ===================================================================
  {
    id: 'q-1s-pc-trav-1',
    exerciseId: 'ex-1s-pc-chap2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Calcul du Travail d\'une Force Constante',
    microConcept: 'Le travail d\'une force constante F le long d\'un déplacement rectiligne AB est : W_AB(F) = F · AB · cos(α), où α est l\'angle entre la force et le déplacement.',
    hint: 'cos(60°) = 0,5. Multiplie F, la distance AB et cos(60°).',
    prompt: 'Une force de traction constante F = 50 N déplace une charge sur une distance AB = 10 m en faisant un angle α = 60° avec l\'horizontale. Quel est le travail W en Joules (J) ?',
    correctAnswer: 250,
    commonMistake: 'Oublier le cosinus ou confondre cos(60°) = 0,5 avec sin(60°).',
    explanation: 'W = F × AB × cos(60°) = 50 × 10 × 0,5 = 250 J.',
    steps: [
      '1. Formule : W_AB(F) = F · AB · cos(α).',
      '2. Remplacement : W = 50 × 10 × 0,5 = 250 J.'
    ]
  },
  {
    id: 'q-1s-pc-trav-2',
    exerciseId: 'ex-1s-pc-chap2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Nature du Travail (Moteur, Résistant, Nul)',
    microConcept: 'Le travail d\'une force est moteur si W > 0 (0° ≤ α < 90°), résistant si W < 0 (90° < α ≤ 180°), et nul si la force est perpendiculaire au déplacement (α = 90°).',
    hint: 'Regarde le signe de cos(α) pour un angle obtus (α > 90°).',
    prompt: 'Une force de frottement s\'oppose directement au mouvement du solide (angle α = 180° avec le déplacement). Quelle est la nature de son travail ?',
    options: [
      'Travail résistant (W < 0 car cos(180°) = -1)',
      'Travail moteur (W > 0)',
      'Travail nul (W = 0)',
      'Travail indéterminé sans la masse du solide'
    ],
    correctAnswer: 'Travail résistant (W < 0 car cos(180°) = -1)',
    commonMistake: 'Penser que le frottement effectue un travail nul.',
    explanation: 'Puisque cos(180°) = -1, W = -F · AB < 0 : la force retire de l\'énergie mécanique au système, son travail est résistant.',
    steps: [
      '1. Angle force-déplacement : α = 180°.',
      '2. cos(180°) = -1.',
      '3. W = -F · AB < 0 : travail résistant.'
    ]
  },
  {
    id: 'q-1s-pc-trav-3',
    exerciseId: 'ex-1s-pc-chap2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Puissance Moyenne d\'une Force',
    microConcept: 'La puissance moyenne développée par une force accomplissant un travail W pendant une durée Δt est : P = W / Δt (exprimée en Watts, W).',
    hint: 'Divise le travail W = 1800 J par la durée t = 6 s.',
    prompt: 'Un treuil soulève une charge en effectuant un travail de 1800 Joules pendant une durée de 6 secondes. Quelle est sa puissance moyenne en Watts (W) ?',
    correctAnswer: 300,
    commonMistake: 'Multiplier W par t au lieu de diviser W par t.',
    explanation: 'P = W / Δt = 1800 / 6 = 300 Watts.',
    steps: [
      '1. P = W / Δt.',
      '2. P = 1800 J / 6 s = 300 W.'
    ]
  },
  {
    id: 'q-1s-pc-trav-4',
    exerciseId: 'ex-1s-pc-chap2',
    type: 'true_false',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Travail du Poids et Indépendance du Chemin',
    microConcept: 'Le poids est une force conservative. Son travail entre deux points A et B ne dépend que de la différence d\'altitude h : W(P) = m·g·(z_A - z_B) = ± m·g·h, indépendamment du chemin suivi.',
    hint: 'Que le solide glisse sur un plan incliné ou tombe verticalement, le travail du poids dépend-il du trajet ?',
    prompt: 'Le travail du poids d\'un corps qui descend d\'une hauteur h est le même, qu\'il descende verticalement ou le long d\'une pente inclinée avec des lacets (en l\'absence de frottement).',
    options: [
      'Vrai (le poids est une force conservative : W(P) = +mgh ne dépend que du dénivelé h)',
      'Faux (la distance parcourue sur le plan incliné étant plus grande, le travail du poids est plus grand)'
    ],
    correctAnswer: 'Vrai (le poids est une force conservative : W(P) = +mgh ne dépend que du dénivelé h)',
    commonMistake: 'Confondre le travail d\'une force conservative (ne dépend que de l\'altitude) avec celui des frottements (dépend du chemin).',
    explanation: 'Le poids étant un champ uniforme vertical, le travail vectoriel P · AB = P_z · (z_B - z_A) = -mg(z_B - z_A) = +mgh ne dépend que de la hauteur initiale et finale.',
    steps: [
      '1. Poids = force conservative.',
      '2. W_AB(P) = m g (z_A - z_B) = m g h en descente.',
      '3. Indépendant de la trajectoire.'
    ]
  },

  // ===================================================================
  // CHAPITRE 3 : RÉACTIONS D'OXYDORÉDUCTION FONDAMENTALES (ex-1s-pc-chap3)
  // ===================================================================
  {
    id: 'q-1s-pc-red-1',
    exerciseId: 'ex-1s-pc-chap3',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Définition d\'un Oxydant et d\'un Réducteur',
    microConcept: 'Un OXYDANT est une espèce chimique capable de CAPTER un ou plusieurs électrons. Un RÉDUCTEUR est une espèce capable de CÉDER un ou plusieurs électrons (Mnémotechnique : O-C = Oxydant Capte).',
    hint: 'L\'oxydant subit une réduction en gagnant des électrons.',
    prompt: 'Par définition chimique rigoureuse, qu\'est-ce qu\'un réducteur ?',
    options: [
      'Une espèce chimique capable de céder un ou plusieurs électrons',
      'Une espèce chimique capable de capter un ou plusieurs électrons',
      'Une espèce chimique capable de céder un proton H⁺',
      'Une espèce chimique qui gagne obligatoirement des atomes d\'oxygène'
    ],
    correctAnswer: 'Une espèce chimique capable de céder un ou plusieurs électrons',
    commonMistake: 'Confondre avec la définition acide-base de Brønsted (transfert de protons H⁺).',
    explanation: 'En oxydoréduction, le réducteur cède des électrons (il est oxydé), tandis que l\'oxydant capte des électrons (il est réduit).',
    steps: [
      '1. Oxydant + n e⁻ ⇄ Réducteur.',
      '2. Le réducteur cède les électrons : Red → Ox + n e⁻.'
    ]
  },
  {
    id: 'q-1s-pc-red-2',
    exerciseId: 'ex-1s-pc-chap3',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Demi-Équation Électronique du Cuivre',
    microConcept: 'Pour le couple Cu²⁺/Cu, la demi-équation électronique s\'écrit : Cu²⁺ + 2e⁻ ⇄ Cu. Les électrons sont toujours du côté de l\'oxydant (forme oxydée Cu²⁺).',
    hint: 'Vérifie la conservation de la matière et des charges électriques.',
    prompt: 'Quelle est la demi-équation électronique exacte correspondant au couple redox Cu²⁺ / Cu ?',
    options: [
      'Cu²⁺ + 2 e⁻ ⇄ Cu',
      'Cu + 2 e⁻ ⇄ Cu²⁺',
      'Cu²⁺ ⇄ Cu + 2 e⁻',
      'Cu²⁺ + e⁻ ⇄ Cu⁺'
    ],
    correctAnswer: 'Cu²⁺ + 2 e⁻ ⇄ Cu',
    commonMistake: 'Placer les électrons du mauvais côté de l\'équilibre.',
    explanation: 'L\'ion cuivrique Cu²⁺ est l\'oxydant : il capte 2 électrons pour former l\'atome de cuivre métallique Cu neutre (+2 - 2 = 0).',
    steps: [
      '1. Oxydant à gauche : Cu²⁺.',
      '2. Ajout de 2 e⁻ pour équilibrer la charge : Cu²⁺ + 2 e⁻ = Cu.'
    ]
  },
  {
    id: 'q-1s-pc-red-3',
    exerciseId: 'ex-1s-pc-chap3',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Nombre d\'Électrons Échangés',
    microConcept: 'Dans la réaction redox globale : 2 Fe³⁺ + Sn²⁺ → 2 Fe²⁺ + Sn⁴⁺, l\'ion étain Sn²⁺ est oxydé en Sn⁴⁺ en libérant 2 électrons, qui sont captés par 2 ions Fe³⁺ (1 e⁻ chacun).',
    hint: 'Regarde la variation du nombre d\'oxydation de l\'étain de +2 à +4.',
    prompt: 'Dans la réaction 2 Fe³⁺ + Sn²⁺ → 2 Fe²⁺ + Sn⁴⁺, combien d\'électrons sont cédés par chaque ion Sn²⁺ pour devenir Sn⁴⁺ ?',
    correctAnswer: 2,
    commonMistake: 'Compter le nombre total pour 2 ions au lieu de regarder un seul ion étain.',
    explanation: 'Sn²⁺ → Sn⁴⁺ + 2 e⁻ : chaque ion Sn²⁺ libère exactement 2 électrons.',
    steps: [
      '1. Demi-équation étain : Sn²⁺ → Sn⁴⁺ + 2 e⁻.',
      '2. Nombre d\'électrons cédés = 2.'
    ]
  },
  {
    id: 'q-1s-pc-red-4',
    exerciseId: 'ex-1s-pc-chap3',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Conservation des Charges dans une Équation Redox',
    microConcept: 'Une équation d\'oxydoréduction doit impérativement respecter simultanément la conservation des éléments chimiques et la conservation de la charge électrique totale.',
    hint: 'La somme des charges des réactifs doit être strictement égale à la somme des charges des produits.',
    prompt: 'Dans toute équation bilan d\'oxydoréduction équilibrée, les électrons libres n\'apparaissent jamais dans l\'équation finale.',
    options: [
      'Vrai (les électrons cédés par le réducteur sont intégralement consommés par l\'oxydant)',
      'Faux (on écrit toujours + 2 e⁻ à droite de l\'équation bilan globale)'
    ],
    correctAnswer: 'Vrai (les électrons cédés par le réducteur sont intégralement consommés par l\'oxydant)',
    commonMistake: 'Garder les électrons dans l\'équation bilan globale au lieu de les éliminer par combinaison des demi-équations.',
    explanation: 'Les électrons ne peuvent pas exister à l\'état libre en solution aqueuse : ils sont directement transférés du réducteur à l\'oxydant.',
    steps: [
      '1. Écrire la demi-équation d\'oxydation.',
      '2. Écrire la demi-équation de réduction.',
      '3. Multiplier par les coefficients appropriés pour que les électrons s\'annulent.',
      '4. Aucun électron n\'apparaît dans le bilan.'
    ]
  },

  // ===================================================================
  // CHAPITRE 4 : CHAMP ÉLECTROSTATIQUE & LOI DE COULOMB (ex-1s-pc-chap4)
  // ===================================================================
  {
    id: 'q-1s-pc-elec-1',
    exerciseId: 'ex-1s-pc-chap4',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Loi de Coulomb (Interaction entre Charges)',
    microConcept: 'La norme de la force d\'interaction électrostatique entre deux charges ponctuelles q1 et q2 distantes de r dans le vide est F = k · |q1 · q2| / r², avec k ≈ 9×10⁹ N·m²/C².',
    hint: 'La force est proportionnelle au produit des charges et inversement proportionnelle au CARRÉ de la distance.',
    prompt: 'Si l\'on divise par 2 la distance r séparant deux charges électriques fixes, par quel facteur est multipliée la force électrostatique entre elles ?',
    options: [
      'Multipliée par 4 (car F varie en 1/r²)',
      'Multipliée par 2',
      'Divisée par 2',
      'Elle reste inchangée'
    ],
    correctAnswer: 'Multipliée par 4 (car F varie en 1/r²)',
    commonMistake: 'Oublier le carré et penser que la force ne fait que doubler.',
    explanation: 'Comme F ∝ 1/r², si r devient r/2, F devient F / (1/2)² = 4 F. La force est quadruplée.',
    steps: [
      '1. Loi de Coulomb : F = k |q1 q2| / r².',
      '2. Nouveau rayon : r\' = r / 2.',
      '3. F\' = k |q1 q2| / (r/2)² = 4 × F.'
    ]
  },
  {
    id: 'q-1s-pc-elec-2',
    exerciseId: 'ex-1s-pc-chap4',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Champ Électrostatique Uniforme',
    microConcept: 'Entre deux plaques conductrices parallèles distantes de d séparées par une tension U, le champ électrostatique est uniforme et sa norme vaut E = U / d (en V/m ou N/C).',
    hint: 'Divise la tension U = 1000 V par la distance en mètres d = 0,05 m (5 cm).',
    prompt: 'Deux plaques parallèles distantes de d = 5 cm (0,05 m) sont portées à une différence de potentiel U = 1000 V. Quelle est la valeur du champ électrique E en V/m ?',
    correctAnswer: 20000,
    commonMistake: 'Oublier de convertir les centimètres en mètres et calculer 1000 / 5 = 200.',
    explanation: 'E = U / d = 1000 V / 0,05 m = 20 000 V/m.',
    steps: [
      '1. Convertir la distance : d = 5 cm = 0,05 m.',
      '2. Calcul : E = 1000 / 0,05 = 20 000 V/m.'
    ]
  },
  {
    id: 'q-1s-pc-elec-3',
    exerciseId: 'ex-1s-pc-chap4',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Sens de la Force sur une Particule Négative',
    microConcept: 'La force subie par une charge q dans un champ électrique E est vectoriellement F = q · E. Si q < 0 (cas de l\'électron), les vecteurs F et E ont des sens OPPOSÉS.',
    hint: 'Multiplie un vecteur par un scalaire négatif : le sens s\'inverse.',
    prompt: 'Un électron (charge q = -e < 0) placé dans un champ électrique horizontal orienté vers la droite subit une force électrostatique orientée vers la gauche.',
    options: [
      'Vrai (car F = q·E et q est négative, donc F est de sens opposé à E)',
      'Faux (une force électrique est toujours dans le même sens que le champ E)'
    ],
    correctAnswer: 'Vrai (car F = q·E et q est négative, donc F est de sens opposé à E)',
    commonMistake: 'Oublier le signe négatif de la charge de l\'électron.',
    explanation: 'Comme q = -1,6×10⁻¹⁹ C < 0, le vecteur F = q·E a une direction identique à E mais un sens strictement opposé.',
    steps: [
      '1. Relation vectorielle : F = q E.',
      '2. Pour q < 0, F et E sont colinéaires et de sens opposés.',
      '3. Si E va vers la droite, F va vers la gauche.'
    ]
  },
  {
    id: 'q-1s-pc-elec-4',
    exerciseId: 'ex-1s-pc-chap4',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Orientation des Lignes de Champ',
    microConcept: 'Les lignes de champ électrostatique sont orientées dans le sens des potentiels décroissants : elles partent des charges positives (sources) pour aboutir aux charges négatives (puits).',
    hint: 'Le champ E pointe de la plaque positive vers la plaque négative.',
    prompt: 'Dans quel sens sont orientées les lignes de champ créées par deux plaques chargées l\'une positivement et l\'autre négativement ?',
    options: [
      'De la plaque positive vers la plaque négative',
      'De la plaque négative vers la plaque positive',
      'Parallèlement aux deux plaques',
      'En cercles concentriques fermés'
    ],
    correctAnswer: 'De la plaque positive vers la plaque négative',
    commonMistake: 'Confondre avec les lignes de champ magnétique d\'un aimant (Nord vers Sud).',
    explanation: 'Le champ électrique va toujours du potentiel le plus élevé (plaque positive) vers le potentiel le plus bas (plaque négative).',
    steps: [
      '1. V_positive > V_négative.',
      '2. E est orienté dans le sens des potentiels décroissants.',
      '3. Donc de la plaque positive vers la négative.'
    ]
  },

  // ===================================================================
  // CHAPITRE 5 : ÉNERGIE POTENTIELLE ÉLECTROSTATIQUE (ex-1s-pc-chap5)
  // ===================================================================
  {
    id: 'q-1s-pc-pot-1',
    exerciseId: 'ex-1s-pc-chap5',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Travail de la Force Électrostatique',
    microConcept: 'Le travail de la force électrostatique F = q·E déplaçant une charge q d\'un point A de potentiel V_A à un point B de potentiel V_B est : W_AB(F_e) = q · (V_A - V_B) = q · U_AB.',
    hint: 'La force électrique dérive d\'une énergie potentielle : W = -ΔE_p = q(V_A - V_B).',
    prompt: 'Quelle est la formule générale exprimant le travail de la force électrostatique W_AB(F_e) lors du déplacement d\'une charge q de A vers B ?',
    options: [
      'W_AB(F_e) = q · (V_A - V_B)',
      'W_AB(F_e) = q · (V_B - V_A)',
      'W_AB(F_e) = 1/2 · q · (V_A + V_B)',
      'W_AB(F_e) = q / (V_A - V_B)'
    ],
    correctAnswer: 'W_AB(F_e) = q · (V_A - V_B)',
    commonMistake: 'Inverser l\'ordre et écrire V_B - V_A.',
    explanation: 'W_AB = -ΔE_pe = -(E_pe(B) - E_pe(A)) = E_pe(A) - E_pe(B) = q·V_A - q·V_B = q(V_A - V_B).',
    steps: [
      '1. Énergie potentielle : E_pe = q · V.',
      '2. Travail d\'une force conservative : W = E_pe(initial) - E_pe(final).',
      '3. Conclusion : W_AB = q(V_A - V_B).'
    ]
  },
  {
    id: 'q-1s-pc-pot-2',
    exerciseId: 'ex-1s-pc-chap5',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Calcul du Travail Électrique',
    microConcept: 'Une charge q = 3 C se déplace entre deux points présentant une différence de potentiel U_AB = V_A - V_B = 200 V. Le travail fourni est W = q · U_AB.',
    hint: 'Multiplie la charge q = 3 C par la tension U = 200 V.',
    prompt: 'Une charge électrique q = 3 Coulombs traverse une tension U_AB = 200 Volts. Quel est le travail W de la force électrique en Joules (J) ?',
    correctAnswer: 600,
    commonMistake: 'Diviser 200 par 3 au lieu de multiplier.',
    explanation: 'W = q × U = 3 C × 200 V = 600 Joules.',
    steps: [
      '1. Formule : W = q · U_AB.',
      '2. Calcul : W = 3 × 200 = 600 J.'
    ]
  },
  {
    id: 'q-1s-pc-pot-3',
    exerciseId: 'ex-1s-pc-chap5',
    type: 'true_false',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Surfaces Équipotentielles',
    microConcept: 'Une surface équipotentielle est le lieu des points ayant le même potentiel V. Le vecteur champ électrique E est en tout point rigoureusement orthogonal (perpendiculaire) à la surface équipotentielle.',
    hint: 'Si le déplacement se fait sur une équipotentielle (dV = 0), le travail W = q·E·dl = 0.',
    prompt: 'En tout point de l\'espace, le vecteur champ électrostatique E est perpendiculaire à la surface équipotentielle passant par ce point.',
    options: [
      'Vrai (car le travail est nul lors d\'un déplacement le long d\'une même surface équipotentielle)',
      'Faux (le champ E est tangent aux surfaces équipotentielles)'
    ],
    correctAnswer: 'Vrai (car le travail est nul lors d\'un déplacement le long d\'une même surface équipotentielle)',
    commonMistake: 'Confondre orthogonalité aux équipotentielles et tangence aux lignes de champ.',
    explanation: 'Sur une surface où V = cste, dV = -E · dl = 0 pour tout déplacement dl tangentiel. E est donc orthogonal aux surfaces équipotentielles.',
    steps: [
      '1. dV = - E · dl.',
      '2. Si V = constante, dV = 0.',
      '3. Donc E · dl = 0, ce qui démontre la perpendicularité.'
    ]
  },
  {
    id: 'q-1s-pc-pot-4',
    exerciseId: 'ex-1s-pc-chap5',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Définition de l\'Électron-Volt',
    microConcept: 'L\'électron-volt (eV) est l\'énergie cinétique acquise par un électron accéléré par une tension de 1 Volt : 1 eV = e × 1 V = 1,6×10⁻¹⁹ Joules.',
    hint: 'Multiplie la charge élémentaire e par 1 Volt.',
    prompt: 'Quelle est la valeur exacte en Joules d\'une énergie de 1 électron-volt (1 eV) ?',
    options: [
      '1 eV = 1,6 × 10⁻¹⁹ J',
      '1 eV = 1,6 × 10¹⁹ J',
      '1 eV = 1 J',
      '1 eV = 9,1 × 10⁻³¹ J'
    ],
    correctAnswer: '1 eV = 1,6 × 10⁻¹⁹ J',
    commonMistake: 'Confondre avec la masse de l\'électron (9,1×10⁻³¹ kg).',
    explanation: '1 eV = e × 1 V = 1,602×10⁻¹⁹ C × 1 V = 1,602×10⁻¹⁹ J.',
    steps: [
      '1. E = q · U.',
      '2. Pour q = e = 1,6×10⁻¹⁹ C et U = 1 V, E = 1,6×10⁻¹⁹ J.'
    ]
  },

  // ===================================================================
  // CHAPITRE 6 : ÉNERGIE CINÉTIQUE (TRANSLATION) & THÉORÈME (ex-1s-pc-chap6)
  // ===================================================================
  {
    id: 'q-1s-pc-ec-1',
    exerciseId: 'ex-1s-pc-chap6',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Calcul de l\'Énergie Cinétique',
    microConcept: 'L\'énergie cinétique d\'un solide de masse m en translation à la vitesse v est : E_c = 1/2 · m · v² (avec m en kg, v en m/s et E_c en Joules).',
    hint: 'Calcule 1/2 × 800 × 10².',
    prompt: 'Une voiture de masse m = 800 kg roule à la vitesse v = 10 m/s. Quelle est son énergie cinétique E_c en Joules ?',
    correctAnswer: 40000,
    commonMistake: 'Oublier de mettre la vitesse au carré : calculer 800 × 10 = 8000.',
    explanation: 'E_c = 0,5 × m × v² = 0,5 × 800 × 10² = 400 × 100 = 40 000 J (ou 40 kJ).',
    steps: [
      '1. Formule : E_c = 1/2 m v².',
      '2. Calcul : 0,5 × 800 × 100 = 40 000 J.'
    ]
  },
  {
    id: 'q-1s-pc-ec-2',
    exerciseId: 'ex-1s-pc-chap6',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Énoncé du Théorème de l\'Énergie Cinétique',
    microConcept: 'Dans un référentiel galiléen, la variation de l\'énergie cinétique d\'un solide entre deux instants est égale à la somme algébrique des travaux de toutes les forces extérieures appliquées : ΔE_c = Σ W_AB(F_ext).',
    hint: 'La variation ΔE_c est égale à la somme des travaux des forces.',
    prompt: 'Quel est l\'énoncé exact du théorème de l\'énergie cinétique pour un solide en translation entre deux positions A et B ?',
    options: [
      'ΔE_c = E_c(B) - E_c(A) = Σ W_AB(F_ext)',
      'ΔE_c = Σ F_ext × Δt',
      'ΔE_c = E_c(A) - E_c(B) = Σ W_AB(F_ext)',
      'E_c(B) × E_c(A) = Σ W_AB(F_ext)'
    ],
    correctAnswer: 'ΔE_c = E_c(B) - E_c(A) = Σ W_AB(F_ext)',
    commonMistake: 'Inverser l\'ordre de variation (écrire A - B au lieu de Final - Initial).',
    explanation: 'La variation ΔE_c = E_c(final) - E_c(initial) est égale au travail total des forces extérieures appliquées au solide.',
    steps: [
      '1. Variation : ΔE_c = E_c(B) - E_c(A).',
      '2. Égalité fondamentale : ΔE_c = Σ W_AB(F_ext).'
    ]
  },
  {
    id: 'q-1s-pc-ec-3',
    exerciseId: 'ex-1s-pc-chap6',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Effet du Doublement de la Vitesse',
    microConcept: 'Comme l\'énergie cinétique dépend du CARRÉ de la vitesse (v²), si la vitesse est multipliée par 2, l\'énergie cinétique est multipliée par 2² = 4.',
    hint: '(2v)² = 4v².',
    prompt: 'Si un automobiliste double sa vitesse en passant de 50 km/h à 100 km/h, son énergie cinétique est multipliée par 4 (et sa distance d\'arrêt minimale est donc multipliée par 4).',
    options: [
      'Vrai (car E_c est proportionnelle à v² : (2v)² = 4 v²)',
      'Faux (l\'énergie cinétique ne fait que doubler)'
    ],
    correctAnswer: 'Vrai (car E_c est proportionnelle à v² : (2v)² = 4 v²)',
    commonMistake: 'Croire que l\'énergie cinétique est proportionnelle à la vitesse simple.',
    explanation: 'E_c(2v) = 1/2 m (2v)² = 4 × (1/2 m v²). L\'énergie est multipliée par 4, ce qui explique pourquoi la distance de freinage quadruple.',
    steps: [
      '1. E_c = 1/2 m v².',
      '2. (2v)² = 4 v².',
      '3. Énergie quadruplée.'
    ]
  },
  {
    id: 'q-1s-pc-ec-4',
    exerciseId: 'ex-1s-pc-chap6',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Application du Théorème de l\'Énergie Cinétique',
    microConcept: 'Un solide de masse m = 2 kg part du repos (v_A = 0) et est soumis à une force motrice constante dont le travail vaut W = 100 J. D\'après le théorème : 1/2 m v_B² - 0 = W, d\'où v_B = √(2W/m).',
    hint: 'v² = 2 × 100 / 2 = 100. Prends la racine carrée.',
    prompt: 'Un solide de masse m = 2 kg part du repos (E_c(A) = 0). Une force effectue un travail moteur W = 100 Joules sur lui. Quelle est sa vitesse finale v_B en m/s ?',
    correctAnswer: 10,
    commonMistake: 'Oublier d\'extraire la racine carrée et donner 100 m/s.',
    explanation: 'ΔE_c = 1/2 m v_B² = 100 J ⇒ 1/2 × 2 × v_B² = 100 ⇒ v_B² = 100 ⇒ v_B = 10 m/s.',
    steps: [
      '1. ΔE_c = 1/2 m v_B² - 0 = W.',
      '2. 1/2 × 2 × v_B² = 100.',
      '3. v_B² = 100 ⇒ v_B = 10 m/s.'
    ]
  },

  // ===================================================================
  // CHAPITRE 7 : TRAVAIL & PUISSANCE EN ROTATION (ex-1s-pc-chap7)
  // ===================================================================
  {
    id: 'q-1s-pc-rot-1',
    exerciseId: 'ex-1s-pc-chap7',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Travail d\'un Moment de Force Constant',
    microConcept: 'Le travail effectué par un couple de forces de moment constant M_Δ lors d\'une rotation d\'angle Δθ (en radians) est : W = M_Δ · Δθ (en Joules).',
    hint: 'Multiplie le moment M = 15 N·m par l\'angle Δθ = 20 rad.',
    prompt: 'Un moteur applique un couple de moment constant M = 15 N·m sur un arbre en rotation sur un angle de Δθ = 20 radians. Quel est le travail W effectué en Joules ?',
    correctAnswer: 300,
    commonMistake: 'Diviser 300 par 2π inutilement alors que l\'angle est déjà donné en radians.',
    explanation: 'W = M_Δ × Δθ = 15 N·m × 20 rad = 300 J.',
    steps: [
      '1. Formule : W = M_Δ · Δθ.',
      '2. Calcul : W = 15 × 20 = 300 J.'
    ]
  },
  {
    id: 'q-1s-pc-rot-2',
    exerciseId: 'ex-1s-pc-chap7',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Puissance Instantanée en Rotation',
    microConcept: 'La puissance développée par un couple de moment M_Δ tournant à la vitesse angulaire ω (en rad/s) est : P = M_Δ · ω (en Watts).',
    hint: 'Multiplie M = 20 N·m par ω = 10 rad/s.',
    prompt: 'Un arbre de transmission tourne à la vitesse angulaire ω = 10 rad/s sous un couple constant M = 20 N·m. Quelle est la puissance mécanique transmise P en Watts (W) ?',
    correctAnswer: 200,
    commonMistake: 'Multiplier par le rayon au lieu d\'utiliser directement le moment.',
    explanation: 'P = M_Δ × ω = 20 N·m × 10 rad/s = 200 Watts.',
    steps: [
      '1. Relation : P = M · ω.',
      '2. Calcul : P = 20 × 10 = 200 W.'
    ]
  },
  {
    id: 'q-1s-pc-rot-3',
    exerciseId: 'ex-1s-pc-chap7',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Conversion Tour en Radians',
    microConcept: 'Un tour complet d\'un solide autour de son axe correspond à un angle de rotation de 2π radians (≈ 6,28 rad).',
    hint: 'Le périmètre d\'un cercle unitaire est 2π.',
    prompt: 'Une rotation complète d\'un tour (360°) correspond à un angle de 2π radians.',
    options: [
      'Vrai (1 tour = 360° = 2π radians)',
      'Faux (1 tour correspond à π radians)'
    ],
    correctAnswer: 'Vrai (1 tour = 360° = 2π radians)',
    commonMistake: 'Confondre un demi-tour (π rad) avec un tour complet (2π rad).',
    explanation: 'Un angle plein de 360 degrés équivaut rigoureusement à 2π radians dans le système international.',
    steps: [
      '1. 180° = π rad.',
      '2. 360° = 2π rad.'
    ]
  },
  {
    id: 'q-1s-pc-rot-4',
    exerciseId: 'ex-1s-pc-chap7',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Analogie Translation-Rotation',
    microConcept: 'En mécanique, chaque grandeur de translation possède son équivalent en rotation : Force F ↔ Moment M, Masse m ↔ Moment d\'inertie J, Vitesse v ↔ Vitesse angulaire ω, Déplacement x ↔ Angle θ.',
    hint: 'Quel paramètre joue en rotation le rôle de la force en translation ?',
    prompt: 'Quelle grandeur en rotation joue le rôle dynamique équivalent à la force F en translation ?',
    options: [
      'Le moment de force M_Δ',
      'Le moment d\'inertie J_Δ',
      'La vitesse angulaire ω',
      'Le travail W'
    ],
    correctAnswer: 'Le moment de force M_Δ',
    commonMistake: 'Confondre avec le moment d\'inertie (qui est l\'analogue de la masse).',
    explanation: 'La force F provoque une accélération linéaire a = F/m. De même, le moment M provoque une accélération angulaire α = M/J.',
    steps: [
      '1. Translation : F = m a.',
      '2. Rotation : M = J α.',
      '3. F correspond à M.'
    ]
  },

  // ===================================================================
  // CHAPITRE 8 : OXYDORÉDUCTION AVANCÉE & COUPLES STANDARDS (ex-1s-pc-chap8)
  // ===================================================================
  {
    id: 'q-1s-pc-oxav-1',
    exerciseId: 'ex-1s-pc-chap8',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Demi-Équation de l\'Ion Permanganate',
    microConcept: 'En milieu acide, l\'ion permanganate MnO₄⁻ est réduit en ion manganèse Mn²⁺ selon : MnO₄⁻ + 8 H⁺ + 5 e⁻ ⇄ Mn²⁺ + 4 H₂O.',
    hint: 'Équilibre les atomes d\'oxygène avec H₂O, puis les hydrogènes avec H⁺, et enfin les charges avec les électrons.',
    prompt: 'Combien d\'électrons sont captés par l\'ion permanganate MnO₄⁻ pour se réduire en Mn²⁺ en milieu acide ?',
    options: [
      '5 électrons',
      '2 électrons',
      '7 électrons',
      '1 électron'
    ],
    correctAnswer: '5 électrons',
    commonMistake: 'Ne regarder que la charge de Mn²⁺ (+2) sans équilibrer avec les 8 H⁺.',
    explanation: 'MnO₄⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H₂O. Charge à gauche : (-1) + (+8) + (-5) = +2. Charge à droite : +2.',
    steps: [
      '1. MnO₄⁻ → Mn²⁺ + 4 H₂O.',
      '2. Ajout de 8 H⁺ : MnO₄⁻ + 8 H⁺ → Mn²⁺ + 4 H₂O.',
      '3. Équilibrage des charges : ajout de 5 e⁻ à gauche.'
    ]
  },
  {
    id: 'q-1s-pc-oxav-2',
    exerciseId: 'ex-1s-pc-chap8',
    type: 'true_false',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Règle du Gamma et Potentiels Standards',
    microConcept: 'Une réaction d\'oxydoréduction spontanée a lieu entre l\'oxydant du couple ayant le potentiel standard le plus élevé (E°₁) et le réducteur du couple ayant le potentiel le plus bas (E°₂). C\'est la règle du gamma (γ).',
    hint: 'L\'oxydant le plus fort réagit avec le réducteur le plus fort.',
    prompt: 'Soit E°(Cu²⁺/Cu) = +0,34 V et E°(Zn²⁺/Zn) = -0,76 V. La réaction spontanée se produit entre les ions Cu²⁺ et le zinc métallique Zn.',
    options: [
      'Vrai (Cu²⁺ a le potentiel le plus haut, c\'est l\'oxydant le plus fort qui oxyde le zinc réducteur)',
      'Faux (le zinc Zn²⁺ oxyde spontanément le cuivre Cu)'
    ],
    correctAnswer: 'Vrai (Cu²⁺ a le potentiel le plus haut, c\'est l\'oxydant le plus fort qui oxyde le zinc réducteur)',
    commonMistake: 'Inverser le sens de réaction prévu par les potentiels d\'électrode.',
    explanation: 'Comme E°(Cu²⁺/Cu) > E°(Zn²⁺/Zn), la réaction spontanée est : Cu²⁺ + Zn → Cu + Zn²⁺.',
    steps: [
      '1. Comparer les potentiels : +0,34 V > -0,76 V.',
      '2. Oxydant le plus fort : Cu²⁺.',
      '3. Réducteur le plus fort : Zn.',
      '4. Réaction spontanée : Cu²⁺ + Zn → Cu + Zn²⁺.'
    ]
  },
  {
    id: 'q-1s-pc-oxav-3',
    exerciseId: 'ex-1s-pc-chap8',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Nombre d\'Électrons Échangés pour le Dichromate',
    microConcept: 'Le dichromate Cr₂O₇²⁻ se réduit en deux ions chrome Cr³⁺ selon : Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ ⇄ 2 Cr³⁺ + 7 H₂O.',
    hint: 'Regarde le nombre d\'électrons à gauche de la demi-équation équilibrée.',
    prompt: 'Combien d\'électrons au total sont nécessaires pour réduire une mole d\'ions dichromate Cr₂O₇²⁻ en 2 moles d\'ions Cr³⁺ ?',
    correctAnswer: 6,
    commonMistake: 'Compter 3 électrons (ce qui correspond à un seul atome de chrome au lieu de 2).',
    explanation: 'Chaque atome de chrome passe du degré d\'oxydation +VI à +III (gain de 3 e⁻). Pour Cr₂, le gain total est de 2 × 3 = 6 électrons.',
    steps: [
      '1. Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ = 2 Cr³⁺ + 7 H₂O.',
      '2. Nombre d\'électrons = 6.'
    ]
  },
  {
    id: 'q-1s-pc-oxav-4',
    exerciseId: 'ex-1s-pc-chap8',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Rôle de l\'Eau Oxygénée (Espèce Ampholyte)',
    microConcept: 'Le peroxyde d\'hydrogène H₂O₂ appartient à deux couples : H₂O₂/H₂O (oxydant) et O₂/H₂O₂ (réducteur). Il peut donc être soit oxydant, soit réducteur selon le partenaire réactionnel.',
    hint: 'Une espèce qui peut se comporter comme oxydant ou comme réducteur est un ampholyte redox.',
    prompt: 'Pourquoi dit-on que l\'eau oxygénée H₂O₂ est une espèce ampholyte redox ?',
    options: [
      'Elle peut jouer le rôle d\'oxydant dans un couple et de réducteur dans un autre',
      'Elle ne réagit qu\'en présence d\'acide',
      'Elle contient deux atomes d\'oxygène',
      'Elle est instable à la lumière'
    ],
    correctAnswer: 'Elle peut jouer le rôle d\'oxydant dans un couple et de réducteur dans un autre',
    commonMistake: 'Confondre avec un amphotère acido-basique (donneur/accepteur de H⁺).',
    explanation: 'H₂O₂ est l\'oxydant du couple H₂O₂/H₂O et le réducteur du couple O₂/H₂O₂. C\'est un ampholyte redox susceptible de dismutation.',
    steps: [
      '1. Couple 1 : H₂O₂ + 2H⁺ + 2e⁻ = 2H₂O (H₂O₂ = oxydant).',
      '2. Couple 2 : O₂ + 2H⁺ + 2e⁻ = H₂O₂ (H₂O₂ = réducteur).'
    ]
  },

  // ===================================================================
  // CHAPITRE 9 : CONDUCTEURS OHMIQUES & EFFET JOULE (ex-1s-pc-chap9)
  // ===================================================================
  {
    id: 'q-1s-pc-ohm-1',
    exerciseId: 'ex-1s-pc-chap9',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Puissance Dissipée par Effet Joule',
    microConcept: 'La puissance dissipée sous forme de chaleur par effet Joule dans un conducteur ohmique de résistance R traversé par un courant d\'intensité I est : P = R · I² (en Watts).',
    hint: 'Calcule R × I² = 10 × (3)² = 10 × 9.',
    prompt: 'Un conducteur ohmique de résistance R = 10 Ω est traversé par un courant continu d\'intensité I = 3 A. Quelle puissance en Watts est dissipée par effet Joule ?',
    correctAnswer: 90,
    commonMistake: 'Oublier d\'élever l\'intensité au carré : calculer R × I = 30 W.',
    explanation: 'P = R × I² = 10 × 3² = 10 × 9 = 90 Watts.',
    steps: [
      '1. Formule de Joule : P = R · I².',
      '2. Remplacement : P = 10 × 9 = 90 W.'
    ]
  },
  {
    id: 'q-1s-pc-ohm-2',
    exerciseId: 'ex-1s-pc-chap9',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Résistance Équivalente en Dérivation (Parallèle)',
    microConcept: 'Pour deux résistances R1 et R2 branchées en dérivation (parallèle), la résistance équivalente vérifie : 1/R_eq = 1/R1 + 1/R2, soit R_eq = (R1 · R2) / (R1 + R2).',
    hint: 'Multiplie 6 par 3, puis divise par (6 + 3) = 9.',
    prompt: 'On branche en parallèle deux résistors de résistances R1 = 6 Ω et R2 = 3 Ω. Quelle est la résistance équivalente R_eq en Ohms (Ω) ?',
    correctAnswer: 2,
    commonMistake: 'Additionner les résistances (6 + 3 = 9 Ω, ce qui est le cas du montage en série).',
    explanation: 'R_eq = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω. En dérivation, R_eq est toujours inférieure à la plus petite des résistances.',
    steps: [
      '1. Formule : R_eq = (R1 · R2) / (R1 + R2).',
      '2. Calcul : (6 × 3) / 9 = 18 / 9 = 2 Ω.'
    ]
  },
  {
    id: 'q-1s-pc-ohm-3',
    exerciseId: 'ex-1s-pc-chap9',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Loi d\'Ohm et Linéarité',
    microConcept: 'La loi d\'Ohm stipule que la tension U aux bornes d\'un conducteur ohmique est rigoureusement proportionnelle à l\'intensité I qui le traverse : U = R · I.',
    hint: 'La caractéristique U = f(I) est une droite passant par l\'origine.',
    prompt: 'La caractéristique courant-tension d\'un conducteur ohmique idéal est une droite passant par l\'origine dont le coefficient directeur est la résistance R.',
    options: [
      'Vrai (car U = R · I est une fonction linéaire de I)',
      'Faux (c\'est une parabole d\'équation U = R · I²)'
    ],
    correctAnswer: 'Vrai (car U = R · I est une fonction linéaire de I)',
    commonMistake: 'Confondre la tension U (linéaire) avec la puissance Joule P (quadratique).',
    explanation: 'U = R·I est l\'équation d\'une droite linéaire de pente R. Elle passe par (0,0).',
    steps: [
      '1. U = R · I.',
      '2. Fonction de type y = ax avec a = R.',
      '3. Droite passant par l\'origine.'
    ]
  },
  {
    id: 'q-1s-pc-ohm-4',
    exerciseId: 'ex-1s-pc-chap9',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Énergie Dissipée pendant une Durée',
    microConcept: 'L\'énergie calorifique dissipée par effet Joule pendant une durée t est W = P · t = R · I² · t (en Joules).',
    hint: 'Multiplie la puissance P = 50 W par le temps t = 10 s.',
    prompt: 'Un conducteur dissipe une puissance constante de 50 Watts par effet Joule. Quelle énergie thermique en Joules dégage-t-il en 10 secondes ?',
    correctAnswer: 500,
    commonMistake: 'Diviser 50 par 10 au lieu de multiplier.',
    explanation: 'W = P × t = 50 W × 10 s = 500 Joules.',
    steps: [
      '1. W = P · t.',
      '2. W = 50 × 10 = 500 J.'
    ]
  },

  // ===================================================================
  // CHAPITRE 10 : GÉNÉRATEURS & RÉCEPTEURS ÉLECTRIQUES (ex-1s-pc-chap10)
  // ===================================================================
  {
    id: 'q-1s-pc-gen-1',
    exerciseId: 'ex-1s-pc-chap10',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Caractéristique d\'un Générateur Réel',
    microConcept: 'Pour un générateur linéaire réel de force électromotrice E (en V) et de résistance interne r (en Ω), la tension à ses bornes en convention générateur est : U = E - r · I.',
    hint: 'La tension décroît quand le courant débité I augmente en raison de la chute ohmique interne.',
    prompt: 'Quelle est la loi liant la tension U et l\'intensité I aux bornes d\'un générateur électrique réel ?',
    options: [
      'U = E - r · I',
      'U = E + r · I',
      'U = r · I - E',
      'U = E / (r · I)'
    ],
    correctAnswer: 'U = E - r · I',
    commonMistake: 'Mettre un signe + (ce qui correspond à la convention récepteur U = E\' + r\'·I).',
    explanation: 'Dans un générateur, la tension à vide est E. Quand il débite un courant I, sa résistance interne dissipe une tension r·I, donc U = E - r·I.',
    steps: [
      '1. Convention générateur : le courant sort par la borne positive.',
      '2. Tension utile : U = E - r · I.'
    ]
  },
  {
    id: 'q-1s-pc-gen-2',
    exerciseId: 'ex-1s-pc-chap10',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Courant de Court-Circuit d\'une Pile',
    microConcept: 'En court-circuit, la tension aux bornes du générateur est nulle (U = 0). D\'après U = E - r·I_cc = 0, l\'intensité de court-circuit est I_cc = E / r.',
    hint: 'Divise la force électromotrice E = 12 V par la résistance interne r = 2 Ω.',
    prompt: 'Une batterie a une f.é.m. E = 12 V et une résistance interne r = 2 Ω. Quelle est l\'intensité maximale du courant de court-circuit I_cc en Ampères (A) ?',
    correctAnswer: 6,
    commonMistake: 'Multiplier E par r au lieu de diviser.',
    explanation: 'I_cc = E / r = 12 V / 2 Ω = 6 A.',
    steps: [
      '1. En court-circuit : U = 0.',
      '2. E - r I_cc = 0 ⇒ I_cc = E / r = 12 / 2 = 6 A.'
    ]
  },
  {
    id: 'q-1s-pc-gen-3',
    exerciseId: 'ex-1s-pc-chap10',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Convention Récepteur pour un Électrolyseur ou Moteur',
    microConcept: 'Pour un récepteur actif (moteur, électrolyseur) de force contre-électromotrice E\' et de résistance interne r\', la tension à ses bornes en convention récepteur est : U = E\' + r\' · I.',
    hint: 'La tension totale appliquée doit surmonter la f.c.é.m. E\' et compenser la perte par effet Joule r\'I.',
    prompt: 'Quelle équation régit la tension aux bornes d\'un récepteur actif (moteur électrique en rotation) ?',
    options: [
      'U = E\' + r\' · I',
      'U = E\' - r\' · I',
      'U = E\' · I',
      'U = r\' / E\''
    ],
    correctAnswer: 'U = E\' + r\' · I',
    commonMistake: 'Confondre récepteur (+ r\'I) et générateur (- rI).',
    explanation: 'Le récepteur consomme une puissance électrique U·I = E\'·I (puissance utile) + r\'·I² (pertes Joule), d\'où U = E\' + r\'·I.',
    steps: [
      '1. Puissance électrique absorbée : P_e = U · I.',
      '2. P_e = E\' · I + r\' · I².',
      '3. En divisant par I : U = E\' + r\' · I.'
    ]
  },
  {
    id: 'q-1s-pc-gen-4',
    exerciseId: 'ex-1s-pc-chap10',
    type: 'true_false',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Rendement Électrique d\'un Générateur',
    microConcept: 'Le rendement électrique d\'un générateur est le rapport entre la puissance utile fournie au circuit extérieur (P_u = U · I) et la puissance totale engendrée (P_tot = E · I) : η = U / E = (E - r·I) / E < 1.',
    hint: 'Le rendement est le quotient puissance utile sur puissance totale.',
    prompt: 'Le rendement d\'un générateur électrique réel diminue lorsque l\'intensité I du courant qu\'il débite augmente.',
    options: [
      'Vrai (car les pertes internes par effet Joule r·I² augmentent avec I, réduisant U/E)',
      'Faux (le rendement est une constante indépendante du courant I)'
    ],
    correctAnswer: 'Vrai (car les pertes internes par effet Joule r·I² augmentent avec I, réduisant U/E)',
    commonMistake: 'Penser que le rendement d\'une pile est constant quel que soit le débit de courant.',
    explanation: 'η = U/E = 1 - (r·I/E). Quand I augmente, le terme r·I/E augmente, donc le rendement η diminue.',
    steps: [
      '1. η = P_utile / P_totale = (U I) / (E I) = U / E.',
      '2. U = E - r I ⇒ η = 1 - (r/E)·I.',
      '3. η décroît de manière affine quand I augmente.'
    ]
  },

  // ===================================================================
  // CHAPITRE 11 : ÉNERGIE CINÉTIQUE DE ROTATION (ex-1s-pc-chap11)
  // ===================================================================
  {
    id: 'q-1s-pc-ecrot-1',
    exerciseId: 'ex-1s-pc-chap11',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Calcul de l\'Énergie Cinétique de Rotation',
    microConcept: 'L\'énergie cinétique d\'un solide en rotation autour d\'un axe fixe Δ de moment d\'inertie J_Δ et tournant à la vitesse angulaire ω est : E_c = 1/2 · J_Δ · ω².',
    hint: 'Calcule 1/2 × 0,5 × (20)² = 0,25 × 400.',
    prompt: 'Un volant d\'inertie de moment d\'inertie J_Δ = 0,5 kg·m² tourne à la vitesse angulaire ω = 20 rad/s. Quelle est son énergie cinétique E_c en Joules ?',
    correctAnswer: 100,
    commonMistake: 'Oublier d\'élever la vitesse angulaire au carré (calculer 0,5 × 0,5 × 20 = 5 J).',
    explanation: 'E_c = 1/2 × J_Δ × ω² = 0,5 × 0,5 × 20² = 0,25 × 400 = 100 Joules.',
    steps: [
      '1. Formule : E_c = 1/2 J_Δ ω².',
      '2. Calcul : 0,5 × 0,5 × 400 = 100 J.'
    ]
  },
  {
    id: 'q-1s-pc-ecrot-2',
    exerciseId: 'ex-1s-pc-chap11',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Unité du Moment d\'Inertie J_Δ',
    microConcept: 'Le moment d\'inertie J_Δ représente la répartition des masses autour de l\'axe de rotation (J = Σ m_i · r_i²). Son unité dans le Système International est le kg·m².',
    hint: 'Masse multipliée par le carré d\'une distance.',
    prompt: 'Quelle est l\'unité légale dans le Système International du moment d\'inertie J_Δ ?',
    options: [
      'kg · m² (kilogramme mètre carré)',
      'N · m (Newton mètre)',
      'kg / m²',
      'J · s'
    ],
    correctAnswer: 'kg · m² (kilogramme mètre carré)',
    commonMistake: 'Confondre avec l\'unité d\'un moment de force (N·m).',
    explanation: 'Comme J = Σ m · r², l\'unité est le produit de la masse (kg) par le carré d\'une distance (m²), soit le kg·m².',
    steps: [
      '1. Définition : J = m r².',
      '2. Unité : [kg] × [m]² = kg·m².'
    ]
  },
  {
    id: 'q-1s-pc-ecrot-3',
    exerciseId: 'ex-1s-pc-chap11',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Théorème de l\'Énergie Cinétique en Rotation',
    microConcept: 'Pour un solide en rotation autour d\'un axe fixe, le théorème de l\'énergie cinétique s\'énonce : ΔE_c = 1/2 J_Δ ω_final² - 1/2 J_Δ ω_initial² = Σ W(forces) = Σ M_Δ · Δθ.',
    hint: 'La variation d\'énergie cinétique est égale à la somme des travaux des couples appliqués.',
    prompt: 'La variation de l\'énergie cinétique d\'un solide en rotation autour d\'un axe fixe est égale à la somme des travaux des moments des forces extérieures appliquées : ΔE_c = Σ W(M_Δ).',
    options: [
      'Vrai (c\'est l\'exact équivalent rotationnel du théorème de l\'énergie cinétique)',
      'Faux (l\'énergie cinétique de rotation se conserve toujours quelle que soit la force)'
    ],
    correctAnswer: 'Vrai (c\'est l\'exact équivalent rotationnel du théorème de l\'énergie cinétique)',
    commonMistake: 'Penser que le théorème de l\'énergie cinétique ne s\'applique qu\'en translation.',
    explanation: 'Par analogie complète avec la translation, ΔE_c(rot) = Σ W = Σ M_Δ · Δθ.',
    steps: [
      '1. ΔE_c = E_c2 - E_c1.',
      '2. Travail en rotation : W = M_Δ · Δθ.',
      '3. Égalité : ΔE_c = Σ W.'
    ]
  },
  {
    id: 'q-1s-pc-ecrot-4',
    exerciseId: 'ex-1s-pc-chap11',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Énergie d\'un Solide en Mouvement Complexe (Roulement)',
    microConcept: 'Un solide de masse m = 4 kg et de moment d\'inertie J = 0,2 kg·m² qui roule sans glisser possède à la fois une énergie cinétique de translation (1/2 m v²) et de rotation (1/2 J ω²). Si v = 5 m/s et ω = 10 rad/s, E_tot = 1/2(4)(25) + 1/2(0,2)(100) = 50 + 10 = 60 J.',
    hint: 'Additionne E_c(translation) = 1/2 m v² et E_c(rotation) = 1/2 J ω².',
    prompt: 'Une sphère de masse m = 4 kg roule à la vitesse v = 5 m/s tout en tournant à ω = 10 rad/s (J = 0,2 kg·m²). Quelle est son énergie cinétique totale E_c en Joules ?',
    correctAnswer: 60,
    commonMistake: 'Oublier la part de rotation et ne calculer que 1/2 m v² = 50 J.',
    explanation: 'E_c(trans) = 0,5 × 4 × 5² = 50 J. E_c(rot) = 0,5 × 0,2 × 10² = 10 J. E_c(totale) = 50 + 10 = 60 Joules.',
    steps: [
      '1. E_trans = 1/2 × 4 × 25 = 50 J.',
      '2. E_rot = 1/2 × 0,2 × 100 = 10 J.',
      '3. E_tot = 50 + 10 = 60 J.'
    ]
  },

  // ===================================================================
  // CHAPITRE 12 : ÉNERGIE MÉCANIQUE & CHUTE LIBRE (ex-1s-pc-chap12)
  // ===================================================================
  {
    id: 'q-1s-pc-em-1',
    exerciseId: 'ex-1s-pc-chap12',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Vitesse d\'Impact en Chute Libre',
    microConcept: 'En chute libre sans vitesse initiale depuis une hauteur h (avec g = 10 m/s²), la conservation de l\'énergie mécanique donne : m·g·h = 1/2 m v² ⇒ v = √(2 · g · h).',
    hint: 'Calcule √(2 × 10 × 5) = √100.',
    prompt: 'Un caillou tombe en chute libre sans vitesse initiale d\'une hauteur h = 5 mètres (on prend g = 10 m/s²). Quelle est sa vitesse d\'impact au sol en m/s ?',
    correctAnswer: 10,
    commonMistake: 'Calculer 2gh = 100 sans prendre la racine carrée.',
    explanation: 'v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s.',
    steps: [
      '1. Conservation de l\'énergie : mgh = 1/2 mv².',
      '2. Simplification par m : v² = 2gh = 2 × 10 × 5 = 100.',
      '3. Vitesse : v = 10 m/s.'
    ]
  },
  {
    id: 'q-1s-pc-em-2',
    exerciseId: 'ex-1s-pc-chap12',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Définition de l\'Énergie Mécanique',
    microConcept: 'L\'énergie mécanique E_m d\'un système est la somme de son énergie cinétique E_c et de son énergie potentielle E_p (de pesanteur ou élastique) : E_m = E_c + E_p.',
    hint: 'L\'énergie mécanique regroupe le mouvement (cinétique) et la position (potentielle).',
    prompt: 'Quelle est l\'expression définissant l\'énergie mécanique E_m d\'un corps solide ?',
    options: [
      'E_m = E_c + E_p (somme de l\'énergie cinétique et de l\'énergie potentielle)',
      'E_m = E_c - E_p',
      'E_m = E_c × E_p',
      'E_m = 1/2 (E_c + E_p)²'
    ],
    correctAnswer: 'E_m = E_c + E_p (somme de l\'énergie cinétique et de l\'énergie potentielle)',
    commonMistake: 'Confondre somme et différence.',
    explanation: 'L\'énergie mécanique globale est la somme des énergies macroscopiques : E_m = E_c + E_p.',
    steps: [
      '1. E_c = énergie de mouvement.',
      '2. E_p = énergie d\'interaction/position.',
      '3. E_m = E_c + E_p.'
    ]
  },
  {
    id: 'q-1s-pc-em-3',
    exerciseId: 'ex-1s-pc-chap12',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Conservation en Présence de Frottements',
    microConcept: 'En présence de forces non conservatives (frottements mécaniques ou de l\'air), l\'énergie mécanique ne se conserve pas : elle diminue au cours du temps, et sa variation est égale au travail des forces de frottement : ΔE_m = W(f) < 0.',
    hint: 'Les frottements dissipent de l\'énergie sous forme thermique (chaleur).',
    prompt: 'Si un solide glisse sur une piste avec des frottements non négligeables, son énergie mécanique globale diminue au cours du mouvement.',
    options: [
      'Vrai (car le travail des frottements est résistant : ΔE_m = W(f) < 0, l\'énergie mécanique est convertie en chaleur)',
      'Faux (l\'énergie mécanique d\'un système isolé se conserve toujours même avec frottement)'
    ],
    correctAnswer: 'Vrai (car le travail des frottements est résistant : ΔE_m = W(f) < 0, l\'énergie mécanique est convertie en chaleur)',
    commonMistake: 'Confondre conservation de l\'énergie mécanique (qui peut décroître) avec la conservation de l\'énergie totale de l\'univers.',
    explanation: 'ΔE_m = W(f) < 0 : une partie de l\'énergie mécanique macroscopique est dégradée en agitation thermique microscopique.',
    steps: [
      '1. Théorème : ΔE_m = W(forces non conservatives).',
      '2. W(frottements) < 0.',
      '3. Donc E_m finale < E_m initiale.'
    ]
  },
  {
    id: 'q-1s-pc-em-4',
    exerciseId: 'ex-1s-pc-chap12',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Hauteur Maximale Atteinte',
    microConcept: 'Un projectile est lancé verticalement vers le haut avec v0 = 20 m/s (g = 10 m/s²). Au sommet, v = 0. Par conservation : 1/2 m v0² = m g h_max ⇒ h_max = v0² / (2g).',
    hint: 'h = (20)² / (2 × 10) = 400 / 20.',
    prompt: 'On lance une bille verticalement vers le haut à la vitesse v0 = 20 m/s (g = 10 m/s²). En négligeant l\'air, quelle hauteur maximale h en mètres atteint-elle ?',
    correctAnswer: 20,
    commonMistake: 'Calculer v0 / g = 2 secondes (ce qui est le temps de montée, non la hauteur !).',
    explanation: 'h_max = v0² / (2g) = 20² / (2 × 10) = 400 / 20 = 20 mètres.',
    steps: [
      '1. 1/2 m v0² = m g h_max.',
      '2. h_max = v0² / (2g) = 400 / 20 = 20 m.'
    ]
  },

  // ===================================================================
  // CHAPITRE 13 : BILAN ÉNERGÉTIQUE D'UN CIRCUIT (ex-1s-pc-chap13)
  // ===================================================================
  {
    id: 'q-1s-pc-circ-1',
    exerciseId: 'ex-1s-pc-chap13',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Rendement d\'un Moteur Électrique',
    microConcept: 'Le rendement d\'un moteur électrique est le quotient de sa puissance mécanique utile P_u par la puissance électrique absorbée P_a : η = P_u / P_a. Pour P_u = 80 W et P_a = 100 W, le rendement en pourcentage est 80%.',
    hint: 'Divise 80 par 100 et exprime le résultat en pourcentage.',
    prompt: 'Un moteur électrique absorbe une puissance électrique P_a = 100 W et restitue une puissance mécanique utile P_u = 80 W. Quel est son rendement en pourcentage (%) ?',
    correctAnswer: 80,
    commonMistake: 'Calculer la puissance perdue (20 W) au lieu du rendement utile.',
    explanation: 'η = (P_u / P_a) × 100 = (80 / 100) × 100 = 80%.',
    steps: [
      '1. Formule : η = P_u / P_a.',
      '2. η = 80 / 100 = 0,80 = 80%.'
    ]
  },
  {
    id: 'q-1s-pc-circ-2',
    exerciseId: 'ex-1s-pc-chap13',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Loi de Pouillet dans un Circuit Simple',
    microConcept: 'Dans un circuit série comportant un générateur (E, r) alimentant un résistor R, l\'intensité du courant en régime permanent est donnée par la loi de Pouillet : I = E / (R + r).',
    hint: 'Additionne toutes les résistances du circuit au dénominateur.',
    prompt: 'Quelle est l\'expression du courant I dans une boucle série constituée d\'un générateur de f.é.m. E et de résistance r alimentant un résistor R ?',
    options: [
      'I = E / (R + r)',
      'I = E / (R - r)',
      'I = (E · R) / r',
      'I = E × (R + r)'
    ],
    correctAnswer: 'I = E / (R + r)',
    commonMistake: 'Oublier la résistance interne r du générateur.',
    explanation: 'La loi des mailles donne E - r·I - R·I = 0 ⇒ E = (R + r)·I ⇒ I = E / (R + r).',
    steps: [
      '1. Loi des mailles : U_générateur = U_résistance.',
      '2. E - r I = R I.',
      '3. I = E / (R + r).'
    ]
  },
  {
    id: 'q-1s-pc-circ-3',
    exerciseId: 'ex-1s-pc-chap13',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Conservation de la Puissance Électrique',
    microConcept: 'Dans tout circuit fermé, la puissance totale fournie par les générateurs est égale à la somme des puissances utiles reçues par les récepteurs et des puissances dissipées par effet Joule dans l\'ensemble des résistances.',
    hint: 'C\'est le principe de conservation de l\'énergie appliqué à l\'électricité.',
    prompt: 'Dans un circuit électrique isolé, la puissance totale fournie par les sources est égale à la somme des puissances consommées (utiles et joules).',
    options: [
      'Vrai (principe de conservation de l\'énergie sous forme électrique)',
      'Faux (une partie de la puissance disparaît sans conversion)'
    ],
    correctAnswer: 'Vrai (principe de conservation de l\'énergie sous forme électrique)',
    commonMistake: 'Penser que l\'énergie électrique se perd sans se transformer en chaleur.',
    explanation: 'Σ P_fournie = Σ P_utile + Σ R_total · I². L\'énergie se conserve intégralement.',
    steps: [
      '1. Principe de conservation de l\'énergie.',
      '2. Puissance générée = Puissance utile + Puissances thermiques.'
    ]
  },
  {
    id: 'q-1s-pc-circ-4',
    exerciseId: 'ex-1s-pc-chap13',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Calcul de Pertes Joule dans un Circuit Global',
    microConcept: 'Un circuit série comprend un générateur de f.é.m. E = 24 V, r = 1 Ω et un résistor R = 5 Ω. Le courant vaut I = 24 / (5+1) = 4 A. La puissance totale dissipée par effet Joule est P_J = (R + r) · I² = 6 × 4² = 96 W.',
    hint: 'Calcule d\'abord I = E / (R + r) = 24 / 6 = 4 A, puis (R + r) · I².',
    prompt: 'Un générateur de 24 V (résistance interne 1 Ω) alimente une résistance de 5 Ω. Quelle est la puissance totale dissipée par effet Joule en Watts ?',
    correctAnswer: 96,
    commonMistake: 'Ne calculer les pertes que dans le résistor (5 × 16 = 80 W) en oubliant la résistance interne du générateur.',
    explanation: 'I = 24 / (5 + 1) = 4 A. P_Joule = R_totale × I² = (5 + 1) × 4² = 6 × 16 = 96 Watts.',
    steps: [
      '1. Courant : I = 24 / (5 + 1) = 4 A.',
      '2. Résistance totale : 5 + 1 = 6 Ω.',
      '3. P_Joule = 6 × 4² = 6 × 16 = 96 W.'
    ]
  },

  // ===================================================================
  // CHAPITRE 14 : CONDENSATEURS & CAPACITÉ (ex-1s-pc-chap14)
  // ===================================================================
  {
    id: 'q-1s-pc-cond-1',
    exerciseId: 'ex-1s-pc-chap14',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Relation Charge - Tension d\'un Condensateur',
    microConcept: 'La charge q accumulée sur l\'armature positive d\'un condensateur de capacité C sous une tension U est proportionnelle à la tension : q = C · U (avec q en Coulombs, C en Farads et U en Volts).',
    hint: 'La capacité C est le coefficient de proportionnalité entre la charge et la tension.',
    prompt: 'Quelle est la relation fondamentale reliant la charge q, la capacité C et la tension U d\'un condensateur ?',
    options: [
      'q = C · U',
      'q = C / U',
      'q = U / C',
      'q = 1/2 · C · U²'
    ],
    correctAnswer: 'q = C · U',
    commonMistake: 'Confondre la formule de la charge (q = C U) avec celle de l\'énergie stockée (E = 1/2 C U²).',
    explanation: 'Par définition de la capacité d\'un condensateur, q = C · U.',
    steps: [
      '1. q en Coulombs (C).',
      '2. C en Farads (F).',
      '3. q = C · U.'
    ]
  },
  {
    id: 'q-1s-pc-cond-2',
    exerciseId: 'ex-1s-pc-chap14',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Énergie Emmagasinée dans un Condensateur',
    microConcept: 'L\'énergie électrostatique emmagasinée dans un condensateur chargé est : E = 1/2 · C · U² = 1/2 · q · U = 1/2 · q² / C. Pour C = 100 μF (10⁻⁴ F) et U = 20 V, E = 1/2 × 10⁻⁴ × 400 = 0,02 J.',
    hint: 'Calcule 1/2 × 10⁻⁴ × (20)² = 0,5 × 10⁻⁴ × 400 = 0,02 J.',
    prompt: 'Un condensateur de capacité C = 100 μF (0,0001 F) est chargé sous une tension U = 20 V. Quelle est l\'énergie stockée en Joules ?',
    correctAnswer: 0.02,
    commonMistake: 'Oublier le facteur 1/2 et trouver 0,04 J.',
    explanation: 'E = 1/2 × C × U² = 0,5 × 10⁻⁴ × 400 = 0,02 Joules (ou 20 mJ).',
    steps: [
      '1. Formule : E = 1/2 C U².',
      '2. Calcul : 0,5 × 0,0001 × 400 = 0,02 J.'
    ]
  },
  {
    id: 'q-1s-pc-cond-3',
    exerciseId: 'ex-1s-pc-chap14',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Association de Condensateurs en Parallèle',
    microConcept: 'Lorsque deux condensateurs de capacités C1 et C2 sont montés en parallèle (en dérivation), leurs capacités s\'additionnent : C_eq = C1 + C2.',
    hint: 'En parallèle, les surfaces s\'additionnent, la capacité augmente.',
    prompt: 'Quelle est la capacité équivalente C_eq de deux condensateurs C1 = 4 μF et C2 = 6 μF branchés en dérivation (parallèle) ?',
    options: [
      'C_eq = 10 μF (addition directe des capacités)',
      'C_eq = 2,4 μF',
      'C_eq = 2 μF',
      'C_eq = 24 μF'
    ],
    correctAnswer: 'C_eq = 10 μF (addition directe des capacités)',
    commonMistake: 'Confondre avec les résistances : pour les condensateurs, c\'est en parallèle que les valeurs s\'additionnent !',
    explanation: 'En parallèle, C_eq = C1 + C2 = 4 μF + 6 μF = 10 μF. (L\'inverse se produit en série où 1/C_eq = 1/C1 + 1/C2).',
    steps: [
      '1. Condensateurs en parallèle : C_eq = C1 + C2.',
      '2. Calcul : 4 + 6 = 10 μF.'
    ]
  },
  {
    id: 'q-1s-pc-cond-4',
    exerciseId: 'ex-1s-pc-chap14',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Comportement en Courant Continu Établi',
    microConcept: 'En régime continu permanent (une fois chargé), aucun courant ne peut traverser l\'isolant (diélectrique) d\'un condensateur idéal. Le condensateur se comporte donc comme un INTERRUPTEUR OUVERT.',
    hint: 'Le diélectrique sépare physiquement les deux armatures conductrices.',
    prompt: 'En régime continu permanent établi, un condensateur idéal se comporte comme un circuit ouvert (interrupteur ouvert) qui bloque le passage du courant continu.',
    options: [
      'Vrai (le courant I = dq/dt devient nul une fois la charge maximale atteinte)',
      'Faux (le condensateur se comporte comme un fil de court-circuit)'
    ],
    correctAnswer: 'Vrai (le courant I = dq/dt devient nul une fois la charge maximale atteinte)',
    commonMistake: 'Confondre le comportement du condensateur avec celui d\'une bobine inductive en continu.',
    explanation: 'Lorsque la tension à ses bornes devient constante, dq/dt = 0, donc le courant I = 0 : le condensateur bloque le courant continu.',
    steps: [
      '1. I = dq/dt = C · dU/dt.',
      '2. En régime continu permanent, U est constante donc dU/dt = 0.',
      '3. Donc I = 0 (interrupteur ouvert).'
    ]
  },

  // ===================================================================
  // CHAPITRE 15 : ALCANES & NOMENCLATURE ORGANIQUE (ex-1s-pc-chap15)
  // ===================================================================
  {
    id: 'q-1s-pc-alc-1',
    exerciseId: 'ex-1s-pc-chap15',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Formule Générale des Alcanes',
    microConcept: 'Les alcanes sont des hydrocarbures saturés acycliques (à chaîne ouverte). Leur formule brute générale est C_n H_{2n+2}, où n est le nombre d\'atomes de carbone (n ≥ 1).',
    hint: 'Chaque carbone forme 4 liaisons simples covalentes.',
    prompt: 'Quelle est la formule brute générale de la famille des alcanes acycliques ?',
    options: [
      'C_n H_{2n+2}',
      'C_n H_{2n}',
      'C_n H_{2n-2}',
      'C_n H_{n+2}'
    ],
    correctAnswer: 'C_n H_{2n+2}',
    commonMistake: 'Confondre avec les alcènes (C_n H_{2n}) ou les alcynes (C_n H_{2n-2}).',
    explanation: 'Tous les carbones sont tétragonaux (liaisons simples). Pour n carbones, il y a 2n+2 hydrogènes.',
    steps: [
      '1. Mméthane : n = 1 ⇒ CH₄ (2×1 + 2 = 4).',
      '2. Éthane : n = 2 ⇒ C₂H₆ (2×2 + 2 = 6).',
      '3. Formule générale : C_n H_{2n+2}.'
    ]
  },
  {
    id: 'q-1s-pc-alc-2',
    exerciseId: 'ex-1s-pc-chap15',
    type: 'numeric',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Nombre d\'Hydrogènes dans l\'Hexane',
    microConcept: 'Pour l\'hexane, le préfixe « hex- » indique n = 6 atomes de carbone. D\'après C_n H_{2n+2}, le nombre d\'hydrogènes est 2(6) + 2 = 14.',
    hint: 'Remplace n = 6 dans 2n + 2.',
    prompt: 'Combien d\'atomes d\'hydrogène comporte une molécule d\'hexane (alcane linéaire à 6 atomes de carbone) ?',
    correctAnswer: 14,
    commonMistake: 'Calculer 2 × 6 = 12 (formule de l\'hexène au lieu de l\'hexane).',
    explanation: 'Pour n = 6, 2n + 2 = 2 × 6 + 2 = 12 + 2 = 14. La formule brute est C₆H₁₄.',
    steps: [
      '1. Hexane : n = 6.',
      '2. Hydrogènes : 2n + 2 = 2(6) + 2 = 14.'
    ]
  },
  {
    id: 'q-1s-pc-alc-3',
    exerciseId: 'ex-1s-pc-chap15',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Notion d\'Isomérie de Constitution',
    microConcept: 'Des isomères de constitution sont des molécules ayant la même formule brute mais des formules développées ou semi-développées différentes (agencement différent des atomes dans l\'espace).',
    hint: 'Même nombre et type d\'atomes, mais connectés différemment.',
    prompt: 'Le butane (CH₃-CH₂-CH₂-CH₃) et le 2-méthylpropane (CH(CH₃)₃) ont tous deux la même formule brute C₄H₁₀. Comment qualifie-t-on leur relation chimique ?',
    options: [
      'Des isomères de constitution (isomères de chaîne)',
      'Des molécules identiques sans aucune différence',
      'Des isotopes',
      'Des polymères'
    ],
    correctAnswer: 'Des isomères de constitution (isomères de chaîne)',
    commonMistake: 'Confondre isomères de molécules avec isotopes de noyaux atomiques.',
    explanation: 'Ils partagent la même formule brute C₄H₁₀ mais possèdent des chaînes carbonées différentes (l\'une linéaire, l\'autre ramifiée) : ce sont des isomères de chaîne.',
    steps: [
      '1. Formule brute butane : C₄H₁₀.',
      '2. Formule brute 2-méthylpropane : C₄H₁₀.',
      '3. Formules semi-développées différentes ⇒ isomères.'
    ]
  },
  {
    id: 'q-1s-pc-alc-4',
    exerciseId: 'ex-1s-pc-chap15',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Réactivité des Alcanes (Combustion)',
    microConcept: 'La combustion complète d\'un alcane dans le dioxygène produit exclusivement du dioxyde de carbone CO₂ et de l\'eau H₂O. L\'équation pour le méthane est CH₄ + 2 O₂ → CO₂ + 2 H₂O.',
    hint: 'La combustion complète ne produit pas de suie ni de monoxyde de carbone.',
    prompt: 'La combustion complète de tout alcane dans un excès de dioxygène produit uniquement du dioxyde de carbone (CO₂) et de la vapeur d\'eau (H₂O).',
    options: [
      'Vrai (en présence d\'excès de O₂, tous les carbones deviennent CO₂ et les hydrogènes H₂O)',
      'Faux (elle produit toujours du carbone pur et du dihydrogène gazeux)'
    ],
    correctAnswer: 'Vrai (en présence d\'excès de O₂, tous les carbones deviennent CO₂ et les hydrogènes H₂O)',
    commonMistake: 'Confondre combustion complète (CO₂ + H₂O) et incomplète (présence de CO toxique ou de carbone C).',
    explanation: 'C_n H_{2n+2} + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O. C\'est une réaction fortement exothermique.',
    steps: [
      '1. Carbone oxydé en CO₂.',
      '2. Hydrogène oxydé en H₂O.',
      '3. Combustion complète.'
    ]
  },

  // ===================================================================
  // CHAPITRE 16 : ALCÈNES, ALCYNES & POLYMÉRISATION (ex-1s-pc-chap16)
  // ===================================================================
  {
    id: 'q-1s-pc-alcen-1',
    exerciseId: 'ex-1s-pc-chap16',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Groupement Caractéristique des Alcènes',
    microConcept: 'Les alcènes sont des hydrocarbures insaturés qui possèdent une DOUBLE LIAISON carbone-carbone (C=C). Les alcynes possèdent une TRIPLE LIAISON (C≡C).',
    hint: 'Regarde le nombre de liaisons entre les deux carbones insaturés.',
    prompt: 'Quelle caractéristique structurale fondamentale définit la famille chimique des alcènes ?',
    options: [
      'La présence d\'au moins une double liaison carbone-carbone (C=C)',
      'La présence d\'une triple liaison carbone-carbone (C≡C)',
      'La présence d\'un groupe hydroxyle -OH',
      'Uniquement des liaisons simples carbone-carbone'
    ],
    correctAnswer: 'La présence d\'au moins une double liaison carbone-carbone (C=C)',
    commonMistake: 'Confondre double liaison (alcènes) et triple liaison (alcynes).',
    explanation: 'Les alcènes sont caractérisés par la double liaison C=C responsable de leur réactivité en addition électrophile.',
    steps: [
      '1. Alcane : liaisons simples C-C.',
      '2. Alcène : au moins une double liaison C=C.',
      '3. Alcyne : au moins une triple liaison C≡C.'
    ]
  },
  {
    id: 'q-1s-pc-alcen-2',
    exerciseId: 'ex-1s-pc-chap16',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Test de Caractérisation à l\'Eau de Brome',
    microConcept: 'En présence d\'un alcène, l\'eau de brome (orange-brunâtre) se décolore rapidement et spontanément par addition électrophile du dibrome Br₂ sur la double liaison C=C pour former un dérivé dibromé incolore.',
    hint: 'La double liaison s\'ouvre pour fixer les deux atomes de brome.',
    prompt: 'Que se passe-t-il lorsqu\'on ajoute quelques gouttes d\'eau de brome (solution orangée de Br₂) dans un tube à essai contenant un alcène (comme le cyclohexène) ?',
    options: [
      'L\'eau de brome se décolore instantanément par réaction d\'addition de Br₂',
      'La solution devient violette',
      'Un précipité blanc insoluble se forme immédiatement',
      'Il ne se passe aucune réaction à température ambiante'
    ],
    correctAnswer: 'L\'eau de brome se décolore instantanément par réaction d\'addition de Br₂',
    commonMistake: 'Croire que les alcanes réagissent de la même façon (les alcanes ne décolorent pas l\'eau de brome à l\'obscurité).',
    explanation: 'R-CH=CH-R + Br₂ → R-CHBr-CHBr-R. La consommation du dibrome Br₂ dissous entraîne la décoloration de la solution.',
    steps: [
      '1. Br₂ = couleur orange.',
      '2. Addition sur la double liaison C=C : ouverture de la liaison π.',
      '3. Formation d\'un produit incolore ⇒ décoloration.'
    ]
  },
  {
    id: 'q-1s-pc-alcen-3',
    exerciseId: 'ex-1s-pc-chap16',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Hydrogénation Catalytique d\'un Alcène',
    microConcept: 'L\'addition de dihydrogène H₂ sur un alcène en présence d\'un catalyseur métallique (Ni, Pt, Pd) s\'appelle l\'hydrogénation catalytique. Elle transforme l\'alcène insaturé en alcane saturé correspondant : C_n H_{2n} + H₂ → C_n H_{2n+2}.',
    hint: 'La double liaison est saturée par deux atomes d\'hydrogène.',
    prompt: 'L\'hydrogénation catalytique de l\'éthylène (éthène C₂H₄) par le dihydrogène H₂ produit de l\'éthane (C₂H₆).',
    options: [
      'Vrai (C₂H₄ + H₂ → C₂H₆, l\'alcène devient un alcane)',
      'Faux (l\'hydrogénation produit de l\'acétylène C₂H₂)'
    ],
    correctAnswer: 'Vrai (C₂H₄ + H₂ → C₂H₆, l\'alcène devient un alcane)',
    commonMistake: 'Confondre hydrogénation (gain de H₂) et déshydrogénation (perte de H₂).',
    explanation: 'CH₂=CH₂ + H₂ →(catalyseur) CH₃-CH₃. L\'éthène est hydrogéné en éthane.',
    steps: [
      '1. Réactifs : C₂H₄ + H₂.',
      '2. Rupture de la liaison double.',
      '3. Produit saturé : C₂H₆.'
    ]
  },
  {
    id: 'q-1s-pc-alcen-4',
    exerciseId: 'ex-1s-pc-chap16',
    type: 'numeric',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Formule Brute du Propène',
    microConcept: 'Pour un alcène acyclique de formule générale C_n H_{2n}, le propène possède n = 3 atomes de carbone. Son nombre d\'atomes d\'hydrogène est donc 2 × 3 = 6.',
    hint: 'Multiplie n = 3 par 2.',
    prompt: 'Combien d\'atomes d\'hydrogène contient une molécule de propène (alcène à 3 atomes de carbone) ?',
    correctAnswer: 6,
    commonMistake: 'Appliquer la formule des alcanes (2n + 2 = 8) au lieu de celle des alcènes (2n = 6).',
    explanation: 'La formule brute du propène est C₃H₆ (CH₂=CH-CH₃). Il possède exactement 6 hydrogènes.',
    steps: [
      '1. Formule alcène : C_n H_{2n}.',
      '2. Pour n = 3 : 2 × 3 = 6 hydrogènes.'
    ]
  }
];
