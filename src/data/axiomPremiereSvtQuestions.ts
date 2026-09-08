import { ExerciseQuestion } from '../types';

// =====================================================================
// BANQUE OFFICIELLE DE QUESTIONS DE SVT : PREMIÈRE S & D (GABON)
// ADN, Expression génétique, Tectonique des plaques, Immunologie, Écosystèmes du Gabon
// =====================================================================

export const PREMIERE_SVT_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // -------------------------------------------------------------------
  // 1. ADN, RÉPLICATION SEMI-CONSERVATIVE & CYCLE CELLULAIRE
  // -------------------------------------------------------------------
  'skill-1s-svt-adn-replication': [
    {
      id: 'q-1s-svt-adn-1',
      exerciseId: 'ex-1s-svt-adn-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Structure moléculaire & complémentarité des bases',
      microConcept: 'La molécule d\'ADN est une double hélice antiparallèle de nucléotides. Les bases azotées sont strictement complémentaires par liaisons hydrogène : l\'Adénine (A) s\'apparie toujours avec la Thymine (T) par 2 liaisons hydrogène, et la Guanine (G) avec la Cytosine (C) par 3 liaisons hydrogène.',
      hint: 'Règle de Chargaff : A = T et G = C.',
      prompt: 'Dans un fragment d\'ADN bicaténaire comportant 20 % de Cytosine (C), quel est le pourcentage exact d\'Adénine (A) selon la règle de complémentarité ?',
      options: [
        '30 %',
        '20 %',
        '40 %',
        '50 %'
      ],
      correctAnswer: '30 %',
      commonMistake: 'Répondre 20 % en confondant la complémentarité (A s\'associe avec T, G s\'associe avec C).',
      explanation: 'Si C = 20 %, alors par complémentarité G = 20 %. L\'ensemble G + C représente 40 % de l\'ADN. Le reste (A + T) représente donc 100 % - 40 % = 60 %. Comme A = T, le pourcentage d\'Adénine est de 60 % / 2 = 30 %.',
      steps: [
        '1. Complémentarité : %G = %C = 20 %.',
        '2. Total (G + C) = 40 %.',
        '3. Total (A + T) = 100 % - 40 % = 60 %.',
        '4. %A = %T = 60 % / 2 = 30 %.'
      ]
    },
    {
      id: 'q-1s-svt-adn-2',
      exerciseId: 'ex-1s-svt-adn-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Expérience de Meselson & Stahl (Réplication semi-conservative)',
      microConcept: 'L\'expérience de Meselson et Stahl (1958) utilisant les isotopes lourds et légers de l\'azote (15N et 14N) a prouvé que la réplication de l\'ADN est semi-conservative : chaque nouvelle molécule d\'ADN formée est constituée d\'un brin parental conservé et d\'un brin néoformé.',
      hint: 'Après une génération en milieu léger (14N), toutes les molécules d\'ADN ont un brin lourd 15N et un brin léger 14N (densité intermédiaire hybride).',
      prompt: 'Dans l\'expérience de Meselson et Stahl, quelle observation après la première division cellulaire en milieu contenant de l\'azote léger 14N a permis d\'éliminer définitivement l\'hypothèse de la réplication conservative ?',
      options: [
        'L\'obtention exclusive d\'une seule bande d\'ADN de densité hybride intermédiaire (100 % d\'ADN hybride 15N-14N)',
        'L\'obtention de deux bandes séparées : l\'une purement lourde 15N et l\'autre purement légère 14N',
        'La destruction totale de tous les brins d\'ADN parentaux',
        'La disparition complète de toute trace d\'azote'
      ],
      correctAnswer: 'L\'obtention exclusive d\'une seule bande d\'ADN de densité hybride intermédiaire (100 % d\'ADN hybride 15N-14N)',
      commonMistake: 'Croire que le modèle conservatif produit de l\'ADN hybride, alors que le modèle conservatif aurait prédit 50 % d\'ADN lourd et 50 % d\'ADN léger.',
      explanation: 'À la première génération (G1), la présence d\'une bande unique intermédiaire prouve que chaque molécule fille possède un brin parental (15N) et un brin néoformé (14N), validant le mécanisme semi-conservatif guidé par l\'ADN polymérase.',
      steps: [
        '1. Bactéries cultivées sur 15N (ADN lourd).',
        '2. Transfert sur 14N pendant un cycle de division.',
        '3. Centrifugation sur gradient de CsCl : bande unique à densité hybride.',
        '4. Conclusion : chaque molécule fille conserve la moitié de la molécule mère (semi-conservative).'
      ]
    },
    {
      id: 'q-1s-svt-adn-3',
      exerciseId: 'ex-1s-svt-adn-3',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Phase S du cycle cellulaire',
      microConcept: 'Le cycle cellulaire comprend l\'interphase (phases G1, S, G2) et la mitose (phase M). C\'est au cours de la phase S (synthèse) que la quantité d\'ADN par cellule double rigoureusement par réplication, passant de 2Q à 4Q (chromosomes simples à 1 chromatide devenant doubles à 2 chromatides sœurs).',
      hint: '« S » est l\'initiale de Synthèse d\'ADN.',
      prompt: 'À quelle étape précise du cycle cellulaire eucaryote la quantité d\'ADN double-t-elle par réplication semi-conservative ?',
      options: [
        'Durant la phase S de l\'interphase',
        'Durant la métaphase de la mitose',
        'Durant la phase G1',
        'Durant la télophase'
      ],
      correctAnswer: 'Durant la phase S de l\'interphase',
      commonMistake: 'Penser que l\'ADN double pendant la mitose, alors que la mitose sépare les chromatides déjà dupliquées.',
      explanation: 'La réplication de l\'ADN a lieu exclusivement pendant la phase S (Synthèse) de l\'interphase. Les chromosomes à 1 chromatide deviennent des chromosomes doubles à 2 chromatides sœurs réunies au centromère.',
      steps: [
        '1. Phase G1 : croissance cellulaire, chromosomes simples (quantité Q).',
        '2. Phase S : réplication active de l\'ADN (passage de Q à 2Q).',
        '3. Phase G2 : préparation à la mitose, chromosomes dupliqués.',
        '4. Phase M (Mitose) : séparation équitable des chromatides.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 2. EXPRESSION DU PATRIMOINE GÉNÉTIQUE : TRANSCRIPTION, TRADUCTION & MUTATIONS
  // -------------------------------------------------------------------
  'skill-1s-svt-expression-genique': [
    {
      id: 'q-1s-svt-expr-1',
      exerciseId: 'ex-1s-svt-expr-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Transcription de l\'ADN en ARN messager',
      microConcept: 'La transcription a lieu dans le noyau chez les eucaryotes. L\'ARN polymérase lit le brin transcrit d\'ADN dans le sens 3\'→5\' et synthétise un ARNm complémentaire dans le sens 5\'→3\'. Dans l\'ARN, la Thymine (T) est remplacée par l\'Uracile (U).',
      hint: 'Face à A sur le brin transcrit, l\'ARN incorpore U (et non T). Face à T, il incorpore A.',
      prompt: 'Si la séquence du brin transcrit d\'ADN est 3\'-TAC GGT CCA-5\', quelle sera la séquence exacte de l\'ARN messager synthétisé par l\'ARN polymérase ?',
      options: [
        '5\'-AUG CCA GGU-3\'',
        '5\'-ATG CCA GGT-3\'',
        '5\'-UAC GGU CCA-3\'',
        '5\'-TAC GGT CCA-3\''
      ],
      correctAnswer: '5\'-AUG CCA GGU-3\'',
      commonMistake: 'Laisser des Thymines (T) dans la molécule d\'ARN au lieu d\'utiliser l\'Uracile (U).',
      explanation: 'Règles de complémentarité ADN transcrit → ARNm : T → A, A → U, C → G, G → C. Donc 3\'-TAC GGT CCA-5\' donne 5\'-AUG CCA GGU-3\'. Le codon AUG est d\'ailleurs le codon initiateur universel.',
      steps: [
        '1. Brin transcrit : 3\'-TAC GGT CCA-5\'.',
        '2. Complémentarité : T→A, A→U, C→G, G→C.',
        '3. ARNm résultant : 5\'-AUG CCA GGU-3\'.'
      ]
    },
    {
      id: 'q-1s-svt-expr-2',
      exerciseId: 'ex-1s-svt-expr-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Propriétés fondamentales du code génétique',
      microConcept: 'Le code génétique est le système de correspondance entre les 64 triplets de nucléotides (codons) de l\'ARNm et les 20 acides aminés. Il est universel (quasiment le même pour tous les êtres vivants), non chevauchant, et redondant ou dégénéré (plusieurs codons différents peuvent coder pour le même acide aminé).',
      hint: 'Pense au fait que 64 codons existent pour seulement 20 acides aminés différents.',
      prompt: 'Que signifie précisément l\'affirmation selon laquelle le code génétique est « redondant » ou « dégénéré » ?',
      options: [
        'Plusieurs codons distincts peuvent coder pour le même acide aminé',
        'Un même codon peut coder pour plusieurs acides aminés différents au hasard',
        'Le code génétique se détériore avec le temps chez les personnes âgées',
        'Tous les codons codent pour la méthionine'
      ],
      correctAnswer: 'Plusieurs codons distincts peuvent coder pour le même acide aminé',
      commonMistake: 'Penser que l\'ambiguïté va dans les deux sens : un codon ne code JAMAIS pour deux acides aminés différents (il n\'est pas ambigu), mais un acide aminé peut avoir plusieurs codons.',
      explanation: 'Avec 64 codons possibles pour 20 acides aminés (et 3 codons stop), la majorité des acides aminés sont spécifiés par 2, 4 ou 6 codons différents (ex: la leucine a 6 codons). C\'est la redondance ou dégénérescence du code.',
      steps: [
        '1. Nombre total de codons : 4³ = 64 codons.',
        '2. Nombre d\'acides aminés : 20.',
        '3. Redondance : un même acide aminé est spécifié par plusieurs codons synonymes.'
      ]
    },
    {
      id: 'q-1s-svt-expr-3',
      exerciseId: 'ex-1s-svt-expr-3',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Typologie des mutations ponctuelles',
      microConcept: 'Une mutation ponctuelle par substitution peut être : 1. Silencieuse (le nouveau codon code pour le même acide aminé grâce à la redondance) ; 2. Faux-sens (l\'acide aminé change) ; 3. Non-sens (apparition prématurée d\'un codon stop UAA/UAG/UGA, provoquant une protéine tronquée et inactive).',
      hint: 'Le codon stop interrompt immédiatement la synthèse de la chaîne polypeptidique.',
      prompt: 'Quel est l\'effet sur la chaîne polypeptidique d\'une mutation ponctuelle dite « non-sens » survenant au milieu de la séquence codante d\'un gène ?',
      options: [
        'L\'apparition prématurée d\'un codon stop entraînant la terminaison immédiate de la traduction et la fabrication d\'une protéine tronquée',
        'Le remplacement d\'un acide aminé par un autre sans changer la longueur de la protéine',
        'Aucun changement dans la séquence d\'acides aminés de la protéine',
        'La duplication complète du génome cellulaire'
      ],
      correctAnswer: 'L\'apparition prématurée d\'un codon stop entraînant la terminaison immédiate de la traduction et la fabrication d\'une protéine tronquée',
      commonMistake: 'Confondre mutation non-sens (création d\'un codon stop) et mutation faux-sens (changement d\'acide aminé).',
      explanation: 'Une mutation non-sens transforme un codon spécifiant un acide aminé en l\'un des trois codons stop (UAA, UAG, UGA). Le ribosome se détache immédiatement, produisant une protéine raccourcie généralement non fonctionnelle.',
      steps: [
        '1. Substitution d\'un nucléotide.',
        '2. Création d\'un codon stop précoce.',
        '3. Arrêt de la traduction par le facteur de terminaison.',
        '4. Synthèse d\'une protéine écourtée (tronquée).'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 3. TECTONIQUE DES PLAQUES, SUBDUCTION & DORSALES OCÉANIQUES
  // -------------------------------------------------------------------
  'skill-1s-svt-tectonique': [
    {
      id: 'q-1s-svt-tect-1',
      exerciseId: 'ex-1s-svt-tect-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Plan de Wadati-Benioff en zone de subduction',
      microConcept: 'Une zone de subduction est la plongée d\'une lithosphère océanique dense et âgée sous une lithosphère moins dense (océanique ou continentale). Les foyers sismiques s\'alignent sur un plan incliné sous la plaque chevauchante : le plan de Wadati-Benioff.',
      hint: 'Les séismes se produisent le long de la plaque plongeante rigide et cassante.',
      prompt: 'Dans une zone de subduction, comment se répartissent les foyers des séismes caractérisant le plan de Wadati-Benioff ?',
      options: [
        'Ils s\'alignent selon un plan incliné s\'enfonçant de plus en plus profondément sous la plaque chevauchante',
        'Ils sont tous concentrés à une profondeur uniforme de 10 kilomètres',
        'Ils forment un cercle parfait autour de la fosse',
        'Il n\'y a jamais aucun séisme dans les zones de subduction'
      ],
      correctAnswer: 'Ils s\'alignent selon un plan incliné s\'enfonçant de plus en plus profondément sous la plaque chevauchante',
      commonMistake: 'Penser que les séismes sont situés dans le manteau asthénosphérique ductile alors qu\'ils sont confinés au panneau lithosphérique plongeant cassant.',
      explanation: 'La lithosphère océanique froide et cassante s\'enfonce dans le manteau. Les séismes provoqués par les contraintes tectoniques jalonnent la surface de la plaque plongeante selon un plan incliné dit plan de Wadati-Benioff.',
      steps: [
        '1. Convergence entre deux plaques.',
        '2. Enfoncement de la plaque océanique dense.',
        '3. Sismicité cassante alignée sur la plaque plongeante.',
        '4. Définition du plan de Wadati-Benioff.'
      ]
    },
    {
      id: 'q-1s-svt-tect-2',
      exerciseId: 'ex-1s-svt-tect-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Origine du magmatisme des zones de subduction',
      microConcept: 'Le magmatisme de subduction (volcanisme andésitique/explosif) résulte de la fusion partielle des péridotites du manteau de la plaque chevauchante. Cette fusion est déclenchée par l\'hydratation du manteau provoquée par la déshydratation des minéraux de la croûte océanique subduite.',
      hint: 'L\'eau libérée par la plaque plongeante abaisse le point de fusion de la péridotite mantellique.',
      prompt: 'Quel facteur déclenche la fusion partielle des péridotites mantelliques à l\'origine du volcanisme explosif des zones de subduction ?',
      options: [
        'L\'apport d\'eau libérée par la déshydratation des roches de la plaque océanique plongeante',
        'Une baisse brutale de la pression atmosphérique',
        'L\'explosion spontanée des sédiments marins',
        'L\'impact d\'une comète sous la lithosphère'
      ],
      correctAnswer: 'L\'apport d\'eau libérée par la déshydratation des roches de la plaque océanique plongeante',
      commonMistake: 'Croire que c\'est la plaque plongeante elle-même qui fond entièrement par simple surchauffe.',
      explanation: 'En s\'enfonçant, les roches métamorphisées de la croûte océanique (schistes bleus, éclogites) libèrent de l\'eau. Cette eau hydrate la péridotite du manteau de la plaque supérieure, abaissant son solidus et provoquant sa fusion partielle à environ 100 km de profondeur.',
      steps: [
        '1. Métamorphisme haute pression / basse température de la plaque plongeante.',
        '2. Libération d\'eau par déshydratation minérale.',
        '3. Hydratation du manteau sus-jacent (coin de manteau).',
        '4. Abaissement du solidus et fusion partielle de la péridotite mantellique.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 4. SYSTÈME IMMUNITAIRE : IMMUNITÉ INNÉE & ADAPTATIVE
  // -------------------------------------------------------------------
  'skill-1s-svt-immunologie': [
    {
      id: 'q-1s-svt-immu-1',
      exerciseId: 'ex-1s-svt-immu-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Réaction inflammatoire aiguë & phagocytose',
      microConcept: 'L\'immunité innée est la première ligne de défense de l\'organisme : elle est rapide, stéréotypée et non spécifique. Elle met en jeu la réaction inflammatoire aiguë (rougeur, chaleur, gonflement, douleur) et la phagocytose par les cellules sentinelles (macrophages, cellules dendritiques, granulocytes).',
      hint: 'La phagocytose comprend 4 étapes : adhésion, ingestion, digestion enzymatique, rejet des déchets.',
      prompt: 'Quels sont les 4 signes cliniques caractéristiques universels de la réaction inflammatoire aiguë de l\'immunité innée ?',
      options: [
        'Rougeur, chaleur, œdème (gonflement) et douleur',
        'Fièvre, perte de mémoire, cécité et toux',
        'Pâleur, refroidissement de la peau et insensibilité',
        'Calcification osseuse et rigidité musculaire'
      ],
      correctAnswer: 'Rougeur, chaleur, œdème (gonflement) et douleur',
      commonMistake: 'Oublier la vasodilatation locale (responsable de la rougeur et de la chaleur) ou la stimulation des terminaisons nerveuses par les médiateurs chimiques comme l\'histamine (douleur).',
      explanation: 'La libération de médiateurs chimiques de l\'inflammation (histamine, prostaglandines) par les mastocytes provoque une vasodilatation (rougeur + chaleur), une augmentation de la perméabilité capillaire (œdème) et l\'activation des nocicepteurs (douleur).',
      steps: [
        '1. Agression tissulaire ou pénétration d\'un pathogène.',
        '2. Détection par récepteurs PRR des cellules sentinelles.',
        '3. Sécrétion d\'histamine et cytokines pro-inflammatoires.',
        '4. Signes cardinaux : rougeur, chaleur, œdème, douleur.'
      ]
    },
    {
      id: 'q-1s-svt-immu-2',
      exerciseId: 'ex-1s-svt-immu-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Rôle pivot des lymphocytes T CD4 (LT4)',
      microConcept: 'Dans l\'immunité adaptative, les lymphocytes T CD4 activés se différencient en lymphocytes T auxiliaires (T helper). Ils sécrètent de l\'interleukine-2 (IL-2), médiateur indispensable à la prolifération et différenciation des lymphocytes B en plasmocytes sécréteurs d\'anticorps et des LT8 en LT cytotoxiques.',
      hint: 'Ce sont les « chefs d\'orchestre » de la réponse immunitaire adaptative, ciblés par le VIH.',
      prompt: 'Pourquoi qualifie-t-on souvent les lymphocytes T CD4 (LT4) de « chefs d\'orchestre » de la réponse immunitaire adaptative ?',
      options: [
        'Parce qu\'ils sécrètent des interleukines stimulant à la fois la maturation des lymphocytes B et des lymphocytes T cytotoxiques',
        'Parce qu\'ils détruisent directement les bactéries par phagocytose',
        'Parce qu\'ils fabriquent eux-mêmes tous les anticorps circulants',
        'Parce qu\'ils filtrent le sang dans le cœur'
      ],
      correctAnswer: 'Parce qu\'ils sécrètent des interleukines stimulant à la fois la maturation des lymphocytes B et des lymphocytes T cytotoxiques',
      commonMistake: 'Penser que les LT4 sécrètent les anticorps : ce sont les plasmocytes (dérivés des lymphocytes B) qui sécrètent les anticorps.',
      explanation: 'Les LT4 reconnaissent l\'antigène présenté par les CPA via leur récepteur T. Ils sécrètent des interleukines (comme l\'IL-2) qui activent la multiplication clonale et la différenciation des effecteurs humoraux (plasmocytes) et cellulaires (LTc).',
      steps: [
        '1. Présentation de l\'antigène par la cellule dendritique.',
        '2. Activation du LT4 spécifique.',
        '3. Sécrétion d\'interleukine-2 (cytokines stimulantes).',
        '4. Amplification de la réponse adaptative (LB et LT8).'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 5. ÉCOSYSTÈMES FORESTIERS ÉQUATORIAUX DU GABON (PARCS NATIONAUX & CARBONE)
  // -------------------------------------------------------------------
  'skill-1s-svt-ecosystemes-gabon': [
    {
      id: 'q-1s-svt-eco-1',
      exerciseId: 'ex-1s-svt-eco-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Forêt gabonaise & statut de puits de carbone mondial',
      microConcept: 'La forêt équatoriale du Gabon couvre plus de 88 % du territoire national et constitue le cœur du deuxième poumon vert de la planète (bassin du Congo). Grâce à une photosynthèse intense, elle absorbe beaucoup plus de CO2 atmosphérique qu\'elle n\'en émet, agissant comme un puits de carbone net d\'importance planétaire pour réguler le climat.',
      hint: 'Absorption de CO2 par photosynthèse supérieure à la respiration globale.',
      prompt: 'Sur le plan écologique planétaire, quel rôle capital joue la forêt équatoriale gabonaise dans la régulation du réchauffement climatique ?',
      options: [
        'Elle agit comme un puits de carbone net majeur en captant et stockant des millions de tonnes de CO2 atmosphérique par photosynthèse',
        'Elle est la principale source mondiale d\'émissions de gaz carbonique',
        'Elle empêche la lumière solaire d\'atteindre les océans',
        'Elle assèche l\'atmosphère terrestre en absorbant toute la vapeur d\'eau'
      ],
      correctAnswer: 'Elle agit comme un puits de carbone net majeur en captant et stockant des millions de tonnes de CO2 atmosphérique par photosynthèse',
      commonMistake: 'Confondre puits de carbone (absorption nette de CO2) et source de carbone (rejet net).',
      explanation: 'Avec une couverture forestière intacte de 88 % et un réseau de 13 parcs nationaux (Lopé, Ivindo, Minkébé, etc.), le Gabon séquestre annuellement plus de 100 millions de tonnes de CO2 nettes, faisant du pays un leader mondial de la conservation et de la transition écologique.',
      steps: [
        '1. Superficie forestière : environ 22 millions d\'hectares.',
        '2. Processus biologique : photosynthèse chlorophyllienne fixant le CO2 dans le bois.',
        '3. Bilan net : absorbe environ 140 millions de tonnes de CO2 et n\'en émet que 30 millions.',
        '4. Statut international : absorbeur net de carbone reconnu par la convention climat.'
      ]
    },
    {
      id: 'q-1s-svt-eco-2',
      exerciseId: 'ex-1s-svt-eco-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Biodiversité du parc national de la Lopé et de l\'Ivindo',
      microConcept: 'Les parcs nationaux gabonais (notamment la Lopé et l\'Ivindo, classés au patrimoine mondial de l\'UNESCO) abritent des espèces clés de voûte indispensables à la régénération forestière : les éléphants de forêt d\'Afrique (Loxodonta cyclotis) qui dispersent les graines d\'arbres géants de la canopée (zoochorie).',
      hint: 'La dispersion des grosses graines d\'arbres forestiers par les grands herbivores.',
      prompt: 'En quoi l\'éléphant de forêt (Loxodonta cyclotis), dont le Gabon abrite la majorité de la population mondiale, est-il qualifié « d\'ingénieur écologique » de l\'écosystème ?',
      options: [
        'Il disperse les grosses graines végétales sur de longues distances et crée des clairières favorisant la régénération naturelle de la canopée',
        'Il détruit définitivement toutes les espèces d\'arbres fruitiers',
        'Il élimine les cours d\'eau par absorption totale de l\'eau',
        'Il fertilise le sol en y apportant du minerai de fer'
      ],
      correctAnswer: 'Il disperse les grosses graines végétales sur de longues distances et crée des clairières favorisant la régénération naturelle de la canopée',
      commonMistake: 'Voir l\'éléphant uniquement comme un consommateur sans comprendre son rôle mutualiste de dissémination des graines (zoochorie) essentiel à la survie des essences de bois précieux.',
      explanation: 'Plusieurs espèces d\'arbres de la canopée équatoriale dépendent exclusivement de l\'éléphant pour la germination de leurs graines (passage dans le tractus digestif). En se déplaçant, l\'éléphant structure la forêt et favorise les essences à haute densité de carbone.',
      steps: [
        '1. Consommation de fruits forestiers par les éléphants.',
        '2. Transit et ramollissement de la paroi des graines.',
        '3. Dépôt des graines germinatives dans les déjections sur des kilomètres.',
        '4. Régénération forestière durable de l\'écosystème équatorial.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 6. MÉTHODOLOGIE DE L'ÉPREUVE DE SVT PREMIÈRE (TYPE 1 & TYPE 2)
  // -------------------------------------------------------------------
  'skill-1s-svt-methodologie-1s': [
    {
      id: 'q-1s-svt-meth-1',
      exerciseId: 'ex-1s-svt-meth-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Démarche d\'exploitation de document (Type 2)',
      microConcept: 'Dans l\'exercice de Type 2 (Raisonnement scientifique appuyé sur documents), la démarche officielle d\'analyse exige la triade : 1. « Je vois » (description factuelle et chiffrée du document avec unités) ; 2. « Je sais » (apport ciblé des connaissances du cours) ; 3. « J\'en déduis » (conclusion répondant au problème posé).',
      hint: 'Pense au triptyque classique : Constat chiffré + Connaissances + Déduction logique.',
      prompt: 'Dans l\'exploitation d\'un graphique lors d\'une épreuve de SVT au Gabon, quelle démarche rigoureuse garantit le maximum de points ?',
      options: [
        'Décrire les variations avec des valeurs chiffrées et leurs unités, confronter aux connaissances du cours, puis déduire la réponse au problème',
        'Donner directement son avis personnel sans citer aucun chiffre du graphique',
        'Recopier le titre du document sans analyser les courbes',
        'Raconter l\'histoire de la découverte de la méthode sans lien avec le graphique'
      ],
      correctAnswer: 'Décrire les variations avec des valeurs chiffrées et leurs unités, confronter aux connaissances du cours, puis déduire la réponse au problème',
      commonMistake: 'Faire une description sans donner de valeurs chiffrées précises ou oublier de déduire une conclusion explicite.',
      explanation: 'L\'évaluation officielle pénalise sévèrement les descriptions qualitatives vagues ("la courbe augmente"). Il faut préciser les points remarquables : "de t = 0 à 10 min, la concentration passe de 0 à 45 μmol/L", puis apporter le mécanisme explicatif.',
      steps: [
        '1. Présentation du document et des axes.',
        '2. Relevé des valeurs chiffrées aux bornes des intervalles significatifs.',
        '3. Mise en relation avec les connaissances biologiques.',
        '4. Synthèse déductive claire.'
      ]
    }
  ]
};
