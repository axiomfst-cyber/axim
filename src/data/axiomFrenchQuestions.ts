import { ExerciseQuestion } from '../types';

// =====================================================================
// BANQUE OFFICIELLE DE QUESTIONS DE FRANÇAIS (SECONDE & PREMIÈRE EAF)
// Programme Officiel Gabon : Méthodologie EAF, Négritude, Auteurs Gabonais, Rhétorique
// =====================================================================

export const FRENCH_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // -------------------------------------------------------------------
  // 1. MÉTHODOLOGIE DU COMMENTAIRE COMPOSÉ (EAF)
  // -------------------------------------------------------------------
  'skill-2s-fr-commentaire': [
    {
      id: 'q-fr-comm-1',
      exerciseId: 'ex-fr-comm-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Structure canonique de l\'introduction',
      microConcept: 'Dans le commentaire composé à l\'examen officiel, l\'introduction comporte OBLIGATOIREMENT 4 étapes dans un seul paragraphe fluide : 1. Amorce / Situation de l\'auteur et de l\'œuvre dans son siècle ; 2. Présentation du texte (titre, thème, tonalité) ; 3. Problématique directrice ; 4. Annonce claire des axes de lecture (2 ou 3 axes).',
      hint: 'Pense aux 4 étapes rituelles de l\'introduction du commentaire.',
      prompt: 'Dans l\'épreuve officielle de commentaire composé au Gabon, quel ordre d\'étapes l\'introduction doit-elle rigoureusement respecter ?',
      options: [
        'Amorce (contexte/auteur) → Présentation du texte → Problématique centrale → Annonce des deux ou trois axes de lecture',
        'Annonce du plan d\'abord, puis résumé du texte et enfin biographie de l\'auteur',
        'Jugement personnel immédiat sans référence au texte ni annonce des axes',
        'Recopie intégrale des deux premières strophes suivie de la conclusion'
      ],
      correctAnswer: 'Amorce (contexte/auteur) → Présentation du texte → Problématique centrale → Annonce des deux ou trois axes de lecture',
      commonMistake: 'Oublier la problématique ou annoncer un plan linéaire (strophe 1, strophe 2) au lieu d\'un plan thématique composé.',
      explanation: 'L\'introduction du commentaire composé suit une démarche en entonnoir : partir du contexte général de l\'auteur, situer l\'extrait, poser le problème d\'interprétation (problématique) et dévoiler les grands axes d\'analyse.',
      steps: [
        '1. Amorce : situer l\'auteur et son courant esthétique.',
        '2. Présentation : titre, genre, thème majeur.',
        '3. Problématique : question formulant le sens profond du texte.',
        '4. Annonce des axes : formulation fluide des 2 ou 3 parties.'
      ]
    },
    {
      id: 'q-fr-comm-2',
      exerciseId: 'ex-fr-comm-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Le piège de la paraphrase vs l\'analyse stylistique',
      microConcept: 'Le commentaire composé interdit la paraphrase (raconter ce que dit le texte). Il exige la triade : 1. Citation précise entre guillemets avec référence ; 2. Identification du procédé d\'écriture (figure de style, temps verbal, syntaxe) ; 3. Interprétation du sens et de l\'effet produit sur le lecteur.',
      hint: 'La formule clé de la méthode est : Idée d\'analyse + Citation + Procédé stylistique + Interprétation du sens.',
      prompt: 'Pour éviter le piège éliminatoire de la paraphrase dans un paragraphe de commentaire composé, que doit impérativement faire le candidat ?',
      options: [
        'Associer chaque citation textuelle à un procédé d\'écriture précis (figure de style, temps verbal, rythme) et en analyser l\'effet de sens',
        'Raconter l\'histoire avec ses propres mots sans jamais citer le texte',
        'Recopier tous les adjectifs du texte sans les commenter',
        'Donner son avis moral sur le comportement des personnages'
      ],
      correctAnswer: 'Associer chaque citation textuelle à un procédé d\'écriture précis (figure de style, temps verbal, rythme) et en analyser l\'effet de sens',
      commonMistake: 'Faire du "catalogue" (citer un procédé sans expliquer son sens) ou raconter l\'histoire (paraphrase pure).',
      explanation: 'Un commentaire littéraire ne se contente pas de dire CE QUE dit le texte, il analyse COMMENT le texte le dit (procédés d\'écriture) et POURQUOI (effets et significations).',
      steps: [
        '1. Énoncer l\'idée directrice du sous-axe.',
        '2. Citer le passage exact entre guillemets.',
        '3. Nommer le procédé stylistique (ex: métaphore filée, anaphore).',
        '4. Analyser l\'effet produit sur la sensibilité du lecteur.'
      ]
    },
    {
      id: 'q-fr-comm-3',
      exerciseId: 'ex-fr-comm-3',
      type: 'true_false',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Plan linéaire vs Plan ordonné (composé)',
      microConcept: 'Le commentaire composé proscrit formellement le découpage strophe par strophe ou ligne par ligne. Le plan doit regrouper des thématiques transversales réparties dans tout l\'extrait.',
      hint: 'Le nom de l\'exercice est « commentaire composé », ce qui signifie composé selon des thèmes directeurs.',
      prompt: 'Dans un commentaire composé, est-il permis de consacrer la 1re partie aux lignes 1 à 10 et la 2e partie aux lignes 11 à 25 ?',
      options: [
        'Faux (c\'est un découpage linéaire interdit : le plan doit être thématique et synthétique)',
        'Vrai (c\'est le plan le plus recommandé à l\'examen)'
      ],
      correctAnswer: 'Faux (c\'est un découpage linéaire interdit : le plan doit être thématique et synthétique)',
      commonMistake: 'Croire que suivre l\'ordre chronologique du texte constitue un commentaire composé acceptable.',
      explanation: 'Le suivi linéaire ligne à ligne est pénalisé. Le candidat doit bâtir une argumentation ordonnée autour de 2 ou 3 centres d\'intérêt thématiques puisant leurs exemples dans l\'ensemble de l\'extrait.',
      steps: [
        '1. Relever les éléments récurrents dans tout le texte.',
        '2. Regrouper les observations par convergence de sens.',
        '3. Bâtir des axes thématiques indépendants de l\'ordre chronologique des lignes.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 2. MÉTHODOLOGIE DE LA DISSERTATION LITTÉRAIRE
  // -------------------------------------------------------------------
  'skill-2s-fr-dissertation': [
    {
      id: 'q-fr-diss-1',
      exerciseId: 'ex-fr-diss-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Choix du type de plan (Dialectique vs Thématique)',
      microConcept: 'Une consigne comme « Dans quelle mesure peut-on affirmer que... » ou « Partagez-vous ce point de vue ? » appelle obligatoirement un plan DIALECTIQUE (Thèse : confirmation des arguments ; Antithèse : limites et nuances ; Synthèse : dépassement). Une consigne comme « En quoi... » ou « Montrez que... » appelle un plan THÉMATIQUE ou ANALYTIQUE.',
      hint: 'L\'expression « Dans quelle mesure » invite à peser le pour et le contre, donc à nuancer.',
      prompt: 'Face au sujet : « "Le roman n\'est qu\'un miroir fidèle de la société." Dans quelle mesure partagez-vous cette affirmation ? », quel plan est méthodologiquement imposé ?',
      options: [
        'Un plan dialectique (I. Le roman comme reflet réaliste de la société ; II. Les limites du miroir : l\'imaginaire, la fiction et la recréation artistique ; III. La vision singulière du romancier)',
        'Un plan linéaire suivant l\'ordre alphabétique des auteurs cités',
        'Un plan thématique montrant uniquement que le roman reflète la société sans jamais nuancer',
        'Un inventaire de résumés de trois romans sans problématique'
      ],
      correctAnswer: 'Un plan dialectique (I. Le roman comme reflet réaliste de la société ; II. Les limites du miroir : l\'imaginaire, la fiction et la recréation artistique ; III. La vision singulière du romancier)',
      commonMistake: 'Faire un plan purement affirmatif (thématique) alors que la formule "Dans quelle mesure" exige d\'examiner les limites de la thèse.',
      explanation: 'La formule "Dans quelle mesure" invite à confronter la thèse de la citation avec ses objections (l\'art n\'est pas qu\'une simple copie, il est création esthétique, symbole et fiction), ce qui constitue la structure dialectique canonique.',
      steps: [
        '1. Analyse de la consigne : « Dans quelle mesure » appelle un débat nuancé.',
        '2. Thèse : valider la pertinence de la citation avec des exemples réalistes.',
        '3. Antithèse : réfuter ou nuancer en montrant la part d\'imaginaire et de métamorphose poétique.',
        '4. Synthèse : proposer un dépassement sur la fonction suprême de l\'œuvre.'
      ]
    },
    {
      id: 'q-fr-diss-2',
      exerciseId: 'ex-fr-diss-2',
      type: 'true_false',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Rôle et nature des exemples littéraires',
      microConcept: 'Dans une dissertation littéraire, les exemples doivent être PRÉCIS (titre d\'œuvre souligné, auteur, personnage ou épisode analysé) et insérés dans l\'argumentation. Un exemple n\'est pas une simple mention d\'un titre, il doit faire l\'objet d\'une analyse critique prouvant l\'argument.',
      hint: 'Citer simplement le nom d\'un livre ne suffit pas : il faut analyser la scène qui valide l\'argument.',
      prompt: 'Dans une dissertation littéraire, il est suffisant d\'aligner des titres de livres entre parenthèses sans développer la situation précise des personnages ni l\'intention de l\'auteur.',
      options: [
        'Faux (l\'exemple doit être contextualisé, développé et commenté au service de l\'idée défendue)',
        'Vrai (la liste de titres prouve déjà la culture de l\'élève)'
      ],
      correctAnswer: 'Faux (l\'exemple doit être contextualisé, développé et commenté au service de l\'idée défendue)',
      commonMistake: 'Le "name-dropping" (citer pêle-mêle des titres sans expliquer en quoi ils illustrent l\'argument formulé).',
      explanation: 'Un exemple littéraire convaincant exige : 1. L\'auteur et le titre de l\'œuvre souligné ; 2. La description brève d\'une scène ou d\'un personnage ; 3. L\'explication du lien logique avec l\'argument.',
      steps: [
        '1. Formuler l\'argument abstrait.',
        '2. Introduire l\'exemple littéraire précis.',
        '3. Analyser la résonance de l\'exemple pour valider la thèse.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 3. LES FIGURES DE STYLE & LA RHÉTORIQUE
  // -------------------------------------------------------------------
  'skill-2s-fr-figures': [
    {
      id: 'q-fr-fig-1',
      exerciseId: 'ex-fr-fig-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Distinction Métaphore vs Comparaison',
      microConcept: 'La comparaison rapproche deux éléments (comparé et comparant) au moyen d\'un outil grammatical explicite (comme, tel, pareil à, semble). La métaphore établit cette analogie SANS outil de comparaison.',
      hint: 'Cherche la présence ou l\'absence d\'un mot de comparaison comme "comme" ou "tel".',
      prompt: 'Quelle figure de style identifie-t-on dans le vers célèbre : « Cet homme est un lion dans la bataille » ?',
      options: [
        'Une métaphore (assimilation directe de l\'homme au lion sans outil de comparaison)',
        'Une comparaison avec outil explicite',
        'Une litote atténuant la réalité',
        'Une métonymie désignant le tout par la partie'
      ],
      correctAnswer: 'Une métaphore (assimilation directe de l\'homme au lion sans outil de comparaison)',
      commonMistake: 'Confondre métaphore et comparaison en pensant que tout rapprochement imagé est une comparaison.',
      explanation: 'Il n\'y a aucun mot outil de comparaison (« comme », « pareil à »). L\'homme est directement assimilé au lion pour souligner son courage féroce : c\'est une métaphore.',
      steps: [
        '1. Comparé : cet homme.',
        '2. Comparant : le lion.',
        '3. Absence d\'outil grammatical de comparaison : métaphore.'
      ]
    },
    {
      id: 'q-fr-fig-2',
      exerciseId: 'ex-fr-fig-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Oxymore vs Antithèse',
      microConcept: 'L\'oxymore réunit deux termes contradictoires dans un MÊME groupe nominal ou syntaxique immédiat (ex: « cette obscure clarté »). L\'antithèse oppose deux termes ou idées dans deux propositions ou membres de phrase distincts.',
      hint: 'Les deux mots opposés sont-ils directement collés l\'un à l\'autre dans la même expression ?',
      prompt: 'Dans la formule de Corneille : « Cette obscure clarté qui tombe des étoiles », quelle figure de style réunit deux mots de sens opposé côte à côte ?',
      options: [
        'Un oxymore',
        'Une antiphrase',
        'Une hyperbole',
        'Une anaphore'
      ],
      correctAnswer: 'Un oxymore',
      commonMistake: 'Appeler cette figure une simple antithèse (l\'antithèse sépare les termes opposés dans deux propositions, alors que l\'oxymore les unit étroitement).',
      explanation: '« Obscure » (nuit) et « clarté » (lumière) sont deux adjectif et nom contradictoires juxtaposés dans le même syntagme : c\'est la définition même de l\'oxymore.',
      steps: [
        '1. Repérage des termes opposés : obscure / clarté.',
        '2. Structure syntaxique : adjectif épithète collé à son nom.',
        '3. Figure : oxymore.'
      ]
    },
    {
      id: 'q-fr-fig-3',
      exerciseId: 'ex-fr-fig-3',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Litote vs Euphémisme',
      microConcept: 'La litote dit le moins pour faire entendre le plus, souvent par une tournure négative (ex: « Va, je ne te hais point » = je t\'aime passionnément). L\'euphémisme atténue une vérité douloureuse ou choquante (ex: « il nous a quittés » pour « il est mort »).',
      hint: 'La litote renforce le sens par la négation de son contraire.',
      prompt: 'Dans Le Cid de Corneille, lorsque Chimène dit à Rodrigue : « Va, je ne te hais point », quelle figure de style emploie-t-elle pour lui faire comprendre son amour ardent ?',
      options: [
        'Une litote',
        'Un euphémisme',
        'Une hyperbole',
        'Une allégorie'
      ],
      correctAnswer: 'Une litote',
      commonMistake: 'Confondre la litote (visant à intensifier l\'émotion) avec l\'euphémisme (qui sert à adoucir une souffrance ou un tabou).',
      explanation: 'En disant « je ne te hais point », Chimène nie la haine pour signifier pudiquement mais puissamment son amour le plus absolu : c\'est l\'exemple archétypal de la litote littéraire.',
      steps: [
        '1. Expression négative : « ne... point haïr ».',
        '2. Sens réel implicite : « je t\'aime profondément ».',
        '3. Figure : litote.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 4. GENRES & REGISTRES LITTÉRAIRES
  // -------------------------------------------------------------------
  'skill-2s-fr-genres': [
    {
      id: 'q-fr-gen-1',
      exerciseId: 'ex-fr-gen-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Le registre tragique & la catharsis',
      microConcept: 'Le registre tragique met en scène des personnages nobles confrontés à la fatalité du destin, inspirant terreur et pitié chez le spectateur afin d\'opérer la purification des passions (catharsis théorisée par Aristote).',
      hint: 'Pense aux émotions d\'effroi et de compassion ressenties au spectacle du héros impuissant face aux dieux ou à son destin.',
      prompt: 'Quel effet psychologique et moral fondamental la tragédie classique cherche-t-elle à produire sur le spectateur selon la poétique d\'Aristote ?',
      options: [
        'La catharsis, c\'est-à-dire la purgation des passions par la terreur et la pitié',
        'Le rire burlesque et la moquerie carnavalesque',
        'L\'endormissement méditatif par la monotonie de la déclamation',
        'La révolte politique violente immédiate contre le souverain'
      ],
      correctAnswer: 'La catharsis, c\'est-à-dire la purgation des passions par la terreur et la pitié',
      commonMistake: 'Confondre le registre tragique (lié à la fatalité) et le registre pathétique (qui cherche seulement à émouvoir et faire pleurer face à un malheur ordinaire).',
      explanation: 'Selon Aristote, en contemplant le héros tragique broyé par une force qui le dépasse, le public ressent à la fois effroi et compassion, ce qui purifie l\'âme : c\'est la catharsis.',
      steps: [
        '1. Définition du tragique : affrontement d\'un destin inéluctable.',
        '2. Deux affects moteurs : phobos (terreur) et eleos (pitié).',
        '3. But visé : la catharsis (purgation spirituelle des passions).'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 5. LE MOUVEMENT DE LA NÉGRITUDE (PREMIÈRE EAF)
  // -------------------------------------------------------------------
  'skill-1s-fr-negritude': [
    {
      id: 'q-fr-neg-1',
      exerciseId: 'ex-fr-neg-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Les fondateurs historiques de la Négritude',
      microConcept: 'Le mouvement de la Négritude est fondé à Paris dans les années 1930 autour de la revue « L\'Étudiant noir » par trois poètes majeurs : Aimé Césaire (Martinique), Léopold Sédar Senghor (Sénégal) et Léon-Gontran Damas (Guyane).',
      hint: 'Un trio d\'intellectuels issus d\'Afrique de l\'Ouest et des Antilles françaises.',
      prompt: 'Quels sont les trois pères fondateurs incontournables du mouvement littéraire et philosophique de la Négritude ?',
      options: [
        'Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas',
        'Victor Hugo, Charles Baudelaire et Arthur Rimbaud',
        'Camara Laye, Chinua Achebe et Wole Soyinka',
        'Jean-Paul Sartre, Albert Camus et André Malraux'
      ],
      correctAnswer: 'Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas',
      commonMistake: 'Oublier Léon-Gontran Damas (l\'auteur du recueil fondateur "Pigments" en 1937) en ne citant que Senghor et Césaire.',
      explanation: 'La Négritude est née de la rencontre à Paris entre Aimé Césaire (qui forge le mot en 1939 dans son "Cahier d\'un retour au pays natal"), Léopold Sédar Senghor et Léon-Gontran Damas.',
      steps: [
        '1. Naissance : Quartier Latin à Paris, 1934-1935.',
        '2. Publication clé : L\'Étudiant noir.',
        '3. Le trio fondateur : Césaire, Senghor, Damas.'
      ]
    },
    {
      id: 'q-fr-neg-2',
      exerciseId: 'ex-fr-neg-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Définition césairienne et senghorienne de la Négritude',
      microConcept: 'Aimé Césaire définit la Négritude comme « la simple reconnaissance du fait d\'être noir, et l\'acceptation de ce fait, de notre destin de Noir, de notre histoire et de notre culture ». Senghor la définit comme « l\'ensemble des valeurs culturelles du monde noir ».',
      hint: 'La Négritude transforme une injure coloniale (« nègre ») en étendard de fierté, de dignité et de résistance culturelle.',
      prompt: 'Quelle est la signification essentielle du concept de « Négritude » tel qu\'affirmé par Aimé Césaire et ses compagnons ?',
      options: [
        'La fierté et la revendication assumée de l\'identité, de la culture et des valeurs du monde noir face à l\'assimilation coloniale',
        'Le refus absolu de toute langue française et l\'isolement culturel complet',
        'La suprématie d\'une race sur les autres civilisations',
        'Un simple recueil de contes pour enfants sans portée politique'
      ],
      correctAnswer: 'La fierté et la revendication assumée de l\'identité, de la culture et des valeurs du monde noir face à l\'assimilation coloniale',
      commonMistake: 'Assimiler la Négritude à un racisme inversé alors qu\'elle est un humanisme de désaliénation visant le "Rendez-vous du donner et du recevoir" (Senghor).',
      explanation: 'La Négritude est une prise de conscience historique qui rejette l\'aliénation coloniale pour affirmer la dignité de l\'Homme noir, la richesse de son imaginaire et sa contribution à la civilisation universelle.',
      steps: [
        '1. Contexte : lutte contre le complexe d\'infériorité imposé par la colonisation.',
        '2. Retournement du mot péjoratif « nègre » en concept libérateur.',
        '3. Visée humaniste : ouverture au dialogue fraternel des cultures.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 6. LITTÉRATURE GABONAISE CONTEMPORAINE (PREMIÈRE & SECONDE)
  // -------------------------------------------------------------------
  'skill-1s-fr-litterature-gabonaise': [
    {
      id: 'q-fr-gab-1',
      exerciseId: 'ex-fr-gab-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Grands auteurs du patrimoine gabonais',
      microConcept: 'La littérature gabonaise s\'illustre par des figures majeures : Laurent Owondo (avec la pièce théâtrale culte « Au bout du silence »), Jean-Divassa Nyama (auteur de « La Vocation de Dignité » et « Le Bruit de l\'héritage »), Okoumba-Nkoghé (poète et romancier du « Silence de la forêt »), et Angèle Rawiri (première romancière gabonaise, auteure de « Fureurs et cris de femme »).',
      hint: 'Identifie l\'auteur de la célèbre pièce mettant en scène le conflit de générations et l\'attente métaphysique au Gabon.',
      prompt: 'Qui est l\'auteur gabonais emblématique de la pièce théâtrale « Au bout du silence », classique du répertoire scolaire au Gabon ?',
      options: [
        'Laurent Owondo',
        'Jean-Divassa Nyama',
        'Okoumba-Nkoghé',
        'Sylvie Ntsame'
      ],
      correctAnswer: 'Laurent Owondo',
      commonMistake: 'Attribuer la pièce à Jean-Divassa Nyama (qui est l\'auteur de la trilogie romanesque "La Vocation de Dignité").',
      explanation: 'Laurent Owondo a marqué les lettres gabonaises et africaines avec son chef-d\'œuvre dramatique « Au bout du silence » (1987), où s\'entrecroisent la mémoire ancestrale, le secret initiatique et la quête d\'identité.',
      steps: [
        '1. Laurent Owondo est un écrivain et dramaturge gabonais majeur.',
        '2. « Au bout du silence » explore les profondeurs de la tradition et du verbe sacré.',
        '3. Œuvre inscrite aux programmes officiels du baccalauréat au Gabon.'
      ]
    },
    {
      id: 'q-fr-gab-2',
      exerciseId: 'ex-fr-gab-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Les thématiques dominantes du roman gabonais',
      microConcept: 'Le roman gabonais contemporain explore les tiraillements entre la fidélité aux valeurs traditionnelles coutumières (initiations, respect des aînés, lien avec la terre et la forêt) et les mirages de la modernité urbaine (corruption, exode vers Libreville, précarité, perte des repères moraux).',
      hint: 'Pense au choc vécu par le personnage qui quitte le village de l\'intérieur du pays pour s\'installer dans les quartiers de Libreville.',
      prompt: 'Quelle problématique sociologique et humaine majeure traverse très fréquemment le roman gabonais contemporain (notamment chez Jean-Divassa Nyama et Angèle Rawiri) ?',
      options: [
        'La confrontation dramatique entre traditions ancestrales/coutumières et dérives de la modernité urbaine occidentale',
        'La conquête spatiale intergalactique au XXIIIe siècle',
        'La description exclusive de la vie paysanne en Europe médiévale',
        'L\'apologie sans réserve de la destruction de la forêt tropicale'
      ],
      correctAnswer: 'La confrontation dramatique entre traditions ancestrales/coutumières et dérives de la modernité urbaine occidentale',
      commonMistake: 'Croire que le roman gabonais ne parle que de folklore sans analyser les crises sociales de la ville moderne.',
      explanation: 'Le roman gabonais pose un regard lucide sur les mutations de la société : le passage du village traditionnel à la métropole de Libreville, le déchirement culturel, la place de la femme africaine et la quête de dignité.',
      steps: [
        '1. Thème de l\'exode rural et du dépaysement.',
        '2. Conflit entre droit moderne et droit coutumier.',
        '3. Questionnement éthique sur l\'avenir de la jeunesse gabonaise.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 7. GRAMMAIRE APPLIQUÉE POUR L'EAF
  // -------------------------------------------------------------------
  'skill-1s-fr-grammaire-eaf': [
    {
      id: 'q-fr-gram-1',
      exerciseId: 'ex-fr-gram-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Niveau 2 : Concordance des temps et mode subjonctif',
      microConcept: 'Après les locutions conjonctives de concession ou d\'opposition comme « bien que », « quoique », « pour que » ou « sans que », le verbe de la proposition subordonnée se met TOUJOURS au mode SUBJONCTIF.',
      hint: '« Bien que » appelle obligatoirement le subjonctif et non l\'indicatif.',
      prompt: 'Quelle forme verbale correcte complète la phrase : « Bien qu\'il (faire) _____ des efforts remarquables, il n\'a pas encore atteint son objectif » ?',
      options: [
        'fasse (subjonctif présent)',
        'fait (indicatif présent)',
        'fera (futur simple)',
        'ferait (conditionnel)'
      ],
      correctAnswer: 'fasse (subjonctif présent)',
      commonMistake: 'Mettre l\'indicatif "fait" après "bien que" (faute fréquente à l\'oral et à l\'écrit).',
      explanation: 'La conjonction de subordination de concession « bien que » exige impérativement le mode subjonctif : « Bien qu\'il fasse » (du verbe faire au subjonctif présent).',
      steps: [
        '1. Repérage du mot subordonnant : « Bien que » (concession).',
        '2. Règle grammaticale : subjonctif obligatoire.',
        '3. Conjugaison de faire au subjonctif : que je fasse, qu\'il fasse.'
      ]
    },
    {
      id: 'q-fr-gram-2',
      exerciseId: 'ex-fr-gram-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Niveau 3 : Les trois formes de discours rapporté',
      microConcept: 'Le discours indirect libre restitue les paroles ou pensées d\'un personnage sans verbe introducteur explicite ni subordination (pas de « que »), mais en adoptant les temps du récit (imparfait, plus-que-parfait, conditionnel) et les pronoms de la 3e personne.',
      hint: 'Il n\'y a ni guillemets ni mot de liaison « que », mais les marques d\'affectivité du personnage demeurent dans les temps du passé.',
      prompt: 'Dans un texte narratif, quel type de discours rapporté identifie-t-on dans la phrase : « Elle rangea ses affaires. Partirait-elle vraiment demain ? Quel destin l\'attendait là-bas ! » ?',
      options: [
        'Le discours indirect libre (pensées du personnage intégrées à la trame du récit sans guillemets ni mot subordonnant)',
        'Le discours direct avec guillemets et deux-points',
        'Le discours indirect classique avec proposition complétive introduite par « que »',
        'Le discours narrativisé résumant l\'action en un mot'
      ],
      correctAnswer: 'Le discours indirect libre (pensées du personnage intégrées à la trame du récit sans guillemets ni mot subordonnant)',
      commonMistake: 'Le confondre avec le discours indirect classique (qui contiendrait "Elle se demandait si elle partirait...").',
      explanation: 'Le discours indirect libre conserve l\'expressivité de la parole (interrogation, exclamation) tout en adoptant la 3e personne et le conditionnel/imparfait du narrateur, sans subordination.',
      steps: [
        '1. Absence de verbe de parole introducteur et de mot « que ».',
        '2. Maintien de l\'émotion (ponctuation expressive : point d\'interrogation).',
        '3. Emploi de la 3e personne et du conditionnel : discours indirect libre.'
      ]
    }
  ]
};
