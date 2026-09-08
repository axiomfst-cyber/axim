import { SkillNode, ExerciseQuestion } from '../types';
import { PREMIERE_S_PHYSICS_QUESTIONS } from './axiomPremiereSPhysicsQuestions';

export { PREMIERE_S_PHYSICS_QUESTIONS };

// =====================================================================
// PROGRAMME OFFICIEL DE PHYSIQUE-CHIMIE : PREMIÈRE S-SI (16 CHAPITRES)
// Représentation uniforme en parcours de compétences (identique à Seconde)
// Aucune mention de semaine ou de mois - modules pédagogiques purs
// =====================================================================

export const PREMIERE_S_PHYSICS_SKILLS: SkillNode[] = [
  // -------------------------------------------------------------------
  // MODULE 1 : CINÉMATIQUE DU POINT MATÉRIEL
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap1-cinematique',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 1 : Cinématique du Point Matériel',
    description: 'Vecteur position OM(t), trajectoire dans le repère cartésien, vecteurs vitesse v(t) et accélération a(t), équations horaires et graphiques de mouvement.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 75,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Module 1 : Cinématique du Point Matériel',
    order: 1,
    topics: [
      'Position, repérage et trajectoire d\'un mobile',
      'Vecteurs vitesse instantanée et accélération',
      'Équations horaires du mouvement x(t), v(t)',
      'Exploitation des graphiques position-temps et vitesse-temps'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 2 : TRAVAIL & PUISSANCE MÉCANIQUE
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap2-travail-puissance-trans',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 2 : Travail & Puissance des Forces (Translation)',
    description: 'Calcul du travail d\'une force constante W(F) = F · AB · cos(α), puissance moyenne et instantanée P = F · v, forces motrices et résistantes sur plan incliné.',
    difficulty: 2,
    prerequisiteIds: ['skill-1s-pc-chap1-cinematique'],
    masteryScore: 80,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Module 2 : Travail & Puissance Mécanique',
    order: 2,
    topics: [
      'Travail d\'une force constante en translation W = F · AB · cos α',
      'Puissance instantanée et puissance moyenne P = W / Δt',
      'Travail du poids sur plan incliné et force de frottement',
      'Lien entre travail mécanique et énergie'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 3 : CHIMIE GÉNÉRALE & OXYDORÉDUCTION I
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap3-oxydoreduction-fondam',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 3 : Réactions d\'Oxydoréduction Fondamentales',
    description: 'Définitions oxydant / réducteur (perte et gain d\'électrons), demi-équations électroniques, couples redox Ox/Red et équilibrage d\'équations bilans.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 65,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Module 3 : Chimie Redox I',
    order: 3,
    topics: [
      'Définitions d\'un oxydant et d\'un réducteur',
      'Couples redox Ox/Red (métaux, ions aqueux)',
      'Établissement des demi-équations électroniques',
      'Équilibrage de l\'équation bilan d\'oxydoréduction'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 4 : ÉLECTROSTATIQUE & CHAMP ÉLECTRIQUE
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap4-champ-electrostatique',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 4 : Champ Électrostatique & Loi de Coulomb',
    description: 'Loi de Coulomb F = k·|q₁q₂|/r², champ électrostatique E créé par des charges ponctuelles, lignes de champ et champ uniforme entre plaques conductrices (E = U/d).',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-pc-chap2-travail-puissance-trans'],
    masteryScore: 40,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 4 : Électrostatique',
    order: 4,
    topics: [
      'Loi d\'interaction électrostatique de Coulomb',
      'Vecteur champ électrostatique E et lignes de champ',
      'Champ électrostatique uniforme entre plaques parallèles',
      'Force électrostatique F = q·E subie par une particule'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 5 : ÉNERGIE POTENTIELLE ÉLECTROSTATIQUE & POTENTIEL
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap5-energie-potentielle-elec',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 5 : Énergie Potentielle Électrostatique & Potentiel',
    description: 'Travail de la force électrostatique W(F_e) = q(V_A - V_B), potentiel électrique V, énergie potentielle électrostatique Epe = q·V et surfaces équipotentielles.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-pc-chap4-champ-electrostatique'],
    masteryScore: 25,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 5 : Potentiel Électrostatique',
    order: 5,
    topics: [
      'Travail de la force électrostatique et différence de potentiel',
      'Potentiel électrique V et surfaces équipotentielles',
      'Énergie potentielle électrostatique Epe = q·V',
      'Généralisation et lien avec les potentiels redox standard'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 6 : ÉNERGIE CINÉTIQUE & THÉORÈME DU TRAVAIL
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap6-energie-cinetique-trans',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 6 : Énergie Cinétique d\'un Mouvement de Translation',
    description: 'Énergie cinétique d\'un mobile en translation Ec = 1/2 m·v², théorème de l\'énergie cinétique ΔEc = ∑W(F_ext) et applications aux freinages et descentes.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-pc-chap2-travail-puissance-trans'],
    masteryScore: 50,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Module 6 : Énergie Cinétique & Travail',
    order: 6,
    topics: [
      'Définition et calcul de l\'énergie cinétique Ec = 1/2 m·v²',
      'Énoncé du théorème de l\'énergie cinétique en translation',
      'Applications aux mobiles sur plans horizontaux et inclinés',
      'Calcul de distances d\'arrêt et de vitesses finales'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 7 : MÉCANIQUE DE ROTATION & MOMENTS
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap7-travail-puissance-rot',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 7 : Travail & Puissance en Mouvement de Rotation',
    description: 'Moment d\'une force par rapport à un axe fixe M_Δ(F) = ±F·d, travail d\'une force en rotation W = M_Δ·Δθ et puissance instantanée en rotation P = M_Δ·ω.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-pc-chap2-travail-puissance-trans'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 7 : Mécanique de Rotation',
    order: 7,
    topics: [
      'Moment d\'une force par rapport à un axe fixe (bras de levier d)',
      'Couple de forces et moment résultant',
      'Travail d\'une force ou d\'un couple en rotation W = M_Δ·Δθ',
      'Puissance développée en rotation P = M_Δ·ω'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 8 : CHIMIE REDOX AVANCÉE & NOMBRES D'OXYDATION
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap8-oxydoreduction-avancee',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 8 : Réactions d\'Oxydoréduction Avancées',
    description: 'Nombre d\'oxydation (n.o.) des éléments, équilibrage par les nombres d\'oxydation, réactions redox par voie sèche (métallurgie, hauts fourneaux) et dosages.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-pc-chap3-oxydoreduction-fondam'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 8 : Chimie Redox II',
    order: 8,
    topics: [
      'Règles de détermination du nombre d\'oxydation (n.o.)',
      'Oxydation (hausse de n.o.) et réduction (baisse de n.o.)',
      'Réactions d\'oxydoréduction par voie sèche et thermique',
      'Principe des dosages redox et réactions métal/acide'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 9 : ÉLECTRICITÉ : CONDUCTEURS OHMIQUES & EFFET JOULE
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap9-puissance-conducteurs-ohm',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 9 : Puissance Électrique & Conducteurs Ohmiques',
    description: 'Loi d\'Ohm U = R·I, caractéristique tension-courant, puissance électrique reçue P = U·I = R·I², énergie électrique dissipée par effet Joule et rendement.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 9 : Conducteurs Ohmiques',
    order: 9,
    topics: [
      'Loi d\'Ohm pour un conducteur ohmique U = R·I',
      'Exploitation des caractéristiques tension-courant U = f(I)',
      'Puissance électrique reçue P = U·I et effet Joule P = R·I²',
      'Rendement énergétique d\'un récepteur thermique'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 10 : GÉNÉRATEURS & RÉCEPTEURS ÉLECTRIQUES
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap10-generateurs-recepteurs',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 10 : Générateurs & Récepteurs Électriques',
    description: 'Caractéristique d\'un générateur (U = E - r·I, f.e.m. E, résistance interne r), récepteur actif (U\' = E\' + r\'·I) et phénomènes de corrosion électrochimique.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-pc-chap9-puissance-conducteurs-ohm'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 10 : Générateurs & Récepteurs',
    order: 10,
    topics: [
      'Force électromotrice (f.e.m.) E et résistance interne r d\'une pile',
      'Loi d\'Ohm pour un générateur : U = E - r·I',
      'Loi d\'Ohm pour un récepteur actif : U\' = E\' + r\'·I',
      'Point de fonctionnement d\'un circuit et corrosion des métaux'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 11 : ÉNERGIE CINÉTIQUE DE ROTATION
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap11-energie-cinetique-rot',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 11 : Énergie Cinétique de Rotation & Moment d\'Inertie',
    description: 'Moment d\'inertie J_Δ de solides usuels (disque, cylindre, volant d\'inertie), énergie cinétique de rotation Ec = 1/2 J_Δ·ω² et théorème de l\'énergie cinétique.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-pc-chap7-travail-puissance-rot'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 11 : Énergie Cinétique de Rotation',
    order: 11,
    topics: [
      'Notion de moment d\'inertie J_Δ d\'un solide en rotation',
      'Calcul de l\'énergie cinétique de rotation Ec = 1/2 J_Δ·ω²',
      'Théorème de l\'énergie cinétique appliqué à la rotation',
      'Étude de systèmes en rotation (poulie, roue, treuil)'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 12 : THÉORÈME DE L'ÉNERGIE CINÉTIQUE & CHUTE LIBRE
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap12-theoreme-chute-libre',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 12 : Théorème de l\'Énergie Cinétique & Chute Libre',
    description: 'Chute libre sans vitesse initiale, conservation de l\'énergie mécanique Em = Ec + Epp, vitesse d\'arrivée au sol v = √(2gh) et non-conservation avec frottements.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-pc-chap6-energie-cinetique-trans'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 12 : Énergie Mécanique & Chute Libre',
    order: 12,
    topics: [
      'Mouvement de chute libre d\'un solide dans le champ de pesanteur',
      'Énergie mécanique Em = Ec + Epp et principe de conservation',
      'Calcul de la vitesse d\'impact v = √(2gh)',
      'Dissipation d\'énergie mécanique par les forces de frottement'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 13 : BILAN ÉNERGÉTIQUE D'UN CIRCUIT
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap13-bilan-energetique-circuit',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 13 : Bilan Énergétique Global d\'un Circuit Électrique',
    description: 'Énergie totale fournie par le générateur W_g = E·I·Δt, énergie utile transférée W_u, pertes Joule W_j = ∑r·I²·Δt et rendement global du circuit η = P_u / P_g.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-pc-chap10-generateurs-recepteurs'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 13 : Bilan Énergétique des Circuits',
    order: 13,
    topics: [
      'Puissance et énergie électrique totale fournie par la source',
      'Puissance utile convertie par les récepteurs P_u = E\'·I',
      'Pertes par effet Joule dissipées dans le circuit',
      'Bilan énergétique global et calcul du rendement η'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 14 : CONDENSATEURS & ÉLECTROCINÉTIQUE
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap14-condensateurs',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 14 : Condensateurs & Électrocinétique',
    description: 'Capacité d\'un condensateur plan C = ε·S/d, relation charge-tension q = C·u_C, associations série/parallèle, constante de temps τ = R·C et énergie stockée E = 1/2 C·U².',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-pc-chap5-energie-potentielle-elec'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 14 : Condensateurs & Électrocinétique',
    order: 14,
    topics: [
      'Constitution d\'un condensateur et relation fondamentale q = C·u_C',
      'Association de condensateurs en série et en parallèle',
      'Charge et décharge à travers une résistance (constante τ = R·C)',
      'Énergie électrostatique emmagasinée E = 1/2 C·U²'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 15 : CHIMIE ORGANIQUE : HYDROCARBURES SATURÉS (ALCANES)
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap15-alcanes',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 15 : Hydrocarbures Saturés : Alcanes',
    description: 'Formule générale C_n H_{2n+2}, nomenclature systématique UICPA des alcanes linéaires et ramifiés, isomérie de chaîne, réactions de combustion et de substitution.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-pc-chap3-oxydoreduction-fondam'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 15 : Chimie Organique : Alcanes',
    order: 15,
    topics: [
      'Formule générale et structure moléculaire des alcanes CnH2n+2',
      'Règles officielles de nomenclature UICPA (groupes alkyles)',
      'Isomérie de chaîne et formules semi-développées',
      'Réactions caractéristiques : combustion et halogénation (substitution)'
    ]
  },

  // -------------------------------------------------------------------
  // MODULE 16 : CHIMIE ORGANIQUE : HYDROCARBURES INSATURÉS (ALCÈNES & ALCYNES)
  // -------------------------------------------------------------------
  {
    id: 'skill-1s-pc-chap16-alcenes-alcynes',
    subjectId: 'physics',
    levelId: '1ere-s',
    name: 'Chapitre 16 : Hydrocarbures Insaturés : Alcènes & Alcynes',
    description: 'Formules C_n H_{2n} (alcènes) et C_n H_{2n-2} (alcynes), liaisons multiples C=C et C≡C, isomérie Z/E, réactions caractéristiques d\'addition et polymérisation.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-pc-chap15-alcanes'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: 'Module 16 : Chimie Organique : Alcènes & Alcynes',
    order: 16,
    topics: [
      'Liaisons multiples : alcènes (double liaison) et alcynes (triple liaison)',
      'Isomérie géométrique Z/E chez les alcènes',
      'Réactions d\'addition : hydrogénation, halogénation et hydratation',
      'Polymérisation d\'alcènes (formation de matières plastiques)'
    ]
  }
];

// =====================================================================
// BANQUE DE QUESTIONS PROGRESSIVES POUR LA PHYSIQUE-CHIMIE (PREMIÈRE S)
// =====================================================================

const LEGACY_QUESTIONS: ExerciseQuestion[] = [
  // --- Chapitre 1 : Cinématique du Point Matériel ---
  {
    id: 'q-1s-pc-cin-1',
    exerciseId: 'ex-1s-pc-chap1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Définitions (Vecteur Vitesse & Vecteur Accélération)',
    microConcept: 'En cinématique, le vecteur vitesse est la dérivée du vecteur position par rapport au temps : v(t) = dOM/dt. Le vecteur accélération est la dérivée du vecteur vitesse : a(t) = dv/dt = d²OM/dt².',
    hint: 'L\'accélération représente la variation de la vitesse par unité de temps.',
    prompt: 'Quelle est la relation vectorielle exacte liant l\'accélération a(t) et le vecteur position OM(t) ?',
    options: [
      'a(t) = d²OM/dt² (dérivée seconde de la position par rapport au temps)',
      'a(t) = dOM/dt (dérivée première de la position)',
      'a(t) = OM(t) × t',
      'a(t) = ∫ OM(t) dt'
    ],
    correctAnswer: 'a(t) = d²OM/dt² (dérivée seconde de la position par rapport au temps)',
    commonMistake: 'Confondre vitesse (dérivée première) et accélération (dérivée seconde).',
    explanation: 'Le vecteur accélération mesure le taux de variation temporelle de la vitesse. Comme v = dOM/dt, a = dv/dt = d²OM/dt².',
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
    microConcept: 'Pour un mouvement rectiligne uniformément accéléré (MRUA) sans vitesse initiale (v0 = 0) et partant de l\'origine (x0 = 0), l\'équation horaire de la position est x(t) = 1/2 · a · t².',
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

  // --- Chapitre 2 : Travail & Puissance (Translation) ---
  {
    id: 'q-1s-pc-trav-1',
    exerciseId: 'ex-1s-pc-chap2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Calcul du Travail d\'une Force Constante',
    microConcept: 'Le travail d\'une force constante F le long d\'un déplacement rectiligne AB est : W_AB(F) = F · AB · cos(α), où α est l\'angle entre la force et le déplacement.',
    hint: 'Ici la force est parallèle au déplacement, donc α = 0° et cos(0°) = 1.',
    prompt: 'Une force de traction constante de valeur F = 50 N déplace un chariot sur une distance rectiligne AB = 10 m dans le même sens que le déplacement. Quel est le travail W en Joules (J) ?',
    correctAnswer: 500,
    commonMistake: 'Diviser la force par la distance au lieu de les multiplier.',
    explanation: 'W_AB(F) = F × AB × cos(0°) = 50 × 10 × 1 = 500 J. Le travail est moteur car W > 0.',
    steps: [
      '1. Identifier l\'angle : force colinéaire et de même sens => α = 0°, cos(0) = 1.',
      '2. Calcul : W = 50 N × 10 m = 500 J.'
    ]
  },
  {
    id: 'q-1s-pc-trav-2',
    exerciseId: 'ex-1s-pc-chap2',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Puissance Mécanique Développée',
    microConcept: 'La puissance moyenne développée par une force effectuant un travail W pendant une durée Δt est P = W / Δt. Dans le SI, W est en Joules (J), Δt en secondes (s) et P en Watts (W).',
    hint: 'Divise le travail W = 1200 J par la durée Δt = 4 s.',
    prompt: 'Un moteur effectue un travail mécanique W = 1200 J en une durée de 4 secondes. Quelle est sa puissance mécanique moyenne en Watts (W) ?',
    correctAnswer: 300,
    commonMistake: 'Multiplier 1200 par 4 au lieu de diviser par le temps.',
    explanation: 'P = W / Δt = 1200 / 4 = 300 W.',
    steps: [
      '1. Formule de la puissance : P = W / Δt.',
      '2. Application numérique : P = 1200 J / 4 s = 300 W.'
    ]
  },

  // --- Chapitre 3 : Oxydoréduction Fondamentale ---
  {
    id: 'q-1s-pc-redox-1',
    exerciseId: 'ex-1s-pc-chap3',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Définition Fondamentale d\'un Réducteur',
    microConcept: 'Un réducteur est une espèce chimique capable de CÉDER (perdre) un ou plusieurs électrons lors d\'une réaction chimique (Mnemotechnique : « Réducteur Rend des électrons »). L\'oxydant est l\'espèce capable de capter des électrons.',
    hint: 'Pense à la perte ou au gain d\'électrons : qui donne et qui reçoit ?',
    prompt: 'Quelle est la définition officielle et exacte d\'un réducteur selon la théorie électronique ?',
    options: [
      'Une espèce chimique capable de céder un ou plusieurs électrons',
      'Une espèce chimique capable de capter un ou plusieurs électrons',
      'Une espèce chimique qui libère des ions H⁺ en solution aqueuse',
      'Une espèce chimique qui neutralise une base forte'
    ],
    correctAnswer: 'Une espèce chimique capable de céder un ou plusieurs électrons',
    commonMistake: 'Inverser réducteur (qui cède) et oxydant (qui capte).',
    explanation: 'Un réducteur subit une oxydation en perdant des électrons : Red -> Ox + n e⁻.',
    steps: [
      '1. Réducteur = donneur d\'électrons (subit l\'oxydation).',
      '2. Oxydant = accepteur d\'électrons (subit la réduction).'
    ]
  },

  // --- Chapitre 4 : Champ Électrostatique & Loi de Coulomb ---
  {
    id: 'q-1s-pc-elec-1',
    exerciseId: 'ex-1s-pc-chap4',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Champ Électrostatique Uniforme',
    microConcept: 'Entre deux plaques métalliques planes et parallèles distantes de d sous une tension électrique U, le champ électrostatique uniforme régnant entre les armatures a pour intensité : E = U / d (en V/m ou N/C).',
    hint: 'Convertis la distance d = 5 cm en mètres : 5 cm = 0,05 m. Calcule ensuite U / d.',
    prompt: 'Deux plaques conductrices parallèles distantes de d = 5 cm = 0,05 m sont soumises à une tension U = 200 V. Quelle est la valeur du champ électrostatique uniforme E en V/m ?',
    correctAnswer: 4000,
    commonMistake: 'Oublier de convertir les centimètres en mètres et calculer 200 / 5 = 40 V/m.',
    explanation: 'E = U / d = 200 V / 0,05 m = 4000 V/m (ou 4 kV/m).',
    steps: [
      '1. Conversion : d = 5 cm = 0,05 m.',
      '2. Formule : E = U / d.',
      '3. Calcul : E = 200 / 0,05 = 4000 V/m.'
    ]
  },

  // --- Chapitre 5 : Énergie Potentielle Électrostatique ---
  {
    id: 'q-1s-pc-potelec-1',
    exerciseId: 'ex-1s-pc-chap5',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Travail de la Force Électrique',
    microConcept: 'Le travail de la force électrostatique exercée sur une charge q déplacée d\'un point A à un point B est indépendant du chemin suivi : W_AB(F_e) = q · (V_A - V_B) = q · U_AB.',
    hint: 'Multiplie la charge q = 2 × 10⁻³ C par la différence de potentiel U = 50 V.',
    prompt: 'Une charge ponctuelle q = 0,002 C se déplace entre deux points A et B présentant une différence de potentiel V_A - V_B = 50 V. Quel est le travail W de la force électrique en Joules (J) ?',
    correctAnswer: 0.1,
    commonMistake: 'Diviser la tension par la charge au lieu de multiplier.',
    explanation: 'W = q × (V_A - V_B) = 0,002 C × 50 V = 0,1 J.',
    steps: [
      '1. Formule : W_AB = q · (V_A - V_B).',
      '2. Calcul : W = 0,002 × 50 = 0,1 J.'
    ]
  },

  // --- Chapitre 6 : Énergie Cinétique de Translation ---
  {
    id: 'q-1s-pc-ectrans-1',
    exerciseId: 'ex-1s-pc-chap6',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Calcul de l\'Énergie Cinétique',
    microConcept: 'L\'énergie cinétique d\'un solide de masse m en translation animée d\'une vitesse v est donnée par : E_c = 1/2 · m · v² (m en kg, v en m/s, E_c en Joules).',
    hint: 'Élève d\'abord la vitesse au carré (v² = 10² = 100), puis multiplie par 1/2 × m.',
    prompt: 'Un projectile de masse m = 0,4 kg est lancé à une vitesse v = 10 m/s. Quelle est son énergie cinétique Ec en Joules (J) ?',
    correctAnswer: 20,
    commonMistake: 'Oublier d\'élever la vitesse au carré (calculer 1/2 × m × v = 2 J).',
    explanation: 'Ec = 1/2 × m × v² = 0,5 × 0,4 × 100 = 20 J.',
    steps: [
      '1. Vitesse au carré : v² = 10² = 100 m²/s².',
      '2. Application : Ec = 0,5 × 0,4 × 100 = 20 J.'
    ]
  },

  // --- Chapitre 7 : Travail & Puissance en Rotation ---
  {
    id: 'q-1s-pc-rot-1',
    exerciseId: 'ex-1s-pc-chap7',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Moment d\'une Force en Rotation',
    microConcept: 'Le moment d\'une force F par rapport à un axe fixe Δ est M_Δ(F) = ± F · d, où d est la distance orthogonale entre l\'axe et la ligne d\'action de la force (bras de levier).',
    hint: 'Multiplie l\'intensité F = 40 N par le bras de levier d = 0,25 m.',
    prompt: 'Une force d\'intensité F = 40 N est appliquée perpendiculairement à une manivelle à une distance d = 0,25 m de son axe de rotation. Quelle est la valeur absolue de son moment M_Δ en N·m ?',
    correctAnswer: 10,
    commonMistake: 'Prendre la distance en centimètres sans convertir en mètres.',
    explanation: 'M_Δ(F) = F × d = 40 N × 0,25 m = 10 N·m.',
    steps: [
      '1. Formule : M = F × d.',
      '2. Calcul : M = 40 × 0,25 = 10 N·m.'
    ]
  },

  // --- Chapitre 8 : Nombres d'Oxydation & Voie Sèche ---
  {
    id: 'q-1s-pc-no-1',
    exerciseId: 'ex-1s-pc-chap8',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Détermination du Nombre d\'Oxydation',
    microConcept: 'Dans une molécule neutre, la somme des nombres d\'oxydation (n.o.) est nulle. L\'oxygène a généralement le n.o. -II. Dans le dioxyde de carbone CO₂, n.o.(C) + 2 × (-II) = 0, donc n.o.(C) = +IV.',
    hint: 'Dans SO₂, l\'oxygène vaut -2. Soit x le n.o. du soufre : x + 2 × (-2) = 0. Que vaut x ?',
    prompt: 'Quel est le nombre d\'oxydation du soufre (S) dans la molécule de dioxyde de soufre SO₂ ? (Entrer un nombre entier positif)',
    correctAnswer: 4,
    commonMistake: 'Confondre le signe ou oublier de multiplier par 2 le n.o. des deux atomes d\'oxygène.',
    explanation: 'Soit x le n.o.(S). Dans une molécule neutre : x + 2 × (-2) = 0 => x - 4 = 0 => x = +4.',
    steps: [
      '1. n.o. de l\'oxygène : -2.',
      '2. Équation de neutralité électrique : n.o.(S) + 2 × (-2) = 0.',
      '3. Résolution : n.o.(S) = +4 (ou +IV).'
    ]
  },

  // --- Chapitre 9 : Puissance & Conducteurs Ohmiques ---
  {
    id: 'q-1s-pc-ohm-1',
    exerciseId: 'ex-1s-pc-chap9',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Puissance Dissipée par Effet Joule',
    microConcept: 'La puissance dissipée par effet Joule dans un résistor de résistance R traversé par un courant d\'intensité I est P = R · I².',
    hint: 'Calcule d\'abord I² = 3² = 9, puis multiplie par R = 20 Ω.',
    prompt: 'Un conducteur ohmique de résistance R = 20 Ω est traversé par un courant continu d\'intensité I = 3 A. Quelle est la puissance dissipée par effet Joule en Watts (W) ?',
    correctAnswer: 180,
    commonMistake: 'Oublier d\'élever l\'intensité au carré (calculer R × I = 60 W au lieu de R × I² = 180 W).',
    explanation: 'P = R × I² = 20 × (3)² = 20 × 9 = 180 W.',
    steps: [
      '1. Calcul de I² : 3² = 9 A².',
      '2. Puissance Joule : P = R × I² = 20 × 9 = 180 W.'
    ]
  },

  // --- Chapitre 10 : Générateurs & Récepteurs ---
  {
    id: 'q-1s-pc-gen-1',
    exerciseId: 'ex-1s-pc-chap10',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Loi d\'Ohm pour un Générateur',
    microConcept: 'La tension aux bornes d\'un générateur réel de force électromotrice E et de résistance interne r débitant un courant I est donnée par : U = E - r · I.',
    hint: 'Calcule la chute de tension interne r · I = 0,5 × 4 = 2 V, puis soustrais-la de E = 12 V.',
    prompt: 'Une batterie d\'accumulateur a une f.e.m. E = 12 V et une résistance interne r = 0,5 Ω. Quelle est la tension U à ses bornes en Volts lorsqu\'elle débite un courant I = 4 A ?',
    correctAnswer: 10,
    commonMistake: 'Ajouter la chute de tension (12 + 2 = 14 V) au lieu de la retrancher.',
    explanation: 'U = E - r × I = 12 - (0,5 × 4) = 12 - 2 = 10 V.',
    steps: [
      '1. Chute de tension ohmique interne : r · I = 0,5 × 4 = 2 V.',
      '2. Tension disponible : U = E - r · I = 12 - 2 = 10 V.'
    ]
  },

  // --- Chapitre 11 : Énergie Cinétique de Rotation ---
  {
    id: 'q-1s-pc-ecrot-1',
    exerciseId: 'ex-1s-pc-chap11',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Énergie Cinétique d\'un Volant d\'Inertie',
    microConcept: 'L\'énergie cinétique d\'un solide en rotation autour d\'un axe fixe Δ à la vitesse angulaire ω avec un moment d\'inertie J_Δ est : E_c = 1/2 · J_Δ · ω².',
    hint: 'Élève d\'abord la vitesse angulaire au carré (ω² = 10² = 100), puis multiplie par 1/2 × J_Δ.',
    prompt: 'Un volant d\'inertie a un moment d\'inertie J_Δ = 0,6 kg·m² et tourne à une vitesse angulaire ω = 10 rad/s. Quelle est son énergie cinétique de rotation Ec en Joules (J) ?',
    correctAnswer: 30,
    commonMistake: 'Oublier le facteur 1/2 ou oublier d\'élever la vitesse angulaire au carré.',
    explanation: 'Ec = 1/2 × J_Δ × ω² = 0,5 × 0,6 × 10² = 0,3 × 100 = 30 J.',
    steps: [
      '1. Vitesse angulaire au carré : ω² = 10² = 100 rad²/s².',
      '2. Calcul : Ec = 0,5 × 0,6 × 100 = 30 J.'
    ]
  },

  // --- Chapitre 12 : Chute Libre & Conservation d'Énergie ---
  {
    id: 'q-1s-pc-chute-1',
    exerciseId: 'ex-1s-pc-chap12',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Vitesse de Chute Libre (Sans Vitesse Initiale)',
    microConcept: 'En chute libre sans vitesse initiale depuis une hauteur h (champ g = 10 m/s²), la conservation de l\'énergie mécanique (E_c + E_pp = constante) donne la vitesse d\'impact : v = √(2 · g · h).',
    hint: 'Calcule 2 × g × h = 2 × 10 × 5 = 100, puis prends la racine carrée de 100.',
    prompt: 'Un caillou tombe en chute libre sans vitesse initiale d\'une falaise de hauteur h = 5 m. En prenant g = 10 m/s², quelle est sa vitesse d\'impact avec le sol en m/s ?',
    correctAnswer: 10,
    commonMistake: 'Calculer g × h = 50 au lieu de 2 · g · h = 100 avant d\'extraire la racine carrée.',
    explanation: 'v = √(2 · g · h) = √(2 × 10 × 5) = √100 = 10 m/s.',
    steps: [
      '1. Énergie potentielle initiale convertie en énergie cinétique : m·g·h = 1/2 m·v².',
      '2. Simplification par m : v² = 2·g·h = 2 × 10 × 5 = 100.',
      '3. Vitesse finale : v = √100 = 10 m/s.'
    ]
  },

  // --- Chapitre 13 : Bilan Énergétique d'un Circuit ---
  {
    id: 'q-1s-pc-bilan-1',
    exerciseId: 'ex-1s-pc-chap13',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Rendement Énergétique d\'un Circuit',
    microConcept: 'Le rendement global d\'un circuit électrique est le rapport entre la puissance utile délivrée P_u et la puissance totale fournie par le générateur P_g : η = P_u / P_g. En pourcentage : η(%) = (P_u / P_g) × 100.',
    hint: 'Calcule (80 / 100) × 100.',
    prompt: 'Un générateur fournit une puissance électrique totale de 100 W. Le moteur raccordé produit une puissance mécanique utile de 80 W (le reste étant dissipé en chaleur). Quel est le rendement η en % ?',
    correctAnswer: 80,
    commonMistake: 'Inverser le rapport et trouver un rendement absurde supérieur à 100 %.',
    explanation: 'η = (P_u / P_g) × 100 = (80 / 100) × 100 = 80 %.',
    steps: [
      '1. Puissance utile : P_u = 80 W.',
      '2. Puissance totale fournie : P_g = 100 W.',
      '3. Rendement : η = (80 / 100) × 100 = 80 %.'
    ]
  },

  // --- Chapitre 14 : Condensateurs ---
  {
    id: 'q-1s-pc-cond-1',
    exerciseId: 'ex-1s-pc-chap14',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Énergie Stockée dans un Condensateur',
    microConcept: 'L\'énergie électrostatique emmagasinée dans un condensateur de capacité C sous une tension U est : E = 1/2 · C · U² (C en Farads, U en Volts, E en Joules).',
    hint: 'Convertis C = 200 µF = 200 × 10⁻⁶ F = 0,0002 F. Calcule U² = 100² = 10000, puis 0,5 × C × U².',
    prompt: 'Un condensateur de capacité C = 0,0002 F (200 µF) est chargé sous une tension U = 100 V. Quelle est l\'énergie électrostatique stockée en Joules (J) ?',
    correctAnswer: 1,
    commonMistake: 'Oublier d\'élever la tension U au carré dans la formule.',
    explanation: 'E = 1/2 × C × U² = 0,5 × 0,0002 × 10000 = 0,5 × 2 = 1 J.',
    steps: [
      '1. Tension au carré : U² = 100² = 10 000 V².',
      '2. Application : E = 0,5 × 0,0002 × 10 000 = 1 J.'
    ]
  },

  // --- Chapitre 15 : Alcanes & Nomenclature ---
  {
    id: 'q-1s-pc-alc-1',
    exerciseId: 'ex-1s-pc-chap15',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Formule Générale des Alcanes',
    microConcept: 'Les alcanes sont des hydrocarbures saturés acycliques (ne comportant que des liaisons simples C-C et C-H). Leur formule brute générale est C_n H_{2n+2}, où n est le nombre d\'atomes de carbone (n ≥ 1).',
    hint: 'Si n = 3 (propane), le nombre d\'hydrogènes est 2 × 3 + 2 = 8.',
    prompt: 'Quelle est la formule brute générale de la famille des alcanes linéaires et ramifiés à n atomes de carbone ?',
    options: [
      'C_n H_{2n+2}',
      'C_n H_{2n}',
      'C_n H_{2n-2}',
      'C_n H_{n+2}'
    ],
    correctAnswer: 'C_n H_{2n+2}',
    commonMistake: 'Confondre avec les alcènes (C_n H_{2n}) ou les alcynes (C_n H_{2n-2}).',
    explanation: 'Chaque carbone tétravalent dans une chaîne ouverte saturée permet de lier 2n atomes d\'hydrogène plus 2 hydrogènes supplémentaires aux extrémités, d\'où C_n H_{2n+2}.',
    steps: [
      '1. Alcanes = hydrocarbures saturés (liaisons simples uniquement).',
      '2. Formule brute : C_n H_{2n+2}.'
    ]
  },
  {
    id: 'q-1s-pc-alc-2',
    exerciseId: 'ex-1s-pc-chap15',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Nombre d\'Hydrogènes dans l\'Hexane',
    microConcept: 'L\'hexane est un alcane à n = 6 atomes de carbone. D\'après la formule générale C_n H_{2n+2}, le nombre d\'atomes d\'hydrogène est égal à 2 × 6 + 2 = 14.',
    hint: 'Applique la formule 2 × n + 2 avec n = 6.',
    prompt: 'Combien d\'atomes d\'hydrogène contient une molécule d\'hexane (alcane à 6 atomes de carbone) ? (Entrer un nombre entier)',
    correctAnswer: 14,
    commonMistake: 'Calculer 2 × 6 = 12 (formule de l\'hexène au lieu de l\'hexane).',
    explanation: 'Pour n = 6, 2n + 2 = 2 × 6 + 2 = 12 + 2 = 14. La formule brute est C₆H₁₄.',
    steps: [
      '1. Formule de l\'alcane : C_n H_{2n+2}.',
      '2. Pour n = 6 : 2(6) + 2 = 14 atomes d\'hydrogène.'
    ]
  },

  // --- Chapitre 16 : Alcènes & Alcynes ---
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
  }
];

export const PREMIERE_S_PHYSICS_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  'skill-1s-pc-chap1-cinematique': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap1'),
  'skill-1s-pc-chap2-travail-puissance-trans': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap2'),
  'skill-1s-pc-chap3-oxydoreduction-fondam': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap3'),
  'skill-1s-pc-chap4-champ-electrostatique': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap4'),
  'skill-1s-pc-chap5-energie-potentielle-elec': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap5'),
  'skill-1s-pc-chap6-energie-cinetique-trans': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap6'),
  'skill-1s-pc-chap7-travail-puissance-rot': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap7'),
  'skill-1s-pc-chap8-oxydoreduction-avancee': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap8'),
  'skill-1s-pc-chap9-puissance-conducteurs-ohm': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap9'),
  'skill-1s-pc-chap10-generateurs-recepteurs': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap10'),
  'skill-1s-pc-chap11-energie-cinetique-rot': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap11'),
  'skill-1s-pc-chap12-theoreme-chute-libre': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap12'),
  'skill-1s-pc-chap13-bilan-energetique-circuit': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap13'),
  'skill-1s-pc-chap14-condensateurs': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap14'),
  'skill-1s-pc-chap15-alcanes': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap15'),
  'skill-1s-pc-chap16-alcenes-alcynes': PREMIERE_S_PHYSICS_QUESTIONS.filter(q => q.exerciseId === 'ex-1s-pc-chap16'),
};
