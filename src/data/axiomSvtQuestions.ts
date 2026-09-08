import { ExerciseQuestion } from '../types';

// =========================================================================
// SVT SECONDE S (PROGRAMME OFFICIEL - GABON)
// PARTIE 1 : EXPLOITATION DES RESSOURCES GÉOLOGIQUES ET ENVIRONNEMENT
// PARTIE 2 : SANTÉ SEXUELLE ET REPRODUCTION (ESSR) & COMMUNICATION ANIMALE
// PARTIE 3 : NUTRITION ET ORGANISATION CHEZ UN VÉGÉTAL
// =========================================================================

// =========================================================================
// CHAPITRE 1 : EXPLOITATION DES GAZ NATURELS / HYDROCARBURES ET ENVIRONNEMENT
// =========================================================================
export const SECONDE_SVT_HYDROCARBURES_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-svt-hyd-1',
    exerciseId: 'ex-svt-hyd-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Origine et Formation des Hydrocarbures)',
    microConcept: 'Le pétrole et le gaz naturel sont des combustibles fossiles issus de la décomposition lente, à l\'abri de l\'oxygène (milieu anoxique), de phytoplancton et de matières organiques marines déposées au fond de bassins sédimentaires durant des millions d\'années, sous l\'effet combiné de la pression et de la température géothermique.',
    hint: 'Pense à la matière vivante originelle : s\'agit-il de grands dinosaures ou de micro-organismes marins enfouis dans la boue sédimentaire ?',
    prompt: 'Quelle est la matière première originelle à la base de la formation du pétrole et du gaz naturel exploités au Gabon (bassin côtier de Port-Gentil) ?',
    options: [
      'Du plancton et de la biomasse microscopique marine enfouis en milieu anoxique dans une roche-mère',
      'Des troncs d\'arbres fossilisés de la forêt équatoriale transformés en charbon',
      'Des coulées de lave magmatique solidifiées au contact de l\'eau de mer',
      'Des minéraux dissous précipitant spontanément dans les cours d\'eau'
    ],
    correctAnswer: 'Du plancton et de la biomasse microscopique marine enfouis en milieu anoxique dans une roche-mère',
    commonMistake: 'Penser que le pétrole provient de restes de grands dinosaures ou de forêts terrestres (les forêts terrestres donnent principalement de la tourbe et du charbon, tandis que les hydrocarbures liquides naissent de micro-organismes aquatiques).',
    explanation: 'La matière organique planctonique sédimente au fond des océans et est incorporée dans une roche-mère sédimentaire. Sous forte température et pression (fenêtre à huile), elle se transforme en kérogène puis en hydrocarbures liquides et gazeux.',
    steps: [
      '1. Accumulation de plancton mort au fond d\'un bassin marin peu oxygéné.',
      '2. Enfouissement progressif sous des couches d\'argiles et de sables.',
      '3. Maturation thermique sous haute pression : formation de pétrole et gaz dans la roche-mère.',
      '4. Migration des fluides vers une roche-réservoir poreuse bloquée par un piège géologique imperméable.'
    ]
  },
  {
    id: 'q-2s-svt-hyd-2',
    exerciseId: 'ex-svt-hyd-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Structure d\'un Piège Pétrolifère)',
    microConcept: 'Un gisement exploitable nécessite trois éléments géologiques indispensables : une roche-mère (qui a généré les hydrocarbures), une roche-réservoir poreuse et perméable (ex: grès, calcaire où circulent et s\'accumulent le pétrole et le gaz), et une roche-couverture imperméable (ex: argile, sel) qui bloque leur remontée vers la surface.',
    hint: 'Pour que le pétrole ne s\'échappe pas à l\'air libre, que doit obligatoirement présenter la couche située au-dessus de lui ?',
    prompt: 'Dans la structure d\'un gisement pétrolier d\'hydrocarbures, quel est le rôle indispensable de la "roche-couverture" ?',
    options: [
      'Être une couche sédimentaire imperméable qui piège les hydrocarbures et empêche leur fuite vers la surface',
      'Fabriquer les molécules de pétrole par photosynthèse souterraine',
      'Réchauffer le gisement pour maintenir le pétrole sous forme gazeuse',
      'Filtrer l\'eau pour la rendre potable lors des forages'
    ],
    correctAnswer: 'Être une couche sédimentaire imperméable qui piège les hydrocarbures et empêche leur fuite vers la surface',
    commonMistake: 'Confondre la roche-réservoir (qui doit être poreuse pour stocker le pétrole) et la roche-couverture (qui doit être rigoureusement imperméable pour le retenir).',
    explanation: 'Comme le pétrole et le gaz sont moins denses que l\'eau interstitielle, ils migrent vers le haut. Sans roche-couverture imperméable (argileuse ou évaporitique), ils remonteraient et s\'évaporeraient à la surface.',
    steps: [
      '1. Les hydrocarbures migrent vers le haut par flottaison au-dessus de l\'eau souterraine.',
      '2. Ils se rassemblent dans les pores de la roche-réservoir.',
      '3. La roche-couverture imperméable forme un toit hermétique (piège anticlinal ou piège de faille).',
      '4. Le gisement reste ainsi piégé et exploitable par forage.'
    ]
  },
  {
    id: 'q-2s-svt-hyd-3',
    exerciseId: 'ex-svt-hyd-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Torchage du Gaz & Impact Atmosphérique)',
    microConcept: 'Lors de l\'extraction pétrolière, les gaz associés (méthane CH₄) sont parfois brûlés à la torche en haute mer ou sur terre ferme (torchage ou flaring). Cette combustion libère des millions de tonnes de dioxyde de carbone (CO₂), des oxydes d\'azote (NOₓ) et des suies, contribuant activement à l\'accentuation de l\'effet de serre et aux pluies acides.',
    hint: 'Le gaz naturel est principalement constitué de méthane (CH₄). Lorsqu\'on le brûle à la flamme, quels gaz et polluants sont rejetés dans l\'atmosphère ?',
    prompt: 'Quel est l\'impact environnemental majeur de la pratique du "torchage" (brûlage du gaz associé au pétrole sur les plateformes pétrolières) ?',
    options: [
      'Une émission massive de CO₂ et de gaz à effet de serre aggravant le dérèglement climatique',
      'Une acidification directe des nappes souterraines sans impact sur l\'air',
      'La destruction totale de la couche d\'ozone stratosphérique par les chlorofluorocarbures',
      'Une baisse artificielle de la température de l\'océan environnant'
    ],
    correctAnswer: 'Une émission massive de CO₂ et de gaz à effet de serre aggravant le dérèglement climatique',
    commonMistake: 'Croire que brûler le gaz supprime tout impact environnemental. Même si brûler le CH₄ évite de relâcher du méthane pur (dont le PRG est 28 fois supérieur au CO₂), cela génère d\'immenses volumes de CO₂ et pollue l\'air local.',
    explanation: 'La combustion du gaz CH₄ + 2 O₂ → CO₂ + 2 H₂O libère du dioxyde de carbone, principal gaz à effet de serre d\'origine anthropique. Le Gabon s\'est engagé dans la réduction du torchage pour valoriser ce gaz en électricité propre.',
    steps: [
      '1. Le pétrole brut extrait contient du gaz dissous sous haute pression (gaz associé).',
      '2. En l\'absence de gazoduc ou d\'usine de liquéfaction, le gaz est brûlé sur place à la torche.',
      '3. Rejets massifs de CO₂, de composés volatils et de suies carbonées dans l\'atmosphère.',
      '4. Solution écologique : réinjection dans le réservoir ou valorisation thermique (centrale thermique à gaz).'
    ]
  },
  {
    id: 'q-2s-svt-hyd-4',
    exerciseId: 'ex-svt-hyd-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Marées Noires & Écosystèmes Marins Littoraux)',
    microConcept: 'Une marée noire consécutive à une fuite de brut marin (offshore) forme un film hydrophobe à la surface de l\'eau. Elle perturbe gravement les écosystèmes côtiers (mangroves, lagunes de Mandji, récifs) : écran opaque bloquant la photosynthèse phytoplanctonique, asphyxie des organismes benthiques et engluage mortel des plumes des oiseaux aquatiques.',
    hint: 'Pense aux effets physiques (blocage de la lumière, imperméabilisation du plumage) et chimiques (toxicité des hydrocarbures aromatiques).',
    prompt: 'Par quel mécanisme biologique direct une marée noire d\'hydrocarbures détruit-elle la base de la chaîne trophique (alimentaire) marine ?',
    options: [
      'En formant un film noir en surface qui bloque la pénétration de la lumière solaire, stoppant la photosynthèse du phytoplancton',
      'En augmentant la salinité de l\'eau de mer jusqu\'à cristallisation complète du sel',
      'En accélérant anormalement la reproduction des poissons herbivores',
      'En provoquant l\'évaporation instantanée de la lagune'
    ],
    correctAnswer: 'En formant un film noir en surface qui bloque la pénétration de la lumière solaire, stoppant la photosynthèse du phytoplancton',
    commonMistake: 'Négliger le rôle du phytoplancton : le phytoplancton produit l\'essentiel de la matière organique primaire dans l\'océan par photosynthèse. Si la lumière est masquée, toute la chaîne trophique s\'effondre.',
    explanation: 'Le film d\'hydrocarbure empêche la lumière d\'atteindre les micro-algues photosynthétiques (phytoplancton) et restreint les échanges gazeux d\'oxygène avec l\'atmosphère, créant des zones marines hypoxiques mortelles.',
    steps: [
      '1. Déversement accidentel de brut ou dégazage en mer.',
      '2. État de surface : nappe visqueuse imperméable et opaque à la lumière.',
      '3. Arrêt de la photosynthèse phytoplanctonique et mort des producteurs primaires.',
      '4. Asphyxie consécutive du zooplancton, des mollusques, poissons et altération des mangroves.'
    ]
  },
  {
    id: 'q-2s-svt-hyd-5',
    exerciseId: 'ex-svt-hyd-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Très difficile (Biorémédiation & Réhabilitation des Sites)',
    microConcept: 'La dépollution moderne des sols et lagunes pollués par les hydrocarbures fait appel à la biorémédiation : l\'utilisation de bactéries indigènes hydrocarburoclastes (capables de digérer et minéraliser les molécules d\'alcanes et d\'aromatiques en CO₂ et H₂O inoffensifs), stimulée par l\'apport contrôlé d\'azote (N) et de phosphore (P) (biostimulation).',
    hint: 'La nature possède des micro-organismes spécialisés capables de se nourrir d\'hydrocarbures à condition qu\'on leur apporte les nutriments nécessaires.',
    prompt: 'En quoi consiste le procédé biologique de "biostimulation" utilisé pour la dépollution des sols souillés par les résidus pétroliers ?',
    options: [
      'Apporter de l\'azote et du phosphore pour doper la prolifération des bactéries indigènes capables de métaboliser les hydrocarbures',
      'Injecter des solvants chimiques acides pour dissoudre les sédiments jusqu\'au socle rocheux',
      'Enlever la terre polluée et la brûler à ciel ouvert sur le site',
      'Immerger le sol dans de l\'eau distillée pendant plusieurs années sans intervention'
    ],
    correctAnswer: 'Apporter de l\'azote et du phosphore pour doper la prolifération des bactéries indigènes capables de métaboliser les hydrocarbures',
    commonMistake: 'Confondre la biorémédiation (naturelle et respectueuse des sols) avec le décapage mécanique ou l\'incinération thermique qui détruisent toute fertilité biologique.',
    explanation: 'Les bactéries hydrocarburoclastes sont naturellement présentes dans les sols pétroliers. Comme les hydrocarbures apportent énormément de carbone, le facteur limitant est l\'azote et le phosphore. Leur ajout démultiplie l\'activité métabolique de dégradation.',
    steps: [
      '1. Diagnostic : sol pollué contenant un excès de carbone (C) par rapport à l\'azote (N) et au phosphore (P).',
      '2. Biostimulation : apport d\'engrais minéraux (N, P) et aération (labourage ou injection d\'oxygène).',
      '3. Métabolisation : les bactéries dégradent les chaînes carbonées complexes en eau et CO₂.',
      '4. Retour progressif de la vie végétale et réhabilitation environnementale du site.'
    ]
  },
  {
    id: 'q-2s-svt-hyd-methode-roc',
    exerciseId: 'ex-svt-hyd-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode SVT - ROC Type 1 (Introduction & Définition des Termes Clés)',
    microConcept: 'Dans un Sujet de Type 1 (Restitution Organisée de Connaissances, noté sur 6-7 pts en SVT au Gabon), l\'introduction comprend obligatoirement 4 étapes : 1) Amener le sujet (accroche), 2) Définir rigoureusement les termes scientifiques clés du libellé, 3) Poser clairement la problématique sous forme de question directe, 4) Annoncer le plan structuré. Définir les termes scientifiques est capital pour cadrer le sujet.',
    hint: 'L\'introduction officielle de ROC en SVT exige de définir précisément les termes scientifiques (comme kérogène, roche-mère, piège) avant de formuler la question directrice.',
    prompt: 'Sur le sujet de ROC (Type 1) : « La formation et le piégeage géologique des hydrocarbures », quelle proposition respecte scrupuleusement les exigences de l\'INTRODUCTION (accroche, définitions scientifiques, problématique et annonce de plan) ?',
    options: [
      'L\'énergie mondiale dépend largement des combustibles fossiles. Les hydrocarbures sont des composés organiques carbonés issus de la pyrolyse du kérogène dans une roche-mère sédimentaire, stockés dans une roche-réservoir poreuse bloquée par un piège géologique imperméable. Comment s\'opèrent la genèse et le piégeage de ces fluides au cours des temps géologiques ? Nous décrirons d\'abord les étapes d\'enfouissement et de maturation de la biomasse, puis nous détaillerons les caractéristiques structurales des pièges pétrolifères.',
      'Le pétrole est une huile noire très chère vendue à Port-Gentil. Dans ce devoir nous allons vous expliquer pourquoi l\'essence coûte cher et comment on creuse des puits de pétrole avec des tuyaux.',
      'Les hydrocarbures polluent la planète. C\'est pourquoi il faut immédiatement arrêter le pétrole et fabriquer des panneaux solaires partout au Gabon.',
      'En conclusion de ce devoir, nous avons vu que le gaz naturel est composé de méthane et que les réserves s\'épuisent rapidement.'
    ],
    correctAnswer: 'L\'énergie mondiale dépend largement des combustibles fossiles. Les hydrocarbures sont des composés organiques carbonés issus de la pyrolyse du kérogène dans une roche-mère sédimentaire, stockés dans une roche-réservoir poreuse bloquée par un piège géologique imperméable. Comment s\'opèrent la genèse et le piégeage de ces fluides au cours des temps géologiques ? Nous décrirons d\'abord les étapes d\'enfouissement et de maturation de la biomasse, puis nous détaillerons les caractéristiques structurales des pièges pétrolifères.',
    commonMistake: 'Oublier de définir les termes scientifiques clés ou poser une problématique vague sans rapport avec le sujet de géologie.',
    explanation: 'Cette introduction de ROC remplit les 4 critères officiels : accroche générale, définitions scientifiques rigoureuses (kérogène, roche-mère, roche-réservoir, piège), problématique sous forme de question et annonce claire des deux grandes parties du plan.',
    steps: [
      '1. Amener le sujet : mise en contexte géologique.',
      '2. Définitions scientifiques : définir précisément les notions géologiques au cœur du libellé.',
      '3. Problématique : poser la question centrale de SVT à résoudre.',
      '4. Annonce du plan : exposer les grandes parties qui structureront le développement.'
    ]
  },
  {
    id: 'q-2s-svt-hyd-methode-doc',
    exerciseId: 'ex-svt-hyd-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode SVT - Raisonnement sur Documents Type 2 (Analyse Chiffrée & Déduction)',
    microConcept: 'Dans un Sujet de Type 2 (Raisonnement scientifique s\'appuyant sur des documents, noté sur 13-14 pts), la règle d\'or absolue de l\'analyse stricte est : extraire les faits observés, CITER IMPÉRATIVEMENT LES VALEURS CHIFFRÉES AVEC LEURS UNITÉS, et en dégager une DÉDUCTION immédiate (sans se contenter d\'une paraphrase descriptive sans chiffres).',
    hint: 'Repère la proposition qui cite fidèlement les mesures chiffrées avec leurs unités précises (% et millidarcys) et en tire une conclusion géologique rigoureuse.',
    prompt: 'Un document géologique présente un carottage à 2 400 m de profondeur : la couche A (grès) présente une porosité de 28 % et une perméabilité de 450 mD (millidarcys), tandis que la couche B sus-jacente (argilite) présente une porosité de 3 % et une perméabilité inférieure à 0,001 mD. Quelle est l\'analyse méthodique conforme aux exigences du Sujet de Type 2 ?',
    options: [
      'Je constate que la couche de grès A présente une forte porosité (28 %) et une perméabilité élevée (450 mD), alors que l\'argilite B affiche une très faible porosité (3 %) et une perméabilité quasi-nulle (< 0,001 mD). J\'en déduis que la couche A constitue une excellente roche-réservoir capable de stocker les fluides et que la couche B forme la roche-couverture imperméable du piège.',
      'La couche A a plus de trous que la couche B donc c\'est sûrement du bon pétrole et la couche B est dure.',
      'Le document montre deux couches de roche. On sait d\'après le cours que le pétrole est liquide, donc la roche B est inutile.',
      'En reliant les documents, on comprend que la température est trop élevée pour que les hydrocarbures restent solides.'
    ],
    correctAnswer: 'Je constate que la couche de grès A présente une forte porosité (28 %) et une perméabilité élevée (450 mD), alors que l\'argilite B affiche une très faible porosité (3 %) et une perméabilité quasi-nulle (< 0,001 mD). J\'en déduis que la couche A constitue une excellente roche-réservoir capable de stocker les fluides et que la couche B forme la roche-couverture imperméable du piège.',
    commonMistake: 'Faire une analyse qualitative vague (« c\'est grand », « c\'est faible ») sans citer les données numériques et leurs unités exactes (28 %, 450 mD, 3 %, < 0,001 mD), ce qui fait perdre des points d\'analyse au barème gabonais.',
    explanation: 'Dans l\'épreuve de Type 2 en SVT, chaque fait extrait doit s\'appuyer sur la donnée chiffrée avec son unité, suivie immédiatement de la déduction scientifique locale avant toute mise en relation globale.',
    steps: [
      '1. Saisie des données : citer les valeurs chiffrées exactes et leurs unités pour chaque couche.',
      '2. Comparaison méthodique : mettre en contraste les propriétés pétrophysiques (porosité, perméabilité).',
      '3. Déduction scientifique immédiate : identifier la fonction géologique de chaque niveau (roche-réservoir vs roche-couverture).'
    ]
  }
];

