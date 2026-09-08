import { ExerciseQuestion } from '../types';

// =========================================================================
// HISTOIRE-GÉOGRAPHIE SECONDE (PROGRAMME OFFICIEL - GABON)
// Thème : Les apports des grandes civilisations de la préhistoire à l’époque contemporaine
// =========================================================================

// -------------------------------------------------------------------------
// CHAPITRE 1 : LES APPORTS DE LA CIVILISATION AFRICAINE
// Leçon 1 : Civilisation préhistorique (premiers hommes, chasse, cueillette, sépultures, sites gabonais Lopé/Ogooué)
// Leçon 2 : Métallurgie du fer (découverte, réduction, diffusion, outillage agricole & armes)
// Leçon 3 : Tradition orale (contes, mythes, Mvet, palabre, rites gabonais : Bwiti, Ndjembe, Mwiri)
// Leçon 4 : Art africain (masques Punu Okuyi, reliquaires Byeri Fang & Kota, influence universelle)
// -------------------------------------------------------------------------
export const HISTOIRE_AFRICAINE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-hg-afrique-1',
    exerciseId: 'ex-hg-afrique-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Berceau de l\'Humanité & Préhistoire',
    microConcept: 'L\'Afrique est unanimement reconnue par la paléoanthropologie comme le berceau de l\'humanité (découvertes d\'hominidés fossiles comme Toumaï, Lucy, Homo habilis). Les premiers groupes humains y ont inventé les premières techniques : taille du silex (galets aménagés de l\'Oldowayen, bifaces acheuléens), maîtrise du feu, organisation de la chasse, cueillette et premières sépultures rituelles témoignant de la pensée symbolique et du respect des morts.',
    hint: 'Rappelle-toi où sont apparus les plus anciens fossiles d\'hominidés et d\'outils façonnés au monde.',
    prompt: 'Sur le plan historique et archéologique, quel apport fondamental et universel de l\'Afrique à l\'histoire humaine la communauté scientifique contemporaine reconnaît-elle sans équivoque ?',
    options: [
      'L\'Afrique est le berceau de l\'humanité, où sont apparus les premiers hominidés, les premiers outils lithiques et les premières sépultures rituelles',
      'L\'Afrique a inventé l\'imprimerie à caractères métalliques mobiles dès l\'époque paléolithique',
      'L\'Afrique s\'est cantonnée à un rôle d\'emprunt tardif de technologies créées exclusivement en Europe et en Asie',
      'L\'Afrique a développé une écriture alphabétique moderne avant toute apparition de langage parlé'
    ],
    correctAnswer: 'L\'Afrique est le berceau de l\'humanité, où sont apparus les premiers hominidés, les premiers outils lithiques et les premières sépultures rituelles',
    commonMistake: 'Penser que l\'Afrique n\'a pas participé aux grandes étapes de la préhistoire alors que les sites de la vallée du Rift et les gisements d\'Afrique centrale (notamment les terrasses de l\'Ogooué et le parc de la Lopé au Gabon) prouvent une très ancienne occupation humaine.',
    explanation: 'Les preuves paléontologiques et archéologiques (ossements fossiles, galets aménagés, bifaces et sépultures) démontrent que l\'Afrique est le foyer d\'origine de la lignée humaine (berceau de l\'humanité) et des premières innovations culturelles (taille de la pierre, chasse, cueillette organisée et rites funéraires).',
    steps: [
      'Identification du rôle de l\'Afrique dans la préhistoire mondiale : apparition des premiers hominidés (Australopithèques, genre Homo).',
      'Apports techniques essentiels : fabrication des premiers outils en pierre taillée (Oldowayen, Acheuléen).',
      'Apports symboliques majeurs : inhumation délibérée des défunts avec offrandes, attestant d\'une croyance en un au-delà et de la solidarité du groupe.',
      'Cas du Gabon : présence de vestiges paléolithiques et néolithiques majeurs dans la vallée de la Lopé et le long de l\'Ogooué.'
    ]
  },
  {
    id: 'q-2s-hg-afrique-2',
    exerciseId: 'ex-hg-afrique-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Métallurgie du Fer & Économie',
    microConcept: 'La découverte et la maîtrise de la réduction du minerai de fer dans des bas-fourneaux en terre réfractaire ont constitué une véritable révolution technique et sociale en Afrique subsaharienne. Les forgerons ont fabriqué des houes pour défricher la forêt tropicale dense et intensifier l\'agriculture, ainsi que des pointes de flèches, de lances et des machettes pour la chasse et la défense.',
    hint: 'Pense à la transformation du travail de la terre et à la conquête de la grande forêt équatoriale par les peuples bantous.',
    prompt: 'En quoi l\'adoption de la métallurgie du fer a-t-elle profondément transformé les sociétés africaines anciennes, notamment lors des migrations des peuples bantous à travers le Gabon et l\'Afrique centrale ?',
    options: [
      'Elle a permis de fabriquer des outils agricoles robustes (houes, haches) pour défricher la forêt dense et des armes plus efficaces, stimulant l\'agriculture et la démographie',
      'Elle a entraîné l\'abandon immédiat de toute agriculture au profit exclusif du commerce des épices maritimes',
      'Elle a imposé l\'usage exclusif du bronze et du cuivre sans jamais transformer la vie quotidienne des paysans',
      'Elle a ralenti la croissance démographique en détruisant toutes les ressources forestières'
    ],
    correctAnswer: 'Elle a permis de fabriquer des outils agricoles robustes (houes, haches) pour défricher la forêt dense et des armes plus efficaces, stimulant l\'agriculture et la démographie',
    commonMistake: 'Sous-estimer l\'impact de l\'outil en fer : la houe et la hache en fer ont permis d\'ouvrir la canopée équatoriale pour la culture du bananier et de l\'igname, moteur de l\'essor des communautés bantoues.',
    explanation: 'La métallurgie du fer (attestée très tôt en Afrique, comme à Nok ou dans les fourneaux anciens répertoriés au Gabon) a doté les communautés d\'instruments tranchants et résistants (haches pour abattre les arbres géants, houes pour labourer le sol forestier, harpons et lances), entraînant un bond agricole, une sédentarisation accrue et l\'expansion migratoire.',
    steps: [
      'Identification de la technique : réduction directe du minerai de fer à haute température dans des bas-fourneaux avec soufflets.',
      'Applications agricoles : remplacement des bâtons à fouir en bois par des houes et haches métalliques, facilitant le défrichage.',
      'Conséquences socio-démographiques : abondance alimentaire, sécurité accrue contre les prédateurs, structuration des castes de forgerons respectés.',
      'Ancrage gabonais : découvertes de scories et de bas-fourneaux anciens témoignant d\'une sidérurgie indigène plurimillénaire.'
    ]
  },
  {
    id: 'q-2s-hg-afrique-3',
    exerciseId: 'ex-hg-afrique-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Tradition Orale, Mvet & Arbre à Palabre',
    microConcept: 'La tradition orale africaine n\'est pas une simple absence d\'écriture, mais une institution rigoureuse de transmission du savoir, de l\'histoire, du droit coutumier et de la morale. Elle s\'incarne dans les contes, légendes, l\'épopée monumentale du Mvet (art total associant harpe-cithare, poésie et chorégraphie chez les Fang) et l\'arbre à palabre, lieu de démocratie participative et de résolution consensuelle des litiges.',
    hint: 'La palabre traditionnelle a pour objectif premier de rétablir l\'harmonie et la cohésion du groupe plutôt que d\'imposer une punition unilatérale.',
    prompt: 'Au Gabon et en Afrique traditionnelle, quelle est la fonction sociopolitique primordiale de l\'institution de « l\'arbre à palabre » lors du règlement d\'un conflit au sein du village ?',
    options: [
      'Permettre un débat public contradictoire où chacun s\'exprime librement pour rechercher un consensus pacifique et restaurer l\'équilibre communautaire',
      'Donner tous les pouvoirs à un juge étranger pour infliger des peines de prison immédiates sans écouter les parties',
      'Organiser un tirage au sort aléatoire pour décider arbitrairement de la culpabilité des accusés',
      'Bannir automatiquement les deux familles en litige hors du territoire sans aucune négociation'
    ],
    correctAnswer: 'Permettre un débat public contradictoire où chacun s\'exprime librement pour rechercher un consensus pacifique et restaurer l\'équilibre communautaire',
    commonMistake: 'Assimiler la palabre à un bavardage inutile, alors qu\'il s\'agit d\'un parlement villageois et d\'un tribunal coutumier hautement formalisé fondé sur l\'art de l\'éloquence et la recherche du compromis.',
    explanation: 'L\'arbre à palabre constitue une institution démocratique et judiciaire majeure des civilisations africaines. Sous l\'autorité morale des anciens et des sages, les parties confrontent leurs arguments à travers des proverbes et des récits, avec pour finalité de réconcilier les membres de la communauté et de préserver la paix sociale.',
    steps: [
      'Comprendre la nature de la palabre : espace public de dialogue ouvert, d\'écoute et de diplomatie locale.',
      'Rôle des garants de la tradition orale : les patriarches, notables et conteurs régulent les prises de parole par des proverbes chargés de sagesse.',
      'Objectif fondamental : réconciliation et restauration de l\'harmonie sociale plutôt qu\'une simple vengeance rétributive.',
      'Patrimoine immatériel gabonais : résonance directe avec les récits généalogiques et l\'épopée du Mvet contée par le Mbom-Mvet.'
    ]
  },
  {
    id: 'q-2s-hg-afrique-4',
    exerciseId: 'ex-hg-afrique-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Rites Initiatiques Gabonais (Bwiti, Ndjembe, Mwiri)',
    microConcept: 'Les sociétés gabonaises traditionnelles s\'organisent autour de sociétés initiatiques initiant les jeunes aux mystères de la vie, de la mort, des ancêtres et de l\'ordre moral : le Bwiti (rite majeur d\'origine mitsogo/apindji, répandu chez les Fang avec l\'usage de la plante sacrée Tabernanthe iboga), le Mwiri (société secrète masculine garantissant la discipline, la justice et la protection des forêts) et le Ndjembe (société initiatique féminine chez les Myènè et peuples côtiers pour la cohésion et le pouvoir spirituel des femmes).',
    hint: 'Associe chaque rite gabonais à sa fonction et à son genre : le Bwiti (quête de vision et culte des ancêtres), le Mwiri (ordre masculin) et le Ndjembe (initiation féminine).',
    prompt: 'Dans le patrimoine culturel et spirituel du Gabon, quelle association caractérise fidèlement les rites initiatiques traditionnels Bwiti, Mwiri et Ndjembe ?',
    options: [
      'Le Bwiti est un rite de passage et de communion avec les ancêtres (usage de l\'iboga) ; le Mwiri assure l\'ordre et la justice chez les hommes ; le Ndjembe est une société initiatique féminine',
      'Le Bwiti est un système d\'écriture hiéroglyphique ; le Mwiri est une monnaie métallique ; le Ndjembe est un code de navigation maritime',
      'Le Bwiti, le Mwiri et le Ndjembe sont trois styles de poteries utilitaires sans aucune dimension spirituelle ou communautaire',
      'Ces trois rites étaient réservés exclusivement aux marchands européens venus s\'installer sur l\'estuaire du Komo au XIXe siècle'
    ],
    correctAnswer: 'Le Bwiti est un rite de passage et de communion avec les ancêtres (usage de l\'iboga) ; le Mwiri assure l\'ordre et la justice chez les hommes ; le Ndjembe est une société initiatique féminine',
    commonMistake: 'Confondre les sphères initiatiques : le Ndjembe est l\'institution féminine par excellence garantissant l\'autonomie et la protection spirituelle des femmes, tandis que le Mwiri est masculin et le Bwiti structure la vision du monde et la relation aux ancêtres.',
    explanation: 'Au Gabon, ces sociétés initiatiques constituent l\'armature éthique, éducative et judiciaire de la société traditionnelle. Elles enseignent les lois coutumières, la maîtrise de soi, les vertus thérapeutiques des plantes de la forêt et le respect absolu de la mémoire des ancêtres, participant aujourd\'hui à un syncrétisme dynamique.',
    steps: [
      'Identifier le Bwiti : rite initiatique initié par les peuples pygmées, développé par les Mitsogo et adopté par les Fang, centré sur la renaissance spirituelle.',
      'Identifier le Ndjembe : rite de passage féminin célébrant la fertilité, la solidarité entre femmes et l\'élévation spirituelle.',
      'Identifier le Mwiri : ordre masculin exerçant un rôle de régulation coutumière, de protection des ressources naturelles et de police villageoise.',
      'Comprendre le métissage contemporain : coexistence vivante entre traditions séculaires et christianisme au Gabon.'
    ]
  },
  {
    id: 'q-2s-hg-afrique-5',
    exerciseId: 'ex-hg-afrique-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : L\'Art Africain & Rayonnement Universel',
    microConcept: 'L\'art plastique traditionnel africain (particulièrement les masques Okuyi/Mukudji punu du sud du Gabon au visage blanchi au kaolin et coiffure soignée, les têtes de reliquaires Byeri des Fang et les gardiens de reliquaires Kota plaqués de laiton et cuivre) dépasse la simple fonction décorative : ce sont des objets rituels sacrés reliant les vivants au monde invisible. Au début du XXe siècle, leur stylisation géométrique pure et leur expressivité ont inspiré la rupture majeure de l\'art moderne occidental (cubisme de Picasso, fauvisme).',
    hint: 'Pense aux masques blancs de l\'Okuyi chez les Punu et aux reliquaires Kota du Gabon qui ont fasciné les peintres avant-gardistes parisiens en 1907.',
    prompt: 'Quelle est la signification profonde de l\'art traditionnel gabonais (masques Okuyi des Punu, reliquaires Byeri fang et figures Kota) et quelle influence décisive a-t-il exercée sur l\'art universel au début du XXe siècle ?',
    options: [
      'Ce sont des œuvres sacrées reliant les vivants aux ancêtres ; leur esthétique audacieuse et synthétique a révolutionné l\'art moderne occidental (naissance du cubisme)',
      'Ce sont des jouets profanes destinés aux enfants sans valeur spirituelle, rejetés par tous les artistes du XXe siècle',
      'Ce sont des portraits réalistes d\'empereurs romains importés par bateaux au Moyen Âge',
      'Ce sont de simples récipients alimentaires métalliques sans aucune recherche formelle ni signification symbolique'
    ],
    correctAnswer: 'Ce sont des œuvres sacrées reliant les vivants aux ancêtres ; leur esthétique audacieuse et synthétique a révolutionné l\'art moderne occidental (naissance du cubisme)',
    commonMistake: 'Réduire l\'art africain à de « l\'artisanat naïf », ignorant qu\'il s\'agit d\'une conceptualisation hautement savante du sacré qui a inspiré Picasso (*Les Demoiselles d\'Avignon*), Braque, Modigliani et Derain.',
    explanation: 'Au Gabon, le masque Punu Okuyi figure l\'esprit bienveillant d\'une revenante d\'une beauté sublime (teinte blanche du kaolin, scarifications frontales, yeux étirés), tandis que les figures de reliquaires Byeri (Fang) et Kota veillent sur les reliques des ancêtres fondateurs. La force plastique de ces chefs-d\'œuvre a bouleversé la conception occidentale de la création artistique.',
    steps: [
      'Fonction originelle sacrée : lien médiateur entre le monde des vivants et l\'au-delà protecteur des ancêtres.',
      'Caractéristiques esthétiques gabonaises : sérénité et blancheur lunaire du masque Okuyi, géométrisation majestueuse des plaques de cuivre et laiton Kota, force méditative du Byeri fang.',
      'Apport universel décisif : déconstruction des codes académiques de la perspective et de l\'imitation servile de la nature dans l\'art mondial.',
      'Héritage contemporain : reconnaissance de ces œuvres comme chefs-d\'œuvre du patrimoine mondial de l\'humanité.'
    ]
  },
  {
    id: 'q-2s-hg-afrique-methode-intro',
    exerciseId: 'ex-hg-afrique-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode Dissertation (Normes Gabon) - L\'Amorce de l\'Introduction',
    microConcept: 'Selon la méthodologie officielle de la composition d\'Histoire-Géo au Gabon (Sujet de Type 1), l\'introduction comporte obligatoirement trois parties distinctes en trois paragraphes (avec retour à la ligne) : 1) L\'amorce, 2) La problématique, 3) L\'annonce du plan. L\'amorce constitue le premier contact avec le correcteur : elle présente le sujet avec précision (cadre spatio-temporel et mise en contexte) pour éviter impérativement le hors-sujet ou les platitudes passe-partout.',
    hint: 'L\'amorce officielle doit situer précisément l\'Afrique préhistorique et ancienne dans l\'espace et le temps, sans formule creuse du genre « De tout temps... ».',
    prompt: 'Sur le sujet de composition : « Les apports de la civilisation africaine : des origines de l\'humanité à la métallurgie du fer », quelle proposition constitue une véritable AMORCE conforme aux normes de l\'inspection gabonaise ?',
    options: [
      'Depuis la nuit des temps, l\'humanité a toujours voyagé et les hommes ont toujours cherché à manger pour survivre sur la terre.',
      'Reconnue par la paléoanthropologie comme le berceau de l\'humanité grâce aux gisements fossiles de la vallée du Rift et d\'Afrique centrale, l\'Afrique a été le théâtre des premières innovations techniques et de l\'émergence d\'une sidérurgie ancienne.',
      'Nous allons vous expliquer dans ce devoir tout ce que l\'Afrique a inventé, puis nous parlerons du fer et enfin de l\'agriculture.',
      'Le fer est un métal lourd extrait des mines modernes du Haut-Ogooué à Moanda pour fabriquer des rails de chemin de fer au XXIe siècle.'
    ],
    correctAnswer: 'Reconnue par la paléoanthropologie comme le berceau de l\'humanité grâce aux gisements fossiles de la vallée du Rift et d\'Afrique centrale, l\'Afrique a été le théâtre des premières innovations techniques et de l\'émergence d\'une sidérurgie ancienne.',
    commonMistake: 'Utiliser des formules vagues et banales (« Depuis des millénaires », « De tout temps ») ou faire un anachronisme hors-sujet en parlant de l\'époque contemporaine.',
    explanation: 'Une amorce réussie selon les critères gabonais situe le contexte historique précis (berceau de l\'humanité, premières techniques, sidérurgie ancienne) et prépare directement le lecteur aux enjeux du sujet, sans aucune platitude.',
    steps: [
      'Règle formelle gabonaise : l\'introduction se divise en 3 paragraphes obligatoires (Amorce, Problématique, Annonce du plan) avec un saut/retour à la ligne pour chacun.',
      'Objectif de l\'amorce : accrocher le correcteur et cadrer spatialement et temporellement le sujet.',
      'Écueils éliminatoires : le hors-sujet et les phrases généralistes creuses dénuées de repères historiques précis.'
    ]
  },
  {
    id: 'q-2s-hg-afrique-methode-dev',
    exerciseId: 'ex-hg-afrique-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode Dissertation (Normes Gabon) - Règle d\'Argumentation (AEI)',
    microConcept: 'Dans le développement d\'une composition gabonaise, chaque partie comporte une phrase chapeau inaugurale, puis des paragraphes argumentatifs rigoureux. Chaque argument doit impérativement respecter la formule canonique : 1) Connecteur logique introductif, 2) Idée/Affirmation expliquée clairement, 3) Illustration par un exemple historique précis (faits, dates, sites, objets).',
    hint: 'Repère le paragraphe qui contient un connecteur logique, une explication causale et un exemple historique ou archéologique précis.',
    prompt: 'Pour la sous-partie démontrant l\'impact agricole de la métallurgie en Afrique centrale et au Gabon, quel paragraphe respecte la règle d\'argumentation imposée (connecteur logique + explication claire + exemple précis) ?',
    options: [
      'En premier lieu, la maîtrise de la métallurgie du fer a révolutionné la production vivrière car elle a fourni aux paysans des outils tranchants et résistants pour défricher la dense forêt équatoriale, comme l\'attestent les haches et houes retrouvées sur les sites sidérurgiques anciens de la vallée de l\'Ogooué.',
      'Le fer est très utile. Les gens fabriquaient des choses en métal et c\'était bien meilleur que le bois pour faire pousser les plantes.',
      'D\'ailleurs, il faut savoir que la métallurgie du fer a été inventée un jour par des forgerons africains très intelligents sans que l\'on sache trop comment.',
      'Enfin, l\'agriculture moderne gabonaise utilise des tracteurs motorisés importés d\'Europe pour cultiver des palmiers à huile à Kango.'
    ],
    correctAnswer: 'En premier lieu, la maîtrise de la métallurgie du fer a révolutionné la production vivrière car elle a fourni aux paysans des outils tranchants et résistants pour défricher la dense forêt équatoriale, comme l\'attestent les haches et houes retrouvées sur les sites sidérurgiques anciens de la vallée de l\'Ogooué.',
    commonMistake: 'Énoncer une idée sans connecteur logique, ou donner un exemple sans expliquer le mécanisme de cause à effet qui relie l\'outil en fer à l\'essor agricole.',
    explanation: 'Ce paragraphe applique rigoureusement la norme : connecteur logique (« En premier lieu »), explication du mécanisme technique (outils tranchants pour ouvrir la forêt dense) et exemple historique géolocalisé (haches et houes des sites anciens de l\'Ogooué au Gabon).',
    steps: [
      '1. Connecteur logique : articulation claire du discours (« En premier lieu », « Par ailleurs », « De surcroît »).',
      '2. Explication : analyse approfondie du phénomène historique (cause et conséquence).',
      '3. Exemple probant : ancrage empirique précis (sites de l\'Ogooué, Lopé, vestiges sidérurgiques).'
    ]
  }
];

