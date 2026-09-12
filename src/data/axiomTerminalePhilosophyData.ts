import { SkillNode } from '../types';

// =========================================================================================
// PROGRAMME OFFICIEL DE PHILOSOPHIE – TERMINALE (GABON)
// Conforme au programme officiel des Terminales Littéraires (A) et Scientifiques (C, D)
// Tableau synthétique des 20 Notions + Méthodologie Baccalauréat (Dissertation & Commentaire)
// =========================================================================================

export const TERMINALE_PHILOSOPHIE_SKILLS: SkillNode[] = [
  // --- Méthodologie des Épreuves du Baccalauréat ---
  {
    id: 'skill-tphilo-methode-dissertation',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Méthodologie Sujet Type 1 : La Dissertation Philosophique',
    description: 'Structure tripartite rigoureuse : Introduction (amorce, définition des termes, problématisation, paradoxe, question directrice et annonce du plan), Développement (Thèse, Antithèse, Synthèse ou dépassement dialectique argumenté avec citations), et Conclusion (bilan rationnel, prise de position et ouverture).',
    difficulty: 4,
    prerequisiteIds: [],
    masteryScore: 82,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Méthodologie Baccalauréat',
    order: 1,
    topics: [
      'Analyse conceptuelle de l’intitulé : repérage des présupposés et des termes clés',
      'Introduction : Amorce, définition, problème philosophique (paradoxe) et annonce du plan',
      'Développement dialectique : Thèse (affirmation argumentée), Antithèse (objection) et Synthèse (dépassement)',
      'Intégration rigoureuse des citations d’auteurs comme arguments d’autorité et illustrations',
      'Conclusion : Réponse explicite et argumentée au problème initial sans contradiction'
    ]
  },
  {
    id: 'skill-tphilo-methode-commentaire',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Méthodologie Sujet Type 2 : Le Commentaire de Texte Philosophique',
    description: 'Explication linéaire et ordonnée d’un texte philosophique : Thème (de quoi parle le texte ?), Thèse (quelle est la position défendue par l’auteur ?), Problème (à quelle difficulté répond-il ?), Mouvements du texte (structure logique des arguments), et Intérêt philosophique (portée et limites de la thèse).',
    difficulty: 4,
    prerequisiteIds: ['skill-tphilo-methode-dissertation'],
    masteryScore: 78,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Méthodologie Baccalauréat',
    order: 2,
    topics: [
      'Lecture analytique : identification du Thème, de la Thèse centrale et du Problème posé',
      'Découpage des unités de sens et des articulations logiques (connecteurs, raisonnements)',
      'Éviter l’écueil de la paraphrase par l’explication des concepts et des implicites',
      'Élucidation des enjeux doctrinaux de l’auteur et confrontation à la tradition philosophique',
      'Discussion critique : mise en lumière de la fécondité et des limites éventuelles du texte'
    ]
  },

  // --- Bloc 1 : Le Sujet, la Conscience et l'Existence ---
  {
    id: 'skill-tphilo-conscience-inconscient',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Conscience & Inconscient : La Connaissance de Soi',
    description: 'Problème : Peut-on réellement se connaître et être maître de soi ? Thèse cartésienne de la transparence du sujet (Descartes : « Je pense, donc je suis ») confrontée à la subversion psychanalytique (Freud : « Le moi n’est pas maître dans sa propre maison »). Déterminismes psychiques vs lucidité réflexive.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 85,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Unité 1 : Le Sujet & la Conscience',
    order: 3,
    topics: [
      'Conscience : Définition, conscience immédiate et conscience réflexive',
      'Descartes et le cogito : le doute méthodique et le sujet pensant comme première certitude',
      'Inconscient freudien : Première et deuxième topiques (Ça, Moi, Surmoi), refoulement et symptômes',
      'Freud : « Le moi n’est pas maître dans sa propre maison » (les trois blessures narcissiques de l’humanité)',
      'Débat philosophique : L’inconscient excuse-t-il nos actes ? Réfutation sartrienne de la mauvaise foi'
    ]
  },
  {
    id: 'skill-tphilo-liberte-determinisme',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'La Liberté : Sommes-nous Libres face aux Déterminismes ?',
    description: 'Problème : Sommes-nous véritablement libres ou déterminés par des lois naturelles et sociales ? Spinoza et l’illusion du libre arbitre. Existentialisme sartrien : l’existence précède l’essence, liberté absolue et responsabilité inéluctable (Sartre : « L’homme est condamné à être libre »).',
    difficulty: 4,
    prerequisiteIds: ['skill-tphilo-conscience-inconscient'],
    masteryScore: 80,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Unité 1 : Le Sujet & la Conscience',
    order: 4,
    topics: [
      'Liberté de choix, libre arbitre et liberté d’action : distinctions fondamentales',
      'Déterminismes biologique, physique, psychologique et sociologique',
      'Spinoza : « Les hommes se croient libres parce qu’ils sont conscients de leurs désirs et ignorants des causes qui les déterminent »',
      'Sartre : « L’homme est condamné à être libre » – refus du déterminisme et fardeau de la responsabilité',
      'La liberté politique et morale comme émancipation et autonomie (Rousseau, Kant)'
    ]
  },
  {
    id: 'skill-tphilo-bonheur-devoir',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Le Bonheur & Le Devoir : Désir, Morale & Souverain Bien',
    description: 'Problème : Le bonheur est-il le but suprême de l’existence humaine ? Peut-on concilier devoir moral et recherche du bonheur ? Épicure et la maîtrise des désirs (ataraxie). Kant : le bonheur comme « idéal non de la raison, mais de l’imagination », et l’impératif catégorique du devoir (« Agis selon une maxime qui puisse devenir une loi universelle »).',
    difficulty: 4,
    prerequisiteIds: [],
    masteryScore: 76,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Unité 1 : Le Sujet & la Conscience',
    order: 5,
    topics: [
      'Définition du bonheur : état durable de plénitude vs satisfaction éphémère du plaisir',
      'Épicure et la sagesse hédoniste : classification des désirs et ataraxie (tranquillité de l’âme)',
      'Kant : Le bonheur comme « idéal de l’imagination » empirique et indéterminé',
      'Le devoir moral déontologique : impératif hypothétique vs impératif catégorique',
      'Kant : « Agis uniquement d’après la maxime qui fait que tu peux vouloir en même temps qu’elle devienne une loi universelle »'
    ]
  },
  {
    id: 'skill-tphilo-temps-mort',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Le Temps & La Condition Humaine : Réel ou Subjectif ?',
    description: 'Problème : Le temps est-il une réalité objective extérieure ou une construction subjective de notre esprit ? Le temps spatialisé des horloges opposé à la durée vécue et indivisible selon Bergson. Angoisse de la finitude et prise de conscience de la mort.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 72,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Unité 1 : Le Sujet & la Conscience',
    order: 6,
    topics: [
      'Temps physique (mesurable, spatialisé, réversible) vs temps psychologique (subjectif, irréversible)',
      'Saint Augustin : le mystère du temps (« Qu’est-ce donc que le temps ? Si personne ne me le demande, je le sais ; si je veux l’expliquer, je ne le sais plus »)',
      'Bergson : La durée intérieure vécue comme flux qualitatif continu et hétérogène',
      'Conscience du temps et angoisse de la mort : condition tragique et dignité de l’homme (Pascal)'
    ]
  },

  // --- Bloc 2 : La Culture, la Société et la Politique ---
  {
    id: 'skill-tphilo-justice-droit',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'La Justice & Le Droit : Qu’est-ce que le Juste ?',
    description: 'Problème : Le juste se réduit-il au légal ? Doit-on préférer l’égalité arithmétique ou l’équité proportionnelle ? Thèse d’Aristote : distinction entre justice distributive et commutative (« Le juste est l’égal »). Droit positif vs droit naturel. Désobéissance civile et conflit Antigone/Créon.',
    difficulty: 4,
    prerequisiteIds: [],
    masteryScore: 79,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Unité 2 : Société, Droit & Politique',
    order: 7,
    topics: [
      'Distinction entre droit positif (lois instituées) et droit naturel (idéal universel de justice)',
      'Aristote : « Le juste est l’égal » – justice commutative (égalité arithmétique) et justice distributive (équité proportionnelle selon le mérite)',
      'Légalité (respect de la loi) vs Légitimité (conformité morale à la justice)',
      'Rôle du juge et de l’équité comme correction de la rigidité de la loi générale',
      'Théorie de la justice comme équité (John Rawls : voile d’ignorance et principe de différence)'
    ]
  },
  {
    id: 'skill-tphilo-etat-pouvoir',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'L’État & Le Pouvoir : L’État est-il Nécessaire ?',
    description: 'Problème : L’État est-il le garant de l’ordre et de la liberté ou un instrument de domination ? Aristote : l’homme est par nature un « animal politique ». Théories du contrat social : Hobbes (le Léviathan contre la guerre de tous contre tous) et Rousseau (la volonté générale). Critique anarchiste et marxiste de l’appareil d’État.',
    difficulty: 4,
    prerequisiteIds: ['skill-tphilo-justice-droit'],
    masteryScore: 84,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Unité 2 : Société, Droit & Politique',
    order: 8,
    topics: [
      'Aristote : « L’homme est par nature un animal politique » fait pour vivre en cité',
      'L’état de nature selon Hobbes : « L’homme est un loup pour l’homme », nécessité d’un pouvoir souverain absolu',
      'Le contrat social selon Rousseau : souveraineté populaire, liberté civile et volonté générale',
      'Critique marxiste : l’État comme instrument institutionnel de domination de classe',
      'Max Weber : l’État comme détenteur du monopole de la violence physique légitime'
    ]
  },
  {
    id: 'skill-tphilo-travail-technique',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Le Travail & La Technique : Libération ou Aliénation ?',
    description: 'Problème : Le travail humanise-t-il l’homme ou l’asservit-il ? La technique n’est-elle qu’un moyen neutre ou un mode de domination du monde ? Analyse du travail chez Hegel (dialectique du maître et de l’esclave) et Marx (le travail aliéné et l’exploitation capitaliste). Heidegger : la technique moderne comme arraisonnement et dévoilement de la nature.',
    difficulty: 4,
    prerequisiteIds: [],
    masteryScore: 75,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Unité 2 : Société, Droit & Politique',
    order: 9,
    topics: [
      'Transformation de la nature par le travail et constitution de la conscience humaine (Hegel)',
      'Karl Marx et la critique du travail aliéné : perte de sens, division parcellaire et prolétarisation',
      'Différence entre outil traditionnel (prolongement de la main) et machine/technologie moderne',
      'Heidegger et l’essence de la technique : la technique comme « arraisonnement » (Gestell) et mise en demeure de la nature',
      'Enjeux contemporains : écologie, intelligence artificielle et technocratie'
    ]
  },
  {
    id: 'skill-tphilo-violence-guerre',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'La Violence : Est-elle Jamais Légitime ?',
    description: 'Problème : La violence peut-elle être un instrument légitime de justice ou de transformation historique ? Marx : « La violence est l’accoucheuse de toute vieille société grosse d’une société nouvelle ». Non-violence active (Gandhi, Martin Luther King) et critique kantienne de la guerre en vue de la paix perpétuelle.',
    difficulty: 4,
    prerequisiteIds: ['skill-tphilo-etat-pouvoir'],
    masteryScore: 71,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Unité 2 : Société, Droit & Politique',
    order: 10,
    topics: [
      'Définition de la violence : usage illégitime de la force physique ou symbolique',
      'Karl Marx : « La violence est l’accoucheuse de toute vieille société en travail d’une nouvelle » (moteur des révolutions)',
      'Légitimité de la violence défensive et guerre juste vs condamnation morale absolue',
      'La non-violence comme force éthique et politique de résistance (Gandhi)',
      'Kant et le projet de paix perpétuelle par le droit international cosmopolitique'
    ]
  },
  {
    id: 'skill-tphilo-developpement-decolonisation',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Développement & Décolonisation : Libération et Justice Globale',
    description: 'Problème philosophique majeur du continent africain : Pour qui produit-on le développement et la décolonisation est-elle achevée ? Critique des inégalités mondiales (Amartya Sen : le développement comme libertés réelles et capacités). Frantz Fanon (Les Damnés de la terre) : nécessité de la décolonisation mentale et de la reconstruction d’un homme nouveau désaliéné.',
    difficulty: 5,
    prerequisiteIds: ['skill-tphilo-violence-guerre'],
    masteryScore: 82,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Unité 2 : Société, Droit & Politique',
    order: 11,
    topics: [
      'Problématique du développement : simple croissance du PIB vs développement humain équitable',
      'Amartya Sen : Le développement comme expansion des libertés substantielles (théorie des capabilités)',
      'Frantz Fanon : La décolonisation comme processus historique créateur d’hommes nouveaux',
      'Aliénation culturelle, néocolonialisme et exigence de libération épistémique et mentale',
      'Philosophie africaine contemporaine : réappropriation de la modernité, démocratie et panafricanisme'
    ]
  },
  {
    id: 'skill-tphilo-religion-croyance',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'La Religion : Illusion, Consolatrice ou Aliénation ?',
    description: 'Problème : La croyance religieuse est-elle compatible avec la raison émancipée ? Marx : la religion comme « opium du peuple » et reflet illusoire d’un monde sans cœur. Freud : la religion comme illusion née du besoin de protection paternelle. Spinoza : superstition vs foi rationnelle. Tolérance et laïcité.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 77,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Unité 2 : Société, Droit & Politique',
    order: 12,
    topics: [
      'Définition du fait religieux : sacré, rite, dogme et sentiment de transcendance',
      'Karl Marx : « La religion est l’opium du peuple » – critique de la consolation illusoire de la misère réelle',
      'Sigmund Freud (L’Avenir d’une illusion) : la religion comme névrose obsessionnelle et désir de protection infantile',
      'Raison et foi : conflit ou complémentarité (Blaise Pascal, Thomas d’Aquin)',
      'Principe républicain de laïcité et liberté de conscience'
    ]
  },

  // --- Bloc 3 : La Connaissance, la Raison et le Réel ---
  {
    id: 'skill-tphilo-verite-raison',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'La Vérité & La Raison : Critères et Limites du Savoir',
    description: 'Problème : Qu’est-ce que la vérité et comment la distinguer de l’erreur ou de l’opinion ? Conception classique d’Aristote : la vérité comme adéquation de l’esprit à la réalité (veritas est adaequatio rei et intellectus). Kant et les Lumières : « Sapere aude ! Ose savoir ! Aie le courage de te servir de ton propre entendement ! » Rationalisme vs scepticisme et relativisme.',
    difficulty: 4,
    prerequisiteIds: [],
    masteryScore: 84,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Unité 3 : Connaissance, Raison & Réel',
    order: 13,
    topics: [
      'Définition classique de la vérité : conformité du discours aux faits (adéquation aristotélicienne)',
      'Critères de vérité : cohérence logique formelle vs vérification empirique matérielle',
      'Scepticisme méthodique (Descartes) vs scepticisme radical (Pyrrhon) et relativisme (« à chacun sa vérité »)',
      'Kant : Définition des Lumières et devise « Sapere aude ! » (Ose penser par toi-même)',
      'Les limites de la raison humaine : ce qu’on peut savoir (science) vs ce qu’on peut croire (métaphysique)'
    ]
  },
  {
    id: 'skill-tphilo-science-experience',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'La Science & L’Expérience : Élaboration de la Vérité Scientifique',
    description: 'Problème : La connaissance scientifique découle-t-elle de l’expérience sensible pure ou d’une construction théorique ? Empirisme de John Locke (« Rien n’est dans l’entendement qui n’ait d’abord été dans les sens »). Démarche expérimentale selon Claude Bernard (observation, hypothèse, expérience, conclusion) et réfutabilité selon Karl Popper.',
    difficulty: 4,
    prerequisiteIds: ['skill-tphilo-verite-raison'],
    masteryScore: 80,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Unité 3 : Connaissance, Raison & Réel',
    order: 14,
    topics: [
      'Empirisme classique de Locke et Hume : la table rase et l’origine sensible des idées',
      'Rationalisme appliqué : la critique bachelardienne (« Rien n’est donné, tout est construit »)',
      'La démarche hypothético-déductive dans les sciences expérimentales',
      'Critère de falsifiabilité de Karl Popper : une théorie n’est scientifique que si elle peut être réfutée par l’expérience',
      'Responsabilité éthique du chercheur et bioéthique contemporaine'
    ]
  },
  {
    id: 'skill-tphilo-langage-pensee',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Le Langage : Peut-on Tout Dire ?',
    description: 'Problème : Le langage est-il un simple instrument de communication de pensées préexistantes ou la condition même de la pensée ? Ludwig Wittgenstein : « Les limites de mon langage signifient les limites de mon propre monde ». L’ineffable et les pièges des illusions verbales.',
    difficulty: 4,
    prerequisiteIds: [],
    masteryScore: 78,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Unité 3 : Connaissance, Raison & Réel',
    order: 15,
    topics: [
      'Fonctions du langage : communication, expression affective et conceptualisation rationnelle',
      'Relation entre pensée et langage : pensons-nous sans mots ? (Hegel : « C’est dans les mots que nous pensons »)',
      'Ludwig Wittgenstein : « Les limites de mon langage sont les limites de mon monde »',
      'Le problème de l’ineffable : y a-t-il des réalités ou des sentiments indicibles ? (Bergson)',
      'Pouvoir politique et rhétorique du langage : manipulation, novlangue et émancipation'
    ]
  },
  {
    id: 'skill-tphilo-nature-environnement',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'La Nature : Doit-on la Dominer ou la Respecter ?',
    description: 'Problème : L’homme fait-il partie de la nature ou doit-il s’en affranchir pour bâtir la culture ? Projet cartésien de la modernité : se rendre « comme maîtres et possesseurs de la nature ». Crise écologique contemporaine, éthique environnementale et principe de responsabilité (Hans Jonas).',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 82,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Unité 3 : Connaissance, Raison & Réel',
    order: 16,
    topics: [
      'Distinction conceptuelle Nature (ce qui naît spontanément) vs Culture (ce qui est produit par l’esprit humain)',
      'Descartes et la science moderne mécaniste : « Nous rendre comme maîtres et possesseurs de la nature »',
      'Rousseau et l’éloge de la nature originelle face à la corruption des institutions sociales',
      'Hans Jonas et le principe responsabilité : devoir moral envers les générations futures et la biosphère',
      'Le Gabon, puissance verte : préservation de la biodiversité équatoriale et éthique de l’environnement'
    ]
  },
  {
    id: 'skill-tphilo-art-beaute',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'L’Art & Le Beau : Utilité ou Révélation du Réel ?',
    description: 'Problème : L’art est-il inutile ou possède-t-il une finalité plus haute que le pragmatisme technique ? Paul Klee : « L’art ne reproduit pas le visible, il rend visible ». Kant et le jugement esthétique désintéressé (« Le beau est ce qui plaît universellement sans concept »). Hegel : l’art comme incarnation sensible de l’Idée.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 86,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Unité 3 : Connaissance, Raison & Réel',
    order: 17,
    topics: [
      'Distinction entre l’artisanat (utilitaire, technique reproductible) et l’art (création du beau désintéressé)',
      'Paul Klee : « L’art ne reproduit pas le visible ; il rend visible »',
      'Kant et la critique de la faculté de juger : universalité sans concept du jugement esthétique',
      'Hegel : L’art supérieur à la beauté naturelle car il porte l’empreinte de l’esprit humain',
      'Fonction de l’art africain traditionnel (masques, sculptures rituelles) et contemporain'
    ]
  },

  // =========================================================================================
  // PROGRAMME ANNUEL OFFICIEL SUR 9 MOIS (ENSEIGNEMENT SECONDAIRE GABONAIS)
  // Modules chronologiques du 1er au 9ème mois pour Première Littéraire (1ère A) et Terminale
  // =========================================================================================
  {
    id: 'skill-philo-m1-mythe-philosophie',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 1 : Mythe & Philosophie – Genèse & Grands Courants',
    description: 'Premier mois du programme officiel : Genèse de la réflexion philosophique. Le passage fondateur du Mythos (récits sacrés, cosmogonies) au Logos (discours rationnel et esprit critique). Présentation des grands courants philosophiques : idéalisme, matérialisme, rationalisme et empirisme.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 84,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Mois 1 : Mythe & Philosophie',
    order: 18,
    topics: [
      'Origines historiques : Grèce antique et sagesses de l’Égypte pharaonique et de l’Afrique traditionnelle',
      'Le passage du Mythos (explications surnaturelles et dogmatiques) au Logos (démonstration rationnelle)',
      'Définition de la philosophie : recherche désintéressée de la sagesse et mise à distance des préjugés',
      'Les grands courants : Idéalisme (Platon), Matérialisme (Démocrite, Marx), Rationalisme (Descartes), Empirisme (Locke)',
      'L’apport de Marcien Towa : la philosophie comme rupture critique avec la pensée mythico-religieuse'
    ]
  },
  {
    id: 'skill-philo-m1-methode-sujet-question',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 1 : Méthodologie – Le Sujet Question',
    description: 'Premier mois méthodologique : Maîtrise de la dissertation sur interrogation directe. Analyse des termes, mise au jour des présupposés, dégagement du problème philosophique (paradoxe) et formulation d’un plan dialectique tripartite.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 80,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Mois 1 : Méthodologie (Sujet Question)',
    order: 19,
    topics: [
      'Analyse sémantique de l’intitulé : sens obvie, sens figuré et présupposés cachés',
      'Formulation de la problématique : faire émerger la contradiction féconde sous la question posée',
      'Construction de l’introduction complète : amorce, définition des concepts, problème et annonce du plan',
      'Élaboration du plan dialectique : Thèse (affirmation argumentée), Antithèse (mise en crise), Synthèse (dépassement rationnel)',
      'Exemple d’application : « La liberté consiste-t-elle à faire tout ce qui nous plaît ? »'
    ]
  },
  {
    id: 'skill-philo-m2-savoir-opinion-sorcellerie',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 2 : Savoir & Opinion – Croyance, Sorcellerie, Magie & Rêve',
    description: 'Deuxième mois du programme officiel : La croyance, l’expérience, la sorcellerie, la magie, le fétiche, le rêve et la réalité. Critique des opinions trompeuses (doxa) et analyse rationnelle des pratiques magico-religieuses face à l’exigence scientifique.',
    difficulty: 4,
    prerequisiteIds: ['skill-philo-m1-mythe-philosophie'],
    masteryScore: 78,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Mois 2 : Savoir & Opinion',
    order: 20,
    topics: [
      'Doxa (opinion fluctuante et subjective) vs Épistémè (savoir universellement fondé en raison)',
      'La croyance : foi religieuse, conviction intime et absence de preuve empirique',
      'L’expérience : premier contact sensible avec le monde et source d’illusions perceptives',
      'Sorcellerie, magie et fétiche : analyse philosophique des croyances magiques dans les sociétés africaines et gabonaises',
      'Causalité magico-religieuse (animisme, forces occultes) vs causalité scientifique et rationnelle',
      'Le rêve et la réalité : le doute cartésien des songes et l’interprétation freudienne de l’inconscient onirique'
    ]
  },
  {
    id: 'skill-philo-m3-etude-oeuvre-integrale',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 3 : Œuvres – Étude Intégrale d’une Œuvre & Contrôle de Lecture',
    description: 'Troisième mois du programme officiel : Étude suivie et intégrale d’un texte philosophique majeur. Maîtrise de l’architecture logique du texte, analyse des concepts cardinaux de l’auteur et restitution argumentée.',
    difficulty: 4,
    prerequisiteIds: ['skill-philo-m1-mythe-philosophie'],
    masteryScore: 75,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Mois 3 : Œuvres (Étude Intégrale)',
    order: 21,
    topics: [
      'Repérage du contexte historique, philosophique et biographique de l’auteur étudié',
      'Identification de la question directrice et de la thèse fondamentale de l’ouvrage',
      'Analyse des divisions logiques et des étapes démonstratives du livre',
      'Contrôle de lecture : définitions précises des termes forgés par l’auteur',
      'Actualisation philosophique : en quoi cette œuvre permet-elle d’éclairer le monde contemporain et africain ?'
    ]
  },
  {
    id: 'skill-philo-m4-etre-pensee-homme',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 4 : Être & Pensée – Nature, Corps, Âme, Esprit & l’Homme',
    description: 'Quatrième mois du programme officiel : Ontologie et anthropologie philosophique. La nature régie par des lois, la matière et le corps, l’âme et l’esprit (dualisme cartésien vs monisme), et la question de la condition humaine.',
    difficulty: 4,
    prerequisiteIds: ['skill-philo-m2-savoir-opinion-sorcellerie'],
    masteryScore: 82,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Mois 4 : Être & Pensée',
    order: 22,
    topics: [
      'La nature : ordre physique indépendant de l’homme vs nature humaine universelle',
      'La matière et le corps : le corps comme prison de l’âme (Platon), comme machine (Descartes) ou comme chair vécue (Merleau-Ponty)',
      'L’âme et l’esprit : le problème de l’immatérialité de la pensée face au cerveau biologique',
      'L’Homme : être de nature ou être de culture ? Les métamorphoses de l’humanité par le travail, la parole et l’art',
      'Conception africaine de la personne : solidarité vitale communautaire (Ubuntu) et souffle vital'
    ]
  },
  {
    id: 'skill-philo-m4-methode-sujet-citation',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 4 : Méthodologie – Le Sujet Citation',
    description: 'Quatrième mois méthodologique : Traitement rigoureux de la dissertation à partir d’une pensée d’auteur. Explication fidèle du sens de la formule, examen des justifications théoriques, puis mise en évidence des limites et dépassement.',
    difficulty: 4,
    prerequisiteIds: ['skill-philo-m1-methode-sujet-question'],
    masteryScore: 80,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Mois 4 : Méthodologie (Sujet Citation)',
    order: 23,
    topics: [
      'Explication littérale de la citation : repérer les concepts pivots sans trahir l’intention de l’auteur',
      'Partie 1 : Justifier la validité de la thèse de l’auteur en déployant ses meilleurs arguments philosophiques',
      'Partie 2 : Interroger les limites de la citation, soulever des objections et examiner les situations contraires',
      'Partie 3 : Dépasser l’opposition par une conciliation féconde ou un changement d’échelle conceptuelle',
      'Exemple d’application : « L’homme est un loup pour l’homme » (Hobbes). Qu’en pensez-vous ?'
    ]
  },
  {
    id: 'skill-philo-m5-monde-valeurs-conscience-bien',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 5 : Le Monde & les Valeurs (1ère Partie) – Conscience, Désir & Bien',
    description: 'Cinquième mois du programme officiel : La conscience réflexive, le désir comme moteur de l’action et la recherche du bien moral. Distinction entre désirs naturels et superflus, morale déontologique (Kant) et éthique du bonheur.',
    difficulty: 3,
    prerequisiteIds: ['skill-philo-m4-etre-pensee-homme'],
    masteryScore: 85,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Mois 5 : Le Monde & les Valeurs (I)',
    order: 24,
    topics: [
      'La conscience : présence à soi et au monde, subjectivité réflexive et responsabilité morale',
      'Le désir : manque insatisfait (Platon) vs force affirmative créatrice de valeur (Spinoza)',
      'Le bien : distinction entre le légal (conforme à la loi) et le légitime (moralement juste)',
      'L’impératif catégorique kantien : agir par pur devoir et respecter l’humanité comme fin absolue',
      'Morale traditionnelle africaine : le bien fondé sur l’harmonie collective et le respect des aînés'
    ]
  },
  {
    id: 'skill-philo-m5-methode-sujet-texte',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 5 : Méthodologie – Le Sujet Texte (Commentaire & Explication)',
    description: 'Cinquième mois méthodologique : Méthode d’explication linéaire et ordonnée d’un texte philosophique. Dégagement du Thème, de la Thèse, du Problème et découpage rigoureux des mouvements logiques du raisonnement.',
    difficulty: 4,
    prerequisiteIds: ['skill-philo-m4-methode-sujet-citation'],
    masteryScore: 78,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Mois 5 : Méthodologie (Sujet Texte)',
    order: 25,
    topics: [
      'Les quatre invariants préliminaires : Thème (de quoi ?), Thèse (quelle affirmation ?), Problème (quelle contradiction ?), Enjeu',
      'Découpage des unités logiques : repérage des connecteurs d’argumentation (donc, mais, or, par conséquent)',
      'Élucidation conceptuelle continue : bannir la paraphrase en explicitant les termes techniques et implicites',
      'La discussion d’intérêt philosophique : évaluer la portée et les limites de la solution de l’auteur',
      'Application concrète sur des extraits de Rousseau, Platon, Kant et Towa'
    ]
  },
  {
    id: 'skill-philo-m6-sacre-coutume-dignite-pouvoir',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 6 : Le Monde & les Valeurs (Fin) – Sacré, Coutume, Dignité & Pouvoir',
    description: 'Sixième mois du programme officiel : Le sacré et les rites, l’autorité de la coutume face à la raison critique, la dignité inaliénable de la personne humaine et les fondements de la légitimité du pouvoir politique.',
    difficulty: 4,
    prerequisiteIds: ['skill-philo-m5-monde-valeurs-conscience-bien'],
    masteryScore: 82,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Mois 6 : Le Monde & les Valeurs (II)',
    order: 26,
    topics: [
      'Le sacré : séparation du profane et du religieux, rites de passage et vénération des ancêtres',
      'La coutume : transmission culturelle, relativisme (Montaigne) et risque de fétichisation des traditions',
      'La dignité : valeur intrinsèque de l’être humain excluant toute forme d’esclavage, d’aliénation et d’instrumentalisation',
      'Le pouvoir : la nécessité d’un ordre politique (Hobbes), la volonté générale (Rousseau) et la séparation des pouvoirs (Montesquieu)',
      'Étude partielle d’une œuvre 1 : focus sur des passages clés du Prince de Machiavel ou du Discours sur le colonialisme d’Aimé Césaire'
    ]
  },
  {
    id: 'skill-philo-m7-connaissance-verite-science',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 7 : Connaissance & Vérité – Théorie, Science & Expérimentation',
    description: 'Septième mois du programme officiel : Épistémologie et philosophie des sciences. Élaboration de la théorie, ruptures avec l’opinion, démarche expérimentale en 3 temps (observation, hypothèse, vérification) et critère de réfutabilité poppérienne.',
    difficulty: 4,
    prerequisiteIds: ['skill-philo-m2-savoir-opinion-sorcellerie'],
    masteryScore: 80,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Mois 7 : Connaissance & Vérité',
    order: 27,
    topics: [
      'La théorie : modèles hypothético-déductifs pour unifier et expliquer les phénomènes observables',
      'La science : rejet des explications magiques, obstacle épistémologique et esprit scientifique (Bachelard)',
      'L’expérimentation : Claude Bernard et les trois moments de la recherche scientifique',
      'Critère de falsifiabilité de Karl Popper : démarcation entre science rigoureuse et pseudoscience',
      'Étude partielle d’une œuvre 2 : textes épistémologiques sur les fondements et limites de la vérité scientifique'
    ]
  },
  {
    id: 'skill-philo-m8-9-renforcement-bac',
    subjectId: 'philo',
    levelId: 'term-a',
    name: 'Mois 8 & 9 : Renforcement Méthodologique & Préparation Ultime au Baccalauréat',
    description: 'Huitième et neuvième mois du programme officiel : Entraînement intensif aux trois types d’épreuves du Baccalauréat gabonais (Sujet Question, Sujet Citation, Sujet Texte). Gestion du temps, révision des 20 notions et simulations en conditions réelles.',
    difficulty: 5,
    prerequisiteIds: ['skill-philo-m1-methode-sujet-question', 'skill-philo-m4-methode-sujet-citation', 'skill-philo-m5-methode-sujet-texte'],
    masteryScore: 88,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Mois 8 & 9 : Renforcement Bac',
    order: 28,
    topics: [
      'Choix stratégique du sujet au Baccalauréat lors des 30 premières minutes',
      'Maîtrise croisée des 3 épreuves : dissertation directe, citation commentée et explication de texte',
      'Synthèse des repères notionnels : absolu/relatif, en fait/en droit, légal/légitime, nécessaire/contingent',
      'Révision accélérée des citations d’auteurs majeurs et des arguments canoniques',
      'Simulations de devoirs de 4 heures avec critères de notation officiels de l’Inspection Générale de Philosophie du Gabon'
    ]
  }
];

// =========================================================================================
// PROGRESSION PHILOSOPHIE CLASSE DE PREMIÈRE (1ère A / LITTÉRAIRE - GABON)
// Initiation philosophique complète selon la progression officielle des 9 mois
// =========================================================================================
export const PREMIERE_A_PHILOSOPHIE_SKILLS: SkillNode[] = TERMINALE_PHILOSOPHIE_SKILLS.map(skill => ({
  ...skill,
  levelId: '1ere-a'
}));