// =========================================================================
// CHAPITRE 2 : EXPLOITATION DU MANGANÈSE OU DE L'URANIUM ET RISQUES ENVIRONNEMENTAUX
// =========================================================================
export const SECONDE_SVT_MINERAIS_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-svt-min-1',
    exerciseId: 'ex-svt-min-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Les Grands Gisements Miniers du Gabon)',
    microConcept: 'Le sous-sol gabonais recèle d\'immenses richesses minérales : le manganèse de Moanda (plateau de Bangombé, exploité par la COMILOG, faisant du Gabon l\'un des premiers producteurs mondiaux) et l\'uranium du bassin paléoprotérozoïque de Franceville (Mounana, ancienne exploitation de la COMUF fermée en 1999).',
    hint: 'Quelle ville du Haut-Ogooué est célèbre mondialement pour son gigantesque plateau de minerai de manganèse ?',
    prompt: 'Dans quelle région et ville du Gabon se situe le principal gisement de manganèse de rang mondial exploité à ciel ouvert ?',
    options: [
      'À Moanda sur le plateau de Bangombé (Province du Haut-Ogooué)',
      'À Lambaréné sur les rives du fleuve Ogooué (Moyen-Ogooué)',
      'À Mouila dans la vallée de la Ngounié',
      'À Port-Gentil sur l\'île Mandji (Ogooué-Maritime)'
    ],
    correctAnswer: 'À Moanda sur le plateau de Bangombé (Province du Haut-Ogooué)',
    commonMistake: 'Confondre Port-Gentil (capitale pétrolière) avec Moanda (capitale mondiale du manganèse au Gabon).',
    explanation: 'Le manganèse du Gabon est concentré sur les plateaux de Bangombé, Okouma et Bafoula à Moanda, dans la province du Haut-Ogooué. Son minerai riche en dioxyde de manganèse (MnO₂) est un composant crucial de la sidérurgie et des batteries.',
    steps: [
      '1. Localisation géologique : province sédimentaire du Haut-Ogooué.',
      '2. Métal extrait : Manganèse (symbole Mn).',
      '3. Site principal : Plateau de Bangombé à Moanda.',
      '4. Exploitation : Extraction à ciel ouvert par décapage de la couverture stérile.'
    ]
  },
  {
    id: 'q-2s-svt-min-2',
    exerciseId: 'ex-svt-min-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Impact de l\'Exploitation à Ciel Ouvert)',
    microConcept: 'L\'exploitation minière à ciel ouvert requiert le défrichage intégral de la forêt, le décapage de l\'horizon humifère superficiel et l\'évacuation des "stériles" (roches non minéralisées). Cela engendre une déforestation directe, une perte drastique de biodiversité, une forte érosion des sols latéritiques sous les pluies tropicales et un envasement des cours d\'eau voisins.',
    hint: 'Quelles sont les répercussions visuelles et écologiques immédiates lorsqu\'on décape entièrement le sommet d\'un plateau forestier ?',
    prompt: 'Quel est l\'impact environnemental direct immédiat du décapage pour l\'exploitation minière à ciel ouvert ?',
    options: [
      'La destruction de la canopée forestière, la mise à nu des sols entraînant une érosion torrentielle et la sédimentation des rivières',
      'L\'augmentation spontanée de la fertilité des terres agricoles environnantes',
      'La purification naturelle des cours d\'eau par dépôt d\'argile',
      'Une diminution durable de la température atmosphérique locale'
    ],
    correctAnswer: 'La destruction de la canopée forestière, la mise à nu des sols entraînant une érosion torrentielle et la sédimentation des rivières',
    commonMistake: 'Penser que l\'impact se limite aux trous creusés sans considérer le ruissellement des eaux de pluie qui lessivent les poussières minérales vers les bassins versants.',
    explanation: 'Le décapage détruit le couvert végétal protecteur. Les pluies équatoriales violentes ravinent la terre latéritique dénudée, emportant d\'immenses volumes de boues rouges vers les ruisseaux et rivières de la région (envasement et turbidité extrême).',
    steps: [
      '1. Abattage de la végétation arborée sur le plateau minier.',
      '2. Enlèvement des couches superficielles de sol (stériles miniers).',
      '3. Ruissellement accéléré des eaux d\'orage sur la surface nue.',
      '4. Envasement des lits de rivières et asphyxie de la faune aquatique locale.'
    ]
  },
  {
    id: 'q-2s-svt-min-3',
    exerciseId: 'ex-svt-min-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Résidus d\'Uranium & Radioactivité à Mounana)',
    microConcept: 'L\'uranium exploité jadis à Mounana (1961-1999) pose des enjeux environnementaux spécifiques liés à la radioactivité naturelle et aux résidus de traitement (stériles et boues riches en radium 226). Ces résidus continuent d\'émettre des rayonnements ionisants (gamma) et dégagent un gaz radioactif dangereux : le radon 222.',
    hint: 'L\'uranium se désintègre au fil du temps. Quel gaz radioactif inodore s\'échappe des roches et résidus uranifères ?',
    prompt: 'Quel risque sanitaire et environnemental persistant est particulièrement surveillé sur les anciens sites uranifères de Mounana ?',
    options: [
      'L\'émanation de gaz radioactif radon (²²²Rn) et l\'exposition aux rayonnements ionisants des résidus miniers',
      'Le risque d\'explosion volcanique sous la pression des roches',
      'La formation spontanée de nappes de pétrole sous les galeries',
      'L\'accumulation excessive d\'oxygène pur dans l\'atmosphère'
    ],
    correctAnswer: 'L\'émanation de gaz radioactif radon (²²²Rn) et l\'exposition aux rayonnements ionisants des résidus miniers',
    commonMistake: 'Croire que dès la fermeture d\'une mine d\'uranium, la radioactivité disparaît instantanément. La demi-vie des descendants (comme le radium 226, 1600 ans) exige une surveillance et un confinement sur des siècles.',
    explanation: 'Les résidus de traitement d\'uranium contiennent du radium qui se désintègre en radon 222, un gaz radioactif émetteur alpha qui, s\'il est inhalé, peut provoquer des cancers du poumon. Les zones doivent être recouvertes d\'argile et de terre étanche.',
    steps: [
      '1. Extraction et broyage du minerai d\'uranium pour extraire le concentré (yellowcake).',
      '2. Stockage des résidus sableux riches en radio-éléments à longue durée de vie.',
      '3. Émission continue de radon 222 dans l\'air et lixiviation possible par les eaux de pluie.',
      '4. Obligation de réhabilitation : confinement sous dalles étanches et contrôle radiologique régulier.'
    ]
  },
  {
    id: 'q-2s-svt-min-4',
    exerciseId: 'ex-svt-min-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Drainage Minier & Pollution Métallique des Eaux)',
    microConcept: 'Le drainage minier acide (DMA) ou le lessivage des dépôts de stériles survient lorsque les minéraux sulfurés mis à l\'air libre réagissent avec l\'eau et l\'oxygène atmosphérique : 2 FeS₂ + 7 O₂ + 2 H₂O → 2 Fe²⁺ + 4 SO₄²⁻ + 4 H⁺. Cela produit de l\'acide sulfurique qui dissout les métaux lourds toxiques (manganèse, plomb, arsenic, cadmium) et contamine les nappes.',
    hint: 'La mise à nu de roches souterraines riches en sulfures crée une réaction chimique avec l\'air et la pluie produisant un liquide très acide.',
    prompt: 'Comment qualifie-t-on le phénomène chimique provoquant l\'acidification sévère des eaux de ruissellement et la dissolution de métaux lourds sur un site minier ?',
    options: [
      'Le drainage minier acide (DMA) causé par l\'oxydation des sulfures à l\'air et sous l\'action des pluies',
      'La photosynthèse hydrothermale des roches de surface',
      'La calcification biologique des cours d\'eau',
      'L\'osmose inversée des argiles sédimentaires'
    ],
    correctAnswer: 'Le drainage minier acide (DMA) causé par l\'oxydation des sulfures à l\'air et sous l\'action des pluies',
    commonMistake: 'Penser que l\'eau devient acide à cause des engins de chantier ou des huiles de vidange, alors qu\'il s\'agit d\'une réaction géochimique naturelle accélérée par le broyage des roches sulfurées.',
    explanation: 'L\'oxydation de la pyrite (FeS₂) et d\'autres sulfures en présence d\'eau de pluie génère de l\'acide sulfurique (pH pouvant descendre sous 3). Cet acide solubilise les métaux lourds qui deviennent hautement biodisponibles et toxiques pour les humains et poissons.',
    steps: [
      '1. Broyage et exposition des roches souterraines à l\'oxygène de l\'air.',
      '2. Oxydation des minéraux sulfurés favorisée par les pluies tropicales régulières.',
      '3. Baisse drastique du pH (acidification aiguë de l\'eau).',
      '4. Lixiviation et transport des métaux lourds dissous dans le réseau hydrographique.'
    ]
  },
  {
    id: 'q-2s-svt-min-5',
    exerciseId: 'ex-svt-min-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Très difficile (Restauration Pédologique & Revégétalisation)',
    microConcept: 'La restauration écologique d\'un plateau minier après exploitation (ex: Moanda) repose sur un protocole rigoureux en trois phases : 1) Remodelage topographique et redéposition de la terre végétale stockée préalablement (couche humifère) ; 2) Ensemencement d\'espèces végétales pionnières fixatrices d\'azote (légumineuses herbacées) pour stabiliser le sol contre le ravinement ; 3) Replantation d\'arbres forestiers autochtones pour reconstituer la canopée d\'origine.',
    hint: 'Pourquoi stocke-t-on soigneusement la terre végétale de surface au tout début de l\'ouverture d\'une carrière avant de creuser le minerai ?',
    prompt: 'Quelle est la première étape clé de génie écologique indispensable pour réussir la revégétalisation d\'un plateau après l\'extraction du manganèse ?',
    options: [
      'Reposer la couche de terre végétale superficielle conservée lors du décapage initial pour réintroduire le stock de graines et les micro-organismes du sol',
      'Couler une dalle de béton armé pour stabiliser le plateau minier',
      'Inonder définitivement le plateau d\'eau de mer pour créer une lagune',
      'Introduire des espèces d\'arbres exotiques envahissantes à croissance instantanée'
    ],
    correctAnswer: 'Reposer la couche de terre végétale superficielle conservée lors du décapage initial pour réintroduire le stock de graines et les micro-organismes du sol',
    commonMistake: 'Replanter des arbres directement sur la roche stérile broyée. Sans le complexe argilo-humique et les mycorhizes de la terre végétale initiale, aucune forêt pérenne ne peut reprendre.',
    explanation: 'La couche arable superficielle (les 30 à 50 premiers centimètres) contient l\'humus, les bactéries du sol, les mycorhizes et la banque de graines indigènes. Sa réinstallation permet la cicatrisation écologique rapide du site.',
    steps: [
      '1. Décapage sélectif et mise en réserve de la terre végétale avant exploitation.',
      '2. Extraction du manganèse jusqu\'à épuisement de la tranche de minerai.',
      '3. Remblaiement avec les stériles et étalement de la terre végétale mise de côté.',
      '4. Semis d\'herbacées pionnières antierosives puis reboisement avec essences locales d\'okoumé et bois durs.'
    ]
  },
  {
    id: 'q-2s-svt-min-methode-doc',
    exerciseId: 'ex-svt-min-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode SVT - Raisonnement sur Documents Type 2 (Exploitation d\'un Profil Géochimique)',
    microConcept: 'Dans le sujet de Type 2, l\'exploitation d\'un graphique ou profil géologique nécessite de mettre en relation les variables mesurées avec les connaissances de cours : « Je constate que... (données numériques avec unités) ; Or je sais que... (notion biologique/géologique du cours) ; Donc j\'en déduis que... ».',
    hint: 'Regarde comment les valeurs chiffrées de concentration (en %) sont mises en relation avec le processus d\'altération latéritique sous climat tropical.',
    prompt: 'Un document présente l\'analyse géochimique verticale du plateau de Bangombé (Moanda) : la teneur en manganèse (MnO₂) passe de 14 % dans le protore rocheux sain à 15 m de profondeur, à 53 % dans la couche latéritique enrichie située entre 4 et 8 m de profondeur. Quelle est la démarche d\'analyse et de mise en relation rigoureuse ?',
    options: [
      'Je constate que la teneur en MnO₂ augmente fortement, passant de 14 % dans la roche-mère profonde à 53 % entre 4 et 8 m. Or je sais que sous le climat tropical humide du Gabon, le lessivage intense par les eaux de pluie dissout et évacue les éléments solubles (silice, alcalins) tout en concentrant sur place les oxydes insolubles de manganèse. Donc j\'en déduis que le gisement de Moanda est un gisement de supergène formé par altération météorique résiduelle.',
      'La teneur monte à 53 % donc c\'est un volcan qui a craché du manganèse fondu sur le plateau de Moanda.',
      'Je vois que le manganèse est à 53 %. Donc le minerai est prêt à être exporté sans aucune usine de transformation.',
      'D\'après le document, il y a du manganèse partout au Gabon et cela prouve que les mineurs ont bien creusé.'
    ],
    correctAnswer: 'Je constate que la teneur en MnO₂ augmente fortement, passant de 14 % dans la roche-mère profonde à 53 % entre 4 et 8 m. Or je sais que sous le climat tropical humide du Gabon, le lessivage intense par les eaux de pluie dissout et évacue les éléments solubles (silice, alcalins) tout en concentrant sur place les oxydes insolubles de manganèse. Donc j\'en déduis que le gisement de Moanda est un gisement de supergène formé par altération météorique résiduelle.',
    commonMistake: 'Donner la réponse sans faire le lien logique obligatoire « Constat chiffré + Savoir du cours (altération latéritique) = Déduction géologique ».',
    explanation: 'Le raisonnement de Type 2 articule la donnée mesurée (passage de 14 % à 53 %) avec le concept géologique du cours (lessivage tropical et altération météorique différentielle) pour formuler la déduction explicative finale.',
    steps: [
      '1. Constat factuel : citer l\'évolution de la teneur de 14 % à 53 % à des profondeurs précises.',
      '2. Mobilisation du cours : rappeler le rôle des pluies tropicales et de l\'hydrolyse des silicates.',
      '3. Déduction scientifique : caractériser la genèse supergène du minerai de Bangombé.'
    ]
  },
  {
    id: 'q-2s-svt-min-methode-roc',
    exerciseId: 'ex-svt-min-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode SVT - ROC Type 1 (Développement & Exigence des Schémas Scientifiques)',
    microConcept: 'Dans le développement d\'un sujet de Type 1 (ROC), les schémas scientifiques ne sont pas de simples décorations : ils font partie intégrante de l\'évaluation et rapportent des points précieux. Tout schéma de SVT doit impérativement comporter : un dessin propre et grand, des traits de rappel horizontaux tracés à la règle, des légendes complètes et exactes, et un TITRE SOIGNÉ, EXPLICITE ET SOULIGNÉ.',
    hint: 'Quels sont les éléments obligatoires pour qu\'un schéma géologique ou biologique soit validé au barème officiel de SVT ?',
    prompt: 'Dans la notation officielle d\'un Sujet de Type 1 en SVT au Gabon, quels critères garantissent l\'obtention de la totalité des points attribués à un schéma scientifique intégré au développement ?',
    options: [
      'Un tracé soigné et grand, des traits de rappel horizontaux à la règle sans croisement, des légendes anatomiques/géologiques exhaustives et un titre complet souligné',
      'Un dessin rapide fait à main levée au stylo rouge sans aucun mot écrit autour',
      'Un coloriage artistique avec 12 feutres différents sans échelle ni orientation',
      'L\'insertion d\'une photo découpée dans un magazine collée sur la copie d\'examen'
    ],
    correctAnswer: 'Un tracé soigné et grand, des traits de rappel horizontaux à la règle sans croisement, des légendes anatomiques/géologiques exhaustives et un titre complet souligné',
    commonMistake: 'Oublier le titre souligné ou tracer des flèches penchées qui se croisent dans tous les sens sans règle, ce qui fait perdre la moitié des points dévolus au schéma.',
    explanation: 'La rigueur graphique en SVT fait partie des compétences disciplinaires majeures : respect des conventions graphiques (traits à la règle, pas de croisement, horizontalité des légendes, titre explicite et souligné).',
    steps: [
      '1. Gabarit : schéma d\'une taille suffisante (au moins un tiers ou une demi-page).',
      '2. Règle graphique : traits de rappel tirés à la règle terminés par une flèche précise.',
      '3. Légendes : nomenclature scientifique exacte en français.',
      '4. Titre obligatoire : situé sous ou au-dessus du schéma, complet et souligné.'
    ]
  }
];

// =========================================================================
// CHAPITRE 3 : GESTION DES RESSOURCES EN EAU DANS L'ENVIRONNEMENT
// =========================================================================
export const SECONDE_SVT_EAU_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-svt-eau-1',
    exerciseId: 'ex-svt-eau-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Nappe Phréatique vs Nappe Captive)',
    microConcept: 'Une nappe phréatique (ou nappe libre) est une réserve d\'eau souterraine contenue dans une roche perméable (sable, grès fissuré) dont la surface supérieure fluctue librement en fonction des pluies. À l\'inverse, une nappe captive est emprisonnée sous pression entre deux couches géologiques imperméables (ex: argiles).',
    hint: 'La nappe libre est directement alimentée par l\'eau de pluie qui s\'infiltre verticalement depuis la surface.',
    prompt: 'Quelle est la caractéristique essentielle d\'une nappe souterraine dite "phréatique" ou "libre" ?',
    options: [
      'Sa surface supérieure n\'est pas bloquée par une couche imperméable et son niveau monte ou descend selon les précipitations locales',
      'Elle est constituée exclusivement d\'eau salée non potable sous haute pression',
      'Elle se situe toujours à plus de 10 000 mètres de profondeur sous le manteau terrestre',
      'Son eau ne communique jamais avec les puits traditionnels de surface'
    ],
    correctAnswer: 'Sa surface supérieure n\'est pas bloquée par une couche imperméable et son niveau monte ou descend selon les précipitations locales',
    commonMistake: 'Confondre nappe phréatique (vulnérable aux pollutions directes de surface car non protégée par un toit imperméable) et nappe captive (mieux protégée mais plus difficile d\'accès).',
    explanation: 'La nappe phréatique est la première nappe rencontrée sous le sol. Ses eaux proviennent de l\'infiltration des pluies à travers les pores du sol, ce qui la rend directement dépendante de la pluviométrie et très vulnérable aux infiltrations polluantes.',
    steps: [
      '1. Précipitations sur le bassin versant.',
      '2. Infiltration de l\'eau à travers les horizons superficiels perméables.',
      '3. Accumulation au-dessus d\'un plancher imperméable.',
      '4. Surface de la nappe (toit) libre d\'osciller selon la saison des pluies ou la saison sèche.'
    ]
  },
  {
    id: 'q-2s-svt-eau-2',
    exerciseId: 'ex-svt-eau-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Filière de Traitement d\'Eau Potable)',
    microConcept: 'La potabilisation d\'une eau brute de surface (fleuve Ogooué, rivière Komo) suit une chaîne d\'étapes rigoureuses : 1. Dégrillage / Tamisage (arrêt des gros débris) ; 2. Coagulation-Floculation et Décantation (élimination des matières en suspension) ; 3. Filtration sur lit de sable (rétention des micro-particules) ; 4. Désinfection finale au chlore (destruction des bactéries et virus et maintien d\'un résiduel protecteur dans le réseau).',
    hint: 'À quelle étape détruit-on les micro-organismes pathogènes pour garantir que l\'eau n\'engendre pas de maladies hydriques ?',
    prompt: 'Dans une usine de traitement d\'eau potable (comme celle de Ntoum alimentant Libreville), quelle est l\'étape indispensable destinée à éliminer les micro-organismes pathogènes (bactéries, virus) ?',
    options: [
      'La désinfection chimique (chloration ou ozonation)',
      'Le simple dégrillage mécanique avec des grilles en acier',
      'Le stockage dans des bassins ouverts à l\'air libre',
      'L\'ajout de colorants alimentaires'
    ],
    correctAnswer: 'La désinfection chimique (chloration ou ozonation)',
    commonMistake: 'Penser que la filtration sur sable suffit à rendre l\'eau potable. Les filtres à sable arrêtent les sédiments et turbidités, mais laissent passer les bactéries microscopiques et les virus qui nécessitent un désinfectant bactéricide (chlore).',
    explanation: 'Le chlore est un biocide puissant qui perfore la paroi des bactéries et inactive les virus. Un dosage résiduel garantit que l\'eau reste désinfectée tout au long de son parcours dans les canalisations jusqu\'au robinet.',
    steps: [
      '1. Captage de l\'eau brute de surface.',
      '2. Décantation avec coagulant (flocs de boue qui tombent au fond).',
      '3. Filtration sur sable pour clarifier l\'eau.',
      '4. Désinfection au chlore pour exterminer les germes pathogènes.'
    ]
  },
  {
    id: 'q-2s-svt-eau-3',
    exerciseId: 'ex-svt-eau-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Forêt Équatoriale & Cycle Hydrologique)',
    microConcept: 'La grande forêt du bassin du Congo et du Gabon joue un rôle majeur de "pompe biotique" dans le cycle de l\'eau : par l\'évapotranspiration colossale de ses arbres, elle recycle jusqu\'à 75 % de l\'eau de pluie sous forme de vapeur dans l\'atmosphère, formant les nuages qui ré-arrosent le continent. Le déboisement massif réduirait les pluies intérieures et accentuerait les crues dévastatrices.',
    hint: 'Les arbres absorbent l\'eau du sol et en rejettent une immense partie par leurs feuilles. Comment s\'appelle ce processus biologique ?',
    prompt: 'Quel phénomène biologique assuré par la forêt équatoriale gabonaise alimente continuellement la formation des nuages de pluie à l\'intérieur des terres ?',
    options: [
      'L\'évapotranspiration foliaire des arbres rejetant de la vapeur d\'eau dans l\'atmosphère',
      'La combustion spontanée des feuilles mortes au sol',
      'La condensation de l\'eau sous forme de lave liquide',
      'La photosynthèse sous-marine des coraux'
    ],
    correctAnswer: 'L\'évapotranspiration foliaire des arbres rejetant de la vapeur d\'eau dans l\'atmosphère',
    commonMistake: 'Penser que toute la vapeur d\'eau provient uniquement de l\'évaporation de l\'océan Atlantique. Plus de la moitié des pluies continentales en zone tropicale dense provient du recyclage de l\'eau par la végétation forestière.',
    explanation: 'Les stomates des feuilles évaporent d\'immenses volumes d\'eau pompée dans le sol. Cette vapeur s\'élève, se refroidit en altitude et condense en nuages cumuliformes qui génèrent de nouvelles pluies locales ("fleuves volants").',
    steps: [
      '1. Absorption racinaire de l\'eau du sol par la forêt dense.',
      '2. Montée de la sève brute jusqu\'au feuillage de la canopée.',
      '3. Émission massive de vapeur d\'eau par transpiration stomatique.',
      '4. Condensation nuageuse et régulation du climat humide équatorial.'
    ]
  },
  {
    id: 'q-2s-svt-eau-4',
    exerciseId: 'ex-svt-eau-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Pollution des Cours d\'Eau par l\'Orpaillage)',
    microConcept: 'L\'orpaillage artisanal clandestin dans les cours d\'eau gabonais (ex: rivières de la Ngounié, de l\'Ogooué-Ivindo) utilise souvent du mercure métallique (Hg) pour amalgamer les paillettes d\'or. Le mercure déversé est transformé par les bactéries aquatiques en méthylmercure (CH₃-Hg⁺), une forme ultra-toxique qui s\'accumule et s\'amplifie tout au long de la chaîne trophique (bioamplification chez les poissons prédateurs).',
    hint: 'Ce métal liquide toxique se fixe dans les chairs des poissons et est consommé par les populations riveraines, endommageant gravement le système nerveux.',
    prompt: 'Pourquoi le rejet de mercure par l\'orpaillage illégal dans les cours d\'eau représente-t-il un danger sanitaire gravissime pour les populations consommatrices de poisson ?',
    options: [
      'Le mercure subit une bioamplification le long de la chaîne alimentaire et s\'accumule à fortes doses toxiques chez les poissons prédateurs',
      'Le mercure fait s\'évaporer instantanément l\'eau des fleuves',
      'Le mercure transforme l\'eau douce en eau gazeuse salée',
      'Le mercure empêche les algues de fixer l\'oxygène la nuit'
    ],
    correctAnswer: 'Le mercure subit une bioamplification le long de la chaîne alimentaire et s\'accumule à fortes doses toxiques chez les poissons prédateurs',
    commonMistake: 'Croire que la dilution dans un grand fleuve élimine le danger. Les métaux lourds ne se dégradent pas : les prédateurs de bout de chaîne (comme les gros poissons-chats ou mâchoirons) concentrent des doses des milliers de fois supérieures à l\'eau du fleuve.',
    explanation: 'Le méthylmercure est liposoluble et neurotoxique. Il franchit la barrière hémato-encéphalique et placentaire, provoquant chez l\'humain de graves troubles neurologiques, moteurs et des malformations congénitales chez le fœtus.',
    steps: [
      '1. Utilisation du mercure pour capter les micro-paillettes d\'or.',
      '2. Rejet des résidus de lavage mercuriels dans la rivière.',
      '3. Méthylation bactérienne en méthylmercure absorbé par les algues et larves.',
      '4. Bioaccumulation exponentielle chez les poissons carnassiers et intoxication humaine.'
    ]
  },
  {
    id: 'q-2s-svt-eau-5',
    exerciseId: 'ex-svt-eau-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Très difficile (Normes Microbiologiques de Potabilité de l\'Eau)',
    microConcept: 'Selon les normes sanitaires de l\'Organisation Mondiale de la Santé (OMS) et les réglementations nationales, une eau destinée à la consommation humaine doit afficher impérativement une absence totale d\'indicateurs de contamination fécale : 0 coliforme fécal (Escherichia coli) et 0 entérocoque dans 100 mL d\'échantillon analysé.',
    hint: 'Quelle est la teneur tolérée en bactéries de contamination fécale (E. coli) pour qu\'une eau soit qualifiée de biologiquement potable ?',
    prompt: 'Quelle est la norme microbiologique légale stricte pour la concentration en bactéries Escherichia coli (coliformes fécaux) dans 100 mL d\'eau potable du robinet ?',
    options: [
      '0 bactérie par 100 mL (absence totale d\'indicateur de contamination fécale)',
      'Jusqu\'à 50 bactéries par 100 mL',
      'Environ 1 000 bactéries par 100 mL',
      'La présence de bactéries fécales n\'a aucune influence sur la potabilité'
    ],
    correctAnswer: '0 bactérie par 100 mL (absence totale d\'indicateur de contamination fécale)',
    commonMistake: 'Penser qu\'un petit seuil (ex: 5 ou 10) est toléré. Pour les coliformes thermo-tolérants (E. coli) témoins directs de déjections humaines ou animales, la norme est strictement zéro par 100 mL.',
    explanation: 'La présence d\'une seule bactérie E. coli dans 100 mL témoigne d\'une rupture de barrière sanitaire et du risque imminent de présence d\'agents hautement pathogènes (Vibrio cholerae, Salmonella typhi, virus de l\'hépatite A).',
    steps: [
      '1. Prélèvement stérile d\'un volume de 100 mL d\'eau traitée.',
      '2. Filtration sur membrane millipore et incubation sur milieu sélectif chromogène.',
      '3. Dénombrement des colonies bactériennes caractéristiques.',
      '4. Décision sanitaire : conformité requise si et seulement si Nombre = 0 / 100 mL.'
    ]
  },
  {
    id: 'q-2s-svt-eau-methode-roc',
    exerciseId: 'ex-svt-eau-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode SVT - ROC Type 1 (Introduction & Définition Scientifique des Nappes)',
    microConcept: 'En SVT, une introduction de ROC de qualité supérieure commence par définir avec rigueur les objets géologiques étudiés : un aquifère (formation géologique poreuse et perméable contenant de l\'eau exploitable), une nappe phréatique (nappe libre peu profonde soumise aux pollutions directes de surface) et une nappe captive (emprisonnée sous un toit imperméable).',
    hint: 'La définition scientifique précise des termes de géologie dans l\'introduction évite les confusions entre le contenant rocheux et le contenu liquide.',
    prompt: 'Sur le sujet de ROC : « Vulnérabilité et protection des ressources en eau souterraine en milieu tropical », quelle définition scientifique des termes clés doit figurer dans l\'introduction ?',
    options: [
      'L\'eau souterraine est contenue dans un aquifère, roche perméable poreuse ou fissurée. On distingue la nappe libre ou phréatique, dont la surface piézométrique fluctue librement sans toit imperméable et directement exposée aux infiltrations de surface, de la nappe captive protégée sous un niveau imperméable.',
      'L\'eau souterraine est un grand lac sous la terre où nagent des poissons aveugles dans le noir total.',
      'Une nappe phréatique est un tuyau métallique en fonte enterré par la société d\'eau pour alimenter la ville.',
      'L\'eau souterraine n\'a pas besoin de définition car tout le monde sait ce que c\'est qu\'un verre d\'eau minérale.'
    ],
    correctAnswer: 'L\'eau souterraine est contenue dans un aquifère, roche perméable poreuse ou fissurée. On distingue la nappe libre ou phréatique, dont la surface piézométrique fluctue librement sans toit imperméable et directement exposée aux infiltrations de surface, de la nappe captive protégée sous un niveau imperméable.',
    commonMistake: 'Penser qu\'une nappe souterraine est une caverne ou un lac vide d\'eau (illusion de la rivière souterraine) au lieu d\'une roche imbibée d\'eau comme une éponge.',
    explanation: 'Dans l\'introduction de ROC, définir rigoureusement le terme « aquifère » et distinguer nappe libre et nappe captive permet d\'introduire logiquement la problématique de la vulnérabilité aux pollutions de surface.',
    steps: [
      '1. Définition de l\'aquifère : roche réservoir poreuse ou fissurée perméable.',
      '2. Distinction physique : nappe phréatique (libre, vulnérable) vs nappe captive (protégée sous toit imperméable).',
      '3. Articulation avec la problématique : exposition différentielle aux polluants anthropiques de surface.'
    ]
  },
  {
    id: 'q-2s-svt-eau-methode-doc',
    exerciseId: 'ex-svt-eau-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode SVT - Raisonnement sur Documents Type 2 (Analyse Chiffrée & Déduction Sanitaire)',
    microConcept: 'Dans le sujet de Type 2, l\'analyse d\'un tableau de potabilité exige de confronter rigoureusement chaque valeur mesurée à la norme de référence avec ses unités (mg/L, UFC/100 mL) pour chaque paramètre, avant de synthétiser la conformité sanitaire de l\'échantillon.',
    hint: 'Regarde le paramètre qui dépasse le seuil légal et observe la rigueur des unités citées.',
    prompt: 'Un tableau d\'analyses d\'un puits villageois indique : Nitrates (NO₃⁻) = 18 mg/L (norme < 50 mg/L), Plomb = 0,002 mg/L (norme < 0,01 mg/L), et Escherichia coli = 14 UFC / 100 mL (norme = 0 UFC / 100 mL). Quelle est l\'analyse méthodique attendue au Sujet de Type 2 ?',
    options: [
      'Je constate que les teneurs en nitrates (18 mg/L) et en plomb (0,002 mg/L) sont conformes aux normes légales (< 50 mg/L et < 0,01 mg/L). En revanche, le taux d\'Escherichia coli s\'élève à 14 UFC / 100 mL alors que la norme impose une absence totale (0 UFC / 100 mL). J\'en déduis que l\'eau présente une contamination fécale récente et est bactériologiquement impropre à la consommation humaine sans désinfection préalable.',
      'Cette eau est tout à fait potable car les nitrates et le plomb sont faibles et 14 bactéries ce n\'est presque rien.',
      'L\'eau est empoisonnée par le plomb car 0,002 est un chiffre positif.',
      'Le document prouve que le puits a été foré trop profondément dans la nappe captive.'
    ],
    correctAnswer: 'Je constate que les teneurs en nitrates (18 mg/L) et en plomb (0,002 mg/L) sont conformes aux normes légales (< 50 mg/L et < 0,01 mg/L). En revanche, le taux d\'Escherichia coli s\'élève à 14 UFC / 100 mL alors que la norme impose une absence totale (0 UFC / 100 mL). J\'en déduis que l\'eau présente une contamination fécale récente et est bactériologiquement impropre à la consommation humaine sans désinfection préalable.',
    commonMistake: 'Négliger la présence des 14 UFC/100 mL sous prétexte que les paramètres physico-chimiques sont normaux, ou ne pas citer les valeurs et normes avec leurs unités respectives.',
    explanation: 'La démarche de Type 2 dissèque chaque paramètre chiffré, compare à la norme avec les unités (mg/L et UFC/100 mL) et déduit le diagnostic microbiologique précis.',
    steps: [
      '1. Confrontation des données chimiques : nitrates et plomb dans les limites tolérées.',
      '2. Mise en évidence de l\'anomalie : 14 UFC / 100 mL d\'E. coli versus seuil impératif de 0.',
      '3. Déduction sanitaire rigoureuse : eau impropre à la consommation, risque épidémique fécale.'
    ]
  }
];