// -------------------------------------------------------------------------
// CHAPITRE 2 : LES APPORTS DES CIVILISATIONS ANTIQUES
// Leçon 1 : Vie scientifique et architecturale de l'Égypte antique
// Leçon 2 : Fonctionnement de la démocratie à Athènes
// Leçon 3 : Vie intellectuelle et culturelle dans la Grèce antique
// Leçon 4 : Institutions de la République romaine
// -------------------------------------------------------------------------
export const HISTOIRE_ANTIQUES_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-hg-antiques-1',
    exerciseId: 'ex-hg-antiques-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Égypte Antique : Sciences & Architecture',
    microConcept: 'La civilisation de l\'Égypte antique a légué des avancées scientifiques et techniques majeures : géométrie appliquée des arpenteurs (pour redéfinir les parcelles agricoles après chaque crue fertilisante du Nil), calendrier solaire de 365 jours (12 mois de 30 jours + 5 jours épagomènes), écriture sur papyrus et architecture monumentale en pierre appareillée (pyramides de Gizeh, hypostyles de Karnak et Louxor) témoignant d\'une prodigieuse maîtrise de l\'ingénierie et de l\'astronomie.',
    hint: 'Pense au rôle vital des crues du Nil qui obligeaient chaque année les Égyptiens à recalculer les limites des champs.',
    prompt: 'Quel besoin pratique lié au fleuve Nil a conduit les scribes et ingénieurs de l\'Égypte antique à développer des connaissances avancées en géométrie et en calcul de surfaces ?',
    options: [
      'Le re-bornage et la mesure précise des parcelles agricoles après l\'inondation annuelle du limon fertile',
      'La construction de bateaux à moteur à vapeur pour remonter le Nil jusqu\'au lac Victoria',
      'Le creusement de tunnels sous-marins reliant l\'Égypte à l\'Amérique du Sud',
      'L\'interdiction de toute culture agricole le long des berges du Nil'
    ],
    correctAnswer: 'Le re-bornage et la mesure précise des parcelles agricoles après l\'inondation annuelle du limon fertile',
    commonMistake: 'Croire que la géométrie égyptienne n\'était que théorique, alors qu\'elle était avant tout pratique (géométrie = mesure de la terre par les « tendeurs de corde »).',
    explanation: 'Chaque année, la crue du Nil effaçait les limites des terres cultivables. Pour redistribuer équitablement les parcelles et prélever les impôts pharaoniques, les arpenteurs égyptiens ont mis au point des formules de calcul d\'aires (rectangles, triangles, trapèzes) et de volumes, fondant ainsi les bases de la géométrie appliquée.',
    steps: [
      'Phénomène naturel : crue annuelle estivale du Nil déposant le limon noir fertile sur les berges cultivables.',
      'Problématique juridique et fiscale : effacement des bornes cadastrales délimitant les propriétés des paysans.',
      'Réponse scientifique : utilisation de cordes à nœuds réguliers (théorème du triangle 3-4-5 rectangle) pour recréer des angles droits et calculer les surfaces.',
      'Autres apports : papyrus comme support souple d\'écriture et calendrier solaire de 365 jours repris par Jules César.'
    ]
  },
  {
    id: 'q-2s-hg-antiques-2',
    exerciseId: 'ex-hg-antiques-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Démocratie Athénienne : Institutions & Tirage au Sort',
    microConcept: 'Au Ve siècle av. J.-C., Athènes invente la démocratie directe (du grec demos : peuple, et kratos : pouvoir). Les citoyens réunis à l\'Ecclésia sur la colline de la Pnyx votent les lois, la guerre et la paix. Les charges de la Boulè (conseil des 500 préparant les lois) et des tribunaux de l\'Héliée sont attribuées par tirage au sort (sortition) afin de garantir l\'égalité absolue entre citoyens et d\'éviter la confiscation oligarchique du pouvoir par les riches.',
    hint: 'Pour les Athéniens, l\'élection favorisait les personnes fortunées ou célèbres ; quel procédé était considéré comme le plus égalitaire ?',
    prompt: 'Dans la démocratie athénienne antique, pourquoi la majorité des magistratures et des fonctions de juges (Héliée) étaient-elles attribuées par tirage au sort plutôt que par élection ?',
    options: [
      'Pour garantir que chaque citoyen ordinaire ait une chance égale d\'exercer le pouvoir et empêcher les riches de confisquer les charges publiques',
      'Parce que personne ne savait compter les bulletins de vote lors des assemblées',
      'Pour obliger les rois de Sparte à venir diriger les procès civils à Athènes',
      'Parce que seuls les dieux de l\'Olympe devaient désigner un empereur à vie'
    ],
    correctAnswer: 'Pour garantir que chaque citoyen ordinaire ait une chance égale d\'exercer le pouvoir et empêcher les riches de confisquer les charges publiques',
    commonMistake: 'Considérer le tirage au sort comme archaïque ou hasardeux, alors qu\'il était vu à Athènes comme le principe démocratique par excellence, l\'élection étant jugée aristocratique.',
    explanation: 'À Athènes, le tirage au sort (à l\'aide de machines appelées klèrotèria) incarnait l\'égalité démocratique intégrale (isonomie). Pour permettre même aux citoyens les plus modestes de quitter leurs champs ou leurs ateliers pour siéger, Périclès a institué le « misthos », une indemnité journalière de compensation financière.',
    steps: [
      'Principe de l\'Ecclésia : assemblée générale de tous les citoyens libres et majeurs exerçant la souveraineté.',
      'Rôle du tirage au sort : désignation des 500 membres de la Boulè et des 6 000 juges de l\'Héliée pour un mandat court et non renouvelable.',
      'Principe d\'Isegoria : droit égal de chaque citoyen à monter à la tribune et à prendre la parole.',
      'Mécanisme d\'indemnisation : le misthos instauré par Périclès pour éliminer la barrière de la pauvreté.'
    ]
  },
  {
    id: 'q-2s-hg-antiques-3',
    exerciseId: 'ex-hg-antiques-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Limites d\'Athènes & Procédure d\'Ostracisme',
    microConcept: 'Bien que révolutionnaire, la démocratie athénienne comportait deux caractéristiques fondamentales étudiées en Seconde : ses limites strictes (exclusion totale de la citoyenneté pour les femmes, les métèques/étrangers domiciliés et la masse des esclaves, soit 85% de la population d\'Attique) et son mécanisme de défense institutionnelle : l\'ostracisme, vote annuel sur tessons de céramique (ostraka) bannissant pour 10 ans tout citoyen suspecté de vouloir confisquer la tyrannie.',
    hint: 'Pense au nom donné au tesson de terre cuite brisé servant de bulletin de vote pour bannir un citoyen ambitieux.',
    prompt: 'Quelle était la fonction du vote d\'« ostracisme » à Athènes et quelle était la limite sociale majeure de ce régime démocratique ?',
    options: [
      'Bannir temporairement pendant 10 ans un homme politique soupçonné d\'aspirer à la tyrannie ; la citoyenneté était réservée aux seuls hommes libres athéniens, excluant femmes, métèques et esclaves',
      'Exécuter immédiatement les esclaves révoltés ; le droit de vote était universel et accordé à tous les étrangers',
      'Élire le président de la république pour un mandat de 10 ans ; les femmes occupaient la majorité des postes de généraux',
      'Confisquer les richesses des soldats morts au combat pour bâtir des temples à Delphes'
    ],
    correctAnswer: 'Bannir temporairement pendant 10 ans un homme politique soupçonné d\'aspirer à la tyrannie ; la citoyenneté était réservée aux seuls hommes libres athéniens, excluant femmes, métèques et esclaves',
    commonMistake: 'Confondre l\'ostracisme avec une condamnation criminelle infamante : l\'homme ostracisé ne perdait ni ses biens ni ses terres, il s\'exilait 10 ans pour préserver l\'équilibre de la cité.',
    explanation: 'L\'ostracisme protégeait la cité contre l\'émergence d\'un tyran. Cependant, la démocratie athénienne était très exclusive : sur environ 300 000 habitants, seuls 30 000 à 40 000 hommes libres nés de père athénien et de mère fille de citoyen jouissaient des droits politiques.',
    steps: [
      'Procédure d\'ostracisme : rassemblement sur l\'Agora, inscription du nom du dirigeant dangereux sur un tesson de céramique (*ostrakon*).',
      'Conséquence : éloignement de la cité pendant une décennie sans confiscation patrimoniale.',
      'Limites démographiques : exclusion légale des femmes cantonnées au gynécée, des métèques (commerçants sans droits politiques) et des esclaves (biens meubles).',
      'Héritage : prise de conscience moderne de la nécessité de protéger les institutions tout en universalisant les droits civiques.'
    ]
  },
  {
    id: 'q-2s-hg-antiques-4',
    exerciseId: 'ex-hg-antiques-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Vie Intellectuelle Grecque : Philosophie & Théâtre',
    microConcept: 'La Grèce antique a opéré une rupture intellectuelle décisive : le passage du mythe au logos (la raison critique). Avec Socrate, Platon et Aristote, la philosophie explore la morale, la science et la politique. Le théâtre (tragédies d\'Eschyle et Sophocle, comédies d\'Aristophane) éduque les citoyens aux dilemmes civiques, tandis que les Jeux Olympiques et panhelléniques imposent une « trêve sacrée » (ekecheiria) unissant le monde grec.',
    hint: 'La philosophie grecque cherche à expliquer le monde naturel et la justice humaine par le raisonnement logique plutôt que par la seule volonté capricieuse des dieux.',
    prompt: 'Quelle rupture fondamentale la philosophie et la science nées dans la Grèce antique (Socrate, Platon, Aristote, Thalès, Pythagore) ont-elles apportée à la pensée universelle ?',
    options: [
      'Le passage du mythe au raisonnement logique et rationnel (le « logos ») pour expliquer les phénomènes naturels et concevoir la justice humaine',
      'L\'interdiction formelle de se poser des questions et l\'obligation d\'obéir aveuglément à des superstitions magiques',
      'La destruction de toute forme d\'art poétique et la fermeture définitive des théâtres',
      'L\'affirmation que la Terre est plate et statique au centre d\'un univers immobile sans lois physiques'
    ],
    correctAnswer: 'Le passage du mythe au raisonnement logique et rationnel (le « logos ») pour expliquer les phénomènes naturels et concevoir la justice humaine',
    commonMistake: 'Croire que les Grecs avaient totalement abandonné leur religion polythéiste ; en réalité, ils ont développé une pensée rationnelle parallèle qui interrogeait le monde par la démonstration et le débat philosophique.',
    explanation: 'Avant l\'essor de la pensée grecque en Ionie et à Athènes, les événements étaient quasi exclusivement expliqués par les caprices mythologiques. En introduisant la démonstration géométrique, l\'observation biologique et le dialogue philosophique critique (maïeutique socratique), les penseurs grecs ont posé les fondations de la démarche scientifique mondiale.',
    steps: [
      'Émancipation de la pensée : transition du mythe explicatif (*mythos*) vers l\'argumentation rationnelle et vérifiable (*logos*).',
      'Philosophie morale et politique : réflexion sur la vertu, le Bien commun et la Cité idéale (Platon dans *La République*).',
      'Théâtre civique : catharsis (purgation des passions) et questionnement du pouvoir face aux lois divines non écrites (Antigone de Sophocle).',
      'Jeux panhelléniques : culte de l\'excellence athlétique (*arété*) et trêve sacrée pacifiant les cités rivales.'
    ]
  },
  {
    id: 'q-2s-hg-antiques-5',
    exerciseId: 'ex-hg-antiques-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : République Romaine : Institutions & Droit Écrit',
    microConcept: 'La République romaine (509 à 27 av. J.-C.) a créé un système institutionnel complexe fondé sur la formule SPQR (Senatus Populusque Romanus : le Sénat et le Peuple de Rome). Elle repose sur l\'équilibre entre le Sénat (stabilité et diplomatie), les magistratures hiérarchisées du cursus honorum (2 Consuls détenant l\'imperium militaire, Préteurs rendant la justice) et les tribuns de la plèbe dotés d\'un pouvoir révolutionnaire : le droit de veto (« j\'interdis »). Rome lègue surtout au monde son droit écrit (dès la Loi des Douze Tables), matrice du droit civil contemporain.',
    hint: 'Pense au magistrat romain élu par le peuple plébéien qui possédait le pouvoir absolu de bloquer une décision sénatoriale par un simple mot.',
    prompt: 'Quelle institution clé de la République romaine protégeait les plébéiens contre les abus des patriciens, et quel apport juridique fondamental Rome a-t-elle légué aux démocraties modernes ?',
    options: [
      'Les Tribuns de la plèbe (inviolables et munis du droit de veto) ; la codification d\'un droit écrit public applicable à tous (Loi des Douze Tables et droit civil)',
      'L\'Inquisition militaire ; l\'obligation de recourir au duel judiciaire sans aucune loi écrite',
      'Le dictateur héréditaire à vie ; l\'absence totale de tribunaux et de contrats commerciaux',
      'Le collège des druides celtes ; le tirage au sort obligatoire des empereurs tous les deux mois'
    ],
    correctAnswer: 'Les Tribuns de la plèbe (inviolables et munis du droit de veto) ; la codification d\'un droit écrit public applicable à tous (Loi des Douze Tables et droit civil)',
    commonMistake: 'Confondre la République romaine (gouvernée par les consuls, le Sénat et les comices) avec l\'Empire autocratique instauré plus tard par Auguste en 27 av. J.-C.',
    explanation: 'Les tribuns de la plèbe disposaient de la « sacro-sainteté » (personne ne pouvait les toucher sous peine de malédiction capitale) et du « droit de veto » qui arrêtait net l\'application d\'une loi inique. En gravant sur le Forum la Loi des Douze Tables (vers 450 av. J.-C.), Rome a soustrait la justice à l\'arbitraire oral des juges patriciens, fondant le principe universel de l\'État de droit écrit.',
    steps: [
      'Organisation république : le Sénat aristocratique gère le trésor et les affaires étrangères ; les deux Consuls commandent les légions.',
      'Conflit des ordres (Patriciens vs Plébéiens) : conquête des droits civiques par la plèbe à travers la création des Tribuns et des Comices tributes.',
      'Arme constitutionnelle : le veto suspensif garantissant la protection des citoyens ordinaires.',
      'Héritage universel pérenne : le droit romain (*jus civile*), notion de contrat, présomption d\'innocence et codification écrite inspirant le Code civil actuel.'
    ]
  },
  {
    id: 'q-2s-hg-antiques-methode-pb',
    exerciseId: 'ex-hg-antiques-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode Dissertation (Normes Gabon) - La Problématique Centrale Unique',
    microConcept: 'Dans la méthodologie gabonaise, le deuxième paragraphe obligatoire de l\'introduction est la Problématique. C\'est la question centrale et UNIQUE à laquelle l\'ensemble du devoir va répondre. Elle ne doit pas être une simple question fermée appelant « oui » ou « non », ni une juxtaposition désordonnée de quatre ou cinq sous-questions, mais un problème intellectuel global.',
    hint: 'La problématique doit synthétiser la tension centrale du sujet en une seule question majeure et directrice.',
    prompt: 'Sur le sujet : « La démocratie athénienne au Ve siècle avant J.-C. : portée et limites », quelle formulation répond rigoureusement aux critères de la PROBLÉMATIQUE centrale et unique ?',
    options: [
      'Dans quelle mesure le régime démocratique athénien, bien qu\'ayant instauré l\'égalité civique inédite de ses citoyens, reposait-il sur l\'exclusion politique de la majorité de sa population ?',
      'Qui était Périclès ? Combien de citoyens votaient à l\'Ecclésia ? Les femmes avaient-elles le droit de vote ? Les esclaves étaient-ils bien traités ?',
      'La démocratie athénienne était-elle la meilleure démocratie du monde entier ? Répondez par oui ou par non.',
      'Nous allons d\'abord voir l\'Ecclésia, ensuite nous étudierons le tirage au sort et enfin nous parlerons des femmes athéniennes.'
    ],
    correctAnswer: 'Dans quelle mesure le régime démocratique athénien, bien qu\'ayant instauré l\'égalité civique inédite de ses citoyens, reposait-il sur l\'exclusion politique de la majorité de sa population ?',
    commonMistake: 'Énumérer une cascade de petites questions factuelles (« Qui ? Quand ? Où ? ») ou poser une question binaire sans nuance (« Était-elle bonne ? »).',
    explanation: 'Cette problématique oppose la portée démocratique (égalité civique, isonomie) à ses limites réelles (exclusion des femmes, métèques et esclaves), posant une question unique et directrice pour tout le devoir.',
    steps: [
      'Exigence officielle : une question centrale et UNIQUE constituant le deuxième paragraphe de l\'introduction (après retour à la ligne).',
      'Formulations recommandées : « En quoi... ? », « Dans quelle mesure... ? », « Comment expliquer que... ? ».',
      'Objectif : problématiser le sujet en dégageant le paradoxe ou la contradiction interne.'
    ]
  },
  {
    id: 'q-2s-hg-antiques-methode-transition',
    exerciseId: 'ex-hg-antiques-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode Dissertation (Normes Gabon) - Le Paragraphe de Transition',
    microConcept: 'Dans le développement d\'une composition selon les normes gabonaises, la transition est un court paragraphe rédigé à la fin d\'une grande partie. Elle remplit un double rôle obligatoire : 1) Résumer succinctement les acquis de la partie achevée, 2) Introduire logiquement la problématique de la partie suivante.',
    hint: 'Une transition parfaite regarde à la fois en arrière (ce qui vient d\'être démontré) et en avant (la nouvelle question posée).',
    prompt: 'À la fin de la Première Partie (consacrée aux institutions démocratiques égalitaires d\'Athènes), quelle formule constitue un PARAGRAPHE DE TRANSITION exemplaire vers la Seconde Partie (consacrée aux limites et exclusions civiques) ?',
    options: [
      'Ainsi, les institutions athéniennes ont concrétisé une égalité civique et politique remarquable pour l\'ensemble des citoyens libres. Cependant, ce modèle d\'isonomie ne bénéficiait qu\'à une minorité civique, soulevant la question des populations exclues de la vie politique de la cité.',
      'C\'est la fin de ma première partie. Passons maintenant immédiatement à la seconde partie pour parler des esclaves.',
      'D\'ailleurs les Grecs aimaient beaucoup le théâtre d\'Aristophane et les tragédies de Sophocle à Athènes.',
      'Comme nous venons de le voir, Rome avait un Sénat très puissant et des consuls qui commandaient les armées.'
    ],
    correctAnswer: 'Ainsi, les institutions athéniennes ont concrétisé une égalité civique et politique remarquable pour l\'ensemble des citoyens libres. Cependant, ce modèle d\'isonomie ne bénéficiait qu\'à une minorité civique, soulevant la question des populations exclues de la vie politique de la cité.',
    commonMistake: 'Passer brutalement d\'une partie à l\'autre sans paragraphe de liaison, ou écrire une phrase scolaire vide (« Maintenant, voyons la partie 2 »).',
    explanation: 'La transition synthétise l\'acquis de la première partie (l\'égalité des citoyens à l\'Ecclésia) tout en introduisant le pivot critique de la deuxième partie grâce à un connecteur d\'opposition (« Cependant »).',
    steps: [
      'Rôle de la transition : faire le pont logique entre deux axes du développement.',
      'Première phrase : bilan synthétique partiel des démonstrations de la partie écoulée.',
      'Seconde phrase : amorce fluide et problématisée de la grande partie qui s\'ouvre.'
    ]
  }
];

