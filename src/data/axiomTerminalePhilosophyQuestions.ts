import { ExerciseQuestion } from '../types';

// =========================================================================================
// BANQUE DE QUESTIONS CALIBRÉES BACCALAURÉAT PHILOSOPHIE TERMINALE (GABON)
// Conforme au Programme Officiel Gabonais (20 Notions + Méthodologie Dissertation & Commentaire)
// =========================================================================================

export const TERMINALE_PHILOSOPHY_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // --- Méthodologie Baccalauréat ---
  'skill-tphilo-methode-dissertation': [
    {
      id: 'q-tphilo-dissert-1',
      exerciseId: 'ex-tphilo-methode',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Méthodologie : Structure de l’Introduction de Dissertation',
      microConcept: 'Une introduction réussie de dissertation philosophique comporte obligatoirement 4 étapes ordonnées : l\'amorce (mise en contexte sans banalité), la définition des notions et le constat du paradoxe (problématisation), la question directrice posant le problème philosophique, et enfin l\'annonce explicite des axes du plan.',
      hint: 'Ne commencez jamais par une formule passe-partout (« De tout temps... ») et terminez toujours par l\'annonce des étapes.',
      prompt: 'Dans la méthodologie de l’épreuve de dissertation philosophique au Baccalauréat gabonais, quelle est l’étape finale obligatoire de l’introduction ?',
      options: [
        'L’annonce claire et ordonnée des axes du plan (démarche réflexive)',
        'La réponse définitive au sujet posé',
        'La première citation d’un auteur illustre',
        'Le rappel biographique des philosophes concernés'
      ],
      correctAnswer: 'L’annonce claire et ordonnée des axes du plan (démarche réflexive)',
      explanation: 'L’introduction se termine impérativement par l’annonce du plan, qui indique au correcteur l’itinéraire réflexif et dialectique qui sera suivi dans le développement (ex. examen de la thèse dominante, mise en évidence de ses limites, puis dépassement synthétique). La réponse finale est réservée à la conclusion.',
      steps: [
        '1. Rappeler les 4 étapes de l\'introduction : Amorce → Définition/Paradoxe → Problématique → Annonce du plan.',
        '2. Constater que la conclusion donne la réponse finale, tandis que l\'introduction ouvre la réflexion.',
        '3. L\'étape conclusive de l\'introduction est l\'annonce du plan.'
      ]
    },
    {
      id: 'q-tphilo-dissert-2',
      exerciseId: 'ex-tphilo-methode',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Méthodologie : La Démarche Dialectique (Thèse / Antithèse / Synthèse)',
      microConcept: 'La troisième partie (synthèse ou dépassement) ne doit jamais être un compromis mou ou un mélange contradictoire de la thèse et de l\'antithèse. Elle doit changer de perspective conceptuelle, résoudre la tension apparente ou redéfinir les termes du problème à un niveau supérieur.',
      hint: 'Une synthèse n\'est pas un tiède « oui et non » ou « un peu des deux ».',
      prompt: 'Dans un développement dialectique en dissertation, quel est le véritable rôle de la « synthèse » ?',
      options: [
        'Dépasser la contradiction apparente entre la thèse et l’antithèse en déplaçant le problème sur un plan supérieur',
        'Trouver un juste milieu banal en affirmant que les deux parties ont un peu raison',
        'Répéter textuellement les arguments de la première partie',
        'Donner un avis strictement personnel sans argument philosophique'
      ],
      correctAnswer: 'Dépasser la contradiction apparente entre la thèse et l’antithèse en déplaçant le problème sur un plan supérieur',
      explanation: 'La synthèse philosophique n’est pas un compromis conciliant ou une juxtaposition contradictoire (« oui et non »). Elle constitue un dépassement rationnel qui surmonte l\'opposition initiale en redéfinissant les concepts ou en abordant la question sous un nouvel angle théorique.',
      steps: [
        '1. Écarter le compromis mou « un peu des deux » qui est un défaut majeur.',
        '2. Comprendre la dialectique : Position (Thèse) → Négation (Antithèse) → Négation de la négation ou Aufhebung (Dépassement).',
        '3. Conclure sur le rôle élévateur et clarificateur de la synthèse.'
      ]
    }
  ],

  'skill-tphilo-methode-commentaire': [
    {
      id: 'q-tphilo-comm-1',
      exerciseId: 'ex-tphilo-methode',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Méthodologie : Piège de la Paraphrase en Commentaire de Texte',
      microConcept: 'Le commentaire de texte philosophique exige d\'expliquer le texte, c\'est-à-dire de mettre au jour les arguments implicites, les définitions des concepts et la logique démonstrative de l\'auteur. Répéter le texte avec d\'autres mots sans l\'élucider constitue le piège majeur de la paraphrase.',
      hint: 'Expliquer signifie faire comprendre le "pourquoi" et le "comment" du raisonnement de l\'auteur.',
      prompt: 'Quel écueil classique l’élève doit-il absolument éviter lors de la rédaction d’un commentaire de texte philosophique ?',
      options: [
        'La paraphrase, qui consiste à répéter le texte avec des synonymes sans en expliquer la nécessité rationnelle',
        'Le découpage ordonné du texte en unités logiques de sens',
        'La définition des termes techniques employés par l’auteur',
        'L’identification de la thèse centrale'
      ],
      correctAnswer: 'La paraphrase, qui consiste à répéter le texte avec des synonymes sans en expliquer la nécessité rationnelle',
      explanation: 'La paraphrase est le défaut le plus sévèrement sanctionné au Baccalauréat. Commenter un texte ne consiste pas à le redire de manière plus vague, mais à expliciter les concepts, justifier les étapes de l\'argumentation et montrer en quoi le texte résout le problème posé.',
      steps: [
        '1. Définir la paraphrase : simple répétition ou résumé déguisé du texte.',
        '2. Opposer paraphrase et explication authentique (conceptualisation, analyse argumentative).',
        '3. La paraphrase est l\'écueil fondamental à proscrire.'
      ]
    }
  ],

  // --- Bloc 1 : Le Sujet, la Conscience et l'Existence ---
  'skill-tphilo-conscience-inconscient': [
    {
      id: 'q-tphilo-consc-1',
      exerciseId: 'ex-tphilo-consc',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Inconscient : La Blessure Narcissique selon Freud',
      microConcept: 'Freud démontre que la conscience n\'embrasse pas la totalité de la vie psychique. Par la formule célèbre « Le moi n’est pas maître dans sa propre maison », Freud signifie que le Moi conscient est sans cesse traversé et influencé par des pulsions inconscientes refoulées du Ça et les impératifs du Surmoi.',
      hint: 'Pensez à la perte de contrôle absolu du sujet sur ses désirs, ses lapsus et ses rêves.',
      prompt: 'Quelle est la signification philosophique de la célèbre formule de Sigmund Freud : « Le moi n’est pas maître dans sa propre maison » ?',
      options: [
        'La conscience ne gouverne pas souverainement l’ensemble de notre vie psychique, car des forces inconscientes nous déterminent',
        'L’homme n’est pas propriétaire de son logement matériel',
        'L’être humain est incapable de penser par lui-même',
        'La société contrôle intégralement les pensées des individus'
      ],
      correctAnswer: 'La conscience ne gouverne pas souverainement l’ensemble de notre vie psychique, car des forces inconscientes nous déterminent',
      explanation: 'Par cette métaphore, Freud remet en cause le primat cartésien du cogito transparent. Notre vie psychique ne se réduit pas à la conscience : des pulsions inconscientes refoulées agissent à notre insu (actes manqués, lapsus, rêves, symptômes névrotiques).',
      steps: [
        '1. Repérer l\'auteur : Sigmund Freud, fondateur de la psychanalyse.',
        '2. Identifier le concept de « maison » : métaphore de l\'appareil psychique.',
        '3. Le « moi » (conscience) cohabite avec le « Ça » (pulsions inconscientes) et le « Surmoi » (censure morale inconsciente).'
      ]
    },
    {
      id: 'q-tphilo-consc-2',
      exerciseId: 'ex-tphilo-consc',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Conscience : Le Cogito Cartésien',
      microConcept: 'René Descartes, au terme du doute méthodique universel, découvre la première vérité indubitable : pour douter, il faut penser, et pour penser, il faut nécessairement exister (« Cogito ergo sum » / « Je pense, donc je suis »).',
      hint: 'Même si un mauvais génie me trompe sur tout, il ne peut m\'empêcher d\'exister tant que je pense.',
      prompt: 'Dans les Méditations métaphysiques de Descartes, quelle certitude fondamentale résiste à l’épreuve du doute méthodique ?',
      options: [
        'L’existence du sujet pensant : « Je pense, donc je suis » (le Cogito)',
        'L’existence du monde physique extérieur et des objets matériels',
        'La certitude absolue des perceptions fournies par les cinq sens',
        'La validité indiscutable des dogmes religieux reçus dans l’enfance'
      ],
      correctAnswer: 'L’existence du sujet pensant : « Je pense, donc je suis » (le Cogito)',
      explanation: 'Descartes révoque en doute les sens, le corps et même les vérités mathématiques (hypothèse du Malin Génie). Mais pour douter, il faut penser, et pour penser, il faut être. Le cogito est la première certitude fondatrice de la philosophie moderne.',
      steps: [
        '1. Examiner l\'expérience du doute méthodique de Descartes.',
        '2. Constater que les sens et les images du corps peuvent être illusoires.',
        '3. La seule vérité inébranlable immédiate est l\'acte même de penser : « Je pense, donc je suis ».'
      ]
    }
  ],

  'skill-tphilo-liberte-determinisme': [
    {
      id: 'q-tphilo-lib-1',
      exerciseId: 'ex-tphilo-lib',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Liberté : L’Existentialisme Sartrien',
      microConcept: 'Dans « L\'existentialisme est un humanisme », Jean-Paul Sartre affirme que chez l\'homme, « l\'existence précède l\'essence ». L\'homme n\'est pas défini par une nature prédéterminée : il existe d\'abord, se choisit par ses actes et en porte l\'entière responsabilité. C\'est pourquoi « l\'homme est condamné à être libre ».',
      hint: 'L\'homme ne peut s\'abriter derrière aucune excuse déterministe sans tomber dans la « mauvaise foi ».',
      prompt: 'Pourquoi Jean-Paul Sartre affirme-t-il paradoxalement que « l’homme est condamné à être libre » ?',
      options: [
        'Parce qu’il n’a pas choisi d’exister, mais qu’une fois jeté dans le monde, il est totalement responsable de chacun de ses actes',
        'Parce que les lois de la société l’emprisonnent en permanence',
        'Parce que le destin divin guide immanquablement sa vie',
        'Parce que la liberté est une punition juridique prononcée par les tribunaux'
      ],
      correctAnswer: 'Parce qu’il n’a pas choisi d’exister, mais qu’une fois jeté dans le monde, il est totalement responsable de chacun de ses actes',
      explanation: 'Pour Sartre, l’homme ne s’est pas créé lui-même (« jeté dans le monde »), mais il n’a aucune excuse divine, biologique ou psychologique pour justifier ses choix. Ne pas choisir est déjà un choix. L’homme porte le fardeau inaliénable de sa liberté absolue.',
      steps: [
        '1. Comprendre le mot « condamné » : l\'homme n\'a pas choisi d\'être projeté dans l\'existence.',
        '2. Comprendre « libre » : aucune essence préalable ne dicte son comportement.',
        '3. Conclure sur la responsabilité intégrale de l\'homme face à lui-même et envers l\'humanité.'
      ]
    }
  ],

  'skill-tphilo-bonheur-devoir': [
    {
      id: 'q-tphilo-bonh-1',
      exerciseId: 'ex-tphilo-bonh',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Bonheur : Kant & l’Idéal de l’Imagination',
      microConcept: 'Pour Emmanuel Kant, le bonheur ne peut pas être un principe moral sûr car il est un « idéal non de la raison, mais de l’imagination ». Tout homme désire être heureux, mais nul n\'est capable de déterminer avec certitude ce qui lui procurera un bonheur parfait et durable.',
      hint: 'Le bonheur est composé d\'éléments empiriques fluctuants et souvent contradictoires (richesse, santé, repos).',
      prompt: 'Pourquoi Kant soutient-il dans les Fondements de la métaphysique des mœurs que le bonheur est un « idéal de l’imagination » et non de la raison ?',
      options: [
        'Parce que le bonheur est un concept empirique indéterminé dont le contenu varie sans cesse selon nos désirs subjectifs',
        'Parce que les êtres humains ne souhaitent jamais être heureux',
        'Parce que seule la science mathématique peut garantir le bonheur',
        'Parce que le bonheur est une certitude rigoureusement démontrable par la raison'
      ],
      correctAnswer: 'Parce que le bonheur est un concept empirique indéterminé dont le contenu varie sans cesse selon nos désirs subjectifs',
      explanation: 'Pour Kant, bien que tout homme veuille le bonheur, nul ne peut formuler un concept universel et stable de ce bonheur : désirer la richesse apporte les soucis, désirer le savoir apporte le tourment. Le bonheur relève donc des projections changeantes de l’imagination, et non de lois rationnelles universelles.',
      steps: [
        '1. Analyser la thèse kantienne sur l\'indétermination du concept de bonheur.',
        '2. Constater la contradiction entre universalité de la raison et subjectivité empirique du plaisir.',
        '3. Déduire que seul le devoir moral (impératif catégorique) relève de la raison pure pratique.'
      ]
    },
    {
      id: 'q-tphilo-bonh-2',
      exerciseId: 'ex-tphilo-bonh',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Devoir : L’Impératif Catégorique Kantien',
      microConcept: 'L\'impératif catégorique kantien commande sans condition et de manière inconditionnelle : « Agis uniquement d’après la maxime qui fait que tu peux vouloir en même temps qu’elle devienne une loi universelle ». Le devoir s\'impose par pur respect de la loi morale.',
      hint: 'Une action morale doit pouvoir être universalisée sans contradiction logique.',
      prompt: 'Selon Emmanuel Kant, quelle maxime d’action viole l’impératif catégorique moral universel ?',
      options: [
        'Faire une promesse en sachant pertinemment que l’on ne pourra pas la tenir',
        'Aider son prochain en difficulté par pure bienveillance désintéressée',
        'Dire la vérité même lorsque cela exige du courage',
        'Traiter chaque être humain comme une fin en soi et jamais simplement comme un moyen'
      ],
      correctAnswer: 'Faire une promesse en sachant pertinemment que l’on ne pourra pas la tenir',
      explanation: 'Si la maxime « fais une fausse promesse dès que tu en as besoin » devenait une loi universelle de la nature, plus personne ne croirait aux promesses et la notion même de promesse s\'autodétruirait. Cette maxime est logiquement contradictoire à l\'universalisation.',
      steps: [
        '1. Appliquer le test kantien d\'universalisation.',
        '2. Supposer que tout le monde mente ou fasse de fausses promesses.',
        '3. La promesse devient impossible : la maxime se détruit elle-même, donc elle est immorale.'
      ]
    }
  ],

  'skill-tphilo-temps-mort': [
    {
      id: 'q-tphilo-temps-1',
      exerciseId: 'ex-tphilo-temps',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Temps : La Durée Vécue selon Henri Bergson',
      microConcept: 'Henri Bergson distingue le temps spatialisé (mesuré par l\'horloge, découpé en secondes identiques et extérieures les unes aux autres) de la « durée réelle » (le temps psychologique subjectif vécu par la conscience comme un flux continu, indivisible et qualitatif).',
      hint: 'Une minute d\'angoisse ne ressemble pas à une minute de joie, bien que l\'horloge marque 60 secondes.',
      prompt: 'Que désigne le concept bergsonien de « durée » par opposition au temps scientifique des horloges ?',
      options: [
        'Le flux continu et indivisible de la conscience, où les états d’âme se fondent qualitativement',
        'Le temps objectif mesuré en secondes par les instruments de précision',
        'L’illusion que le temps n’existe pas',
        'La longévité biologique d’un organisme vivant'
      ],
      correctAnswer: 'Le flux continu et indivisible de la conscience, où les états d’âme se fondent qualitativement',
      explanation: 'Pour Bergson, la science spatialise le temps en le réduisant à une suite de points discontinus sur un cadran. Mais pour notre conscience intérieure, le temps est une « durée » purement qualitative et continue, où passé, présent et avenir s\'entremêlent organiquement.',
      steps: [
        '1. Différencier temps homogène (physique) et durée hétérogène (philosophique).',
        '2. Reconnaître l\'apport majeur d\'Henri Bergson (Essai sur les données immédiates de la conscience).',
        '3. La durée est le temps vécu qualitativement par la conscience.'
      ]
    }
  ],

  // --- Bloc 2 : La Culture, la Société et la Politique ---
  'skill-tphilo-justice-droit': [
    {
      id: 'q-tphilo-just-1',
      exerciseId: 'ex-tphilo-just',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Justice : Égalité Arithmétique vs Équité selon Aristote',
      microConcept: 'Dans l\'Éthique à Nicomaque, Aristote affirme que « le juste est l\'égal ». Il distingue la justice commutative (égalité stricte arithmétique dans les échanges économiques : à chacun la même chose) et la justice distributive (égalité géométrique ou proportionnelle selon le mérite de chacun).',
      hint: 'Donner la même note à un élève qui a travaillé et à celui qui n\'a rien fait serait une égalité injuste : il faut une égalité proportionnelle (l\'équité).',
      prompt: 'Quelle différence fondamentale Aristote établit-il entre justice commutative et justice distributive ?',
      options: [
        'La justice commutative applique une égalité arithmétique stricte (échanges), tandis que la justice distributive répartit selon le mérite proportionnel (équité)',
        'La justice commutative concerne les tribunaux divins, la justice distributive les lois humaines',
        'La justice distributive ne s’applique qu’en période de guerre',
        'La justice commutative donne tout aux riches et rien aux pauvres'
      ],
      correctAnswer: 'La justice commutative applique une égalité arithmétique stricte (échanges), tandis que la justice distributive répartit selon le mérite proportionnel (équité)',
      explanation: 'Pour Aristote, traiter de manière égale des personnes inégales en mérite est souverainement injuste. La justice distributive est donc une égalité proportionnelle (géométrique), alors que la justice commutative rétablit l\'égalité stricte (arithmétique) sans considération des personnes.',
      steps: [
        '1. Définir la justice commutative : régulation des contrats et transactions (A = B).',
        '2. Définir la justice distributive : attribution des honneurs et richesses de la cité selon la valeur et l\'effort.',
        '3. L\'équité adapte la règle générale à la singularité des situations.'
      ]
    }
  ],

  'skill-tphilo-etat-pouvoir': [
    {
      id: 'q-tphilo-etat-1',
      exerciseId: 'ex-tphilo-etat',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'État : L’Homme comme Animal Politique chez Aristote',
      microConcept: 'Pour Aristote dans « Les Politiques », « l\'homme est par nature un animal politique » (zoon politikon). Seul parmi les animaux, l\'homme possède le logos (le langage rationnel permettant de distinguer le juste de l\'injuste), et il ne peut réaliser sa pleine humanité et sa vertu qu\'au sein de la cité (polis).',
      hint: 'Celui qui vit hors de la société par nature est soit un être dégradé (bête), soit au-dessus de l\'humanité (dieu).',
      prompt: 'Que signifie l’affirmation d’Aristote selon laquelle « l’homme est par nature un animal politique » ?',
      options: [
        'L’homme ne peut accomplir sa nature morale et rationnelle que dans la vie en communauté organisée (la Cité)',
        'Tous les hommes doivent obligatoirement être candidats aux élections politiques',
        'L’homme est guidé par les mêmes instincts grégaires que les loups ou les abeilles',
        'L’État est une création artificielle inventée par les souverains pour opprimer le peuple'
      ],
      correctAnswer: 'L’homme ne peut accomplir sa nature morale et rationnelle que dans la vie en communauté organisée (la Cité)',
      explanation: 'Pour Aristote, la Cité n\'est pas un artifice contre-nature, mais le terme naturel de l\'évolution des communautés humaines (famille, village, cité). Vivre en société politique permet à l\'homme d\'exercer la parole délibérative et la justice, sans lesquelles il serait le plus féroce des animaux.',
      steps: [
        '1. Traduire l\'expression grecque : zôon politikon.',
        '2. Souligner le rôle du logos (parole articulée) par opposition à la simple voix animale (phoné).',
        '3. Conclure : la société politique est le lieu naturel de l\'accomplissement éthique de l\'être humain.'
      ]
    }
  ],

  'skill-tphilo-travail-technique': [
    {
      id: 'q-tphilo-trav-1',
      exerciseId: 'ex-tphilo-trav',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Travail : L’Aliénation du Travail selon Karl Marx',
      microConcept: 'Dans les Manuscrits de 1844, Karl Marx démontre que sous le mode de production capitaliste, le travail aliène l\'ouvrier : le produit de son travail devient une puissance étrangère hostile qui le domine, l\'activité de travail est dépossédée de créativité (simple moyen de survie physique), et l\'homme est coupé de son essence générique humaine.',
      hint: 'Aliéner signifie étymologiquement devenir étranger à soi-même (alienus).',
      prompt: 'Selon Karl Marx, en quoi consiste l’aliénation du travailleur dans la société capitaliste ?',
      options: [
        'Le travailleur est dépossédé de son produit, ne s’épanouit pas dans son activité et devient étranger à sa propre humanité',
        'Le travailleur gagne tellement d’argent qu’il en perd la raison',
        'Le travail est aboli au profit de machines autonomes',
        'L’ouvrier devient le propriétaire exclusif des moyens de production'
      ],
      correctAnswer: 'Le travailleur est dépossédé de son produit, ne s’épanouit pas dans son activité et devient étranger à sa propre humanité',
      explanation: 'Pour Marx, le travail devrait être l’expression créatrice de l’homme humanisant la nature. Mais dans le capitalisme, l’ouvrier vend sa force de travail comme une simple marchandise : plus il produit de richesse, plus il s’appauvrit spirituellement et matériellement.',
      steps: [
        '1. Analyser le concept d\'aliénation (Entfremdung) chez Marx.',
        '2. Identifier les 3 dimensions de l\'aliénation : dépossession de l\'objet, dépossession de l\'acte de travail, rupture avec autrui.',
        '3. Conclure sur la critique du travail ouvrier aliéné.'
      ]
    },
    {
      id: 'q-tphilo-trav-2',
      exerciseId: 'ex-tphilo-trav',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Technique : L’Essence de la Technique selon Heidegger',
      microConcept: 'Martin Heidegger (La Question de la technique) affirme que l\'essence de la technique moderne n\'est pas purement technique ou instrumentale. C\'est un mode de dévoilement du réel qu\'il nomme l\'« arraisonnement » (Gestell) : la nature est sommée de livrer son énergie et réduite à un stock disponible (fonds).',
      hint: 'La technique moderne ne s\'adapte pas à la nature comme le moulin à vent, elle la met en demeure de fournir de l\'énergie.',
      prompt: 'Quel danger majeur Martin Heidegger décèle-t-il dans l’essence de la technique moderne ?',
      options: [
        'La réduction de la nature et de l’homme lui-même à un simple stock exploitable (le « fonds » disponible)',
        'Le risque que les outils traditionnels soient plus efficaces que les ordinateurs',
        'La disparition complète du commerce international',
        'La fin de toute recherche scientifique'
      ],
      correctAnswer: 'La réduction de la nature et de l’homme lui-même à un simple stock exploitable (le « fonds » disponible)',
      explanation: 'Pour Heidegger, la technique moderne n’est pas un simple outil neutre. Elle arraisonne le monde, considérant le fleuve comme source d’hydroélectricité et la forêt comme réserve de bois. Le péril ultime est que l’homme lui-même finisse par être traité comme simple ressource humaine disponible.',
      steps: [
        '1. Définir le concept heideggerien de « Gestell » (arraisonnement).',
        '2. Comprendre que la technique moderne contraint la nature à être exploitable et stockable.',
        '3. Le danger suprême est l\'aveuglement de l\'homme face à ce mode réducteur de dévoilement.'
      ]
    }
  ],

  'skill-tphilo-violence-guerre': [
    {
      id: 'q-tphilo-viol-1',
      exerciseId: 'ex-tphilo-viol',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Violence : Le Rôle Historique de la Violence chez Marx',
      microConcept: 'Dans Le Capital, Karl Marx écrit : « La violence est l’accoucheuse de toute vieille société grosse d’une société nouvelle. Elle est elle-même une puissance économique ». La violence révolutionnaire est perçue comme la rupture nécessaire qui brise les résistances de la classe dominante.',
      hint: 'L\'image de l\'accoucheuse montre que la violence n\'engendre pas l\'enfant, mais aide à sa venue au monde lors des contradictions historiques.',
      prompt: 'Que signifie la métaphore de Karl Marx désignant la violence comme « l’accoucheuse de l’histoire » ?',
      options: [
        'La violence révolutionnaire permet de faire émerger la nouvelle organisation sociale lorsque l’ancienne entrave son développement',
        'La violence est le but ultime et permanent de la vie en société',
        'Tous les médecins et sages-femmes doivent être armés',
        'La violence est toujours injustifiable quelles que soient les époques'
      ],
      correctAnswer: 'La violence révolutionnaire permet de faire émerger la nouvelle organisation sociale lorsque l’ancienne entrave son développement',
      explanation: 'Pour Marx, les contradictions matérielles entre forces productives et rapports de production préparent le changement social. Mais la classe dominante ne cède jamais spontanément ses privilèges : la violence révolutionnaire est le levier historique qui brise l\'enveloppe de l\'ancien monde pour libérer le nouveau.',
      steps: [
        '1. Analyser la métaphore de « l\'accoucheuse » : elle ne crée pas le fœtus, elle l\'aide à naître.',
        '2. Relier la formule au matérialisme historique et à la lutte des classes.',
        '3. La violence est l\'instrument de transition politique lors des révolutions.'
      ]
    }
  ],

  'skill-tphilo-developpement-decolonisation': [
    {
      id: 'q-tphilo-decol-1',
      exerciseId: 'ex-tphilo-decol',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Décolonisation : Frantz Fanon & la Libération Mentale',
      microConcept: 'Dans « Les Damnés de la terre » (1961), Frantz Fanon théorise la décolonisation non pas comme un simple remplacement de drapeau, mais comme une transformation radicale des consciences. La véritable libération exige de briser l\'aliénation coloniale intériorisée pour bâtir un « homme neuf » désaliéné.',
      hint: 'La décolonisation est une création d\'hommes nouveaux libérés des complexes d\'infériorité.',
      prompt: 'Dans la pensée de Frantz Fanon, quelle est la condition indispensable pour qu’une décolonisation soit véritable et féconde ?',
      options: [
        'Une décolonisation mentale et culturelle radicale qui désaliène les esprits et recrée un homme nouveau',
        'La simple reconduction à l’identique des institutions et des valeurs de l’ancien colonisateur',
        'Le refus de tout progrès scientifique et médical',
        'L’isolement économique complet vis-à-vis du reste de la planète'
      ],
      correctAnswer: 'Une décolonisation mentale et culturelle radicale qui désaliène les esprits et recrée un homme nouveau',
      explanation: 'Pour Fanon, la violence du colonialisme a déshumanisé et complexé les colonisés (Peau noire, masques blancs). La décolonisation ne peut se réduire à l’arrivée au pouvoir d’une bourgeoisie nationale mimétique : elle doit être une régénération totale, morale et culturelle, pour bâtir un monde nouveau.',
      steps: [
        '1. Recontextualiser l\'œuvre majeure de Frantz Fanon : Les Damnés de la terre.',
        '2. Identifier l\'aliénation coloniale comme un traumatisme psychique et culturel.',
        '3. Conclure : la décolonisation réelle implique la libération mentale et la création d\'un homme neuf.'
      ]
    },
    {
      id: 'q-tphilo-decol-2',
      exerciseId: 'ex-tphilo-decol',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Développement : Amartya Sen & les Capabilités',
      microConcept: 'Le prix Nobel d\'économie Amartya Sen (Un nouveau modèle économique : Développement et liberté) redéfinit le développement : il ne se mesure pas seulement au Produit Intérieur Brut (PIB), mais à l\'élargissement des libertés réelles et des capabilités (ce que les personnes peuvent effectivement faire et être).',
      hint: 'Une croissance économique sans éducation ni santé ne constitue pas un véritable développement humain.',
      prompt: 'Comment le philosophe et économiste Amartya Sen définit-il un développement authentique ?',
      options: [
        'Comme un processus d’expansion des libertés réelles et des capabilités dont jouissent les individus',
        'Comme la simple accumulation exponentielle de richesses monétaires pour une élite',
        'Comme l’augmentation unilatérale de la production industrielle sans protection sociale',
        'Comme la suppression de toute liberté politique au profit de l’ordre'
      ],
      correctAnswer: 'Comme un processus d’expansion des libertés réelles et des capabilités dont jouissent les individus',
      explanation: 'Pour Amartya Sen, la liberté est à la fois le moyen et la fin suprême du développement. La richesse financière n\'est qu\'un instrument : le vrai développement consiste à donner à chaque citoyen les capacités concrètes d\'échapper à la pauvreté, d\'avoir accès aux soins, à l\'éducation et d\'exercer ses droits.',
      steps: [
        '1. Dépasser l\'approche purement comptable du PIB.',
        '2. Définir le concept de « capabilité » : libertés effectives d\'accomplir des projets de vie valorisés.',
        '3. Le développement est le partage et l\'expansion des libertés substantielles.'
      ]
    }
  ],

  'skill-tphilo-religion-croyance': [
    {
      id: 'q-tphilo-relig-1',
      exerciseId: 'ex-tphilo-relig',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Religion : L’Opium du Peuple selon Karl Marx',
      microConcept: 'Dans la Critique de la philosophie du droit de Hegel, Karl Marx écrit : « La détresse religieuse est, pour une part, l’expression de la détresse réelle et, pour une autre part, la protestation contre la détresse réelle. La religion est le soupir de la créature accablée [...]. Elle est l’opium du peuple ».',
      hint: 'L\'opium calme la douleur mais ne guérit pas la maladie réelle de l\'oppression économique.',
      prompt: 'Que dénonce précisément Karl Marx lorsqu’il compare la religion à un « opium du peuple » ?',
      options: [
        'Une consolation illusoire qui anesthésie la révolte des opprimés en leur promettant un bonheur compensatoire dans l’au-delà',
        'Le fait que les croyants consomment des substances illicites lors des offices religieux',
        'Une force révolutionnaire destinée à renverser le capitalisme',
        'Une théorie scientifique démontrant l’origine biologique de l’univers'
      ],
      correctAnswer: 'Une consolation illusoire qui anesthésie la révolte des opprimés en leur promettant un bonheur compensatoire dans l’au-delà',
      explanation: 'Pour Marx, la religion est une production imaginaire sécrétée par un monde économique injuste. Comme un narcotique (opium), elle adoucit la souffrance quotidienne du prolétariat par l’espérance d’un paradis céleste, l’empêchant ainsi de prendre conscience de son exploitation et de transformer la société terrestre.',
      steps: [
        '1. Analyser la fonction médicale et métaphorique de l\'opium : analgésique et sédatif.',
        '2. Lier la critique religieuse à la critique de l\'aliénation socio-économique.',
        '3. Conclure : la religion détourne l\'homme de l\'action révolutionnaire terrestre.'
      ]
    }
  ],

  // --- Bloc 3 : La Connaissance, la Raison et le Réel ---
  'skill-tphilo-verite-raison': [
    {
      id: 'q-tphilo-ver-1',
      exerciseId: 'ex-tphilo-ver',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Vérité : La Définition Classique d’Aristote (Vérité-Correspondance)',
      microConcept: 'Selon la formule d\'Aristote reprise par saint Thomas d\'Aquin (« veritas est adaequatio rei et intellectus »), la vérité est l\'accord ou la conformité de la pensée et du discours avec la réalité des choses : dire de ce qui est qu\'il est, ou de ce qui n\'est pas qu\'il n\'est pas, c\'est dire le vrai.',
      hint: 'Une proposition est vraie si ce qu\'elle énonce correspond aux faits observables dans le réel.',
      prompt: 'Selon la conception aristotélicienne classique, à quelle condition une proposition est-elle dite « vraie » ?',
      options: [
        'Lorsqu’il y a adéquation parfaite entre le jugement de l’esprit et la réalité extérieure des faits',
        'Lorsque la majorité de la population vote pour cette proposition',
        'Lorsque la phrase est grammaticalement élégante sans faute d’orthographe',
        'Lorsque l’affirmation procure un plaisir émotionnel immédiat'
      ],
      correctAnswer: 'Lorsqu’il y a adéquation parfaite entre le jugement de l’esprit et la réalité extérieure des faits',
      explanation: 'La vérité comme adéquation (théorie de la correspondance) pose que la vérité n’est ni une simple croyance, ni une convention sociale : elle réside dans la conformité stricte entre ce que notre esprit affirme et ce qui existe réellement dans les faits.',
      steps: [
        '1. Revenir à la définition classique d\'Aristote (Métaphysique, livre Gamma).',
        '2. Écarter les critères pragmatiques, esthétiques ou d\'opinion majoritaire.',
        '3. Conclure sur la formule de l\'adéquation entre l\'intellect et la chose.'
      ]
    },
    {
      id: 'q-tphilo-ver-2',
      exerciseId: 'ex-tphilo-ver',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Raison : La Devise des Lumières selon Kant',
      microConcept: 'Dans son opuscule « Qu\'est-ce que les Lumières ? » (1784), Kant définit les Lumières comme la sortie de l\'homme de son état de minorité intellectuelle dont il est lui-même responsable. La devise des Lumières est : « Sapere aude ! Aie le courage de te servir de ton propre entendement ! »',
      hint: 'La paresse et la lâcheté sont les causes qui font qu\'un si grand nombre d\'hommes restent sous tutelle.',
      prompt: 'Quelle est la devise émancipatrice du siècle des Lumières formulée par Emmanuel Kant ?',
      options: [
        '« Sapere aude ! » (Ose savoir ! Aie le courage de te servir de ton propre entendement !)',
        '« Obéis sans jamais te poser de questions »',
        '« Laisse les maîtres penser à ta place »',
        '« Rien n’est vrai, tout est permis »'
      ],
      correctAnswer: '« Sapere aude ! » (Ose savoir ! Aie le courage de te servir de ton propre entendement !)',
      explanation: 'Pour Kant, la minorité est l\'incapacité de se servir de son entendement sans la direction d\'un autre. Les Lumières n\'exigent qu\'une seule chose : la liberté de faire un usage public de sa raison dans tous les domaines, guidé par le courage de penser par soi-même.',
      steps: [
        '1. Identifier le texte fondateur de Kant : Qu\'est-ce que les Lumières ? (1784).',
        '2. Repérer l\'impératif latin emprunté à Horace : Sapere aude.',
        '3. Déduire le sens philosophique : émancipation par la pensée autonome et rationnelle.'
      ]
    }
  ],

  'skill-tphilo-science-experience': [
    {
      id: 'q-tphilo-sci-1',
      exerciseId: 'ex-tphilo-sci',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Science : L’Origine Empirique des Connaissances selon Locke',
      microConcept: 'L\'empirisme de John Locke (Essai sur l\'entendement humain) rejette la théorie des idées innées de Descartes. L\'esprit à la naissance est une « tabula rasa » (feuille blanche, cire vierge). Toutes nos idées proviennent exclusivement de deux sources : la sensation (expérience externe) et la réflexion (expérience interne).',
      hint: '« Rien n\'est dans l\'entendement qui n\'ait d\'abord été dans les sens » (adage empiriste).',
      prompt: 'Selon l’empirisme de John Locke, d’où proviennent toutes nos connaissances et idées sans exception ?',
      options: [
        'Exclusivement de l’expérience sensible et des perceptions reçues par les sens',
        'D’idées innées déposées par Dieu dans notre âme dès la naissance',
        'De révélations mystiques incontrôlables',
        'D’un savoir universel inscrit génétiquement'
      ],
      correctAnswer: 'Exclusivement de l’expérience sensible et des perceptions reçues par les sens',
      explanation: 'Locke soutient que l\'esprit humain naît vierge de toute idée (table rase). C\'est par le contact sensoriel avec le monde extérieur (la vue, le toucher, etc.) et la réflexion sur nos opérations mentales que l\'esprit compose progressivement tous ses concepts, même les plus abstraits.',
      steps: [
        '1. Identifier le courant philosophique de Locke : l\'empirisme.',
        '2. Rejeter la doctrine rationaliste cartésienne des idées innées.',
        '3. Conclure : l\'expérience sensible est le fondement unique de toute connaissance.'
      ]
    }
  ],

  'skill-tphilo-langage-pensee': [
    {
      id: 'q-tphilo-lang-1',
      exerciseId: 'ex-tphilo-lang',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Langage : Les Limites du Monde selon Wittgenstein',
      microConcept: 'Dans le Tractatus Logico-Philosophicus, Ludwig Wittgenstein écrit : « Les frontières de mon langage sont les frontières de mon monde ». Le langage n\'est pas un simple costume extérieur de la pensée : il structure et délimite ce qui peut être pensé et formulé avec sens.',
      hint: 'Ce dont on ne peut parler, il faut le taire.',
      prompt: 'Quelle thèse centrale Ludwig Wittgenstein défend-il à propos du langage dans le Tractatus logico-philosophicus ?',
      options: [
        'Les limites de notre langage déterminent rigoureusement les limites de ce que nous pouvons concevoir et penser du monde',
        'Le langage est inutile car nous pensons exclusivement en images muettes',
        'Chaque mot a été inventé au hasard sans aucune structure logique',
        'Les animaux disposent d’un langage philosophique supérieur au nôtre'
      ],
      correctAnswer: 'Les limites de notre langage déterminent rigoureusement les limites de ce que nous pouvons concevoir et penser du monde',
      explanation: 'Pour Wittgenstein, la structure logique du langage reflète la structure du monde. Les propositions douées de sens décrivent des états de choses possibles. Là où le langage s\'arrête ou devient confus, la pensée perd sa capacité de formuler des vérités testables.',
      steps: [
        '1. Situer la citation phare du Tractatus : proposition 5.6.',
        '2. Comprendre l\'imbrication de la pensée et de la forme linguistique.',
        '3. Ce qui ne peut être dit clairement relève du non-sens ou du mystique indicible.'
      ]
    }
  ],

  'skill-tphilo-nature-environnement': [
    {
      id: 'q-tphilo-nat-1',
      exerciseId: 'ex-tphilo-nat',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Nature : Maîtres et Possesseurs de la Nature chez Descartes',
      microConcept: 'Dans la 6e partie du Discours de la méthode, René Descartes propose de remplacer la philosophie spéculative des écoles par une philosophie pratique. En connaissant les forces et les actions du feu, de l\'eau, de l\'air et des astres, nous pouvons nous rendre « comme maîtres et possesseurs de la nature » pour le bien-être humain et la santé.',
      hint: 'Descartes utilise la précaution « comme maîtres » pour rappeler que Dieu seul est le maître absolu.',
      prompt: 'Quel est l’objectif pratique poursuivi par René Descartes lorsqu’il exhorte l’homme à se rendre « comme maître et possesseur de la nature » ?',
      options: [
        'Mettre la science et la technique au service de l’amélioration de la vie humaine, du confort matériel et de la médecine',
        'Détruire aveuglément tous les écosystèmes vivants sans discernement',
        'Soumettre tous les peuples par la force militaire',
        'Interdire l’usage de toute machine industrielle'
      ],
      correctAnswer: 'Mettre la science et la technique au service de l’amélioration de la vie humaine, du confort matériel et de la médecine',
      explanation: 'Descartes envisage la domination de la nature non pas comme un saccage destructeur, mais comme une émancipation humaine par la physique et la médecine, permettant d’alléger les travaux pénibles et de préserver la santé, qui est le premier des biens de cette vie.',
      steps: [
        '1. Lire le contexte du Discours de la méthode (1637).',
        '2. Noter la finalité humaniste : jouir des fruits de la terre et conserver la santé.',
        '3. Souligner la nuance « comme maîtres » (l\'homme n\'est pas un tyran démiurge).'
      ]
    }
  ],

  'skill-tphilo-art-beaute': [
    {
      id: 'q-tphilo-art-1',
      exerciseId: 'ex-tphilo-art',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Art : Rendre Visible selon Paul Klee',
      microConcept: 'Le peintre et théoricien de l\'art Paul Klee écrit dans sa Théorie de l\'art moderne : « L’art ne reproduit pas le visible ; il rend visible ». L\'art n\'a pas pour mission d\'imiter servilement la réalité extérieure, mais de dévoiler des forces invisibles (émotions, rythmes, structures intérieures de l\'être).',
      hint: 'L\'artiste ne fait pas une simple photocopie de la nature, il fait voir ce que notre regard ordinaire ne percevait pas.',
      prompt: 'Que veut signifier Paul Klee par sa célèbre formule : « L’art ne reproduit pas le visible ; il rend visible » ?',
      options: [
        'L’art n’est pas une simple copie photographique du monde, mais la révélation de dimensions profondes et invisibles de la réalité',
        'L’art sert uniquement à peindre des tableaux avec des couleurs fluorescentes dans le noir',
        'Les artistes doivent toujours imiter parfaitement la nature à l’identique',
        'L’art s’adresse exclusivement aux personnes malvoyantes'
      ],
      correctAnswer: 'L’art n’est pas une simple copie photographique du monde, mais la révélation de dimensions profondes et invisibles de la réalité',
      explanation: 'Pour Paul Klee, si l’art se contentait de dupliquer les apparences visibles, il serait superflu. La puissance de la création artistique est d’inventer des formes, des couleurs et des symboles qui rendent manifestes des réalités spirituelles, affectives et métaphysiques jusqu’alors cachées.',
      steps: [
        '1. Comprendre la distinction entre « reproduire le visible » (mimésis passive) et « rendre visible » (création révélatrice).',
        '2. Lier la citation au rejet du réalisme naïf dans l\'art moderne.',
        '3. L\'art ouvre notre perception à une vérité plus haute.'
      ]
    }
  ],

  // =========================================================================================
  // QUESTIONS DU PROGRAMME ANNUEL SUR 9 MOIS (ENSEIGNEMENT SECONDAIRE GABONAIS)
  // =========================================================================================
  'skill-philo-m1-mythe-philosophie': [
    {
      id: 'q-philo-m1-1',
      exerciseId: 'ex-philo-m1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Mois 1 : Genèse du Logos face au Mythos',
      microConcept: 'La naissance de la philosophie est traditionnellement comprise comme le passage du Mythos (récit imaginaire, cosmogonie poétique et autorité religieuse incontestable) au Logos (discours rationnel fondé sur la démonstration, la preuve et le débat critique argumenté).',
      hint: 'Pensez à la racine grecque « logos » qui a donné le mot logique.',
      prompt: 'Dans la genèse de la philosophie, en quoi consiste fondamentalement le passage du « Mythos » au « Logos » ?',
      options: [
        'Le passage d’un récit imaginaire fondé sur la croyance et les dieux à un discours rationnel fondé sur la démonstration et la critique',
        'L’abandon pur et simple de l’écriture au profit des récits oraux',
        'L’interdiction de toute pratique religieuse dans les cités antiques',
        'La substitution des poètes par des prêtres dans l’administration politique'
      ],
      correctAnswer: 'Le passage d’un récit imaginaire fondé sur la croyance et les dieux à un discours rationnel fondé sur la démonstration et la critique',
      explanation: 'Le mythe impose une explication sacrée et immuable des phénomènes (ex. la foudre expliquée par la colère de Zeus). La philosophie avec le Logos exige une explication immanente et rationnelle, ouverte à la contradiction et au doute méthodique.',
      steps: [
        '1. Définir Mythos : parole sacrée, fable, récit imaginaire des origines.',
        '2. Définir Logos : raison, discours argumenté, exigence de démonstration.',
        '3. Conclure sur la rupture épistémologique inaugurale de la philosophie.'
      ]
    },
    {
      id: 'q-philo-m1-2',
      exerciseId: 'ex-philo-m1',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Mois 1 : Débat sur la Philosophie Africaine (Marcien Towa)',
      microConcept: 'Dans son célèbre Essai sur la problématique philosophique dans l\'Afrique actuelle (1971), le philosophe camerounais Marcien Towa critique l\'ethnophilosophie (qui confond vision du monde coutumière et philosophie rigoureuse). Il affirme que philosopher exige un esprit d\'examen critique radical, y compris à l\'égard de ses propres traditions ancestrales.',
      hint: 'La philosophie pour Towa n\'est pas un musée des croyances passées, mais une méthode d\'émancipation rationnelle.',
      prompt: 'Selon Marcien Towa (*Essai sur la problématique philosophique dans l’Afrique actuelle*), quelle est la condition indispensable pour qu’une pensée soit véritablement philosophique ?',
      options: [
        'La rupture avec la vénération aveugle des coutumes et l’exercice d’une critique rationnelle sans complaisance',
        'La récitation scrupuleuse des mythes et contes traditionnels sans les modifier',
        'L’adoption inconditionnelle de toutes les doctrines occidentales sans inventivité',
        'La fusion mystique avec les forces secrètes de la nature'
      ],
      correctAnswer: 'La rupture avec la vénération aveugle des coutumes et l’exercice d’une critique rationnelle sans complaisance',
      explanation: 'Pour Marcien Towa, l’ethnophilosophie fige la pensée africaine dans un folklore rassurant. La vraie philosophie est par essence subversive et critique : elle questionne l’autorité de la tradition pour conquérir la liberté et la maîtrise scientifique.',
      steps: [
        '1. Rappeler la critique de l’ethnophilosophie par Towa et Paulin Hountondji.',
        '2. Insister sur la dimension critique et universelle du projet philosophique.',
        '3. La philosophie requiert l’esprit de libre examen rationnel.'
      ]
    }
  ],

  'skill-philo-m1-methode-sujet-question': [
    {
      id: 'q-philo-m1-meth-1',
      exerciseId: 'ex-philo-m1-meth',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Méthodologie Mois 1 : Présupposé d’un Sujet Question',
      microConcept: 'Tout sujet question renferme un ou plusieurs présupposés, c\'est-à-dire des postulats implicites qu\'il faut d\'abord identifier et interroger avant de construire son plan dialectique.',
      hint: 'Considérez la question : « Peut-on renoncer à sa liberté ? ». Elle présuppose que l\'homme possède d\'abord une liberté.',
      prompt: 'Dans le sujet de dissertation : « La vérité peut-elle être dangereuse ? », quel est le présupposé implicite majeur ?',
      options: [
        'Il présuppose que la vérité est habituellement considérée comme une valeur positive et bénéfique',
        'Il présuppose qu’il est interdit de dire la vérité devant un tribunal',
        'Il présuppose que le mensonge est toujours puni par la loi',
        'Il présuppose que la science n’a jamais découvert de vérité'
      ],
      correctAnswer: 'Il présuppose que la vérité est habituellement considérée comme une valeur positive et bénéfique',
      explanation: 'Le sujet prend tout son sel philosophique précisément parce que l’opinion commune valorise spontanément la vérité comme un bien moral souverain. Demander si elle peut être « dangereuse », c’est mettre en crise cette évidence première.',
      steps: [
        '1. Analyser les termes clés : « vérité » (valeur de clarté) vs « dangereuse » (menace, préjudice).',
        '2. Dégager la tension paradoxale : pourquoi poser la question si la vérité allait de soi comme bienfait ?',
        '3. Le présupposé est l’affirmation implicite de la valeur positive de la vérité.'
      ]
    }
  ],

  'skill-philo-m2-savoir-opinion-sorcellerie': [
    {
      id: 'q-philo-m2-1',
      exerciseId: 'ex-philo-m2',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Mois 2 : Doxa vs Épistémè et Causalité Magique',
      microConcept: 'La pensée magico-religieuse ou sorcière explique souvent les malheurs par une causalité personnalisée et intentionnelle (« qui m\'a envoyé cette maladie ? »), tandis que la causalité scientifique s\'appuie sur des lois physiques objectives, mesurables et universelles (« quel microbe ou quelle défaillance biologique cause ce symptôme ? »).',
      hint: 'La science recherche le « comment » matériel et reproductible, là où la pensée magique cherche un « qui » mystique.',
      prompt: 'Dans l’analyse philosophique des croyances relatives à la sorcellerie et à la magie, quelle différence fondamentale oppose la causalité magique à la causalité scientifique ?',
      options: [
        'La causalité magique attribue l’événement à une intention occulte personnalisée, tandis que la science recherche des lois naturelles objectives et impersonnelles',
        'La causalité magique s’appuie toujours sur des microscopes et des équations mathématiques',
        'La science nie totalement l’existence du monde matériel',
        'Il n’existe aucune différence, la magie et la physique moderne emploient exactement la même méthode'
      ],
      correctAnswer: 'La causalité magique attribue l’événement à une intention occulte personnalisée, tandis que la science recherche des lois naturelles objectives et impersonnelles',
      explanation: 'Comme l’a montré l’anthropologue Evans-Pritchard et le philosophe Kwasi Wiredu, si un arbre s’effondre, la science explique que les termites ont rongé le tronc (loi naturelle), alors que la pensée sorcière cherche qui a guidé la chute de l’arbre sur une personne précise (intention invisible).',
      steps: [
        '1. Identifier la nature de l’explication sorcière : finaliste, morale, intentionnelle.',
        '2. Identifier la nature de l’explication scientifique : déterministe, matérielle, vérifiable.',
        '3. Conclure sur la divergence de mode de causalité.'
      ]
    },
    {
      id: 'q-philo-m2-2',
      exerciseId: 'ex-philo-m2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Mois 2 : L’Allégorie de la Caverne de Platon (Opinion vs Savoir)',
      microConcept: 'Dans la République (Livre VII), Platon utilise l\'allégorie de la caverne pour figurer la condition humaine : les prisonniers enchaînés prennent les ombres projetées sur la paroi pour la réalité suprême (la Doxa / l\'opinion). L\'accès au Savoir authentique (Épistémè) exige une douloureuse conversion du regard vers la lumière du Bien.',
      hint: 'Les ombres ne sont que de pâles reflets trompeurs de la vérité.',
      prompt: 'Dans l’allégorie de la caverne de Platon, que représentent les ombres aperçues par les prisonniers ?',
      options: [
        'Les illusions sensibles, les préjugés et les opinions non examinées (la Doxa)',
        'Les vérités mathématiques et les lois astronomiques parfaites',
        'Le monde des Idées et de la vérité absolue',
        'Les idées innées déposées par Dieu dans l’âme humaine'
      ],
      correctAnswer: 'Les illusions sensibles, les préjugés et les opinions non examinées (la Doxa)',
      explanation: 'Les ombres symbolisent le niveau le plus bas de la connaissance : l’illusion empirique et la croyance passive aux apparences. La philosophie est le mouvement d’émancipation qui brise les chaînes pour sortir de la caverne vers la vérité intelligible.',
      steps: [
        '1. Se remémorer la caverne platonicienne : obscurité, chaînes, mur, feu et ombres.',
        '2. Associer les ombres aux opinions reçues sans examen critique.',
        '3. Les ombres symbolisent la doxa et les préjugés sensibles.'
      ]
    }
  ],

  'skill-philo-m3-etude-oeuvre-integrale': [
    {
      id: 'q-philo-m3-1',
      exerciseId: 'ex-philo-m3',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Mois 3 : Méthode d’Étude Intégrale d’une Œuvre Philosophique',
      microConcept: 'L\'étude intégrale d\'une œuvre au programme officiel gabonais (ex. Discours de la méthode de Descartes, L\'Apologie de Socrate de Platon ou De l\'inégalité de Rousseau) n\'est ni un simple résumé chapitre par chapitre ni une fiche biographique. Elle vise à dégager l\'architecture argumentative globale, la querelle doctrinale et le problème philosophique central résolu par l\'auteur.',
      hint: 'Une œuvre philosophique forme un système logique où chaque partie répond à une démonstration globale.',
      prompt: 'Lors d’un contrôle de lecture sur une œuvre philosophique étudiée intégralement, qu’attend en priorité l’examinateur ?',
      options: [
        'La compréhension de la démonstration globale de l’auteur, de sa problématique centrale et de la définition rigoureuse de ses concepts',
        'Une biographie romancée et anecdotique de la vie sentimentale de l’auteur',
        'La récitation par cœur de l’ouvrage du début à la fin sans analyse',
        'Le décompte précis du nombre de mots de chaque paragraphe'
      ],
      correctAnswer: 'La compréhension de la démonstration globale de l’auteur, de sa problématique centrale et de la définition rigoureuse de ses concepts',
      explanation: 'L’étude intégrale vise à enseigner à l’élève la rigueur de la pensée longue et construite. Il s’agit de savoir restituer l’itinéraire démonstratif qui conduit l’auteur de la position d’un problème à sa résolution argumentée.',
      steps: [
        '1. Dépasser l’anecdote biographique secondaire.',
        '2. Mettre au premier plan la thèse directrice, les définitions et la structure logique du raisonnement.',
        '3. L’objectif est la maîtrise de la démonstration philosophique globale.'
      ]
    }
  ],

  'skill-philo-m4-etre-pensee-homme': [
    {
      id: 'q-philo-m4-1',
      exerciseId: 'ex-philo-m4',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Mois 4 : Dualisme Cartésien (Âme vs Corps)',
      microConcept: 'Descartes soutient un dualisme des substances : la substance pensante (res cogitans, immatérielle et indivisible : l\'âme) et la substance étendue (res extensa, matérielle, divisible et mécanique : le corps). Le corps humain fonctionne selon les lois de la physique comme un automate mécanique animé.',
      hint: 'Descartes distingue radicalement ce qui pense de ce qui occupe un espace physique.',
      prompt: 'Dans la philosophie de René Descartes (*Méditations Métaphysiques*), quelle relation existe-t-il entre l’âme et le corps ?',
      options: [
        'Ce sont deux substances de natures radicalement distinctes : la pensée (immatérielle) et l’étendue (matérielle)',
        'L’âme et le corps sont absolument identiques et composés uniquement d’atomes matériels',
        'Le corps n’existe pas et n’est qu’une hallucination permanente',
        'L’âme humaine est simplement une glande mécanique sans conscience'
      ],
      correctAnswer: 'Ce sont deux substances de natures radicalement distinctes : la pensée (immatérielle) et l’étendue (matérielle)',
      explanation: 'C’est le « dualisme des substances ». Pour Descartes, l’âme peut exister sans le corps car son essence est de penser, tandis que le corps obéit aux lois de l’étendue géométrique et de la mécanique. Leur union mystérieuse s’éprouve cependant dans la vie quotidienne.',
      steps: [
        '1. Définir la substance pensante (res cogitans).',
        '2. Définir la substance étendue (res extensa).',
        '3. Conclure sur la distinction fondamentale posée par le dualisme cartésien.'
      ]
    },
    {
      id: 'q-philo-m4-2',
      exerciseId: 'ex-philo-m4',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Mois 4 : Spécificité Humaine – Nature et Culture',
      microConcept: 'Contrairement à l\'animal guidé par un instinct héréditaire immuable, l\'homme est un être de culture et de perfectibilité (Rousseau). Par le langage, la technique, l\'institution des lois et la mémoire historique, l\'homme transforme sa nature première.',
      hint: 'L\'animal ne modifie pas sa manière d\'être d\'un siècle à l\'autre, l\'homme a une histoire.',
      prompt: 'Selon Jean-Jacques Rousseau dans le *Discours sur l’origine de l’inégalité*, quelle faculté distingue l’homme de l’animal dès l’origine ?',
      options: [
        'La perfectibilité, c’est-à-dire la faculté indéterminée d’apprendre, d’évoluer et de se transformer au cours du temps',
        'La force physique brute supérieure à celle de tous les fauves',
        'L’obligation biologique de vivre sous terre',
        'L’absence totale de désirs et de passions'
      ],
      correctAnswer: 'La perfectibilité, c’est-à-dire la faculté indéterminée d’apprendre, d’évoluer et de se transformer au cours du temps',
      explanation: 'Pour Rousseau, l’animal est déterminé par son programme instinctif fixé par la nature. L’homme est « perfectible », ce qui fait sa grandeur (il invente la culture, les arts, la justice) mais aussi sa vulnérabilité (il peut se dépraver, inventer la tyrannie et le vice).',
      steps: [
        '1. Noter l’opposition instinct animal vs liberté humaine.',
        '2. Définir la notion rousseauiste de « perfectibilité » : plasticité et capacité d’apprentissage.',
        '3. La perfectibilité est le principe différenciateur fondamental.'
      ]
    }
  ],

  'skill-philo-m4-methode-sujet-citation': [
    {
      id: 'q-philo-m4-meth-1',
      exerciseId: 'ex-philo-m4-meth',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Méthodologie Mois 4 : Règle d’Or du Sujet Citation',
      microConcept: 'Dans une dissertation sur sujet citation, l\'élève ne doit ni encenser aveuglément l\'auteur ni le rejeter avec dédain. La règle impérative est d\'abord d\'expliquer et de justifier la thèse de l\'auteur dans toute sa force persuasive (Partie 1), avant d\'en éprouver les limites et d\'en apporter une réfutation nuancée (Partie 2).',
      hint: 'On ne peut critiquer sérieusement une thèse que si on a d\'abord montré pourquoi elle semblait vraie et solide.',
      prompt: 'Lorsque le sujet de dissertation commence par une citation d’auteur : « L’homme est naturellement bon, c’est la société qui le corrompt » (Rousseau), que doit obligatoirement faire l’élève en première partie du développement ?',
      options: [
        'Élucider la thèse de l’auteur et déployer les arguments rationnels qui justifient la validité de sa pensée',
        'Insulter l’auteur en affirmant qu’il a complètement tort dès les premières lignes',
        'Recopier la biographie de Jean-Jacques Rousseau sans parler de la citation',
        'Écrire un poème sur la bonté de la nature'
      ],
      correctAnswer: 'Élucider la thèse de l’auteur et déployer les arguments rationnels qui justifient la validité de sa pensée',
      explanation: 'Un grand penseur n’écrit pas au hasard. L’honnêteté intellectuelle et la méthode philosophique imposent d’entrer dans la rationalité de l’auteur, d’expliquer ses arguments et de montrer ce qu’il a voulu dire, avant de pouvoir, dans une seconde partie, formuler des objections rigoureuses.',
      steps: [
        '1. Respecter la règle du sujet citation : fidélité doctrinale préalable.',
        '2. Partie 1 = Justification argumentée de la formule.',
        '3. Partie 2 = Discussion des limites et nuances.',
        '4. Partie 3 = Dépassement synthétique.'
      ]
    }
  ],

  'skill-philo-m5-monde-valeurs-conscience-bien': [
    {
      id: 'q-philo-m5-1',
      exerciseId: 'ex-philo-m5',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Mois 5 : L’Impératif Catégorique Kantien (Le Bien Moral)',
      microConcept: 'Dans les Fondements de la métaphysique des mœurs, Kant distingue l\'impératif hypothétique (« Si tu veux ceci, fais cela » par intérêt personnel) et l\'impératif catégorique (« Agis uniquement d\'après la maxime qui fait que tu peux vouloir en même temps qu\'elle devienne une loi universelle »). Le Bien moral exige d\'agir par devoir pur et de considérer toujours autrui comme une fin en soi, jamais comme un simple moyen.',
      hint: 'Une action n\'est morale pour Kant que si sa règle peut être universalisée sans contradiction.',
      prompt: 'Selon Emmanuel Kant, à quelle condition une action humaine possède-t-elle une valeur morale authentique (le Bien) ?',
      options: [
        'Quand elle est accomplie par pur devoir, de manière désintéressée et universalisable, en respectant autrui comme une fin en soi',
        'Quand elle rapporte une importante somme d’argent à son auteur',
        'Quand elle permet d’obtenir les éloges et les félicitations de ses voisins',
        'Quand elle évite simplement une sanction de la police'
      ],
      correctAnswer: 'Quand elle est accomplie par pur devoir, de manière désintéressée et universalisable, en respectant autrui comme une fin en soi',
      explanation: 'Pour Kant, la moralité ne dépend pas des conséquences heureuses d’une action, mais de la pureté de l’intention. Agir moralement, c’est obéir à la loi rationnelle universelle sans calcul égoïste ni recherche d’intérêt personnel.',
      steps: [
        '1. Écarter les mobiles utilitaristes (gloire, argent, peur du gendarme).',
        '2. Définir le devoir déontologique kantien : impératif catégorique.',
        '3. Le bien réside dans le respect inconditionnel de la loi morale universelle.'
      ]
    },
    {
      id: 'q-philo-m5-2',
      exerciseId: 'ex-philo-m5',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Mois 5 : La Maîtrise des Désirs selon Épicure',
      microConcept: 'Pour le philosophe Épicure (Lettre à Ménécée), le bonheur (ataraxie, tranquillité de l\'âme) s\'obtient par une classification rigoureuse des désirs : les désirs naturels et nécessaires (manger frugalement, boire de l\'eau, l\'amitié), les naturels non nécessaires (nourriture gastronomique), et les vains et sans limite (gloire, richesse, immortalité) qui sont la source majeure des angoisses humaines.',
      hint: 'Épicure ne prône pas la débauche, mais l\'ascèse joyeuse des plaisirs simples.',
      prompt: 'Dans la philosophie d’Épicure, quels désirs faut-il impérativement éliminer pour atteindre la paix de l’âme (ataraxie) ?',
      options: [
        'Les désirs vains et non naturels comme la soif de pouvoir, de gloire et de richesses infinies',
        'Le désir élémentaire de boire quand on a soif',
        'Le désir d’avoir des amis sincères',
        'Le besoin de dormir et de se reposer'
      ],
      correctAnswer: 'Les désirs vains et non naturels comme la soif de pouvoir, de gloire et de richesses infinies',
      explanation: 'Épicure montre que les désirs de gloire, d’honneurs et d’argent sont insatiables : plus on en a, plus on en veut, ce qui engendre l’anxiété et le tourment permanent. Seuls les désirs naturels et nécessaires peuvent être aisément comblés.',
      steps: [
        '1. Se rappeler la typologie épicurienne des plaisirs et désirs.',
        '2. Identifier les désirs insatiables et toxiques : richesse, pouvoir, célébrité.',
        '3. Les désirs vains doivent être bannis pour préserver l’ataraxie.'
      ]
    }
  ],

  'skill-philo-m5-methode-sujet-texte': [
    {
      id: 'q-philo-m5-meth-1',
      exerciseId: 'ex-philo-m5-meth',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Méthodologie Mois 5 : Les Quatre Invariants de l’Introduction de Texte',
      microConcept: 'L\'introduction d\'un commentaire de texte philosophique (Sujet Texte) au Baccalauréat gabonais doit impérativement énoncer 4 éléments indispensables : le Thème (le domaine conceptuel général), la Thèse de l\'auteur (la position spécifique qu\'il défend), le Problème philosophique (la difficulté ou l\'alternative contradictoire), et les Mouvements logiques du texte (l\'articulation des parties du raisonnement).',
      hint: 'Ne jamais confondre le Thème (de quoi parle-t-on ?) et la Thèse (qu\'affirme l\'auteur ?).',
      prompt: 'Quelle est la différence méthodologique fondamentale entre le « Thème » et la « Thèse » d’un texte philosophique ?',
      options: [
        'Le thème est le sujet général abordé par le texte (ex. la justice), tandis que la thèse est l’affirmation précise et soutenue par l’auteur à propos de ce sujet (ex. la justice sans la force est impuissante)',
        'Le thème est écrit en latin alors que la thèse est rédigée en français',
        'Le thème est l’avis du correcteur, alors que la thèse est l’avis de l’élève',
        'Le thème correspond uniquement aux trois premières lignes du texte'
      ],
      correctAnswer: 'Le thème est le sujet général abordé par le texte (ex. la justice), tandis que la thèse est l’affirmation précise et soutenue par l’auteur à propos de ce sujet (ex. la justice sans la force est impuissante)',
      explanation: 'Le thème pose le cadre général du débat (de quoi parle-t-on ?). La thèse est la réponse propre et singulière apportée par le philosophe (que prouve-t-il concrètement ?). Confondre les deux expose à une analyse floue et superficielle.',
      steps: [
        '1. Définir le Thème : l’objet de réflexion (ex. la liberté, l’État, le travail).',
        '2. Définir la Thèse : le jugement défendu avec arguments par l’auteur.',
        '3. Distinguer précisément l’objet du débat et la doctrine défendue.'
      ]
    }
  ],

  'skill-philo-m6-sacre-coutume-dignite-pouvoir': [
    {
      id: 'q-philo-m6-1',
      exerciseId: 'ex-philo-m6',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Mois 6 : La Dignité Humaine selon Emmanuel Kant',
      microConcept: 'Dans la Métaphysique des mœurs, Kant formule la distinction cardinale : « Ce qui a un prix peut être remplacé par quelque chose d’autre à titre d’équivalent ; au contraire, ce qui est supérieur à tout prix, ce qui par suite n’admet pas d’équivalent, c’est ce qui a une dignité ». L\'être humain possède une dignité absolue et ne peut jamais être vendu, asservi ou utilisé comme un simple instrument.',
      hint: 'Une marchandise a un prix financier ; une personne a une valeur intrinsèque inestimable.',
      prompt: 'Selon Emmanuel Kant, quelle est la distinction fondamentale entre ce qui a un « prix » et ce qui a une « dignité » ?',
      options: [
        'Ce qui a un prix peut être échangé contre un équivalent matériel, tandis que ce qui a une dignité n’a pas d’équivalent et possède une valeur absolue inaliénable',
        'Ce qui a une dignité coûte deux fois plus cher sur le marché financier',
        'Le prix concerne uniquement les rois et la dignité concerne uniquement les animaux',
        'La dignité se mesure en lingots d’or'
      ],
      correctAnswer: 'Ce qui a un prix peut être échangé contre un équivalent matériel, tandis que ce qui a une dignité n’a pas d’équivalent et possède une valeur absolue inaliénable',
      explanation: 'Cette distinction fonde les Droits de l’Homme et l’abolition de l’esclavage. Les objets techniques et les marchandises ont un prix marchand ; la personne humaine, en tant que sujet moral conscient et libre, possède une dignité incommensurable qui interdit toute réification.',
      steps: [
        '1. Opposer valeur d’échange marchande (prix) et valeur morale intrinsèque (dignité).',
        '2. Reconnaître l’interdiction absolue de réduire l’humain à un moyen ou un outil.',
        '3. La dignité caractérise la personne morale humaine.'
      ]
    },
    {
      id: 'q-philo-m6-2',
      exerciseId: 'ex-philo-m6',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Mois 6 : Le Pouvoir Politique et la Séparation des Pouvoirs (Montesquieu)',
      microConcept: 'Dans De l\'esprit des lois (1748), Montesquieu constate que « tout homme qui a du pouvoir est porté à en abuser ; il va jusqu’à ce qu’il trouve des limites ». Pour préserver la liberté politique et empêcher la tyrannie, il est indispensable que « par la disposition des choses, le pouvoir arrête le pouvoir » via la séparation des pouvoirs législatif, exécutif et judiciaire.',
      hint: 'La concentration de tous les pouvoirs entre les mains d\'un seul individu définit le despotisme.',
      prompt: 'Quel principe institutionnel fondamental Montesquieu préconise-t-il dans *De l’esprit des lois* pour éviter que le pouvoir ne devienne tyrannique ?',
      options: [
        'La séparation et l’équilibre des pouvoirs (législatif, exécutif et judiciaire) afin que « le pouvoir arrête le pouvoir »',
        'La remise de tous les pouvoirs à un chef unique sans aucun contrôle',
        'La suppression définitive de toutes les lois et des tribunaux',
        'Le tirage au sort hebdomadaire du président de la République'
      ],
      correctAnswer: 'La séparation et l’équilibre des pouvoirs (législatif, exécutif et judiciaire) afin que « le pouvoir arrête le pouvoir »',
      explanation: 'Montesquieu démontre que la liberté des citoyens n’est garantie que si la puissance qui fait la loi (législative), celle qui l’exécute (exécutive) et celle qui juge les infractions (judiciaire) sont confiées à des organes distincts et indépendants.',
      steps: [
        '1. Rappeler le penchant universel de l’homme au pouvoir : tendance naturelle à l’abus.',
        '2. Poser la formule célèbre : « Pour qu’on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir ».',
        '3. Conclure sur la séparation des pouvoirs.'
      ]
    }
  ],

  'skill-philo-m7-connaissance-verite-science': [
    {
      id: 'q-philo-m7-1',
      exerciseId: 'ex-philo-m7',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Mois 7 : La Falsifiabilité de Karl Popper (Démarcation de la Science)',
      microConcept: 'Le philosophe des sciences Karl Popper (La Logique de la découverte scientifique) démontre qu\'aucune accumulation d\'observations favorables ne peut prouver définitivement une théorie universelle. En revanche, une seule observation contradictoire peut la réfuter (la falsifier). Le critère de scientificité d\'une théorie réside donc dans sa réfutabilité (elle doit pouvoir être soumise à des tests expérimentaux susceptibles de la contredire).',
      hint: 'Même si on observe des millions de cygnes blancs, cela ne prouve pas que tous les cygnes sont blancs ; un seul cygne noir suffit à réfuter la loi.',
      prompt: 'Selon Karl Popper, quel est le critère qui permet de distinguer une véritable théorie scientifique d’une pseudoscience (comme l’astrologie) ?',
      options: [
        'La réfutabilité (ou falsifiabilité) : la théorie doit formuler des prédictions précises qui peuvent être contredites par l’expérimentation',
        'Le fait que la théorie soit rédigée dans un langage incompréhensible pour le grand public',
        'L’affirmation dogmatique que la théorie est vraie pour toujours et sans aucune exception possible',
        'Le nombre de fidèles qui croient aveuglément en cette doctrine'
      ],
      correctAnswer: 'La réfutabilité (ou falsifiabilité) : la théorie doit formuler des prédictions précises qui peuvent être contredites par l’expérimentation',
      explanation: 'Une théorie qui ne peut jamais être mise en défaut, qui prétend tout expliquer a posteriori sans risquer d’être contredite (ex. les prédictions vagues des horoscopes), n’est pas scientifique. La science progresse par conjectures audacieuses et réfutations impitoyables.',
      steps: [
        '1. Comprendre l’asymétrie logique entre vérification impossible et réfutation possible.',
        '2. Identifier le critère de réfutabilité / falsifiabilité.',
        '3. La scientificité repose sur la mise à l’épreuve critique par l’expérience.'
      ]
    },
    {
      id: 'q-philo-m7-2',
      exerciseId: 'ex-philo-m7',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Mois 7 : La Rupture avec l’Opinion selon Gaston Bachelard',
      microConcept: 'Dans La Formation de l\'esprit scientifique (1938), Gaston Bachelard affirme sans détour : « L’opinion ne pense pas ; elle traduit des besoins en connaissances. En désignant les objets par leur utilité, elle s’interdit de les connaître. On ne peut rien fonder sur l’opinion : il faut d’abord la détruire. Elle est le premier obstacle à surmonter ».',
      hint: 'L\'esprit scientifique se constitue contre les évidences sensibles premières.',
      prompt: 'Pourquoi Gaston Bachelard écrit-il que « l’opinion ne pense pas » et qu’il faut d’abord la détruire pour accéder à la science ?',
      options: [
        'Parce que l’opinion juge les choses selon son utilité pratique immédiate et ses préjugés sensibles, au lieu de rechercher des relations rationnelles objectives',
        'Parce que Bachelard détestait la démocratie et voulait interdire aux citoyens d’exprimer leurs idées',
        'Parce que les scientifiques n’ont pas le droit de parler avec d’autres êtres humains',
        'Parce que tous les livres de philosophie devaient être brûlés selon lui'
      ],
      correctAnswer: 'Parce que l’opinion juge les choses selon son utilité pratique immédiate et ses préjugés sensibles, au lieu de rechercher des relations rationnelles objectives',
      explanation: 'L’esprit scientifique ne découvre pas des vérités par simple observation passive : il doit surmonter les « obstacles épistémologiques » formés par le bon sens commun et les intuitions immédiates pour construire des modèles théoriques abstraits vérifiables.',
      steps: [
        '1. Analyser la citation de Bachelard : « L’opinion traduit des besoins en connaissances ».',
        '2. Identifier la notion d’obstacle épistémologique.',
        '3. La science se construit en rupture avec le sens commun utilitaire.'
      ]
    }
  ],

  'skill-philo-m8-9-renforcement-bac': [
    {
      id: 'q-philo-m8-1',
      exerciseId: 'ex-philo-m8',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Mois 8 & 9 : Stratégie de Choix du Sujet au Baccalauréat',
      microConcept: 'Lors de l\'épreuve de Philosophie au Baccalauréat gabonais (durée : 4 heures), trois sujets sont proposés au choix : Sujet 1 (Question), Sujet 2 (Citation), Sujet 3 (Texte). L\'élève doit consacrer les 25 à 30 premières minutes à l\'examen minutieux des trois sujets, sans se précipiter sur un sujet par simple sympathie pour un auteur, mais en évaluant la richesse de ses arguments et la clarté de sa problématique.',
      hint: 'Le bon choix au Bac n\'est pas le sujet le plus court, mais celui dont vous maîtrisez les concepts et les écueils.',
      prompt: 'Dans la gestion stratégique des 4 heures de l’épreuve de Philosophie au Baccalauréat gabonais, quelle attitude l’élève doit-il adopter au début de l’épreuve ?',
      options: [
        'Consacrer 25 à 30 minutes à analyser les trois sujets au brouillon afin de choisir celui dont la problématique et les enjeux conceptuels sont les mieux maîtrisés',
        'Commencer à rédiger directement sur la copie définitive dès les 3 premières minutes pour gagner du temps',
        'Choisir systématiquement le texte pour recopier les phrases de l’auteur sans réfléchir',
        'Dormir les deux premières heures pour se détendre'
      ],
      correctAnswer: 'Consacrer 25 à 30 minutes à analyser les trois sujets au brouillon afin de choisir celui dont la problématique et les enjeux conceptuels sont les mieux maîtrisés',
      explanation: 'Le choix du sujet est un acte rationnel décisif. Prendre 30 minutes pour tester sur une feuille de brouillon les définitions des termes, les idées de thèses et les risques d’écueils de chaque sujet garantit un développement cohérent et évite les hors-sujets catastrophiques.',
      steps: [
        '1. Ne pas se précipiter sur le premier sujet venu.',
        '2. Évaluer sa capacité à formuler un paradoxe et un plan tripartite solide pour chacun des 3 sujets.',
        '3. Fixer son choix en toute lucidité après un test au brouillon.'
      ]
    },
    {
      id: 'q-philo-m8-2',
      exerciseId: 'ex-philo-m8',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Mois 8 & 9 : Distinction des Repères Conceptuels (Légal vs Légitime)',
      microConcept: 'Le repère conceptuel Légal / Légitime est cardinal dans les épreuves du Baccalauréat : ce qui est légal est conforme à la loi positive en vigueur dans un État donné à un moment précis (ex. les lois de l\'apartheid étaient légales en Afrique du Sud). Ce qui est légitime est conforme à la justice morale universelle et à la dignité humaine. Une loi peut donc être légale tout en étant profondément illégitime (exemple d\'Antigone face à Créon).',
      hint: 'La loi des hommes peut parfois violer la justice idéale.',
      prompt: 'Dans la dissertation philosophique, quelle distinction rigoureuse sépare le « légal » du « légitime » ?',
      options: [
        'Le légal est ce qui est conforme au droit positif en vigueur (la loi écrite), tandis que le légitime est ce qui est conforme à la justice morale et à la raison universelle',
        'Le légal concerne uniquement les entreprises et le légitime concerne uniquement la famille',
        'Ces deux termes sont des synonymes parfaits qui signifient exactement la même chose',
        'Le légitime est voté par le Parlement et le légal est décidé par les syndicats'
      ],
      correctAnswer: 'Le légal est ce qui est conforme au droit positif en vigueur (la loi écrite), tandis que le légitime est ce qui est conforme à la justice morale et à la raison universelle',
      explanation: 'Cette distinction permet de problématiser le devoir de désobéissance civile : lorsque les lois d’un tyran sont légales mais illégitimes, la conscience morale au nom de la dignité humaine justifie la résistance (Thoreau, Martin Luther King, Nelson Mandela).',
      steps: [
        '1. Définir le légal : conformité aux textes de loi établis (droit positif).',
        '2. Définir le légitime : conformité au juste en soi (droit naturel, justice morale).',
        '3. Identifier la possibilité d’une tension entre loi établie et justice idéale.'
      ]
    }
  ]
};