// =========================================================================
// CHAPITRE 4 : RELATIONS ET STYLES DE VIE (ESSR)
// =========================================================================
export const SECONDE_SVT_ESSR_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-svt-essr-1',
    exerciseId: 'ex-svt-essr-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Puberté & Caractères Sexuels Secondaires)',
    microConcept: 'À la puberté, le déclenchement de l\'axe hypothalamo-hypophysaire stimule les gonades (testicules chez le garçon, ovaires chez la fille). La sécrétion d\'hormones stéroïdes sexuelles (testostérone chez l\'homme, œstrogènes et progestérone chez la femme) déclenche l\'apparition des caractères sexuels secondaires (mue de la voix, pilosité, développement mammaire, élargissement du bassin).',
    hint: 'Qu\'appelle-t-on les caractères physiques morphologiques qui différencient les deux sexes sans être directement les organes génitaux eux-mêmes ?',
    prompt: 'Comment nomme-t-on les transformations morphologiques corporelles apparaissant à la puberté (pilosité, développement des seins, changement de voix) ?',
    options: [
      'Les caractères sexuels secondaires',
      'Les caractères sexuels primaires (déjà présents à la naissance)',
      'Les mutations chromosomiques somatiques',
      'Les anomalies congénitales héréditaires'
    ],
    correctAnswer: 'Les caractères sexuels secondaires',
    commonMistake: 'Confondre caractères sexuels primaires (organes génitaux externes et gonades formés in utero dès la vie embryonnaire) et caractères sexuels secondaires (modifications corporelles survenant à la puberté sous l\'effet des hormones).',
    explanation: 'Les caractères sexuels secondaires sont les signes physiques visibles de maturité sexuelle induits par l\'augmentation des concentrations sanguines de testostérone chez le garçon et d\'œstrogènes chez la fille.',
    steps: [
      '1. Réveil pubertaire : sécrétion pulsatile de GnRH par l\'hypothalamus.',
      '2. L\'hypophyse libère les gonadostimulines (FSH et LH).',
      '3. Les gonades sécrètent massivement les hormones sexuelles dans le sang.',
      '4. Apparition coordonnée des caractères sexuels secondaires corporels.'
    ]
  },
  {
    id: 'q-2s-svt-essr-2',
    exerciseId: 'ex-svt-essr-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Double Protection : Contraception & IST)',
    microConcept: 'Parmi toutes les méthodes contraceptives existantes, le préservatif (masculin ou féminin en polyuréthane ou latex) est le SEUL dispositif médical offrant une "double protection" simultanée : il empêche le passage des spermatozoïdes vers l\'ovule (évite les grossesses précoces) ET forme une barrière infranchissable contre les virus et bactéries responsables des IST (VIH, hépatite B, chlamydia, syphilis).',
    hint: 'La pilule hormonale protège-t-elle contre le VIH ? Non ! Quel est le seul moyen qui bloque les fluides infectieux ?',
    prompt: 'Quelle est la seule méthode contraceptive garantissant une "double protection" (à la fois contre les grossesses non planifiées ET contre le VIH/SIDA et les IST) ?',
    options: [
      'Le préservatif (masculin ou féminin)',
      'La pilule contraceptive orale aux œstroprogestatifs',
      'L\'implant sous-cutané hormonal',
      'Le stérilet au cuivre (dispositif intra-utérin)'
    ],
    correctAnswer: 'Le préservatif (masculin ou féminin)',
    commonMistake: 'Penser que les contraceptifs hormonaux (pilule, implant, injectable) protègent des IST. Ils bloquent uniquement l\'ovulation, mais ne préviennent absolument pas la transmission des virus ou bactéries sexuellement transmissibles.',
    explanation: 'Le préservatif constitue une barrière physique étanche empêchant le contact direct entre les muqueuses et les sécrétions génitales ou le sperme contenant des agents pathogènes infectieux.',
    steps: [
      '1. Les méthodes hormonales (pilule, implant) ne régulent que la gamétogenèse ou l\'endomètre.',
      '2. Les micro-organismes des IST traversent librement sans barrière physique.',
      '3. Le préservatif retient physiquement les spermatozoïdes et les micro-organismes infectieux.',
      '4. Il assure ainsi la double protection requise pour la santé reproductive.'
    ]
  },
  {
    id: 'q-2s-svt-essr-3',
    exerciseId: 'ex-svt-essr-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Modes de Transmission Réels du VIH/SIDA)',
    microConcept: 'Le VIH (Virus de l\'Immunodéficience Humaine) se transmet exclusivement par trois voies scientifiques validées : 1) Les rapports sexuels non protégés avec pénétration ; 2) La voie sanguine (partage de seringues souillées, matériel d\'injection, transfusion non testée) ; 3) La transmission de la mère à l\'enfant (grossesse, accouchement, allaitement). Le VIH NE PEUT PAS se transmettre par la salive, la sueur, les larmes, les piqûres de moustiques ou une poignée de main.',
    hint: 'Rappelle-toi des mythes fréquents : un moustique peut-il transmettre le virus du SIDA ?',
    prompt: 'Parmi les situations suivantes, laquelle constitue un mode avéré et effectif de transmission du VIH ?',
    options: [
      'Un rapport sexuel pénétrant sans préservatif avec une personne séropositive non sous traitement ARV efficace',
      'Une piqûre de moustique ayant préalablement piqué une personne séropositive',
      'Le partage d\'un verre d\'eau ou d\'une poignée de main avec un camarade',
      'L\'utilisation des mêmes sanitaires ou de la même piscine publique'
    ],
    correctAnswer: 'Un rapport sexuel pénétrant sans préservatif avec une personne séropositive non sous traitement ARV efficace',
    commonMistake: 'Croire aux rumeurs selon lesquelles les moustiques transmettent le VIH. Le virus ne survit pas dans le système digestif de l\'insecte et n\'est pas injecté avec la salive du moustique.',
    explanation: 'Le VIH requiert une concentration virale suffisante trouvée dans le sperme, les sécrétions vaginales, le lait maternel ou le sang. La salive, les larmes, les contacts quotidiens et les insectes sont totalement inoffensifs.',
    steps: [
      '1. Voies réelles : sexuelle (non protégée), sanguine (aiguille/contact sanglant), materno-fœtale.',
      '2. Réfutation des fausses croyances : aucun risque par contact cutané sain, salive ou partage de repas.',
      '3. Prévention clé : préservatif systématique, dépistage régulier et accès universel aux antirétroviraux (ARV).'
    ]
  },
  {
    id: 'q-2s-svt-essr-4',
    exerciseId: 'ex-svt-essr-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Mécanisme de la Contraception d\'Urgence)',
    microConcept: 'La contraception d\'urgence hormonale (souvent appelée "pilule du lendemain", ex: lévonorgestrel ou acétate d\'ulipristal) agit en bloquant ou en retardant l\'ovulation si celle-ci n\'a pas encore eu lieu, empêchant ainsi la rencontre entre spermatozoïdes et ovocyte. Elle n\'est en aucun cas abortive : si l\'implantation de l\'embryon (nidation) est déjà survenue, la molécule est sans effet sur la grossesse en cours.',
    hint: 'Attention au vocabulaire médical : la pilule du lendemain interrompt-elle une grossesse déjà commencée ou empêche-t-elle l\'ovulation ?',
    prompt: 'Quel est le mode d\'action biologique exact de la pilule contraceptive d\'urgence (prise dans les 72h après un rapport à risque) ?',
    options: [
      'Elle retarde ou bloque l\'ovulation pour empêcher la fécondation ; elle n\'est pas abortive',
      'Elle détruit chirurgicalement un embryon déjà nidifié dans la muqueuse utérine',
      'Elle immunise définitivement la femme contre toute grossesse future',
      'Elle détruit les spermatozoïdes par réaction acide immédiate dans l\'estomac'
    ],
    correctAnswer: 'Elle retarde ou bloque l\'ovulation pour empêcher la fécondation ; elle n\'est pas abortive',
    commonMistake: 'Confondre contraception d\'urgence (qui prévient la fécondation en retardant l\'expulsion de l\'ovocyte) et interruption volontaire de grossesse (IVG médicamenteuse avec mifépristone).',
    explanation: 'La contraception d\'urgence administre un pic de progestatif de synthèse qui stoppe net la décharge ovulante de LH par l\'hypophyse. Les spermatozoïdes en attente finissent par mourir avant que l\'ovocyte ne soit libéré.',
    steps: [
      '1. Rapport sexuel non protégé avec dépôt de spermatozoïdes (durée de vie 3 à 5 jours dans les voies génitales féminines).',
      '2. Prise rapide de la contraception d\'urgence.',
      '3. Suppression ou report du pic de LH : l\'ovocyte n\'est pas expulsé de l\'ovaire.',
      '4. Pas d\'ovocyte disponible => fécondation impossible.'
    ]
  },
  {
    id: 'q-2s-svt-essr-5',
    exerciseId: 'ex-svt-essr-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Très difficile (Protocole TPE & Dépistage Sérologique)',
    microConcept: 'En cas d\'accident d\'exposition sexuelle à risque élevé de transmission du VIH (rupture de préservatif, viol), une prise en charge médicale d\'urgence permet d\'initier un Traitement Post-Exposition (TPE) par antirétroviraux. Pour être optimal, le TPE doit être débuté le plus tôt possible, idéalement dans les 4 heures et au plus tard dans les 48 heures suivant le contact à risque, pendant une durée de 28 jours.',
    hint: 'Le virus met quelques heures à quelques jours pour intégrer les cellules immunitaires cibles. Quel est le délai limite absolu pour démarrer le TPE ?',
    prompt: 'Quel est le délai médical maximal recommandé pour initier un Traitement Post-Exposition (TPE) antirétroviral après un rapport sexuel à haut risque de transmission du VIH ?',
    options: [
      'Dans les 48 heures maximum (idéalement dans les 4 premières heures)',
      'Dans les 30 jours suivant le rapport',
      'Au bout de 6 mois après apparition des premiers symptômes',
      'Il n\'y a aucune urgence, le traitement s\'initie à n\'importe quel moment'
    ],
    correctAnswer: 'Dans les 48 heures maximum (idéalement dans les 4 premières heures)',
    commonMistake: 'Attendre les résultats d\'un test sérologique ou attendre des semaines. Après 48 à 72 heures, le virus s\'est disséminé dans les ganglions lymphatiques et le traitement post-exposition perd son efficacité préventive.',
    explanation: 'Le TPE bloque la réplication du VIH au site d\'entrée avant que le virus ne crée des réservoirs cellulaires irréversibles dans l\'organisme. Au-delà de 48 heures, le traitement ne peut plus empêcher l\'infection.',
    steps: [
      '1. Événement à risque (accident, agression ou rupture de barrière).',
      '2. Consultation immédiate dans un centre médical hospitalier ou CTA.',
      '3. Évaluation du risque infectieux et prescription immédiate d\'une trithérapie d\'urgence sous 48h.',
      '4. Observance stricte du traitement pendant 28 jours consécutifs avec bilans de suivi sérologique.'
    ]
  },
  {
    id: 'q-2s-svt-essr-methode-doc',
    exerciseId: 'ex-svt-essr-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode SVT - Raisonnement sur Documents Type 2 (Croisement de Données & Déduction)',
    microConcept: 'Dans le sujet de Type 2 en biologie médicale, la mise en relation exige de relier deux courbes ou variables complémentaires en citant leurs valeurs numériques et leurs unités (ex: copies/mL et cellules/mm³), puis d\'expliquer la causalité à l\'aide des connaissances du cours avant de conclure sur le problème clinique.',
    hint: 'Regarde comment la baisse des défenses immunitaires (LT4 en cellules/mm³) est directement reliée à l\'explosion de la charge virale (en copies/mL).',
    prompt: 'Un graphique médical suit un patient séropositif non traité sur 8 ans : au cours de la phase asymptomatique (années 1 à 6), le taux de lymphocytes T4 baisse progressivement de 900 à 450 cellules/mm³ de sang tandis que la charge virale VIH reste stable à 10 000 copies/mL. À partir de la 7e année, les T4 s\'effondrent sous 200 cellules/mm³ alors que la charge virale explose à 500 000 copies/mL avec apparition de tuberculose et de candidoses buccales. Quelle est la démarche d\'analyse et de mise en relation conforme au Sujet de Type 2 ?',
    options: [
      'Je constate qu\'entre l\'année 1 et l\'année 6, les T4 passent de 900 à 450 cellules/mm³ avec une virémie stable à 10 000 copies/mL. En année 7, le taux de T4 chute sous le seuil critique de 200 cellules/mm³ pendant que la virémie s\'envole à 500 000 copies/mL. Or je sais que les LT4 sont les chefs d\'orchestre de l\'immunité adaptative et les cibles du VIH. J\'en déduis que la destruction massive des T4 par le virus prive l\'organisme de toute défense immunitaire, marquant le passage irréversible au stade SIDA déclaré caractérisé par des maladies opportunistes mortelles.',
      'Le patient est guéri à l\'année 6 car la charge virale était stable à 10 000 copies/mL.',
      'Le document montre que les antibiotiques ne fonctionnent pas sur les virus et qu\'il fallait lui donner des vitamines.',
      'Comme la tuberculose apparaît, cela prouve que le VIH est une bactérie transmise par l\'air.'
    ],
    correctAnswer: 'Je constate qu\'entre l\'année 1 et l\'année 6, les T4 passent de 900 à 450 cellules/mm³ avec une virémie stable à 10 000 copies/mL. En année 7, le taux de T4 chute sous le seuil critique de 200 cellules/mm³ pendant que la virémie s\'envole à 500 000 copies/mL. Or je sais que les LT4 sont les chefs d\'orchestre de l\'immunité adaptative et les cibles du VIH. J\'en déduis que la destruction massive des T4 par le virus prive l\'organisme de toute défense immunitaire, marquant le passage irréversible au stade SIDA déclaré caractérisé par des maladies opportunistes mortelles.',
    commonMistake: 'Dire que « les courbes augmentent ou diminuent » sans jamais citer les valeurs chiffrées avec unités (900, 450, 200 cellules/mm³ et 10 000, 500 000 copies/mL), et omettre d\'expliciter le rôle immunologique fondamental des LT4.',
    explanation: 'Le raisonnement méthodique associe les valeurs numériques précises et unités, mobilise les connaissances sur le rôle pivot des LT4 et en déduit le mécanisme pathologique de l\'effondrement immunitaire.',
    steps: [
      '1. Lecture chronologique et chiffrée : phase de latence clinique (années 1-6) puis rupture de l\'équilibre (année 7+).',
      '2. Mobilisation du cours : rappeler le tropisme du VIH pour le récepteur CD4 des lymphocytes auxiliaires.',
      '3. Déduction clinique : caractérisation du stade SIDA déclaré et des infections opportunistes associées.'
    ]
  },
  {
    id: 'q-2s-svt-essr-methode-roc',
    exerciseId: 'ex-svt-essr-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode SVT - ROC Type 1 (Structure de la Conclusion : Bilan & Ouverture)',
    microConcept: 'La CONCLUSION d\'une Restitution Organisée de Connaissances (Type 1) en SVT doit impérativement comporter deux volets : 1) Le Bilan (résumé synthétique qui apporte la réponse directe à la problématique posée en introduction sans ajouter de faits nouveaux), 2) Une Ouverture pertinente (projection vers un autre problème biologique, génétique ou médical relié au programme).',
    hint: 'La conclusion ne doit jamais répéter tout le devoir : elle boucle la problématique et ouvre un horizon scientifique plus vaste.',
    prompt: 'Sur le sujet de ROC : « Les mécanismes de la transmission du VIH et les moyens actuels de prévention et de protection », quelle proposition constitue une CONCLUSION exemplaire selon les normes de correction de SVT ?',
    options: [
      'En définitive, le VIH se transmet par voie sexuelle, sanguine et materno-fœtale en infectant les cellules immunitaires CD4. Si l\'utilisation correcte du préservatif et les antirétroviraux (PrEP, TPE sous 48h) constituent aujourd\'hui des remparts préventifs éprouvés, la forte variabilité génétique du virus reste un obstacle majeur. Dès lors, quelles nouvelles pistes d\'immunothérapie ou de vaccins à ARN messager permettraient-elles d\'éradiquer définitivement les réservoirs viraux latents de l\'organisme ?',
      'En conclusion, le VIH est une maladie terrible. Il faut toujours faire attention et dire à tout le monde de ne pas faire d\'imprudence.',
      'Pour finir, je vais vous décrire comment fonctionne l\'appareil génital de l\'homme et de la femme avec tous les détails.',
      'Comme nous l\'avons vu, le préservatif en latex coûte environ 100 francs CFA dans les pharmacies de Libreville.'
    ],
    correctAnswer: 'En définitive, le VIH se transmet par voie sexuelle, sanguine et materno-fœtale en infectant les cellules immunitaires CD4. Si l\'utilisation correcte du préservatif et les antirétroviraux (PrEP, TPE sous 48h) constituent aujourd\'hui des remparts préventifs éprouvés, la forte variabilité génétique du virus reste un obstacle majeur. Dès lors, quelles nouvelles pistes d\'immunothérapie ou de vaccins à ARN messager permettraient-elles d\'éradiquer définitivement les réservoirs viraux latents de l\'organisme ?',
    commonMistake: 'Faire une conclusion de type « leçon de morale » ou introduire une longue description anatomique nouvelle au lieu de dresser un bilan synthétique et d\'ouvrir sur la recherche vaccinale.',
    explanation: 'Cette conclusion clôture la problématique (bilan synthétique des voies et moyens de prévention) puis réalise une ouverture biologique prospective de haut niveau (vaccins à ARN messager et élimination des réservoirs viraux).',
    steps: [
      '1. Saut d\'une ligne obligatoire pour séparer la conclusion du développement.',
      '2. Bilan synthétique : réponse condensée et percutante à la question posée en introduction.',
      '3. Ouverture scientifique : interrogation formulée vers un horizon biomédical ou biologique d\'actualité.'
    ]
  }
];

