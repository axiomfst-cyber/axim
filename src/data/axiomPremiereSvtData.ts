import { SkillNode } from '../types';

// =========================================================================================
// PROGRAMME OFFICIEL DE SVT (SCIENCES DE LA VIE ET DE LA TERRE) - PREMIÈRE SCIENTIFIQUE (GABON)
// Progression officielle structurée en 6 Parties et 15 Chapitres
// =========================================================================================

export const PREMIERE_SVT_SKILLS: SkillNode[] = [
  // =========================================================================================
  // PARTIE 1 : GÉOLOGIE DU GABON À LA LUMIÈRE DE LA TECTONIQUE DES PLAQUES
  // =========================================================================================
  {
    id: 'skill-1s-svt-chap1-ensembles-geologiques',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 1 : Les Grands Ensembles Géologiques du Gabon',
    description: 'Craton archéen du Chaillu et du Nord-Gabon (> 2,5 Ga), bassin paléoprotérozoïque du Francevillien (2,1 Ga, gisements de manganèse de Moanda et réacteurs naturels d\'Oklo), ceinture mobile panafricaine (chaîne des Nyanga et de l\'Ogooué), et bassin sédimentaire côtier atlantique.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 75,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Partie 1 : Géologie du Gabon à la Lumière de la Tectonique des Plaques',
    order: 1,
    topics: [
      'Le socle archéen granito-gneissique : Craton du Chaillu et massif du Nord-Gabon',
      'Le bassin sédimentaire intracratonique du Francevillien (formations FA à FE)',
      'Les réacteurs de fission nucléaire naturels d\'Oklo et faune macroscopique du Francevillien',
      'La ceinture panafricaine des Nyanga / Ogooué et le bassin sédimentaire côtier pétrolifère'
    ]
  },
  {
    id: 'skill-1s-svt-chap2-formations-tectonique',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 2 : Les Formations Géologiques du Gabon et la Tectonique des Plaques',
    description: 'Cycle orogénique, ouverture de l\'océan Atlantique Sud au Crétacé inférieur (-130 Ma), rifting intracontinental, failles normales syn-rift, dépôt des évaporites/sels aptiens et dynamique de la marge continentale passive gabonaise.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-svt-chap1-ensembles-geologiques'],
    masteryScore: 60,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Partie 1 : Géologie du Gabon à la Lumière de la Tectonique des Plaques',
    order: 2,
    topics: [
      'Du continent Gondwana à l\'ouverture de l\'Atlantique Sud au Crétacé',
      'Stades de rifting continental, fossés d\'effondrement et sédimentation syn-rift',
      'La crise de salinité aptienne : barrière de sel et halocinèse (dômes de sel)',
      'Pièges pétroliers sous le sel et contexte géodynamique de marge passive'
    ]
  },

  // =========================================================================================
  // PARTIE 2 : ÉDUCATION À LA SANTÉ SEXUELLE ET DE LA REPRODUCTION (ESSR)
  // =========================================================================================
  {
    id: 'skill-1s-svt-chap3-parente-responsable',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 3 : La Parenté Responsable',
    description: 'Planification familiale et espacement des naissances, méthodes contraceptives modernes (pilules œstroprogestatives, implants sous-cutanés, DIU, préservatifs masculins/féminins), prévention des grossesses précoces en milieu scolaire, et dépistage/traitement précoce des IST/VIH.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 80,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Partie 2 : Éducation à la Santé Sexuelle et de la Reproduction (ESSR)',
    order: 3,
    topics: [
      'Concept de parenté responsable, bien-être familial et espacement des naissances',
      'Modes d\'action des méthodes contraceptives hormonales, barrières et intra-utérines',
      'Grossesses précoces et non désirées en milieu scolaire : causes et conséquences',
      'Prévention combinée des IST/VIH, double protection et contraception d\'urgence (TPE)'
    ]
  },

  // =========================================================================================
  // PARTIE 3 : IDENTITÉ BIOLOGIQUE ET PROGRAMME GÉNÉTIQUE
  // =========================================================================================
  {
    id: 'skill-1s-svt-chap4-identite-biologique',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 4 : L\'Identité Biologique des Organismes',
    description: 'Unicité biologique de chaque être vivant, marqueurs membranaires d\'individualité (système ABO, facteur Rhésus), Complexe Majeur d\'Histocompatibilité (CMH/HLA de classe I et II), rejet de greffe et reconnaissance du soi vs non-soi.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 65,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Partie 3 : Identité Biologique et Programme Génétique',
    order: 4,
    topics: [
      'Les marqueurs moléculaires des hématies : agglutinogènes ABO et anticorps naturels',
      'Le système HLA/CMH : marqueurs protéiques universels des cellules nucléées',
      'La greffe tissulaire : autogreffe, allogreffe et mécanisme immunologique du rejet',
      'L\'unicité du génome individuel et empreintes génétiques'
    ]
  },
  {
    id: 'skill-1s-svt-chap5-structure-adn',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 5 : La Structure de la Molécule de l\'ADN',
    description: 'Double hélice de Watson et Crick, chaîne polynucléotidique, désoxyribonucléotides (adénine, thymine, cytosine, guanine), liaisons phosphodiester, appariements stériques A=T (2 liaisons H) et G≡C (3 liaisons H), et polarité 5\'→3\' antiparallèle.',
    difficulty: 2,
    prerequisiteIds: ['skill-1s-svt-chap4-identite-biologique'],
    masteryScore: 85,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Partie 3 : Identité Biologique et Programme Génétique',
    order: 5,
    topics: [
      'Constituants chimiques de l\'ADN : acide phosphorique, désoxyribose et 4 bases azotées',
      'Règle de Chargaff : rapports A/T = 1 et G/C = 1 et complémentarité des bases',
      'Architecture en double hélice antiparallèle et diamètre constant de 2 nm',
      'Organisation spatiale : nucléosomes, chromatine et condensation en chromosomes'
    ]
  },
  {
    id: 'skill-1s-svt-chap6-renouvellement-moleculaire',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 6 : Le Renouvellement Moléculaire',
    description: 'Réplication semi-conservative de l\'ADN au cours de la phase S de l\'interphase, expérience historique de Meselson et Stahl (15N et 14N), yeux de réplication, complexe enzymatique (hélicase, primase, ADN polymérase) et fidélité de la réplication.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-svt-chap5-structure-adn'],
    masteryScore: 70,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Partie 3 : Identité Biologique et Programme Génétique',
    order: 6,
    topics: [
      'L\'expérience de Meselson et Stahl : validation du modèle semi-conservatif',
      'Mécanisme moléculaire : ouverture de la double hélice et fourches de réplication',
      'Rôle de l\'ADN polymérase et synthèse continue (brin précoce) / discontinue (fragments d\'Okazaki)',
      'Correction d\'épreuves enzymatique et maintien de la constance du caryotype'
    ]
  },
  {
    id: 'skill-1s-svt-chap7-du-gene-a-la-proteine',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 7 : Du Gène à la Protéine',
    description: 'Expression génique en deux étapes : transcription de l\'ADN en ARN messager (ARN polymérase, épissage des introns), caractéristiques du code génétique (64 codons, 20 acides aminés, dégénérescence, universalité), et traduction ribosomale (initiation, élongation, terminaison).',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-svt-chap5-structure-adn'],
    masteryScore: 70,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Partie 3 : Identité Biologique et Programme Génétique',
    order: 7,
    topics: [
      'La transcription nucléaire : lecture du brin transcrit 3\'→5\' et synthèse de l\'ARNm 5\'→3\'',
      'Maturation de l\'ARNm chez les eucaryotes : coiffe, queue poly-A et épissage des introns',
      'Le code génétique universel : triplet de nucléotides (codon), codon initiateur AUG et codons STOP',
      'La traduction cytoplasmique : rôle des ribosomes, des ARNt adaptateurs et liaison peptidique'
    ]
  },
  {
    id: 'skill-1s-svt-chap8-enzymes-catalyseurs',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 8 : Les Enzymes, des Catalyseurs Biologiques',
    description: 'Nature protéique des enzymes, notion de biocatalyseur, double spécificité enzymatique (spécificité de substrat et d\'action), structure du site actif (site de fixation et site catalytique), cinétique michaelienne (Vmax, saturation), influence du pH et de la température.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-svt-chap7-du-gene-a-la-proteine'],
    masteryScore: 50,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Partie 3 : Identité Biologique et Programme Génétique',
    order: 8,
    topics: [
      'Définition et caractéristiques d\'une enzyme : efficacité, non-consommation, vitesse de réaction',
      'Double spécificité : spécificité vis-à-vis du substrat et spécificité de la réaction catalysée',
      'Le site actif : acides aminés de liaison et acides aminés catalytiques (ajustement induit)',
      'Cinétique enzymatique : saturation du site actif par le substrat, Vmax et dénaturation thermique'
    ]
  },
  {
    id: 'skill-1s-svt-chap9-identite-biologique-genotype',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 9 : Identité Biologique et Génotype',
    description: 'Mutations de l\'ADN (substitutions, délétions, insertions), mutations silencieuses, faux-sens et non-sens, relations entre génotype et phénotype aux trois échelles (moléculaire, cellulaire, macroscopique), exemple médical de la drépanocytose (mutation de la chaîne β de l\'hémoglobine, HbA vs HbS).',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-svt-chap7-du-gene-a-la-proteine', 'skill-1s-svt-chap8-enzymes-catalyseurs'],
    masteryScore: 55,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Partie 3 : Identité Biologique et Programme Génétique',
    order: 9,
    topics: [
      'Origine de la diversité allolique : les mutations ponctuelles et agents mutagènes',
      'Les trois niveaux du phénotype : moléculaire (protéine), cellulaire (hématie), macroscopique (clinique)',
      'Étude approfondie de la drépanocytose (anémie falciforme) : mutation GAG → GTG en position 6',
      'Polymorphisme génétique, allèles dominants, récessifs et codominants'
    ]
  },

  // =========================================================================================
  // PARTIE 4 : GÈNES ET BIOTECHNOLOGIES
  // =========================================================================================
  {
    id: 'skill-1s-svt-chap10-genie-genetique',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 10 : Génie Génétique et Applications',
    description: 'Principes et outils de la biologie moléculaire : enzymes de restriction (endonucléases), ADN ligase, vecteurs plasmidiques, étapes de la transgenèse, production de protéines recombinantes (insuline humaine), diagnostic génique (PCR, électrophorèse) et thérapie génique.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-svt-chap7-du-gene-a-la-proteine', 'skill-1s-svt-chap9-identite-biologique-genotype'],
    masteryScore: 40,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Partie 4 : Gènes et Biotechnologies',
    order: 10,
    topics: [
      'Les outils moléculaires : enzymes de restriction, bouts collants et ADN ligases',
      'La transgenèse : vecteur plasmidique recombinant, transformation bactérienne et sélection',
      'Production industrielle d\'insuline humaine recombinante et hormones de croissance',
      'Principes de la PCR (amplification en chaîne par polymérase) et thérapie génique somatique'
    ]
  },

  // =========================================================================================
  // PARTIE 5 : QUELQUES ASPECTS DU MÉTABOLISME ÉNERGÉTIQUE
  // =========================================================================================
  {
    id: 'skill-1s-svt-chap11-depenses-energetiques',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 11 : Les Dépenses Énergétiques des Organismes',
    description: 'Composantes de la dépense énergétique globale : métabolisme de base (MB), thermorégulation, action dynamique spécifique (ADS) des aliments, travail musculaire, calorimétrie directe et indirecte (mesure de VO2 et VCO2), quotient respiratoire (QR).',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 45,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Partie 5 : Quelques Aspects du Métabolisme Énergétique',
    order: 11,
    topics: [
      'Le métabolisme de base : définition, conditions de mesure et facteurs de variation',
      'Dépenses liées à la thermorégulation (organismes homéothermes) et à l\'activité physique',
      'Calorimétrie respiratoire : calcul de la dépense énergétique à partir du volume d\'O2 consommé',
      'Le quotient respiratoire QR = VCO2 / VO2 et nature des nutriments oxydés (glucides, lipides)'
    ]
  },
  {
    id: 'skill-1s-svt-chap12-energie-cellulaire',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 12 : L\'Énergie du Fonctionnement Cellulaire',
    description: 'La molécule d\'ATP (Adénosine Triphosphate) : structure, liaisons phosphoanhydres riches en énergie, réaction d\'hydrolyse (ΔG°\' = -30,5 kJ/mol), régénération continue de l\'ATP par la respiration cellulaire mitochondriale (glycolyse, cycle de Krebs, chaîne respiratoire) et par les fermentations.',
    difficulty: 4,
    prerequisiteIds: ['skill-1s-svt-chap11-depenses-energetiques'],
    masteryScore: 35,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Partie 5 : Quelques Aspects du Métabolisme Énergétique',
    order: 12,
    topics: [
      'L\'ATP, monnaie énergétique universelle de la cellule : couplage énergétique',
      'La glycolyse cytosolique anaérobie : 1 glucose → 2 pyruvates + 2 ATP + 2 NADH,H+',
      'La respiration mitochondriale : décarboxylation oxydative, cycle de Krebs et chaîne respiratoire',
      'Les fermentations anaérobies (fermentation lactique et fermentation alcoolique) : bilan en ATP'
    ]
  },
  {
    id: 'skill-1s-svt-chap13-metabolisme-homme',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 13 : Le Métabolisme Énergétique chez l\'Homme',
    description: 'Filières énergétiques musculaires lors de l\'effort : filière anaérobie alactique (phosphocréatine), filière anaérobie lactique (glycolyse rapide) et filière aérobie (oxydation du glycogène et des acides gras), consommation maximale d\'oxygène (VO2 max), adaptations cardiovasculaires et ventilatoires.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-svt-chap12-energie-cellulaire'],
    masteryScore: 30,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Partie 5 : Quelques Aspects du Métabolisme Énergétique',
    order: 13,
    topics: [
      'Les trois filières énergétiques de la contraction musculaire : cinétique et puissance',
      'La filière anaérobie alactique (réserves de phosphocréatine PCr) pour les efforts explosifs',
      'La consommation maximale d\'oxygène (VO2 max), seuil anaérobie et dette en oxygène',
      'Réponses physiologiques intégrées à l\'effort : fréquence cardiaque, volume d\'éjection systolique'
    ]
  },

  // =========================================================================================
  // PARTIE 6 : FLUX D'ÉNERGIE ET CYCLE DE LA MATIÈRE
  // =========================================================================================
  {
    id: 'skill-1s-svt-chap14-conversion-lumineuse',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 14 : La Conversion de l\'Énergie Lumineuse en Énergie Chimique',
    description: 'Photosynthèse oxygénique dans les chloroplastes : spectres d\'absorption et d\'action des pigments (chlorophylles a/b, caroténoïdes), phase photochimique thylakoïdienne (photolyse de l\'eau, chaîne de transport d\'électrons, synthèse d\'ATP et de NADPH,H+) et phase chimique stromatique (fixation du CO2 par la Rubisco, cycle de Calvin).',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 25,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Partie 6 : Flux d\'Énergie et Cycle de la Matière',
    order: 14,
    topics: [
      'Organisation ultrastructurale du chloroplaste : stroma, thylakoïdes et granums',
      'Les pigments photosynthétiques et capture des photons lumineux (spectre d\'action)',
      'La phase photochimique : oxydation de l\'eau 2 H2O → O2 + 4 H+ + 4 e- et photophosphorylation',
      'La phase d\'assimilation du carbone (Cycle de Calvin) et synthèse de trioses-phosphates'
    ]
  },
  {
    id: 'skill-1s-svt-chap15-flux-energie-carbone',
    subjectId: 'svt',
    levelId: '1ere-s',
    name: 'Chapitre 15 : Flux d\'Énergie, Cycle de la Matière et Actions de l\'Homme sur le Cycle du Carbone',
    description: 'Productivité primaire brute et nette, réseaux trophiques et pyramides écologiques, cycle biogéochimique du carbone entre réservoirs planétaires, rôle capital du Gabon (88 % de forêt équatoriale, 13 parcs nationaux, puits de carbone net séquestrant 100 Mt de CO2/an), déforestation, effet de serre et gouvernance climatique.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-svt-chap14-conversion-lumineuse'],
    masteryScore: 40,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Partie 6 : Flux d\'Énergie et Cycle de la Matière',
    order: 15,
    topics: [
      'Réseaux trophiques, productivité primaire nette et dissipation thermique de l\'énergie',
      'Le cycle biogéochimique mondial du carbone et flux entre atmosphère, biosphère et lithosphère',
      'Le Gabon, super-puissance verte : forêt équatoriale, parcs nationaux et bilan carbone ultra-positif',
      'Impacts anthropiques : combustibles fossiles, déforestation, réchauffement climatique et crédits carbone'
    ]
  }
];
