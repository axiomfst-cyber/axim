// =========================================================================================
// PROGRAMME ANNUEL OFFICIEL DE PHILOSOPHIE – ENSEIGNEMENT SECONDAIRE GABON
// Structuration sur 9 mois (de la Première Littéraire à la Terminale A, C, D)
// Segments de connaissances, méthodologie des 3 sujets type Bac, œuvres et évaluations
// =========================================================================================

export interface PhilosophyMonthSegment {
  segment: string;
  content: string[];
}

export interface PhilosophyMonthProgram {
  month: number;
  period: string;
  title: string;
  themeGlobal: string;
  segments: PhilosophyMonthSegment[];
  methodology?: {
    subjectType: 'question' | 'citation' | 'texte' | 'renforcement';
    title: string;
    description: string;
    keySteps: string[];
    typicalSubjectExample: string;
  };
  oeuvres?: {
    type: 'integrale' | 'partielle_1' | 'partielle_2';
    title: string;
    description: string;
    suggestedAuthors: string[];
  };
  evaluation: {
    type: string;
    description: string;
    criteria: string[];
  };
  africanGabonesePerspective?: string;
  associatedSkillIds: string[];
}

export const GABON_PHILOSOPHIE_ANNUAL_PROGRAM: PhilosophyMonthProgram[] = [
  {
    month: 1,
    period: 'Premier mois (Octobre)',
    title: 'Mythe, Philosophie & Méthodologie du Sujet Question',
    themeGlobal: 'Genèse de la rationalité critique et initiation à la problématisation',
    segments: [
      {
        segment: 'Mythe. Philosophie',
        content: [
          'Genèse de la pensée philosophique en Grèce antique et en Afrique ancienne (Égypte pharaonique et sagesses traditionnelles)',
          'Le passage décisif du Mythos (récit imaginaire, cosmogonie dogmatique) au Logos (discours rationnel, argumenté et critique)',
          'Les grands courants philosophiques : idéalisme (Platon), matérialisme (Démocrite, Marx), rationalisme (Descartes) et empirisme (Locke, Hume)'
        ]
      },
      {
        segment: 'Méthodologie',
        content: [
          'Le Sujet Question : analyse d’une interrogation directe (ex. « La liberté est-elle une illusion ? »)',
          'Décomposition des termes, repérage des présupposés cachés et formulation du problème central (paradoxe)',
          'Structure dialectique de réponse : thèse affirmative, objections antithétiques et dépassement conceptuel'
        ]
      }
    ],
    methodology: {
      subjectType: 'question',
      title: 'Le Sujet Question (Dissertation sur interrogation directe)',
      description: 'Le sujet question invite à examiner la légitimité d’une interrogation explicite. Il exige de déceler le paradoxe sous-jacent à la question posée, sans répondre par un « oui » ou « non » superficiel.',
      keySteps: [
        '1. Analyse conceptuelle de l’intitulé : définir chaque mot-clé et identifier la relation logique entre eux',
        '2. Mise au jour du présupposé : qu’admet la question avant même qu’on y réponde ?',
        '3. Formulation de la problématique : confrontation de deux réponses antagonistes également plausibles',
        '4. Élaboration du plan dialectique : Thèse (affirmation argumentée), Antithèse (mise en cause) et Synthèse (dépassement rationnel)'
      ],
      typicalSubjectExample: '« Faut-il préférer une vérité qui blesse à un mensonge qui rassure ? »'
    },
    evaluation: {
      type: 'Évaluation formative & dissertation guidée',
      description: 'Exercices d’introduction complète sur un sujet question : amorce, problématisation et annonce de plan.',
      criteria: [
        'Précision dans la définition des termes clés',
        'Pertinence de la problématique formulée (mise en tension conceptuelle)',
        'Cohérence de l’annonce du plan tripartite'
      ]
    },
    africanGabonesePerspective: 'Débat sur la philosophie africaine : Marcien Towa (*Essai sur la problématique philosophique dans l’Afrique actuelle*) et Paulin Hountondji (*Sur la "philosophie africaine"*). Dépassement de l’ethnophilosophie pour affirmer l’universalité de l’exigence critique du Logos.',
    associatedSkillIds: ['skill-philo-m1-mythe-philosophie', 'skill-philo-m1-methode-sujet-question']
  },

  {
    month: 2,
    period: '2ème mois (Novembre)',
    title: 'Savoir et Opinion : Croyance, Expérience, Sorcellerie & Rêve',
    themeGlobal: 'Critique des illusions, rationalité scientifique et anthropologie des croyances',
    segments: [
      {
        segment: 'Savoir et Opinion',
        content: [
          'La croyance : adhésion sans preuve, foi religieuse vs savoir fondé en raison (Kant, Platon et l’allégorie de la caverne)',
          'L’expérience : source sensible des connaissances (empirisme) et ses limites (illusions perceptives)',
          'La sorcellerie, la magie, le fétiche : analyse philosophique et sociologique des causalités occultes face à l’esprit scientifique',
          'Le rêve et la réalité : le doute cartésien (les songes impossibles à distinguer de l’éveil) et l’inconscient freudien (le rêve comme voie royale d’accès au psychisme)'
        ]
      }
    ],
    evaluation: {
      type: 'Devoir sur table : Savoir, Croyances & Rationalité',
      description: 'Analyse d’un sujet question ou exercice de problématisation sur la démarcation entre savoir rigoureux et croyances coutumières.',
      criteria: [
        'Distinction conceptuelle nette entre croire et savoir',
        'Analyse philosophique équilibrée des faits magico-religieux sans mépris ni dogmatisme',
        'Mobilisation rigoureuse d’auteurs (Platon, Descartes, Freud, Wiredu)'
      ]
    },
    africanGabonesePerspective: 'Analyse épistémologique et éthique des croyances magiques et de la sorcellerie dans les sociétés traditionnelles et urbaines du Gabon : causalité personnalisée vs causalité naturelle. Kwasi Wiredu et Fabien Eboussi Boulaga sur la rationalisation des pratiques coutumières.',
    associatedSkillIds: ['skill-philo-m2-savoir-opinion-sorcellerie', 'skill-tphilo-science-experience']
  },

  {
    month: 3,
    period: '3ème mois (Décembre)',
    title: 'Étude Intégrale d’une Œuvre & Contrôle de Lecture',
    themeGlobal: 'Immersion dans le texte philosophique complet : rigueur conceptuelle et débat d’idées',
    segments: [
      {
        segment: 'Œuvres',
        content: [
          'Étude intégrale d’une œuvre philosophique majeure inscrite au programme officiel gabonais',
          'Contrôle approfondi de lecture, analyse du contexte historique, doctrinal et problématique',
          'Repérage des thèses fondamentales de l’auteur et de son dispositif argumentatif',
          'Actualisation critique de la portée du texte pour penser le monde contemporain et africain'
        ]
      }
    ],
    oeuvres: {
      type: 'integrale',
      title: 'Étude Intégrale d’une Œuvre',
      description: 'L’élève doit maîtriser l’architecture logique intégrale d’un ouvrage philosophique, sa progression démonstrative et ses débats cardinaux.',
      suggestedAuthors: [
        'Platon – *L’Apologie de Socrate* ou *Gorgias* (le pouvoir de la vérité face à la rhétorique)',
        'René Descartes – *Discours de la méthode* (les 4 préceptes rationnels et le cogito)',
        'Jean-Jacques Rousseau – *Discours sur l’origine et les fondements de l’inégalité parmi les hommes*',
        'Marcien Towa – *Essai sur la problématique philosophique dans l’Afrique actuelle*'
      ]
    },
    evaluation: {
      type: 'Contrôle de lecture et de compréhension textuelle',
      description: 'Épreuve écrite de vérification des connaissances sur l’œuvre : structure, thèses clés, définitions d’auteurs et analyse d’extraits.',
      criteria: [
        'Connaissance exacte de l’argumentaire général de l’ouvrage',
        'Capacité à situer un passage dans l’économie globale du livre',
        'Aptitude à dégager l’intérêt philosophique pérenne de la thèse'
      ]
    },
    africanGabonesePerspective: 'Lors de l’étude d’une œuvre comme celle de Marcien Towa, mise en lumière de la condition de l’Afrique postcoloniale, de la rupture avec les fétichismes idéologiques et de la conquête de la science moderne.',
    associatedSkillIds: ['skill-philo-m3-etude-oeuvre-integrale', 'skill-tphilo-methode-commentaire']
  },

  {
    month: 4,
    period: '4ème mois (Janvier)',
    title: 'Être et Pensée & Méthodologie du Sujet Citation',
    themeGlobal: 'Ontologie, anthropologie philosophique et problématisation d’une pensée d’auteur',
    segments: [
      {
        segment: 'Être et Pensée',
        content: [
          'La nature : le monde physique régi par des lois déterministes vs la liberté humaine ; nature vierge et artefact',
          'La matière et le corps : le corps comme véhicule de l’existence, source d’aliénation ou instrument d’expression',
          'L’âme et l’esprit : le problème du dualisme corps/esprit (Descartes) et du monisme matérialiste (Spinoza, neurosciences)',
          'L’homme : ce qui fonde la spécificité humaine (conscience, technique, langage, moralité, historicité)'
        ]
      },
      {
        segment: 'Méthodologie',
        content: [
          'Le Sujet Citation : démarche spécifique de la dissertation sur sentence ou citation d’auteur',
          'Élucidation du sens obvie (littéral) et de l’ancrage doctrinal de la citation',
          'Explication de la thèse défendue par la formule, puis examen critique de ses présupposés et limites'
        ]
      }
    ],
    methodology: {
      subjectType: 'citation',
      title: 'Le Sujet Citation (Dissertation sur une sentence philosophique)',
      description: 'Le sujet citation soumet une formule ou une maxime d’auteur au jugement de l’élève. Il ne s’agit ni de vénérer aveuglément l’auteur ni de le rejeter sans discernement, mais d’éclairer les raisons de son affirmation avant de tester sa validité.',
      keySteps: [
        '1. Explication littérale : reformuler la citation sans la dénaturer et définir les notions clés',
        '2. Justification de la formule : bâtir la première partie en montrant la vérité et la force de l’argument de l’auteur',
        '3. Réfutation ou examen critique : dégager les limites, les angles morts ou les paradoxes de l’énoncé',
        '4. Dépassement : redéfinir le problème pour concilier la part de vérité de la citation avec les exigences du réel'
      ],
      typicalSubjectExample: '« L’homme n’est qu’un roseau, le plus faible de la nature ; mais c’est un roseau pensant. » (Blaise Pascal). Qu’en pensez-vous ?'
    },
    evaluation: {
      type: 'Dissertation type Baccalauréat sur sujet citation',
      description: 'Rédaction d’un devoir complet articulant explication d’une citation d’auteur et confrontation dialectique.',
      criteria: [
        'Fidélité au sens de la citation proposée',
        'Rigueur de l’argumentation dans l’objection et la nuance',
        'Maîtrise de la transition dialectique entre les parties'
      ]
    },
    africanGabonesePerspective: 'Conception africaine de la personne humaine : l’homme comme être de relations et de solidarité communautaire (Ubuntu : « Je suis parce que nous sommes ») face à l’individualisme atomiste occidental.',
    associatedSkillIds: ['skill-philo-m4-etre-pensee-homme', 'skill-philo-m4-methode-sujet-citation', 'skill-tphilo-nature-environnement']
  },

  {
    month: 5,
    period: '5ème mois (Février)',
    title: 'Le Monde et les Valeurs (1ère partie) & Méthodologie du Sujet Texte',
    themeGlobal: 'Subjectivité, pulsions, morale et technique d’explication linéaire',
    segments: [
      {
        segment: 'Le Monde et les Valeurs',
        content: [
          'La conscience : conscience immédiate du monde et conscience réflexive de soi (Descartes, Kant, Sartre)',
          'Le désir : tension entre manque permanent (Platon, Schopenhauer) et puissance vitale joyeuse (Spinoza, Épicure)',
          'Le bien : fondements de la morale, impératif catégorique kantien, utilitarisme (Bentham, Mill) et éthique des vertus (Aristote)'
        ]
      },
      {
        segment: 'Méthodologie',
        content: [
          'Le Sujet Texte : l’explication ordonnée et le commentaire philosophique d’un extrait d’auteur',
          'Repérage méthodique : Thème (sujet abordé), Problème (difficulté intellectuelle), Thèse (solution soutenue par l’auteur)',
          'Découpage logique des mouvements du texte (articulations, connecteurs logiques, étapes du raisonnement)',
          'Explication conceptuelle des termes pour conjurer définitivement l’écueil de la paraphrase'
        ]
      }
    ],
    methodology: {
      subjectType: 'texte',
      title: 'Le Sujet Texte (Commentaire et Explication de Texte Philosophique)',
      description: 'L’épreuve de commentaire consiste à rendre compte de l’organisation rationnelle d’une pensée. Expliquer un texte, c’est faire comprendre comment l’auteur répond au problème qu’il s’est posé.',
      keySteps: [
        '1. Détermination précise des quatre invariants : Thème, Problème philosophique, Thèse de l’auteur et Enjeu',
        '2. Délimitation des mouvements du texte selon la logique démonstrative propre à l’auteur',
        '3. Analyse linéaire : expliciter chaque concept clé, élucider les implicites et arguments sous-jacents',
        '4. Discussion critique : évaluer la solidité de la solution proposée par rapport à d’autres traditions philosophiques'
      ],
      typicalSubjectExample: 'Explication d’un texte de Jean-Jacques Rousseau sur le passage de l’état de nature à l’état civil (*Du Contrat Social*).'
    },
    evaluation: {
      type: 'Commentaire de texte guidé type Bac',
      description: 'Rédaction complète de l’introduction et du développement de l’explication linéaire d’un texte philosophique court.',
      criteria: [
        'Absence rigoureuse de paraphrase',
        'Mise en valeur de la démarche argumentative de l’auteur',
        'Clarté de la contextualisation conceptuelle'
      ]
    },
    africanGabonesePerspective: 'La morale du devoir partagé et de l’harmonie sociale dans les contes et proverbes gabonais (Fang, Punu, Nzebi, Myènè) : le bien comme préservation du lien communautaire et respect des ancêtres.',
    associatedSkillIds: ['skill-philo-m5-monde-valeurs-conscience-bien', 'skill-philo-m5-methode-sujet-texte', 'skill-tphilo-conscience-inconscient', 'skill-tphilo-bonheur-devoir']
  },

  {
    month: 6,
    period: '6ème mois (Mars)',
    title: 'Le Monde et les Valeurs (Suite & Fin) & Étude Partielle d’une Œuvre 1',
    themeGlobal: 'Politique, sacré, traditions coutumières et dignité de la personne',
    segments: [
      {
        segment: 'Le Monde et les Valeurs (suite et fin)',
        content: [
          'Le sacré : la dimension religieuse, séparation entre profane et sacré (Durkheim, Eliade), rites et transcendance',
          'La coutume : transmission intergénérationnelle, autorité des traditions (Montaigne, Pascal) face à l’universalité des droits humains',
          'La dignité : valeur absolue de la personne humaine qui ne peut être ravalée au rang de simple moyen (Kant, Déclaration Universelle des Droits de l’Homme)',
          'Le pouvoir : fondement de la souveraineté légitime (Hobbes, Locke, Rousseau), séparation des pouvoirs (Montesquieu) et critique de la tyrannie'
        ]
      },
      {
        segment: 'Œuvres',
        content: [
          'Étude partielle d’une œuvre 1 et contrôle de lecture ciblé',
          'Analyse suivie d’un chapitre ou d’une section stratégique d’une œuvre philosophique majeure'
        ]
      }
    ],
    oeuvres: {
      type: 'partielle_1',
      title: 'Étude Partielle d’une Œuvre 1',
      description: 'Étude ciblée d’un livre ou d’un extrait substantiel d’œuvre philosophique portant sur la politique, les coutumes ou le droit.',
      suggestedAuthors: [
        'Jean-Jacques Rousseau – *Du Contrat Social* (Livre I : Pacte social et souveraineté)',
        'Nicolas Machiavel – *Le Prince* (Chapitres XV à XVIII : Réalisme politique et exercice du pouvoir)',
        'Aimé Césaire – *Discours sur le colonialisme* (Critique de l’aliénation politique et dignité bafouée)'
      ]
    },
    evaluation: {
      type: 'Évaluation sommative : Sujets de type Baccalauréat',
      description: 'Épreuve blanche de type Bac : choix entre 2 sujets de dissertation (sujet question et sujet citation) et 1 sujet de texte.',
      criteria: [
        'Respect scrupuleux du format choisi',
        'Profondeur de la réflexion sur les notions de pouvoir, sacré et dignité',
        'Qualité de la langue philosophique et précision des références'
      ]
    },
    africanGabonesePerspective: 'Cheikh Anta Diop et l’analyse des institutions politiques africaines précoloniales : équilibre des pouvoirs, rôle régulateur des conseils de sages et dignité sacrée de la royauté coutumière.',
    associatedSkillIds: ['skill-philo-m6-sacre-coutume-dignite-pouvoir', 'skill-tphilo-etat-pouvoir', 'skill-tphilo-justice-droit']
  },

  {
    month: 7,
    period: '7ème mois (Avril)',
    title: 'Connaissance et Vérité & Étude Partielle d’une Œuvre 2',
    themeGlobal: 'Épistémologie, vérité scientifique, théorie et démarche expérimentale',
    segments: [
      {
        segment: 'Connaissance et Vérité',
        content: [
          'La théorie : constructions conceptuelles hypothétiques de l’esprit humain pour rendre le monde intelligible',
          'La science : passage de l’opinion naïve au savoir vérifié, ruptures épistémologiques (Bachelard : « L’opinion ne pense pas, elle traduit des besoins en connaissances »)',
          'L’expérimentation : le tribunal de l’expérience, protocole de vérification et falsifiabilité poppérienne'
        ]
      },
      {
        segment: 'Œuvres',
        content: [
          'Étude partielle d’une œuvre 2 et contrôle de lecture',
          'Examen approfondi d’un texte épistémologique ou éthique consacré aux limites de la connaissance humaine'
        ]
      }
    ],
    oeuvres: {
      type: 'partielle_2',
      title: 'Étude Partielle d’une Œuvre 2',
      description: 'Analyse d’un corpus textuel consacré à la théorie de la connaissance, à l’éthique de la science ou à la vérité.',
      suggestedAuthors: [
        'Claude Bernard – *Introduction à l’étude de la médecine expérimentale* (La démarche scientifique en 3 temps)',
        'Gaston Bachelard – *La Formation de l’esprit scientifique* (Les obstacles épistémologiques)',
        'Karl Popper – *La Logique de la découverte scientifique* (Le critère de réfutabilité)'
      ]
    },
    evaluation: {
      type: 'Évaluation : Sujets de type Baccalauréat (Session Blanche)',
      description: 'Épreuve complète en temps limité avec barème officiel gabonais (sur 20 points).',
      criteria: [
        'Aptitude à problématiser le rapport entre théorie abstraite et fait expérimental',
        'Clarté des définitions opératoires',
        'Pertinence des exemples scientifiques'
      ]
    },
    africanGabonesePerspective: 'L’Afrique face au défi techno-scientifique contemporain : valorisation des pharmacopées traditionnelles gabonaises (plantes médicinales de la forêt équatoriale) par la méthode expérimentale moderne.',
    associatedSkillIds: ['skill-philo-m7-connaissance-verite-science', 'skill-tphilo-science-experience', 'skill-tphilo-verite-raison']
  },

  {
    month: 8,
    period: '8ème mois (Mai)',
    title: 'Renforcement Méthodologique Intensif (Bac Blanc N°1)',
    themeGlobal: 'Perfectionnement dialectique, vitesse d’exécution et maîtrise des trois épreuves',
    segments: [
      {
        segment: 'Méthodologie',
        content: [
          'Renforcement des acquis méthodologiques sur les 3 types de sujets : Sujet question, Sujet citation, Sujet texte',
          'Atelier d’analyse comparative : comment aborder une même notion à travers chacun des 3 formats d’épreuve',
          'Techniques de rédaction sous contrainte de temps (gestion optimale des 4 heures d’épreuve au Bac)',
          'Chasse aux fautes classiques : contre-sens sur les citations, paraphrase des textes, plans déséquilibrés'
        ]
      }
    ],
    methodology: {
      subjectType: 'renforcement',
      title: 'Atelier de Perfectionnement Méthodologique Intégral',
      description: 'Comparaison directe et entraînement croisé sur les 3 sujets du Baccalauréat gabonais. L’élève s’entraîne à choisir le sujet le plus adapté à ses points forts.',
      keySteps: [
        '1. Les 30 premières minutes : analyse comparative des trois sujets proposés au tableau du Bac',
        '2. Critères de choix rationnel : maîtrise des notions vs clarté du texte à commenter',
        '3. Rigueur du brouillon : problématisation écrite intégrale, plan détaillé avec citations et arguments avant toute rédaction',
        '4. Relecture orthographique et conceptuelle : fluidité du style académique et précision lexicale'
      ],
      typicalSubjectExample: 'Sujet 1 (Question) : « La science délivre-t-elle l’homme de toutes ses peurs ? » | Sujet 2 (Citation) : « Là où cesse la coutume, commence la pensée. » | Sujet 3 (Texte) : Texte d’Aristote sur la justice et l’équité.'
    },
    evaluation: {
      type: 'Évaluation : Bac Blanc Régional / Établissement',
      description: 'Épreuve complète de 4 heures dans les conditions exactes de l’examen officiel du Baccalauréat.',
      criteria: [
        'Structure irréprochable des introductions et conclusions',
        'Équilibre et transition logique entre les parties',
        'Richesse de la culture philosophique mobilisée'
      ]
    },
    africanGabonesePerspective: 'Capacité à intégrer avec pertinence et élégance des penseurs du continent africain dans les dissertations et commentaires du Baccalauréat.',
    associatedSkillIds: ['skill-philo-m8-9-renforcement-bac', 'skill-tphilo-methode-dissertation', 'skill-tphilo-methode-commentaire']
  },

  {
    month: 9,
    period: '9ème mois (Juin)',
    title: 'Révisions Finales & Préparation Ultime au Baccalauréat',
    themeGlobal: 'Synthèse des 20 notions, mémento des citations fondamentales et épreuves finales',
    segments: [
      {
        segment: 'Méthodologie',
        content: [
          'Renforcement final des compétences d’argumentation, de problématisation et de synthèse',
          'Révision croisée des couples de notions clés (Liberté/Déterminisme, Conscience/Inconscient, Théorie/Expérience, Droit/Justice, Travail/Technique)',
          'Mémento des repères philosophiques : Absolu/Relatif, En fait/En droit, Croire/Savoir, Origine/Fondement, Légal/Légitime',
          'Dernières simulations d’épreuves types et corrigés détaillés avec grilles d’évaluation des correcteurs'
        ]
      }
    ],
    methodology: {
      subjectType: 'renforcement',
      title: 'Synthèse Magistrale & Grille de Correction Officielle',
      description: 'Dernière ligne droite : consolidation des automatismes rédactionnels et des repères philosophiques essentiels pour décrocher la mention au Baccalauréat.',
      keySteps: [
        '1. Révision éclair des 20 notions du programme et de leurs citations cardinales',
        '2. Validation des repères notionnels (en acte / en puissance, fin / moyen, contrainte / obligation)',
        '3. Rigueur de la conclusion : apporter une réponse courageuse, nette et argumentée sans dérobade',
        '4. Gestion du stress et posture philosophique : clarté, sérénité et liberté de l’esprit critique'
      ],
      typicalSubjectExample: 'Session Finale : Épreuves types conformes aux sujets officiels des sessions antérieures du Baccalauréat gabonais.'
    },
    evaluation: {
      type: 'Évaluation Finale : Simulation Complète Baccalauréat Gabon',
      description: 'Dernier devoir sur table sommatif avec notation rigoureuse et debriefing méthodologique individualisé.',
      criteria: [
        'Excellence argumentative et problématisation sans faille',
        'Fidélité au programme officiel de Philosophie de l’Enseignement Secondaire Gabonais',
        'Autonomie complète de pensée'
      ]
    },
    africanGabonesePerspective: 'Affirmation de la dignité et de la maturité intellectuelle du bachelier gabonais, prêt à exercer un esprit critique éclairé au service du développement de son pays et de l’humanité.',
    associatedSkillIds: ['skill-philo-m8-9-renforcement-bac', 'skill-tphilo-methode-dissertation', 'skill-tphilo-methode-commentaire']
  }
];