// -------------------------------------------------------------------------
// CHAPITRE 4 : LES APPORTS DES GRANDES CIVILISATIONS MÉDIÉVALES
// Leçon 1 : Rôle de l'Église dans la société européenne
// Leçon 2 : Science, techniques, art et commerce arabo-musulmans
// Leçon 3 : L'œuvre des humanistes (nouvelle vision de l'homme, progrès scientifiques)
// -------------------------------------------------------------------------
export const HISTOIRE_MEDIEVALES_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-hg-medievales-1',
    exerciseId: 'ex-hg-medievales-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : L\'Église & Encadrement de la Société Médiévale',
    microConcept: 'Au Moyen Âge occidental, l\'Église catholique romaine est l\'institution centrale qui cimente la société féodale. Elle rythme le temps des hommes (cloches, calendrier liturgique, sacrements du baptême à l\'extrême-onction). Elle s\'efforce de limiter la violence féodale guerrière en instituant la « Paix de Dieu » (protection des paysans, des clercs et des marchands sans défense) et la « Trêve de Dieu » (interdiction absolue de combattre du jeudi soir au lundi matin et durant l\'Avent et le Carême).',
    hint: 'Pense aux mesures spirituelles prises par les évêques et conciles pour empêcher les chevaliers de piller les villages.',
    prompt: 'Comment l\'Église catholique médiévale est-elle intervenue pour réguler et freiner la violence endémique des seigneurs féodaux et des chevaliers armés ?',
    options: [
      'En proclamant la « Paix de Dieu » et la « Trêve de Dieu », imposant des périodes d\'interdiction sacrée des combats et protégeant les civils',
      'En ordonnant la destruction totale de tous les châteaux et la dissolution définitive des armées',
      'En interdisant aux paysans de pratiquer l\'agriculture pour les forcer à devenir moines',
      'En confiant la gouvernance de l\'Europe aux corsaires scandinaves'
    ],
    correctAnswer: 'En proclamant la « Paix de Dieu » et la « Trêve de Dieu », imposant des périodes d\'interdiction sacrée des combats et protégeant les civils',
    commonMistake: 'Penser que l\'Église n\'avait qu\'un rôle de croyance spirituelle désincarnée : elle détenait un immense pouvoir temporel, judiciaire et social structurant toute l\'Europe médiévale.',
    explanation: 'Face aux exactions des guerriers féodaux, les mouvements de la « Paix de Dieu » (dès la fin du Xe siècle) menaçaient d\'excommunication tout chevalier agressant un paysan, un clerc ou un moulin. La « Trêve de Dieu » sanctuarisait près de la moitié des jours de l\'année sans armes, canalisant l\'agressivité vers un code d\'honneur chevaleresque.',
    steps: [
      'Encadrement du temps : le son des cloches rythme la journée de travail des champs ; les fêtes religieuses rythment l\'année.',
      'Sacrements chrétiens : jalons obligatoires de l\'existence (baptême, mariage chrétien, sépulture en terre consacrée).',
      'Pacification féodale : décrets conciliaires de Paix de Dieu et Trêve de Dieu sous peine de sanctions spirituelles majeures (anathème, excommunication).',
      'Assistance sociale : l\'Hôtel-Dieu et les aumônes monastiques prennent en charge les malades, les pauvres et les orphelins.'
    ]
  },
  {
    id: 'q-2s-hg-medievales-2',
    exerciseId: 'ex-hg-medievales-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Monastères Médiévaux & Sauvegarde des Savoirs',
    microConcept: 'Les monastères médiévaux (notamment l\'ordre des Bénédictins fondé par saint Benoît avec la règle « Ora et labora » : prie et travaille) ont joué un rôle de conservatoires intellectuels inestimables. Dans leurs scriptoriums, les moines copistes ont recopié et enluminé à la main, sur parchemin, les manuscrits de la Bible, des Pères de l\'Église, mais aussi des philosophes et scientifiques de l\'Antiquité gréco-romaine, préparant l\'éclosion des premières Universités médiévales (Paris, Bologne, Oxford, Montpellier).',
    hint: 'Pense à l\'atelier du monastère où les moines passaient des années à calligraphier patiemment les livres avant l\'imprimerie.',
    prompt: 'Quel rôle déterminant les moines copistes dans les scriptoriums des abbayes médiévales ont-ils exercé pour la survie du patrimoine intellectuel mondial ?',
    options: [
      'Ils ont sauvé, recopié et transmis les manuscrits antiques littéraires, médicaux et philosophiques qui auraient disparu sans leur labeur',
      'Ils ont brûlé systématiquement tous les livres écrits avant le Xe siècle pour empêcher les gens de lire',
      'Ils ont inventé l\'imprimerie industrielle numérique pour vendre des journaux quotidiens à grand tirage',
      'Ils ont interdit l\'enseignement de la médecine et la création des universités en Europe'
    ],
    correctAnswer: 'Ils ont sauvé, recopié et transmis les manuscrits antiques littéraires, médicaux et philosophiques qui auraient disparu sans leur labeur',
    commonMistake: 'Associer le Moyen Âge à une période d\'obscurantisme total, en oubliant la Renaissance carolingienne et la création des premières universités autonomes au XIIe siècle protégées par les chartes ecclésiastiques.',
    explanation: 'Sans le travail méticuleux des moines copistes dans les abbayes (comme Cluny ou le Mont-Saint-Michel), la quasi-totalité des textes de Cicéron, Virgile, Aristote ou Galien aurait péri dans les incendies et les invasions. Ce réservoir textuel a permis au XIIe siècle la révolution scolaire et la fondation des grandes universités corporatives européennes.',
    steps: [
      'Règle bénédictine : consécration du travail manuel et intellectuel comme acte de piété et de discipline spirituelle.',
      'Travail du scriptorium : fabrication du parchemin à partir de peaux d\'animaux, copie minutieuse à la plume d\'oie, lettrines enluminées.',
      'Sauvegarde textuelle : conservation des traités de rhétorique, de grammaire, de géométrie et de droit romain.',
      'Passage aux Universités : émancipation progressive des étudiants et professeurs au XIIIe siècle autour de la Sorbonne ou de Bologne.'
    ]
  },
  {
    id: 'q-2s-hg-medievales-3',
    exerciseId: 'ex-hg-medievales-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Âge d\'Or Arabo-Musulman : Sciences & Médecine',
    microConcept: 'Du VIIIe au XIIIe siècle, la civilisation arabo-musulmane connaît un éblouissant âge d\'or scientifique, technique et médical centré sur des métropoles florissantes (Bagdad avec sa Maison de la Sagesse / Bayt al-Hikma, Le Caire, Cordoue). Ses savants traduisent les textes grecs, persans et indiens, inventent l\'algèbre (Al-Khwarizmi, dont le nom donne le mot « algorithme »), perfectionnent la trigonométrie, l\'astronomie (astrolabes précis), l\'optique expérimentale (Alhazen) et la médecine universelle (Le Canon de la médecine d\'Avicenne / Ibn Sina, référence mondiale durant des siècles).',
    hint: 'Pense au nom de la branche des mathématiques traitant des équations, issue du traité « Al-Jabr » d\'Al-Khwarizmi.',
    prompt: 'Quels apports scientifiques et médicaux majeurs issus de la civilisation arabo-musulmane médiévale ont durablement révolutionné la science mondiale ?',
    options: [
      'L\'invention de l\'algèbre par Al-Khwarizmi, les traités d\'optique d\'Alhazen et la codification médicale universelle d\'Avicenne (Ibn Sina)',
      'La découverte de l\'électricité statique et l\'invention de la machine à vapeur au VIIIe siècle',
      'Le refus de traduire les ouvrages grecs et l\'abandon de tout calcul mathématique',
      'L\'interdiction de pratiquer la chirurgie et la fermeture des hôpitaux dans tout le monde islamique'
    ],
    correctAnswer: 'L\'invention de l\'algèbre par Al-Khwarizmi, les traités d\'optique d\'Alhazen et la codification médicale universelle d\'Avicenne (Ibn Sina)',
    commonMistake: 'Réduire le rôle des savants arabo-musulmans à de simples passeurs ou traducteurs passifs, alors qu\'ils ont été d\'immenses novateurs et les pères de la méthode expérimentale en optique et en chimie (distillation, alambic).',
    explanation: 'Al-Khwarizmi a formalisé la résolution systématique des équations du premier et second degré dans son livre *Kitab al-Jabr*, donnant le terme « algèbre ». Avicenne (Ibn Sina) a compilé dans son monumental *Qanun fi al-Tibb* (Canon de la médecine) une encyclopédie clinique rigoureuse qui a servi de manuel de référence dans toutes les universités européennes jusqu\'au XVIIe siècle.',
    steps: [
      'Foyer intellectuel de Bagdad : création de la Maison de la Sagesse par les califes abbassides (Haroun al-Rachid et Al-Ma\'mun).',
      'Mathématiques : diffusion des chiffres indiens (dits arabes), du zéro (*sifr* = chiffre), des fractions décimales et de l\'algèbre.',
      'Médecine hospitalière : création des maristans (hôpitaux publics gratuits équipés de salles d\'opérations et de pharmacies).',
      'Astronomie et navigation : perfectionnement de l\'astrolabe et tables astronomiques guidant les caravanes et les navires marchands.'
    ]
  },
  {
    id: 'q-2s-hg-medievales-4',
    exerciseId: 'ex-hg-medievales-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Commerce Arabo-Musulman & Liens Transsahariens',
    microConcept: 'La civilisation arabo-musulmane médiévale a été un formidable réseau commercial mondial unissant la Méditerranée, l\'océan Indien et l\'Afrique subsaharienne via les pistes caravanières transsahariennes (routes de l\'or, du sel gemme, de la noix de kola et des manuscrits vers les empires du Ghana, du Mali et Songhaï avec Tombouctou). Ce commerce a diffusé de nouveaux instruments financiers (le chèque / sakk, la lettre de change) et des transferts technologiques (papier venu de Chine, boussole, norias d\'irrigation).',
    hint: 'Pense aux caravanes de dromadaires traversant le Sahara reliant les oasis d\'Afrique du Nord aux grands empires soudano-sahéliens d\'Afrique de l\'Ouest.',
    prompt: 'Quel rôle d\'interconnexion économique et technologique le monde arabo-musulman a-t-il joué à travers le grand commerce transsaharien et maritime médiéval ?',
    options: [
      'Il a relié l\'Afrique subsaharienne, l\'Europe et l\'Asie par des réseaux marchands intenses (or, sel, savoirs), diffusant des outils monétaires (chèques) et des technologies (papier)',
      'Il a coupé tout échange maritime entre l\'océan Indien et la mer Méditerranée pendant un millénaire',
      'Il a interdit l\'usage de la monnaie et contraint le monde entier à un troc primitif d\'écorces d\'arbres',
      'Il a fait disparaître les villes caravanières comme Tombouctou, Gao et Djenné'
    ],
    correctAnswer: 'Il a relié l\'Afrique subsaharienne, l\'Europe et l\'Asie par des réseaux marchands intenses (or, sel, savoirs), diffusant des outils monétaires (chèques) et des technologies (papier)',
    commonMistake: 'Croire que le Sahara était une barrière infranchissable, alors qu\'il était une véritable « mer de sable » sillonnée de routes caravanières régulières favorisant l\'essor d\'empires africains puissants.',
    explanation: 'Grâce au dromadaire et à la maîtrise des puits d\'oasis, les marchands arabo-berbères et africains échangeaient le sel du Sahara contre l\'or des cours d\'eau du Soudan occidental et les produits manufacturés méditerranéens. Ce commerce s\'accompagnait d\'échanges culturels considérables, transformant Tombouctou en métropole universitaire réputée pour ses bibliothèques de manuscrits.',
    steps: [
      'Réseau caravanier : liaisons stratégiques entre Sidjilmassa, Oualata, Gao et Tombouctou.',
      'Innovations commerciales : adoption du chèque bancaire (*sakk*) et de la lettre de change pour sécuriser les transactions lointaines sans transporter de métal lourd.',
      'Diffusion technologique : transmission de la technique chinoise de fabrication du papier de chiffon en Occident via Bagdad et l\'Andalousie.',
      'Rayonnement artistique : architecture monumentale (mosquée de Cordoue, Alhambra de Grenade, mosquées de banco sahéliennes de Djenné).'
    ]
  },
  {
    id: 'q-2s-hg-medievales-5',
    exerciseId: 'ex-hg-medievales-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Humanisme de la Renaissance : Vision de l\'Homme & Gutenberg',
    microConcept: 'Aux XVe et XVIe siècles, l\'Humanisme de la Renaissance bouleverse la conception du monde : c\'est le passage du théocentrisme médiéval à une nouvelle vision centrée sur la dignité, la liberté et l\'intelligence de l\'Homme (Pic de la Mirandole, Érasme, Thomas More, Rabelais, Montaigne). Les humanistes préconisent le retour direct aux textes anciens sans déformation (*ad fontes*), une pédagogie fondée sur la curiosité et l\'esprit critique, soutenus par la révolution de l\'imprimerie à caractères mobiles de Gutenberg (vers 1450-1455), qui démultiplie la circulation des idées.',
    hint: 'L\'imprimerie a permis de passer de quelques dizaines d\'exemplaires d\'un livre manuscrit à des milliers de copies identiques, rendant le savoir accessible.',
    prompt: 'En quoi l\'humanisme de la Renaissance et l\'invention de l\'imprimerie par Johannes Gutenberg ont-ils transformé la place de l\'Homme et la diffusion des sciences en Europe ?',
    options: [
      'Ils ont placé l\'Homme doué de raison et de libre arbitre au centre des préoccupations, et permis une démocratisation rapide et massive des connaissances sans censure monopolistique',
      'Ils ont décrété que l\'Homme ne devait plus apprendre à lire et ont détruit toutes les bibliothèques laïques',
      'Ils ont interdit l\'apprentissage des langues anciennes (grec, hébreu, latin) au profit du seul dialecte gothique',
      'Ils ont prouvé que la science devait rester réservée à une caste héréditaire de cinq familles nobles'
    ],
    correctAnswer: 'Ils ont placé l\'Homme doué de raison et de libre arbitre au centre des préoccupations, et permis une démocratisation rapide et massive des connaissances sans censure monopolistique',
    commonMistake: 'Opposer foi et humanisme : la plupart des humanistes de la Renaissance (comme Érasme) étaient profondément croyants, mais ils refusaient le dogmatisme scolastique et voulaient que chaque individu puisse lire et comprendre les textes par sa propre raison critique.',
    explanation: 'L\'imprimerie à caractères métalliques mobiles de Gutenberg à Mayence a divisé le coût des livres par cent et accéléré la diffusion des découvertes (anatomie de Vésale, héliocentrisme de Copernic). L\'humanisme a promu un idéal d\'Homme complet, éclairé par les lettres, les arts, les sciences et l\'esprit critique.',
    steps: [
      'Nouvelle vision anthropologique : l\'Homme n\'est plus écrasé par le péché originel mais considéré comme capable de perfectionnement moral et intellectuel.',
      'Pratique philologique : retour aux sources originales grecques, latines et hébraïques pour corriger les erreurs de traduction médiévales.',
      'Révolution technique de l\'imprimerie (1450) : production en série de millions de volumes en quelques décennies.',
      'Héritage : naissance de l\'esprit scientifique moderne fondé sur l\'observation directe de la nature, la dissection anatomique et l\'expérimentation.'
    ]
  },
  {
    id: 'q-2s-hg-medievales-methode-chapeau',
    exerciseId: 'ex-hg-medievales-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode Dissertation (Normes Gabon) - La Phrase Chapeau du Développement',
    microConcept: 'Selon la méthodologie officielle gabonaise du Sujet de type 1, chaque grande partie du développement doit impérativement s\'ouvrir par une « Phrase Chapeau ». Il s\'agit d\'une introduction partielle concise qui annonce les sous-axes thématiques qui vont être démontrés dans cette grande partie, guidant immédiatement l\'esprit du correcteur avant les arguments.',
    hint: 'La phrase chapeau se place tout en haut de la grande partie et annonce de manière synthétique ce qui va être développé.',
    prompt: 'Au début de la partie consacrée au rôle régulateur de l\'Église dans la société médiévale européenne, quelle proposition constitue une véritable PHRASE CHAPEAU selon les normes gabonaises ?',
    options: [
      'L\'Église catholique s\'impose au Moyen Âge comme l\'armature centrale de la société européenne en exerçant un encadrement moral des fidèles, en pacifiant les mœurs féodales et en préservant le patrimoine intellectuel au sein des monastères.',
      'Au Moyen Âge, tout le monde allait à la messe le dimanche sous peine d\'aller en enfer.',
      'Nous allons maintenant parler des moines copistes qui écrivaient sur des parchemins avec des plumes d\'oie.',
      'En conclusion de cette partie, nous pouvons affirmer que le pape était le souverain le plus riche de la planète.'
    ],
    correctAnswer: 'L\'Église catholique s\'impose au Moyen Âge comme l\'armature centrale de la société européenne en exerçant un encadrement moral des fidèles, en pacifiant les mœurs féodales et en préservant le patrimoine intellectuel au sein des monastères.',
    commonMistake: 'Commencer directement par un argument isolé sans phrase chapeau, ou confondre la phrase chapeau (qui annonce la partie) avec une conclusion partielle.',
    explanation: 'Cette phrase chapeau joue son rôle d\'introduction partielle : elle pose l\'axe général (l\'Église comme armature centrale) et esquisse les sous-thèmes développés (encadrement moral, pacification féodale, scriptoriums des monastères).',
    steps: [
      'Emplacement officiel : tout au début de chaque grande partie (Partie I, Partie II, Partie III).',
      'Fonction : chapeauter la partie en fournissant une vue d\'ensemble des sous-parties.',
      'Style : concis, élégant et sans connecteur de conclusion.'
    ]
  },
  {
    id: 'q-2s-hg-medievales-methode-conclusion',
    exerciseId: 'ex-hg-medievales-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode Dissertation (Normes Gabon) - Structure de la Conclusion',
    microConcept: 'La conclusion de la composition d\'Histoire-Géo au Gabon obéit à une règle formelle stricte : 1) Elle se rédige obligatoirement après avoir SAUTÉ UNE LIGNE ; 2) Elle comprend obligatoirement deux étapes fondamentales : le BILAN (résumé synthétique qui répond directement à la problématique sans rajouter d\'argument nouveau) et l\'OUVERTURE (projection ou question plus large liée au programme ou à la leçon suivante).',
    hint: 'La conclusion ne doit jamais introduire un fait nouveau imprévu : elle clôt le débat puis ouvre une perspective vers l\'avenir historique.',
    prompt: 'Sur le sujet : « Les apports scientifiques et philosophiques du monde arabo-musulman médiéval », quelle conclusion respecte scrupuleusement la règle du Bilan et de l\'Ouverture ?',
    options: [
      'En définitive, la civilisation arabo-musulmane médiévale a constitué un pont intellectuel fondamental, enrichissant les sciences, la médecine et la philosophie par ses propres découvertes et la traduction des textes antiques. Dès lors, ces transmissions et cet esprit de curiosité ne préparaient-ils pas le renouveau humaniste de la Renaissance européenne ?',
      'Pour finir, j\'ajoute aussi qu\'ils ont inventé les fusées spatiales et que sans eux nous n\'aurions pas d\'avions de chasse.',
      'En résumé, ce sujet était très difficile mais j\'ai bien aimé parler des mathématiques et de l\'algèbre.',
      'Nous avons donc vu dans une première partie les sciences et dans une seconde partie le commerce transsaharien.'
    ],
    correctAnswer: 'En définitive, la civilisation arabo-musulmane médiévale a constitué un pont intellectuel fondamental, enrichissant les sciences, la médecine et la philosophie par ses propres découvertes et la traduction des textes antiques. Dès lors, ces transmissions et cet esprit de curiosité ne préparaient-ils pas le renouveau humaniste de la Renaissance européenne ?',
    commonMistake: 'Oublier l\'ouverture, ou au contraire introduire un nouvel argument détaillé qui aurait dû figurer dans le développement.',
    explanation: 'La réponse récapitule la solution apportée à la problématique (le bilan : pont intellectuel et traductions) puis propose une ouverture élégante en lien direct avec la suite du programme officiel (l\'humanisme et la Renaissance).',
    steps: [
      'Règle matérielle : toujours sauter une ligne entre la fin du développement et la conclusion.',
      'Étape 1 - Le Bilan : synthèse courte des réponses apportées à la question centrale posée en introduction.',
      'Étape 2 - L\'Ouverture : projection interrogative vers la leçon suivante du programme.'
    ]
  }
];