// =========================================================================
// CHAPITRE 5 : LA COMMUNICATION NERVEUSE
// =========================================================================
export const SECONDE_SVT_COMM_NERVEUSE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-svt-nerf-1',
    exerciseId: 'ex-svt-nerf-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Structure & Sens de Propagation du Neurone)',
    microConcept: 'Le neurone est l\'unité cellulaire fonctionnelle du système nerveux. Il comprend des dendrites réceptrices, un corps cellulaire (ou soma) contenant le noyau, et un axone prolongateur conducteur entouré d\'une gaine de myéline. Le message nerveux se propage de manière unidirectionnelle (polarisée) : des dendrites vers le corps cellulaire, puis le long de l\'axone jusqu\'aux boutons synaptiques terminaux.',
    hint: 'Quel est le sens obligatoire de parcours de l\'influx nerveux au sein d\'un neurone ?',
    prompt: 'Quel est le sens physiologique normal de propagation du message nerveux au sein d\'une cellule neuronale ?',
    options: [
      'Dendrites → Corps cellulaire → Axone → Terminaisons synaptiques',
      'Boutons synaptiques → Axone → Corps cellulaire → Dendrites',
      'Axone → Dendrites → Corps cellulaire sans direction fixe',
      'Le message se propage toujours de manière aléatoire dans les deux sens à la fois'
    ],
    correctAnswer: 'Dendrites → Corps cellulaire → Axone → Terminaisons synaptiques',
    commonMistake: 'Penser que l\'influx peut faire demi-tour dans un axone. En physiologie normale, la période réfractaire des canaux sodiques empêche tout retour en arrière du potentiel d\'action.',
    explanation: 'Les dendrites et le soma intègrent les signaux synaptiques entrants. Le cône d\'émergence génère le potentiel d\'action qui se propage le long de l\'axone jusqu\'aux terminaisons présynaptiques.',
    steps: [
      '1. Réception des signaux chimiques au niveau des épines dendritiques.',
      '2. Sommation des potentiels gradués dans le péricaryon (corps cellulaire).',
      '3. Déclenchement du potentiel d\'action au cône d\'implantation de l\'axone.',
      '4. Conduction saltatoire ou continue vers la synapse terminale.'
    ]
  },
  {
    id: 'q-2s-svt-nerf-2',
    exerciseId: 'ex-svt-nerf-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Loi du Tout ou Rien du Potentiel d\'Action)',
    microConcept: 'Le potentiel d\'action (PA) est l\'onde électrique élémentaire qui véhicule l\'information nerveuse. Il obéit à la loi du "tout ou rien" : si la dépolarisation membranaire n\'atteint pas le seuil d\'excitation (environ -50 mV), aucun PA n\'apparaît. Dès que le seuil est franchi, un PA d\'amplitude constante et maximale (~100 mV, de -70 mV à +30 mV) est déclenché, quelle que soit la force du stimulus.',
    hint: 'Si on stimule un axone avec une intensité deux fois plus forte que le seuil, l\'amplitude du potentiel d\'action devient-elle deux fois plus grande ou reste-t-elle identique ?',
    prompt: 'Que stipule la "loi du tout ou rien" régissant le potentiel d\'action d\'une fibre nerveuse isolée ?',
    options: [
      'Le potentiel d\'action ne se déclenche que si le seuil de dépolarisation est franchi, et son amplitude reste toujours identique et maximale',
      'L\'amplitude du potentiel d\'action double à chaque fois qu\'on double l\'intensité de stimulation',
      'La fibre nerveuse répond uniquement pendant la nuit et s\'arrête le jour',
      'Le signal s\'éteint progressivement le long de l\'axone pour disparaître au bout de 2 cm'
    ],
    correctAnswer: 'Le potentiel d\'action ne se déclenche que si le seuil de dépolarisation est franchi, et son amplitude reste toujours identique et maximale',
    commonMistake: 'Confondre le codage sur un axone isolé (codé en fréquence de potentiels d\'action de même amplitude) avec la réponse d\'un nerf entier composé de milliers de fibres (potentiel global de nerf qui augmente par recrutement de fibres).',
    explanation: 'Une intensité accrue de stimulation ne modifie jamais la taille du potentiel d\'action : elle augmente uniquement sa FREQUENCE d\'émission (nombre de PA par seconde).',
    steps: [
      '1. Potentiel de repos membranaire stable à -70 mV (pompe Na+/K+).',
      '2. Dépolarisation atteignant le seuil critique d\'excitation (-50 mV).',
      '3. Ouverture massive et rapide des canaux sodiques voltage-dépendants : pic de dépolarisation à +30 mV.',
      '4. Repolarisation par les canaux potassiques et retour au repos : amplitude toujours constante.'
    ]
  },
  {
    id: 'q-2s-svt-nerf-3',
    exerciseId: 'ex-svt-nerf-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Fonctionnement de la Synapse Chimique)',
    microConcept: 'La synapse est la zone de jonction entre deux neurones (ou un neurone et une cellule musculaire). Le passage du signal est assuré par un intermédiaire chimique : 1. L\'arrivée du potentiel d\'action ouvre des canaux Ca²⁺ voltage-dépendants ; 2. L\'entrée de calcium provoque l\'exocytose de vésicules de neurotransmetteurs (ex: acétylcholine) dans la fente synaptique ; 3. Les molécules se fixent sur des récepteurs spécifiques de la membrane postsynaptique.',
    hint: 'L\'électricité peut-elle franchir l\'espace microscopique (fente synaptique) entre deux neurones sans molécule chimique ?',
    prompt: 'Quelle molécule assure la transmission du message nerveux d\'un neurone à un autre à travers la fente d\'une synapse chimique ?',
    options: [
      'Un neurotransmetteur (comme l\'acétylcholine ou la dopamine) libéré par exocytose',
      'Une molécule d\'acide sulfurique concentré',
      'Un globule rouge transportant de l\'oxygène',
      'Une enzyme digestive gastrique'
    ],
    correctAnswer: 'Un neurotransmetteur (comme l\'acétylcholine ou la dopamine) libéré par exocytose',
    commonMistake: 'Penser que l\'influx électrique "saute" directement la fente synaptique comme une étincelle. Le signal électrique est converti en signal chimique (quantité de neurotransmetteur libéré), puis reconverti en signal électrique sur le neurone suivant.',
    explanation: 'La fente synaptique mesure 20 à 50 nanomètres. L\'arrivée des PA présynaptiques déclenche la libération de neurotransmetteurs par exocytose vésiculaire, qui se lient aux récepteurs-canaux postsynaptiques.',
    steps: [
      '1. Arrivée du train de PA au bouton présynaptique.',
      '2. Entrée d\'ions calcium Ca²⁺ provoquant la fusion des vésicules synaptiques avec la membrane.',
      '3. Diffusion du neurotransmetteur dans la fente synaptique.',
      '4. Fixation sur les récepteurs postsynaptiques et ouverture de canaux ioniques postsynaptiques.'
    ]
  },
  {
    id: 'q-2s-svt-nerf-4',
    exerciseId: 'ex-svt-nerf-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (L\'Arc Réflexe Myotatique & Centres Médullaires)',
    microConcept: 'Un réflexe myotatique (ex: réflexe rotulien au genou) est une contraction involontaire d\'un muscle en réponse à son propre étirement. L\'arc réflexe comprend 5 éléments anatomiques ordonnés : 1. Récepteur sensoriel (fuseau neuromusculaire) ; 2. Voie afférente sensitive (fibre Ia dans la racine dorsale) ; 3. Centre nerveux intégrateur (moelle épinière, réflexe monosynaptique) ; 4. Voie efférente motrice (motoneurone α dans la racine ventrale) ; 5. Organe effecteur (le muscle étiré qui se contracte).',
    hint: 'Où se situe le centre nerveux responsable de la réponse involontaire réflexe du genou : dans le cerveau ou dans la moelle épinière ?',
    prompt: 'Quel est le centre nerveux réflexe directement responsable de la boucle du réflexe myotatique rotulien (coup sous la rotule entraînant l\'extension de la jambe) ?',
    options: [
      'La moelle épinière (centre nerveux médullaire sans intervention nécessaire du cerveau)',
      'Le cortex cérébral conscient de l\'encéphale',
      'Le cœur par variation du débit sanguin artériel',
      'L\'estomac par réflexe péristaltique autonome'
    ],
    correctAnswer: 'La moelle épinière (centre nerveux médullaire sans intervention nécessaire du cerveau)',
    commonMistake: 'Penser que le cerveau commande ce mouvement. Le réflexe est automatique, stéréotypé et extrêmement rapide (quelques dizaines de millisecondes) précisément parce que le circuit est bouclé dans la moelle épinière avant même que le cerveau ne perçoive la sensation.',
    explanation: 'Le réflexe myotatique est monosynaptique : le neurone sensitif s\'articule directement avec le motoneurone dans la substance grise de la moelle épinière.',
    steps: [
      '1. Le choc sur le tendon rotulien étire le muscle quadriceps.',
      '2. Le fuseau neuromusculaire émet des potentiels d\'action sur la fibre sensitive.',
      '3. La fibre pénètre par la racine postérieure de la moelle et fait synapse avec le motoneurone.',
      '4. Le motoneurone envoie l\'ordre moteur par la racine antérieure pour contracter le quadriceps.'
    ]
  },
  {
    id: 'q-2s-svt-nerf-5',
    exerciseId: 'ex-svt-nerf-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Très difficile (Neurotoxines & Blocage Synaptique : Cas du Curare)',
    microConcept: 'De nombreuses substances toxiques ciblent les récepteurs synaptiques. Le curare (poison végétal de chasse) est un antagoniste compétitif des récepteurs nicotiniques de l\'acétylcholine à la jonction neuromusculaire : il se fixe sur les récepteurs sans ouvrir le canal sodique, empêchant ainsi l\'acétylcholine de se lier. Résultat : aucun potentiel d\'action musculaire n\'est généré, entraînant une paralysie flasque mortelle par asphyxie (blocage du diaphragme).',
    hint: 'Si une molécule prend la place du neurotransmetteur sur son récepteur sans activer la cellule musculaire, que se passe-t-il pour la contraction ?',
    prompt: 'Quel est le mode d\'action neurophysiologique du curare entraînant une paralysie musculaire totale chez un animal ?',
    options: [
      'Il bloque compétitivement les récepteurs à acétylcholine de la membrane musculaire sans les activer, empêchant toute contraction',
      'Il fait exploser les axones sensitifs par surtension électrique',
      'Il accélère la vitesse de conduction nerveuse au-delà de la vitesse de la lumière',
      'Il transforme l\'acétylcholine en acide lactique dans les vaisseaux sanguins'
    ],
    correctAnswer: 'Il bloque compétitivement les récepteurs à acétylcholine de la membrane musculaire sans les activer, empêchant toute contraction',
    commonMistake: 'Penser que le curare détruit les nerfs. Les nerfs continuent d\'émettre parfaitement leurs potentiels d\'action, mais l\'ordre ne peut plus être transmis au muscle car les "serrures" (récepteurs) sont occupées par le poison.',
    explanation: 'L\'action du curare démontre la nature chimique de la transmission synaptique : la fixation du curare inhibe le potentiel de plaque motrice et paralyse les muscles striés squelettiques.',
    steps: [
      '1. Le motoneurone libère normalement l\'acétylcholine dans la fente synaptique.',
      '2. Les molécules de curare occupent les sites de liaison des récepteurs postsynaptiques.',
      '3. Les canaux Na+ restent fermés : absence de dépolarisation musculaire.',
      '4. Paralysie flasque complète des muscles respiratoires et locomoteurs.'
    ]
  },
  {
    id: 'q-2s-svt-nerf-methode-roc',
    exerciseId: 'ex-svt-nerf-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode SVT - ROC Type 1 (Schéma Fonctionnel de la Synapse : Titre & Légendes)',
    microConcept: 'Dans une ROC de neurophysiologie (Type 1), le schéma fonctionnel d\'une synapse chimique est incontournable. Pour être noté au maximum, il doit comprendre une orientation fonctionnelle (flèche du sens de l\'influx), les légendes complètes (élément présynaptique, vésicules de neurotransmetteurs, fente synaptique, récepteurs postsynaptiques) et un titre explicite et souligné précisant la nature de la synapse.',
    hint: 'Regarde le titre et les légendes indispensables pour valider un schéma de synapse selon le barème officiel.',
    prompt: 'Dans un sujet de ROC intitulé « La transmission unidirectionnelle du message nerveux au niveau d\'une synapse neuro-neuronique », quel titre et ensemble de légendes répondent parfaitement aux critères officiels d\'évaluation ?',
    options: [
      'Titre : Schéma fonctionnel des étapes de la transmission chimique au niveau d\'une synapse neuro-neuronique (souligné). Légendes : bouton présynaptique, vésicules synaptiques contenant le neurotransmetteur, fente synaptique (20 à 30 nm), récepteurs postsynaptiques spécifiques, canaux ioniques chimiodépendants, flèche du sens de propagation.',
      'Titre : Dessin de deux nerfs qui se touchent. Légendes : rond n°1, rond n°2, petit trou au milieu et flèche rouge.',
      'Titre : Le cerveau humain. Légendes : neurone du haut, neurone du bas, électricité.',
      'Titre : Schéma sans titre. Légendes : axone gauche et axone droit.'
    ],
    correctAnswer: 'Titre : Schéma fonctionnel des étapes de la transmission chimique au niveau d\'une synapse neuro-neuronique (souligné). Légendes : bouton présynaptique, vésicules synaptiques contenant le neurotransmetteur, fente synaptique (20 à 30 nm), récepteurs postsynaptiques spécifiques, canaux ioniques chimiodépendants, flèche du sens de propagation.',
    commonMistake: 'Donner un titre vague (« la synapse » sans préciser « schéma fonctionnel des étapes de transmission » ni le souligner) ou omettre l\'élément postsynaptique.',
    explanation: 'Le schéma fonctionnel en SVT doit être explicatif et dynamique : il montre le mécanisme d\'exocytose, le passage dans la fente synaptique et la fixation réceptrice avec un titre complet, précis et souligné.',
    steps: [
      '1. Titre informatif complet mentionnant le phénomène biologique et souligné à la règle.',
      '2. Flèche d\'orientation indiquant la polarité unidirectionnelle de la transmission.',
      '3. Nomenclature anatomique et moléculaire exhaustive des compartiments pré et post-synaptiques.'
    ]
  },
  {
    id: 'q-2s-svt-nerf-methode-doc',
    exerciseId: 'ex-svt-nerf-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode SVT - Raisonnement sur Documents Type 2 (Analyse d\'Oscillogramme & Loi du Tout ou Rien)',
    microConcept: 'Dans le sujet de Type 2, l\'analyse d\'enregistrements électrophysiologiques (oscilloscope) exige de citer les valeurs de potentiel de repos (en mV), le seuil de dépolarisation (en mV) et l\'amplitude du potentiel d\'action (en mV) ainsi que sa durée (en ms), pour déduire la « loi du tout ou rien » sur une fibre nerveuse isolée.',
    hint: 'Cherche l\'analyse qui quantifie précisément la dépolarisation (-70 mV à +30 mV, soit 100 mV d\'amplitude) et en déduit la loi biophysique régissant l\'axone.',
    prompt: 'Un document expérimental présente les enregistrements d\'un axone géant stimulé par des intensités croissantes I1 (10 mV), I2 (25 mV), I3 (50 mV) et I4 (80 mV) : à I1, la membrane passe de -70 mV à -60 mV sans potentiel d\'action ; à I2, le potentiel atteint le seuil critique de -50 mV et déclenche un potentiel d\'action d\'amplitude +30 mV durant 1 ms ; à I3 et I4, l\'amplitude reste strictement identique à +30 mV (100 mV d\'amplitude totale). Quelle est l\'analyse méthodique de Type 2 ?',
    options: [
      'Je constate qu\'à I1 (10 mV), la stimulation infraliminaire ne provoque qu\'une dépolarisation locale jusqu\'à -60 mV. Dès que le seuil de -50 mV est atteint à I2 (25 mV), un potentiel d\'action est émis avec une amplitude constante de 100 mV (pic à +30 mV) durant 1 ms, qui ne varie pas malgré la hausse d\'intensité à I3 et I4. J\'en déduis que la fibre nerveuse isolée obéit rigoureusement à la loi du tout ou rien : en dessous du seuil aucun PA ne naît, et au-delà du seuil le PA est immédiatement d\'amplitude maximale constante.',
      'Plus on envoie d\'électricité, plus l\'axone devient fort et rapide.',
      'À I1 il n\'y a rien, mais à I4 l\'électricité est tellement puissante que l\'axone grille.',
      'Le document prouve que la vitesse de l\'influx est proportionnelle au voltage de l\'appareil de mesure.'
    ],
    correctAnswer: 'Je constate qu\'à I1 (10 mV), la stimulation infraliminaire ne provoque qu\'une dépolarisation locale jusqu\'à -60 mV. Dès que le seuil de -50 mV est atteint à I2 (25 mV), un potentiel d\'action est émis avec une amplitude constante de 100 mV (pic à +30 mV) durant 1 ms, qui ne varie pas malgré la hausse d\'intensité à I3 et I4. J\'en déduis que la fibre nerveuse isolée obéit rigoureusement à la loi du tout ou rien : en dessous du seuil aucun PA ne naît, et au-delà du seuil le PA est immédiatement d\'amplitude maximale constante.',
    commonMistake: 'Confondre le comportement d\'une fibre isolée (loi du tout ou rien) avec celui d\'un nerf entier composé de milliers de fibres (phénomène de recrutement progressif), ou omettre les unités mV et ms.',
    explanation: 'L\'analyse de Type 2 relève minutieusement les valeurs seuils (-50 mV), les amplitudes (+30 mV soit dépolarisation de 100 mV) et déduit la loi biophysique fondamentale du neurone.',
    steps: [
      '1. Relevé des valeurs : -70 mV (potentiel de repos), -50 mV (seuil de déclenchement), +30 mV (sommet du PA).',
      '2. Constat de constance : invariant de hauteur et de durée (1 ms) à I2, I3 et I4.',
      '3. Déduction scientifique : formulation rigoureuse de la loi du « tout ou rien » pour une fibre isolée.'
    ]
  }
];

