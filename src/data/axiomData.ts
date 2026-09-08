import { Subject, SkillNode, ExerciseQuestion, BadgeItem, MasteryTier, SchoolClassDefinition } from '../types';
import { PREMIERE_S_MATH_SKILLS, PREMIERE_S_QUESTIONS } from './axiomPremiereSData';
import { PREMIERE_S_PHYSICS_SKILLS, PREMIERE_S_PHYSICS_QUESTIONS_MAP } from './axiomPremiereSPhysicsData';

export { PREMIERE_S_MATH_SKILLS, PREMIERE_S_QUESTIONS, PREMIERE_S_PHYSICS_SKILLS, PREMIERE_S_PHYSICS_QUESTIONS_MAP };

export const GABON_HIGH_SCHOOLS: string[] = [
  'Lycée National Léon Mba (Libreville)',
  'Lycée Paul Indjendjet Gondjout (Libreville)',
  'Lycée Technique National Omar Bongo (Libreville)',
  'Lycée d’État de Port-Gentil',
  'Lycée Jean-Hilaire Aubame Eyeghe (Libreville)',
  'Lycée d’État de Franceville (Haut-Ogooué)',
  'Lycée Privé et Collège Bessieux (Libreville)',
  'Lycée Thuriaf Bantsantsa (Port-Gentil)',
  'Lycée d’Oyem (Woleu-Ntem)',
  'Lycée de Mouila (Ngounié)',
  'Autre établissement scolaire'
];

export const AVAILABLE_CLASSES: SchoolClassDefinition[] = [
  {
    id: '2nde-s',
    name: 'Seconde S (Scientifique)',
    grade: 'Seconde',
    track: 'Scientifique (C/S)',
    description: 'Bases solides en mathématiques, physique-chimie et sciences de la vie.',
    focusSubjects: ['math', 'physics', 'svt', 'french']
  },
  {
    id: '2nde-l',
    name: 'Seconde L (Littéraire)',
    grade: 'Seconde',
    track: 'Littéraire (A/L)',
    description: 'Renforcement en lettres modernes, langues vivantes et sciences humaines.',
    focusSubjects: ['french', 'english', 'history_geo', 'math']
  },
  {
    id: '1ere-s',
    name: 'Première S (Scientifique)',
    grade: 'Première',
    track: 'Scientifique (C/S)',
    description: 'Programme officiel : 27 Chapitres (Logique, Second degré, Géométrie, Limites, Dérivées, Produit scalaire, Arithmétique, Barycentre) organisés en modules d\'apprentissage.',
    focusSubjects: ['math', 'physics', 'svt', 'french']
  },
  {
    id: '1ere-d',
    name: 'Première D (Sciences de la Vie)',
    grade: 'Première',
    track: 'Sciences de la Vie (D)',
    description: 'Biologie humaine, génétique, physique appliquée et chimie organique.',
    focusSubjects: ['svt', 'physics', 'math', 'french']
  },
  {
    id: '1ere-a',
    name: 'Première A (Littéraire)',
    grade: 'Première',
    track: 'Littéraire (A/L)',
    description: 'Dissertation littéraire, épreuve anticipée de français et géopolitique.',
    focusSubjects: ['french', 'history_geo', 'english', 'philo']
  },
  {
    id: 'term-c',
    name: 'Terminale C (Maths & Sciences)',
    grade: 'Terminale',
    track: 'Scientifique (C/S)',
    description: 'Excellence en analyse, arithmétique, nombres complexes, mécanique et physique quantique.',
    focusSubjects: ['math', 'physics', 'philo', 'svt']
  },
  {
    id: 'term-d',
    name: 'Terminale D (Sciences Naturelles)',
    grade: 'Terminale',
    track: 'Sciences de la Vie (D)',
    description: 'Génétique avancée, immunologie, chimie des solutions et analyse mathématique.',
    focusSubjects: ['svt', 'physics', 'math', 'philo']
  },
  {
    id: 'term-a',
    name: 'Terminale A (Philosophie & Lettres)',
    grade: 'Terminale',
    track: 'Littéraire (A/L)',
    description: 'Préparation intensive à la dissertation philosophique, littérature mondiale et langues.',
    focusSubjects: ['philo', 'french', 'history_geo', 'english']
  }
];