// -------------------------------------------------------------------------
// CHAPITRE 5 : LES APPORTS DES CIVILISATIONS MODERNES ET CONTEMPORAINES OCCIDENTALES
// Leçon 1 : Avancées des quatre révolutions industrielles
// Leçon 2 : Principes démocratiques issus des révolutions occidentales
// Leçon 3 : Promotion des droits humains
// -------------------------------------------------------------------------
export const HISTOIRE_MODERNES_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-hg-modernes-1',
    exerciseId: 'ex-hg-modernes-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Les Quatre Révolutions Industrielles',
    microConcept: 'Le monde moderne et contemporain a été transformé par quatre vagues successives d\'innovations technologiques majeures : \n1ère Révolution (fin XVIIIe s.) : Machine à vapeur (James Watt), charbon, industrie textile et chemin de fer. \n2ème Révolution (fin XIXe s.) : Électricité, pétrole, moteur à explosion, acier et travail à la chaîne (fordisme). \n3ème Révolution (fin XXe s.) : Électronique, informatique, énergie nucléaire et automatisation. \n4ème Révolution (actuelle) : Numérique, intelligence artificielle, internet des objets, nanotechnologies et énergies renouvelables.',
    hint: 'Pense à l\'énergie qui a permis aux premières locomotives et usines de fonctionner au XVIIIe siècle en Angleterre.',
    prompt: 'Quelle source d\'énergie et quelle machine emblématique ont été au cœur du déclenchement de la première révolution industrielle à la fin du XVIIIe siècle ?',
    options: [
      'Le charbon (houille) et la machine à vapeur perfectionnée par James Watt',
      'L\'énergie nucléaire et les réacteurs atomiques sous-marins',
      'Les panneaux solaires photovoltaïques et le moteur à hydrogène',
      'Le pétrole raffiné et le moteur à injection électronique'
    ],
    correctAnswer: 'Le charbon (houille) et la machine à vapeur perfectionnée par James Watt',
    commonMistake: 'Confondre la 1ère révolution industrielle (charbon / vapeur / rail) avec la 2ème révolution industrielle (pétrole / électricité / automobile).',
    explanation: 'La machine à vapeur brevetée par James Watt a permis de convertir l\'énergie thermique du charbon en énergie mécanique continue. Elle a libéré les manufactures de la dépendance aux cours d\'eau (moulins) ou au vent, donnant naissance aux usines modernes et aux chemins de fer qui ont désenclavé les continents.',
    steps: [
      '1ère Révolution : machine à vapeur de Watt (1769), métallurgie au coke, locomotives de Stephenson, mécanisation du tissage.',
      '2ème Révolution (vers 1880) : dynamo électrique de Siemens, pétrole, moteurs de Benz et Diesel, chimie de synthèse.',
      '3ème Révolution (vers 1970) : microprocesseurs, ordinateurs personnels, télécommunications par satellite, robotique industrielle.',
      '4ème Révolution (XXIe siècle) : transition numérique, cloud computing, IA générative, connectivité 5G et transition énergétique.'
    ]
  },
  {
    id: 'q-2s-hg-modernes-2',
    exerciseId: 'ex-hg-modernes-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : 2e & 3e Révolutions : Électricité, Pétrole & Informatique',
    microConcept: 'La deuxième révolution industrielle a façonné les sociétés urbaines de masse (automobile, éclairage électrique, télécommunications avec le télégraphe et le téléphone), tandis que la troisième révolution industrielle a introduit la société de l\'information grâce aux puces semi-conductrices, au réseau Internet et à l\'automatisation des lignes de production, modifiant radicalement les modes de vie et la productivité globale.',
    hint: 'Qu\'est-ce qui a succédé au charbon pour alimenter les moteurs des voitures et faire fonctionner les ordinateurs ?',
    prompt: 'Quelles innovations ont caractérisé la transition de la deuxième révolution industrielle vers la troisième révolution industrielle au cours du XXe siècle ?',
    options: [
      'Le passage du moteur thermique et de l\'électricité de masse à l\'informatique, aux microprocesseurs et aux télécommunications numériques',
      'Le retour exclusif à la traction animale et à la voile pour le transport mondial de marchandises',
      'L\'abandon complet de l\'électricité au profit des bougies de cire d\'abeille',
      'L\'interdiction des usines et le retour généralisé au nomadisme pastoral'
    ],
    correctAnswer: 'Le passage du moteur thermique et de l\'électricité de masse à l\'informatique, aux microprocesseurs et aux télécommunications numériques',
    commonMistake: 'Considérer que chaque révolution industrielle efface la précédente : en réalité, elles s\'additionnent et s\'hybrident (les réseaux électriques de la 2e révolution sont aujourd\'hui pilotés par l\'informatique de la 3e et 4e révolution).',
    explanation: 'Le XXe siècle a vu l\'apogée des carburants fossiles et de l\'électricité pour motoriser la société de consommation (chaînes de montage fordistes), puis l\'irruption des transistors et des ordinateurs à partir des années 1970, transformant les économies industrielles en économies de la connaissance et de l\'information.',
    steps: [
      '2e Révolution : électricité domestique et industrielle, chaîne de montage (taylorisme), industrie pétrochimique.',
      'Avènement des semi-conducteurs : invention du transistor en 1947, circuit intégré en 1958.',
      '3e Révolution : émergence de l\'informatique personnelle, de l\'Internet mondial (World Wide Web en 1989) et de la téléphonie mobile.',
      'Impacts environnementaux et sociétaux : explosion de la consommation énergétique mondiale et naissance de la conscience écologique.'
    ]
  },
  {
    id: 'q-2s-hg-modernes-3',
    exerciseId: 'ex-hg-modernes-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Principes Démocratiques : Séparation des Pouvoirs',
    microConcept: 'Les Lumières et les révolutions occidentales (Révolution anglaise de 1688, Révolution américaine de 1776, Révolution française de 1789) ont établi les piliers de l\'État de droit contemporain : \n1) La souveraineté nationale (le pouvoir émane du peuple ou de la nation, et non du droit divin d\'un roi) ; \n2) La séparation des trois pouvoirs (théorisée par Montesquieu dans *De l\'esprit des lois* : pouvoir législatif qui fait la loi, pouvoir exécutif qui l\'applique, pouvoir judiciaire qui sanctionne son non-respect) pour empêcher la tyrannie et préserver la liberté.',
    hint: '« Pour qu\'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir » écrivait Montesquieu.',
    prompt: 'Pourquoi le principe constitutionnel de la « séparation des trois pouvoirs » (législatif, exécutif, judiciaire) théorisé par Montesquieu est-il indispensable à toute démocratie moderne ?',
    options: [
      'Pour éviter la concentration tyrannique de tous les pouvoirs entre les mains d\'une seule personne et garantir que les pouvoirs se contrôlent mutuellement',
      'Pour supprimer définitivement les tribunaux et laisser la police juger arbitrairement sans procès',
      'Pour permettre au président d\'écrire les lois tout seul sans aucun parlement ni député',
      'Pour obliger les juges à obéir servilement aux ordres secrets des chefs de guerre'
    ],
    correctAnswer: 'Pour éviter la concentration tyrannique de tous les pouvoirs entre les mains d\'une seule personne et garantir que les pouvoirs se contrôlent mutuellement',
    commonMistake: 'Confondre le pouvoir exécutif (qui gère l\'État et fait exécuter les lois) et le pouvoir législatif (le Parlement élu qui débat et vote les textes de loi).',
    explanation: 'Dans un régime absolutiste ou despotique, la même autorité rédige la loi, la fait exécuter et prononce les peines, ouvrant la porte à l\'arbitraire. La séparation stricte et l\'équilibre mutuel (*checks and balances*) entre Parlement (législatif), Gouvernement (exécutif) et Juges indépendants (judiciaire) constituent le socle indéboulonnable des républiques et démocraties modernes, y compris dans la Constitution gabonaise.',
    steps: [
      'Pouvoir Législatif : Assemblée nationale / Sénat votant les lois et contrôlant l\'action du gouvernement.',
      'Pouvoir Exécutif : Chef de l\'État et ministres appliquant les lois et conduisant la politique nationale.',
      'Pouvoir Judiciaire : magistrats indépendants garantissant le respect des lois et des libertés fondamentales.',
      'Conséquence fondamentale : protection du citoyen contre l\'arbitraire d\'État et garantie de l\'État de droit.'
    ]
  },
  {
    id: 'q-2s-hg-modernes-4',
    exerciseId: 'ex-hg-modernes-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Déclaration des Droits de l\'Homme et du Citoyen (1789)',
    microConcept: 'Adoptée le 26 août 1789 par l\'Assemblée nationale constituante en France, la Déclaration des Droits de l\'Homme et du Citoyen (DDHC) consacre une rupture juridique historique : \n- Article 1 : « Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l\'utilité commune ». \nElle proclame les droits naturels et imprescriptibles de l\'homme : la liberté, la propriété, la sûreté et la résistance à l\'oppression, ainsi que la liberté d\'opinion religieuse et d\'expression.',
    hint: 'Pense au renversement de la société féodale d\'Ancien Régime où les nobles et le clergé jouissaient de privilèges de naissance face au Tiers État.',
    prompt: 'Quel principe révolutionnaire proclamé par l\'Article 1er de la Déclaration des Droits de l\'Homme et du Citoyen de 1789 a mis fin à la société d\'ordres et de privilèges ?',
    options: [
      'L\'égalité juridique de tous les citoyens devant la loi (« libres et égaux en droits »), abolissant les privilèges de naissance',
      'Le rétablissement du servage obligatoire pour tous les habitants des villes',
      'La primauté absolue de la noblesse d\'épée sur tous les emplois civils et militaires',
      'L\'interdiction formelle du droit de propriété privée pour les paysans et marchands'
    ],
    correctAnswer: 'L\'égalité juridique de tous les citoyens devant la loi (« libres et égaux en droits »), abolissant les privilèges de naissance',
    commonMistake: 'Confondre égalité en droits (tous les citoyens soumis aux mêmes règles juridiques, sans passe-droits aristocratiques) et égalité matérielle des richesses.',
    explanation: 'Sous l\'Ancien Régime, la société était hiérarchisée en trois ordres inégaux : Noblesse, Clergé et Tiers État. La DDHC affirme que tous les individus possèdent dès la naissance des droits universels et inaliénables, ce qui a inspiré l\'ensemble des constitutions démocratiques du monde contemporain.',
    steps: [
      'Contexte historique : nuit du 4 août 1789 (abolition des privilèges féodaux) et vote de la Déclaration le 26 août.',
      'Droits fondamentaux proclamés : liberté individuelle, propriété privée inviolable et sacrée, sûreté des personnes, liberté de conscience et de culte.',
      'Souveraineté nationale : le principe de toute souveraineté réside essentiellement dans la Nation (Article 3).',
      'Portée universelle : un texte rédigé pour l\'humanité tout entière, devenant une boussole morale et juridique universelle.'
    ]
  },
  {
    id: 'q-2s-hg-modernes-5',
    exerciseId: 'ex-hg-modernes-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : DUDH de 1948 & Justice Internationale Contemporaine',
    microConcept: 'Au lendemain des atrocités indicibles et des génocides de la Seconde Guerre mondiale, l\'Organisation des Nations Unies (ONU) adopte à Paris, le 10 décembre 1948, la Déclaration Universelle des Droits de l\'Homme (DUDH), rédigée par des juristes de divers continents (René Cassin, Eleanor Roosevelt, Peng Chun Chang). Elle universalise les droits civils et politiques, y ajoute les droits économiques, sociaux et culturels (droit à l\'éducation, au travail, à la santé, au repos) et pose les bases de la justice pénale internationale contre les crimes contre l\'humanité.',
    hint: 'Ce texte fondamental a été adopté par l\'Assemblée générale de l\'ONU en 1948 pour affirmer la dignité inhérente à tous les membres de la famille humaine.',
    prompt: 'Quelle avancée majeure la Déclaration Universelle des Droits de l\'Homme (DUDH) de 1948 a-t-elle apportée par rapport aux déclarations du XVIIIe siècle ?',
    options: [
      'Elle a conféré une dimension universelle planétaire aux droits humains et y a intégré les droits économiques et sociaux (éducation, santé, travail digne)',
      'Elle a limité l\'application des droits fondamentaux à un seul continent géographique',
      'Elle a supprimé le droit de vote et les libertés syndicales dans tous les pays signataires',
      'Elle a autorisé les États à pratiquer l\'esclavage et la torture en temps de crise économique'
    ],
    correctAnswer: 'Elle a conféré une dimension universelle planétaire aux droits humains et y a intégré les droits économiques et sociaux (éducation, santé, travail digne)',
    commonMistake: 'Penser que la DUDH ne concerne que les libertés individuelles de parole : elle affirme avec la même force le droit pour chaque être humain à un niveau de vie suffisant, à la sécurité sociale, au travail librement choisi et à l\'éducation gratuite.',
    explanation: 'Rédigée au sortir de la barbarie nazie et de la Seconde Guerre mondiale, la DUDH proclame que la dignité humaine est inaliénable et universelle, sans distinction de race, de couleur, de sexe, de langue ou de religion. Elle a servi de socle aux traités internationaux ultérieurs et à la création de juridictions internationales comme la Cour pénale internationale (CPI).',
    steps: [
      'Contexte d\'émergence : création de l\'ONU en 1945 pour préserver la paix et empêcher la réédition de crimes de masse.',
      'Élargissement des droits : passage des libertés individuelles de 1789 (droits de 1ère génération) aux droits économiques et sociaux (droits de 2e génération).',
      'Universalité : consensus multiculturel dépassant les frontières nationales pour proclamer la fraternité humaine universelle.',
      'Héritage actif : protection des réfugiés, lutte globale contre les discriminations, promotion de l\'égalité des genres et des droits de l\'enfant.'
    ]
  },
  {
    id: 'q-2s-hg-modernes-methode-plan',
    exerciseId: 'ex-hg-modernes-methode-1',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Méthode Dissertation (Normes Gabon) - L\'Annonce du Plan',
    microConcept: 'Le troisième et dernier paragraphe obligatoire de l\'introduction (après retour à la ligne) est l\'Annonce du Plan. C\'est le squelette du devoir : elle doit présenter les deux ou trois grandes parties retenues de manière concise, fluide et équilibrée, sans dévoiler prématurément les exemples et arguments détaillés.',
    hint: 'L\'annonce du plan doit indiquer clairement les 2 ou 3 axes retenus, souvent articulés par des connecteurs temporels ou logiques (« Dans un premier temps..., puis... »).',
    prompt: 'Sur le sujet de composition : « Les révolutions industrielles des XIXe et XXe siècles : progrès techniques et transformations socio-politiques », quelle formulation d\'ANNONCE DU PLAN respecte la concision et les normes gabonaises ?',
    options: [
      'Dans un premier temps, nous analyserons les bouleversements techniques et productifs nés de l\'essor de la vapeur et de l\'électricité ; puis, dans un second temps, nous examinerons les mutations sociales et politiques engendrées par ces mutations, notamment la montée du salariat et la conquête des droits ouvriers.',
      'Premièrement nous parlerons de James Watt qui a inventé la machine à vapeur en 1769 en Angleterre, deuxièmement des trains qui allaient très vite, troisièmement des enfants qui travaillaient dans les mines de charbon en pleurant, quatrièmement du télégraphe.',
      'Mon plan sera très simple : je vais répondre oui à la question puis je vais raconter tout ce que je sais sur les usines modernes.',
      'Il n\'est pas nécessaire d\'annoncer un plan dans l\'introduction d\'histoire car le correcteur découvrira les parties au fur et à mesure de sa lecture.'
    ],
    correctAnswer: 'Dans un premier temps, nous analyserons les bouleversements techniques et productifs nés de l\'essor de la vapeur et de l\'électricité ; puis, dans un second temps, nous examinerons les mutations sociales et politiques engendrées par ces mutations, notamment la montée du salariat et la conquête des droits ouvriers.',
    commonMistake: 'Faire une annonce de plan interminable qui liste tous les exemples détaillés au lieu d\'annoncer les grandes orientations directrices (les grands axes).',
    explanation: 'Cette annonce de plan délimite clairement deux grandes parties majeures (1. mutations techniques et de production ; 2. conséquences sociales et politiques) dans un style sobre, concis et académique.',
    steps: [
      'Place officielle : 3e paragraphe distinct de l\'introduction (après un retour à la ligne obligatoire).',
      'Format recommandé : annonce concise en 2 ou 3 axes maximum.',
      'Objectif : donner au correcteur la boussole et la structure globale de l\'argumentation à venir.'
    ]
  },
  {
    id: 'q-2s-hg-modernes-methode-argument',
    exerciseId: 'ex-hg-modernes-methode-2',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Méthode Dissertation (Normes Gabon) - Argumentation & Droits Humains',
    microConcept: 'Dans le développement, chaque argument doit obligatoirement combiner trois composantes indissociables : 1) Un connecteur logique d\'enchaînement, 2) Une explication causale claire du concept, 3) Une illustration par un exemple historique précis (texte, date, institution ou auteur).',
    hint: 'Vérifie la présence du connecteur, de l\'explication de la séparation des pouvoirs et de la référence textuelle exacte.',
    prompt: 'Pour prouver que les révolutions occidentales ont protégé le citoyen contre l\'arbitraire monarchique, quelle proposition constitue un ARGUMENT COMPLET conforme aux exigences de l\'inspection ?',
    options: [
      'D\'autre part, la limitation du pouvoir absolu s\'est concrétisée par le principe constitutionnel de séparation des pouvoirs théorisé par Montesquieu, selon lequel les pouvoirs exécutif, législatif et judiciaire ne doivent pas être concentrés entre les mêmes mains sous peine de tyrannie, un principe solennellement gravé à l\'Article 16 de la Déclaration des Droits de l\'Homme et du Citoyen de 1789.',
      'Montesquieu était un homme très sage qui a écrit des livres contre les rois méchants qui faisaient du mal aux pauvres.',
      'Par ailleurs, la démocratie est une bonne chose pour tout le monde car quand on sépare les pouvoirs tout le monde est content.',
      'Enfin, les juges d\'aujourd\'hui au Gabon portent des toges noires lors des procès au tribunal de Libreville.'
    ],
    correctAnswer: 'D\'autre part, la limitation du pouvoir absolu s\'est concrétisée par le principe constitutionnel de séparation des pouvoirs théorisé par Montesquieu, selon lequel les pouvoirs exécutif, législatif et judiciaire ne doivent pas être concentrés entre les mêmes mains sous peine de tyrannie, un principe solennellement gravé à l\'Article 16 de la Déclaration des Droits de l\'Homme et du Citoyen de 1789.',
    commonMistake: 'Donner une simple affirmation sans expliquer le raisonnement (pourquoi séparer les pouvoirs ?) ou sans citer de texte historique de référence (Article 16 de la DDHC 1789).',
    explanation: 'L\'argument réunit la totalité du triptyque obligatoire : connecteur logique (« D\'autre part »), explication conceptuelle (la non-concentration des 3 pouvoirs empêche la tyrannie) et exemple historique vérifiable (Montesquieu et l\'Article 16 de la DDHC 1789).',
    steps: [
      'Formule canonique de l\'argument : Connecteur logique + Affirmation / Idée directrice + Explication analytique + Exemple historique précis.',
      'Rôle des exemples : ils ne doivent pas remplacer l\'explication mais l\'authentifier avec précision.',
      'Critère de notation : un paragraphe sans exemple précis ou sans explication perd des points au barème officiel gabonais.'
    ]
  }
];