// =========================================================================
// CHAPITRE 6 : LA COMMUNICATION HORMONALE
// =========================================================================
export const SECONDE_SVT_COMM_HORMONALE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-svt-horm-1',
    exerciseId: 'ex-svt-horm-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Définition d\'une Hormone & Voie Sanguine)',
    microConcept: 'Une hormone est une substance chimique informative synthétisée par une glande endocrine (glande sans canal excréteur, ex: pancréas, thyroïde, surrénales, gonades), libérée directement dans le sang, et transportée par la circulation générale pour agir à très faible concentration sur des cellules cibles possédant des récepteurs spécifiques.',
    hint: 'Par quel fluide corporel une hormone voyage-t-elle de son lieu de fabrication jusqu\'à ses organes cibles ?',
    prompt: 'Par quelle voie de communication les hormones sécrétées par les glandes endocrines se déplacent-elles dans l\'organisme ?',
    options: [
      'Par le flux sanguin de l\'appareil circulatoire',
      'Par l\'intérieur des axones des fibres nerveuses',
      'Par les canaux salivaires et digestifs',
      'Par les poils et la couche superficielle de la peau'
    ],
    correctAnswer: 'Par le flux sanguin de l\'appareil circulatoire',
    commonMistake: 'Confondre glande exocrine (qui déverse son produit dans une cavité ou à l\'extérieur par un canal, comme les glandes salivaires ou sudoripares) et glande endocrine (qui déverse exclusivement ses hormones dans le sang).',
    explanation: 'L\'hormone est un messager véhiculé par le sang. Même si elle baigne toutes les cellules de l\'organisme, seules les cellules dotées du récepteur membranaire ou intracellulaire complémentaire réagissent à son message.',
    steps: [
      '1. Détection d\'un paramètre biologique par les cellules glandulaires endocrines.',
      '2. Sécrétion de l\'hormone dans les capillaires sanguins.',
      '3. Transport par le système cardiovasculaire dans tout le corps.',
      '4. Reconnaissance stéréospécifique par les récepteurs des cellules cibles.'
    ]
  },
  {
    id: 'q-2s-svt-horm-2',
    exerciseId: 'ex-svt-horm-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Régulation de la Glycémie par l\'Insuline)',
    microConcept: 'La glycémie normale à jeun chez l\'humain est régulée autour de 1,0 g/L (5,5 mmol/L). Après un repas riche en glucides, l\'élévation de la glycémie stimule les cellules β (bêta) des îlots de Langerhans du pancréas qui libèrent de l\'insuline. L\'insuline est la seule hormone hypoglycémiante de l\'organisme : elle favorise l\'entrée et le stockage du glucose sous forme de glycogène dans le foie et les muscles (glycogénogenèse).',
    hint: 'Quelle hormone abaisse le taux de sucre dans le sang pour éviter l\'hyperglycémie après un repas ?',
    prompt: 'Quelle est la principale hormone hypoglycémiante sécrétée par les cellules bêta des îlots de Langerhans du pancréas ?',
    options: [
      'L\'insuline',
      'Le glucagon',
      'L\'adrénaline',
      'L\'acide chlorhydrique'
    ],
    correctAnswer: 'L\'insuline',
    commonMistake: 'Inverser les rôles de l\'insuline et du glucagon : l\'insuline FAIT BAISSER la glycémie (hypoglycémiante), tandis que le glucagon (sécrété par les cellules alpha) FAIT MONTER la glycémie (hyperglycémiant).',
    explanation: 'L\'insuline se fixe sur ses récepteurs hépatiques, musculaires et adipeux, déclenchant l\'internalisation du glucose et sa polymérisation en glycogène. Cela ramène la glycémie à sa valeur consigne d\'environ 1 g/L.',
    steps: [
      '1. Repas => absorption intestinale de glucose => augmentation de la glycémie (> 1,2 g/L).',
      '2. Détection par les cellules β des îlots de Langerhans du pancréas endocrine.',
      '3. Excrétion d\'insuline dans le sang.',
      '4. Stockage du glucose dans le foie et les muscles => retour de la glycémie à 1 g/L.'
    ]
  },
  {
    id: 'q-2s-svt-horm-3',
    exerciseId: 'ex-svt-horm-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Communication Nerveuse vs Communication Hormonale)',
    microConcept: 'Les deux grands systèmes de communication de l\'organisme ont des caractéristiques complémentaires : le système nerveux utilise des signaux électriques et chimiques via des axones câblés, assurant une action ultra-rapide (millisecondes) et localisée ; le système hormonal utilise des molécules véhiculées par le sang, assurant une action plus lente (secondes à heures) mais durable et globale.',
    hint: 'Compare les vitesses de transmission : le réflexe nerveux prend quelques millisecondes, tandis qu\'une hormone doit circuler dans le sang.',
    prompt: 'Quelle comparaison fondamentale entre communication nerveuse et hormonale est scientifiquement exacte ?',
    options: [
      'La communication nerveuse est rapide et ciblée par des voies anatomiques précises, alors que la communication hormonale est plus lente et diffuse par voie sanguine',
      'La communication hormonale circule à la vitesse de la lumière le long de câbles électriques',
      'La communication nerveuse ne s\'exerce qu\'après les repas chez les vertébrés',
      'Les hormones n\'agissent que sur les cellules qui les ont directement produites'
    ],
    correctAnswer: 'La communication nerveuse est rapide et ciblée par des voies anatomiques précises, alors que la communication hormonale est plus lente et diffuse par voie sanguine',
    commonMistake: 'Croire que les deux systèmes sont isolés. En réalité, le système neuro-endocrinien (comme l\'axe hypothalamus-hypophyse) coordonne étroitement les signaux nerveux et hormonaux.',
    explanation: 'Le système nerveux répond immédiatement aux urgences et mouvements musculaires. Le système hormonal coordonne les fonctions de fond comme la croissance, la reproduction et l\'homéostasie métabolique.',
    steps: [
      '1. Vecteur nerveux : potentiels d\'action sur axones + neurotransmetteurs à la synapse (vitesse jusqu\'à 100 m/s).',
      '2. Vecteur hormonal : molécules dissoutes dans le plasma sanguin (vitesse liée au débit circulatoire).',
      '3. Spécificité nerveuse assurée par les connexions synaptiques physiques.',
      '4. Spécificité hormonale assurée par les récepteurs membranaires complémentaires.'
    ]
  },
  {
    id: 'q-2s-svt-horm-4',
    exerciseId: 'ex-svt-horm-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Le Rôle Central du Foie & Glycogénolyse)',
    microConcept: 'Le foie possède une fonction régulatrice unique : c\'est le SEUL organe capable de libérer du glucose dans la circulation générale en période de jeûne (grâce à l\'enzyme glucose-6-phosphatase). Sous l\'action du glucagon (sécrété par les cellules α), le foie dégrade son glycogène de réserve en molécules de glucose libre (glycogénolyse hépatique) pour alimenter les organes gluco-dépendants comme le cerveau.',
    hint: 'Les muscles stockent aussi du glycogène, mais peuvent-ils le libérer dans le sang pour le reste du corps ? Non, seul le foie a cette enzyme clé !',
    prompt: 'Pourquoi le foie est-il l\'organe effecteur indispensable pour corriger une baisse de glycémie (hypoglycémie de jeûne) ?',
    options: [
      'Il est le seul organe capable d\'hydrolyser son glycogène et de libérer du glucose libre dans la circulation générale',
      'Il fabrique de l\'insuline pour éliminer le glucose restant',
      'Il pompe l\'eau du sang pour concentrer artificiellement le sucre',
      'Il absorbe le dioxyde de carbone pour le convertir en glucose'
    ],
    correctAnswer: 'Il est le seul organe capable d\'hydrolyser son glycogène et de libérer du glucose libre dans la circulation générale',
    commonMistake: 'Penser que les muscles peuvent alimenter le cerveau en glucose. Le glycogène musculaire sert exclusivement à la contraction locale de la fibre musculaire car le muscle est dépourvu de glucose-6-phosphatase.',
    explanation: 'Lors d\'un jeûne, le glucagon se fixe sur les récepteurs hépatocytaires, activant la glycogène phosphorylase qui coupe le glycogène en glucose libéré dans la veine sus-hépatique.',
    steps: [
      '1. Jeûne entre deux repas => glycémie descendante (< 0,8 g/L).',
      '2. Détection par les cellules α pancréatiques et libération de glucagon.',
      '3. Activation de la glycogénolyse dans les hépatocytes.',
      '4. Libération de glucose dans le sang : correction de l\'hypoglycémie.'
    ]
  },
  {
    id: 'q-2s-svt-horm-5',
    exerciseId: 'ex-svt-horm-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Très difficile (Boucle de Rétroaction Négative & Diabètes)',
    microConcept: 'Le système réglant de la glycémie fonctionne selon une boucle de rétroaction négative (feed-back négatif) : l\'effet provoqué par la réponse hormonale s\'oppose à la perturbation initiale qui l\'a déclenché. Le diabète de type 1 est une maladie auto-immune avec destruction sélective des cellules β (carence absolue en insuline), tandis que le diabète de type 2 résulte d\'une insulinorésistance périphérique progressive liée à la surcharge pondérale et à la sédentarité.',
    hint: 'Quelle est la cause fondamentale du diabète de type 1 (souvent découvert chez l\'adolescent) par rapport au pancréas ?',
    prompt: 'Quelle est la cause physiopathologique originelle du Diabète de Type 1 (DT1) nécessitant des injections quotidiennes d\'insuline ?',
    options: [
      'La destruction auto-immune des cellules bêta des îlots de Langerhans par les propres lymphocytes T du patient',
      'Une consommation excessive de sel de cuisine dans l\'enfance',
      'Une malformation génétique empêchant la digestion des protéines',
      'L\'absence totale de récepteurs à insuline sur les cellules hépatiques'
    ],
    correctAnswer: 'La destruction auto-immune des cellules bêta des îlots de Langerhans par les propres lymphocytes T du patient',
    commonMistake: 'Confondre diabète de type 1 (carence absolue en insuline d\'origine auto-immune) et diabète de type 2 (insulinopénie relative secondaire à une résistance des récepteurs périphériques).',
    explanation: 'Dans le DT1, le système immunitaire ne reconnaît plus les cellules β productrices d\'insuline et les détruit irréversiblement. Sans insuline, le glucose ne peut plus entrer dans les cellules et s\'accumule dans le sang (hyperglycémie sévère et glucosurie).',
    steps: [
      '1. Attaque auto-immune ciblée sur les cellules β des îlots de Langerhans.',
      '2. Chute drastique de la production d\'insuline endogène.',
      '3. Perte du contrôle hypoglycémiant : le glucose s\'accumule dans le sang (> 2 g/L).',
      '4. Nécessité vitale d\'un traitement substitutif par insulinothérapie injectable.'
    ]
  },
  {
    id: 'q-2s-svt-horm-methode-doc',
    exerciseId: 'ex-svt-horm-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode SVT - Raisonnement sur Documents Type 2 (Analyse d\'Expérience Historique de Pancréatectomie)',
    microConcept: 'Dans le sujet de Type 2, l\'analyse rigoureuse d\'expériences de physiologie (ablation, greffe, injection d\'extraits) doit suivre un déroulement méthodique : 1) Décrire la condition témoin et sa valeur chiffrée, 2) Décrire la perturbation expérimentale et l\'évolution chiffrée avec unités (heures, g/L), 3) Formuler la déduction physiologique directe.',
    hint: 'Regarde comment la glycémie grimpe après ablation du pancréas (de 1,0 à 3,4 g/L en 5 h) puis chute immédiatement lors de la réinjection de broyats pancréatiques.',
    prompt: 'Un document relate l\'expérience de von Mering et Minkowski chez un chien : avant l\'opération, la glycémie est stable à 1,0 g/L. Après pancréatectomie totale, la glycémie grimpe à 2,1 g/L en 2 h puis atteint 3,4 g/L à la 5e heure avec présence de glucose dans les urines (glucosurie). À t = 5 h, une perfusion intraveineuse d\'extraits pancréatiques ramène la glycémie à 1,1 g/L en 90 minutes. Quelle est la démarche d\'analyse et de déduction conforme aux critères du Type 2 ?',
    options: [
      'Je constate que chez le chien témoin la glycémie est normale à 1,0 g/L. L\'ablation du pancréas provoque une montée rapide de la glycémie à 2,1 g/L à 2 h puis à 3,4 g/L à 5 h avec glucosurie. La perfusion d\'extraits pancréatiques rétablit une glycémie quasi-normale de 1,1 g/L en 90 minutes. J\'en déduis que le pancréas est l\'organe indispensable au maintien de l\'homéostasie glycémique et qu\'il agit par l\'intermédiaire d\'une substance chimique hypoglycémiante libérée dans la circulation sanguine (action endocrine / hormonale).',
      'Le chien est devenu diabétique parce que l\'opération a blessé son foie qui s\'est mis à saigner du sucre.',
      'Le document démontre que le pancréas sert uniquement à fabriquer le suc pancréatique digestif dans l\'intestin.',
      'La glycémie monte car le chien avait faim pendant les 5 heures de l\'expérience sans manger.'
    ],
    correctAnswer: 'Je constate que chez le chien témoin la glycémie est normale à 1,0 g/L. L\'ablation du pancréas provoque une montée rapide de la glycémie à 2,1 g/L à 2 h puis à 3,4 g/L à 5 h avec glucosurie. La perfusion d\'extraits pancréatiques rétablit une glycémie quasi-normale de 1,1 g/L en 90 minutes. J\'en déduis que le pancréas est l\'organe indispensable au maintien de l\'homéostasie glycémique et qu\'il agit par l\'intermédiaire d\'une substance chimique hypoglycémiante libérée dans la circulation sanguine (action endocrine / hormonale).',
    commonMistake: 'Négliger de citer la valeur initiale (1,0 g/L), le pic (3,4 g/L) et le retour à 1,1 g/L en 90 min, ou attribuer l\'action au système nerveux alors que l\'extrait est perfusé par voie sanguine (preuve de la nature hormonale).',
    explanation: 'L\'exercice de Type 2 récompense l\'association des repères temporels (heures, minutes), des concentrations (g/L) et la déduction logique de la nature endocrine du pancréas.',
    steps: [
      '1. État basal de référence : glycémie physiologique à 1,0 g/L.',
      '2. Effet de l\'ablation : hyperglycémie massive (3,4 g/L à 5 h).',
      '3. Contre-épreuve par injection d\'extrait : retour à 1,1 g/L démontrant l\'action hormonale humorale.'
    ]
  },
  {
    id: 'q-2s-svt-horm-methode-synthese',
    exerciseId: 'ex-svt-horm-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode SVT - Type 2 : Synthèse Finale (Schéma Fonctionnel de Régulation)',
    microConcept: 'La synthèse finale d\'un Sujet de Type 2 prend fréquemment la forme d\'un schéma fonctionnel récapitulatif modélisant le système de régulation. Un tel schéma doit comporter une boucle de rétroaction négative (feed-back négatif) reliant : paramètre réglé (glycémie), capteur / effecteur endocrine (îlots α et β du pancréas), messagers hormonaux (insuline, glucagon), organes cibles (foie, muscles, tissu adipeux) et réponse corrective.',
    hint: 'Qu\'est-ce qui caractérise un schéma fonctionnel de régulation en boucle fermée dans la synthèse de Type 2 ?',
    prompt: 'Dans la synthèse finale d\'un sujet de Type 2 sur la régulation de la glycémie après un repas riche en glucides, comment doit être structuré le schéma fonctionnel récapitulatif ?',
    options: [
      'Une boucle fermée orientée par des flèches : [Augmentation de la glycémie > 1 g/L] → [Détection par les cellules β du pancréas] → [Sécrétion accrue d\'insuline dans le sang] → [Fixation sur récepteurs des hépatocytes et myocytes] → [Glycogénogenèse et stockage] → [Rétroaction négative : retour de la glycémie à 1 g/L]',
      'Un dessin anatomique détaillé représentant un homme mangeant un plat de riz avec des flèches multicolores sans texte',
      'Une liste de 25 noms de médecins gabonais spécialistes du diabète',
      'Un tableau contenant uniquement des formules chimiques sans aucune flèche fonctionnelle'
    ],
    correctAnswer: 'Une boucle fermée orientée par des flèches : [Augmentation de la glycémie > 1 g/L] → [Détection par les cellules β du pancréas] → [Sécrétion accrue d\'insuline dans le sang] → [Fixation sur récepteurs des hépatocytes et myocytes] → [Glycogénogenèse et stockage] → [Rétroaction négative : retour de la glycémie à 1 g/L]',
    commonMistake: 'Tracer des flèches dans un seul sens sans fermer la boucle de rétrocontrôle négatif qui ramène le paramètre à sa valeur consigne.',
    explanation: 'Le schéma fonctionnel bilan est l\'aboutissement du raisonnement de Type 2 : il synthétise l\'ensemble des documents exploités dans un modèle cybernétique clair avec boucle de rétrocontrôle négatif.',
    steps: [
      '1. Identification de la perturbation initiale (hyperglycémie postprandiale).',
      '2. Rôle du capteur-effecteur endocrine (cellules β des îlots de Langerhans).',
      '3. Vecteur hormonal (insuline véhiculée par le sang).',
      '4. Réponse des organes effecteurs (stockage sous forme de glycogène) et boucle de retour à l\'équilibre.'
    ]
  }
];