export const INITIAL_SUBJECTS: Subject[] = [
  { id: 'math', name: 'Mathématiques', icon: 'Sigma', color: '#2452FF', category: 'Sciences', totalSkills: 18 },
  { id: 'physics', name: 'Physique-Chimie', icon: 'Atom', color: '#8B5CF6', category: 'Sciences', totalSkills: 14 },
  { id: 'svt', name: 'SVT', icon: 'Dna', color: '#16C784', category: 'Sciences', totalSkills: 9 },
  { id: 'french', name: 'Français', icon: 'BookOpen', color: '#EC4899', category: 'Lettres', totalSkills: 15 },
  { id: 'english', name: 'Anglais', icon: 'Languages', color: '#F59E0B', category: 'Langues', totalSkills: 10 },
  { id: 'history_geo', name: 'Histoire-Géo', icon: 'Compass', color: '#0EA5E9', category: 'Sciences Humaines', totalSkills: 4 },
  { id: 'philo', name: 'Philosophie', icon: 'Brain', color: '#6366F1', category: 'Lettres', totalSkills: 9 },
  { id: 'cs', name: 'Informatique', icon: 'Code', color: '#14B8A6', category: 'Technologies', totalSkills: 12 },
];

export const CLASS_SKILLS_DATA: Record<string, SkillNode[]> = {
  '2nde-s': [
    {
      id: 'skill-2s-reels',
      subjectId: 'math',
      levelId: '2nde-s',
      name: 'Nombres Réels, Ensembles & Intervalles',
      description: 'Ensembles N, Z, D, Q, R, intersections, réunions, encadrements et valeur absolue.',
      difficulty: 1,
      prerequisiteIds: [],
      masteryScore: 80,
      tier: 'Maîtrisée',
      status: 'mastered',
      unit: 'Module 1 : Arithmétique & Ensembles',
      order: 1
    },
    {
      id: 'skill-2s-vecteurs',
      subjectId: 'math',
      levelId: '2nde-s',
      name: 'Vecteurs du Plan & Colinéarité',
      description: 'Relation de Chasles, coordonnées dans un repère, déterminant xy\' - x\'y = 0 et alignement.',
      difficulty: 2,
      prerequisiteIds: ['skill-2s-reels'],
      masteryScore: 65,
      tier: 'Acquise',
      status: 'acquired',
      unit: 'Module 2 : Géométrie Vectorielle',
      order: 2
    },
    {
      id: 'skill-2s-angles',
      subjectId: 'math',
      levelId: '2nde-s',
      name: 'Angles Orientés & Cercle Trigonométrique',
      description: 'Enroulement de la droite des réels, conversion degrés-radians et mesure principale dans ]-π; π].',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-reels', 'skill-2s-vecteurs'],
      masteryScore: 35,
      tier: 'Découverte',
      status: 'in_progress',
      unit: 'Module 3 : Trigonométrie Fondamentale',
      order: 3
    },
    {
      id: 'skill-2s-trigo',
      subjectId: 'math',
      levelId: '2nde-s',
      name: 'Trigonométrie : Cosinus, Sinus & Équations',
      description: 'Valeurs remarquables, relation cos²(x) + sin²(x) = 1, angles associés et équations élémentaires.',
      difficulty: 4,
      prerequisiteIds: ['skill-2s-angles'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: 'Module 3 : Trigonométrie Fondamentale',
      order: 4
    },
    {
      id: 'skill-2s-fonctions',
      subjectId: 'math',
      levelId: '2nde-s',
      name: 'Fonctions de Référence & Variations',
      description: 'Étude algébrique et graphique des fonctions carré, inverse, racine carrée et affine.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-reels'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: 'Module 4 : Analyse & Fonctions',
      order: 5
    },
    {
      id: 'skill-2s-poly-canonique',
      subjectId: 'math',
      levelId: '2nde-s',
      name: 'Polynômes du 2nd Degré : Forme Canonique & Parabole',
      description: 'Coefficients a, b, c, forme canonique a(x - α)² + β, sommet S(α, β), axe de symétrie et extremum.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-fonctions'],
      masteryScore: 40,
      tier: 'Découverte',
      status: 'in_progress',
      unit: 'Module 5 : Polynômes & Second Degré',
      order: 6
    },
    {
      id: 'skill-2s-poly-racines',
      subjectId: 'math',
      levelId: '2nde-s',
      name: 'Discriminant Δ, Racines & Factorisation du Trinôme',
      description: 'Calcul de Δ = b² - 4ac, racines x₁ et x₂, factorisation a(x - x₁)(x - x₂), tableau de signes et inéquations.',
      difficulty: 4,
      prerequisiteIds: ['skill-2s-poly-canonique'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: 'Module 5 : Polynômes & Second Degré',
      order: 7
    },

    // -----------------------------------------------------------------
    // PHYSIQUE-CHIMIE (SECONDE S - GABON)
    // -----------------------------------------------------------------
    {
      id: 'skill-2s-pc-mecanique1',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Mécanique : Mouvement, Vitesse & Équations Horaires (MRU)',
      description: 'Trajectoire, vitesse instantanée vi = Mi-1Mi+1 / (2τ), équations horaires x(t) = v·t + x0 et croisement de mobiles.',
      difficulty: 1,
      prerequisiteIds: [],
      masteryScore: 75,
      tier: 'Acquise',
      status: 'acquired',
      unit: '1. Mécanique : Cinématique',
      order: 1
    },
    {
      id: 'skill-2s-pc-mecanique2',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Mécanique : Forces, Poids P = m·g & Principe d\'Inertie',
      description: 'Centre d\'inertie G, poids P = m·g vs masse, principe d\'inertie (∑F = 0) et loi de Hooke (ressort T = k·Δl).',
      difficulty: 2,
      prerequisiteIds: ['skill-2s-pc-mecanique1'],
      masteryScore: 50,
      tier: 'Découverte',
      status: 'in_progress',
      unit: '1. Mécanique : Dynamique & Forces',
      order: 2
    },
    {
      id: 'skill-2s-pc-equilibre-forces',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Équilibre sous 2 ou 3 Forces Non Parallèles & Projections Trigonométriques',
      description: 'Conditions d\'équilibre (coplanaires, concourantes, ∑F = 0), polygone fermé des forces et projection trigonométrique sur plan incliné (Px = P·sin α, Py = -P·cos α, RN = P·cos α).',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-pc-mecanique2'],
      masteryScore: 20,
      tier: 'Découverte',
      status: 'in_progress',
      unit: '1. Mécanique : Statique & Équilibre',
      order: 3
    },
    {
      id: 'skill-2s-pc-theoreme-moments',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Rotation d\'un Solide & Théorème des Moments',
      description: 'Bras de levier d, moment d\'une force MΔ(F) = ±F·d, forces à moment nul, théorème des moments (∑MΔ = 0), équilibre de leviers et treuils.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-pc-equilibre-forces'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: '1. Mécanique : Statique & Équilibre',
      order: 4
    },
    {
      id: 'skill-2s-pc-electricite',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Électricité : Courant, Tension & Lois des Circuits',
      description: 'Sens conventionnel, mesure I (ampèremètre) et U (voltmètre), loi des nœuds, additivité et loi d\'Ohm U = R·I.',
      difficulty: 2,
      prerequisiteIds: [],
      masteryScore: 60,
      tier: 'Acquise',
      status: 'acquired',
      unit: '2. Électricité & Électronique',
      order: 5
    },
    {
      id: 'skill-2s-pc-optique',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Optique : Propagation, Réflexion & Réfraction (Snell-Descartes)',
      description: 'Propagation rectiligne, loi de réflexion r = i, loi de réfraction n1·sin(i1) = n2·sin(i2), réflexion totale et prisme.',
      difficulty: 3,
      prerequisiteIds: [],
      masteryScore: 20,
      tier: 'Découverte',
      status: 'in_progress',
      unit: '3. Optique Géométrique',
      order: 6
    },
    {
      id: 'skill-2s-pc-chimie-matiere',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Chimie : Matière, Corps Purs & Séparation',
      description: 'Mélanges homogènes/hétérogènes, corps purs, masse volumique ρ = m/V, filtration, décantation et distillation.',
      difficulty: 1,
      prerequisiteIds: [],
      masteryScore: 85,
      tier: 'Maîtrisée',
      status: 'mastered',
      unit: '4. Chimie : Matière & Corps',
      order: 7
    },
    {
      id: 'skill-2s-pc-chimie-atome',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Chimie : Structure de l\'Atome & Classification Périodique',
      description: 'Protons, neutrons, électrons, notation A/Z X, couches K, L, M, familles chimiques, isotopes et règle de l\'octet.',
      difficulty: 2,
      prerequisiteIds: ['skill-2s-pc-chimie-matiere'],
      masteryScore: 50,
      tier: 'Découverte',
      status: 'in_progress',
      unit: '5. Chimie : Structure de la Matière',
      order: 8
    },
    {
      id: 'skill-2s-pc-chimie-mole',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Chimie : Quantité de Matière, la Mole & Masses Molaires',
      description: 'Constante d\'Avogadro NA, relations fondamentales n = N/NA, n = m/M, volume molaire Vm et concentration molaire C = n/V.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-pc-chimie-atome'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: '6. Chimie : Quantité de Matière',
      order: 9
    },
    {
      id: 'skill-2s-pc-chimie-solutions',
      subjectId: 'physics',
      levelId: '2nde-s',
      name: 'Chimie : Transformations, Équations-Bilans & Solutions Aqueuses',
      description: 'Équilibrage stœchiométrique des réactions, échelle de pH, dilution, indicateurs colorés (BBT) et tests d\'ions métalliques.',
      difficulty: 4,
      prerequisiteIds: ['skill-2s-pc-chimie-mole'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: '7. Chimie : Réactions & Solutions',
      order: 10
    },

    // ==========================================
    // SVT SECONDE S (PROGRAMME OFFICIEL - GABON)
    // ==========================================
    // PARTIE 1 : EXPLOITATION DES RESSOURCES GÉOLOGIQUES ET ENVIRONNEMENT
    {
      id: 'skill-2s-svt-hydrocarbures',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Chapitre 1 : Exploitation des Gaz Naturels / Hydrocarbures et Environnement',
      description: 'Origine planctonique du pétrole, roche-mère, roche-réservoir, pièges géologiques à Port-Gentil, impact du torchage, marées noires et biostimulation.',
      difficulty: 2,
      prerequisiteIds: [],
      masteryScore: 75,
      tier: 'Acquise',
      status: 'acquired',
      unit: 'Partie 1 : Ressources Géologiques & Environnement',
      order: 11
    },
    {
      id: 'skill-2s-svt-minerais',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Chapitre 2 : Exploitation du Manganèse ou de l\'Uranium et Risques Environnementaux',
      description: 'Manganèse de Moanda (COMILOG), uranium de Mounana (COMUF), décapage à ciel ouvert, stériles, drainage minier acide et revégétalisation des plateaux.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-svt-hydrocarbures'],
      masteryScore: 50,
      tier: 'Découverte',
      status: 'in_progress',
      unit: 'Partie 1 : Ressources Géologiques & Environnement',
      order: 12
    },
    {
      id: 'skill-2s-svt-eau',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Chapitre 3 : Gestion des Ressources en Eau dans l\'Environnement',
      description: 'Nappe phréatique vs nappe captive, cycle de l\'eau et forêt équatoriale, étapes de potabilisation, orpaillage au mercure et normes de potabilité OMS.',
      difficulty: 2,
      prerequisiteIds: ['skill-2s-svt-hydrocarbures'],
      masteryScore: 30,
      tier: 'Découverte',
      status: 'in_progress',
      unit: 'Partie 1 : Ressources Géologiques & Environnement',
      order: 13
    },

    // PARTIE 2 : ÉDUCATION À LA SANTÉ SEXUELLE ET DE LA REPRODUCTION (ESSR)
    {
      id: 'skill-2s-svt-essr',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Chapitre 4 : Relations et Styles de Vie (ESSR)',
      description: 'Puberté, caractères sexuels secondaires, double protection par le préservatif, prévention des IST/VIH, contraception d\'urgence et protocole TPE sous 48h.',
      difficulty: 2,
      prerequisiteIds: [],
      masteryScore: 20,
      tier: 'Découverte',
      status: 'available',
      unit: 'Partie 2 : Santé Sexuelle & Reproduction (ESSR)',
      order: 14
    },

    // PARTIE 2 (suite) : COMMUNICATION CHEZ UN ANIMAL
    {
      id: 'skill-2s-svt-comm-nerveuse',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Chapitre 5 : La Communication Nerveuse',
      description: 'Neurone, potentiel d\'action (loi du tout ou rien), transmission synaptique par neurotransmetteurs, arc réflexe myotatique et blocage par le curare.',
      difficulty: 3,
      prerequisiteIds: [],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: 'Partie 2 (suite) : Communication chez un Animal',
      order: 15
    },
    {
      id: 'skill-2s-svt-comm-hormonale',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Chapitre 6 : La Communication Hormonale',
      description: 'Définition d\'une hormone, transport sanguin, régulation de la glycémie (insuline, glucagon), glycogénolyse hépatique et physiopathologie du diabète.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-svt-comm-nerveuse'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: 'Partie 2 (suite) : Communication chez un Animal',
      order: 16
    },

    // 2e TRIMESTRE - PARTIE 3 : FONCTION DE NUTRITION ET ORGANISATION CHEZ UN VÉGÉTAL
    {
      id: 'skill-2s-svt-photosynthese-cellule',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Chapitre 7 : La Cellule Chlorophyllienne, Usine Photosynthétique',
      description: 'Équation bilan 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, ultrastructure du chloroplaste, spectres d\'absorption de la chlorophylle, photolyse de l\'eau et autotrophie.',
      difficulty: 2,
      prerequisiteIds: [],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: '2e Trimestre - Partie 3 : Nutrition & Végétal',
      order: 17
    },
    {
      id: 'skill-2s-svt-approvisionnement-vegetal',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Chapitre 8 : L\'Approvisionnement des Cellules Chlorophylliennes',
      description: 'Zone pilifère et poils absorbants, stomates et échanges gazeux de CO₂, vaisseaux de xylème pour la sève brute et moteur d\'aspiration foliaire.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-svt-photosynthese-cellule'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: '2e Trimestre - Partie 3 : Nutrition & Végétal',
      order: 18
    },
    {
      id: 'skill-2s-svt-devenir-photosynthese',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Chapitre 9 : Le Devenir des Produits de la Photosynthèse',
      description: 'Conduction de la sève élaborée dans le phloème, réserves d\'amidon dans les tubercules de manioc (test Lugol), cellulose pariétale et lipides du palmier à huile.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-svt-approvisionnement-vegetal'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: '2e Trimestre - Partie 3 : Nutrition & Végétal',
      order: 19
    },
    {
      id: 'skill-2s-svt-methodologie-epreuve',
      subjectId: 'svt',
      levelId: '2nde-s',
      name: 'Méthodologie Épreuve Écrite SVT (Type 1 : ROC & Type 2 : Raisonnement sur Documents)',
      description: 'Normes officielles des examens de SVT au Gabon : [1] Sujet de Type 1 (Restitution Organisée de Connaissances - ROC, noté sur 6-7 pts) : texte argumenté avec introduction (accroche, définition des termes clés, problématique interrogative, annonce du plan), développement en 2-3 parties équilibrées étayé de schémas scientifiques titrés et légendés, conclusion (bilan et ouverture biologique/géologique). [2] Sujet de Type 2 (Raisonnement Scientifique sur Documents, noté sur 13-14 pts) : démarche scientifique rigoureuse avec analyse stricte (faits, citation précise des valeurs chiffrées avec unités, déductions immédiates), mise en relation croisée avec le cours, et synthèse finale / schéma fonctionnel récapitulatif.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-svt-hydrocarbures'],
      masteryScore: 40,
      tier: 'Découverte',
      status: 'in_progress',
      unit: 'Méthodologie Officielle Épreuve Écrite SVT (Type 1 & Type 2)',
      order: 20
    },

    // =========================================================================
    // HISTOIRE-GÉOGRAPHIE SECONDE (PROGRAMME OFFICIEL - GABON)
    // Thème : Les apports des grandes civilisations de la préhistoire à l’époque contemporaine
    // =========================================================================
    {
      id: 'skill-2s-hg-chap1-afrique',
      subjectId: 'history_geo',
      levelId: '2nde-s',
      name: 'Chapitre 1 : Les Apports de la Civilisation Africaine',
      description: 'Préhistoire en Afrique (berceau de l\'humanité, outillage, chasse, cueillette, sépultures, sites de la Lopé et de l\'Ogooué), découverte et métallurgie du fer, tradition orale (contes, mythes, Mvet, arbre à palabre, rites initiatiques gabonais : Bwiti, Ndjembe, Mwiri) et art traditionnel sacré (masques Okuyi punu, reliquaires Byeri fang et Kota).',
      difficulty: 2,
      prerequisiteIds: [],
      masteryScore: 60,
      tier: 'Découverte',
      status: 'in_progress',
      unit: 'Thème : Grandes Civilisations de la Préhistoire à nos Jours',
      order: 21
    },
    {
      id: 'skill-2s-hg-chap2-antiques',
      subjectId: 'history_geo',
      levelId: '2nde-s',
      name: 'Chapitre 2 : Les Apports des Civilisations Antiques',
      description: 'Vie scientifique et architecturale de l\'Égypte antique (crues du Nil, géométrie appliquée, papyrus, pyramides), fonctionnement de la démocratie athénienne (Ecclésia, tirage au sort, misthos, ostracisme et limites), vie intellectuelle grecque (philosophie, théâtre, Jeux Olympiques) et institutions de la République romaine (Sénat, tribuns, droit écrit de la Table des XII Lois).',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-hg-chap1-afrique'],
      masteryScore: 40,
      tier: 'Découverte',
      status: 'in_progress',
      unit: 'Thème : Grandes Civilisations de la Préhistoire à nos Jours',
      order: 22
    },
    {
      id: 'skill-2s-hg-chap4-medievales',
      subjectId: 'history_geo',
      levelId: '2nde-s',
      name: 'Chapitre 4 : Les Apports des Grandes Civilisations Médiévales',
      description: 'Rôle régulateur de l\'Église dans la société européenne (sacrements, Paix et Trêve de Dieu, scriptoriums des monastères bénédictins, fondation des premières universités), sciences, techniques, médecine et commerce transsaharien arabo-musulman, et l\'œuvre des humanistes de la Renaissance (nouvelle vision de l\'Homme, imprimerie de Gutenberg, esprit critique).',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-hg-chap2-antiques'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: 'Thème : Grandes Civilisations de la Préhistoire à nos Jours',
      order: 23
    },
    {
      id: 'skill-2s-hg-chap5-modernes',
      subjectId: 'history_geo',
      levelId: '2nde-s',
      name: 'Chapitre 5 : Les Apports des Civilisations Modernes & Contemporaines Occidentales',
      description: 'Avancées scientifiques et techniques des 4 révolutions industrielles (vapeur et charbon, électricité et pétrole, informatique, transition numérique et IA), principes démocratiques issus des révolutions occidentales (séparation des trois pouvoirs selon Montesquieu, souveraineté nationale) et promotion universelle des droits humains (DDHC 1789 et DUDH 1948).',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-hg-chap4-medievales'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'available',
      unit: 'Thème : Grandes Civilisations de la Préhistoire à nos Jours',
      order: 24
    },
    {
      id: 'skill-2s-hg-dissertation-methode',
      subjectId: 'history_geo',
      levelId: '2nde-s',
      name: 'Méthodologie : Dissertation & Composition (Normes Officielles Gabon)',
      description: 'Normes strictes de l\'inspection générale d\'Histoire-Géo du Gabon (Sujet Type 1) : [1] Introduction en 3 paragraphes obligatoires avec retour à la ligne (amorce précise sans hors-sujet, problématique centrale et unique, annonce concise du plan en 2 ou 3 parties) ; [2] Développement (phrase chapeau inaugurale, arguments structurés avec connecteur logique + explication + exemple précis, paragraphe de transition) ; [3] Conclusion après saut d\'une ligne (bilan synthétique répondant à la problématique et ouverture vers la leçon suivante), appliquée aux chapitres d\'histoire au programme.',
      difficulty: 3,
      prerequisiteIds: ['skill-2s-hg-chap1-afrique'],
      masteryScore: 35,
      tier: 'Découverte',
      status: 'in_progress',
      unit: 'Méthodologie Officielle : Dissertation & Composition (Sujet Type 1)',
      order: 25
    }
  ],

  '1ere-s': [...PREMIERE_S_MATH_SKILLS, ...PREMIERE_S_PHYSICS_SKILLS],

  'term-c': [
    {
      id: 'skill-m1',
      subjectId: 'math',
      levelId: 'term-c',
      name: 'Fonctions et Limites',
      description: 'Calcul de limites, asymptotes et continuité des fonctions numériques.',
      difficulty: 2,
      prerequisiteIds: [],
      masteryScore: 88,
      tier: 'Maîtrisée',
      status: 'mastered',
      unit: 'Unité 1 : Analyse',
      order: 1
    },
    {
      id: 'skill-m2',
      subjectId: 'math',
      levelId: 'term-c',
      name: 'Dérivabilité et Convexité',
      description: 'Théorème des accroissements finis et étude des points d’inflexion.',
      difficulty: 3,
      prerequisiteIds: ['skill-m1'],
      masteryScore: 72,
      tier: 'Acquise',
      status: 'acquired',
      unit: 'Unité 1 : Analyse',
      order: 2
    },
    {
      id: 'skill-m3',
      subjectId: 'math',
      levelId: 'term-c',
      name: 'Fonctions Logarithme et Exponentielle',
      description: 'Propriétés algébriques, équations différentielles y\' = ay + b.',
      difficulty: 3,
      prerequisiteIds: ['skill-m2'],
      masteryScore: 48,
      tier: 'En cours',
      status: 'in_progress',
      unit: 'Unité 1 : Analyse',
      order: 3
    },
    {
      id: 'skill-m4',
      subjectId: 'math',
      levelId: 'term-c',
      name: 'Calcul Intégral et Primitives',
      description: 'Intégration par parties, calcul d’aires et valeurs moyennes.',
      difficulty: 4,
      prerequisiteIds: ['skill-m3'],
      masteryScore: 18,
      tier: 'Découverte',
      status: 'available',
      unit: 'Unité 2 : Intégration',
      order: 4
    },
    {
      id: 'skill-m5',
      subjectId: 'math',
      levelId: 'term-c',
      name: 'Nombres Complexes & Géométrie',
      description: 'Forme trigonométrique, exponentielle, transformations du plan.',
      difficulty: 4,
      prerequisiteIds: ['skill-m2'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'locked',
      unit: 'Unité 3 : Algèbre',
      order: 5
    },
    {
      id: 'skill-m6',
      subjectId: 'math',
      levelId: 'term-c',
      name: 'Arithmétique dans Z & Congruences',
      description: 'Théorème de Bézout, Gauss, applications cryptographiques (spécialité C).',
      difficulty: 5,
      prerequisiteIds: ['skill-m5'],
      masteryScore: 0,
      tier: 'Non commencée',
      status: 'locked',
      unit: 'Unité 3 : Algèbre',
      order: 6
    }
  ],

  'term-d': [
    {
      id: 'skill-td-1',
      subjectId: 'svt',
      levelId: 'term-d',
      name: 'Génétique & Brassages Chromosomiques',
      description: 'Méiose, fécondation, anomalies chromosomiques et monohybridisme/dihybridisme.',
      difficulty: 3,
      prerequisiteIds: [],
      masteryScore: 82,
      tier: 'Maîtrisée',
      status: 'mastered',
      unit: 'Unité 1 : Génétique',
      order: 1
    },
    {
      id: 'skill-td-2',
      subjectId: 'svt',
      levelId: 'term-d',
      name: 'Immunologie & Défense de l’Organisme',
      description: 'Réponse immunitaire innée et adaptative, anticorps, vaccins et SIDA.',
      difficulty: 3,
      prerequisiteIds: ['skill-td-1'],
      masteryScore: 64,
      tier: 'Acquise',
      status: 'acquired',
      unit: 'Unité 2 : Immunité',
      order: 2
    },
    {
      id: 'skill-td-3',
      subjectId: 'svt',
      levelId: 'term-d',
      name: 'Régulation Nerveuse & Hormonale',
      description: 'Potentiel d’action, synapses chimiques, régulation de la pression artérielle et glycémie.',
      difficulty: 4,
      prerequisiteIds: ['skill-td-2'],
      masteryScore: 40,
      tier: 'En cours',
      status: 'in_progress',
      unit: 'Unité 3 : Physiologie',
      order: 3
    },
    {
      id: 'skill-td-4',
      subjectId: 'math',
      levelId: 'term-d',
      name: 'Probabilités & Variables Aléatoires',
      description: 'Lois discrètes, loi binomiale, espérance et variance en biologie.',
      difficulty: 4,
      prerequisiteIds: [],
      masteryScore: 15,
      tier: 'Découverte',
      status: 'available',
      unit: 'Unité 4 : Mathématiques Appliquées',
      order: 4
    }
  ]
};

export const INITIAL_SKILLS: SkillNode[] = CLASS_SKILLS_DATA['term-c'];


export { SKILL_QUESTIONS_MAP } from './axiomQuestions';
import { SKILL_QUESTIONS_MAP, SECONDE_REELS_QUESTIONS } from './axiomQuestions';

export const SAMPLE_QUESTIONS: ExerciseQuestion[] = SECONDE_REELS_QUESTIONS;

export const INITIAL_BADGES: BadgeItem[] = [
  {
    id: 'b1',
    name: 'Flamme Gabon',
    condition: 'Maintenir une série active de 7 jours consécutifs.',
    icon: 'Flame',
    unlocked: true,
    unlockedAt: '2026-09-02',
    category: 'streak'
  },
  {
    id: 'b2',
    name: 'Premier Sommet',
    condition: 'Atteindre le palier "Maîtrisée" (>= 80%) sur une compétence.',
    icon: 'Award',
    unlocked: true,
    unlockedAt: '2026-09-04',
    category: 'mastery'
  },
  {
    id: 'b3',
    name: 'Centurion d’Or',
    condition: 'Accumuler 1 000 XP en Mathématiques.',
    icon: 'Zap',
    unlocked: false,
    category: 'xp'
  },
  {
    id: 'b4',
    name: 'Génie du BAC C',
    condition: 'Réussir une épreuve blanche avec un score >= 95% (Excellence).',
    icon: 'Crown',
    unlocked: false,
    category: 'exam'
  }
];

export function getTierFromScore(score: number): MasteryTier {
  if (score <= 0) return 'Non commencée';
  if (score < 40) return 'Découverte';
  if (score < 60) return 'En cours';
  if (score < 80) return 'Acquise';
  if (score < 95) return 'Maîtrisée';
  return 'Excellence';
}

export function getTierColor(tier: MasteryTier): { bg: string; text: string; border: string } {
  switch (tier) {
    case 'Non commencée':
      return { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-300' };
    case 'Découverte':
      return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-300' };
    case 'En cours':
      return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-300' };
    case 'Acquise':
      return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-300' };
    case 'Maîtrisée':
      return { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-400' };
    case 'Excellence':
      return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-400' };
  }
}
