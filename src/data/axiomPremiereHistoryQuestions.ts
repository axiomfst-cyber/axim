import { ExerciseQuestion } from '../types';

// =====================================================================
// BANQUE OFFICIELLE DE QUESTIONS D'HISTOIRE-GÉOGRAPHIE : PREMIÈRE (GABON)
// Thème officiel : Le Gabon et l'espace-monde
// 5 Chapitres et 13 Leçons officielles
// =====================================================================

export const PREMIERE_HG_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // ===================================================================
  // CHAPITRE 1 : LE CADRE BIOPHYSIQUE DU GABON
  // Leçon 1 : Le relief et l'hydrographie
  // Leçon 2 : Les types de climat et de végétation
  // NB : Activités menées par les populations pour mettre en valeur ces éléments
  // ===================================================================
  'skill-1s-hg-chap1-cadre-biophysique': [
    {
      id: 'q-1s-hg-ch1-relief-1',
      exerciseId: 'ex-1s-hg-ch1-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : Les grands ensembles du relief gabonais',
      microConcept: 'Le relief du Gabon comprend trois grands ensembles morphologiques étagés d\'ouest en est : 1. Les plaines côtières sédimentaires bordant l\'océan Atlantique (larges de 20 à 150 km) ; 2. Les massifs montagneux et collines intérieures, formés par les monts de Cristal au nord-ouest et le massif du Chaillu au centre-sud (abritant les plus hauts sommets comme le mont Milondo à 1 020 m) ; 3. Les plateaux intérieurs (plateaux de l\'Ogooué-Ivindo, plateaux du Woleu-Ntem et plateaux Batéké au sud-est).',
      hint: 'Ces massifs montagneux intérieurs séparent les plaines littorales des hauts plateaux de l\'est.',
      prompt: 'Parmi les ensembles morphologiques suivants, quel massif montagneux traverse la zone centrale et méridionale du Gabon en abritant les points culminants du pays ?',
      options: [
        'Le massif du Chaillu (avec le mont Milondo et le mont Iboundji)',
        'Le massif du mont Jura',
        'Les monts Fouta-Djalon',
        'La cordillère des Andes'
      ],
      correctAnswer: 'Le massif du Chaillu (avec le mont Milondo et le mont Iboundji)',
      commonMistake: 'Confondre les monts de Cristal situés au nord-est de Libreville avec le massif du Chaillu situé dans le centre-sud.',
      explanation: 'Le massif du Chaillu constitue la colonne vertébrale montagneuse du Gabon central et méridional, jouant le rôle de véritable château d\'eau pour les bassins de la Ngounié et de l\'Ogooué.',
      steps: [
        '1. Observer la carte du relief gabonais d\'ouest en est.',
        '2. Identifier la plaine côtière basse à l\'ouest.',
        '3. Repérer les monts de Cristal au nord-ouest et le massif du Chaillu au centre-sud.',
        '4. Les hauts plateaux Batéké et de l\'Ogooué-Ivindo forment l\'arrière-pays à l\'est.'
      ]
    },
    {
      id: 'q-1s-hg-ch1-hydro-2',
      exerciseId: 'ex-1s-hg-ch1-2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : Le réseau hydrographique et l\'Ogooué',
      microConcept: 'Le réseau hydrographique du Gabon est exceptionnellement dense, favorisé par la surabondance des pluies équatoriales. Le fleuve Ogooué est l\'artère maîtresse du pays : long de 1 200 km, il draine un bassin versant de 215 000 km², soit plus de 80 % du territoire national. Ses principaux affluents sont l\'Ivindo, la Ngounié et l\'Offoué. Les autres fleuves sont côtiers : le Komo, la Nyanga et le Ntem.',
      hint: 'Ce fleuve traverse presque tout le pays d\'est en ouest pour se jeter dans l\'Atlantique par un vaste delta.',
      prompt: 'Quelle proportion du territoire gabonais est drainée par le bassin versant du fleuve Ogooué et de ses affluents majeurs (Ngounié, Ivindo) ?',
      options: [
        'Plus de 80 % du territoire national (environ 215 000 km²)',
        'Moins de 10 % du territoire national',
        'Exactement 25 % du territoire',
        'Uniquement la presqu\'île de Libreville'
      ],
      correctAnswer: 'Plus de 80 % du territoire national (environ 215 000 km²)',
      commonMistake: 'Croire que les fleuves côtiers comme le Komo ou la Nyanga drainent la majorité du pays, alors que l\'Ogooué domine écrasamment l\'hydrographie gabonaise.',
      explanation: 'L\'Ogooué et ses grands affluents structurent l\'ensemble de l\'espace gabonais, servant de voie de pénétration historique, de source d\'énergie hydroélectrique et de bassin vivrier de premier plan.',
      steps: [
        '1. Longueur de l\'Ogooué : 1 200 km.',
        '2. Bassin versant gabonais : 215 000 km² sur les 267 667 km² du pays.',
        '3. Ratio : environ 80 % de la superficie nationale couverte.'
      ]
    },
    {
      id: 'q-1s-hg-ch1-climat-3',
      exerciseId: 'ex-1s-hg-ch1-3',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 2 : Climat et couvert végétal du Gabon',
      microConcept: 'Le Gabon bénéficie d\'un climat équatorial chaud et très humide, caractérisé par des températures moyennes élevées et constantes (~25 à 27 °C), une hygrométrie supérieure à 80 % et des précipitations annuelles abondantes (1 800 mm à l\'intérieur, plus de 3 000 mm sur le littoral). Ce climat engendre une forêt dense sempervirente (forêt ombrophile équatoriale) couvrant environ 88 % du territoire, avec des savanes arbustives localisées dans la vallée de la Ngounié, de la Nyanga et sur les plateaux Batéké.',
      hint: 'Pense au taux de couverture forestière qui fait du Gabon un pays phare du bassin du Congo.',
      prompt: 'Quelle est la caractéristique dominante de la végétation naturelle du Gabon façonnée par son climat équatorial humide ?',
      options: [
        'Une forêt dense humide équatoriale sempervirente recouvrant près de 88 % du territoire national',
        'Un désert aride sans aucun arbre',
        'Une steppe d\'épineux sèche sur 95 % de la superficie',
        'Une toundra gelée en permanence'
      ],
      correctAnswer: 'Une forêt dense humide équatoriale sempervirente recouvrant près de 88 % du territoire national',
      commonMistake: 'Sous-estimer la superficie forestière en pensant que les savanes représentent l\'essentiel du paysage.',
      explanation: 'La forêt gabonaise couvre plus de 22 millions d\'hectares (88 % de la superficie), faisant du Gabon l\'un des deux pays les plus boisés au monde par habitant et le cœur du deuxième poumon vert de la planète.',
      steps: [
        '1. Climat chaud et humide permanent toute l\'année.',
        '2. Pluviométrie record : 1 800 à plus de 3 000 mm par an.',
        '3. Conséquence botanique : forêt dense ombrophile sempervirente dominante.'
      ]
    },
    {
      id: 'q-1s-hg-ch1-valeur-4',
      exerciseId: 'ex-1s-hg-ch1-4',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'NB : Mise en valeur du cadre biophysique par les populations',
      microConcept: 'Les populations gabonaises et l\'État ont valorisé ce cadre biophysique à travers : 1. L\'aménagement hydroélectrique des chutes et rapides fluviaux pour produire de l\'électricité (barrages de Kinguélé et Tchimbélé sur la Mbei, barrage de Grand Poubara sur l\'Ogooué à Franceville) ; 2. La navigation fluviale historique pour le flottage des grumes de bois (okoumé) et le transport des personnes ; 3. L\'exploitation forestière durable sous certification ; 4. Le tourisme écologique et scientifique dans les 13 parcs nationaux protégeant ce biotope.',
      hint: 'Ces aménagements majeurs transforment la force motrice des cours d\'eau et des cascades en énergie électrique pour les villes et les usines.',
      prompt: 'Quelle infrastructure majeure illustre concrètement la mise en valeur des cours d\'eau gabonais pour approvisionner le pays en énergie renouvelable ?',
      options: [
        'La construction de barrages hydroélectriques sur les cours d\'eau (Kinguélé, Tchimbélé sur la Mbei, et Grand Poubara sur l\'Ogooué)',
        'L\'assèchement complet de tous les fleuves pour construire des pistes cyclables',
        'La construction de centrales nucléaires sous-marines',
        'La déviation de l\'Ogooué vers le désert du Sahara'
      ],
      correctAnswer: 'La construction de barrages hydroélectriques sur les cours d\'eau (Kinguélé, Tchimbélé sur la Mbei, et Grand Poubara sur l\'Ogooué)',
      commonMistake: 'Oublier que les fleuves gabonais fournissent une grande part de l\'électricité nationale grâce aux chutes d\'eau naturelles.',
      explanation: 'Les barrages de Tchimbélé-Kinguélé alimentent Libreville et sa région, tandis que le barrage de Grand Poubara fournit l\'énergie nécessaire au complexe métallurgique de Moanda et à la province du Haut-Ogooué.',
      steps: [
        '1. Relief accidenté + fort débit d\'eau = potentiel hydroélectrique majeur.',
        '2. Aménagements sur la Mbei (Tchimbélé, Kinguélé) et l\'Ogooué (Grand Poubara).',
        '3. Rôle économique : électrification urbaine et industrielle.'
      ]
    }
  ],

  // ===================================================================
  // CHAPITRE 2 : LE CADRE HUMAIN DU GABON
  // Leçon 1 : La répartition de la population du Gabon
  // Leçon 2 : Les comportements démographiques en Afrique et au Gabon : aspects, facteurs, problèmes et solutions
  // ===================================================================
  'skill-1s-hg-chap2-cadre-humain': [
    {
      id: 'q-1s-hg-ch2-repart-1',
      exerciseId: 'ex-1s-hg-ch2-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : Répartition spatiale & macrocéphalie urbaine',
      microConcept: 'La population du Gabon (environ 2,3 millions d\'habitants sur 267 667 km²) se caractérise par une densité moyenne très faible (~8,5 hab/km²), mais paradoxalement par l\'un des taux d\'urbanisation les plus élevés d\'Afrique (plus de 88 %). On observe une macrocéphalie urbaine extrême : l\'agglomération de Libreville-Owendo-Akanda concentre à elle seule plus de 55 % de la population totale, créant un déséquilibre flagrant avec l\'intérieur du pays composé de vastes zones quasi inhabitées.',
      hint: 'Un territoire très peu dense en moyenne mais avec une population massivement concentrée dans la capitale et les centres urbains.',
      prompt: 'Quel trait géographique caractérise la répartition de la population à la surface du territoire gabonais ?',
      options: [
        'Une faible densité moyenne nationale combinée à une concentration urbaine massive à Libreville et sur le littoral',
        'Une dispersion rigoureusement égale des habitants dans chaque village de forêt',
        'Une population rurale représentant 95 % du total national',
        'Une densité record de 500 habitants par kilomètre carré dans tout le pays'
      ],
      correctAnswer: 'Une faible densité moyenne nationale combinée à une concentration urbaine massive à Libreville et sur le littoral',
      commonMistake: 'Penser que le Gabon est un pays à population principalement paysanne et rurale.',
      explanation: 'Le Gabon est un pays hautement urbanisé : les activités administratives, portuaires et de services de Libreville et de Port-Gentil ont drainé la majorité des populations par exode rural, laissant des « déserts humains » à l\'intérieur des terres.',
      steps: [
        '1. Superficie : 267 667 km², population : ~2,3 millions d\'habitants.',
        '2. Densité arithmétique : ~8,5 hab/km².',
        '3. Taux d\'urbanisation : ~88 % (macrocéphalie de Libreville).'
      ]
    },
    {
      id: 'q-1s-hg-ch2-comportements-2',
      exerciseId: 'ex-1s-hg-ch2-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 2 : Aspects & facteurs de la démographie africaine et gabonaise',
      microConcept: 'Au Gabon et en Afrique, la dynamique démographique présente des aspects marquants : une natalité soutenue (~30 ‰), un taux de fécondité de près de 3,8 à 4 enfants par femme, et une mortalité en baisse régulière grâce aux progrès médico-sanitaires. En conséquence, la population est extrêmement jeune (plus de 50 % a moins de 20 ans). Les facteurs explicatifs combinent l\'attachement culturel à la descendance, la précocité des premières unions et l\'amélioration de la prise en charge sanitaire.',
      hint: 'Cette structure par âge en pyramide à base très large signifie qu\'un habitant sur deux est un jeune.',
      prompt: 'Quel aspect structurel majeur caractérise la population du Gabon et de la majorité des pays d\'Afrique subsaharienne ?',
      options: [
        'Une extrême jeunesse de la population, avec plus de 50 % d\'habitants âgés de moins de 20 ans',
        'Un vieillissement prononcé avec une majorité de retraités de plus de 75 ans',
        'Une baisse dramatique du nombre d\'enfants et des écoles désertes',
        'Une égalité parfaite du nombre de personnes dans toutes les tranches d\'âge'
      ],
      correctAnswer: 'Une extrême jeunesse de la population, avec plus de 50 % d\'habitants âgés de moins de 20 ans',
      commonMistake: 'Croire que la pyramide des âges gabonaise ressemble à celle des pays européens vieillissants.',
      explanation: 'La forte natalité et la baisse de la mortalité infantile confèrent au Gabon une pyramide des âges expansive à large base, signe d\'une population très jeune en pleine croissance.',
      steps: [
        '1. Taux de natalité élevé et mortalité en recul.',
        '2. Pyramide des âges triangulaire à base large.',
        '3. Conséquence : plus de la moitié de la population a moins de 20 ans.'
      ]
    },
    {
      id: 'q-1s-hg-ch2-problemes-solutions-3',
      exerciseId: 'ex-1s-hg-ch2-3',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 2 : Problèmes socio-économiques et solutions d\'aménagement',
      microConcept: 'Cette jeunesse et cette hyper-concentration urbaine posent de lourds problèmes : surcharge des établissements scolaires et universitaires, chômage élevé des jeunes diplômés, pression sur les hôpitaux et les transports, prolifération des quartiers sous-intégrés (matitis) et dépeuplement rural. Les solutions passent par : 1. La diversification économique et la création d\'emplois industriels et agricoles ; 2. L\'aménagement équilibré du territoire pour désenclaver l\'arrière-pays (routes, Transgabonais) ; 3. Le renforcement de l\'éducation à la santé de la reproduction (ESSR).',
      hint: 'Il s\'agit de développer les provinces de l\'intérieur et de former la jeunesse aux métiers techniques.',
      prompt: 'Face à l\'hyper-concentration de la population à Libreville et à l\'exode rural, quelle solution d\'aménagement du territoire est prioritaire pour rééquilibrer le développement du Gabon ?',
      options: [
        'Désenclaver l\'intérieur par des infrastructures modernes (routes goudronnées, ponts, télécoms) et créer des pôles économiques régionaux attractifs',
        'Interdire formellement aux citoyens de sortir de leur maison',
        'Déménager l\'ensemble des ministères dans un autre pays étranger',
        'Fermer définitivement toutes les écoles techniques des provinces'
      ],
      correctAnswer: 'Désenclaver l\'intérieur par des infrastructures modernes (routes goudronnées, ponts, télécoms) et créer des pôles économiques régionaux attractifs',
      commonMistake: 'Penser que l\'unique solution est policière ou administrative, alors que le développement économique local et le désenclavement routier sont les véritables leviers.',
      explanation: 'Le désenclavement des provinces (comme l\'axe routier de la Transgabonaise) permet de fixer les populations dans l\'hinterland, de valoriser l\'agriculture vivrière et de soulager la capitale des pressions urbaines.',
      steps: [
        '1. Diagnostic : macrocéphalie urbaine et désertification rurale.',
        '2. Causes : manque de routes et d\'opportunités dans les provinces.',
        '3. Solutions durables : aménagement du territoire, désenclavement et pôles régionaux.'
      ]
    }
  ],

  // ===================================================================
  // CHAPITRE 3 : LE CADRE ÉCONOMIQUE DU GABON
  // Leçon 1 : Les ressources naturelles (mines, hydrocarbures, bois)
  // Leçon 2 : L’agriculture, l’élevage et la pêche continentale et maritime
  // Leçon 3 : L’impact environnemental de l’exploitation des ressources naturelles et des activités agricoles
  // Leçon 4 : Les activités industrielles
  // Leçon 5 : Les activités du secteur tertiaire (tourisme et économie numérique)
  // ===================================================================
  'skill-1s-hg-chap3-cadre-economique': [
    {
      id: 'q-1s-hg-ch3-ressources-1',
      exerciseId: 'ex-1s-hg-ch3-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : Les piliers des ressources naturelles (Pétrole, Manganèse, Bois)',
      microConcept: 'Le sous-sol et le territoire gabonais recèlent d\'immenses richesses : 1. Les hydrocarbures (pétrole onshore et offshore à Port-Gentil, Gamba, Rabi Kounga) qui représentent environ 70 % des exportations et la majeure partie des recettes budgétaires ; 2. Le manganèse de Moanda dans le Haut-Ogooué (exploité par la Comilog), faisant du Gabon le 2e producteur mondial de minerai de manganèse de haute teneur ; 3. Le gisement géant de fer de Bélinga et l\'or ; 4. La forêt dense riche en essences nobles de bois d\'œuvre, dont l\'Okoumé et l\'Ozigo.',
      hint: 'Cette roche métallique noire exploitée sur le plateau de Bangombé à Moanda est indispensable à la fabrication de l\'acier mondial.',
      prompt: 'Quel minerai stratégique place le Gabon au deuxième rang des producteurs mondiaux grâce aux gisements exploités à Moanda ?',
      options: [
        'Le manganèse',
        'Le charbon bitumineux',
        'L\'aluminium brut',
        'Le sel gemme'
      ],
      correctAnswer: 'Le manganèse',
      commonMistake: 'Confondre le fer de Bélinga (en cours de développement) avec le manganèse de Moanda (exploité intensivement depuis plus de 60 ans).',
      explanation: 'Le gisement de Moanda (plateau de Bangombé) renferme l\'un des minerais de manganèse les plus riches de la planète (teneur ~50 %), essentiel à la sidérurgie mondiale.',
      steps: [
        '1. Localisation : Moanda dans la province du Haut-Ogooué.',
        '2. Exploitant historique : Comilog (groupe Eramet / État gabonais).',
        '3. Rang mondial : 2e producteur mondial.'
      ]
    },
    {
      id: 'q-1s-hg-ch3-agri-2',
      exerciseId: 'ex-1s-hg-ch3-2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 2 : Agriculture vivrière, agro-industrie et pêche',
      microConcept: 'L\'agriculture gabonaise se divise en deux modèles : une agriculture vivrière traditionnelle sur brûlis (manioc, banane plantain, taro, maïs) à faible rendement pratiquée par de petits exploitants, et une agro-industrie de rente (plantations industrielles de palmier à huile et d\'hévéa à Mouila, Lambaréné, Kango). L\'élevage bovin est extensif dans les ranches de la Nyanga et de Lekabi. La pêche est maritime (artisanale le long de la côte et industrielle sous licence dans la ZEE) et continentale (lacs et fleuves de la région de Lambaréné). Le Gabon reste cependant tributaire des importations alimentaires pour plus de 80 % de ses besoins.',
      hint: 'Cet aliment de base traditionnel consommé quotidiennement sous forme de bâton ou de farine est la première culture vivrière du pays.',
      prompt: 'Quelle culture vivrière traditionnelle constitue la base de l\'alimentation quotidienne des Gabonais dans la majorité des provinces ?',
      options: [
        'Le manioc',
        'Le blé d\'hiver',
        'La betterave sucrière',
        'L\'olivier'
      ],
      correctAnswer: 'Le manioc',
      commonMistake: 'Penser que le blé est cultivé au Gabon, alors que la farine de blé pour le pain est intégralement importée.',
      explanation: 'Le manioc (feuilles pour le "feuille de manioc" et tubercules pour le manioc en bâton) est la culture vivrière reine au Gabon, résistant aux sols acides de la zone forestière.',
      steps: [
        '1. Système de culture sur brûlis traditionnel.',
        '2. Plante à tubercule adaptée au climat équatorial.',
        '3. Rôle : base de la sécurité alimentaire locale.'
      ]
    },
    {
      id: 'q-1s-hg-ch3-env-3',
      exerciseId: 'ex-1s-hg-ch3-3',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 3 : Impact environnemental & politique de préservation',
      microConcept: 'L\'exploitation intensive des ressources génère des impacts environnementaux préoccupants : dégradation des écosystèmes forestiers par les pistes d\'abattage, risques de pollution marine par les forages pétroliers, pollution des cours d\'eau par le mercure des orpailleurs illégaux et érosion littorale. Pour contrer ces dérives, le Gabon a pris un virage écologique modèle dès 2002 en créant un réseau national de 13 parcs nationaux (couvrant 11 % du territoire), géré par l\'ANPN, et en imposant la certification forestière FSC.',
      hint: 'Créés lors du sommet de la Terre de Johannesburg en 2002, ils protègent des joyaux comme la Lopé, Loango et Ivindo.',
      prompt: 'Quelle décision écologique pionnière prise par le Gabon en 2002 protège durablement plus de 11 % de son territoire contre l\'exploitation destructrice ?',
      options: [
        'La création d\'un réseau sanctuarisé de 13 parcs nationaux (Loango, Lopé, Ivindo, Pongara...)',
        'L\'abattage de tous les arbres pour construire un parking géant',
        'L\'autorisation donnée à tous les navires étrangers de polluer sans contrôle',
        'La suppression de toutes les lois sur l\'environnement'
      ],
      correctAnswer: 'La création d\'un réseau sanctuarisé de 13 parcs nationaux (Loango, Lopé, Ivindo, Pongara...)',
      commonMistake: 'Croire que les parcs nationaux sont de simples zoos urbains, alors qu\'il s\'agit d\'immenses réserves intégrales de biodiversité équatoriale.',
      explanation: 'Le réseau des 13 parcs nationaux gabonais est reconnu mondialement, abritant des espèces menacées (gorilles de plaine, éléphants de forêt, chimpanzés) et valorisé pour la recherche et l\'écotourisme.',
      steps: [
        '1. Menaces environnementales : déforestation sauvage, marées noires, braconnage.',
        '2. Réponse en 2002 : création de 13 parcs nationaux (environ 3 millions d\'hectares).',
        '3. Gestion assurée par l\'Agence Nationale des Parcs Nationaux (ANPN).'
      ]
    },
    {
      id: 'q-1s-hg-ch3-indus-4',
      exerciseId: 'ex-1s-hg-ch3-4',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 4 : Industrialisation et essor de la ZERP de Nkok',
      microConcept: 'Longtemps limitée au raffinage pétrolier à Port-Gentil (SOGARA) et à la première transformation, l\'industrie gabonaise a connu un tournant majeur avec : 1. L\'interdiction d\'exporter des grumes de bois brutes en 2010 pour forcer la transformation locale (sciage, déroulage, contreplaqué) ; 2. La création de la Zone Économique à Régime Privilégié (ZERP) de Nkok, devenue le 1er pôle de production et d\'exportation de contreplaqué en Afrique ; 3. Le Complexe Métallurgique de Moanda (CMM) transformant le manganèse en silico-manganèse.',
      hint: 'Cette zone industrielle moderne située à une trentaine de kilomètres de Libreville regroupe des dizaines d\'usines de transformation du bois.',
      prompt: 'Quel parc industriel modèle créé près de Libreville a permis au Gabon de devenir le leader africain de la fabrication et de l\'exportation de contreplaqué ?',
      options: [
        'La Zone Économique Spéciale de Nkok (ZERP de Nkok)',
        'Le port de Rotterdam aux Pays-Bas',
        'La Silicon Valley américaine',
        'La zone franche de Shenzhen en Chine'
      ],
      correctAnswer: 'La Zone Économique Spéciale de Nkok (ZERP de Nkok)',
      commonMistake: 'Penser que le Gabon n\'a aucune industrie manufacturière et qu\'il n\'exporte que du bois brut non ouvré.',
      explanation: 'La ZERP de Nkok illustre la transition réussie vers l\'industrialisation locale à haute valeur ajoutée, générant des milliers d\'emplois industriels qualifiés pour la jeunesse gabonaise.',
      steps: [
        '1. Décision de 2010 : arrêt de l\'exportation des grumes brutes.',
        '2. Création de la zone de Nkok avec statut fiscal privilégié.',
        '3. Résultat : rang de 1er producteur de contreplaqué d\'Afrique et 2e mondial.'
      ]
    },
    {
      id: 'q-1s-hg-ch3-tertiaire-5',
      exerciseId: 'ex-1s-hg-ch3-5',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 5 : Secteur tertiaire - Tourisme vert et économie numérique',
      microConcept: 'Le secteur tertiaire (services, commerce, transport, télécoms) est le premier pourvoyeur d\'emplois urbains. Deux filières d\'avenir s\'y distinguent : 1. L\'écotourisme (tourisme de vision dans les parcs de Loango et Pongara, observation des baleines et de la grande faune), freiné par le coût élevé des transports et le manque d\'infrastructures hôtelières à l\'intérieur ; 2. L\'économie numérique, dopée par le raccordement aux câbles sous-marins à fibre optique (ACE), la généralisation de l\'internet mobile et l\'explosion du mobile money (paiement électronique), transformant les services bancaires et administratifs.',
      hint: 'L\'accès au haut débit par câble sous-marin et le paiement par smartphone sont les moteurs de cette révolution technologique.',
      prompt: 'Dans le cadre du développement de l\'économie numérique au Gabon, quel facteur technique a permis la démocratisation rapide des transactions financières et de l\'inclusion bancaire des populations ?',
      options: [
        'L\'adoption massive du paiement mobile (Mobile Money via les opérateurs téléphoniques) appuyée par la fibre optique',
        'L\'interdiction complète des téléphones portables et des ordinateurs',
        'Le retour exclusif au troc de sel et de coquillages',
        'L\'obligation d\'utiliser uniquement des chèques postaux manuscrits'
      ],
      correctAnswer: 'L\'adoption massive du paiement mobile (Mobile Money via les opérateurs téléphoniques) appuyée par la fibre optique',
      commonMistake: 'Sous-estimer la pénétration du numérique en Afrique centrale, alors que le Gabon affiche un taux de pénétration mobile supérieur à 100 %.',
      explanation: 'Le mobile money a révolutionné le quotidien des Gabonais en facilitant les transferts d\'argent instantanés, le règlement des factures d\'eau et d\'électricité et le commerce en ligne à travers tout le pays.',
      steps: [
        '1. Raccordement du littoral gabonais au câble sous-marin ACE.',
        '2. Forte pénétration du smartphone dans les villes et centres ruraux.',
        '3. Essor des solutions fintech et portefeuilles électroniques.'
      ]
    }
  ],

  // ===================================================================
  // CHAPITRE 4 : LA POPULATION MONDIALE
  // Leçon 1 : La répartition des hommes à la surface de la Terre
  // ===================================================================
  'skill-1s-hg-chap4-population-mondiale': [
    {
      id: 'q-1s-hg-ch4-repart-monde-1',
      exerciseId: 'ex-1s-hg-ch4-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : Les grands foyers de peuplement planétaires',
      microConcept: 'La population mondiale (plus de 8 milliards d\'habitants) est très inégalement répartie à la surface du globe. Plus de la moitié des êtres humains se concentre dans trois grands foyers de peuplement majeurs situés dans l\'hémisphère Nord : 1. L\'Asie de l\'Est (Chine, Japon, Corées) avec près de 1,6 milliard d\'habitants ; 2. L\'Asie du Sud (Inde, Pakistan, Bangladesh) avec plus de 1,8 milliard d\'habitants ; 3. L\'Europe (environ 750 millions d\'habitants). Des foyers secondaires denses existent dans le Golfe de Guinée, en Asie du Sud-Est, sur la côte nord-est des États-Unis et le sud-est brésilien.',
      hint: 'Ces deux foyers asiatiques réunis comptent plus de 3,4 milliards d\'habitants à eux seuls.',
      prompt: 'Quels sont les deux foyers de peuplement majeurs qui regroupent à eux seuls près de la moitié de la population mondiale ?',
      options: [
        'L\'Asie de l\'Est et l\'Asie du Sud',
        'Le Sahara central et le désert de Gobi',
        'L\'Antarctique et le Groenland',
        'L\'Australie centrale et la Patagonie'
      ],
      correctAnswer: 'L\'Asie de l\'Est et l\'Asie du Sud',
      commonMistake: 'Penser que l\'Amérique du Nord ou l\'Europe sont les zones les plus peuplées en valeur absolue.',
      explanation: 'L\'Asie du Sud (avec l\'Inde, pays le plus peuplé du monde) et l\'Asie de l\'Est (avec la Chine) constituent les deux géants démographiques de l\'humanité grâce à des civilisations agraires pluri-millénaires basées sur la riziculture inondée.',
      steps: [
        '1. Population planétaire : ~8 milliards.',
        '2. Asie du Sud : > 1,8 milliard d\'habitants.',
        '3. Asie de l\'Est : ~1,6 milliard d\'habitants.',
        '4. Total des deux : plus de 40 % de l\'humanité.'
      ]
    },
    {
      id: 'q-1s-hg-ch4-deserts-2',
      exerciseId: 'ex-1s-hg-ch4-2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : Les grands vides humains et contraintes du milieu',
      microConcept: 'À l\'opposé des foyers denses, d\'immenses régions du globe constituent des déserts humains avec des densités inférieures à 1 ou 2 hab/km². Ces vides s\'expliquent par des contraintes naturelles extrêmes : 1. Le froid polaire ou subpolaire (Antarctique, Groenland, Grand Nord sibérien et canadien) ; 2. L\'aridité des déserts chauds (Sahara, désert d\'Arabie, Outback australien) ; 3. L\'altitude et les fortes pentes (hauts plateaux du Tibet, Andes, Himalaya) ; 4. L\'humidité et la densité végétale des grandes forêts équatoriales (Amazonie, cœur du bassin du Congo).',
      hint: 'L\'absence d\'eau liquide et les chaleurs caniculaires créent ce milieu hostile où l\'agriculture pluviale est impossible.',
      prompt: 'Quelle contrainte biophysique majeure explique la quasi-absence d\'habitants permanents dans le désert du Sahara ?',
      options: [
        'L\'aridité extrême, le manque critique d\'eau douce et les températures torrides',
        'Des inondations marines permanentes et des glaces polaires',
        'La présence obligatoire d\'usines chimiques tous les 10 mètres',
        'L\'interdiction mondiale d\'y poser le pied émise par l\'ONU'
      ],
      correctAnswer: 'L\'aridité extrême, le manque critique d\'eau douce et les températures torrides',
      commonMistake: 'Oublier que la disponibilité en eau est le facteur premier régissant la présence humaine sur Terre.',
      explanation: 'L\'aridité (précipitations inférieures à 100 mm par an) rend toute vie végétale spontanée et toute agriculture impossible hors des quelques rares oasis alimentées par des nappes phréatiques.',
      steps: [
        '1. Climat désertique hyperaride.',
        '2. Évaporation supérieure aux précipitations.',
        '3. Densités humaines quasi nulles (< 1 hab/km²).'
      ]
    },
    {
      id: 'q-1s-hg-ch4-facteurs-3',
      exerciseId: 'ex-1s-hg-ch4-3',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 1 : Facteurs explicatifs du peuplement (histoire et nature)',
      microConcept: 'La répartition des hommes résulte d\'une combinaison de facteurs : 1. Facteurs naturels (climats tempérés et moussonniers favorables, vallées fluviales alluviales fertiles comme le Nil, l\'Indus ou le Yangzi, accessibilité des côtes) ; 2. Facteurs historiques et techniques (ancienneté de l\'occupation humaine, maîtrise de la riziculture inondée exigeante en main-d\'œuvre mais très productive, révolution industrielle du XIXe siècle ayant fixé les bassins houillers en Europe) ; 3. Facteurs contemporains (phénomène de littoralisation des activités et métropolisation attirant les populations vers les façades maritimes ouvertes au commerce mondial).',
      hint: 'Ce phénomène mondial récent pousse les populations et les activités économiques à se regrouper sur les côtes maritimes.',
      prompt: 'Comment appelle-t-on la dynamique mondiale contemporaine qui conduit à une concentration croissante des populations et des activités économiques sur les littoraux ?',
      options: [
        'La littoralisation',
        'La désertification rurale',
        'L\'insularisation forcée',
        'La déforestation continentale'
      ],
      correctAnswer: 'La littoralisation',
      commonMistake: 'Confondre l\'urbanisation (croissance des villes) avec la littoralisation (attraction spécifique vers les côtes et façades maritimes).',
      explanation: 'Avec la mondialisation et l\'explosion du commerce maritime par conteneurs, les régions côtières concentrent désormais plus de 60 % de la population mondiale dans une bande de 100 km le long des mers.',
      steps: [
        '1. Mondialisation et essor du transport maritime à bas coût.',
        '2. Implantation des ports géants et zones industrialo-portuaires sur les côtes.',
        '3. Attraction des flux migratoires : phénomène de littoralisation.'
      ]
    }
  ],

  // ===================================================================
  // CHAPITRE 5 : L’ÉCONOMIE MONDIALE
  // Leçon 1 : L’exploitation des ressources énergétiques et minières
  // Leçon 2 : Les régions industrielles dans les pays du Nord et dans les pays du Sud
  // Leçon 3 : Le secteur des services dans les pays du Nord et dans les pays du Sud : cas du tourisme
  // ===================================================================
  'skill-1s-hg-chap5-economie-mondiale': [
    {
      id: 'q-1s-hg-ch5-energie-1',
      exerciseId: 'ex-1s-hg-ch5-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : Géopolitique des ressources énergétiques et minières',
      microConcept: 'L\'économie planétaire est tributaire des ressources énergétiques (pétrole, gaz naturel, charbon, uranium) et minières (fer, cuivre, bauxite, lithium, terres rares). On distingue : les zones de production majeures situées souvent dans les pays du Sud ou émergents (Moyen-Orient pour le pétrole, Afrique pour les minerais stratégiques comme le cobalt et le manganèse, Amérique du Sud pour le cuivre et le lithium) et les grands centres de consommation industrielle (Chine, États-Unis, Union européenne, Inde). Ce décalage engendre d\'immenses flux maritimes mondiaux et des tensions géopolitiques autour des détroits stratégiques (Ormuz, Malacca, Bab-el-Mandeb).',
      hint: 'Ce détroit étroit situé entre l\'Iran et la péninsule arabique voit passer un cinquième du pétrole brut mondial chaque jour.',
      prompt: 'Quel passage maritime hautement stratégique concentre le transit quotidien d\'environ 20 % du pétrole brut transporté par mer dans le monde ?',
      options: [
        'Le détroit d\'Ormuz',
        'Le détroit de Magellan',
        'Le détroit de Béring',
        'Le canal de Panama'
      ],
      correctAnswer: 'Le détroit d\'Ormuz',
      commonMistake: 'Confondre le canal de Suez avec le détroit d\'Ormuz qui est le goulot d\'étranglement direct de sortie des hydrocarbures du golfe Persique.',
      explanation: 'Le détroit d\'Ormuz relie le golfe Persique au golfe d\'Oman. En raison des supertankers qui s\'y croisent pour alimenter l\'Asie et l\'Occident, il constitue un point névralgique absolu de la sécurité énergétique planétaire.',
      steps: [
        '1. Localisation : sortie du golfe Persique.',
        '2. Flux pétroliers colossaux : ~17 à 20 millions de barils/jour.',
        '3. Enjeu : point de vulnérabilité majeur en cas de conflit géopolitique.'
      ]
    },
    {
      id: 'q-1s-hg-ch5-regions-indus-2',
      exerciseId: 'ex-1s-hg-ch5-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 2 : Bassins industriels du Nord et essor industriel du Sud',
      microConcept: 'La carte industrielle mondiale a profondément muté : 1. Dans les pays du Nord, les vieux bassins industriels lourds (la "Rust Belt" aux USA, les bassins miniers et sidérurgiques d\'Europe) ont subi une forte désindustrialisation, compensée par le dynamisme des technopôles de haute technologie (Silicon Valley, Sun Belt, corridor d\'Ille-de-France) ; 2. Dans les pays du Sud, la délocalisation des activités manufacturières a fait de l\'Asie orientale, et en particulier de la Chine (« l\'usine du monde »), le cœur battant de la production industrielle mondiale (textile, sidérurgie, électronique, batteries, véhicules électriques), suivie par des puissances émergentes comme l\'Inde, le Mexique ou le Brésil.',
      hint: 'Cette superpuissance asiatique est devenue le premier producteur et exportateur mondial de biens manufacturés.',
      prompt: 'Quel pays d\'Asie orientale s\'est imposé depuis les années 2000 comme « l\'usine du monde » en concentrant une part colossale de la production manufacturière globale ?',
      options: [
        'La Chine',
        'La Mongolie',
        'Le Groenland',
        'L\'Islande'
      ],
      correctAnswer: 'La Chine',
      commonMistake: 'Penser que les États-Unis produisent toujours la majorité des biens manufacturés physiques, alors que la Chine est le premier fabricant mondial.',
      explanation: 'Grâce à ses zones économiques spéciales (ZES), sa main-d\'œuvre abondante, ses ports géants automatisés et ses investissements massifs en robotique, la Chine assure plus de 30 % de la production manufacturière mondiale.',
      steps: [
        '1. Réformes économiques et ouverture des années 1980.',
        '2. Afflux de capitaux étrangers et délocalisations industrielles.',
        '3. Statut contemporain : premier exportateur et fabricant planétaire.'
      ]
    },
    {
      id: 'q-1s-hg-ch5-tourisme-3',
      exerciseId: 'ex-1s-hg-ch5-3',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 3 : Le secteur des services et l\'explosion du tourisme mondial',
      microConcept: 'Le secteur tertiaire (services financiers, télécoms, conseil, transport, commerce) représente aujourd\'hui plus de 70 % du PIB et des emplois dans les pays développés du Nord, et progresse rapidement dans les pays du Sud. Le tourisme international en est l\'activité emblématique : avec près de 1,5 milliard de touristes internationaux par an (hors crises exceptionnelles), il génère des milliers de milliards de dollars de recettes. Les flux majeurs partent des pays riches du Nord vers les littoraux ensoleillés (bassin méditerranéen, Caraïbes, Asie du Sud-Est) ou vers les grandes capitales culturelles (Paris, Rome, New York). Pour les pays du Sud, le tourisme est un vecteur d\'entrée de devises et d\'emplois, mais comporte des risques (surfréquentation, flambée des prix, fragilité face aux crises).',
      hint: 'Cette zone de mer semi-fermée bordée par l\'Europe du Sud et l\'Afrique du Nord est la première destination touristique au monde.',
      prompt: 'Quel espace maritime et littoral mondial constitue la première région de destination touristique internationale de la planète ?',
      options: [
        'Le bassin méditerranéen (France, Espagne, Italie, Grèce, Turquie, Maghreb)',
        'La banquise du pôle Nord',
        'La mer de Sibérie orientale',
        'Le cercle polaire antarctique'
      ],
      correctAnswer: 'Le bassin méditerranéen (France, Espagne, Italie, Grèce, Turquie, Maghreb)',
      commonMistake: 'Croire que les Caraïbes ou l\'Asie accueillent plus de touristes que le bassin méditerranéen, qui capte plus de 30 % des arrivées touristiques mondiales.',
      explanation: 'Le bassin méditerranéen bénéficie de sa proximité avec les grands bassins émetteurs d\'Europe occidentale, d\'un climat ensoleillé, de plages attractives et d\'un patrimoine historique et archéologique mondial d\'une densité sans équivalent.',
      steps: [
        '1. Premier foyer récepteur de la planète : ~300 millions de visiteurs par an.',
        '2. Atouts combinés : soleil, plages (héliotropisme) et patrimoine culturel.',
        '3. Défis : surtourisme estival, pression sur l\'eau douce et pollution plastique.'
      ]
    }
  ],

  // ===================================================================
  // ALIASES TRANSVERSAUX POUR COMPATIBILITÉ
  // ===================================================================
  'skill-1s-hg-colonisation': [
    {
      id: 'q-1s-hg-col-1',
      exerciseId: 'ex-1s-hg-col-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Conférence de Berlin (1884-1885)',
      microConcept: 'La Conférence de Berlin (1884-1885) a fixé les règles juridiques du partage colonial de l\'Afrique, en particulier le principe de l\'occupation effective du territoire.',
      hint: 'Pense à l\'obligation d\'établir une autorité réelle sur le terrain.',
      prompt: 'Quel principe diplomatique majeur la Conférence de Berlin (1884-1885) a-t-elle imposé pour reconnaître la souveraineté d\'une puissance européenne sur un territoire africain ?',
      options: [
        'Le principe de l\'occupation effective (autorité administrative et militaire réelle sur le terrain)',
        'L\'accord préalable et unanime de tous les chefs coutumiers africains par référendum',
        'L\'obligation d\'accorder l\'indépendance immédiate',
        'Le tirage au sort des frontières sans expédition'
      ],
      correctAnswer: 'Le principe de l\'occupation effective (autorité administrative et militaire réelle sur le terrain)',
      commonMistake: 'Penser que Berlin a directement tracé toutes les frontières intérieures de l\'Afrique.',
      explanation: 'L\'Acte de Berlin a institutionnalisé l\'occupation effective pour légitimer les conquêtes européennes.',
      steps: [
        '1. 14 puissances réunies sous la houlette de Bismarck.',
        '2. Règle d\'occupation effective et notification obligatoire.',
        '3. Accélération de la conquête de l\'intérieur des terres.'
      ]
    }
  ],

  'skill-1s-hg-geographie-gabon-naturel': [
    {
      id: 'q-1s-hg-geo-nat-alias-1',
      exerciseId: 'ex-1s-hg-geo-nat-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Le relief et le réseau hydrographique du Gabon',
      microConcept: 'Le relief gabonais comporte trois ensembles : plaines côtières, massifs montagneux intérieurs (Chaillu, Cristal) et plateaux (Batéké).',
      hint: 'Le massif du Chaillu abrite les points culminants du pays.',
      prompt: 'Quel massif montagneux situé au centre-sud du Gabon abrite le mont Milondo (1 020 m) ?',
      options: [
        'Le massif du Chaillu',
        'Le Jura',
        'Les Andes',
        'L\'Himalaya'
      ],
      correctAnswer: 'Le massif du Chaillu',
      commonMistake: 'Confondre avec les monts de Cristal situés au nord-ouest.',
      explanation: 'Le massif du Chaillu sépare le bassin de la Ngounié de celui de l\'Ogooué supérieur.',
      steps: ['1. Reconnaître les massifs intérieurs.', '2. Chaillu au centre-sud, Cristal au nord-ouest.']
    }
  ],

  'skill-1s-hg-geographie-gabon-humain': [
    {
      id: 'q-1s-hg-geo-hum-alias-1',
      exerciseId: 'ex-1s-hg-geo-hum-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Répartition et macrocéphalie',
      microConcept: 'Faible densité moyenne (~8,5 hab/km²) mais concentration urbaine massive (> 88 %) à Libreville et Port-Gentil.',
      hint: 'La population est hyper-concentrée dans les villes littorales.',
      prompt: 'Quelle est la caractéristique frappante de la répartition de la population au Gabon ?',
      options: [
        'Une très faible densité moyenne nationale avec une concentration urbaine massive à Libreville et Port-Gentil',
        'Une répartition rigoureusement uniforme dans toute la forêt',
        'Une population rurale représentant 95 % des habitants',
        'Une absence d\'habitants sur le littoral'
      ],
      correctAnswer: 'Une très faible densité moyenne nationale avec une concentration urbaine massive à Libreville et Port-Gentil',
      commonMistake: 'Croire que le Gabon est un pays à majorité rurale.',
      explanation: 'Le Gabon possède l\'un des taux d\'urbanisation les plus élevés d\'Afrique subsaharienne.',
      steps: ['1. Taux d\'urbanisation record de près de 90 %.', '2. Macrocéphalie de Libreville.']
    }
  ],

  'skill-1s-hg-methode-eaf': [
    {
      id: 'q-1s-hg-meth-alias-1',
      exerciseId: 'ex-1s-hg-meth-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Délimitation de la dissertation en Histoire-Géo',
      microConcept: 'Toute dissertation d\'histoire ou géographie exige une délimitation spatiale et temporelle rigoureuse dans l\'introduction.',
      hint: 'Les bornes chronologiques fixent le début et la fin de l\'analyse.',
      prompt: 'Dans une composition d\'histoire, à quoi servent les dates limites figurant dans le libellé du sujet ?',
      options: [
        'À fixer la délimitation temporelle obligatoire pour éviter le hors-sujet',
        'À indiquer le nombre de lignes à écrire',
        'Ce sont des dates purement décoratives sans importance',
        'À donner l\'âge des examinateurs'
      ],
      correctAnswer: 'À fixer la délimitation temporelle obligatoire pour éviter le hors-sujet',
      commonMistake: 'Développer des faits antérieurs ou postérieurs aux bornes du sujet.',
      explanation: 'Tout fait hors des bornes chronologiques est considéré comme hors-sujet par le correcteur.',
      steps: ['1. Identifier la borne de départ et de fin.', '2. Respecter strictement la période analysée.']
    }
  ]
};