// =========================================================================
// CHAPITRE 7 : LA CELLULE CHLOROPHYLLIENNE, USINE PHOTOSYNTHÉTIQUE
// =========================================================================
export const SECONDE_SVT_PHOTOSYNTHESE_CELLULE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-svt-phot-1',
    exerciseId: 'ex-svt-phot-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Équation Bilan Stœchiométrique de la Photosynthèse)',
    microConcept: 'La photosynthèse est le métabolisme autotrophe par lequel les végétaux chlorophylliens utilisent l\'énergie lumineuse pour réduire le dioxyde de carbone (CO₂) minéral atmosphérique en molécules organiques (glucose C₆H₁₂O₆), en utilisant l\'eau (H₂O) et en rejetant du dioxygène (O₂). L\'équation bilan équilibrée s\'écrit : 6 CO₂ + 6 H₂O + Lumière → C₆H₁₂O₆ + 6 O₂.',
    hint: 'Compte le nombre d\'atomes de carbone : pour fabriquer 1 molécule de glucose à 6 carbones (C₆H₁₂O₆), combien faut-il de molécules de CO₂ ?',
    prompt: 'Quelle est l\'équation chimique globale équilibrée de la photosynthèse réalisée par les cellules végétales chlorophylliennes à la lumière ?',
    options: [
      '6 CO₂ + 6 H₂O + Énergie lumineuse → C₆H₁₂O₆ + 6 O₂',
      'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Énergie thermique',
      'CO₂ + O₂ → C₆H₁₂O₆ + H₂O',
      '6 N₂ + 6 H₂O → C₆H₁₂O₆ + 6 CO₂'
    ],
    correctAnswer: '6 CO₂ + 6 H₂O + Énergie lumineuse → C₆H₁₂O₆ + 6 O₂',
    commonMistake: 'Confondre la photosynthèse (synthèse de glucose + rejet d\'O₂) avec la respiration cellulaire qui est la réaction inverse (oxydation du glucose + consommation d\'O₂).',
    explanation: 'La photosynthèse convertit l\'énergie radiative de la lumière en énergie chimique stockée dans les liaisons covalentes du glucose, avec rejet de 6 molécules d\'O₂ pour 6 molécules de CO₂ consommées.',
    steps: [
      '1. Réactifs minéraux : 6 molécules de CO₂ (gaz atmosphérique) + 6 molécules de H₂O (eau du sol).',
      '2. Énergie motrice : photons solaires absorbés par les pigments chlorophylliens.',
      '3. Produits formés : 1 molécule de glucose (C₆H₁₂O₆, matière organique) + 6 molécules d\'O₂ gazeux.',
      '4. C\'est le fondement de la production primaire de biomasse sur Terre.'
    ]
  },
  {
    id: 'q-2s-svt-phot-2',
    exerciseId: 'ex-svt-phot-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (L\'Organite Spécifique : Le Chloroplaste)',
    microConcept: 'La photosynthèse s\'effectue au sein d\'un organite cytoplasmique compartimenté exclusif des végétaux : le chloroplaste. Entouré d\'une double membrane, il renferme un liquide enzymatique appelé stroma et un réseau de membranes internes aplaties en sacs appelés thylakoïdes (empilés en grana) contenant les pigments chlorophylliens.',
    hint: 'Quel est l\'organite vert microscopique visible dans les cellules des feuilles d\'élodée ou d\'hibiscus au microscope optique ?',
    prompt: 'Dans quel organite cellulaire compartimenté se déroulent l\'ensemble des réactions de la photosynthèse chez une cellule végétale eucaryote ?',
    options: [
      'Le chloroplaste',
      'La mitochondrie',
      'L\'appareil de Golgi',
      'Le réticulum endoplasmique lisse'
    ],
    correctAnswer: 'Le chloroplaste',
    commonMistake: 'Confondre le chloroplaste (siège de la photosynthèse végétale) et la mitochondrie (siège de la respiration cellulaire présente chez les animaux ET les végétaux).',
    explanation: 'Les chloroplastes contiennent la chlorophylle ancrée dans la membrane des thylakoïdes. C\'est là que la lumière est captée pour scinder l\'eau et fabriquer de l\'ATP et du NADPH nécessaires au cycle de Calvin dans le stroma.',
    steps: [
      '1. Double membrane délimitant le chloroplaste.',
      '2. Thylakoïdes membranaires : phase photochimique claire dépendante de la lumière.',
      '3. Stroma liquide : phase d\'incorporation du CO₂ (cycle de Calvin) fabriquant les sucres.',
      '4. Accumulation transitoire d\'amidon visible sous forme de grains réfringents.'
    ]
  },
  {
    id: 'q-2s-svt-phot-3',
    exerciseId: 'ex-svt-phot-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Spectre d\'Absorption des Pigments & Couleur Verte)',
    microConcept: 'La chlorophylle brute (mélange de chlorophylle a, chlorophylle b et caroténoïdes) absorbe fortement les longueurs d\'onde correspondant aux radiations bleu-violet (400 - 480 nm) et rouge-orange (640 - 680 nm). En revanche, elle n\'absorbe quasiment pas les radiations vertes (500 - 560 nm), qui sont transmises et réfléchies vers l\'œil humain, expliquant la couleur verte des feuilles.',
    hint: 'Pourquoi voyons-nous les feuilles vertes ? Est-ce parce que la plante absorbe le vert ou parce qu\'elle le rejette et le réfléchit ?',
    prompt: 'Pourquoi les feuilles des végétaux chlorophylliens apparaissent-elles de couleur verte à nos yeux ?',
    options: [
      'Parce que la chlorophylle absorbe les longueurs d\'onde bleues et rouges et réfléchit/transmet les radiations vertes',
      'Parce qu\'elle absorbe uniquement la lumière verte et rejette toutes les autres couleurs',
      'Parce que les cellules végétales fabriquent une peinture chimique verte pour masquer le bois',
      'Parce que l\'oxygène gazeux produit à la surface de la feuille est teinté de vert fluo'
    ],
    correctAnswer: 'Parce que la chlorophylle absorbe les longueurs d\'onde bleues et rouges et réfléchit/transmet les radiations vertes',
    commonMistake: 'Penser que la plante "se nourrit" de la lumière verte. Le vert est justement la couleur la moins efficace pour la photosynthèse car les pigments ne l\'absorbent pas.',
    explanation: 'Le spectre d\'action photosynthétique coïncide remarquablement avec le spectre d\'absorption de la chlorophylle : l\'efficacité maximale de synthèse organique est observée dans les lumières rouge et bleue.',
    steps: [
      '1. La lumière solaire blanche contient toutes les couleurs de l\'arc-en-ciel.',
      '2. Les pigments chlorophylliens captent l\'énergie des photons bleus (~430 nm) et rouges (~660 nm).',
      '3. Les photons verts (~520 nm) ne sont pas absorbés et traversent ou rebondissent sur la feuille.',
      '4. Notre rétine capte ces radiations vertes réfléchies.'
    ]
  },
  {
    id: 'q-2s-svt-phot-4',
    exerciseId: 'ex-svt-phot-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Origine de l\'Oxygène Rejeté : Expérience de Ruben & Kamen)',
    microConcept: 'Pendant longtemps, on a cru que l\'O₂ rejeté provenait du CO₂ atmosphérique. L\'expérience historique de Ruben et Kamen (1941) utilisant l\'isotope lourd de l\'oxygène ¹⁸O a prouvé de manière incontestable que l\'O₂ rejeté provient de l\'eau (H₂O) par PHOTOLYSE sous l\'action de la lumière : 2 H₂O → O₂ + 4 H⁺ + 4 e⁻.',
    hint: 'Quand on fournit aux algues de l\'eau marquée avec l\'isotope lourd H₂¹⁸O et du CO₂ normal, quel oxygène gazeux retrouve-t-on rejeté dans l\'air ?',
    prompt: 'D\'après les expériences scientifiques avec les isotopes (Ruben et Kamen), d\'où provient exactement le dioxygène (O₂) libéré lors de la photosynthèse ?',
    options: [
      'De la dissociation (photolyse) de la molécule d\'eau (H₂O)',
      'Du découpage de la molécule de dioxyde de carbone (CO₂)',
      'De la décomposition des nitrates du sol absorbés par les racines',
      'De la respiration des bactéries fixées sur les feuilles'
    ],
    correctAnswer: 'De la dissociation (photolyse) de la molécule d\'eau (H₂O)',
    commonMistake: 'Répondre spontanément "du CO₂" en pensant que la plante prend le C du CO₂ et recrache le O₂. Les atomes d\'oxygène du CO₂ finissent en réalité dans les molécules de glucose et dans de l\'eau formée.',
    explanation: 'Dans les thylakoïdes, le photosystème II arrache des électrons à l\'eau pour remplacer ceux excités par les photons : 2 H₂¹⁸O → ¹⁸O₂ + 4 H⁺ + 4 e⁻. L\'oxygène dégagé est donc le déchet de l\'oxydation de l\'eau.',
    steps: [
      '1. Expérience A : Fourniture de H₂¹⁸O + C¹⁶O₂ => L\'oxygène gazeux libéré est du ¹⁸O₂ lourd.',
      '2. Expérience B : Fourniture de H₂¹⁶O + C¹⁸O₂ => L\'oxygène gazeux libéré est du ¹⁶O₂ ordinaire.',
      '3. Conclusion scientifique indiscutable : l\'O₂ rejeté provient exclusivement de l\'oxydation de l\'eau H₂O.',
      '4. Le carbone et l\'oxygène du CO₂ sont quant à eux incorporés dans le squelette carboné des glucides.'
    ]
  },
  {
    id: 'q-2s-svt-phot-5',
    exerciseId: 'ex-svt-phot-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Très difficile (Autotrophie vs Hétérotrophie & Bilan Énergétique)',
    microConcept: 'Les cellules végétales chlorophylliennes sont AUTOTROPHES pour le carbone : elles sont capables de synthétiser l\'intégralité de leurs constituants organiques complexes (glucides, lipides, protides) exclusivement à partir de précurseurs minéraux simples (CO₂, H₂O, nitrates, phosphates) et d\'énergie lumineuse. À l\'inverse, les cellules hétérotrophes (cellules animales, champignons, cellules racinaires de la plante) doivent impérativement trouver de la matière organique préexistante.',
    hint: 'Quel terme biologique désigne un être vivant capable de produire sa propre matière organique uniquement à partir de matière minérale et de lumière ?',
    prompt: 'Quelle est la définition biologique fondamentale de l\'autotrophie caractéristique des cellules chlorophylliennes ?',
    options: [
      'La capacité de synthétiser sa propre matière organique uniquement à partir de matière minérale brute et d\'une source d\'énergie externe (la lumière)',
      'L\'obligation de consommer d\'autres êtres vivants pour obtenir du carbone organique',
      'La capacité de vivre indéfiniment sans eau ni sels minéraux',
      'La propriété de ne respirer que la nuit et d\'hiberner le jour'
    ],
    correctAnswer: 'La capacité de synthétiser sa propre matière organique uniquement à partir de matière minérale brute et d\'une source d\'énergie externe (la lumière)',
    commonMistake: 'Croire qu\'une cellule chlorophyllienne ne respire pas. Les cellules végétales ont des mitochondries et respirent en permanence (jour et nuit) ; mais le jour, la photosynthèse est prépondérante et absorbe bien plus de CO₂ que la respiration n\'en dégage.',
    explanation: 'L\'autotrophie fait des végétaux les producteurs primaires indispensables de la biosphère : toute l\'énergie chimique qui circule dans les réseaux trophiques découle de cette conversion initiale de l\'énergie solaire.',
    steps: [
      '1. Entrée minérale : CO₂ gazeux + H₂O liquide + ions minéraux dissous (NO₃⁻, PO₄³⁻).',
      '2. Conversion énergétique : photons solaires absorbés par les antennes collectrices.',
      '3. Production de biomolécules : glucose puis acides aminés, acides gras et acides nucléiques.',
      '4. Rôle de base universelle de toutes les chaînes alimentaires terrestres et marines.'
    ]
  },
  {
    id: 'q-2s-svt-phot-methode-roc',
    exerciseId: 'ex-svt-phot-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode SVT - ROC Type 1 (Structure du Développement en Parties Équilibrées)',
    microConcept: 'Dans le DÉVELOPPEMENT d\'un Sujet de Type 1 (ROC) en SVT, la clarté de l\'exposé repose sur deux ou trois grandes parties équilibrées, titrées ou nettement individualisées par des paragraphes distincts. Chaque sous-partie articule l\'explication biologique avec un fait expérimental ou une équation stœchiométrique précise.',
    hint: 'Regarde le plan de développement qui sépare logiquement le siège structural (le chloroplaste) et le mécanisme biochimique d\'autotrophie.',
    prompt: 'Pour traiter le sujet de ROC : « La cellule chlorophyllienne : une usine de conversion énergétique au service de l\'autotrophie », quelle architecture de DÉVELOPPEMENT respecte parfaitement les canons méthodologiques du Sujet de Type 1 ?',
    options: [
      'I. Le chloroplaste, organite compartimenté siège de la photosynthèse (ultrastructure, thylakoïdes et pigments chlorophylliens) ; II. Les étapes de la conversion photosynthétique et le bilan de l\'autotrophie (photolyse de l\'eau, réduction du CO₂ en glucose : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ et rôle des stomates)',
      'Une seule longue phrase de 4 pages sans aucun paragraphe ni titre, racontant tout ce qu\'on sait sur les feuilles d\'arbres',
      'I. Pourquoi les arbres ont des feuilles vertes ; II. Le prix du bois d\'okoumé sur le marché international',
      'I. La respiration des poissons dans l\'eau douce ; II. La cuisson du manioc à la vapeur'
    ],
    correctAnswer: 'I. Le chloroplaste, organite compartimenté siège de la photosynthèse (ultrastructure, thylakoïdes et pigments chlorophylliens) ; II. Les étapes de la conversion photosynthétique et le bilan de l\'autotrophie (photolyse de l\'eau, réduction du CO₂ en glucose : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ et rôle des stomates)',
    commonMistake: 'Rédiger un développement en bloc compact sans titre apparent ni division équilibrée, ou dériver vers des thèmes d\'économie forestière sans rapport avec la biologie cellulaire.',
    explanation: 'Le développement officiel de ROC doit s\'articuler en 2 grandes parties équilibrées (ou 3) explorant d\'abord la structure cellulaire puis le fonctionnement métabolique avec équation bilan complète.',
    steps: [
      '1. Titres apparents des parties I et II soulignés ou mis en valeur.',
      '2. Première partie : description de l\'organite (chloroplaste, membranes des thylakoïdes, stroma).',
      '3. Deuxième partie : équations biochimiques et couplage énergétique de l\'autotrophie.'
    ]
  },
  {
    id: 'q-2s-svt-phot-methode-doc',
    exerciseId: 'ex-svt-phot-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode SVT - Raisonnement sur Documents Type 2 (Confrontation de Deux Courbes & Déduction)',
    microConcept: 'Dans le sujet de Type 2, la confrontation documentaire entre deux graphiques (ex: spectre d\'absorption et spectre d\'action) nécessite de superposer les maxima et minima de chaque courbe en citant les longueurs d\'onde exactes (en nm) et les intensités relatives (en %), pour en déduire le rôle direct des pigments dans la réaction biologique.',
    hint: 'Regarde la superposition des pics dans le bleu-violet (430-450 nm) et dans le rouge (650-680 nm).',
    prompt: 'Un document confronte le spectre d\'absorption d\'une solution de chlorophylle brute (pics d\'absorption à 430-450 nm dans le bleu et à 660 nm dans le rouge, quasi-nulle à 500-550 nm dans le vert) et le spectre d\'action photosynthétique mesurant l\'intensité de la photosynthèse (forte activité à 440 nm et 660 nm, minimale entre 500 et 550 nm). Quelle est la démarche de confrontation et déduction rigoureuse ?',
    options: [
      'Je constate une superposition étroite entre les deux courbes : l\'activité photosynthétique est maximale aux mêmes longueurs d\'onde où l\'absorption par la chlorophylle est la plus forte (dans le bleu à 430-450 nm et dans le rouge à 660 nm), et minimale dans le vert (500-550 nm). J\'en déduis que ce sont précisément les radiations lumineuses absorbées par les pigments chlorophylliens qui fournissent l\'énergie nécessaire pour activer la réaction de photosynthèse.',
      'Les plantes aiment la lumière verte parce que leurs feuilles sont vertes donc elles absorbent tout le vert.',
      'Comme la courbe rouge est plus haute que la bleue, cela prouve que les feuilles absorbent la chaleur du soleil et pas la lumière.',
      'Les deux courbes n\'ont rien à voir ensemble car l\'une mesure des nanomètres et l\'autre des pourcentages.'
    ],
    correctAnswer: 'Je constate une superposition étroite entre les deux courbes : l\'activité photosynthétique est maximale aux mêmes longueurs d\'onde où l\'absorption par la chlorophylle est la plus forte (dans le bleu à 430-450 nm et dans le rouge à 660 nm), et minimale dans le vert (500-550 nm). J\'en déduis que ce sont précisément les radiations lumineuses absorbées par les pigments chlorophylliens qui fournissent l\'énergie nécessaire pour activer la réaction de photosynthèse.',
    commonMistake: 'Croire que la chlorophylle absorbe la lumière verte (au contraire, elle la réfléchit et la transmet, d\'où la couleur verte des feuilles !).',
    explanation: 'La confrontation documentaire rigoureuse de Type 2 démontre que l\'efficacité biologique (spectre d\'action) est le décalque fidèle de la capacité d\'absorption physique (spectre d\'absorption), prouvant le rôle moteur des pigments.',
    steps: [
      '1. Lecture parallèle des deux spectres avec citation des plages spectrales (bleu à 430-450 nm, rouge à 660 nm, vert à 500-550 nm).',
      '2. Constat de corrélation : parallélisme strict des pics et des creux d\'efficacité.',
      '3. Déduction scientifique fondamentale : les photons absorbés sont ceux qui déclenchent la conversion photochimique.'
    ]
  }
];

// =========================================================================
// CHAPITRE 8 : L'APPROVISIONNEMENT DES CELLULES CHLOROPHYLLIENNES
// =========================================================================
export const SECONDE_SVT_APPROVISIONNEMENT_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-svt-appr-1',
    exerciseId: 'ex-svt-appr-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Poils Absorbants & Zone Pilifère)',
    microConcept: 'L\'absorption de l\'eau et des ions minéraux dissous dans la solution du sol s\'effectue au niveau de la racine, très précisément dans la zone pilifère. Celle-ci porte des millions de poils absorbants : des cellules épidermiques racinaires très étirées (jusqu\'à 1 mm de long) qui démultiplient la surface de contact entre la racine et le sol.',
    hint: 'Quelle structure spécialisée ressemblant à un duvet fin au bout des jeunes racines absorbe l\'eau du sol ?',
    prompt: 'Quelle structure cellulaire racinaire spécialisée assure le captage optimal de l\'eau et des sels minéraux dans le sol ?',
    options: [
      'Les poils absorbants situés au niveau de la zone pilifère de la racine',
      'La coiffe terminale protectrice de la pointe racinaire',
      'L\'écorce épaisse du tronc',
      'Les nervures épaisses des pétales floraux'
    ],
    correctAnswer: 'Les poils absorbants situés au niveau de la zone pilifère de la racine',
    commonMistake: 'Penser que toute la surface de la racine absorbe de l\'eau de la même façon. Les vieilles parties subérifiées (ligneuses) sont imperméables ; seule la zone pilifère jeune possède des cellules à paroi fine perméable.',
    explanation: 'Un seul plant de seigle ou d\'arachide peut développer plus de 10 milliards de poils absorbants, créant une surface d\'échange colossale de plusieurs centaines de mètres carrés dans un volume restreint de sol.',
    steps: [
      '1. Zone pilifère située juste au-dessus de la zone d\'élongation racinaire.',
      '2. Élongation tubulaire unilatérale d\'une cellule épidermique (poil absorbant).',
      '3. Pénétration intime entre les particules de terre et le film d\'eau capillaire.',
      '4. Absorption de l\'eau par osmose et transport transcellulaire vers les vaisseaux conducteurs.'
    ]
  },
  {
    id: 'q-2s-svt-appr-2',
    exerciseId: 'ex-svt-appr-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Les Stomates Foliaires & Échanges Gazeux)',
    microConcept: 'Le prélèvement du CO₂ atmosphérique indispensable à la photosynthèse a lieu au niveau des feuilles par des orifices microscopiques de l\'épiderme appelés stomates. Chaque stomate est constitué de deux cellules de garde réniformes délimitant un orifice ajustable appelé ostiole, qui s\'ouvre ou se ferme pour réguler l\'entrée de CO₂ et les pertes d\'eau par évaporation.',
    hint: 'Comment s\'appellent ces petites "bouches" microscopiques situées principalement sur la face inférieure des feuilles ?',
    prompt: 'Par quelles structures microscopiques situées sur l\'épiderme des feuilles le dioxyde de carbone (CO₂) pénètre-t-il dans la plante ?',
    options: [
      'Les stomates',
      'Les lenticelles de l\'écorce',
      'Les trichomes urticants',
      'Les tubes polliniques'
    ],
    correctAnswer: 'Les stomates',
    commonMistake: 'Croire que les feuilles absorbent le CO₂ par toute leur surface. L\'épiderme est recouvert d\'une cuticule cireuse imperméable ; les gaz ne peuvent entrer et sortir que par les ostioles des stomates.',
    explanation: 'L\'ostiole du stomate permet la diffusion du CO₂ vers les lacunes du parenchyme chlorophyllien où se trouvent les cellules photosynthétiques.',
    steps: [
      '1. Épiderme foliaire recouvert d\'une cuticule hydrophobe étanche.',
      '2. Présence de stomates (densité typique de 100 à 300 par mm²).',
      '3. Ouverture de l\'ostiole déclenchée par la lumière et la turgescence des cellules de garde.',
      '4. Entrée de CO₂ et sortie de vapeur d\'eau (transpiration foliaire).'
    ]
  },
  {
    id: 'q-2s-svt-appr-3',
    exerciseId: 'ex-svt-appr-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Le Xylème & la Montée de la Sève Brute)',
    microConcept: 'La sève brute est une solution aqueuse diluée d\'eau et d\'ions minéraux (nitrates, phosphates, potassium). Elle circule de manière ascendante (du bas vers le haut : racines → tiges → feuilles) dans les vaisseaux du xylème, formés de files de cellules végétales mortes dont les parois latérales sont renforcées de dépôts de lignine (vaisseaux annelés, spiralés ou ponctués).',
    hint: 'Quel tissu conducteur fait de vaisseaux rigides et creux achemine l\'eau absorbée par les racines jusqu\'aux feuilles de la canopée ?',
    prompt: 'Quel tissu conducteur végétal assure le transport ascendant de la sève brute (eau + sels minéraux) des racines vers les feuilles ?',
    options: [
      'Le xylème',
      'Le phloème',
      'Le parenchyme amylifère',
      'Le méristème apical'
    ],
    correctAnswer: 'Le xylème',
    commonMistake: 'Confondre xylème (sève brute minérale ascendante) et phloème (sève élaborée sucrée distribuée dans toute la plante).',
    explanation: 'Les vaisseaux du xylème sont des tubes rigides creux dépourvus de cytoplasme : le bois (xylème secondaire) permet à la fois le soutien vertical des grands arbres (okoumé, moabi) et la conduction rapide de l\'eau sur des dizaines de mètres.',
    steps: [
      '1. Solution minérale puisée par les poils absorbants.',
      '2. Franchissement de l\'endoderme racinaire (bande de Caspary).',
      '3. Injection dans les vaisseaux lignifiés creux du xylème.',
      '4. Conduction ascendante continue jusqu\'aux nervures des feuilles.'
    ]
  },
  {
    id: 'q-2s-svt-appr-4',
    exerciseId: 'ex-svt-appr-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (L\'Aspiration Foliaire, Moteur de la Sève Brute)',
    microConcept: 'Comment l\'eau peut-elle monter à 40 ou 60 mètres au sommet d\'un grand arbre de la forêt équatoriale sans pompe cardiaque ? Le moteur physique principal est l\'aspiration foliaire générée par la TRANSPIRATION : l\'évaporation de l\'eau par les stomates crée une forte tension négative (dépression) dans les feuilles. Grâce aux liaisons hydrogène qui soudent les molécules d\'eau entre elles (cohésion), la colonne d\'eau monte d\'un seul bloc dans le xylème.',
    hint: 'Imagine que la feuille agit comme une paille : quand l\'eau s\'évapore en haut, qu\'arrive-t-il à la colonne d\'eau en bas ?',
    prompt: 'Quel est le moteur physique principal permettant l\'ascension de la sève brute jusqu\'au sommet des grands arbres de la forêt gabonaise ?',
    options: [
      'L\'aspiration foliaire provoquée par la transpiration et l\'évaporation de l\'eau au niveau des feuilles',
      'Une pompe musculaire située dans la racine principale',
      'L\'attraction magnétique de la Lune sur les minéraux',
      'La pression de l\'air ambiant qui pousse la sève vers le haut par les stomates'
    ],
    correctAnswer: 'L\'aspiration foliaire provoquée par la transpiration et l\'évaporation de l\'eau au niveau des feuilles',
    commonMistake: 'Croire que la sève monte grâce à la poussée racinaire seule. La poussée racinaire (liée à l\'osmose) ne dépasse pas 1 à 2 bars (suffisante pour quelques décimètres). Pour monter à 50 m, il faut une tension de plus de 15 bars créée par l\'évaporation foliaire.',
    explanation: 'La perte d\'eau transpiratoire par les stomates crée une succion foliaire. La cohésion remarquable des molécules d\'eau (liaisons H) empêche la rupture de la colonne d\'eau (phénomène de cavitation) et tire l\'eau depuis les racines.',
    steps: [
      '1. Évaporation permanente de molécules d\'eau à travers les ostioles des stomates.',
      '2. Appel d\'eau dans les cellules du parenchyme foliaire (déficit de pression hydrique).',
      '3. Tension transmise de proche en proche dans les vaisseaux continus du xylème.',
      '4. Aspiration continue d\'eau depuis le sol à travers toute la hauteur de la tige.'
    ]
  },
  {
    id: 'q-2s-svt-appr-5',
    exerciseId: 'ex-svt-appr-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Très difficile (Régulation Stomatique & Turgescence)',
    microConcept: 'L\'ouverture et la fermeture d\'un stomate sont régulées par la turgescence de ses cellules de garde. À la lumière, des pompes à protons membranaires expulsent des H⁺, entraînant l\'entrée massive d\'ions potassium K⁺ et de chlorure Cl⁻ dans les cellules stomatiques. L\'eau entre par osmose : les cellules deviennent turgescentes. Comme leur paroi interne bordant l\'ostiole est plus épaisse et rigide que leur paroi externe fine, elles se courbent en arc, ouvrant largement l\'ostiole.',
    hint: 'La paroi bordant l\'ostiole est très épaisse par rapport à la paroi extérieure. Quand la cellule se gonfle d\'eau, quelle paroi se déforme le plus ?',
    prompt: 'Quel mécanisme biophysique permet l\'ouverture de l\'ostiole lorsque les cellules de garde du stomate deviennent turgescentes ?',
    options: [
      'L\'inégalité d\'épaisseur de la paroi (paroi ventrale épaissie et rigide, paroi dorsale mince) qui force les cellules à s\'incurver en gonflant',
      'La fonte de la cire de cuticule sous l\'effet de la chaleur solaire',
      'La destruction des cellules de garde qui sont remplacées par de nouvelles cellules',
      'L\'expulsion mécanique de bulles d\'oxygène solide qui écartent les lèvres de l\'ostiole'
    ],
    correctAnswer: 'L\'inégalité d\'épaisseur de la paroi (paroi ventrale épaissie et rigide, paroi dorsale mince) qui force les cellules à s\'incurver en gonflant',
    commonMistake: 'Penser que le stomate est une porte rigide avec une charnière musculaire. L\'ouverture est une conséquence purement mécanique de l\'anatomie dissymétrique de la paroi cellulosique soumise à la pression hydrostatique interne.',
    explanation: 'En condition de stress hydrique (sécheresse), la plante produit de l\'acide abscissique (ABA) qui fait sortir les ions K⁺ : les cellules perdent leur eau (plasmolyse) et s\'affaissent, refermant l\'ostiole pour stopper les pertes d\'eau.',
    steps: [
      '1. Signal lumineux => accumulation d\'ions K⁺ et de solutés dans les cellules stomatiques.',
      '2. Appel d\'eau osmotique => montée de la pression de turgescence.',
      '3. La paroi dorsale mince s\'étire vers l\'extérieur, tandis que la paroi ventrale épaisse résiste.',
      '4. Incurvation des deux cellules et ouverture béante de l\'ostiole.'
    ]
  },
  {
    id: 'q-2s-svt-appr-methode-doc',
    exerciseId: 'ex-svt-appr-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode SVT - Raisonnement sur Documents Type 2 (Analyse de Tableau de Mesures Stomatiques)',
    microConcept: 'Dans le sujet de Type 2, l\'analyse d\'un tableau de données sur l\'ouverture stomatique exige d\'extraire les pourcentages d\'ouverture et les taux de transpiration en fonction de l\'hygrométrie et de l\'éclairement, pour en déduire le compromis physiologique de la plante (nourriture en carbone versus économie d\'eau).',
    hint: 'Regarde comment les stomates s\'ouvrent à 95 % sous forte lumière et humidité mais se ferment à 8 % en condition de sécheresse d\'air.',
    prompt: 'Un tableau expérimental mesure le degré d\'ouverture des stomates d\'un plant d\'arachide à 12 h : sous une humidité relative de l\'air de 85 %, l\'ouverture des ostioles est de 92 % et l\'absorption de CO₂ est de 24 mg/dm²/h ; sous un air sec à 25 % d\'humidité, l\'ouverture chute à 11 % et l\'absorption de CO₂ s\'effondre à 3 mg/dm²/h. Quelle est l\'analyse méthodique attendue au Sujet de Type 2 ?',
    options: [
      'Je constate qu\'en passant d\'une atmosphère humide (85 %) à un air sec (25 %), le degré d\'ouverture des stomates chute drastiquement de 92 % à 11 %, entraînant l\'effondrement de l\'entrée de CO₂ de 24 à 3 mg/dm²/h. J\'en déduis que la fermeture des stomates est une réaction protectrice d\'urgence contre le dessèchement hydrique, mais qu\'elle a pour conséquence inévitable de bloquer l\'approvisionnement en carbone de la photosynthèse.',
      'La plante préfère la sécheresse car 11 % est un chiffre porte-bonheur.',
      'Les stomates s\'ouvrent la nuit quand il pleut pour boire toute l\'eau qui tombe sur les feuilles.',
      'L\'arachide absorbe 24 mg de CO₂ parce que les racines respirent du dioxygène pur.'
    ],
    correctAnswer: 'Je constate qu\'en passant d\'une atmosphère humide (85 %) à un air sec (25 %), le degré d\'ouverture des stomates chute drastiquement de 92 % à 11 %, entraînant l\'effondrement de l\'entrée de CO₂ de 24 à 3 mg/dm²/h. J\'en déduis que la fermeture des stomates est une réaction protectrice d\'urgence contre le dessèchement hydrique, mais qu\'elle a pour conséquence inévitable de bloquer l\'approvisionnement en carbone de la photosynthèse.',
    commonMistake: 'Dire que « les stomates se ferment quand il fait sec » sans citer les chiffres précis (85 % vs 25 %, 92 % vs 11 %, 24 vs 3 mg/dm²/h) et sans mentionner le blocage consécutif de la photosynthèse.',
    explanation: 'Le raisonnement de Type 2 lie quantitativement l\'humidité de l\'air, le diamètre d\'ouverture et le flux d\'incorporation carbonée pour dégager le compromis hydrique/photosynthétique.',
    steps: [
      '1. Lecture des deux conditions hygrométriques avec leurs pourcentages d\'ouverture respectifs.',
      '2. Chiffrage de l\'impact direct sur l\'absorption de CO₂ (24 vs 3 mg/dm²/h).',
      '3. Déduction biologique intégrée : compromis survie hydrique versus rendement photosynthétique.'
    ]
  },
  {
    id: 'q-2s-svt-appr-methode-roc',
    exerciseId: 'ex-svt-appr-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode SVT - ROC Type 1 (Schéma Bilan de la Double Circulation des Sèves)',
    microConcept: 'Dans une ROC portant sur l\'approvisionnement et le métabolisme végétal, le schéma bilan de circulation doit faire figurer obligatoirement : les deux flux opposés (sève brute ascendante dans le xylème depuis les poils absorbants ; sève élaborée descendante et ascendante dans le phloème depuis les feuilles), les moteurs du flux (transpiration foliaire / poussée racinaire) et un titre explicite souligné.',
    hint: 'Qu\'est-ce qui distingue graphiquement la sève brute de la sève élaborée sur un schéma fonctionnel végétal ?',
    prompt: 'Sur un schéma scientifique d\'ensemble accompagnant une ROC sur « Les flux de sèves et l\'approvisionnement de la plante feuillée », quelle convention graphique est indispensable pour distinguer sans ambiguïté les deux sèves ?',
    options: [
      'Utiliser deux figurés ou couleurs distincts (ex: flèches bleues unidirectionnelles ascendantes pour la sève brute dans le xylème ; flèches rouges bidirectionnelles pour la sève élaborée dans le phloème) avec une légende claire et un titre souligné',
      'Dessiner un seul trait noir sans flèche reliant les racines aux feuilles sans aucune légende',
      'Dessiner une fleur jaune et un papillon au-dessus de la tige sans mentionner les vaisseaux conducteurs',
      'Écrire le mot « sève » 50 fois sur la tige sans aucun dessin'
    ],
    correctAnswer: 'Utiliser deux figurés ou couleurs distincts (ex: flèches bleues unidirectionnelles ascendantes pour la sève brute dans le xylème ; flèches rouges bidirectionnelles pour la sève élaborée dans le phloème) avec une légende claire et un titre souligné',
    commonMistake: 'Mélanger les sens de circulation ou oublier d\'indiquer les tissus conducteurs associés (xylème vs phloème) dans le pavé de légendes.',
    explanation: 'La clarté du schéma scientifique en SVT impose d\'individualiser graphiquement la sève brute minérale ascendante (xylème) et la sève élaborée organique multidirectionnelle (phloème).',
    steps: [
      '1. Flèches ascendantes bleues : eau + ions minéraux dans les vaisseaux de xylème.',
      '2. Flèches de redistribution rouges : molécules organiques solubles dans les tubes de phloème.',
      '3. Pavé de légendes soigné et titre complet souligné à la règle.'
    ]
  }
];

