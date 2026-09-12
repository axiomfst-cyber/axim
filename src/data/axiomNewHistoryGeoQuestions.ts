import { ExerciseQuestion } from '../types';

// =========================================================================================
// BANQUE COMPLÈTE DE QUESTIONS CALIBRÉES POUR LE NOUVEAU PROGRAMME D'HISTOIRE-GÉOGRAPHIE
// Couvre l'ensemble des chapitres de Seconde, Première et Terminale
// =========================================================================================

export const NEW_HG_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // =======================================================================================
  // SECONDE : GÉOGRAPHIE
  // =======================================================================================
  'skill-2s-geo-chap1-terre': [
    {
      id: 'q-2s-geo-ch1-1',
      exerciseId: 'ex-2s-geo-ch1',
      type: 'mcq',
      difficulty: 1,
      difficultyLabel: 'Leçon 1 : Mouvements de la Terre',
      microConcept: 'La rotation de la Terre s\'effectue d\'ouest en est autour de son axe des pôles en environ 24 heures (23h 56min 4s), ce qui engendre l\'alternance régulière des jours et des nuits. La révolution autour du Soleil (365,25 jours) combinée à l\'inclinaison de l\'axe terrestre (23°27\') produit le cycle des quatre saisons.',
      hint: 'Pensez au mouvement qui dure 24 heures et détermine le lever du soleil à l\'Est.',
      prompt: 'Quelle est la conséquence directe majeure du mouvement de rotation de la Terre sur elle-même d’ouest en est ?',
      options: [
        'L’alternance régulière des jours et des nuits',
        'Le cycle des quatre saisons dans les zones tempérées',
        'La dérive des continents',
        'La formation des tsunamis'
      ],
      correctAnswer: 'L’alternance régulière des jours et des nuits',
      explanation: 'En tournant sur elle-même en 24h d\'ouest en est, la Terre expose successivement ses différentes faces au rayonnement solaire, provoquant l\'alternance jour/nuit.',
      steps: [
        '1. Identifier le mouvement : la rotation (sur elle-même en 24h).',
        '2. Distinguer de la révolution (autour du soleil en 365 jours 1/4 qui donne les saisons).',
        '3. Conclure : la rotation engendre l\'alternance du jour et de la nuit.'
      ]
    },
    {
      id: 'q-2s-geo-ch1-2',
      exerciseId: 'ex-2s-geo-ch1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 3 : Coordonnées géographiques',
      microConcept: 'Pour localiser précisément n\'importe quel point sur le globe terrestre, on utilise deux coordonnées angulaires mesurées en degrés : la latitude (nord ou sud par rapport à l\'Équateur, de 0° à 90°) et la longitude (est ou ouest par rapport au méridien de Greenwich, de 0° à 180°). Libreville est traversée à proximité immédiate par l\'Équateur (latitude ~0°23\' N).',
      hint: 'La latitude mesure la position nord-sud par rapport à la ligne centrale du globe.',
      prompt: 'Quelle ligne de référence imaginaire sert de point zéro (0°) pour mesurer la latitude d’un lieu sur Terre ?',
      options: [
        'L’Équateur',
        'Le méridien de Greenwich',
        'Le tropique du Cancer',
        'Le cercle polaire arctique'
      ],
      correctAnswer: 'L’Équateur',
      explanation: 'L\'Équateur divise la Terre en deux hémisphères (Nord et Sud) et correspond au parallèle zéro (0°) pour le calcul de la latitude.',
      steps: [
        '1. La latitude se mesure du nord au sud.',
        '2. Le parallèle 0° est l\'Équateur.',
        '3. Le méridien de Greenwich sert quant à lui pour la longitude (0°).'
      ]
    }
  ],

  'skill-2s-geo-chap2-climats-vegetation': [
    {
      id: 'q-2s-geo-ch2-1',
      exerciseId: 'ex-2s-geo-ch2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 2 : Les grands domaines climatiques',
      microConcept: 'Le climat équatorial (dont bénéficie le Gabon) se caractérise par des températures moyennes élevées et quasi constantes toute l\'année (environ 25 à 27 °C), une faible amplitude thermique annuelle (< 3 °C) et des précipitations abondantes (> 1 500 à 3 000 mm/an) réparties sur toute l\'année sans véritable saison sèche froide.',
      hint: 'Ce climat chaud et très humide engendre la grande forêt dense ombrophile.',
      prompt: 'Quelles sont les caractéristiques thermiques et pluviométriques distinctives du climat équatorial typique ?',
      options: [
        'Chaleur constante (~26 °C) et très fortes précipitations toute l’année (> 1 800 mm)',
        'Hivers rigoureux négatifs et étés très courts',
        'Sécheresse absolue durant 9 mois avec de fortes gelées',
        'Grandes amplitudes thermiques journalières de plus de 40 °C'
      ],
      correctAnswer: 'Chaleur constante (~26 °C) et très fortes précipitations toute l’année (> 1 800 mm)',
      explanation: 'La zone équatoriale reçoit un rayonnement solaire quasi zénithal permanent et d\'intenses pluies de convection.',
      steps: [
        '1. La zone équatoriale est proche de 0° de latitude.',
        '2. Les températures y sont stables et douces/chaudes (~26 °C).',
        '3. L\'évapotranspiration intense alimente des pluies régulières et abondantes.'
      ]
    }
  ],

  'skill-2s-geo-chap3-reliefs': [
    {
      id: 'q-2s-geo-ch3-1',
      exerciseId: 'ex-2s-geo-ch3',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : Tectonique des plaques',
      microConcept: 'La lithosphère est découpée en plaques tectoniques rigides flottant sur l\'asthénosphère. Aux limites de convergence (rapprochement), la subduction ou la collision continentale provoque la surrection de chaînes de montagnes (orogenèse), des séismes violents et du volcanisme.',
      hint: 'Ce phénomène se produit lorsque deux plaques continentales entrent en collision.',
      prompt: 'Quel phénomène géologique majeur résulte principalement de la collision ou du rapprochement entre deux plaques tectoniques convergentes ?',
      options: [
        'La formation de chaînes de montagnes (orogenèse) et séismes',
        'La formation exclusive de dunes de sable éoliennes',
        'L’assèchement définitif de tous les océans',
        'La disparition du champ magnétique terrestre'
      ],
      correctAnswer: 'La formation de chaînes de montagnes (orogenèse) et séismes',
      explanation: 'La poussée exercée par la convergence plisse la croûte terrestre et engendre des reliefs élevés (comme l\'Himalaya ou les Andes) accompagnés d\'activité sismique.',
      steps: [
        '1. Deux plaques entrent en collision.',
        '2. Les roches sédimentaires et métamorphiques se compriment et se plissent.',
        '3. Ce soulèvement est l\'orogenèse créant les massifs montagneux.'
      ]
    }
  ],

  'skill-2s-geo-chap4-littoraux': [
    {
      id: 'q-2s-geo-ch4-1',
      exerciseId: 'ex-2s-geo-ch4',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 2 : Érosion littorale',
      microConcept: 'L\'érosion côtière est le recul du trait de côte sous l\'action mécanique des houles, des courants de dérive littorale et des marées, accentué par les prélèvements de sable de plage et l\'élévation du niveau moyen des mers. Au Gabon, les plages du front de mer de Libreville et de la presqu\'île de Mandji à Port-Gentil sont sous étroite surveillance.',
      hint: 'Considérez l\'action conjuguée des vagues océaniques et des activités d\'extraction de sable.',
      prompt: 'Quel facteur anthropique (lié à l’activité humaine) accélère considérablement l’érosion des plages et le recul du trait de côte ?',
      options: [
        'Le prélèvement et l’extraction non réglementés de sable marin sur les rivages',
        'La plantation d’arbres de mangrove pour retenir les vases',
        'La mise en place de brise-lames sous-marins',
        'L’installation de balises d’amarrage au large'
      ],
      correctAnswer: 'Le prélèvement et l’extraction non réglementés de sable marin sur les rivages',
      explanation: 'L\'extraction massive de sable prive le cordon littoral de son stock sédimentaire protecteur, rendant la côte vulnérable aux assauts de la houle.',
      steps: [
        '1. Le sable forme une barrière naturelle amortissant l\'énergie des vagues.',
        '2. Extraire ce sable déstabilise l\'équilibre morphosédimentaire.',
        '3. La houle attaque directement les terres intérieures et les infrastructures.'
      ]
    }
  ],

  'skill-2s-geo-chap5-activites-environnement': [
    {
      id: 'q-2s-geo-ch5-1',
      exerciseId: 'ex-2s-geo-ch5',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 3 : Lutte contre les catastrophes environnementales',
      microConcept: 'Pour préserver la biodiversité remarquable et lutter contre le changement climatique, le Gabon a sanctuarisé 11 % de son territoire en créant en 2002 un réseau exemplaire de 13 parcs nationaux (comme Loango, Lopé, Ivindo), supervisé par l\'ANPN.',
      hint: 'Le pays a créé en 2002 un réseau de zones protégées emblématiques.',
      prompt: 'Quelle décision majeure le Gabon a-t-il adoptée dès 2002 pour préserver son patrimoine naturel et lutter contre la déforestation ?',
      options: [
        'La création d’un réseau de 13 parcs nationaux couvrant plus de 11 % du territoire',
        'L’interdiction totale de toute forme de pêche artisanale',
        'L’abattage systématique de la forêt au profit des cultures de blé',
        'La bétonisation intégrale des estuaires côtiers'
      ],
      correctAnswer: 'La création d’un réseau de 13 parcs nationaux couvrant plus de 11 % du territoire',
      explanation: 'Le réseau des 13 parcs nationaux fait du Gabon un chef de file mondial de la conservation et de la capture carbone dans le bassin du Congo.',
      steps: [
        '1. Reconnaître la stratégie environnementale gabonaise.',
        '2. Identifier la politique des 13 parcs nationaux initiée en 2002.',
        '3. Cette politique concilie préservation écologique et écotourisme.'
      ]
    }
  ],

  // =======================================================================================
  // PREMIÈRE : HISTOIRE
  // =======================================================================================
  'skill-1s-hist-chap1-essor-europe': [
    {
      id: 'q-1s-hist-ch1-1',
      exerciseId: 'ex-1s-hist-ch1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 2 : Inventions et innovations scientifiques',
      microConcept: 'Au XIXe siècle, la machine à vapeur perfectionnée par James Watt, l\'utilisation du charbon comme source d\'énergie primaire, puis l\'électricité et le pétrole ont révolutionné les transports (chemins de fer, bateaux à vapeur) et multiplié la production industrielle.',
      hint: 'Cette invention thermique a permis de mécaniser les usines et de lancer le chemin de fer.',
      prompt: 'Quelle invention technologique a constitué le moteur principal de la première révolution industrielle en Europe au XIXe siècle ?',
      options: [
        'La machine à vapeur perfectionnée par James Watt',
        'L’ordinateur à transistors',
        'L’énergie nucléaire civile',
        'Le télégraphe sans fil numérique'
      ],
      correctAnswer: 'La machine à vapeur perfectionnée par James Watt',
      explanation: 'La machine à vapeur a converti l\'énergie thermique en énergie motrice mécanique, transformant radicalement l\'industrie textile, la métallurgie et les transports.',
      steps: [
        '1. Première révolution industrielle = fin XVIIIe / XIXe siècle.',
        '2. Énergie motrice motrice : charbon + vapeur d\'eau.',
        '3. La machine de James Watt est au cœur de cette mutation.'
      ]
    }
  ],

  'skill-1s-hist-chap2-imperialisme-afrique': [
    {
      id: 'q-1s-hist-ch2-1',
      exerciseId: 'ex-1s-hist-ch2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 5 : Conférence de Berlin (1884-1885)',
      microConcept: 'Réunie de novembre 1884 à février 1885 à l\'initiative de Bismarck, la Conférence de Berlin fixa les règles du partage colonial de l\'Afrique entre puissances européennes, instaurant le principe de l\'« occupation effective » des terres et la libre circulation sur les fleuves Congo et Niger.',
      hint: 'Cette conférence s\'est tenue dans la capitale allemande sous l\'égide du chancelier Bismarck.',
      prompt: 'Quel était l’objectif fondamental de la Conférence internationale de Berlin tenue en 1884-1885 ?',
      options: [
        'Fixer les règles diplomatiques du partage colonial de l’Afrique entre puissances européennes',
        'Accorder l’indépendance immédiate à l’ensemble des royaumes africains',
        'Créer l’Organisation des Nations Unies (ONU)',
        'Mettre un terme définitif à la Première Guerre mondiale'
      ],
      correctAnswer: 'Fixer les règles diplomatiques du partage colonial de l’Afrique entre puissances européennes',
      explanation: 'La Conférence de Berlin a légitimé et accéléré la course aux colonies (« scramble for Africa ») sans consulter aucun représentant africain.',
      steps: [
        '1. Les puissances européennes rivalisaient pour le contrôle de l\'Afrique.',
        '2. Bismarck réunit 14 puissances à Berlin en 1884.',
        '3. L\'Acte final impose l\'occupation effective pour revendiquer une colonie.'
      ]
    },
    {
      id: 'q-1s-hist-ch2-2',
      exerciseId: 'ex-1s-hist-ch2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 4 : Les résistances à la colonisation au Gabon',
      microConcept: 'Face à la pénétration militaire et fiscale coloniale française, plusieurs figures gabonaises se sont illustrées par une résistance armée farouche : Emane Tole chez les Fang du Komo, Nyonda Makita chez les Tsangui et Punu dans la Ngounié, et Wongo dans le Haut-Ogooué.',
      hint: 'Ce chef de clan fang s\'est opposé à l\'administration coloniale dans la région du Komo.',
      prompt: 'Parmi les héros de la résistance gabonaise à la conquête coloniale, quel chef illustre mena la lutte dans la vallée du Komo avant sa déportation ?',
      options: [
        'Emane Tole',
        'Léon Mba',
        'Jean-Hilaire Aubame',
        'Savorgnan de Brazza'
      ],
      correctAnswer: 'Emane Tole',
      explanation: 'Emane Tole s\'opposa courageusement à l\'impôt colonial et à l\'annexion de son territoire dans l\'estuaire du Komo à la fin du XIXe siècle.',
      steps: [
        '1. Situer la période de la conquête coloniale (fin XIXe / début XXe).',
        '2. Identifier les héros de la résistance gabonaise : Emane Tole, Nyonda Makita, Wongo.',
        '3. Emane Tole dirigea la résistance dans le Komo.'
      ]
    }
  ],

  'skill-1s-hist-chap3-premiere-guerre': [
    {
      id: 'q-1s-hist-ch3-1',
      exerciseId: 'ex-1s-hist-ch3',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 2 : Le Gabon dans la Première Guerre mondiale',
      microConcept: 'Durant la Grande Guerre (1914-1918), le Gabon et l\'AEF furent engagés dans les opérations militaires contre le Cameroun allemand voisin (combats de Mbirou et du Woleu-Ntem). Des milliers de Gabonais furent recrutés de force comme tirailleurs et porteurs pour soutenir l\'effort de guerre allié.',
      hint: 'Les combats impliquaient la colonie allemande voisine du Cameroun.',
      prompt: 'Sur quel théâtre d’opérations frontalier les troupes coloniales du Gabon sont-elles directement intervenues dès 1914 contre l’armée impériale allemande ?',
      options: [
        'La campagne militaire du Cameroun (combats de Mbirou et du front nord)',
        'La bataille des Dardanelles en Méditerranée',
        'La guerre des tranchées à Verdun',
        'La conquête de Madagascar'
      ],
      correctAnswer: 'La campagne militaire du Cameroun (combats de Mbirou et du front nord)',
      explanation: 'Dès août 1914, les forces de l\'AEF basées au Gabon ont attaqué les positions allemandes du « Neukamerun » (territoires cédés en 1911) lors de la campagne du Cameroun.',
      steps: [
        '1. Le Gabon bordait le Cameroun sous protectorat allemand en 1914.',
        '2. Les combats ont éclaté au poste de Mbirou et dans le Woleu-Ntem.',
        '3. Les troupes gabonaises et françaises y ont défait les garnisons allemandes.'
      ]
    }
  ],

  'skill-1s-hist-chap4-ideologies': [
    {
      id: 'q-1s-hist-ch4-1',
      exerciseId: 'ex-1s-hist-ch4',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : La révolution russe de 1917',
      microConcept: 'En octobre 1917, les Bolcheviks menés par Lénine renversent le gouvernement provisoire à Petrograd lors d\'un coup de force révolutionnaire. Ils instaurent le premier régime socialiste communiste fondé sur la dictature du prolétariat, la paix immédiate (Brest-Litovsk) et la collectivisation des terres.',
      hint: 'Ce dirigeant bolchevik a rédigé les « Thèses d’avril » et conduit la Révolution d’Octobre.',
      prompt: 'Qui fut le principal dirigeant politique bolchevik à la tête de la Révolution d’Octobre 1917 en Russie ?',
      options: [
        'Vladimir Ilitch Lénine',
        'Le tsar Nicolas II',
        'Adolf Hitler',
        'Winston Churchill'
      ],
      correctAnswer: 'Vladimir Ilitch Lénine',
      explanation: 'Lénine conduisit le parti bolchevik à la prise du pouvoir en octobre 1917, donnant naissance à la Russie soviétique puis à l\'URSS en 1922.',
      steps: [
        '1. La Révolution de février 1917 renverse le Tsar.',
        '2. En octobre 1917, les Bolcheviks prennent le pouvoir.',
        '3. Lénine prend la direction du nouveau Conseil des commissaires du peuple.'
      ]
    }
  ],

  'skill-1s-hist-chap5-seconde-guerre': [
    {
      id: 'q-1s-hist-ch5-1',
      exerciseId: 'ex-1s-hist-ch5',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 2 : Le Gabon dans la Seconde Guerre mondiale',
      microConcept: 'En 1940, après l\'appel du 18 juin du général de Gaulle, l\'AEF se rallie à la France Libre à l\'exception du Gabon resté fidèle au gouvernement de Vichy. En novembre 1940, les troupes de la France Libre menées par les généraux Leclerc et de Larminat mènent la « campagne de Libreville » pour rallier le Gabon à la cause alliée.',
      hint: 'Cet affrontement fratricide en novembre 1940 permit à de Gaulle d\'unifier l\'Afrique équatoriale française.',
      prompt: 'Quel événement militaire survenu en novembre 1940 a scellé le ralliement définitif du Gabon à la France Libre du général de Gaulle ?',
      options: [
        'La bataille et la prise de Libreville par les forces gaullistes',
        'Le débarquement de Normandie',
        'La signature de l’armistice de Rethondes',
        'L’attaque navale de Pearl Harbor'
      ],
      correctAnswer: 'La bataille et la prise de Libreville par les forces gaullistes',
      explanation: 'Après les combats de Libreville du 8 au 12 novembre 1940, le Gabon bascula du côté de la France Libre, offrant aux Alliés une base stratégique vitale.',
      steps: [
        '1. Le Tchad, l\'Oubangui-Chari et le Moyen-Congo s\'étaient ralliés dès août 1940.',
        '2. L\'administration vichyste du Gabon refusait de se rallier.',
        '3. L\'opération navale et terrestre alliée en novembre 1940 rattacha le Gabon à la France Libre.'
      ]
    }
  ],

  // =======================================================================================
  // TERMINALE : HISTOIRE
  // =======================================================================================
  'skill-tle-hist-chap1-bilan-guerre-onu': [
    {
      id: 'q-tle-hist-ch1-1',
      exerciseId: 'ex-tle-hist-ch1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 5 : Création et organes de l’ONU',
      microConcept: 'L\'Organisation des Nations Unies (ONU) est créée le 26 juin 1945 à San Francisco par 51 États fondateurs, avec pour mission de maintenir la paix et la sécurité internationales. Son organe exécutif principal est le Conseil de Sécurité, composé de 5 membres permanents dotés du droit de veto (États-Unis, URSS/Russie, Chine, France, Royaume-Uni) et de membres non permanents élus.',
      hint: 'Ces 5 puissances victorieuses de 1945 peuvent bloquer toute résolution contraignante.',
      prompt: 'Combien de membres permanents composent le Conseil de Sécurité de l’ONU, détenant le privilège diplomatique du droit de veto ?',
      options: [
        '5 membres permanents (États-Unis, Russie, Chine, France, Royaume-Uni)',
        '15 membres tous dotés du droit de veto',
        'Uniquement les États-Unis et la Russie',
        'Tous les 193 États membres à tour de rôle'
      ],
      correctAnswer: '5 membres permanents (États-Unis, Russie, Chine, France, Royaume-Uni)',
      explanation: 'Les cinq Grands disposent d\'un siège permanent et du droit de veto, leur permettant de s\'opposer à toute action militaire ou résolution contraignante du Conseil.',
      steps: [
        '1. Le Conseil de sécurité compte 15 membres au total.',
        '2. 10 sont non permanents renouvelés tous les 2 ans.',
        '3. 5 sont permanents et disposent du veto.'
      ]
    },
    {
      id: 'q-tle-hist-ch1-2',
      exerciseId: 'ex-tle-hist-ch1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 3 : Les conférences tripartites',
      microConcept: 'En février 1945, la Conférence de Yalta réunit Roosevelt, Churchill et Staline pour préparer l\'après-guerre : dénazification, occupation quadripartite de l\'Allemagne et de Berlin, et projet de création de l\'ONU.',
      hint: 'Cette célèbre conférence en Crimée réunissait les « Trois Grands ».',
      prompt: 'Quels dirigeants des puissances alliées formaient les « Trois Grands » réunis lors de la conférence historique de Yalta en février 1945 ?',
      options: [
        'Franklin D. Roosevelt, Winston Churchill et Joseph Staline',
        'Adolf Hitler, Benito Mussolini et l’empereur Hirohito',
        'Léon Mba, Charles de Gaulle et Harry Truman',
        'John Kennedy, Nikita Khrouchtchev et Mao Zedong'
      ],
      correctAnswer: 'Franklin D. Roosevelt, Winston Churchill et Joseph Staline',
      explanation: 'Les dirigeants des États-Unis, du Royaume-Uni et de l\'URSS y ont dessiné l\'organisation de l\'Europe libérée et les zones d\'occupation de l\'Allemagne.',
      steps: [
        '1. Conférence de Yalta = février 1945.',
        '2. Chefs d\'État : USA (Roosevelt), Grande-Bretagne (Churchill), URSS (Staline).',
        '3. Elle prépare la capitulation allemande et la sécurité collective.'
      ]
    }
  ],

  'skill-tle-hist-chap2-guerre-froide': [
    {
      id: 'q-tle-hist-ch2-1',
      exerciseId: 'ex-tle-hist-ch2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 3 : La crise des missiles de Cuba (1962)',
      microConcept: 'En octobre 1962, la découverte de rampes de missiles nucléaires soviétiques installées à Cuba amène les États-Unis et l\'URSS au bord d\'un conflit thermonucléaire mondial. John F. Kennedy instaure un blocus maritime de l\'île, et Nikita Khrouchtchev accepte de retirer les fusées en échange de l\'engagement américain de ne pas envahir Cuba.',
      hint: 'Ce paroxysme de la guerre froide opposa Kennedy et Khrouchtchev pendant 13 jours.',
      prompt: 'Quel compromis a permis de désamorcer pacifiquement la gravissime crise des missiles de Cuba en octobre 1962 ?',
      options: [
        'Le retrait des missiles soviétiques contre la promesse américaine de ne pas envahir Cuba',
        'L’invasion militaire terrestre de l’Union soviétique par les États-Unis',
        'L’utilisation d’armes nucléaires tactiques sur La Havane',
        'La cession définitive de l’île de Cuba à l’URSS'
      ],
      correctAnswer: 'Le retrait des missiles soviétiques contre la promesse américaine de ne pas envahir Cuba',
      explanation: 'Après 13 jours d\'angoisse planétaire, Khrouchtchev accepta de rapatrier les missiles et Kennedy leva la quarantaine navale, amorçant une période de détente.',
      steps: [
        '1. Octobre 1962 : crise des missiles soviétiques à 150 km des côtes américaines.',
        '2. Blocus naval imposé par JFK.',
        '3. Accord secret/public : démantèlement des missiles soviétiques et retrait des missiles Jupiter en Turquie.'
      ]
    },
    {
      id: 'q-tle-hist-ch2-2',
      exerciseId: 'ex-tle-hist-ch2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 6 : Effondrement de l’URSS',
      microConcept: 'En 1985, Mikhaïl Gorbatchev tente de réformer l\'URSS par la perestroïka (restructuration économique) et la glasnost (transparence démocratique). Ces réformes accélèrent l\'effondrement du bloc de l\'Est (chute du mur de Berlin en 1989) puis la dislocation formelle de l\'URSS en décembre 1991, mettant fin à la Guerre froide.',
      hint: 'Ces deux termes russes désignent la restructuration et la transparence.',
      prompt: 'Quels termes désignent les deux réformes majeures lancées par Mikhaïl Gorbatchev ayant précipité la fin de la Guerre froide ?',
      options: [
        'La Glasnost (transparence) et la Perestroïka (restructuration)',
        'Le New Deal et le Plan Marshall',
        'La Révolution culturelle et le Grand Bond en avant',
        'L’Apartheid et la Bantoustanisation'
      ],
      correctAnswer: 'La Glasnost (transparence) et la Perestroïka (restructuration)',
      explanation: 'En libérant la parole et en assouplissant la planification, ces réformes ont libéré les aspirations démocratiques et nationales qui ont dissous l\'Union Soviétique.',
      steps: [
        '1. Gorbatchev arrive au pouvoir en URSS en 1985.',
        '2. Il lance la Perestroïka (économie) et la Glasnost (liberté d\'expression).',
        '3. Cela conduit à la chute du Mur de Berlin (1989) et à la fin de l\'URSS (décembre 1991).'
      ]
    }
  ],

  'skill-tle-hist-chap3-decolonisation': [
    {
      id: 'q-tle-hist-ch3-1',
      exerciseId: 'ex-tle-hist-ch3',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : La décolonisation du Gabon',
      microConcept: 'Le 17 août 1960, Léon Mba proclame solennellement l\'accession du Gabon à la souveraineté internationale, aboutissement d\'un processus politique pacifique et négocié avec la France, jalonné par la loi-cadre Defferre (1956) et le référendum de la Communauté franco-africaine (1958).',
      hint: 'Cette date nationale sacrée marque la fête nationale de l\'indépendance du Gabon.',
      prompt: 'À quelle date historique précise l’indépendance de la République gabonaise a-t-elle été officiellement proclamée par Léon Mba ?',
      options: [
        'Le 17 août 1960',
        'Le 14 juillet 1789',
        'Le 1er janvier 1950',
        'Le 12 mars 1968'
      ],
      correctAnswer: 'Le 17 août 1960',
      explanation: 'Léon Mba a proclamé l\'indépendance du Gabon le 17 août 1960 à Libreville, date célébrée chaque année comme la fête de l\'indépendance nationale.',
      steps: [
        '1. 1958 : statut d\'État membre de la Communauté.',
        '2. Juillet 1960 : signature des accords de transfert de compétences.',
        '3. 17 août 1960 : proclamation solennelle de l\'indépendance à minuit.'
      ]
    },
    {
      id: 'q-tle-hist-ch3-2',
      exerciseId: 'ex-tle-hist-ch3',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 2 : La décolonisation de l’Algérie',
      microConcept: 'Contrairement à l\'Afrique noire francophone où la décolonisation fut globalement négociée, la décolonisation de l\'Algérie passa par une guerre sanglante de huit ans (1954-1962) menée par le Front de Libération Nationale (FLN), conclue par les accords d\'Évian en mars 1962.',
      hint: 'Ces accords diplomatiques signés en France ont mis fin à la guerre d\'Algérie en 1962.',
      prompt: 'Quels accords historiques signés en mars 1962 entre le gouvernement français et le FLN ont reconnu le droit à l’autodétermination de l’Algérie ?',
      options: [
        'Les accords d’Évian',
        'La conférence de Berlin',
        'Le traité de Versailles',
        'Le pacte de Varsovie'
      ],
      correctAnswer: 'Les accords d’Évian',
      explanation: 'Les accords d\'Évian du 18 mars 1962 ont instauré le cessez-le-feu et ouvert la voie au référendum d\'indépendance de l\'Algérie proclamée en juillet 1962.',
      steps: [
        '1. Guerre d\'Algérie : 1er novembre 1954 au 19 mars 1962.',
        '2. Négociations à Évian-les-Bains.',
        '3. Signature des accords reconnaissant la souveraineté du peuple algérien.'
      ]
    }
  ],

  'skill-tle-hist-chap4-tiers-monde': [
    {
      id: 'q-tle-hist-ch4-1',
      exerciseId: 'ex-tle-hist-ch4',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Leçon 1 : La conférence de Bandung (1955)',
      microConcept: 'En avril 1955, 29 pays d\'Asie et d\'Afrique nouvellement indépendants se réunissent à Bandung (Indonésie) à l\'invitation de Soekarno, Nasser, Nehru et Zhou Enlai. La conférence condamne le colonialisme sous toutes ses formes et pose les jalons du non-alignement face aux blocs américain et soviétique.',
      hint: 'Cette ville indonésienne a accueilli la conférence fondatrice du tiers-monde en 1955.',
      prompt: 'Dans quelle ville d’Indonésie s’est tenue en avril 1955 la conférence historique marquant l’éveil et l’affirmation politique du tiers-monde ?',
      options: [
        'Bandung',
        'Belgrade',
        'Le Caire',
        'Pékin'
      ],
      correctAnswer: 'Bandung',
      explanation: 'La conférence de Bandung a été l\'acte de naissance politique du tiers-monde, affirmant l\'anticolonialisme et la souveraineté des peuples d\'Asie et d\'Afrique.',
      steps: [
        '1. Avril 1955 : première grande conférence afro-asiatique.',
        '2. Ville hôte : Bandung en Indonésie.',
        '3. Conséquence : rejet de la bipolarisation et solidarité Sud-Sud.'
      ]
    }
  ],

  'skill-tle-hist-chap5-democratie-afrique': [
    {
      id: 'q-tle-hist-ch5-1',
      exerciseId: 'ex-tle-hist-ch5',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Leçon 1 : Le renouveau démocratique au Gabon et en Afrique',
      microConcept: 'Au début des années 1990, sous la pression de revendications sociales, de grèves étudiantes et ouvrières, et du discours de La Baule, le Gabon organise de mars à avril 1990 une Conférence Nationale historique. Cet événement met fin au régime du parti unique (PDG) et réinstaure le multipartisme intégral et les libertés publiques.',
      hint: 'Cette grande assemblée tenue à Libreville au premier semestre 1990 a réuni toutes les forces vives de la nation.',
      prompt: 'Quel forum historique organisé au Gabon de mars à avril 1990 a acté le retour au multipartisme et les réformes démocratiques ?',
      options: [
        'La Conférence Nationale',
        'Le Conseil de l’Entente',
        'La Commission tripartite de Berlin',
        'Le sommet de l’OUA à Addis-Abeba'
      ],
      correctAnswer: 'La Conférence Nationale',
      explanation: 'La Conférence Nationale de 1990 a jeté les bases d\'une nouvelle constitution démocratique, de la création de la Cour Constitutionnelle et du rétablissement du pluralisme politique.',
      steps: [
        '1. Crise économique et contestations syndicales en 1989-1990.',
        '2. Convocation de la Conférence Nationale réunissant pouvoir et oppositions.',
        '3. Adoption immédiate du multipartisme et des libertés fondamentales.'
      ]
    }
  ]
};
