import { SkillNode } from '../types';

// =========================================================================================
// PROGRAMME OFFICIEL COMPLET D'HISTOIRE-GÉOGRAPHIE (GABON)
// Conforme au programme officiel des lycées (2nde, 1ère, Terminale)
// =========================================================================================

// -----------------------------------------------------------------------------------------
// SECONDE (2nde) : HISTOIRE
// -----------------------------------------------------------------------------------------
export const SECONDE_HISTOIRE_SKILLS: SkillNode[] = [
  {
    id: 'skill-2s-hg-chap1-afrique',
    subjectId: 'history_geo',
    levelId: '2nde-s',
    name: 'Chapitre 1 : Les apports de la civilisation africaine',
    description: 'Étude des fondements historiques du continent africain : apports de la préhistoire, berceau de l\'humanité, métallurgie et diffusion du fer, richesse de la tradition orale (Mvet, contes, généalogies) et art sacré africain.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 65,
    tier: 'Acquise',
    status: 'acquired',
    unit: '📜 HISTOIRE • Classe de Seconde',
    order: 1,
    topics: [
      'Leçon 1 : Les apports de la civilisation préhistorique',
      'Leçon 2 : La découverte, l’utilisation et la diffusion du fer',
      'Leçon 3 : La tradition orale',
      'Leçon 4 : L’art africain'
    ]
  },
  {
    id: 'skill-2s-hg-chap2-antiques',
    subjectId: 'history_geo',
    levelId: '2nde-s',
    name: 'Chapitre 2 : Les apports des civilisations antiques',
    description: 'Découverte des grandes civilisations de l\'Antiquité méditerranéenne : sciences et architecture égyptiennes, naissance de la démocratie directe à Athènes, vie culturelle et philosophique grecque, et droit républicain romain.',
    difficulty: 3,
    prerequisiteIds: ['skill-2s-hg-chap1-afrique'],
    masteryScore: 45,
    tier: 'En cours',
    status: 'in_progress',
    unit: '📜 HISTOIRE • Classe de Seconde',
    order: 2,
    topics: [
      'Leçon 1 : La vie scientifique et architecturale de l’Égypte antique',
      'Leçon 2 : Le fonctionnement de la démocratie à Athènes',
      'Leçon 3 : La vie intellectuelle et culturelle dans la Grèce antique',
      'Leçon 4 : Les institutions de la République romaine'
    ]
  },
  {
    id: 'skill-2s-hg-chap4-medievales',
    subjectId: 'history_geo',
    levelId: '2nde-s',
    name: 'Chapitre 4 : Les apports des grandes civilisations médiévales',
    description: 'Analyse des apports du Moyen Âge : rôle structurant de l\'Église dans la société féodale européenne, rayonnement scientifique, médical et commercial du monde arabo-musulman, et humanisme de la Renaissance.',
    difficulty: 3,
    prerequisiteIds: ['skill-2s-hg-chap2-antiques'],
    masteryScore: 30,
    tier: 'Découverte',
    status: 'available',
    unit: '📜 HISTOIRE • Classe de Seconde',
    order: 3,
    topics: [
      'Leçon 1 : Le rôle de l’église dans le fonctionnement de la société européenne',
      'Leçon 2 : La science, les techniques, l’art et le commerce arabo-musulmans',
      'Leçon 3 : L’œuvre des humanistes'
    ]
  },
  {
    id: 'skill-2s-hg-chap5-modernes',
    subjectId: 'history_geo',
    levelId: '2nde-s',
    name: 'Chapitre 5 : Les apports des civilisations modernes et contemporaines occidentales',
    description: 'Transformations majeures des temps modernes et contemporains : quatre révolutions industrielles, émergence des principes démocratiques modernes (séparation des pouvoirs) et consécration universelle des droits humains.',
    difficulty: 3,
    prerequisiteIds: ['skill-2s-hg-chap4-medievales'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'locked',
    unit: '📜 HISTOIRE • Classe de Seconde',
    order: 4,
    topics: [
      'Leçon 1 : Les avancées scientifiques, techniques et technologiques des quatre révolutions industrielles',
      'Leçon 2 : Les principes démocratiques issus des révolutions occidentales',
      'Leçon 3 : La promotion des droits humains'
    ]
  }
];

// -----------------------------------------------------------------------------------------
// SECONDE (2nde) : GÉOGRAPHIE
// -----------------------------------------------------------------------------------------
export const SECONDE_GEOGRAPHIE_SKILLS: SkillNode[] = [
  {
    id: 'skill-2s-geo-chap1-terre',
    subjectId: 'history_geo',
    levelId: '2nde-s',
    name: 'Chapitre 1 : La présentation de la Terre',
    description: 'Compréhension globale de la planète Terre : mouvements de rotation et de révolution, alternance jour/nuit et saisons, modes de projection cartographique, coordonnées géographiques (latitude et longitude).',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 50,
    tier: 'En cours',
    status: 'in_progress',
    unit: '🌍 GÉOGRAPHIE • Classe de Seconde',
    order: 5,
    topics: [
      'Leçon 1 : Les mouvements de la Terre et leurs conséquences',
      'Leçon 2 : Les types de représentation de la Terre',
      'Leçon 3 : La localisation d’un point sur le globe terrestre'
    ]
  },
  {
    id: 'skill-2s-geo-chap2-climats-vegetation',
    subjectId: 'history_geo',
    levelId: '2nde-s',
    name: 'Chapitre 2 : Les types de climat et de végétation du globe',
    description: 'Grandes zones bioclimatiques mondiales : facteurs de différenciation climatique (température, précipitations, latitude, altitude), grands types de climats, changements climatiques contemporains et formations végétales.',
    difficulty: 2,
    prerequisiteIds: ['skill-2s-geo-chap1-terre'],
    masteryScore: 40,
    tier: 'En cours',
    status: 'in_progress',
    unit: '🌍 GÉOGRAPHIE • Classe de Seconde',
    order: 6,
    topics: [
      'Leçon 1 : Les facteurs climatiques',
      'Leçon 2 : Les types de climats : caractéristiques et répartition',
      'Leçon 3 : Les changements climatiques : aspects, facteurs, conséquences et solutions',
      'Leçon 4 : Les types de végétation : caractéristiques et répartition'
    ]
  },
  {
    id: 'skill-2s-geo-chap3-reliefs',
    subjectId: 'history_geo',
    levelId: '2nde-s',
    name: 'Chapitre 3 : Les différentes formes de reliefs du globe',
    description: 'Morphologie et dynamique de l\'écorce terrestre : tectonique des plaques, reliefs continentaux structuraux (plaines, plateaux, montagnes), morphologie des fonds marins (dorsales, fosses) et processus d\'érosion.',
    difficulty: 3,
    prerequisiteIds: ['skill-2s-geo-chap2-climats-vegetation'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: '🌍 GÉOGRAPHIE • Classe de Seconde',
    order: 7,
    topics: [
      'Leçon 1 : Les mouvements des plaques tectoniques et leurs conséquences',
      'Leçon 2 : Les principales formes de reliefs structuraux (continentaux)',
      'Leçon 3 : Les principales formes du relief sous-marin',
      'Leçon 4 : Les processus d’érosion et les différents modelés'
    ]
  },
  {
    id: 'skill-2s-geo-chap4-littoraux',
    subjectId: 'history_geo',
    levelId: '2nde-s',
    name: 'Chapitre 4 : Les littoraux',
    description: 'Géomorphologie des zones côtières : typologie des côtes (côtes à falaises, côtes sableuses, lagunes, deltas, estuaires) et phénomènes d\'érosion littorale sous l\'action des houles, des courants et de l\'élévation du niveau marin.',
    difficulty: 2,
    prerequisiteIds: ['skill-2s-geo-chap3-reliefs'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: '🌍 GÉOGRAPHIE • Classe de Seconde',
    order: 8,
    topics: [
      'Leçon 1 : Les formes littorales et les types de côtes',
      'Leçon 2 : L’érosion littorale'
    ]
  },
  {
    id: 'skill-2s-geo-chap5-activites-environnement',
    subjectId: 'history_geo',
    levelId: '2nde-s',
    name: 'Chapitre 5 : Les activités humaines et leurs conséquences sur l’environnement',
    description: 'Interactions Homme-Nature : modes d\'occupation et activités selon les milieux de vie, impacts environnementaux (déforestation, pollutions, dégradation des sols) et stratégies de résilience et de lutte contre les catastrophes.',
    difficulty: 3,
    prerequisiteIds: ['skill-2s-geo-chap4-littoraux'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'locked',
    unit: '🌍 GÉOGRAPHIE • Classe de Seconde',
    order: 9,
    topics: [
      'Leçon 1 : Les types d’activités selon les milieux de vie',
      'Leçon 2 : L’impact des activités humaines sur l’environnement',
      'Leçon 3 : Les stratégies de lutte contre les catastrophes environnementales'
    ]
  }
];

export const SECONDE_HG_ALL_SKILLS: SkillNode[] = [
  ...SECONDE_HISTOIRE_SKILLS,
  ...SECONDE_GEOGRAPHIE_SKILLS
];

// -----------------------------------------------------------------------------------------
// PREMIÈRE (1ère) : HISTOIRE
// -----------------------------------------------------------------------------------------
export const PREMIERE_HISTOIRE_SKILLS: SkillNode[] = [
  {
    id: 'skill-1s-hist-chap1-essor-europe',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 1 : L’essor de l’Europe au XIXe et au milieu du XXe siècle',
    description: 'Les fondements de l\'hégémonie européenne : causes des progrès scientifiques et techniques, inventions décisives (machine à vapeur, électricité, moteur à explosion, chimie) et retombées économiques et sociales.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 60,
    tier: 'Acquise',
    status: 'acquired',
    unit: '📜 HISTOIRE • Classe de Première',
    order: 1,
    topics: [
      'Leçon 1 : Les causes des progrès scientifiques et techniques',
      'Leçon 2 : Les inventions et innovations scientifiques et techniques',
      'Leçon 3 : Les retombées des progrès scientifiques et techniques'
    ]
  },
  {
    id: 'skill-1s-hist-chap2-imperialisme-afrique',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 2 : L’impérialisme et le colonialisme en Afrique',
    description: 'Pénétration coloniale en Afrique : causes de l\'expansion (économiques, géopolitiques, idéologiques), missions d\'exploration, partage colonial à la Conférence de Berlin (1884-1885), organisation des colonies et résistances héroïques au Gabon (Emane Tole, Nyonda Makita, Wongo).',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-hist-chap1-essor-europe'],
    masteryScore: 50,
    tier: 'En cours',
    status: 'in_progress',
    unit: '📜 HISTOIRE • Classe de Première',
    order: 2,
    topics: [
      'Leçon 1 : Les causes de l’expansion coloniale',
      'Leçon 2 : Les explorations',
      'Leçon 3 : L’organisation politique et économique des colonies',
      'Leçon 4 : Les résistances à la colonisation au Gabon',
      'Leçon 5 : Les explorations et la conférence de Berlin / La carte politique du monde en 1914'
    ]
  },
  {
    id: 'skill-1s-hist-chap3-premiere-guerre',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 3 : La première Guerre mondiale',
    description: 'La Grande Guerre (1914-1918) : origines de la conflagration générale, phases des opérations militaires, bilan humain et géopolitique, et participation et conséquences pour le Gabon et l\'AEF (combats de Mbirou, portage, tirailleurs).',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-hist-chap2-imperialisme-afrique'],
    masteryScore: 35,
    tier: 'Découverte',
    status: 'in_progress',
    unit: '📜 HISTOIRE • Classe de Première',
    order: 3,
    topics: [
      'Leçon 1 : Les origines, les grandes phases et les conséquences de la guerre',
      'Leçon 2 : Le Gabon dans la Première Guerre mondiale'
    ]
  },
  {
    id: 'skill-1s-hist-chap4-ideologies',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 4 : L’affirmation de nouvelles idéologies',
    description: 'Bouleversements idéologiques majeurs de l\'entre-deux-guerres : Révolution bolchévique russe d\'octobre 1917 menée par Lénine, émergence des régimes autoritaires et totalitaires (fascisme, nazisme), et courants du socialisme.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-hist-chap3-premiere-guerre'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: '📜 HISTOIRE • Classe de Première',
    order: 4,
    topics: [
      'Leçon 1 : La révolution russe de 1917',
      'Leçon 2 : Les régimes autoritaires en Europe dans l’entre-deux-guerres',
      'Leçon 3 : Les socialismes'
    ]
  },
  {
    id: 'skill-1s-hist-chap5-seconde-guerre',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 5 : La Seconde Guerre mondiale',
    description: 'Le second conflit mondial (1939-1945) : causes immédiates et profondes, théâtres d\'opérations mondiaux, conséquences humaines, morales et matérielles, et rôle du Gabon dans les combats de ralliement à la France Libre (bataille de Libreville en novembre 1940).',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-hist-chap4-ideologies'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'locked',
    unit: '📜 HISTOIRE • Classe de Première',
    order: 5,
    topics: [
      'Leçon 1 : Les origines, les grandes phases et les conséquences de la guerre',
      'Leçon 2 : Le Gabon dans la Seconde Guerre mondiale'
    ]
  }
];

// -----------------------------------------------------------------------------------------
// PREMIÈRE (1ère) : GÉOGRAPHIE
// -----------------------------------------------------------------------------------------
export const PREMIERE_GEOGRAPHIE_SKILLS: SkillNode[] = [
  {
    id: 'skill-1s-hg-chap1-cadre-biophysique',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 1 : Le cadre biophysique du Gabon',
    description: 'Milieu naturel gabonais et valorisation : relief étagé (plaines côtières, massifs du Chaillu et monts de Cristal, plateaux), hydrographie dominée par le bassin de l\'Ogooué (80 % du pays), et climats équatoriaux à végétation forestière dense.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 70,
    tier: 'Acquise',
    status: 'acquired',
    unit: '🌍 GÉOGRAPHIE • Classe de Première',
    order: 6,
    topics: [
      'Leçon 1 : Le relief et l’hydrographie',
      'Leçon 2 : Les types de climat et de végétation'
    ]
  },
  {
    id: 'skill-1s-hg-chap2-cadre-humain',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 2 : Le cadre humain du Gabon',
    description: 'Démographie du Gabon et de l\'Afrique : répartition inégale de la population, macrocéphalie urbaine de Libreville et Port-Gentil, comportements démographiques (fécondité, natalité, jeunesse), défis urbains et politiques de population.',
    difficulty: 2,
    prerequisiteIds: ['skill-1s-hg-chap1-cadre-biophysique'],
    masteryScore: 65,
    tier: 'Acquise',
    status: 'acquired',
    unit: '🌍 GÉOGRAPHIE • Classe de Première',
    order: 7,
    topics: [
      'Leçon 1 : La répartition de la population du Gabon',
      'Leçon 2 : Les comportements démographiques en Afrique et au Gabon'
    ]
  },
  {
    id: 'skill-1s-hg-chap3-cadre-economique',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 3 : Le cadre économique du Gabon',
    description: 'Secteurs clés de l\'économie nationale : ressources naturelles (pétrole, manganèse de Moanda, bois Okoumé, fer), agriculture, élevage et pêche, impact environnemental, industries de transformation (ZERP de Nkok) et secteur tertiaire.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-hg-chap2-cadre-humain'],
    masteryScore: 60,
    tier: 'Acquise',
    status: 'acquired',
    unit: '🌍 GÉOGRAPHIE • Classe de Première',
    order: 8,
    topics: [
      'Leçon 1 : Les ressources naturelles (mines, hydrocarbures, bois)',
      'Leçon 2 : L’agriculture, l’élevage et la pêche continentale et maritime',
      'Leçon 3 : L’impact environnemental de l’exploitation des ressources naturelles et des activités agricoles',
      'Leçon 4 : Les activités industrielles',
      'Leçon 5 : Les activités du secteur tertiaire'
    ]
  },
  {
    id: 'skill-1s-hg-chap4-population-mondiale',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 4 : La population mondiale',
    description: 'Peuplement de la planète Terre : inégale répartition des 8 milliards d\'êtres humains, grands foyers de peuplement (Asie de l\'Est, Asie du Sud, Europe) et déserts humains, facteurs explicatifs naturels et socio-historiques.',
    difficulty: 2,
    prerequisiteIds: ['skill-1s-hg-chap3-cadre-economique'],
    masteryScore: 55,
    tier: 'Découverte',
    status: 'in_progress',
    unit: '🌍 GÉOGRAPHIE • Classe de Première',
    order: 9,
    topics: [
      'Leçon 1 : La répartition des hommes à la surface de la Terre'
    ]
  },
  {
    id: 'skill-1s-hg-chap5-economie-mondiale',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 5 : L’économie mondiale',
    description: 'Dynamiques de l\'économie mondialisée : exploitation et flux des ressources énergétiques et minières, localisation et recomposition des grandes régions industrielles (pays du Nord et puissances émergentes du Sud).',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-hg-chap4-population-mondiale'],
    masteryScore: 45,
    tier: 'Découverte',
    status: 'in_progress',
    unit: '🌍 GÉOGRAPHIE • Classe de Première',
    order: 10,
    topics: [
      'Leçon 1 : L’exploitation des ressources énergétiques et minières',
      'Leçon 2 : Les régions industrielles dans les pays du Nord'
    ]
  }
];

export const PREMIERE_HG_ALL_SKILLS: SkillNode[] = [
  ...PREMIERE_HISTOIRE_SKILLS,
  ...PREMIERE_GEOGRAPHIE_SKILLS
];

// -----------------------------------------------------------------------------------------
// TERMINALE (Tle) : HISTOIRE
// -----------------------------------------------------------------------------------------
export const TERMINALE_HISTOIRE_SKILLS: SkillNode[] = [
  {
    id: 'skill-tle-hist-chap1-bilan-guerre-onu',
    subjectId: 'history_geo',
    levelId: 'term-a',
    name: 'Chapitre 1 : Le bilan de la Seconde Guerre mondiale et la réorganisation politique du monde',
    description: 'Le monde au sortir du second conflit mondial : bilans humain (Shoah, 60 millions de morts), matériel, économique et moral ; émergence des deux superpuissances (États-Unis et URSS), conférences tripartites de Yalta et Potsdam, remaniements territoriaux et création de l\'ONU.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 55,
    tier: 'Découverte',
    status: 'in_progress',
    unit: '📜 HISTOIRE • Classe de Terminale',
    order: 1,
    topics: [
      'Leçon 1 : Bilan humain, matériel, économique et moral de la guerre',
      'Leçon 2 : Les nouveaux rapports de force',
      'Leçon 3 : Les grandes conférences tripartites (Yalta et Potsdam)',
      'Leçon 4 : Les modifications territoriales au sortir de la Seconde Guerre mondiale',
      'Leçon 5 : L’ONU (objectifs, organes de fonctionnement et spécialisés, œuvres)'
    ]
  },
  {
    id: 'skill-tle-hist-chap2-guerre-froide',
    subjectId: 'history_geo',
    levelId: 'term-a',
    name: 'Chapitre 2 : La guerre froide (1947-1991)',
    description: 'L\'affrontement idéologique bipolaire : origines, doctrine Truman et Jdanov, guerre de Corée, crises de Berlin (blocus de 1948, mur de 1961), crise des missiles de Cuba (1962), Coexistence pacifique, guerre du Vietnam, guerre fraîche et effondrement de l\'URSS (1991).',
    difficulty: 4,
    prerequisiteIds: ['skill-tle-hist-chap1-bilan-guerre-onu'],
    masteryScore: 40,
    tier: 'Découverte',
    status: 'in_progress',
    unit: '📜 HISTOIRE • Classe de Terminale',
    order: 2,
    topics: [
      'Leçon 1 : Les origines de la Guerre froide : la bipolarisation du monde et la guerre de Corée',
      'Leçon 2 : Les crises de la Guerre froide (crise de Berlin)',
      'Leçon 3 : La Coexistence pacifique (crises de Berlin et de Cuba)',
      'Leçon 4 : La Détente (guerre du Vietnam)',
      'Leçon 5 : La Guerre fraîche',
      'Leçon 6 : La nouvelle détente et l’effondrement de l’URSS'
    ]
  },
  {
    id: 'skill-tle-hist-chap3-decolonisation',
    subjectId: 'history_geo',
    levelId: 'term-a',
    name: 'Chapitre 3 : La décolonisation de l’Afrique francophone',
    description: 'Processus d\'émancipation nationale : décolonisation négociée au Gabon (loi-cadre Defferre, Communauté de 1958, proclamation de l\'indépendance le 17 août 1960 par Léon Mba) et décolonisation armée en Algérie (guerre d\'Algérie de 1954 à 1962, accords d\'Évian).',
    difficulty: 3,
    prerequisiteIds: ['skill-tle-hist-chap2-guerre-froide'],
    masteryScore: 25,
    tier: 'Découverte',
    status: 'available',
    unit: '📜 HISTOIRE • Classe de Terminale',
    order: 3,
    topics: [
      'Leçon 1 : La décolonisation du Gabon',
      'Leçon 2 : La décolonisation de l’Algérie'
    ]
  },
  {
    id: 'skill-tle-hist-chap4-tiers-monde',
    subjectId: 'history_geo',
    levelId: 'term-a',
    name: 'Chapitre 4 : L’émergence politique du tiers-monde',
    description: 'Entrée des pays décolonisés sur la scène internationale : conférence historique afro-asiatique de Bandung (1955), affirmation de la souveraineté des peuples du Sud et constitution du mouvement des Pays Non-Alignés (conférence de Belgrade 1961).',
    difficulty: 3,
    prerequisiteIds: ['skill-tle-hist-chap3-decolonisation'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'available',
    unit: '📜 HISTOIRE • Classe de Terminale',
    order: 4,
    topics: [
      'Leçon 1 : La conférence de Bandung',
      'Leçon 2 : La naissance du mouvement des Non-alignés'
    ]
  },
  {
    id: 'skill-tle-hist-chap5-democratie-afrique',
    subjectId: 'history_geo',
    levelId: 'term-a',
    name: 'Chapitre 5 : La question démocratique en Afrique noire francophone',
    description: 'Évolution politique de l\'Afrique post-coloniale : causes du vent d\'Est et du renouveau démocratique des années 1990 (conférence nationale gabonaise de 1990, discours de La Baule, crises socio-économiques), acquis (multipartisme, libertés) et limites.',
    difficulty: 3,
    prerequisiteIds: ['skill-tle-hist-chap4-tiers-monde'],
    masteryScore: 0,
    tier: 'Non commencée',
    status: 'locked',
    unit: '📜 HISTOIRE • Classe de Terminale',
    order: 5,
    topics: [
      'Leçon 1 : Les causes du renouveau démocratique en Afrique noire francophone',
      'Leçon 2 : Les acquis et les limites de la démocratisation de l’Afrique noire francophone'
    ]
  }
];

export const TERMINALE_HG_ALL_SKILLS: SkillNode[] = [
  ...TERMINALE_HISTOIRE_SKILLS
];