// =========================================================================
// CHAPITRE 9 : LE DEVENIR DES PRODUITS DE LA PHOTOSYNTHÈSE
// =========================================================================
export const SECONDE_SVT_DEVENIR_PHOTOSYNTHESE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-svt-dev-1',
    exerciseId: 'ex-svt-dev-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Le Phloème & la Sève Élaborée)',
    microConcept: 'Les sucres solubles (principalement le saccharose) et acides aminés synthétisés par la photosynthèse dans les feuilles constituent la sève élaborée. Celle-ci est distribuée à l\'ensemble de l\'organisme végétal (bourgeons, racines, fruits, tubercules) via les tubes criblés du phloème, formés de cellules vivantes allongées aux cloisons transversales perforées de pores (cribles).',
    hint: 'Quel tissu conducteur distribue la sève riche en sucres organiques fabriqués dans les feuilles à tous les organes de la plante ?',
    prompt: 'Quel tissu conducteur végétal transporte la sève élaborée riche en matières organiques des feuilles vers tous les organes consommateurs ou de réserve ?',
    options: [
      'Le phloème (tubes criblés)',
      'Le xylème (vaisseaux du bois)',
      'La moelle centrale morte',
      'Le stomate foliaire'
    ],
    correctAnswer: 'Le phloème (tubes criblés)',
    commonMistake: 'Confondre phloème (cellules vivantes transportant les sucres) et xylème (cellules mortes lignifiées transportant l\'eau et les sels minéraux).',
    explanation: 'Le phloème permet la redistribution multidirectionnelle des métabolites organiques des organes "sources" (feuilles matures) vers les organes "puits" (racines, graines, jeunes pousses en croissance).',
    steps: [
      '1. Synthèse de glucose dans les chloroplastes foliaires.',
      '2. Conversion en saccharose soluble pour le transport.',
      '3. Chargement actif du saccharose dans les tubes criblés du phloème.',
      '4. Flux de sève élaborée distribué vers les zones de consommation et de stockage.'
    ]
  },
  {
    id: 'q-2s-svt-dev-2',
    exerciseId: 'ex-svt-dev-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Stockage sous Forme d\'Amidon & Test au Lugol)',
    microConcept: 'Le glucose produit par la photosynthèse ne peut pas être accumulé tel quel en forte quantité dans les cellules car il augmenterait trop la pression osmotique. Il est donc polymérisé en amidon, une macromolécule insoluble de formule (C₆H₁₀O₅)ₙ. En laboratoire de SVT, la présence d\'amidon dans une feuille ou un tubercule est révélée par l\'eau iodée (Lugol), qui vire du jaune-brun au bleu-noir.',
    hint: 'Quel réactif de couleur brune prend une coloration caractéristique bleu-nuit / noir au contact de l\'amidon ?',
    prompt: 'Quel réactif chimique colore spécifiquement l\'amidon en bleu-noir violacé pour révéler les réserves glucidiques des cellules végétales ?',
    options: [
      'L\'eau iodée (Lugol)',
      'La liqueur de Fehling sans chauffer',
      'Le bleu de méthylène',
      'Le rouge neutre'
    ],
    correctAnswer: 'L\'eau iodée (Lugol)',
    commonMistake: 'Confondre le test de l\'amidon à l\'eau iodée (sans chauffage, coloration bleu-noir immédiate) avec le test des sucres réducteurs à la liqueur de Fehling (nécessite de chauffer et donne un précipité rouge brique).',
    explanation: 'L\'iode s\'insère à l\'intérieur de la structure hélicoïdale de l\'amylose (constituant de l\'amidon), ce qui modifie l\'absorption de la lumière et crée une coloration bleu-noir intense spécifique.',
    steps: [
      '1. Décoloration préalable d\'une feuille verte dans l\'alcool bouillant pour dissoudre la chlorophylle.',
      '2. Rinçage à l\'eau tiède.',
      '3. Dépôt de quelques gouttes d\'eau iodée (Lugol).',
      '4. Apparition d\'une coloration bleu-noir intense aux endroits ayant réalisé la photosynthèse.'
    ]
  },
  {
    id: 'q-2s-svt-dev-3',
    exerciseId: 'ex-svt-dev-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Organes de Réserve au Gabon : Manioc & Tubercules)',
    microConcept: 'Chez les plantes cultivées vivrières majeures du Gabon (manioc, igname, taro, patate douce), les produits de la photosynthèse sont acheminés vers des organes souterrains hypertrophiés spécialisés : les tubercules racinaires (manioc) ou caulinaires (igname). Ces organes stockent d\'immenses quantités d\'amidon dans des plastes sans pigment appelés amyloplastes.',
    hint: 'De quoi sont principalement remplies les cellules du tubercule de manioc consommé quotidiennement sous forme de bâton ou de farine ?',
    prompt: 'Sous quelle forme biochimique principale le manioc (plante vivrière emblématique du Gabon) stocke-t-il les produits de sa photosynthèse dans ses tubercules souterrains ?',
    options: [
      'Sous forme de grains d\'amidon concentrés dans les amyloplastes',
      'Sous forme de gouttelettes de pétrole brut liquide',
      'Sous forme d\'hémoglobine animale dissoute',
      'Sous forme de cristaux de carbonate de calcium pur'
    ],
    correctAnswer: 'Sous forme de grains d\'amidon concentrés dans les amyloplastes',
    commonMistake: 'Penser que le manioc fabrique son amidon sous terre dans l\'obscurité. L\'amidon est synthétisé à partir des sucres fabriqués par les feuilles vertes en surface, puis exportés via le phloème jusqu\'aux racines.',
    explanation: 'Les amyloplastes des parenchymes de réserve du manioc convertissent le saccharose apporté par la sève élaborée en volumineux grains d\'amidon qui serviront de réserve énergétique pour la plante.',
    steps: [
      '1. Photosynthèse active dans les feuilles de la canopée du plant de manioc.',
      '2. Descente de la sève élaborée par les tubes criblés du phloème de la tige.',
      '3. Arrivée dans les cellules du parenchyme cortical de la racine tuberculeuse.',
      '4. Condensation du glucose en chaînes d\'amidon insolubles stockées dans les amyloplastes.'
    ]
  },
  {
    id: 'q-2s-svt-dev-4',
    exerciseId: 'ex-svt-dev-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Rôle Structural : Cellulose des Parois & Lignine du Bois)',
    microConcept: 'Une part majeure du glucose produit par la photosynthèse n\'est pas stockée mais incorporée dans l\'architecture cellulaire du végétal pour sa croissance : 1) Polymérisation en chaînes linéaires de cellulose formant les microfibrilles rigides de la paroi de toutes les cellules ; 2) Polymérisation en lignine, un polymère aromatique hydrophobe qui imprègne la paroi secondaire des vaisseaux et des fibres, conférant au bois sa dureté mécanique exceptionnelle.',
    hint: 'Quel composant macromoléculaire issu du glucose confère aux parois végétales leur rigidité et permet aux arbres de s\'élever vers la lumière ?',
    prompt: 'Quelle macromolécule structurale issue de la polymérisation du glucose constitue le principal composant de la paroi de toutes les cellules végétales ?',
    options: [
      'La cellulose',
      'Le glycogène animal',
      'Le cholestérol',
      'L\'acide nucléique ARN'
    ],
    correctAnswer: 'La cellulose',
    commonMistake: 'Confondre le rôle de réserve (amidon) et le rôle structural (cellulose). Bien qu\'ils soient tous deux des polymères de glucose, les liaisons osidiques (alpha pour l\'amidon, bêta-1,4 pour la cellulose) confèrent à la cellulose une résistance mécanique indestructible par la plupart des animaux.',
    explanation: 'La cellulose est la molécule organique la plus abondante sur Terre. Les chaînes de bêta-glucose s\'associent en microfibrilles parallèles tenues par des ponts hydrogène, créant une armature rigide qui résiste aux fortes pressions de turgescence.',
    steps: [
      '1. Glucose activé sous forme d\'UDP-glucose à la membrane plasmique.',
      '2. Synthèse par le complexe enzymatique de la cellulose synthase.',
      '3. Formation de microfibrilles de cellulose insérées dans la paroi primaire.',
      '4. Épaississement ultérieur par imprégnation de lignine pour constituer le bois d\'œuvre.'
    ]
  },
  {
    id: 'q-2s-svt-dev-5',
    exerciseId: 'ex-svt-dev-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Très difficile (Diversité Métabolique : Lipides & Protéines de Réserve)',
    microConcept: 'À partir des trioses-phosphates issus de la photosynthèse et des minéraux absorbés (azote N, soufre S, phosphore P), la cellule végétale dérive l\'ensemble des familles chimiques du vivant : les lipides de réserve (triglycérides stockés dans les graines oléagineuses comme l\'arachide, le palmier à huile ou le sésame), et les protéines de réserve (accumulées dans les grains d\'aleurone des graines de légumineuses comme le haricot ou le soja).',
    hint: 'Pense au palmier à huile ou à l\'arachide cultivés au Gabon : quel type de matière organique hautement énergétique ces plantes fabriquent-elles à partir des sucres de la photosynthèse ?',
    prompt: 'Dans les graines de plantes oléagineuses comme le palmier à huile (Elaeis guineensis) ou l\'arachide, en quelle classe de molécules organiques hautement énergétiques les sucres de la photosynthèse sont-ils convertis pour constituer la réserve de la graine ?',
    options: [
      'En lipides (triglycérides / acides gras riches en énergie)',
      'En eau de mer pure',
      'En minéraux métalliques purs (fer métallique)',
      'En dioxyde de carbone gazeux comprimé'
    ],
    correctAnswer: 'En lipides (triglycérides / acides gras riches en énergie)',
    commonMistake: 'Penser que les plantes ne fabriquent que des sucres (glucides). Les voies de la glycolyse et de l\'acétyl-CoA permettent aux cellules végétales de synthétiser des acides gras insaturés et saturés très riches en calories pour la future germination de l\'embryon.',
    explanation: 'La pulpe et l\'amande de la noix de palme emmagasinent des triglycérides. Lors de la germination, ces lipides seront hydrolysés par des lipases pour fournir l\'énergie nécessaire à la jeune plantule avant qu\'elle ne développe ses premières feuilles photosynthétiques.',
    steps: [
      '1. Sucres acheminés par le phloème vers les fruits et graines en développement.',
      '2. Conversion enzymatique des intermédiaires glucidiques en acétyl-CoA puis en acides gras.',
      '3. Estérification avec le glycérol pour former des triglycérides (huile de palme, huile d\'arachide).',
      '4. Stockage dans des oléosomes pour assurer la survie et la germination de la graine.'
    ]
  },
  {
    id: 'q-2s-svt-dev-methode-roc',
    exerciseId: 'ex-svt-dev-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode SVT - ROC Type 1 (Conclusion : Bilan & Ouverture sur la Diversité du Vivant)',
    microConcept: 'Dans une ROC sur le devenir des produits de la photosynthèse, la conclusion doit récapituler comment le carbone minéral fixé devient le support de la biomasse végétale (bilan) avant d\'ouvrir sur le rôle de la biomasse végétale comme source d\'énergie pour l\'ensemble des réseaux trophiques et la séquestration du carbone dans le bassin du Congo (ouverture écologique).',
    hint: 'Regarde comment la conclusion relie la biochimie du glucose au rôle de puit de carbone de la forêt équatoriale.',
    prompt: 'Sur le sujet de ROC : « Le devenir métabolique des glucides issus de la photosynthèse et leur stockage chez les végétaux », quelle proposition constitue une CONCLUSION répondant parfaitement aux normes officielles de SVT ?',
    options: [
      'En bilan, les sucres formés par la photosynthèse sont soit transportés par le phloème pour nourrir les cellules en croissance, soit polymérisés en réserves amylacées (tubercules de manioc) ou en macromolécules structurales (cellulose du bois). Au-delà de la survie de la plante, ces biomolécules constituent la ressource trophique primaire de tous les hétérotrophes. Dès lors, dans quelle mesure la préservation des forêts du bassin du Congo représente-t-elle un levier biogéochimique décisif face au dérèglement climatique mondial ?',
      'En conclusion, le manioc est très bon avec le poisson braisé et la cellulose sert à faire du papier à l\'école.',
      'Pour finir, nous dirons simplement que les plantes ont besoin d\'engrais chimiques pour pousser plus vite.',
      'Cette conclusion n\'a pas d\'ouverture car le programme de SVT s\'arrête ici.'
    ],
    correctAnswer: 'En bilan, les sucres formés par la photosynthèse sont soit transportés par le phloème pour nourrir les cellules en croissance, soit polymérisés en réserves amylacées (tubercules de manioc) ou en macromolécules structurales (cellulose du bois). Au-delà de la survie de la plante, ces biomolécules constituent la ressource trophique primaire de tous les hétérotrophes. Dès lors, dans quelle mesure la préservation des forêts du bassin du Congo représente-t-elle un levier biogéochimique décisif face au dérèglement climatique mondial ?',
    commonMistake: 'Faire une conclusion anecdotique ou culinaire sans dresser le bilan biochimique et sans formuler une véritable ouverture scientifique sur les flux de carbone.',
    explanation: 'La conclusion remplit rigoureusement les deux exigences officielles : bilan scientifique clair répondant à la problématique + ouverture écologique majeure sur le rôle régulateur du couvert forestier du Gabon.',
    steps: [
      '1. Saut d\'une ligne après le développement.',
      '2. Bilan biochimique récapitulant les deux destins du glucose : métabolisme structural et réserves.',
      '3. Ouverture globale : transition vers le rôle de puits de carbone de la forêt tropicale équatoriale.'
    ]
  },
  {
    id: 'q-2s-svt-dev-methode-doc',
    exerciseId: 'ex-svt-dev-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode SVT - Raisonnement sur Documents Type 2 (Analyse Expérimentale au Lugol & Déduction)',
    microConcept: 'Dans le sujet de Type 2, l\'analyse d\'une expérience de coloration cytochimique (eau iodée / Lugol sur coupe de tubercule ou de feuille) exige de décrire précisément le réactif, la couleur observée (bleu-nuit / noir), et d\'en déduire la nature macromoléculaire du composé présent ainsi que sa localisation cellulaire.',
    hint: 'Quelle coloration spécifique prend l\'eau iodée (Lugol jaune ambré) en présence d\'amidon ?',
    prompt: 'Un document présente des coupes minces de tubercule de manioc traitées à l\'eau iodée (Lugol ambré) : observées au microscope photonique, de nombreux organites intracellulaires sphériques de 10 à 30 µm virent instantanément au bleu-noir profond. Quelle est l\'analyse méthodique attendue au Sujet de Type 2 ?',
    options: [
      'Je constate qu\'après addition d\'eau iodée jaune ambrée, les inclusions sphériques intracellulaires prennent une coloration caractéristique bleu-noir. Or je sais que l\'eau iodée est le réactif spécifique de l\'amidon qui réagit en donnant cette teinte foncée. J\'en déduis que les cellules de tubercule de manioc accumulent de l\'amidon sous forme d\'amyloplastes, constituant ainsi un organe de réserve glucidique majeur de la plante.',
      'Le manioc a pourri parce que l\'eau iodée est un poison noir.',
      'Les ronds bleus sont des bulles d\'air qui prouvent que le manioc respire sous terre.',
      'Le document démontre que le manioc contient du pétrole brut de Port-Gentil.'
    ],
    correctAnswer: 'Je constate qu\'après addition d\'eau iodée jaune ambrée, les inclusions sphériques intracellulaires prennent une coloration caractéristique bleu-noir. Or je sais que l\'eau iodée est le réactif spécifique de l\'amidon qui réagit en donnant cette teinte foncée. J\'en déduis que les cellules de tubercule de manioc accumulent de l\'amidon sous forme d\'amyloplastes, constituant ainsi un organe de réserve glucidique majeur de la plante.',
    commonMistake: 'Oublier le lien biochimique : « Couleur bleu-noir avec Lugol = Présence d\'amidon », et ne pas nommer les organites de stockage (amyloplastes).',
    explanation: 'Le raisonnement de Type 2 exploite le fait visuel précis (virage au bleu-noir), applique le test d\'identification du cours (coloration de l\'hélice d\'amylose par le diiode) et conclut sur la fonction d\'organe de réserve.',
    steps: [
      '1. Observation expérimentale : virage chromatique du Lugol de l\'ambré au bleu-noir.',
      '2. Connaissance mobilisée : spécificité cytochimique de l\'eau iodée pour le polymère d\'amidon.',
      '3. Déduction physiologique : identification des amyloplastes et de la fonction d\'organe de réserve.'
    ]
  }
];

