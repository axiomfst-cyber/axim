import { ExerciseQuestion } from '../types';

// =====================================================================
// BANQUE OFFICIELLE DE QUESTIONS DE SVT : PREMIÈRE S & D (GABON)
// Progression officielle complète en 6 Parties et 15 Chapitres
// =====================================================================

export const PREMIERE_SVT_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // ===================================================================
  // PARTIE 1 : GÉOLOGIE DU GABON À LA LUMIÈRE DE LA TECTONIQUE DES PLAQUES
  // ===================================================================

  // -------------------------------------------------------------------
  // CHAPITRE 1 : Les grands ensembles géologiques du Gabon
  // -------------------------------------------------------------------
  'skill-1s-svt-chap1-ensembles-geologiques': [
    {
      id: 'q-1s-svt-c1-1',
      exerciseId: 'ex-1s-svt-c1-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Les quatre grands domaines géologiques du Gabon',
      microConcept: 'La géologie du Gabon se subdivise en 4 grands domaines structuraux : 1. Le Craton archéen (Chaillu et Nord-Gabon, > 2,5 Ga) ; 2. Le bassin sédimentaire paléoprotérozoïque du Francevillien (2,1 Ga, avec Oklo et Moanda) ; 3. La ceinture panafricaine plissée des Nyanga et de l\'Ogooué (~ 600 Ma) ; 4. Le bassin côtier sédimentaire crétacé et tertiaire (Port-Gentil).',
      hint: 'Le craton archéen représente le socle cristallin le plus ancien (> 2,5 milliards d\'années).',
      prompt: 'Quel ensemble géologique constitue le socle continental le plus ancien du Gabon, datant de plus de 2,5 milliards d\'années (Archéen) ?',
      options: [
        'Le Craton archéen du Chaillu et du Nord-Gabon',
        'Le bassin sédimentaire côtier atlantique',
        'La chaîne plissée panafricaine des Nyanga',
        'Le bassin tertiaire de la Nyanga'
      ],
      correctAnswer: 'Le Craton archéen du Chaillu et du Nord-Gabon',
      commonMistake: 'Confondre le bassin sédimentaire protérozoïque de Franceville (2,1 Ga) avec le socle granito-gneissique archéen du Chaillu (> 2,5 Ga).',
      explanation: 'Le Craton du Chaillu (au Sud) et le bloc du Nord-Gabon constituent le socle cristallin granitique et gneissique archéen induré et stable depuis plus de 2,5 milliards d\'années.',
      steps: [
        '1. Archéen (> 2,5 Ga) : Craton du Chaillu et Monts de Cristal.',
        '2. Paléoprotérozoïque (~ 2,1 Ga) : Bassin sédimentaire du Francevillien.',
        '3. Néoprotérozoïque (~ 600 Ma) : Ceinture panafricaine des Nyanga.',
        '4. Mésozoïque-Cénozoïque : Bassin sédimentaire côtier pétrolifère.'
      ]
    },
    {
      id: 'q-1s-svt-c1-2',
      exerciseId: 'ex-1s-svt-c1-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Le phénomène unique mondial des réacteurs naturels d\'Oklo',
      microConcept: 'Découverts en 1972 dans le bassin de Franceville au Gabon, les réacteurs naturels d\'Oklo sont les seuls réacteurs de fission nucléaire naturels connus sur Terre, ayant fonctionné spontanément il y a environ 2 milliards d\'années grâce à une concentration critique en Uranium 235 (environ 3 %) et à la présence d\'eau comme modérateur.',
      hint: 'La teneur isotopique en U-235 était beaucoup plus élevée il y a 2 milliards d\'années en raison de sa période radioactive.',
      prompt: 'Quelle condition géologique et physique capitale a permis le déclenchement spontané de réactions de fission nucléaire dans le gisement d\'uranium d\'Oklo il y a 2 milliards d\'années ?',
      options: [
        'Une abondance naturelle d\'Uranium 235 de l\'ordre de 3 % et la circulation d\'eau souterraine agissant comme modérateur de neutrons',
        'Une température mantellique supérieure à 5000 °C à la surface du sol',
        'L\'impact d\'un astéroïde radioactif géant dans le Haut-Ogooué',
        'L\'absence totale d\'oxygène et d\'eau dans les grès de Franceville'
      ],
      correctAnswer: 'Une abondance naturelle d\'Uranium 235 de l\'ordre de 3 % et la circulation d\'eau souterraine agissant comme modérateur de neutrons',
      commonMistake: 'Croire qu\'Oklo a été créé par l\'Homme ou que l\'uranium 238 était le fissile principal.',
      explanation: 'À 2 milliards d\'années, la proportion d\'U-235 était de ~3% (proche de l\'uranium enrichi de nos centrales modernes). L\'eau interstitielle a ralenti (modéré) les neutrons, initiant et régulant la réaction en chaîne pendant des centaines de milliers d\'années.',
      steps: [
        '1. Âge du gisement : Paléoprotérozoïque (~ 2 Ga).',
        '2. Teneur en 235U à cette époque : ~ 3,68 % (contre 0,72 % aujourd\'hui).',
        '3. Rôle de l\'eau : ralentissement des neutrons thermiques.',
        '4. Phénomène : 16 réacteurs naturels identifiés à Oklo et Okélobondo.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 2 : Les formations géologiques du Gabon et la tectonique des plaques
  // -------------------------------------------------------------------
  'skill-1s-svt-chap2-formations-tectonique': [
    {
      id: 'q-1s-svt-c2-1',
      exerciseId: 'ex-1s-svt-c2-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : L\'ouverture de l\'océan Atlantique Sud et la marge gabonaise',
      microConcept: 'Le bassin côtier gabonais est une marge continentale passive formée lors de la dislocation du supercontinent Gondwana et de l\'ouverture de l\'océan Atlantique Sud au Crétacé inférieur (-130 Ma). Il comprend des séries pré-rift, syn-rift (failles normales) et post-rift.',
      hint: 'Une marge passive ne présente aucune activité sismique ou volcanique majeure de subduction.',
      prompt: 'Quel contexte géodynamique de la tectonique des plaques caractérise la formation du bassin côtier gabonais à partir du Crétacé inférieur ?',
      options: [
        'Une marge continentale passive issue de l\'étirement lithosphérique et de l\'ouverture de l\'Atlantique Sud',
        'Une zone de subduction avec fosse océanique profonde',
        'Une chaîne de collision continentale active de type himalayen',
        'Un point chaud intraocéanique isolé'
      ],
      correctAnswer: 'Une marge continentale passive issue de l\'étirement lithosphérique et de l\'ouverture de l\'Atlantique Sud',
      commonMistake: 'Penser que la côte gabonaise est une marge active avec subduction alors qu\'il s\'agit d\'une marge passive stable bordant l\'Atlantique.',
      explanation: 'La marge gabonaise est le modèle type d\'une marge passive atlantique : rifting continental au Crétacé inférieur, dépôt d\'évaporites aptiennes, puis sédimentation marine post-rift avec subsidence thermique.',
      steps: [
        '1. Fragmentation du Gondwana (séparation Afrique-Amérique du Sud).',
        '2. Rifting syn-rift avec demi-grabens et failles normales.',
        '3. Crise de salinité aptienne (dépôt de couches épaisses de sel).',
        '4. Dérive océanique et mise en place de la marge passive.'
      ]
    },
    {
      id: 'q-1s-svt-c2-2',
      exerciseId: 'ex-1s-svt-c2-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Rôle du sel aptien et des pièges pétroliers au Gabon',
      microConcept: 'Au Gabon, la couche de sel aptien (évaporites) joue un rôle double : 1. Couverture imperméable parfaite retenant les hydrocarbures ; 2. Moteur de l\'halocinèse (tectonique salifère) formant des dômes de sel créant des pièges structuraux ante-salifères et post-salifères.',
      hint: 'Le sel est une roche très peu dense et ductile qui remonte sous forme de diapirs ou dômes.',
      prompt: 'Pourquoi la couche d\'évaporites (sel aptien) du bassin côtier gabonais est-elle déterminante pour les gisements pétroliers de Port-Gentil ?',
      options: [
        'Elle forme une couverture parfaitement imperméable et crée des dômes de sel piégeant le pétrole',
        'Elle est la roche-mère qui s\'est transformée en pétrole',
        'Elle dissout le pétrole pour le transformer en gaz naturel',
        'Elle refroidit la roche-mère pour stopper la maturation'
      ],
      correctAnswer: 'Elle forme une couverture parfaitement imperméable et crée des dômes de sel piégeant le pétrole',
      commonMistake: 'Confondre roche-mère (qui produit les hydrocarbures) et roche-couverture / piège (le sel imperméable).',
      explanation: 'Le sel aptien est imperméable, empêchant le pétrole de s\'échapper vers la surface. Sous la charge sédimentaire, il monte en dômes (diapirs), déformant les couches adjacentes en pièges anticlinaux majeurs.',
      steps: [
        '1. Roche-mère : sédiments lacustres ou marins riches en matière organique.',
        '2. Migration des hydrocarbures vers le haut.',
        '3. Blocage par le sel aptien imperméable (roche-couverture).',
        '4. Accumulation dans les roches-réservoirs poreuses (grès).'
      ]
    }
  ],

  // ===================================================================
  // PARTIE 2 : ÉDUCATION À LA SANTÉ SEXUELLE ET DE LA REPRODUCTION (ESSR)
  // ===================================================================

  // -------------------------------------------------------------------
  // CHAPITRE 3 : La parenté responsable
  // -------------------------------------------------------------------
  'skill-1s-svt-chap3-parente-responsable': [
    {
      id: 'q-1s-svt-c3-1',
      exerciseId: 'ex-1s-svt-c3-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Définition et piliers de la parenté responsable',
      microConcept: 'La parenté responsable est l\'engagement conscient et réfléchi d\'un couple à concevoir des enfants au moment opportun, selon ses capacités affectives, sanitaires et économiques, en ayant recours à la planification familiale (espacement d\'au moins 2 à 3 ans entre les naissances).',
      hint: 'Pense au bien-être physique et économique de la mère, de l\'enfant et de la famille.',
      prompt: 'Quel est l\'objectif fondamental de la « parenté responsable » dans le cadre de la santé de la reproduction au Gabon ?',
      options: [
        'Permettre aux parents de programmer et d\'espacer les naissances de manière éclairée afin d\'assurer le bien-être médical, affectif et économique des enfants',
        'Imposer un nombre obligatoire et fixe d\'enfants à tous les ménages par la loi',
        'Interdire définitivement toute procréation chez les jeunes adultes',
        'Supprimer tous les centres de santé maternelle'
      ],
      correctAnswer: 'Permettre aux parents de programmer et d\'espacer les naissances de manière éclairée afin d\'assurer le bien-être médical, affectif et économique des enfants',
      commonMistake: 'Réduire la parenté responsable uniquement à la limitation stricte des naissances sans inclure la santé maternelle et la responsabilité éducative.',
      explanation: 'La parenté responsable repose sur la liberté de procréation éclairée, l\'espacement des naissances pour préserver la santé de la mère et du nourrisson, et la garantie des moyens d\'éducation.',
      steps: [
        '1. Prise de décision conjointe et responsable des partenaires.',
        '2. Espacement des grossesses (minimum 24 mois recommandé par l\'OMS).',
        '3. Utilisation de méthodes contraceptives adaptées.',
        '4. Préservation de la scolarité et de l\'avenir des adolescents.'
      ]
    },
    {
      id: 'q-1s-svt-c3-2',
      exerciseId: 'ex-1s-svt-c3-2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : La double protection contraception / IST',
      microConcept: 'La notion de « double protection » désigne l\'usage simultané ou exclusif du préservatif (masculin ou féminin), qui est le SEUL moyen contraceptif offrant simultanément la prévention d\'une grossesse non désirée ET la protection contre les Infections Sexuellement Transmissibles (IST) dont le VIH/SIDA.',
      hint: 'La pilule hormonale protège de la grossesse mais pas du VIH.',
      prompt: 'Parmi les méthodes suivantes, laquelle assure la « double protection » (protection contre la grossesse ET contre les IST/VIH) ?',
      options: [
        'Le préservatif (masculin ou féminin)',
        'La pilule contraceptive combinée œstroprogestative',
        'L\'implant contraceptif sous-cutané',
        'Le stérilet ou Dispositif Intra-Utérin (DIU) au cuivre'
      ],
      correctAnswer: 'Le préservatif (masculin ou féminin)',
      commonMistake: 'Croire que la pilule ou l\'implant protègent contre les IST/VIH, alors qu\'ils n\'agissent que sur l\'ovulation.',
      explanation: 'Les méthodes contraceptives hormonales (pilule, implant) ou le stérilet empêchent la fécondation ou la nidation mais ne constituent aucune barrière physique contre les micro-organismes pathogènes (VIH, chlamydia, gonocoque, HPV). Seul le préservatif assure la double protection.',
      steps: [
        '1. Préservatif : barrière physique étanche.',
        '2. Blocage des spermatozoïdes = pas de fécondation.',
        '3. Blocage des virus et bactéries = pas de contamination IST/VIH.',
        '4. Stratégie clé de santé publique en milieu scolaire gabonais.'
      ]
    }
  ],

  // ===================================================================
  // PARTIE 3 : IDENTITÉ BIOLOGIQUE ET PROGRAMME GÉNÉTIQUE
  // ===================================================================

  // -------------------------------------------------------------------
  // CHAPITRE 4 : L'identité biologique des organismes
  // -------------------------------------------------------------------
  'skill-1s-svt-chap4-identite-biologique': [
    {
      id: 'q-1s-svt-c4-1',
      exerciseId: 'ex-1s-svt-c4-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Marqueurs du soi et système CMH/HLA',
      microConcept: 'L\'identité biologique d\'un individu est signée à la surface de toutes ses cellules nucléées par les glycoprotéines membranaires du Complexe Majeur d\'Histocompatibilité (CMH chez l\'animal, HLA chez l\'Homme). La diversité immense des allèles CMH fait que chaque individu possède une combinaison unique (sauf les vrais jumeaux).',
      hint: 'HLA = Human Leukocyte Antigens.',
      prompt: 'Quelles molécules membranaires présentes à la surface des cellules nucléées constituent la « carte d\'identité biologique » individuelle responsable du rejet des allogreffes ?',
      options: [
        'Les molécules du Complexe Majeur d\'Histocompatibilité (CMH / HLA)',
        'Les molécules d\'hémoglobine circulante',
        'Les phospholipides membranaires',
        'Les enzymes digestives pancréatiques'
      ],
      correctAnswer: 'Les molécules du Complexe Majeur d\'Histocompatibilité (CMH / HLA)',
      commonMistake: 'Confondre les antigènes érythrocytaires ABO (spécifiques des globules rouges sans noyau) avec les molécules HLA du CMH (présentes sur les cellules nucléées).',
      explanation: 'Les molécules du CMH/HLA présentent des peptides du soi ou du non-soi aux lymphocytes T. Lors d\'une greffe entre deux individus génétiquement différents (allogreffe), les molécules HLA étrangères sont reconnues comme non-soi et déclenchent le rejet immunitaire.',
      steps: [
        '1. CMH de classe I : présent sur toutes les cellules nucléées.',
        '2. CMH de classe II : présent sur les cellules présentatrices d\'antigènes (macrophages, LB).',
        '3. Polymorphisme allélique extrême : combinaison propre à chaque individu.',
        '4. Conséquence : rejet immunitaire si incompatibilité donneur-receveur.'
      ]
    },
    {
      id: 'q-1s-svt-c4-2',
      exerciseId: 'ex-1s-svt-c4-2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Système des groupes sanguins ABO et transfusion',
      microConcept: 'Le système ABO repose sur des agglutinogènes (A et B) fixés sur la membrane des hématies et des agglutinines (anticorps naturels anti-A et anti-B) présents dans le sérum. Un sujet du groupe O ne possède ni antigène A ni B, et possède les anticorps anti-A et anti-B : c\'est le donneur universel d\'hématies.',
      hint: 'Le groupe O n\'apporte aucun antigène A ou B étranger aux globules rouges transfusés.',
      prompt: 'Pourquoi un individu de groupe sanguin O Rhésus négatif (O-) est-il qualifié de « donneur universel » pour les concentrés d\'hématies ?',
      options: [
        'Parce que ses hématies ne portent ni l\'antigène A, ni l\'antigène B, ni l\'antigène D (Rhésus), évitant toute agglutination chez le receveur',
        'Parce que son sérum ne contient aucun anticorps',
        'Parce que son sang fabrique tous les antigènes possibles à la fois',
        'Parce que ses globules blancs détruisent le sang du receveur'
      ],
      correctAnswer: 'Parce que ses hématies ne portent ni l\'antigène A, ni l\'antigène B, ni l\'antigène D (Rhésus), évitant toute agglutination chez le receveur',
      commonMistake: 'Confondre le donneur universel (groupe O) avec le receveur universel (groupe AB+).',
      explanation: 'Ne portant aucun antigène de surface (ni A, ni B, ni Rh), les hématies O- ne peuvent être reconnues ni attaquées par les anticorps anti-A, anti-B ou anti-D du receveur.',
      steps: [
        '1. Groupe A : antigène A, anticorps anti-B.',
        '2. Groupe B : antigène B, anticorps anti-A.',
        '3. Groupe AB : antigènes A et B, aucun anticorps (receveur universel).',
        '4. Groupe O : aucun antigène, anticorps anti-A et anti-B (donneur universel).'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 5 : La structure de la molécule de l'ADN
  // -------------------------------------------------------------------
  'skill-1s-svt-chap5-structure-adn': [
    {
      id: 'q-1s-svt-c5-1',
      exerciseId: 'ex-1s-svt-c5-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Règle de complémentarité de Chargaff',
      microConcept: 'La molécule d\'ADN est constituée de deux brins hélicoïdaux antiparallèles reliés par des liaisons hydrogène entre bases azotées complémentaires : A s\'apparie toujours avec T par 2 liaisons hydrogène, et G s\'apparie avec C par 3 liaisons hydrogène. Par conséquent, %A = %T et %G = %C.',
      hint: 'Si G = 30 %, alors C = 30 %. Quel pourcentage reste-t-il pour A + T ?',
      prompt: 'Dans une molécule d\'ADN bicaténaire comportant 30 % de Guanine (G), quel est le pourcentage précis de Thymine (T) ?',
      options: [
        '20 %',
        '30 %',
        '40 %',
        '70 %'
      ],
      correctAnswer: '20 %',
      commonMistake: 'Répondre 30 % en confondant la base complémentaire de la guanine (qui est la cytosine, non la thymine).',
      explanation: 'Par complémentarité : G = C = 30 %, soit G + C = 60 %. L\'ensemble A + T représente donc 100 % - 60 % = 40 %. Comme A = T, on a %T = 40 % / 2 = 20 %.',
      steps: [
        '1. Complémentarité des bases : G = C = 30 %.',
        '2. Fraction restante A + T = 100 % - 60 % = 40 %.',
        '3. Comme A = T : %T = 40 % / 2 = 20 %.'
      ]
    },
    {
      id: 'q-1s-svt-c5-2',
      exerciseId: 'ex-1s-svt-c5-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Antiparallélisme et polarité des brins d\'ADN',
      microConcept: 'Les deux brins de la double hélice d\'ADN sont antiparallèles : l\'un est orienté dans le sens 5\' vers 3\' (extrémité 5\' phosphate libre, extrémité 3\' OH libre), tandis que le brin complémentaire est orienté dans le sens inverse 3\' vers 5\'.',
      hint: 'L\'extrémité 5\' porte un groupement phosphate ; l\'extrémité 3\' porte un carbone porteur d\'une fonction alcool OH.',
      prompt: 'Si un brin d\'ADN possède la séquence 5\'-A T G C C G A-3\', quelle est la séquence exacte du brin complémentaire dans le sens conventionnel 5\' vers 3\' ?',
      options: [
        '5\'-T C G G C A T-3\'',
        '5\'-T A C G G C T-3\'',
        '3\'-T C G G C A T-5\'',
        '5\'-A T G C C G A-3\''
      ],
      correctAnswer: '5\'-T C G G C A T-3\'',
      commonMistake: 'Oublier d\'inverser le sens de lecture lorsqu\'on écrit le brin complémentaire orienté 5\' vers 3\'.',
      explanation: 'Le brin initial est 5\'-ATG CCG A-3\'. Son complémentaire en face est 3\'-TAC GGC T-5\'. Écrit dans le sens conventionnel 5\'→3\', il se lit de droite à gauche : 5\'-T C G G C A T-3\'.',
      steps: [
        '1. Brin donné : 5\'-A-T-G-C-C-G-A-3\'.',
        '2. Complémentaire direct : 3\'-T-A-C-G-G-C-T-5\'.',
        '3. Retournement dans le sens 5\'→3\' : 5\'-T-C-G-G-C-A-T-3\'.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 6 : Le renouvellement moléculaire
  // -------------------------------------------------------------------
  'skill-1s-svt-chap6-renouvellement-moleculaire': [
    {
      id: 'q-1s-svt-c6-1',
      exerciseId: 'ex-1s-svt-c6-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Expérience de Meselson & Stahl',
      microConcept: 'L\'expérience de Meselson et Stahl (1958) utilisant les isotopes 15N et 14N a démontré que la réplication de l\'ADN est semi-conservative : chaque molécule fille conserve un brin parental ancien intact et synthétise un brin néoformé complémentaire sous l\'action de l\'ADN polymérase.',
      hint: 'Après 1 génération en milieu léger 14N, on obtient 100 % de molécules hybrides (15N-14N).',
      prompt: 'Dans l\'expérience de Meselson et Stahl, quel résultat obtenu à la 2ème génération (G2) en milieu 14N confirme définitivement le modèle semi-conservatif ?',
      options: [
        'L\'obtention de 50 % d\'ADN hybride (15N-14N) et 50 % d\'ADN léger (14N-14N)',
        'L\'obtention exclusive d\'ADN lourd (15N-15N)',
        'La disparition complète de toute trace d\'ADN',
        'Une répartition aléatoire sans bandes nettes'
      ],
      correctAnswer: 'L\'obtention de 50 % d\'ADN hybride (15N-14N) et 50 % d\'ADN léger (14N-14N)',
      commonMistake: 'Penser que l\'ADN hybride disparaît en G2 alors qu\'il reste constant en nombre absolu (les deux brins lourds initiaux sont conservés).',
      explanation: 'À la 2e génération, les 2 molécules hybrides se dupliquent : leurs brins 15N s\'associent à du 14N (donnant 2 hybrides) et leurs brins 14N s\'associent à du 14N (donnant 2 légers), soit un ratio 50% hybride / 50% léger.',
      steps: [
        '1. G0 : 100 % lourd (15N-15N).',
        '2. G1 : 100 % hybride (15N-14N).',
        '3. G2 : 50 % hybride (15N-14N) et 50 % léger (14N-14N).',
        '4. Confirmation rigoureuse du mécanisme semi-conservatif.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 7 : Du gène à la protéine
  // -------------------------------------------------------------------
  'skill-1s-svt-chap7-du-gene-a-la-proteine': [
    {
      id: 'q-1s-svt-c7-1',
      exerciseId: 'ex-1s-svt-c7-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Transcription de l\'ADN en ARNm',
      microConcept: 'La transcription s\'effectue dans le noyau : l\'ARN polymérase lit le brin transcrit d\'ADN dans le sens 3\'→5\' et synthétise un ARNm complémentaire 5\'→3\'. Dans l\'ARN, la Thymine (T) est remplacée par l\'Uracile (U), qui s\'apparie avec l\'Adénine (A).',
      hint: 'Attention : l\'ARN ne contient jamais de Thymine (T), mais de l\'Uracile (U).',
      prompt: 'Quelle molécule d\'ARN messager est transcrite à partir du brin d\'ADN transcrit suivant : 3\'-T A C C G A A C T-5\' ?',
      options: [
        '5\'-A U G G C U U G A-3\'',
        '5\'-A T G G C T T G A-3\'',
        '5\'-U A C C G A A C U-3\'',
        '3\'-A U G G C U U G A-5\''
      ],
      correctAnswer: '5\'-A U G G C U U G A-3\'',
      commonMistake: 'Laisser des Thymines (T) dans la molécule d\'ARN messager.',
      explanation: 'Complémentarité des bases lors de la transcription : T donne A, A donne U, C donne G, G donne C. Ainsi, 3\'-TAC CGA ACT-5\' est transcrit en 5\'-AUG GCU UGA-3\'.',
      steps: [
        '1. T de l\'ADN → A de l\'ARN.',
        '2. A de l\'ADN → U de l\'ARN.',
        '3. C de l\'ADN → G de l\'ARN ; G → C.',
        '4. Résultat : 5\'-AUG GCU UGA-3\' (noter le codon initiateur AUG et le codon stop UGA).'
      ]
    },
    {
      id: 'q-1s-svt-c7-2',
      exerciseId: 'ex-1s-svt-c7-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Propriétés du code génétique',
      microConcept: 'Le code génétique est le système de correspondance universel entre les 64 codons de l\'ARNm et les 20 acides aminés. Il est : 1. Universel (identique chez tous les êtres vivants) ; 2. Non chevauchant ; 3. Redondant ou dégénéré (plusieurs codons synonymes spécifient le même acide aminé).',
      hint: '64 codons possibles pour seulement 20 acides aminés différents.',
      prompt: 'Que signifie précisément l\'affirmation scientifique que le code génétique est « redondant » (ou dégénéré) ?',
      options: [
        'Plusieurs codons distincts peuvent spécifier le même acide aminé',
        'Un même codon peut coder pour plusieurs acides aminés différents au hasard',
        'Le code génétique se détériore avec le vieillissement',
        'Tous les codons codent pour le même acide aminé unique'
      ],
      correctAnswer: 'Plusieurs codons distincts peuvent spécifier le même acide aminé',
      commonMistake: 'Confondre redondance (plusieurs codons pour un même acide aminé) avec ambiguïté (qui signifierait qu\'un codon a plusieurs sens, ce qui n\'est pas le cas : le code n\'est pas ambigu).',
      explanation: 'Puisqu\'il existe 61 codons codant pour des acides aminés (et 3 codons stop) pour 20 acides aminés, la plupart des acides aminés sont codés par 2, 4 ou 6 codons différents (ex : la proline est codée par CCU, CCC, CCA, CCG).',
      steps: [
        '1. Nombre de nucléotides par codon : 3.',
        '2. Combinaisons possibles : 4³ = 64 codons.',
        '3. Nombre d\'acides aminés : 20.',
        '4. Redondance : synonymie des codons pour un même acide aminé.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 8 : Les enzymes, des catalyseurs biologiques
  // -------------------------------------------------------------------
  'skill-1s-svt-chap8-enzymes-catalyseurs': [
    {
      id: 'q-1s-svt-c8-1',
      exerciseId: 'ex-1s-svt-c8-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Caractéristiques du biocatalyseur et site actif',
      microConcept: 'Une enzyme est une protéine catalytique qui accélère considérablement la vitesse d\'une réaction biochimique à température corporelle sans être modifiée ni consommée. Elle possède une double spécificité (de substrat et d\'action) assurée par la structure tridimensionnelle de son site actif.',
      hint: 'L\'enzyme se retrouve intacte en fin de réaction : E + S ⇄ [ES] → E + P.',
      prompt: 'Quelles sont les deux propriétés fondamentales caractérisant une enzyme en tant que biocatalyseur ?',
      options: [
        'Elle accélère la réaction biochimique et se retrouve intacte à la fin sans être consommée',
        'Elle est détruite à chaque réaction et fournit de l\'énergie sous forme d\'électricité',
        'Elle ralentit les réactions pour protéger la cellule et modifie son propre ADN',
        'Elle transforme n\'importe quel substrat en eau'
      ],
      correctAnswer: 'Elle accélère la réaction biochimique et se retrouve intacte à la fin sans être consommée',
      commonMistake: 'Penser que l\'enzyme est un réactif consommé au cours de la réaction chimique.',
      explanation: 'L\'enzyme abaisse l\'énergie d\'activation de la réaction en formant un complexe intermédiaire enzyme-substrat [ES]. Elle catalyse la transformation du substrat en produit [P] et redevient immédiatement disponible pour un nouveau cycle.',
      steps: [
        '1. Formation du complexe transitoire Enzyme-Substrat : E + S ⇄ ES.',
        '2. Transformation chimique au niveau du site catalytique.',
        '3. Libération du produit : ES → E + P.',
        '4. Régénération totale de l\'enzyme libre intacte.'
      ]
    },
    {
      id: 'q-1s-svt-c8-2',
      exerciseId: 'ex-1s-svt-c8-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Cinétique enzymatique et vitesse maximale Vmax',
      microConcept: 'La vitesse initiale V0 d\'une réaction enzymatique augmente avec la concentration en substrat [S], puis atteint un plateau appelé vitesse maximale Vmax. À cette concentration, tous les sites actifs des molécules d\'enzymes sont occupés en permanence par le substrat : on parle de saturation enzymatique.',
      hint: 'Quand toutes les enzymes travaillent à plein régime, la vitesse ne peut plus augmenter.',
      prompt: 'Pourquoi la vitesse initiale d\'une réaction enzymatique plafonne-t-elle à une valeur maximale (Vmax) lorsque la concentration en substrat devient très élevée ?',
      options: [
        'Parce que toutes les molécules d\'enzymes sont saturées : la totalité des sites actifs est occupée par le substrat',
        'Parce que le substrat détruit les enzymes à forte concentration',
        'Parce que la température de la solution chute brutalement à 0 °C',
        'Parce que l\'enzyme se transforme spontanément en lipide'
      ],
      correctAnswer: 'Parce que toutes les molécules d\'enzymes sont saturées : la totalité des sites actifs est occupée par le substrat',
      commonMistake: 'Croire que l\'enzyme est épuisée ou détruite, alors qu\'elle fonctionne simplement à son taux de renouvellement maximal.',
      explanation: 'À forte concentration en substrat [S], la probabilité de rencontre enzyme-substrat atteint 100 %. Chaque enzyme libérant un produit lie instantanément un nouveau substrat. L\'enzyme est saturée et la vitesse atteint Vmax.',
      steps: [
        '1. Faible [S] : la vitesse V0 est proportionnelle à [S].',
        '2. Hausse de [S] : les sites actifs se remplissent progressivement.',
        '3. Forte [S] : saturation complète (100 % des enzymes sous forme ES).',
        '4. La vitesse devient constante et égale à Vmax.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 9 : Identité biologique et génotype
  // -------------------------------------------------------------------
  'skill-1s-svt-chap9-identite-biologique-genotype': [
    {
      id: 'q-1s-svt-c9-1',
      exerciseId: 'ex-1s-svt-c9-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Les trois échelles du phénotype dans la drépanocytose',
      microConcept: 'La drépanocytose (anémie falciforme) illustre la relation génotype-phénotype aux 3 échelles : 1. Moléculaire : mutation ponctuelle GAG → GTG remplaçant l\'acide glutamique par la valine en position 6 de la chaîne β (hémoglobine HbS qui polymérise en désoxygénation) ; 2. Cellulaire : hématies déformées en faucille (drépanocytes) rigides ; 3. Macroscopique : anémie hémolytique, crises vaso-occlusives douloureuses.',
      hint: 'Une seule modification d\'acide aminé change la solubilité de l\'hémoglobine.',
      prompt: 'Au Gabon et en Afrique centrale, quelle modification moléculaire précise est à l\'origine du phénotype drépanocytaire (HbS/HbS) ?',
      options: [
        'Le remplacement de l\'acide glutamique (hydrophile) par la valine (hydrophobe) en position 6 de la chaîne β de l\'hémoglobine',
        'La disparition complète des 4 atomes de fer de l\'hème',
        'La duplication du chromosome 21',
        'La destruction de la membrane cellulaire par une bactérie'
      ],
      correctAnswer: 'Le remplacement de l\'acide glutamique (hydrophile) par la valine (hydrophobe) en position 6 de la chaîne β de l\'hémoglobine',
      commonMistake: 'Penser que l\'hémoglobine est absente, alors qu\'elle est simplement mutée (HbS) et forme des fibres rigides en milieu hypoxique.',
      explanation: 'La mutation faux-sens GAG → GTG sur le codon 6 remplace un acide glutamique chargé par une valine hydrophobe. En condition de faible pression en O2, les molécules d\'HbS s\'agrègent en fibres hélicoïdales rigides déformant l\'hématie en faucille.',
      steps: [
        '1. Échelle moléculaire : mutation HbA → HbS (Val en position 6).',
        '2. Désoxygénation : polymérisation de l\'HbS en longues fibres insolubles.',
        '3. Échelle cellulaire : déformation en faucille, rigidité et fragilité des hématies.',
        '4. Échelle macroscopique : vaso-occlusions capillaires et anémie sévère.'
      ]
    }
  ],

  // ===================================================================
  // PARTIE 4 : GÈNES ET BIOTECHNOLOGIES
  // ===================================================================

  // -------------------------------------------------------------------
  // CHAPITRE 10 : Génie génétique et applications
  // -------------------------------------------------------------------
  'skill-1s-svt-chap10-genie-genetique': [
    {
      id: 'q-1s-svt-c10-1',
      exerciseId: 'ex-1s-svt-c10-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Outils de biologie moléculaire (Enzymes de restriction & Ligases)',
      microConcept: 'Le génie génétique repose sur deux outils enzymatiques clés : 1. Les enzymes de restriction (endonucléases bactériennes), qui coupent l\'ADN à des séquences palindromiques spécifiques en générant des extrémités cohésives (bouts collants) ; 2. L\'ADN ligase, qui suture et rétablit les liaisons phosphodiester entre les fragments d\'ADN.',
      hint: 'L\'une coupe l\'ADN comme des ciseaux, l\'autre recolle les morceaux.',
      prompt: 'Quel outil moléculaire permet de couper spécifiquement l\'ADN à un site de reconnaissance nucléotidique précis pour isoler un gène d\'intérêt ?',
      options: [
        'Une enzyme de restriction (endonucléase)',
        'Une ADN ligase',
        'Une ARN polymérase',
        'Une amylase salivaire'
      ],
      correctAnswer: 'Une enzyme de restriction (endonucléase)',
      commonMistake: 'Confondre l\'enzyme de restriction (ciseaux moléculaires coupant l\'ADN) avec l\'ADN ligase (colle moléculaire suturant l\'ADN).',
      explanation: 'Les enzymes de restriction reconnaissent des séquences spécifiques (souvent palindromiques de 4 à 8 paires de bases comme EcoRI : 5\'-GAATTC-3\') et coupent les brins d\'ADN, permettant d\'insérer le fragment dans un vecteur plasmidique.',
      steps: [
        '1. Isolement du gène d\'intérêt par coupure avec une enzyme de restriction.',
        '2. Ouverture du plasmide bactérien avec la même enzyme de restriction.',
        '3. Appariement des bouts collants complémentaires.',
        '4. Soudure covalente par l\'ADN ligase pour former un plasmide recombinant.'
      ]
    }
  ],

  // ===================================================================
  // PARTIE 5 : QUELQUES ASPECTS DU MÉTABOLISME ÉNERGÉTIQUE
  // ===================================================================

  // -------------------------------------------------------------------
  // CHAPITRE 11 : Les dépenses énergétiques des organismes
  // -------------------------------------------------------------------
  'skill-1s-svt-chap11-depenses-energetiques': [
    {
      id: 'q-1s-svt-c11-1',
      exerciseId: 'ex-1s-svt-c11-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Définition et conditions du métabolisme de base',
      microConcept: 'Le métabolisme de base (MB) est la dépense énergétique incompressible nécessaire pour assurer les fonctions vitales de l\'organisme au repos (battements cardiaques, respiration, tonus musculaire, activités cellulaires). Il se mesure chez un sujet au repos complet, à jeun depuis 12h, éveillé et placé en neutralité thermique (20-22 °C).',
      hint: 'C\'est l\'énergie minimale requise pour rester en vie sans bouger ni digérer.',
      prompt: 'Dans quelles conditions physiologiques strictes doit-on mesurer le Métabolisme de Base (MB) d\'un être humain ?',
      options: [
        'Sujet allongé au repos physique et psychique complet, à jeun depuis 12 heures, éveillé et à neutralité thermique',
        'Pendant une séance intensive de course à pied après le repas',
        'Pendant le sommeil profond en état d\'hypothermie',
        'Immédiatement après un repas riche en lipides à 40 °C'
      ],
      correctAnswer: 'Sujet allongé au repos physique et psychique complet, à jeun depuis 12 heures, éveillé et à neutralité thermique',
      commonMistake: 'Oublier le jeûne (pour éviter l\'action dynamique spécifique liée à la digestion) ou la neutralité thermique (pour éviter les dépenses de thermorégulation).',
      explanation: 'Ces conditions éliminent les dépenses supplémentaires dues au travail musculaire, à la digestion des aliments (thermogénèse postprandiale) et à la lutte contre le chaud ou le froid (thermorégulation).',
      steps: [
        '1. Repos physique : pas de travail musculaire actif.',
        '2. À jeun (12h) : aucune dépense digestive.',
        '3. Neutralité thermique : pas de frisson thermique ni sudation.',
        '4. Éveillé : mesure des fonctions vitales de base.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 12 : L'énergie du fonctionnement cellulaire
  // -------------------------------------------------------------------
  'skill-1s-svt-chap12-energie-cellulaire': [
    {
      id: 'q-1s-svt-c12-1',
      exerciseId: 'ex-1s-svt-c12-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : L\'ATP, monnaie énergétique universelle',
      microConcept: 'L\'Adénosine Triphosphate (ATP) est la monnaie énergétique universelle de toute cellule vivante. Son hydrolyse en ADP + Pi libère une énergie standard élevée (ΔG°\' = -30,5 kJ/mol) directement couplée aux travaux cellulaires (contraction musculaire, transports actifs membranaires, synthèses moléculaires).',
      hint: 'L\'ATP possède deux liaisons phosphoanhydres hautement énergétiques entre ses groupements phosphate.',
      prompt: 'Quelle réaction biochimique fournit directement l\'énergie nécessaire au glissement des myofilaments lors de la contraction musculaire ?',
      options: [
        'L\'hydrolyse de l\'ATP selon : ATP + H2O → ADP + Pi + Énergie (-30,5 kJ/mol)',
        'La condensation de deux molécules de glucose en amidon',
        'La synthèse directe d\'acide gras à partir d\'acides aminés',
        'La dissolution de l\'urée dans le sang'
      ],
      correctAnswer: 'L\'hydrolyse de l\'ATP selon : ATP + H2O → ADP + Pi + Énergie (-30,5 kJ/mol)',
      commonMistake: 'Penser que le glucose est utilisé directement par les têtes de myosine sans passer par l\'intermédiaire obligatoire de l\'ATP.',
      explanation: 'Le glucose ne peut pas être utilisé directement par les myofibrilles. C\'est l\'énergie libérée par la rupture de la liaison phosphoanhydre terminale de l\'ATP qui fait pivoter les têtes de myosine sur l\'actine.',
      steps: [
        '1. Fixation de l\'ATP sur la tête de myosine.',
        '2. Hydrolyse de l\'ATP en ADP + Pi par l\'activité ATPase.',
        '3. Changement de conformation et pivotement de la tête de myosine (traction de l\'actine).',
        '4. Fixation d\'un nouvel ATP provoquant le détachement de la myosine.'
      ]
    },
    {
      id: 'q-1s-svt-c12-2',
      exerciseId: 'ex-1s-svt-c12-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Bilan comparé Respiration cellulaire vs Fermentation',
      microConcept: 'La dégradation du glucose commence toujours dans le cytoplasme par la glycolyse (gain net de 2 ATP). En aérobiose, la respiration mitochondriale dégrade totalement le pyruvate en CO2 et H2O, produisant 36 à 38 ATP par molécule de glucose. En anaérobiose, la fermentation ne produit que 2 ATP au total.',
      hint: 'La respiration oxyde entièrement la matière organique, d\'où un rendement énergétique très supérieur.',
      prompt: 'Quel est le rendement net en molécules d\'ATP de la respiration cellulaire complète d\'une molécule de glucose, comparé à celui de la fermentation ?',
      options: [
        '36 à 38 ATP par molécule de glucose pour la respiration, contre seulement 2 ATP pour la fermentation',
        '2 ATP pour la respiration contre 36 ATP pour la fermentation',
        'Exactement 100 ATP dans les deux processus',
        '0 ATP dans la respiration car elle consomme toute l\'énergie'
      ],
      correctAnswer: '36 à 38 ATP par molécule de glucose pour la respiration, contre seulement 2 ATP pour la fermentation',
      commonMistake: 'Oublier que la fermentation ne permet que de régénérer le NAD+ pour maintenir la glycolyse cytosolique (rendement limité à 2 ATP).',
      explanation: 'La respiration cellulaire oxyde totalement le glucose grâce au cycle de Krebs et à la chaîne respiratoire mitochondriale (accepteur final O2), libérant ~36 ATP, alors que la fermentation laisse un déchet organique encore riche en énergie (lactate ou éthanol) avec seulement 2 ATP nets.',
      steps: [
        '1. Glycolyse cytosolique commune : 1 Glucose → 2 Pyruvates + 2 ATP + 2 NADH,H+.',
        '2. Respiration mitochondriale : Cycle de Krebs + Chaîne respiratoire = 34 à 36 ATP supplémentaires.',
        '3. Bilan Respiration : 36 à 38 ATP / glucose.',
        '4. Bilan Fermentation : 2 ATP nets / glucose.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 13 : Le métabolisme énergétique chez l'Homme
  // -------------------------------------------------------------------
  'skill-1s-svt-chap13-metabolisme-homme': [
    {
      id: 'q-1s-svt-c13-1',
      exerciseId: 'ex-1s-svt-c13-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Les 3 filières énergétiques de la contraction musculaire',
      microConcept: 'Le muscle régénère l\'ATP via 3 filières : 1. Anaérobie alactique (réserves de phosphocréatine PCr, très puissante mais épuisée en 5-10 secondes : sprint, haltérophilie) ; 2. Anaérobie lactique (glycolyse rapide produisant du lactate, effort maximal de 30s à 2 min) ; 3. Aérobie (oxydation avec O2, puissance modérée mais endurance illimitée).',
      hint: 'Pense à un sprint de 60 mètres : départ explosif sans oxygène et sans production immédiate d\'acide lactique.',
      prompt: 'Quelle filière énergétique musculaire fournit l\'ATP de manière quasi-instantanée et avec une puissance maximale lors d\'un effort explosif de quelques secondes (comme un saut ou un démarrage de sprint) ?',
      options: [
        'La filière anaérobie alactique utilisant la phosphocréatine (PCr)',
        'La filière aérobie par oxydation des lipides mitochondriaux',
        'La fermentation alcoolique intramusculaire',
        'La photosynthèse cutanée'
      ],
      correctAnswer: 'La filière anaérobie alactique utilisant la phosphocréatine (PCr)',
      commonMistake: 'Penser que l\'acide lactique est produit dès la première seconde d\'un saut, alors que c\'est la phosphocréatine sans lactate qui intervient d\'abord.',
      explanation: 'La phosphocréatine cède instantanément son groupement phosphate à l\'ADP sous l\'action de la créatine kinase : PCr + ADP ⇄ Créatine + ATP. Cette filière ne nécessite aucun oxygène et ne produit aucun déchet lactique.',
      steps: [
        '1. Durée d\'action : 0 à 10 secondes.',
        '2. Réaction : Phosphocréatine + ADP → Créatine + ATP.',
        '3. Avantage : puissance maximale immédiate sans inertie.',
        '4. Limite : stock musculaire très faible, épuisé rapidement.'
      ]
    }
  ],

  // ===================================================================
  // PARTIE 6 : FLUX D'ÉNERGIE ET CYCLE DE LA MATIÈRE
  // ===================================================================

  // -------------------------------------------------------------------
  // CHAPITRE 14 : La conversion de l'énergie lumineuse en énergie chimique
  // -------------------------------------------------------------------
  'skill-1s-svt-chap14-conversion-lumineuse': [
    {
      id: 'q-1s-svt-c14-1',
      exerciseId: 'ex-1s-svt-c14-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Les deux phases couplées de la photosynthèse',
      microConcept: 'La photosynthèse dans le chloroplaste comporte 2 phases couplées : 1. Phase photochimique (dans les thylakoïdes) : capture des photons par les chlorophylles, photolyse de l\'eau (2 H2O → O2 + 4 H+ + 4 e-) libérant O2, et production d\'ATP et de NADPH,H+ ; 2. Phase chimique (dans le stroma) : cycle de Calvin utilisant l\'ATP et le NADPH,H+ pour fixer le CO2 en molécules organiques glucidiques.',
      hint: 'Le dioxygène (O2) rejeté par les plantes vertes provient de l\'eau et non du CO2.',
      prompt: 'D\'où provient exactement le dioxygène (O2) rejeté dans l\'atmosphère par les plantes vertes au cours de la photosynthèse ?',
      options: [
        'De la photolyse (oxydation) des molécules d\'eau (H2O) dans les thylakoïdes',
        'Du découpage des molécules de gaz carbonique (CO2)',
        'De la dégradation du glucose stocké dans les racines',
        'De l\'azote atmosphérique absorbé par les feuilles'
      ],
      correctAnswer: 'De la photolyse (oxydation) des molécules d\'eau (H2O) dans les thylakoïdes',
      commonMistake: 'L\'erreur historique classique consiste à penser que l\'O2 provient du CO2 absorbé (l\'expérience de Ruben et Kamen avec l\'isotope lourd 18O a prouvé qu\'il provient de l\'eau H2O).',
      explanation: 'À la lumière, le photosystème II arrache des électrons à l\'eau pour régénérer son pigment chlorophyllien excité : 2 H2O → O2 + 4 H+ + 4 e-. C\'est la photolyse de l\'eau qui libère le dioxygène gazeux.',
      steps: [
        '1. Absorption des photons lumineux par les pigments de l\'antenne collectrice.',
        '2. Transfert d\'énergie au centre réactionnel P680.',
        '3. Oxydation de l\'eau : 2 H2O → O2 + 4 H+ + 4 e-.',
        '4. Rejet d\'O2 gazeux par les stomates foliaires.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // CHAPITRE 15 : Flux d'énergie, cycle de la matière et actions de l'Homme sur le cycle du carbone
  // -------------------------------------------------------------------
  'skill-1s-svt-chap15-flux-energie-carbone': [
    {
      id: 'q-1s-svt-c15-1',
      exerciseId: 'ex-1s-svt-c15-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : La forêt gabonaise comme puits de carbone mondial',
      microConcept: 'Couvrant 88 % de la superficie du pays (environ 22 millions d\'hectares) et préservée par un réseau de 13 parcs nationaux, la forêt équatoriale du Gabon absorbe environ 140 millions de tonnes de CO2 par an et n\'en émet que 30 millions, dégageant un solde positif net de plus de 100 millions de tonnes de CO2 séquestrées annuellement.',
      hint: 'Un puits de carbone absorbe plus de gaz carbonique qu\'il n\'en émet.',
      prompt: 'Pourquoi le Gabon est-il reconnu à l\'échelle mondiale lors des Conférences sur le Climat (COP) comme un « puits de carbone net » de premier plan ?',
      options: [
        'Parce que sa forêt équatoriale (88 % du territoire) séquestre annuellement plus de 100 millions de tonnes de CO2 nettes de plus qu\'elle n\'en émet',
        'Parce que le Gabon n\'utilise aucune énergie et ne possède aucune industrie',
        'Parce que les océans ne touchent pas les côtes gabonaises',
        'Parce que le pays ne possède aucun être vivant respirant de l\'oxygène'
      ],
      correctAnswer: 'Parce que sa forêt équatoriale (88 % du territoire) séquestre annuellement plus de 100 millions de tonnes de CO2 nettes de plus qu\'elle n\'en émet',
      commonMistake: 'Confondre puits de carbone (absorption nette de carbone atmosphérique par la photosynthèse forestière) et source de carbone (rejets nets liés aux énergies fossiles).',
      explanation: 'Grâce à une politique rigoureuse de conservation forestière et à une biomasse dense, le Gabon capture environ 4 fois plus de dioxyde de carbone qu\'il n\'en émet, contribuant massivement à freiner le réchauffement planétaire.',
      steps: [
        '1. Couverture forestière : 88 % du territoire national.',
        '2. Réseau écologique : 13 parcs nationaux (Lopé, Ivindo, Minkébé, etc.).',
        '3. Bilan carbone annuel : ~140 Mt absorbées contre ~30 Mt émises.',
        '4. Statut diplomatique et écologique : leader mondial de la transition écologique.'
      ]
    },
    {
      id: 'q-1s-svt-c15-2',
      exerciseId: 'ex-1s-svt-c15-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Rôle de l\'éléphant de forêt dans le cycle de la biomasse végétale',
      microConcept: 'Dans les forêts du Gabon, l\'éléphant de forêt d\'Afrique (Loxodonta cyclotis) est une espèce clé de voûte (« ingénieur écologique ») : il disperse les grosses graines d\'arbres de haute canopée à bois dense (haute teneur en carbone) et éclaircit la sous-végétation, maximisant le stockage à long terme du carbone dans l\'écosystème.',
      hint: 'Zoochorie et sélection des arbres à haute densité de bois et de carbone.',
      prompt: 'En quoi la sauvegarde de l\'éléphant de forêt (dont le Gabon abrite plus de 60 % de la population mondiale restante) est-elle directement liée au stockage du carbone forestier ?',
      options: [
        'Il disperse les graines des grands arbres à bois lourd et dense très riches en carbone, favorisant leur régénération au détriment des espèces à faible stockage de carbone',
        'Il absorbe le gaz carbonique directement par sa trompe',
        'Il élimine toute la végétation pour empêcher la respiration cellulaire',
        'Il transforme la terre en roches carbonatées'
      ],
      correctAnswer: 'Il disperse les graines des grands arbres à bois lourd et dense très riches en carbone, favorisant leur régénération au détriment des espèces à faible stockage de carbone',
      commonMistake: 'Considérer les animaux uniquement comme des consommateurs dégradant la végétation sans comprendre leur rôle symbiotique vital de régénération des arbres géants.',
      explanation: 'Sans les éléphants qui ingèrent leurs gros fruits et disséminent leurs graines sur des dizaines de kilomètres, les grands arbres à bois lourd ne pourraient pas se reproduire. Leur disparition entraînerait une baisse de 7% de la capacité de stockage de carbone de la forêt du bassin du Congo.',
      steps: [
        '1. Consommation des fruits des arbres géants de canopée.',
        '2. Transit digestif activant la levée de dormance des graines.',
        '3. Dissémination et fertilisation par le fumier.',
        '4. Maintien d\'une forêt à très haute densité de carbone séquestré.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // ALIASES COMPATIBILITÉ AVEC LES ANCIENNES CLÉS
  // -------------------------------------------------------------------
  'skill-1s-svt-adn-replication': [
    {
      id: 'q-1s-svt-adn-legacy-1',
      exerciseId: 'ex-1s-svt-c5-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Structure moléculaire & complémentarité des bases',
      microConcept: 'La molécule d\'ADN est une double hélice antiparallèle de nucléotides. Les bases azotées sont strictement complémentaires par liaisons hydrogène : l\'Adénine (A) s\'apparie toujours avec la Thymine (T) par 2 liaisons hydrogène, et la Guanine (G) avec la Cytosine (C) par 3 liaisons hydrogène.',
      hint: 'Règle de Chargaff : A = T et G = C.',
      prompt: 'Dans un fragment d\'ADN bicaténaire comportant 20 % de Cytosine (C), quel est le pourcentage exact d\'Adénine (A) selon la règle de complémentarité ?',
      options: ['30 %', '20 %', '40 %', '50 %'],
      correctAnswer: '30 %',
      commonMistake: 'Répondre 20 % en confondant la complémentarité (A s\'associe avec T, G s\'associe avec C).',
      explanation: 'Si C = 20 %, alors G = 20 %, total G+C = 40 %. Le reste (A+T) = 60 %, donc A = 30 %.',
      steps: ['1. %G = %C = 20 %.', '2. Total (A + T) = 60 %.', '3. %A = 30 %.']
    }
  ],
  'skill-1s-svt-expression-genique': [
    {
      id: 'q-1s-svt-expr-legacy-1',
      exerciseId: 'ex-1s-svt-c7-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Transcription de l\'ADN en ARN messager',
      microConcept: 'La transcription a lieu dans le noyau chez les eucaryotes. L\'ARN polymérase lit le brin transcrit d\'ADN dans le sens 3\'→5\' et synthétise un ARNm complémentaire 5\'→3\'. Dans l\'ARN, la Thymine (T) est remplacée par l\'Uracile (U).',
      hint: 'Face à A sur le brin transcrit, l\'ARN incorpore U.',
      prompt: 'Si la séquence du brin transcrit d\'ADN est 3\'-TAC GGT CCA-5\', quelle sera la séquence de l\'ARNm ?',
      options: ['5\'-AUG CCA GGU-3\'', '5\'-ATG CCA GGT-3\'', '5\'-UAC GGU CCA-3\'', '5\'-TAC GGT CCA-3\''],
      correctAnswer: '5\'-AUG CCA GGU-3\'',
      commonMistake: 'Laisser des Thymines dans l\'ARN.',
      explanation: 'Règles de transcription : T→A, A→U, C→G, G→C.',
      steps: ['1. 3\'-TAC GGT CCA-5\' donne 5\'-AUG CCA GGU-3\'.']
    }
  ],
  'skill-1s-svt-tectonique': [
    {
      id: 'q-1s-svt-tect-legacy-1',
      exerciseId: 'ex-1s-svt-c2-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Marge passive gabonaise',
      microConcept: 'Le bassin côtier gabonais est une marge continentale passive formée lors de l\'ouverture de l\'océan Atlantique Sud au Crétacé inférieur.',
      hint: 'Marge passive atlantique.',
      prompt: 'Quel contexte géotectonique caractérise la formation du bassin côtier gabonais à partir du Crétacé ?',
      options: [
        'Une marge continentale passive issue de l\'étirement lithosphérique et de l\'ouverture de l\'Atlantique Sud',
        'Une zone de subduction avec fosse océanique profonde',
        'Une chaîne de collision continentale active',
        'Un point chaud isolé'
      ],
      correctAnswer: 'Une marge continentale passive issue de l\'étirement lithosphérique et de l\'ouverture de l\'Atlantique Sud',
      commonMistake: 'Confondre marge passive et zone de subduction.',
      explanation: 'La marge gabonaise est le prototype de la marge passive atlantique post-rift.',
      steps: ['1. Dislocation du Gondwana.', '2. Marge continentale passive.']
    }
  ],
  'skill-1s-svt-ecosystemes-gabon': [
    {
      id: 'q-1s-svt-eco-legacy-1',
      exerciseId: 'ex-1s-svt-c15-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Puits de carbone gabonais',
      microConcept: 'La forêt équatoriale gabonaise (88 % du territoire) est un puits de carbone net majeur.',
      hint: 'Absorption de CO2 supérieure aux émissions.',
      prompt: 'Pourquoi le Gabon est-il qualifié de puits de carbone mondial ?',
      options: [
        'Parce que sa forêt équatoriale séquestre plus de 100 millions de tonnes de CO2 nettes chaque année',
        'Parce qu\'il ne possède pas d\'industries',
        'Parce qu\'il n\'a pas d\'accès à la mer',
        'Parce qu\'il ne respire pas'
      ],
      correctAnswer: 'Parce que sa forêt équatoriale séquestre plus de 100 millions de tonnes de CO2 nettes chaque année',
      commonMistake: 'Confondre puits et source.',
      explanation: 'Le Gabon absorbe environ 140 Mt de CO2 et n\'en émet que 30 Mt.',
      steps: ['1. Forêt dense de 22 millions d\'hectares.', '2. Puits de carbone net.']
    }
  ]
};
