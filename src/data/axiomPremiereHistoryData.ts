import { SkillNode } from '../types';

// =========================================================================================
// PROGRAMME OFFICIEL D'HISTOIRE-GÉOGRAPHIE : PREMIÈRE (GABON)
// Thème officiel : Le Gabon et l'espace-monde
// Structuré en 5 Chapitres et 13 Leçons détaillées avec activités anthropiques de mise en valeur
// =========================================================================================

export const PREMIERE_HG_SKILLS: SkillNode[] = [
  // ---------------------------------------------------------------------------------------
  // CHAPITRE 1 : LE CADRE BIOPHYSIQUE DU GABON
  // ---------------------------------------------------------------------------------------
  {
    id: 'skill-1s-hg-chap1-cadre-biophysique',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 1 : Le Cadre Biophysique du Gabon',
    description: 'Étude du milieu naturel gabonais et de sa mise en valeur par les populations : morphologie du relief (plaines côtières sédimentaires, massifs montagneux du Chaillu et monts de Cristal, plateaux Batéké et du Woleu-Ntem/Ogooué-Ivindo), réseau hydrographique abondant axé sur le bassin de l\'Ogooué (80 % du pays) et fleuves côtiers (Komo, Nyanga, Ntem). Types de climats équatoriaux et de transition (fortes pluies > 1 800 à 3 000 mm, températures constantes ~26 °C) et couverture végétale (forêt dense sempervirente sur 88 % du territoire et savanes). Analyse des activités de mise en valeur menées par les populations : barrages hydroélectriques (Tchimbélé, Kinguélé, Grand Poubara), transport fluvial, exploitation forestière raisonnée, agriculture et écotourisme.',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 70,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Thème : Le Gabon et l’espace-monde',
    order: 1,
    topics: [
      'Leçon 1 : Le relief et l’hydrographie du Gabon (plaines, monts Chaillu/Cristal, plateaux Batéké et bassin de l\'Ogooué)',
      'Leçon 2 : Les types de climat et de végétation (climat équatorial, forêt sempervirente et îlots de savane)',
      'Activités des populations pour mettre en valeur le cadre biophysique (barrages hydroélectriques, navigation, écotourisme, bois)'
    ]
  },

  // ---------------------------------------------------------------------------------------
  // CHAPITRE 2 : LE CADRE HUMAIN DU GABON
  // ---------------------------------------------------------------------------------------
  {
    id: 'skill-1s-hg-chap2-cadre-humain',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 2 : Le Cadre Humain du Gabon',
    description: 'Analyse démographique approfondie : répartition spatiale très inégale de la population gabonaise (faible densité moyenne ~8,5 hab/km² contrastant avec une macrocéphalie urbaine record dépassant 88 % concentrée à Libreville, Owendo, Akanda et Port-Gentil, laissant de vastes vides forestiers à l\'intérieur). Comportements démographiques au Gabon et en Afrique : aspects (fécondité élevée, recul de la mortalité infantile, extrême jeunesse avec > 50 % de moins de 20 ans), facteurs explicatifs (socio-culturels, précocité des unions, progrès sanitaires), problèmes majeurs (chômage des jeunes diplômés, sous-équipement des structures scolaires et sanitaires, exode rural dépeuplant l\'hinterland) et solutions stratégiques (politique nationale de population, planification familiale, insertion professionnelle, aménagement équilibré du territoire et décentralisation).',
    difficulty: 2,
    prerequisiteIds: ['skill-1s-hg-chap1-cadre-biophysique'],
    masteryScore: 65,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Thème : Le Gabon et l’espace-monde',
    order: 2,
    topics: [
      'Leçon 1 : La répartition de la population du Gabon (densité, déserts humains intérieurs et littoralisation urbaine)',
      'Leçon 2 : Les comportements démographiques en Afrique et au Gabon : aspects, facteurs, problèmes et solutions',
      'Défis de l\'urbanisation accélérée, macrocéphalie de Libreville et aménagement du territoire'
    ]
  },

  // ---------------------------------------------------------------------------------------
  // CHAPITRE 3 : LE CADRE ÉCONOMIQUE DU GABON
  // ---------------------------------------------------------------------------------------
  {
    id: 'skill-1s-hg-chap3-cadre-economique',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 3 : Le Cadre Économique du Gabon',
    description: 'Panorama structurel de l\'économie nationale gabonaise en 5 volets fondamentaux : [1] Ressources naturelles abondantes (hydrocarbures onshore et offshore profond, manganèse de Moanda dont le Gabon est 2e producteur mondial, fer de Bélinga, or alluvionnaire, et filière bois dominée par l\'Okoumé) ; [2] Agriculture, élevage et pêche (agriculture vivrière sur brûlis, plantations agro-industrielles d\'hévéa et palmier à huile, ranches d\'élevage bovin de la Nyanga et Lekabi, pêche artisanale et industrielle dans la ZEE) ; [3] Impact environnemental de l\'exploitation des ressources et de l\'agriculture (déforestation, marées noires, pollution des cours d\'eau par le mercure, érosion côtière) et réponses écologiques (réseau des 13 parcs nationaux, crédits carbone, certification FSC) ; [4] Activités industrielles (raffinage Sogara, métallurgie du manganèse au CMM, ZERP de Nkok et usines de déroulage/contreplaqué) ; [5] Activités du secteur tertiaire avec focalisation sur l\'écotourisme (biodiversité des parcs) et l\'économie numérique (fibre optique, fintechs, e-gouvernance) en explicitant aspects, facteurs, problèmes et solutions.',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-hg-chap2-cadre-humain'],
    masteryScore: 60,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Thème : Le Gabon et l’espace-monde',
    order: 3,
    topics: [
      'Leçon 1 : Les ressources naturelles (mines, hydrocarbures, bois et potentiel minier)',
      'Leçon 2 : L’agriculture, l’élevage et la pêche continentale et maritime',
      'Leçon 3 : L’impact environnemental de l’exploitation des ressources naturelles et des activités agricoles',
      'Leçon 4 : Les activités industrielles (ZERP de Nkok, raffinage, métallurgie et transformation du bois)',
      'Leçon 5 : Les activités du secteur tertiaire : accent sur le tourisme et l’économie numérique (aspects, facteurs, problèmes, solutions)'
    ]
  },

  // ---------------------------------------------------------------------------------------
  // CHAPITRE 4 : LA POPULATION MONDIALE
  // ---------------------------------------------------------------------------------------
  {
    id: 'skill-1s-hg-chap4-population-mondiale',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 4 : La Population Mondiale',
    description: 'Analyse géographique du peuplement de la planète : répartition des 8 milliards d\'habitants à la surface de la Terre, caractérisée par une très forte inégalité spatiale. Identification des trois grands foyers majeurs de peuplement concentrant plus de la moitié de l\'humanité (Asie de l\'Est, Asie du Sud, Europe) et des foyers secondaires (littoral atlantique nord-américain, golfe de Guinée, Asie du Sud-Est, littoral brésilien). Analyse des grands vides humains et milieux contraignants : déserts froids polaires, déserts chauds arides (Sahara, Arabie, Australie), hautes altitudes et grandes forêts denses équatoriales (Amazonie, bassin du Congo). Facteurs explicatifs : conditions naturelles (bioclimats, fleuves nourriciers, sols fertiles) et facteurs historiques et économiques (civilisations agraires anciennes, riziculture inondée, révolution industrielle, littoraux et métropoles mondiales).',
    difficulty: 2,
    prerequisiteIds: [],
    masteryScore: 55,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Thème : Le Gabon et l’espace-monde',
    order: 4,
    topics: [
      'Leçon 1 : La répartition des hommes à la surface de la Terre (foyers denses et déserts humains)',
      'Les trois grands foyers de peuplement planétaires (Asie de l\'Est, Asie du Sud, Europe) et foyers secondaires',
      'Les facteurs naturels, historiques et socio-économiques expliquant les densités mondiales',
      'Dynamiques contemporaines : métropolisation, littoralisation et transitions démographiques mondiales'
    ]
  },

  // ---------------------------------------------------------------------------------------
  // CHAPITRE 5 : L’ÉCONOMIE MONDIALE
  // ---------------------------------------------------------------------------------------
  {
    id: 'skill-1s-hg-chap5-economie-mondiale',
    subjectId: 'history_geo',
    levelId: '1ere-s',
    name: 'Chapitre 5 : L’Économie Mondiale',
    description: 'Étude des structures et dynamiques de la mondialisation économique : [1] Exploitation et flux des ressources énergétiques (pétrole, gaz naturel, charbon, uranium, renouvelables) et minières (fer, cuivre, bauxite, lithium, terres rares), disparités géographiques entre pays producteurs/exportateurs et pays consommateurs, et géopolitique des approvisionnements ; [2] Localisation et recomposition des régions industrielles : régions traditionnelles et technopôles des pays du Nord (Manufacturing Belt / Sun Belt aux États-Unis, dorsale européenne, Japon), désindustrialisation partielle et essor spectaculaire des puissances industrielles du Sud (Chine « usine du monde », tigres asiatiques, Inde, Brésil) ; [3] Prépondérance du secteur des services dans les pays du Nord et du Sud, tertiarisation des emplois et étude de cas approfondie du tourisme international (première industrie mondiale, flux majeurs Nord-Nord et Nord-Sud, tourisme balnéaire, culturel et d\'affaires, retombées économiques fondamentales et défis de durabilité socio-environnementale).',
    difficulty: 3,
    prerequisiteIds: ['skill-1s-hg-chap4-population-mondiale'],
    masteryScore: 45,
    tier: 'Découverte',
    status: 'in_progress',
    unit: 'Thème : Le Gabon et l’espace-monde',
    order: 5,
    topics: [
      'Leçon 1 : L’exploitation des ressources énergétiques et minières à l\'échelle mondiale',
      'Leçon 2 : Les régions industrielles dans les pays du Nord et dans les pays du Sud (recompositions et délocalisations)',
      'Leçon 3 : Le secteur des services dans les pays du Nord et dans les pays du Sud : cas approfondi du tourisme',
      'Mondialisation des échanges, division internationale du travail et interdépendances géoéconomiques'
    ]
  }
];