// =========================================================================
// MODULE DÉDIÉ : MÉTHODOLOGIE OFFICIELLE DE L'ÉPREUVE ÉCRITE DE SVT (GABON)
// SUJET TYPE 1 (ROC) & SUJET TYPE 2 (RAISONNEMENT SCIENTIFIQUE SUR DOCUMENTS)
// =========================================================================
export const SECONDE_SVT_METHODOLOGIE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-svt-methode-1-bareme-principes',
    exerciseId: 'ex-svt-methode-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Structure & Barème Officiel de l\'Épreuve de SVT)',
    microConcept: 'L\'épreuve écrite de SVT au Gabon (comme au baccalauréat scientifique) est bipartite : 1) Le Sujet de Type 1 : Restitution Organisée de Connaissances (ROC), noté sur 6 à 7 points, qui évalue la capacité à mobiliser, organiser et exposer ses connaissances de cours de manière rigoureuse dans un texte argumenté étayé de schémas. 2) Le Sujet de Type 2 : Raisonnement Scientifique s\'Appuyant sur des Documents, noté sur 13 à 14 points, qui évalue la capacité à pratiquer une démarche scientifique face à un problème inédit.',
    hint: 'Quel exercice vaut environ un tiers des points (6-7 pts) et lequel constitue la partie majeure (13-14 pts) ?',
    prompt: 'Quelle est la répartition officielle des exercices et des points dans l\'épreuve écrite de SVT au Gabon ?',
    options: [
      'Sujet Type 1 (ROC) sur 6 à 7 points (mobilisation des connaissances rédigée et argumentée) et Sujet Type 2 (Raisonnement sur documents) sur 13 à 14 points (démarche scientifique d\'exploitation de documents inédits)',
      'Uniquement des questions à choix multiples (QCM) sur 20 points',
      'Une récitation par cœur du manuel de 20 pages sans aucun document',
      'Un exposé oral noté sur 10 points et un devoir de dessin sur 10 points'
    ],
    correctAnswer: 'Sujet Type 1 (ROC) sur 6 à 7 points (mobilisation des connaissances rédigée et argumentée) et Sujet Type 2 (Raisonnement sur documents) sur 13 à 14 points (démarche scientifique d\'exploitation de documents inédits)',
    commonMistake: 'Penser que le Sujet de Type 1 représente l\'essentiel des points. Le Type 2 représente près de 70 % de la note globale de l\'épreuve écrite de SVT.',
    explanation: 'La structure officielle valorise à la fois la maîtrise conceptuelle structurée (Type 1, 6-7 pts) et l\'esprit critique d\'investigation expérimentale (Type 2, 13-14 pts).',
    steps: [
      '1. Type 1 (ROC) : 6 à 7 points, synthèse argumentée structurée avec schémas.',
      '2. Type 2 (Documents) : 13 à 14 points, résolution méthodique d\'un problème biologique ou géologique.',
      '3. Total = 20 points coefficientés selon la filière scientifique.'
    ]
  },
  {
    id: 'q-svt-methode-2-type1-intro',
    exerciseId: 'ex-svt-methode-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Les 4 Piliers de l\'Introduction en ROC)',
    microConcept: 'Dans le Sujet de Type 1 (ROC), l\'introduction doit impérativement respecter une succession stricte de 4 composantes : 1) L\'Accroche (amener le sujet en le situant dans son contexte biologique ou géologique), 2) La Définition rigoureuse des termes scientifiques clés du libellé, 3) La Problématique explicite rédigée sous forme de question directe, 4) L\'Annonce claire et concise du plan (2 ou 3 grandes parties).',
    hint: 'Qu\'est-ce qui doit figurer entre l\'accroche et la problématique pour prouver qu\'on maîtrise le vocabulaire scientifique ?',
    prompt: 'Dans la rédaction de l\'INTRODUCTION d\'un Sujet de Type 1 (ROC) en SVT, quelles sont les 4 étapes obligatoires attendues par les correcteurs ?',
    options: [
      '1. Amener le sujet (accroche) → 2. Définir les termes scientifiques clés → 3. Poser la problématique sous forme de question → 4. Annoncer le plan structuré',
      '1. Remercier l\'examinateur → 2. Écrire son numéro de table → 3. Recopier tout le sujet → 4. Donner la conclusion à l\'avance',
      '1. Raconter une anecdote personnelle → 2. Définir le mot science → 3. Demander des points supplémentaires → 4. Sauter au développement',
      '1. Résumer le cours en trois mots → 2. Faire un dessin → 3. Ne rien poser comme question → 4. Commencer directement la partie I'
    ],
    correctAnswer: '1. Amener le sujet (accroche) → 2. Définir les termes scientifiques clés → 3. Poser la problématique sous forme de question → 4. Annoncer le plan structuré',
    commonMistake: 'Oublier de définir les termes scientifiques clés du sujet ou poser une problématique affirmative au lieu d\'une véritable question interrogative.',
    explanation: 'Définir les termes scientifiques clés permet de circonscrire précisément le champ de l\'étude et de prévenir tout hors-sujet avant de poser la question directrice.',
    steps: [
      '1. Amener le sujet : ancrage dans le domaine du vivant ou de la Terre.',
      '2. Définition des termes clés : précision sémantique obligatoire.',
      '3. Problématique : question centrale résumant l\'énigme biologique ou géologique.',
      '4. Annonce de plan : annonce dynamique des deux ou trois parties du devoir.'
    ]
  },
  {
    id: 'q-svt-methode-3-type1-developpement-schema',
    exerciseId: 'ex-svt-methode-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Approfondissement (Développement de ROC & Règle d\'Or des Schémas)',
    microConcept: 'Le développement d\'une ROC est structuré en 2 ou 3 grandes parties équilibrées, titrées et articulées par des transitions logiques. Les schémas scientifiques y sont fortement recommandés voire indispensables : ils doivent être grands, soignés, tracés au crayon et à la règle, comporter des flèches fonctionnelles orientées, des légendes complètes et impérativement un TITRE EXPLICITE ET SOULIGNÉ.',
    hint: 'Si un élève fait un schéma magnifique mais oublie de lui donner un titre souligné et des légendes à la règle, que dit le barème officiel ?',
    prompt: 'Comment doit être conduit le DÉVELOPPEMENT d\'une ROC en SVT et quelle est la règle d\'or régissant les schémas scientifiques intégrés ?',
    options: [
      'Le développement se découpe en 2 ou 3 parties équilibrées titrées ; chaque idée est illustrée d\'exemples ou d\'expériences réelles et étayée de schémas scientifiques soignés, légendés à la règle et obligatoirement titrés et soulignés',
      'Le développement doit être un seul long paragraphe narratif sans aucun titre ni schéma pour ne pas perdre de temps',
      'Les schémas doivent être faits en couleurs fluorescentes sans aucun mot écrit pour laisser le correcteur deviner',
      'On ne doit citer aucune expérience scientifique ni formule pour ne pas alourdir la copie'
    ],
    correctAnswer: 'Le développement se découpe en 2 ou 3 parties équilibrées titrées ; chaque idée est illustrée d\'exemples ou d\'expériences réelles et étayée de schémas scientifiques soignés, légendés à la règle et obligatoirement titrés et soulignés',
    commonMistake: 'Faire des schémas d\'ornement sans titre ni légendes précises, ou rédiger un bloc de texte compact sans titres de parties apparents.',
    explanation: 'Un schéma fonctionnel soigné et titré vaut souvent 1 à 2 points entiers sur les 6 à 7 points de la ROC : il synthétise les mécanismes moléculaires, cellulaires ou géologiques mieux qu\'un long texte.',
    steps: [
      '1. Titres de parties I et II bien visibles et soulignés.',
      '2. Chaque paragraphe développe une idée directrice étayée par un fait réel ou une expérience clé.',
      '3. Schémas scientifiques conformes : grand format, traits horizontaux à la règle, légendes exactes, titre souligné.',
      '4. Phrases de transition assurant la cohérence entre les grandes parties.'
    ]
  },
  {
    id: 'q-svt-methode-4-type1-conclusion',
    exerciseId: 'ex-svt-methode-4',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Approfondissement (Structure de la Conclusion en Sujet Type 1)',
    microConcept: 'La CONCLUSION d\'une Restitution Organisée de Connaissances (Type 1) doit obligatoirement comprendre deux parties : 1) Le Bilan synthétique qui répond directement et précisément à la problématique formulée en introduction (sans répéter les détails du développement ni apporter de faits nouveaux inconnus), 2) Une Ouverture pertinente qui élargit la réflexion vers un autre problème biologique ou géologique connexe.',
    hint: 'Quels sont les deux volets indissociables d\'une conclusion de ROC réussie ?',
    prompt: 'Quels sont les deux éléments indispensables que doit contenir la CONCLUSION d\'un Sujet de Type 1 (ROC) en SVT ?',
    options: [
      'Un bilan synthétique qui répond directement à la problématique posée, suivi d\'une ouverture vers un autre problème biologique ou géologique',
      'Une liste de toutes les notes obtenues pendant l\'année et un mot d\'excuse pour l\'écriture',
      'Une nouvelle partie complète qui explique un chapitre qui n\'avait pas été abordé dans le devoir',
      'La simple phrase « Fin du devoir » sans aucun bilan'
    ],
    correctAnswer: 'Un bilan synthétique qui répond directement à la problématique posée, suivi d\'une ouverture vers un autre problème biologique ou géologique',
    commonMistake: 'Introduire des notions nouvelles inédites dans le bilan ou bâcler la conclusion en omettant l\'ouverture vers un autre horizon du programme.',
    explanation: 'La conclusion clôt la boucle argumentative ouverte en introduction : elle apporte la solution à l\'énigme scientifique posée et ouvre une passerelle vers la suite du programme.',
    steps: [
      '1. Saut d\'une ligne nette pour détacher la conclusion du développement.',
      '2. Rédaction du bilan : réponse directe, concise et rigoureuse à la problématique.',
      '3. Formulation de l\'ouverture : questionnement prospectif vers un problème biologique ou géologique lié.'
    ]
  },
  {
    id: 'q-svt-methode-5-type2-principe-documents',
    exerciseId: 'ex-svt-methode-5',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Objectif & Principe du Sujet de Type 2)',
    microConcept: 'Le Sujet de Type 2 (noté sur 13-14 pts) plonge l\'élève au cœur de la démarche scientifique d\'investigation : face à un problème médical, biologique ou géologique concret, appuyé sur des documents inédits (tableaux de données, graphiques, électronographies, protocoles expérimentaux, arbres généalogiques), l\'élève doit résoudre le problème posé en exploitant méthodiquement ces données.',
    hint: 'S\'agit-il de réciter son cours par cœur ou d\'analyser des données expérimentales concrètes fournies pour résoudre un problème ?',
    prompt: 'Quel est l\'objectif fondamental du Sujet de Type 2 (noté sur 13 à 14 points) en SVT ?',
    options: [
      'Évaluer la capacité à pratiquer une démarche scientifique rigoureuse pour résoudre un problème concret en exploitant une série de documents inédits',
      'Tester la rapidité à recopier l\'intégralité des énoncés sans rien analyser',
      'Vérifier si l\'élève sait dessiner des graphiques sans regarder les données',
      'Calculer des intégrales mathématiques sans rapport avec les sciences de la vie'
    ],
    correctAnswer: 'Évaluer la capacité à pratiquer une démarche scientifique rigoureuse pour résoudre un problème concret en exploitant une série de documents inédits',
    commonMistake: 'Traiter le Type 2 comme une simple récitation de cours en ignorant les documents fournis par le sujet.',
    explanation: 'Dans le Type 2, les documents sont au cœur du sujet : toute affirmation doit découler de l\'analyse des données fournies, complétées judicieusement par les connaissances.',
    steps: [
      '1. Lecture attentive du problème scientifique posé dans l\'introduction du sujet.',
      '2. Identification de l\'apport spécifique de chaque document (ce que chaque document permet de tester).',
      '3. Résolution pas à pas de l\'énigme par la démarche scientifique expérimentale.'
    ]
  },
  {
    id: 'q-svt-methode-6-type2-analyse-stricte-chiffres',
    exerciseId: 'ex-svt-methode-6',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (L\'Analyse Stricte de Type 2 & Règle des Chiffres avec Unités)',
    microConcept: 'Dans le Sujet de Type 2, la première étape méthodologique est l\'ANALYSE STRICTE de chaque document : elle consiste à extraire les faits scientifiques, citer PRÉCISÉMENT LES VALEURS CHIFFRÉES AVEC LEURS UNITÉS (sans formule vague du type « ça augmente » ou « c\'est beaucoup »), et formuler une DÉDUCTION IMMÉDIATE pour chaque document (« Je vois que... donc j\'en déduis que... »).',
    hint: 'Pourquoi les correcteurs pénalisent-ils sévèrement les expressions vagues comme "la courbe monte beaucoup" au lieu de "la glycémie passe de 1 g/L à 2,5 g/L en 30 minutes" ?',
    prompt: 'Dans la notation officielle d\'un Sujet de Type 2 en SVT, quelle exigence d\'analyse est incontournable pour obtenir la totalité des points d\'exploitation d\'un document chiffré ?',
    options: [
      'Citer impérativement les valeurs chiffrées exactes avec leurs unités (ex: g/L, %, nm, mV, cellules/mm³) et formuler immédiatement la déduction scientifique qui en découle',
      'Dire que les chiffres ne sont pas importants et qu\'une appréciation générale suffit',
      'Arrondir tous les chiffres à zéro pour simplifier la lecture',
      'Recopier tous les chiffres du document dans une table sans rien expliquer'
    ],
    correctAnswer: 'Citer impérativement les valeurs chiffrées exactes avec leurs unités (ex: g/L, %, nm, mV, cellules/mm³) et formuler immédiatement la déduction scientifique qui en découle',
    commonMistake: 'Faire une paraphrase qualitative sans citer les valeurs numériques et leurs unités, ou empiler les chiffres sans jamais formuler la moindre déduction.',
    explanation: 'Une observation scientifique n\'a de valeur que si elle est quantifiée : le barème officiel gabonais attribue des points spécifiques à la citation des données numériques avec leurs unités.',
    steps: [
      '1. Présentation brève de ce que présente le document.',
      '2. Relevé chiffré précis : valeurs initiales, valeurs finales ou points d\'inflexion avec unités.',
      '3. Déduction scientifique locale immédiate tirée directement de ces observations.'
    ]
  },
  {
    id: 'q-svt-methode-7-type2-mise-en-relation',
    exerciseId: 'ex-svt-methode-7',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (La Mise en Relation : Croisement Documents & Connaissances)',
    microConcept: 'La deuxième étape d\'un Sujet de Type 2 est la MISE EN RELATION : elle consiste à croiser les informations déduites de l\'ensemble des documents avec les connaissances personnelles issues du cours. Le canevas de rédaction canonique est : « Je constate dans le document que... (données chiffrées). Or je sais d\'après le cours que... (notion explicative). Donc je déduis/conclus que... ».',
    hint: 'Quel connecteur ou structure logique permet de relier ce que montre l\'expérience avec le mécanisme théorique appris en classe ?',
    prompt: 'Dans la démarche d\'un Sujet de Type 2, comment s\'articule de manière optimale la MISE EN RELATION entre documents et connaissances de cours ?',
    options: [
      'En articulant la formule canonique : « Je constate dans les documents que... [faits et chiffres] ; Or je sais d\'après mes connaissances que... [concept du cours] ; Donc je conclus que... [explication du phénomène] »',
      'En racontant d\'abord tout le cours par cœur sur 5 pages, puis en mettant les documents en annexe sans les commenter',
      'En affirmant que le cours contredit toujours les documents et qu\'il faut ignorer les expériences',
      'En écrivant uniquement des équations de physique-chimie sans lien biologique'
    ],
    correctAnswer: 'En articulant la formule canonique : « Je constate dans les documents que... [faits et chiffres] ; Or je sais d\'après mes connaissances que... [concept du cours] ; Donc je conclus que... [explication du phénomène] »',
    commonMistake: 'Juxtaposer le cours à côté des documents sans jamais faire le pont logique explicatif entre les deux.',
    explanation: 'La mise en relation est le cœur du raisonnement de Type 2 : elle donne du sens aux données expérimentales inédites en les éclairant par le savoir théorique.',
    steps: [
      '1. « Je vois que... » : synthèse des déductions issues des documents 1, 2, 3.',
      '2. « Or je sais que... » : apport des mécanismes biologiques ou géologiques du cours indispensables à la compréhension.',
      '3. « Donc... » : résolution logique articulée du problème.'
    ]
  },
  {
    id: 'q-svt-methode-8-type2-synthese-finale',
    exerciseId: 'ex-svt-methode-8',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Expert (La Synthèse Finale : Bilan Argumenté ou Schéma Fonctionnel)',
    microConcept: 'Le Sujet de Type 2 se clôture impérativement par une SYNTHÈSE FINALE : c\'est l\'étape où l\'élève apporte la réponse globale, complète et argumentée au problème posé au départ. Selon la consigne du sujet, cette synthèse prend la forme soit d\'un court texte bilan récapitulatif, soit d\'un SCHÉMA FONCTIONNEL RÉCAPITULATIF (ou conceptuel) intégrant toutes les déductions des documents et les connaissances pour modéliser le mécanisme.',
    hint: 'Comment termine-t-on un exercice de Type 2 pour valider la résolution définitive du problème posé ?',
    prompt: 'Quelle est la forme attendue de la SYNTHÈSE FINALE d\'un Sujet de Type 2 en SVT pour résoudre globalement le problème initial ?',
    options: [
      'Un court texte bilan récapitulatif ou un schéma fonctionnel de synthèse qui rassemble l\'ensemble des déductions pour répondre de façon exhaustive et globale au problème posé',
      'Une simple note demandant si le correcteur a aimé la copie',
      'Une réécriture mot à mot du document 1',
      'La description de l\'humeur de l\'élève pendant l\'épreuve'
    ],
    correctAnswer: 'Un court texte bilan récapitulatif ou un schéma fonctionnel de synthèse qui rassemble l\'ensemble des déductions pour répondre de façon exhaustive et globale au problème posé',
    commonMistake: 'S\'arrêter brutalement après l\'analyse du dernier document sans produire la synthèse finale requise, ce qui coûte plusieurs points de barème.',
    explanation: 'La synthèse finale couronne l\'exercice : elle démontre que l\'élève a résolu l\'énigme scientifique de départ en intégrant l\'ensemble des éléments dégagés au cours de l\'analyse.',
    steps: [
      '1. Rappel de la question initiale posée par le problème.',
      '2. Réponse intégrée synthétique fédérant les apports de chaque document analysé.',
      '3. Réalisation d\'un schéma fonctionnel récapitulatif si demandé par le libellé.'
    ]
  }
];

// =========================================================================
// MAP DES QUESTIONS SVT SECONDE
// =========================================================================
export const SVT_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  'skill-2s-svt-hydrocarbures': SECONDE_SVT_HYDROCARBURES_QUESTIONS,
  'skill-2s-svt-minerais': SECONDE_SVT_MINERAIS_QUESTIONS,
  'skill-2s-svt-eau': SECONDE_SVT_EAU_QUESTIONS,
  'skill-2s-svt-essr': SECONDE_SVT_ESSR_QUESTIONS,
  'skill-2s-svt-comm-nerveuse': SECONDE_SVT_COMM_NERVEUSE_QUESTIONS,
  'skill-2s-svt-comm-hormonale': SECONDE_SVT_COMM_HORMONALE_QUESTIONS,
  'skill-2s-svt-photosynthese-cellule': SECONDE_SVT_PHOTOSYNTHESE_CELLULE_QUESTIONS,
  'skill-2s-svt-approvisionnement-vegetal': SECONDE_SVT_APPROVISIONNEMENT_QUESTIONS,
  'skill-2s-svt-devenir-photosynthese': SECONDE_SVT_DEVENIR_PHOTOSYNTHESE_QUESTIONS,
  'skill-2s-svt-methodologie-epreuve': SECONDE_SVT_METHODOLOGIE_QUESTIONS,
};
