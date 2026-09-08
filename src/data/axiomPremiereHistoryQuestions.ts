import { ExerciseQuestion } from '../types';

// =====================================================================
// BANQUE OFFICIELLE DE QUESTIONS D'HISTOIRE-GÉOGRAPHIE : PREMIÈRE (GABON)
// Colonisation, Résistances (Emane Tole, Nyonda Makita), Guerres Mondiales, Géographie du Gabon
// =====================================================================

export const PREMIERE_HG_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // -------------------------------------------------------------------
  // 1. PARTAGES COLONIAUX EN AFRIQUE & RÉSISTANCES GABONAISES
  // -------------------------------------------------------------------
  'skill-1s-hg-colonisation': [
    {
      id: 'q-1s-hg-col-1',
      exerciseId: 'ex-1s-hg-col-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Conférence de Berlin (1884-1885)',
      microConcept: 'La Conférence de Berlin (15 novembre 1884 - 26 février 1885), convoquée par le chancelier allemand Bismarck, a fixé les règles du partage colonial de l\'Afrique entre puissances européennes, notamment le principe de l\'occupation effective de l\'hinterland et la liberté de navigation sur les fleuves Congo et Niger.',
      hint: 'Pense au principe diplomatique qui exigeait une présence militaire et administrative réelle sur le terrain pour revendiquer un territoire.',
      prompt: 'Quel principe diplomatique majeur la Conférence de Berlin (1884-1885) a-t-elle imposé pour reconnaître la souveraineté d\'une puissance européenne sur un territoire africain ?',
      options: [
        'Le principe de l\'occupation effective (obligation d\'établir une autorité administrative et militaire réelle sur le terrain)',
        'L\'accord préalable et unanime des chefs coutumiers africains consultés par référendum',
        'L\'obligation d\'accorder l\'indépendance immédiate aux populations locales',
        'Le tirage au sort des frontières sans aucune expédition'
      ],
      correctAnswer: 'Le principe de l\'occupation effective (obligation d\'établir une autorité administrative et militaire réelle sur le terrain)',
      commonMistake: 'Penser que la conférence de Berlin a tracé directement toutes les frontières intérieures : elle a surtout édicté les règles juridiques de la course aux colonies (scramble for Africa).',
      explanation: 'L\'Acte général de Berlin imposait qu\'une puissance occupant la côte ne pouvait prétendre à l\'intérieur des terres (hinterland) sans y déployer une occupation réelle et notifier les autres puissances.',
      steps: [
        '1. Contexte : rivalités franco-belges et britanniques dans le bassin du Congo.',
        '2. Rôle d\'Otto von Bismarck et des 14 puissances signataires.',
        '3. Règle cardinale : principe d\'occupation effective et notification officielle.',
        '4. Conséquence : accélération brutale de la conquête militaire de l\'Afrique.'
      ]
    },
    {
      id: 'q-1s-hg-col-2',
      exerciseId: 'ex-1s-hg-col-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Les grandes figures des résistances gabonaises',
      microConcept: 'La pénétration coloniale au Gabon s\'est heurtée à de farouches résistances armées : Emane Tole (chef fang du Komo luttant pour la liberté du commerce de l\'ébène et du caoutchouc jusqu\'à sa déportation en 1902), Nyonda Makita (chef punu de la Ngounié menant la guerre de 1907 à 1911 contre l\'impôt de capitation et le portage forcé), et Mbombey A Gnangue (résistance des Mitsogo dans la boucle de la Ngounié).',
      hint: 'Ces héros nationaux ont refusé la dépossession de leurs terres, le portage forcé et le monopole des compagnies concessionnaires.',
      prompt: 'Quelle cause socio-économique essentielle a déclenché le soulèvement armé héroïque conduit par le chef punu Nyonda Makita entre 1907 et 1911 dans le sud du Gabon ?',
      options: [
        'Le refus de l\'impôt de capitation injuste, du travail forcé et du portage épuisant imposés par l\'administration coloniale française',
        'Une dispute religieuse entre églises protestantes et catholiques',
        'La volonté d\'émigrer vers l\'Afrique du Sud',
        'Le refus de la vaccination contre la variole'
      ],
      correctAnswer: 'Le refus de l\'impôt de capitation injuste, du travail forcé et du portage épuisant imposés par l\'administration coloniale française',
      commonMistake: 'Réduire ces guerres de résistance à de simples querelles tribales, alors qu\'il s\'agissait d\'une lutte digne et organisée contre l\'oppression fiscale et l\'asservissement colonial.',
      explanation: 'Nyonda Makita et ses guerriers ont défié l\'autorité coloniale dans la vallée de la Ngounié pour rejeter l\'impôt par tête (capitation), le système des compagnies concessionnaires et la brutalité des gardes régionaux, s\'inscrivant parmi les plus grands martyrs de l\'histoire gabonaise.',
      steps: [
        '1. Instauration de l\'impôt de capitation et des concessions d\'exploitation.',
        '2. Révolte armée menée par Nyonda Makita dans la Ngounié (1907-1911).',
        '3. Répression militaire coloniale et capture du leader.',
        '4. Portée historique : symbole fondateur de la résistance patriotique gabonaise.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 2. LES GUERRES MONDIALES & LE GABON DANS LA FRANCE LIBRE
  // -------------------------------------------------------------------
  'skill-1s-hg-guerres-mondiales': [
    {
      id: 'q-1s-hg-gm-1',
      exerciseId: 'ex-1s-hg-gm-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Ralliement du Gabon à la France Libre (1940)',
      microConcept: 'Durant la Seconde Guerre mondiale, après l\'appel du 18 juin 1940 du général de Gaulle, toute l\'Afrique Équatoriale Française (AEF) se rallie à la France Libre sous l\'impulsion du gouverneur Félix Éboué. Le Gabon, initialement resté fidèle au régime de Vichy, est rallié en novembre 1940 après la bataille de Libreville, faisant de l\'AEF le socle territorial de la libération de la France.',
      hint: 'Félix Éboué, premier gouverneur noir, a joué un rôle décisif depuis Fort-Lamy et Brazzaville.',
      prompt: 'Quel rôle géostratégique capital l\'Afrique Équatoriale Française (dont faisait partie le Gabon) a-t-elle joué pour le général de Gaulle et la France Libre à partir de 1940 ?',
      options: [
        'Elle a constitué la première base territoriale souveraine et le point de départ du redressement militaire de la France Libre',
        'Elle est restée entièrement neutre sans envoyer de troupes ni de matières premières',
        'Elle a signé un pacte d\'alliance avec les forces de l\'Axe à Berlin',
        'Elle a cédé toutes ses réserves de pétrole à l\'URSS'
      ],
      correctAnswer: 'Elle a constitué la première base territoriale souveraine et le point de départ du redressement militaire de la France Libre',
      commonMistake: 'Oublier que sans le ralliement de l\'AEF en 1940, la France Libre n\'avait aucun territoire physique à administrer pour lever des armées et battre monnaie.',
      explanation: 'Le ralliement de l\'Afrique centrale a apporté au général de Gaulle une légitimité territoriale incontestable, des milliers de tirailleurs dévoués et des ressources indispensables pour reconquérir le territoire national.',
      steps: [
        '1. Défaite française de juin 1940 et création du régime de Vichy.',
        '2. Ralliement de l\'AEF sous la houlette de Félix Éboué (août-novembre 1940).',
        '3. Brazzaville devient temporairement la capitale de la France Libre.',
        '4. Déploiement des forces militaires vers le Fezzan et la Méditerranée.'
      ]
    },
    {
      id: 'q-1s-hg-gm-2',
      exerciseId: 'ex-1s-hg-gm-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : La Conférence de Brazzaville (1944) et ses répercussions',
      microConcept: 'La Conférence de Brazzaville (30 janvier - 8 février 1944), présidée par De Gaulle et René Pleven, réunit les gouverneurs coloniaux pour repenser les liens de l\'Empire. Si elle écarte l\'indépendance immédiate, elle préconise l\'abolition du travail forcé (loi Houphouët-Boigny de 1946), l\'accès des Africains aux assemblées représentatives et le développement sanitaire et scolaire.',
      hint: 'Cette conférence historique a ouvert la voie aux réformes politiques de l\'après-guerre en Afrique francophone.',
      prompt: 'Parmi les avancées sociales et institutionnelles annoncées lors de la Conférence de Brazzaville de 1944, laquelle a immédiatement soulagé les populations gabonaises et africaines ?',
      options: [
        'L\'amorce de la suppression du travail forcé et l\'élargissement de la citoyenneté et de la représentation politique',
        'L\'interdiction de toute langue locale dans les foyers',
        'L\'annexion totale de l\'Afrique comme départements européens sans autonomie',
        'La confiscation définitive des terres villageoises'
      ],
      correctAnswer: 'L\'amorce de la suppression du travail forcé et l\'élargissement de la citoyenneté et de la représentation politique',
      commonMistake: 'Croire que Brazzaville proclamait l\'indépendance totale : elle ouvrait une nouvelle politique d\'émancipation progressive conduisant à l\'Union Française et à la loi-cadre Defferre de 1956.',
      explanation: 'La conférence a marqué un tournant psychologique en reconnaissant la contribution décisive des Africains à l\'effort de guerre et en programmant la fin du code de l\'indigénat et du travail forcé.',
      steps: [
        '1. Discours d\'ouverture du général de Gaulle à Brazzaville (janvier 1944).',
        '2. Reconnaissance du rôle des colonies dans la victoire.',
        '3. Recommandations : abolition du travail forcé, éducation de masse, représentation démocratique.',
        '4. Application constitutionnelle en 1946 (création de l\'Assemblée territoriale du Gabon).'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 3. GÉOGRAPHIE PHYSIQUE & MILIEU NATUREL DU GABON
  // -------------------------------------------------------------------
  'skill-1s-hg-geographie-gabon-naturel': [
    {
      id: 'q-1s-hg-geo-nat-1',
      exerciseId: 'ex-1s-hg-geo-nat-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Le fleuve Ogooué & le réseau hydrographique',
      microConcept: 'L\'Ogooué est la colonne vertébrale hydrographique du Gabon : long de 1 200 km, son bassin versant draine près de 80 % du territoire national (223 800 km²). Ses deux affluents majeurs sont l\'Ivindo (en rive droite) et la Ngounié (en rive gauche). Il termine sa course par un vaste delta marécageux dans l\'océan Atlantique près de Port-Gentil.',
      hint: 'Identifie la longueur approximative et les deux principaux affluents de l\'Ogooué.',
      prompt: 'Quelles sont les deux rivières majeures qui constituent les principaux affluents (rive droite et rive gauche) du fleuve Ogooué au Gabon ?',
      options: [
        'L\'Ivindo et la Ngounié',
        'Le Congo et l\'Oubangui',
        'Le Nil et le Zambèze',
        'La Seine et la Loire'
      ],
      correctAnswer: 'L\'Ivindo et la Ngounié',
      commonMistake: 'Confondre le fleuve Ogooué avec le fleuve Congo ou oublier que la Ngounié et l\'Ivindo sont ses deux artères tributaires majeures.',
      explanation: 'L\'Ivindo (qui traverse Makokou) et la Ngounié (qui traverse Mouila) drainent l\'est et le sud du pays pour gonfler l\'Ogooué avant son passage à Lambaréné et son embouchure océanique.',
      steps: [
        '1. Source de l\'Ogooué : plateaux Batéké (Congo/Gabon).',
        '2. Affluent rive droite : Ivindo.',
        '3. Affluent rive gauche : Ngounié.',
        '4. Embouchure : delta atlantique au sud de Port-Gentil.'
      ]
    },
    {
      id: 'q-1s-hg-geo-nat-2',
      exerciseId: 'ex-1s-hg-geo-nat-2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Les trois grandes unités morphologiques du relief gabonais',
      microConcept: 'Le relief du Gabon comprend trois grands ensembles : 1. Les plaines côtières sédimentaires bordant l\'Atlantique ; 2. Les massifs montagneux et collines intérieures (Monts de Cristal au nord-ouest, Monts Chaillu au centre-sud avec le mont Milondo culminant à 1 020 m) ; 3. Les plateaux intérieurs (plateaux de l\'Ogooué-Ivindo et plateaux Batéké au sud-est).',
      hint: 'Plaine côtière, massifs montagneux (Chaillu, Cristal) et plateaux intérieurs (Batéké).',
      prompt: 'Parmi les massifs montagneux suivants, lequel traverse la région centrale et méridionale du Gabon en abritant les plus hauts sommets du pays (massif du Chaillu) ?',
      options: [
        'Les monts Chaillu (avec le mont Milondo et le mont Iboundji)',
        'Les monts du Jura',
        'La chaîne de l\'Himalaya',
        'Le massif du mont Blanc'
      ],
      correctAnswer: 'Les monts Chaillu (avec le mont Milondo et le mont Iboundji)',
      commonMistake: 'Confondre les monts de Cristal (situés au nord-est de Libreville dans l\'Estuaire) avec le massif du Chaillu qui occupe le sud-centre du Gabon.',
      explanation: 'Le massif du Chaillu est le grand château d\'eau montagneux du centre-sud du Gabon, séparant le bassin de la Ngounié de celui de l\'Ogooué supérieur.',
      steps: [
        '1. Nord-ouest : Monts de Cristal.',
        '2. Centre-sud : Massif du Chaillu (hauts sommets).',
        '3. Sud-est : Plateaux Batéké.',
        '4. Ouest : Plaines littorales et marécages côtiers.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 4. GÉOGRAPHIE HUMAINE & ÉCONOMIQUE DU GABON
  // -------------------------------------------------------------------
  'skill-1s-hg-geographie-gabon-humain': [
    {
      id: 'q-1s-hg-geo-hum-1',
      exerciseId: 'ex-1s-hg-geo-hum-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Répartition démographique & macrocéphalie urbaine',
      microConcept: 'Avec environ 2,3 millions d\'habitants sur 267 667 km², le Gabon a une densité moyenne très faible (~8,5 hab/km²). Cependant, cette population est hyper-concentrée : le taux d\'urbanisation dépasse 88 %, et plus de la moitié des Gabonais résident dans la seule agglomération de Libreville-Owendo-Akanda.',
      hint: 'Une très faible densité générale masquant une concentration extrême dans les villes littorales.',
      prompt: 'Quelle est la caractéristique démographique frappante de la répartition spatiale de la population au Gabon ?',
      options: [
        'Une très faible densité moyenne nationale avec une concentration urbaine massive à Libreville et Port-Gentil',
        'Une répartition rigoureusement uniforme de 100 habitants par kilomètre carré dans chaque forêt',
        'Une population rurale représentant 95 % des habitants dispersés dans les villages',
        'Une absence totale de population dans les villes littorales'
      ],
      correctAnswer: 'Une très faible densité moyenne nationale avec une concentration urbaine massive à Libreville et Port-Gentil',
      commonMistake: 'Croire que le Gabon est un pays à dominante rurale alors qu\'il possède l\'un des taux d\'urbanisation les plus élevés d\'Afrique subsaharienne (près de 90 %).',
      explanation: 'Le Gabon présente un contraste saisissant : d\'immenses espaces forestiers quasi inhabités à l\'intérieur, et deux pôles urbains majeurs (Libreville capitale politique et Port-Gentil capitale pétrolière et industrielle) abritant l\'immense majorité de la population.',
      steps: [
        '1. Population estimée : ~2,3 millions d\'habitants.',
        '2. Densité globale : moins de 9 hab/km².',
        '3. Taux d\'urbanisation record : ~89 %.',
        '4. Macrocéphalie de Libreville concentrant services et emplois.'
      ]
    },
    {
      id: 'q-1s-hg-geo-hum-2',
      exerciseId: 'ex-1s-hg-geo-hum-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Les piliers de l\'économie gabonaise (Pétrole, Manganèse, Bois)',
      microConcept: 'L\'économie gabonaise repose historiquement sur une économie de rente extractrice : le pétrole (environ 70 % des recettes d\'exportation), le manganèse de Moanda (le Gabon est le 2e producteur mondial de minerai riche grâce à la Comilog), et la filière bois (interdiction d\'exportation des grumes brutes depuis 2010 pour développer la transformation locale dans la ZERP de Nkok).',
      hint: 'La Zone Économique Spéciale de Nkok a été créée pour transformer localement le bois au lieu de l\'exporter sous forme de grumes brutes.',
      prompt: 'Quelle décision stratégique prise en 2010 a profondément transformé la filière forestière gabonaise en favorisant l\'industrialisation locale à Nkok ?',
      options: [
        'L\'interdiction formelle d\'exporter des grumes de bois brutes pour imposer la transformation industrielle locale (sciage, déroulage, contreplaqué)',
        'L\'abattage systématique de tous les arbres du pays sans replantation',
        'L\'interdiction de fabriquer des meubles en bois au Gabon',
        'La vente exclusive de toute la forêt gabonaise à une seule entreprise étrangère'
      ],
      correctAnswer: 'L\'interdiction formelle d\'exporter des grumes de bois brutes pour imposer la transformation industrielle locale (sciage, déroulage, contreplaqué)',
      commonMistake: 'Penser que le Gabon a interdit l\'exploitation du bois : le Gabon a interdit l\'exportation de bois non transformé pour créer de la valeur ajoutée et des emplois industriels sur place.',
      explanation: 'La décision historique de 2010 a permis l\'essor fulgurant de la Zone Économique à Régime Privilégié (ZERP) de Nkok, faisant du Gabon le premier producteur et exportateur africain de contreplaqué.',
      steps: [
        '1. Constat : exportation de grumes brutes sans création de valeur locale.',
        '2. Réforme de 2010 : interdiction stricte de sortie des grumes non usinées.',
        '3. Création du guichet unique et du cluster industriel de Nkok.',
        '4. Résultats : création de milliers d\'emplois industriels et valorisation des essences durables (Okoumé).'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 5. MÉTHODOLOGIE OFFICIELLE DE L'ÉPREUVE (DISSERTATION & COMMENTAIRE DE CARTE)
  // -------------------------------------------------------------------
  'skill-1s-hg-methode-eaf': [
    {
      id: 'q-1s-hg-meth-1',
      exerciseId: 'ex-1s-hg-meth-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Règle de délimitation de la dissertation',
      microConcept: 'Dans une dissertation d\'histoire ou de géographie au Gabon, l\'introduction doit impérativement comporter : 1. La définition des termes du sujet ; 2. La délimitation spatiale (le cadre géographique précis) et temporelle (les bornes chronologiques en histoire) ; 3. La problématique ; 4. L\'annonce du plan équilibré en 2 ou 3 parties.',
      hint: 'En histoire, on ne peut pas disserter sans fixer la date de début et la date de fin du sujet.',
      prompt: 'Dans l\'introduction d\'une dissertation historique portant sur « Les résistances à la colonisation au Gabon (1885-1914) », quel rôle jouent les bornes 1885 et 1914 ?',
      options: [
        'Elles fixent la délimitation temporelle obligatoire du sujet (de la fin de la conférence de Berlin au déclenchement de la Grande Guerre)',
        'Ce sont de simples suggestions optionnelles que le candidat peut ignorer pour parler de l\'Antiquité',
        'Elles représentent le nombre de pages minimal et maximal à rédiger',
        'Elles indiquent l\'âge des généraux coloniaux'
      ],
      correctAnswer: 'Elles fixent la délimitation temporelle obligatoire du sujet (de la fin de la conférence de Berlin au déclenchement de la Grande Guerre)',
      commonMistake: 'Parler d\'événements survenus après 1914 (hors-sujet chronologique) ou ignorer le contexte de 1885.',
      explanation: 'Le non-respect du cadre chronologique ou spatial expose à la sanction immédiate du hors-sujet. 1885 marque l\'ouverture de la conquête suite à Berlin, et 1914 marque la fin de la première vague de résistances coutumières avec le début du conflit mondial.',
      steps: [
        '1. Borne initiale : 1885 (Acte général de Berlin).',
        '2. Borne finale : 1914 (Déclenchement Première Guerre mondiale).',
        '3. Règle méthodologique : tout fait cité doit impérativement se situer dans cet intervalle.'
      ]
    }
  ]
};