// =========================================================================
// MODULE DÉDIÉ : MÉTHODOLOGIE OFFICIELLE DE LA DISSERTATION / COMPOSITION
// (Inspection Générale de l'Éducation Nationale - Gabon - Sujet de Type 1)
// =========================================================================
export const HISTOIRE_METHODOLOGIE_DISSERTATION_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-hg-methode-1-intro-structure',
    exerciseId: 'ex-hg-methode-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Structure Canonique de l\'Introduction (Normes Gabon)',
    microConcept: 'Selon la méthodologie officielle de la dissertation (ou composition) d\'Histoire-Géographie au Gabon pour le Sujet de type 1 :\nL\'INTRODUCTION comporte obligatoirement TROIS parties distinctes rédigées en TROIS paragraphes distincts, avec un retour à la ligne pour chaque élément :\n1. L\'amorce : Présentation du sujet et premier contact avec le correcteur (cadre spatio-temporel précis pour éviter tout hors-sujet).\n2. La problématique : La question centrale et unique à laquelle le devoir va répondre tout au long du développement.\n3. L\'annonce du plan : Le squelette du devoir indiquant les grandes parties retenues de manière concise.',
    hint: 'Retiens bien le chiffre clé : 3 parties obligatoires, 3 paragraphes et un retour à la ligne pour chacun.',
    prompt: 'D\'après la méthodologie officielle de l\'inspection d\'histoire-géographie au Gabon pour le sujet de type 1, comment l\'INTRODUCTION d\'une composition doit-elle être impérativement structurée ?',
    options: [
      'En trois parties distinctes rédigées obligatoirement en trois paragraphes avec un retour à la ligne pour chaque élément : l\'Amorce, la Problématique (centrale et unique) et l\'Annonce du plan',
      'En un seul bloc compact de texte sans aucun retour à la ligne pour ne pas perdre d\'espace sur la feuille',
      'En six paragraphes numérotés avec des puces pour résumer directement tous les arguments du devoir',
      'En sautant une ligne entre chaque phrase sans jamais annoncer de plan ni poser de problématique'
    ],
    correctAnswer: 'En trois parties distinctes rédigées obligatoirement en trois paragraphes avec un retour à la ligne pour chaque élément : l\'Amorce, la Problématique (centrale et unique) et l\'Annonce du plan',
    commonMistake: 'Rédiger l\'introduction d\'un seul trait sans retour à la ligne entre l\'amorce, la problématique et le plan, ce qui est sanctionné par les correcteurs au Gabon.',
    explanation: 'La norme gabonaise impose une séparation visuelle et logique claire : l\'Amorce (paragraphe 1), la Problématique (paragraphe 2 après retour à la ligne) et l\'Annonce du plan (paragraphe 3 après retour à la ligne).',
    steps: [
      'Paragraphe 1 : L\'Amorce (premier contact avec le correcteur, contexte spatio-temporel précis, pas de hors-sujet).',
      'Retour à la ligne.',
      'Paragraphe 2 : La Problématique (la question centrale et unique du devoir).',
      'Retour à la ligne.',
      'Paragraphe 3 : L\'Annonce du plan (les 2 ou 3 grandes parties de manière concise).'
    ]
  },
  {
    id: 'q-hg-methode-2-amorce',
    exerciseId: 'ex-hg-methode-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : L\'Amorce de l\'Introduction : Précision & Anti-Hors-Sujet',
    microConcept: 'L\'Amorce constitue le premier contact avec le correcteur. Elle doit situer le sujet dans son cadre historique (époque, siècle, dynamique) ou géographique, définir les termes clés et poser le contexte d\'émergence sans jamais tomber dans les généralités creuses (« Depuis la nuit des temps », « L\'homme a toujours fait la guerre ») qui constituent un faux départ.',
    hint: 'L\'amorce doit être rigoureusement reliée au sujet traité : dates, espace géographique concerné et contexte historique.',
    prompt: 'Pour un sujet de composition portant sur « Les apports architecturaux et scientifiques de l\'Égypte pharaonique », quelle démarche permet de réussir une amorce sans risque de hors-sujet ?',
    options: [
      'Situer l\'Égypte antique le long de la vallée du Nil (IVe-IIe millénaires av. J.-C.) et rappeler que la maîtrise des crues et la vénération du pharaon ont stimulé la géométrie et l\'architecture de pierre',
      'Commencer par raconter ses dernières vacances passées au bord de l\'océan à Port-Gentil',
      'Affirmer que depuis la création de la Terre tous les hommes construisent des gratte-ciels en verre',
      'Copier mot à mot le sujet quatre fois de suite pour remplir les premières lignes de la feuille'
    ],
    correctAnswer: 'Situer l\'Égypte antique le long de la vallée du Nil (IVe-IIe millénaires av. J.-C.) et rappeler que la maîtrise des crues et la vénération du pharaon ont stimulé la géométrie et l\'architecture de pierre',
    commonMistake: 'Faire une amorce trop large et intemporelle qui pourrait s\'appliquer à n\'importe quel devoir et n\'apporte aucune valeur historique concrète.',
    explanation: 'Une amorce efficace ancre immédiatement le sujet dans ses coordonnées spatiales (vallée du Nil) et temporelles (Antiquité égyptienne) et introduit la dynamique causale qui sera au cœur du sujet.',
    steps: [
      'Délimitation spatiale : situer le lieu où se déroule le phénomène historique étudié.',
      'Délimitation temporelle : préciser la période ou les siècles concernés.',
      'Mise en contexte : faire le lien logique immédiat avec les notions du sujet.'
    ]
  },
  {
    id: 'q-hg-methode-3-problematique',
    exerciseId: 'ex-hg-methode-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : La Problématique : Question Centrale & Unique',
    microConcept: 'La Problématique est le cœur intellectuel de la dissertation. Selon la règle officielle gabonaise, elle doit être UNIQUE et CENTRALE. Elle dégage la contradiction, la tension ou le paradoxe du sujet et donne la direction d\'ensemble à la réflexion.',
    hint: 'La problématique ne doit pas être un questionnaire à choix multiples : c\'est UNE SEULE question directrice majeure.',
    prompt: 'Pourquoi les inspecteurs d\'Histoire-Géographie au Gabon insistent-ils sur le fait que la problématique doit être « centrale et unique » ?',
    options: [
      'Parce qu\'une question directrice unique garantit la cohérence du raisonnement et évite l\'éparpillement du candidat dans une série de questions disparates',
      'Parce que le règlement interdit d\'utiliser plus d\'un point d\'interrogation par copie d\'examen',
      'Parce que le correcteur ne lit jamais le développement si l\'introduction comporte deux questions',
      'Parce que la problématique doit être obligatoirement rédigée en latin ancien'
    ],
    correctAnswer: 'Parce qu\'une question directrice unique garantit la cohérence du raisonnement et évite l\'éparpillement du candidat dans une série de questions disparates',
    commonMistake: 'Poser une succession de 4 ou 5 questions secondaires au lieu de formuler LA question fondamentale dont découlent toutes les autres.',
    explanation: 'Avoir une problématique unique permet de maintenir un fil conducteur solide tout au long du développement (les grandes parties étant des éléments de réponse structurés à cette même question) et d\'apporter un bilan clair en conclusion.',
    steps: [
      'Analyser les mots-clés du sujet et leurs contradictions.',
      'Formuler une question globale intégrant les axes majeurs du problème.',
      'Vérifier que chaque partie du développement constituera une réponse progressive à cette question unique.'
    ]
  },
  {
    id: 'q-hg-methode-4-plan',
    exerciseId: 'ex-hg-methode-4',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : L\'Annonce du Plan : Le Squelette Concis du Devoir',
    microConcept: 'L\'Annonce du plan constitue le 3e paragraphe de l\'introduction. Elle représente le squelette du devoir : elle doit être concise, élégante et faire apparaître clairement les deux ou trois grandes parties retenues. Elle ne doit ni noyer le lecteur sous des détails d\'exemples, ni rester trop vague.',
    hint: 'Le plan officiel de type 1 au Gabon s\'organise généralement en 2 ou 3 grandes parties bien articulées.',
    prompt: 'Quelle qualité essentielle doit posséder l\'annonce du plan dans le 3e paragraphe de l\'introduction selon la norme gabonaise ?',
    options: [
      'Elle doit présenter le squelette du devoir de manière concise et fluide (2 ou 3 grandes parties) sans entrer dans les détails d\'arguments ou d\'exemples',
      'Elle doit recopier l\'intégralité des sous-parties avec toutes les dates et tous les chiffres prévus',
      'Elle doit être formulée comme un poème rimé de huit vers',
      'Elle doit dissimuler les grandes parties pour maintenir le suspense jusqu\'à la dernière page'
    ],
    correctAnswer: 'Elle doit présenter le squelette du devoir de manière concise et fluide (2 ou 3 grandes parties) sans entrer dans les détails d\'arguments ou d\'exemples',
    commonMistake: 'Rédiger une annonce de plan de 15 lignes qui raconte déjà tout le devoir, ce qui alourdit l\'introduction et crée des répétitions.',
    explanation: 'L\'annonce du plan sert de carte routière pour le correcteur : elle expose clairement les grandes étapes du raisonnement sans dévoiler les démonstrations précises.',
    steps: [
      'Choix de la structure : plan en 2 grandes parties (ex: aspects/limites, causes/conséquences) ou 3 grandes parties.',
      'Formulation concise : utilisation de connecteurs logiques ordonnés (« Dans un premier temps..., ensuite..., enfin... »).',
      'Clarté : chaque partie annoncée doit correspondre exactement au titre implicite de la grande partie dans le corps du texte.'
    ]
  },
  {
    id: 'q-hg-methode-5-chapeau',
    exerciseId: 'ex-hg-methode-5',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Structure du Développement : La Phrase Chapeau',
    microConcept: 'Le développement d\'une composition s\'organise en deux ou trois parties selon la nature du sujet. Chaque grande partie débute OBLIGATOIREMENT par une « Phrase Chapeau ». Placée au tout début de la partie, cette introduction partielle a pour mission d\'annoncer le contenu et les sous-idées directrices de la grande partie avant d\'aborder les arguments détaillés.',
    hint: 'La phrase chapeau est un avant-goût synthétique placé en tête de partie qui guide le lecteur.',
    prompt: 'Dans la structure du développement d\'une composition d\'histoire-géo au Gabon, qu\'est-ce que la « PHRASE CHAPEAU » et où se situe-t-elle obligatoirement ?',
    options: [
      'Une introduction partielle placée au tout début de chaque grande partie pour en annoncer synthétiquement le contenu et les axes',
      'Une formule de politesse écrite en haut de la copie avant l\'introduction',
      'Un titre souligné en rouge au milieu d\'un paragraphe pour séparer deux phrases',
      'Une phrase de conclusion générale placée à la toute fin du devoir'
    ],
    correctAnswer: 'Une introduction partielle placée au tout début de chaque grande partie pour en annoncer synthétiquement le contenu et les axes',
    commonMistake: 'Oublier la phrase chapeau et attaquer directement par un exemple sans avoir annoncé la problématique interne de la grande partie.',
    explanation: 'La phrase chapeau joue le rôle d\'une boussole locale : elle informe immédiatement le correcteur de la direction prise par la grande partie et assure la clarté du devoir.',
    steps: [
      'Emplacement : première phrase de la grande partie I, II ou III.',
      'Contenu : annonce des sous-thèmes qui vont être argumentés.',
      'Disposition : suivie immédiatement du premier paragraphe argumentatif.'
    ]
  },
  {
    id: 'q-hg-methode-6-argument-aei',
    exerciseId: 'ex-hg-methode-6',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Les Arguments du Développement : La Règle Canonique (AEI)',
    microConcept: 'Au sein du développement, chaque paragraphe argumentatif défend une sous-idée. La norme gabonaise exige que chaque sous-idée soit : 1) Introduite par un connecteur logique (par ailleurs, de plus, en effet, en outre...), 2) Expliquée clairement (mécanisme de cause à effet, concept historique ou géographique), 3) Illustrée par un exemple précis (dates, chiffres, lieux, personnages, œuvres ou textes officiels).',
    hint: 'La formule gagnante en dissertation : Connecteur logique + Idée expliquée + Exemple précis et contextualisé.',
    prompt: 'Comment un candidat en composition d\'Histoire-Géo au Gabon doit-il structurer chacun de ses paragraphes d\'ARGUMENTS au sein d\'une grande partie ?',
    options: [
      'Chaque sous-idée doit être introduite par un connecteur logique, expliquée clairement dans sa causalité et illustrée par un exemple historique ou géographique précis',
      'Il suffit de donner une longue liste de dates historiques sans aucune explication',
      'Chaque paragraphe doit contenir uniquement l\'opinion personnelle du candidat sans preuve',
      'Il faut copier textuellement la même citation d\'un philosophe au début et à la fin de chaque ligne'
    ],
    correctAnswer: 'Chaque sous-idée doit être introduite par un connecteur logique, expliquée clairement dans sa causalité et illustrée par un exemple historique ou géographique précis',
    commonMistake: 'Lancer un exemple isolé sans l\'expliquer (l\'exemple n\'est pas un argument à lui seul), ou affirmer une idée sans preuve historique factuelle.',
    explanation: 'Un bon paragraphe argumentatif d\'histoire-géo ne juxtapose pas des anecdotes : il articule l\'affirmation théorique avec un connecteur, en explique le sens et l\'appuie sur un exemple concret irréfutable.',
    steps: [
      '1. Connecteur logique : fluidité et articulation de la démonstration.',
      '2. Explication causale : expliciter le pourquoi et le comment du phénomène.',
      '3. Exemple illustratif précis : ancrage chronologique, spatial ou institutionnel.'
    ]
  },
  {
    id: 'q-hg-methode-7-transition',
    exerciseId: 'ex-hg-methode-7',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Structure du Développement : Le Rôle de la Transition',
    microConcept: 'La transition est un court paragraphe placé à la fin d\'une grande partie (notamment si le plan comporte deux ou trois parties). Elle assure le lien dynamique du devoir en réalisant un double mouvement : résumer brièvement les acquis de la partie achevée et introduire la question directrice de la partie suivante.',
    hint: 'La transition relie deux mondes : elle fait le bilan d\'une partie et ouvre la porte à la suivante.',
    prompt: 'Quel est le rôle obligatoire du paragraphe de « TRANSITION » dans le développement selon la méthode officielle de la dissertation d\'histoire-géo au Gabon ?',
    options: [
      'Résumer les acquis de la partie qui s\'achève et introduire de manière fluide et logique la grande partie suivante',
      'Permettre au candidat de changer de stylo et de couleur d\'écriture au milieu du devoir',
      'Donner la note prévisionnelle que le candidat espère obtenir pour la première partie',
      'Raconter une anecdote humoristique sans aucun rapport avec le sujet pour détendre le correcteur'
    ],
    correctAnswer: 'Résumer les acquis de la partie qui s\'achève et introduire de manière fluide et logique la grande partie suivante',
    commonMistake: 'Passer brutalement d\'une partie à la suivante en sautant des lignes sans aucune phrase de transition, ce qui fragmente le raisonnement.',
    explanation: 'La transition est le ciment logique de la dissertation : elle montre au correcteur que la deuxième partie ne tombe pas du ciel mais découle naturellement des constats établis dans la première.',
    steps: [
      'Bilan partiel : récapituler en une phrase concise ce qui a été validé.',
      'Pivot critique / connecteur d\'opposition ou d\'approfondissement (« Cependant », « Dès lors »).',
      'Ouverture partielle : poser la question qui annonce l\'axe suivant.'
    ]
  },
  {
    id: 'q-hg-methode-8-conclusion-structure',
    exerciseId: 'ex-hg-methode-8',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Structure de la Conclusion : Saut de Ligne, Bilan & Ouverture',
    microConcept: 'La CONCLUSION est l\'aboutissement de la dissertation. Selon les normes de l\'inspection gabonaise :\n1. Elle se rédige obligatoirement après avoir SAUTÉ UNE LIGNE à la fin du développement.\n2. Elle comprend obligatoirement DEUX étapes fondamentales :\n- Le BILAN : un résumé synthétique qui rappelle la réponse finale apportée à la problématique initiale (sans rajouter d\'argument nouveau).\n- L\'OUVERTURE : une projection ou une question plus large en lien direct avec le programme officiel ou la leçon suivante.',
    hint: 'Saut d\'une ligne, Bilan répondant à la problématique, puis Ouverture vers la suite du programme.',
    prompt: 'Quelles sont les DEUX étapes fondamentales qui composent obligatoirement la CONCLUSION d\'une dissertation d\'histoire-géo au Gabon (après avoir sauté une ligne) ?',
    options: [
      'Le Bilan (résumé synthétique qui apporte la réponse définitive à la problématique) et l\'Ouverture (projection ou question élargie en lien avec le programme ou la leçon suivante)',
      'La répétition intégrale de l\'introduction et la signature avec son nom et prénom',
      'La liste des livres consultés à la bibliothèque et le nombre exact de mots rédigés',
      'Une excuse pour le manque de temps et une demande d\'indulgence au correcteur'
    ],
    correctAnswer: 'Le Bilan (résumé synthétique qui apporte la réponse définitive à la problématique) et l\'Ouverture (projection ou question élargie en lien avec le programme ou la leçon suivante)',
    commonMistake: 'Ajouter un nouvel argument dans le bilan (qui aurait dû être dans le développement), ou oublier totalement l\'ouverture.',
    explanation: 'La conclusion apporte le point final de l\'enquête intellectuelle : le bilan clôt définitivement la réponse à la problématique, tandis que l\'ouverture connecte la leçon étudiée aux leçons suivantes du programme scolaire gabonais.',
    steps: [
      'Règle matérielle : sauter une ligne avant la conclusion pour la détacher visuellement du développement.',
      'Étape 1 - Le Bilan : synthèse des réponses démontrées dans le devoir face à la problématique.',
      'Étape 2 - L\'Ouverture : élargissement chronologique ou thématique vers la leçon suivante du programme.'
    ]
  }
];

// Map linking the official history & methodology skills to their question sets
export const HISTORY_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  'skill-2s-hg-chap1-afrique': HISTOIRE_AFRICAINE_QUESTIONS,
  'skill-2s-hg-chap2-antiques': HISTOIRE_ANTIQUES_QUESTIONS,
  'skill-2s-hg-chap4-medievales': HISTOIRE_MEDIEVALES_QUESTIONS,
  'skill-2s-hg-chap5-modernes': HISTOIRE_MODERNES_QUESTIONS,
  'skill-2s-hg-dissertation-methode': HISTOIRE_METHODOLOGIE_DISSERTATION_QUESTIONS,
};

