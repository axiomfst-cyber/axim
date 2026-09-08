import { ExerciseQuestion } from '../types';

// ==========================================
// 1. PHYSIQUE - A. MÉCANIQUE I : MOUVEMENT & VITESSE
// ==========================================
export const SECONDE_MECANIQUE_1_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-meca1-1',
    exerciseId: 'ex-pc-meca1-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Trajectoire & Référentiel)',
    microConcept: 'La trajectoire est l\'ensemble des positions successives occupées par un point mobile au cours du temps. Elle dépend du référentiel choisi (ex: terrestre, géocentrique). Si elle forme une ligne droite, le mouvement est dit rectiligne.',
    hint: 'Regarde la forme géométrique dessinée par les positions successives du point.',
    prompt: 'Quelle est la définition exacte de la trajectoire d\'un point matériel ?',
    options: [
      'L\'ensemble des positions successives occupées par le point au cours du temps',
      'La distance totale parcourue divisée par la durée du parcours',
      'Le vecteur vitesse instantanée en un point donné',
      'La durée exacte nécessaire pour faire un tour complet'
    ],
    correctAnswer: 'L\'ensemble des positions successives occupées par le point au cours du temps',
    commonMistake: 'Confondre la trajectoire (la forme géométrique du chemin suivi) avec la distance parcourue ou la vitesse.',
    explanation: 'La trajectoire est la ligne continue ou l\'ensemble géométrique formé par les positions successives du point mobile dans le référentiel d\'étude.',
    steps: [
      '1. On observe le déplacement du mobile par rapport à un observateur (référentiel).',
      '2. On relie mentalement les positions occupées à chaque instant t.',
      '3. La courbe ou droite ainsi obtenue est la trajectoire.'
    ]
  },
  {
    id: 'q-2s-pc-meca1-2',
    exerciseId: 'ex-pc-meca1-2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Conversion km/h en m/s)',
    microConcept: 'Dans le Système International (SI), la vitesse s\'exprime en mètres par seconde (m/s). Pour passer des km/h aux m/s, on divise par 3,6 (car 1 km = 1000 m et 1 h = 3600 s ; 1000/3600 = 1/3,6).',
    hint: 'Divise 72 par 3,6 : 72 / 3,6 = 720 / 36.',
    prompt: 'Un véhicule roule sur la voie express de Libreville à une vitesse constante de 72 km/h. Quelle est sa vitesse en m/s ? (Entrer un nombre entier)',
    correctAnswer: 20,
    commonMistake: 'Multiplier par 3,6 au lieu de diviser, ce qui donnerait 259,2 m/s (valeur irréaliste de plus de 900 km/h !).',
    explanation: 'v (m/s) = 72 / 3,6 = 20 m/s. Cela signifie que la voiture parcourt 20 mètres à chaque seconde.',
    steps: [
      '1. Formule de conversion : v (m/s) = v (km/h) / 3,6.',
      '2. Calcul : 72 / 3,6 = 20.',
      '3. La vitesse est de 20 m/s.'
    ]
  },
  {
    id: 'q-2s-pc-meca1-3',
    exerciseId: 'ex-pc-meca1-3',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Vitesse instantanée sur enregistrement)',
    microConcept: 'Sur un enregistrement à intervalles de temps réguliers τ (tau), la valeur approchée de la vitesse instantanée au point M_i est donnée par la formule : v_i = (M_{i-1} M_{i+1}) / (2τ).',
    hint: 'Attention aux unités : convertis 8 cm en mètres (0,08 m) et 40 ms en secondes (0,04 s). Calcule ensuite 2 * τ = 0,08 s.',
    prompt: 'Sur un enregistrement sur table à coussin d\'air, l\'intervalle de temps entre deux marquages successifs est τ = 40 ms. La distance mesurée entre M₂ et M₄ est de 8 cm. Quelle est la vitesse instantanée v₃ au point M₃ en m/s ?',
    correctAnswer: 1,
    commonMistake: 'Oublier le facteur 2 au dénominateur (diviser par τ au lieu de 2τ) ou oublier de convertir les centimètres en mètres.',
    explanation: 'Distance M₂M₄ = 8 cm = 0,08 m. Durée Δt = 2τ = 2 × 0,04 s = 0,08 s. Donc v₃ = 0,08 / 0,08 = 1,0 m/s.',
    steps: [
      '1. Convertir la distance : d = 8 cm = 0,08 m.',
      '2. Convertir l\'intervalle : τ = 40 ms = 0,04 s, donc 2τ = 0,08 s.',
      '3. Appliquer la formule : v₃ = M₂M₄ / (2τ) = 0,08 / 0,08 = 1 m/s.'
    ]
  },
  {
    id: 'q-2s-pc-meca1-4',
    exerciseId: 'ex-pc-meca1-4',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Équation Horaire du Mouvement Rectiligne Uniforme)',
    microConcept: 'Pour un mouvement rectiligne uniforme (MRU), la vitesse v est constante et l\'équation horaire de la position s\'écrit : x(t) = v · t + x₀, où v est la vitesse algébrique (en m/s), t la date (en s) et x₀ l\'abscisse initiale à la date t = 0 (en m).',
    hint: 'Remplace v par 15, t par 10 et x₀ par 50 dans la formule x(t) = v · t + x₀.',
    prompt: 'Un véhicule roule en mouvement rectiligne uniforme à la vitesse constante v = 15 m/s. À l\'instant initial t = 0 s, son abscisse est x₀ = 50 m. Quelle sera sa position x (en mètres) à la date t = 10 s ? (Entrer un nombre entier)',
    correctAnswer: 200,
    commonMistake: 'Calculer simplement v · t = 150 m en oubliant d\'ajouter l\'abscisse initiale x₀ = 50 m.',
    explanation: 'x(t) = v · t + x₀. À la date t = 10 s, on a : x(10) = (15 m/s × 10 s) + 50 m = 150 + 50 = 200 m.',
    steps: [
      '1. Équation horaire générale du MRU : x(t) = v · t + x₀.',
      '2. Distance parcourue depuis l\'origine des temps : d = v · t = 15 × 10 = 150 m.',
      '3. Prise en compte de la position de départ : x(10) = 150 + 50 = 200 m.'
    ]
  },
  {
    id: 'q-2s-pc-meca1-5',
    exerciseId: 'ex-pc-meca1-5',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Croisement de Deux Mobiles & Résolution Horaire)',
    microConcept: 'Deux mobiles A et B se croisent à la date t_rencontre où ils occupent exactement la même position sur l\'axe : x_A(t) = x_B(t). Si B roule en sens inverse vers l\'origine, sa vitesse algébrique est négative (v_B < 0).',
    hint: 'Écris x_A(t) = 20·t et x_B(t) = -30·t + 1000. Résous l\'équation x_A(t) = x_B(t) : 20t = -30t + 1000, soit 50t = 1000.',
    prompt: 'Sur une portion rectiligne de route de 1000 m, deux voitures A et B partent au même instant t = 0 s : la voiture A part de l\'origine (x₀_A = 0 m) vers la droite à v_A = 20 m/s. La voiture B part de l\'autre bout (x₀_B = 1000 m) et roule en sens inverse à v_B = 30 m/s (vitesse algébrique -30 m/s). À quelle date t (en secondes) les deux véhicules se croisent-ils ?',
    correctAnswer: 20,
    commonMistake: 'Soustraire les vitesses au lieu de les additionner (croire que le temps est 1000 / (30 - 20) = 100 s alors qu\'ils se rapprochent à 50 m/s !).',
    explanation: 'Équations horaires : x_A(t) = 20·t et x_B(t) = -30·t + 1000. Au croisement : x_A(t) = x_B(t) <=> 20t = -30t + 1000 <=> 50t = 1000 <=> t = 20 s. Les deux voitures se croisent au bout de 20 secondes (à l\'abscisse x = 20 × 20 = 400 m).',
    steps: [
      '1. Équation horaire de A : x_A(t) = v_A · t + x₀_A = 20t + 0 = 20t.',
      '2. Équation horaire de B (sens opposé) : x_B(t) = -30t + 1000.',
      '3. Condition de croisement : x_A(t) = x_B(t) => 20t = -30t + 1000.',
      '4. Regroupement : 50t = 1000 => t = 1000 / 50 = 20 s.'
    ]
  }
];

// ==========================================
// 2. PHYSIQUE - A. MÉCANIQUE II : FORCES & PRINCIPE D'INERTIE
// ==========================================
export const SECONDE_MECANIQUE_2_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-meca2-1',
    exerciseId: 'ex-pc-meca2-1',
    type: 'true_false',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Masse vs Poids)',
    microConcept: 'La masse (en kg) mesure la quantité de matière contenue dans un corps : elle est invariable quel que soit le lieu (sur Terre, sur la Lune ou dans l\'espace). Le poids P⃗ (en Newtons, N) est la force d\'attraction gravitationnelle exercée par la Terre (P = m · g) et varie avec l\'astre et l\'altitude.',
    hint: 'La masse change-t-elle si un astronaute va sur la Lune ? Non, sa quantité de matière reste identique !',
    prompt: 'La masse d\'un objet est une grandeur invariante qui ne change pas lorsqu\'on déplace cet objet de la Terre vers la Lune.',
    options: [
      'Vrai (la masse est constante, seul le poids change avec la gravité g)',
      'Faux (la masse diminue par 6 sur la Lune)'
    ],
    correctAnswer: 'Vrai (la masse est constante, seul le poids change avec la gravité g)',
    commonMistake: 'Confondre le langage courant ("je pèse 60 kg") avec le langage physique (la masse est de 60 kg, le poids est d\'environ 600 N).',
    explanation: 'La masse m (kg) est intrinsèque à l\'objet. Le poids P = m · g (N) varie car l\'intensité de la pesanteur sur la Lune (g_Lune ≈ 1,6 N/kg) est 6 fois plus faible que sur Terre (g_Terre ≈ 9,8 N/kg).',
    steps: [
      '1. La masse représente la quantité de matière (en kg). Elle est constante.',
      '2. Le poids P = m · g dépend du champ gravitationnel g.',
      '3. Donc l\'affirmation est vraie.'
    ]
  },
  {
    id: 'q-2s-pc-meca2-2',
    exerciseId: 'ex-pc-meca2-2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Calcul du poids P = m · g)',
    microConcept: 'Relation du poids : P = m · g avec m en kilogrammes (kg), g en Newtons par kilogramme (N/kg ou m/s²), et P en Newtons (N). Attention : 500 g = 0,5 kg.',
    hint: 'Convertis 500 grammes en kilogrammes : 500 g = 0,5 kg. Multiplie ensuite par g = 10 N/kg.',
    prompt: 'À Libreville, l\'intensité de la pesanteur vaut environ g = 9,8 N/kg (arrondie à 10 N/kg pour ce calcul). Quel est le poids P (en Newtons) d\'un manuel scolaire de masse m = 500 g ?',
    correctAnswer: 5,
    commonMistake: 'Multiplier directement 500 par 10 sans convertir en kg, ce qui donnerait un poids absurde de 5000 N (le poids d\'une demi-tonne !).',
    explanation: 'm = 500 g = 0,5 kg. P = m · g = 0,5 kg × 10 N/kg = 5 N.',
    steps: [
      '1. Conversion de la masse : m = 500 g = 500 / 1000 = 0,5 kg.',
      '2. Application de la relation : P = m · g = 0,5 × 10 = 5 N.',
      '3. Le poids est de 5 N.'
    ]
  },
  {
    id: 'q-2s-pc-meca2-3',
    exerciseId: 'ex-pc-meca2-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Principe d\'inertie - 1ère loi de Newton)',
    microConcept: 'Principe d\'inertie : Dans un référentiel galiléen, si la somme vectorielle des forces extérieures exercées sur un solide est nulle (forces qui se compensent, ∑ F⃗ = 0⃗), alors son centre d\'inertie G est soit AU REPOS (immobile), soit animé d\'un MOUVEMENT RECTILIGNE UNIFORME.',
    hint: 'Si aucune force ne s\'exerce ou si elles se compensent, la vitesse ne change ni en valeur ni en direction.',
    prompt: 'Un palet de curling glisse sur une glace parfaitement horizontale sans aucun frottement. Les seules forces sont son poids P⃗ et la réaction R⃗ de la glace (qui se compensent : P⃗ + R⃗ = 0⃗). Quel est le mouvement du centre d\'inertie du palet ?',
    options: [
      'Il s\'arrête immédiatement',
      'Mouvement rectiligne uniforme à vitesse constante',
      'Mouvement rectiligne accéléré',
      'Mouvement circulaire uniforme'
    ],
    correctAnswer: 'Mouvement rectiligne uniforme à vitesse constante',
    commonMistake: 'L\'intuition aristotélicienne erronée selon laquelle il faudrait "une force motrice permanente" pour maintenir un mouvement. Sans frottement et avec ∑F⃗ = 0⃗, le mouvement continue indéfiniment en ligne droite à vitesse constante.',
    explanation: 'D\'après le principe d\'inertie, comme les forces se compensent (P⃗ + R⃗ = 0⃗) et que le palet est initialement lancé, il poursuit son déplacement en mouvement rectiligne uniforme.',
    steps: [
      '1. Bilan des forces : Poids P⃗ (vertical vers le bas), Réaction R⃗ (verticale vers le haut).',
      '2. Somme des forces : P⃗ + R⃗ = 0⃗ (forces qui se compensent).',
      '3. En vertu du principe d\'inertie, le mouvement est rectiligne uniforme.'
    ]
  },
  {
    id: 'q-2s-pc-meca2-4',
    exerciseId: 'ex-pc-meca2-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Équilibre d\'un solide soumis à deux forces)',
    microConcept: 'Conditions d\'équilibre sous deux forces F⃗₁ et F⃗₂ : Les deux forces doivent avoir la MÊME ligne d\'action (droite d\'action commune), des SENS OPPOSÉS, et la MÊME INTENSITÉ (F₁ = F₂), ce qui se traduit vectoriellement par : F⃗₁ + F⃗₂ = 0⃗.',
    hint: 'Que doivent valoir la somme des vecteurs et la direction de leurs droites d\'action ?',
    prompt: 'Un objet suspendu à un fil vertical est immobile à l\'équilibre. Quelles sont les conditions satisfaites par la tension du fil T⃗ et le poids P⃗ ?',
    options: [
      'Même droite d\'action verticale, sens opposés et même intensité (T⃗ + P⃗ = 0⃗)',
      'Droites d\'action perpendiculaires et intensités quelconques',
      'Même sens vers le bas et intensités différentes',
      'Tension deux fois plus grande que le poids'
    ],
    correctAnswer: 'Même droite d\'action verticale, sens opposés et même intensité (T⃗ + P⃗ = 0⃗)',
    commonMistake: 'Oublier la condition sur la droite d\'action : deux forces opposées en valeur mais décalées formeraient un couple et feraient tourner l\'objet !',
    explanation: 'Pour qu\'un solide soumis à 2 forces soit en équilibre statique, les deux forces doivent être directement opposées : même droite support, sens inverses et normes égales.',
    steps: [
      '1. L\'objet est immobile : la somme vectorielle des forces est nulle T⃗ + P⃗ = 0⃗.',
      '2. Donc T⃗ = -P⃗, ce qui implique même direction verticale et sens opposés.',
      '3. Les intensités sont strictement égales : T = P.'
    ]
  },
  {
    id: 'q-2s-pc-meca2-5',
    exerciseId: 'ex-pc-meca2-5',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Loi de Hooke & Raideur d\'un ressort)',
    microConcept: 'La tension d\'un ressort à spires non jointives est T = k · |Δl| = k · (l - l₀), où k est la constante de raideur en N/m, et Δl est l\'allongement en mètres. À l\'équilibre vertical : T = P = m · g.',
    hint: 'À l\'équilibre vertical, T = P = m · g = 0,2 kg × 10 N/kg = 2 N. On a T = k · Δl, donc k = T / Δl. Attention : Δl = 4 cm = 0,04 m.',
    prompt: 'On suspend une masse m = 200 g (soit 0,2 kg) à un ressort vertical. À l\'équilibre, le ressort s\'allonge de Δl = 4 cm. On prend g = 10 N/kg. Quelle est la raideur k du ressort en N/m ?',
    correctAnswer: 50,
    commonMistake: 'Calculer 2 / 4 sans convertir les centimètres en mètres, ce qui donnerait 0,5 N/m au lieu de 50 N/m.',
    explanation: 'P = m · g = 0,2 × 10 = 2 N. À l\'équilibre, T = P = 2 N. Allongement Δl = 4 cm = 0,04 m. Raideur k = T / Δl = 2 / 0,04 = 50 N/m.',
    steps: [
      '1. Calcul du poids : P = 0,2 kg × 10 N/kg = 2 N.',
      '2. À l\'équilibre statique : T = P = 2 N.',
      '3. Conversion de l\'allongement : Δl = 4 cm = 0,04 m.',
      '4. Calcul de k : k = T / Δl = 2 / 0,04 = 50 N/m.'
    ]
  }
];

// ==========================================
// 2-B. PHYSIQUE - MÉCANIQUE : ÉQUILIBRE SOUS 2 OU 3 FORCES NON PARALLÈLES & PROJECTIONS
// ==========================================
export const SECONDE_EQUILIBRE_FORCES_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-eqf-1',
    exerciseId: 'ex-pc-eqf-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Conditions d\'équilibre sous 3 forces non parallèles)',
    microConcept: 'Pour qu\'un solide soumis à trois forces non parallèles F⃗₁, F⃗₂, F⃗₃ soit en équilibre statique, trois conditions doivent être réunies : les forces sont COPLANAIRES (dans un même plan), leurs droites d\'action sont CONCOURANTES (se coupent en un même point I), et leur somme vectorielle est nulle : F⃗₁ + F⃗₂ + F⃗₃ = 0⃗ (polygone des forces fermé).',
    hint: 'Pense aux propriétés géométriques des droites d\'action et à la somme vectorielle nécessaire pour annuler l\'accélération.',
    prompt: 'Quelles sont les conditions indispensables pour qu\'un solide soumis à trois forces non parallèles soit en équilibre statique ?',
    options: [
      'Les trois forces sont coplanaires, leurs droites d\'action sont concourantes en un même point, et F⃗₁ + F⃗₂ + F⃗₃ = 0⃗',
      'Les forces doivent être strictement parallèles et orientées dans le même sens',
      'Les forces doivent être perpendiculaires deux à deux et de même intensité',
      'Deux forces suffisent à créer un mouvement sans que la troisième n\'intervienne'
    ],
    correctAnswer: 'Les trois forces sont coplanaires, leurs droites d\'action sont concourantes en un même point, et F⃗₁ + F⃗₂ + F⃗₃ = 0⃗',
    commonMistake: 'Oublier la condition de concourance des droites d\'action : si les forces ne concourent pas au même point, le solide tournerait sous l\'effet d\'un couple résiduel !',
    explanation: 'L\'équilibre statique impose que le solide ne translate pas (∑F⃗ = 0⃗) et ne tourne pas. Les droites d\'action de 3 forces non parallèles doivent donc impérativement concourir en un point commun et se trouver dans un même plan.',
    steps: [
      '1. Absence de rotation : les droites d\'action concourent en un même point I (ou sont parallèles).',
      '2. Forces coplanaires : elles appartiennent au plan formé par deux d\'entre elles.',
      '3. Absence de translation : la ligne polygonale formée par les 3 vecteurs forces mis bout à bout est un triangle fermé (F⃗₁ + F⃗₂ + F⃗₃ = 0⃗).'
    ]
  },
  {
    id: 'q-2s-pc-eqf-2',
    exerciseId: 'ex-pc-eqf-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Décomposition Trigonométrique du Poids sur Plan Incliné',
    microConcept: 'Sur un plan incliné d\'un angle α par rapport à l\'horizontale, le poids P⃗ (vertical descendant) se décompose dans le repère lié à la pente (axe Ox le long de la pente vers le bas, axe Oy perpendiculaire au plan vers le haut) : P_x = +P · sin(α) (force motrice) et P_y = -P · cos(α) (force pressante).',
    hint: 'Regarde le triangle rectangle formé par le vecteur poids et ses composantes : le côté opposé à l\'angle α correspond à la pente (Ox), donc fait intervenir le sinus !',
    prompt: 'Un solide de poids P glisse sur une piste inclinée d\'un angle α par rapport à l\'horizontale. L\'axe (Ox) est choisi parallèle à la pente et orienté vers le bas. Quelle est l\'expression de la composante P_x du poids le long de cet axe ?',
    options: [
      'P_x = P · sin(α)',
      'P_x = P · cos(α)',
      'P_x = P · tan(α)',
      'P_x = P / cos(α)'
    ],
    correctAnswer: 'P_x = P · sin(α)',
    commonMistake: 'Confondre le cosinus et le sinus : comme l\'angle α du plan incliné est mesuré par rapport à l\'horizontale, l\'angle entre P⃗ et la normale au plan vaut également α. Le côté opposé le long de la pente utilise donc le sinus.',
    explanation: 'Dans le triangle des forces, l\'angle α se retrouve entre la verticale du poids et la perpendiculaire à la pente. La projection sur la pente est le côté opposé, donc P_x = P · sin(α).',
    steps: [
      '1. Le poids P⃗ est vertical descendant.',
      '2. L\'axe (Ox) est incliné de α par rapport à l\'horizontale.',
      '3. Par la géométrie des angles à côtés perpendiculaires, l\'angle entre P⃗ et l\'axe (Oy) est égal à α.',
      '4. Composante parallèle à la pente : P_x = P · sin(α).'
    ]
  },
  {
    id: 'q-2s-pc-eqf-3',
    exerciseId: 'ex-pc-eqf-3',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Calcul Numérique de la Composante Motrice P_x',
    microConcept: 'Formule de calcul : P_x = P · sin(α) = m · g · sin(α). Rappel des valeurs trigonométriques remarquables : sin(30°) = 0,5 ; sin(45°) = √2/2 ≈ 0,707 ; sin(60°) = √3/2 ≈ 0,866.',
    hint: 'Calcule d\'abord P = m · g = 20 × 10 = 200 N. Puis multiplie par sin(30°) = 0,5.',
    prompt: 'Une caisse de masse m = 20 kg repose sur une rampe de chargement inclinée d\'un angle α = 30° par rapport à l\'horizontale. On prend g = 10 N/kg. Sachant que sin(30°) = 0,5, quelle est la valeur de la composante tangentielle P_x du poids (en Newtons) qui tend à faire glisser la caisse vers le bas ? (Entrer un nombre entier)',
    correctAnswer: 100,
    commonMistake: 'Prendre cos(30°) ≈ 0,866 au lieu de sin(30°) = 0,5 pour la composante le long de la pente.',
    explanation: 'Poids P = m · g = 20 kg × 10 N/kg = 200 N. Composante motrice P_x = P · sin(30°) = 200 × 0,5 = 100 N.',
    steps: [
      '1. Calcul du poids total : P = 20 kg × 10 N/kg = 200 N.',
      '2. Formule de projection sur la pente : P_x = P · sin(30°).',
      '3. Calcul numérique : P_x = 200 × 0,5 = 100 N.'
    ]
  },
  {
    id: 'q-2s-pc-eqf-4',
    exerciseId: 'ex-pc-eqf-4',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Équilibre Statique sur Plan Incliné sans Frottement (Tension du Câble)',
    microConcept: 'Solide en équilibre sans frottement retenu par un câble parallèle au plan : les forces appliquées sont le Poids P⃗, la Réaction normale R_N⃗ et la Tension T⃗ du câble. La condition d\'équilibre vectoriel est P⃗ + R_N⃗ + T⃗ = 0⃗. En projetant sur l\'axe (Ox) parallèle au plan : P_x - T = 0 <=> T = P · sin(α).',
    hint: 'À l\'équilibre sans frottement, la tension T du câble compense exactement la composante du poids parallèle à la pente : T = P · sin(α).',
    prompt: 'Un wagonnet de poids P = 600 N est maintenu immobile sur des rails inclinés d\'un angle α = 30° à l\'aide d\'un câble tendu parallèlement aux rails. Les frottements sont négligeables et sin(30°) = 0,5. Quelle est la tension T (en Newtons) exercée par le câble sur le wagonnet ? (Entrer un nombre entier)',
    correctAnswer: 300,
    commonMistake: 'Penser que la tension du câble doit égaler tout le poids (600 N) comme si le wagonnet était suspendu verticalement, en oubliant que le support porte une partie du poids.',
    explanation: 'Bilan des forces : P⃗ + R_N⃗ + T⃗ = 0⃗. Projection sur l\'axe (Ox) le long de la pente orienté vers le haut : T - P · sin(α) = 0 => T = P · sin(30°) = 600 × 0,5 = 300 N.',
    steps: [
      '1. Système : le wagonnet en équilibre statique.',
      '2. Bilan des forces extérieures : P⃗ (poids), R_N⃗ (réaction normale perpendiculaire au rail), T⃗ (tension du câble le long du rail).',
      '3. Projection sur la direction des rails : T - P · sin(α) = 0.',
      '4. Tension nécessaire : T = 600 × sin(30°) = 600 × 0,5 = 300 N.'
    ]
  },
  {
    id: 'q-2s-pc-eqf-5',
    exerciseId: 'ex-pc-eqf-5',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Réaction Normale du Support R_N = P · cos α)',
    microConcept: 'Projection sur l\'axe perpendiculaire (Oy) au plan incliné : la réaction normale R_N compense la composante normale du poids P_y = -P · cos(α). Ainsi, R_N - P · cos(α) = 0 <=> R_N = P · cos(α). Rappel : cos(60°) = 0,5.',
    hint: 'Applique la projection sur l\'axe (Oy) : R_N = P · cos(α). Ici P = 400 N et α = 60°, avec cos(60°) = 0,5.',
    prompt: 'Un solide de poids P = 400 N repose en équilibre sur un plan incliné d\'un angle α = 60° par rapport à l\'horizontale. Quelle est l\'intensité de la réaction normale R_N (en Newtons) exercée par le plan sur le solide ? (Sachant que cos(60°) = 0,5)',
    correctAnswer: 200,
    commonMistake: 'Utiliser le sinus au lieu du cosinus pour la réaction normale au plan.',
    explanation: 'Le solide ne s\'enfonce pas dans le plan incliné, donc la somme des forces suivant la normale est nulle : R_N - P · cos(α) = 0 => R_N = P · cos(60°) = 400 × 0,5 = 200 N.',
    steps: [
      '1. Projection sur l\'axe orthogonal au plan (Oy) : R_N - P_y = 0.',
      '2. P_y = P · cos(α).',
      '3. R_N = P · cos(60°) = 400 × 0,5 = 200 N.'
    ]
  }
];

// ==========================================
// 2-C. PHYSIQUE - MÉCANIQUE : ROTATION & THÉORÈME DES MOMENTS
// ==========================================
export const SECONDE_THEOREME_MOMENTS_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-mom-1',
    exerciseId: 'ex-pc-mom-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Définition du Moment & Bras de Levier)',
    microConcept: 'Le moment d\'une force F⃗ par rapport à un axe fixe (Δ) mesure l\'efficacité de cette force à faire tourner le solide autour de cet axe. Il est défini par M_Δ(F⃗) = ± F · d. L\'unité est le Newton-mètre (N·m). Le "bras de levier" d est la distance la plus courte, c\'est-à-dire la PERPENDICULAIRE menée de l\'axe (Δ) à la droite d\'action de la force.',
    hint: 'Attention : le bras de levier n\'est pas la longueur de la barre, mais la distance perpendiculaire à la droite d\'action !',
    prompt: 'Quelle est la définition géométrique exacte du "bras de levier" d\'une force par rapport à un axe de rotation (Δ) ?',
    options: [
      'La distance perpendiculaire mesurée entre l\'axe de rotation (Δ) et la droite d\'action de la force',
      'La longueur totale de la pièce mécanique, quel que soit l\'angle d\'application de la force',
      'La distance entre le centre de gravité du solide et le sol',
      'La durée pendant laquelle la force est appliquée sur le solide'
    ],
    correctAnswer: 'La distance perpendiculaire mesurée entre l\'axe de rotation (Δ) et la droite d\'action de la force',
    commonMistake: 'Confondre le bras de levier d avec la distance entre l\'axe et le point d\'application de la force (qui ne coïncident que si la force est perpendiculaire à la barre).',
    explanation: 'Par définition en mécanique du solide, le bras de levier d est la distance orthogonale (perpendiculaire) séparant l\'axe de rotation (Δ) de la droite portant le vecteur force.',
    steps: [
      '1. On trace la droite d\'action de la force F⃗.',
      '2. On mène la perpendiculaire à cette droite passant par l\'axe de rotation (Δ).',
      '3. La longueur de ce segment perpendiculaire est le bras de levier d.'
    ]
  },
  {
    id: 'q-2s-pc-mom-2',
    exerciseId: 'ex-pc-mom-2',
    type: 'mcq',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Propriété Fondamentale (Forces à Moment Nul)',
    microConcept: 'Le moment d\'une force par rapport à un axe fixe (Δ) est STRICTEMENT NUL dans deux cas géométriques : lorsque la droite d\'action de la force COUPE l\'axe (Δ) (distance d = 0), ou lorsque la droite d\'action est PARALLÈLE à l\'axe (Δ). Une telle force ne peut en aucun cas provoquer une rotation du solide.',
    hint: 'Si tu pousses sur la tranche d\'une porte en direction des gonds, la porte peut-elle tourner ?',
    prompt: 'Dans quel cas le moment d\'une force F⃗ par rapport à un axe de rotation fixe (Δ) est-il rigoureusement égal à zéro (M_Δ(F⃗) = 0) ?',
    options: [
      'Lorsque la droite d\'action de la force rencontre l\'axe (Δ) ou lui est parallèle',
      'Lorsque la force est rigoureusement perpendiculaire au bras de levier',
      'Lorsque la valeur de la force dépasse 1000 Newtons',
      'Lorsque le solide tourne à vitesse angulaire constante'
    ],
    correctAnswer: 'Lorsque la droite d\'action de la force rencontre l\'axe (Δ) ou lui est parallèle',
    commonMistake: 'Penser qu\'une force importante produit toujours une rotation, même si elle pointe directement vers l\'axe de rotation (axe des gonds).',
    explanation: 'Si la droite d\'action passe par l\'axe, le bras de levier est nul (d = 0), donc M = F · 0 = 0. De même, une force parallèle à l\'axe n\'a aucun effet de rotation autour de cet axe.',
    steps: [
      '1. Cas 1 : La droite d\'action coupe l\'axe (Δ) => d = 0 => M_Δ(F⃗) = 0.',
      '2. Cas 2 : La droite d\'action est parallèle à l\'axe (Δ) => M_Δ(F⃗) = 0.',
      '3. C\'est pourquoi la réaction de l\'axe R⃗ passant par l\'axe a toujours un moment nul dans les calculs d\'équilibre.'
    ]
  },
  {
    id: 'q-2s-pc-mom-3',
    exerciseId: 'ex-pc-mom-3',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Moment d\'une Force Oblique avec Trigonométrie (d = L · sin θ)',
    microConcept: 'Quand une force F⃗ s\'exerce à l\'extrémité d\'une tige de longueur L en faisant un angle θ avec celle-ci, le bras de levier vaut d = L · sin(θ). Le moment vaut alors : M_Δ(F⃗) = F · L · sin(θ). Si la force est perpendiculaire (θ = 90°), sin(90°) = 1 et M = F · L.',
    hint: 'Calcule d\'abord le bras de levier d = L · sin(30°) = 0,4 m × 0,5 = 0,2 m. Puis multiplie par la force F = 50 N.',
    prompt: 'Un mécanicien applique une force F = 50 N à l\'extrémité d\'une clé plate de longueur L = 0,4 m. La force fait un angle θ = 30° avec le manche de la clé. Sachant que sin(30°) = 0,5, quelle est la valeur absolue du moment de cette force en N·m ? (Entrer un nombre entier)',
    correctAnswer: 10,
    commonMistake: 'Multiplier directement F × L = 50 × 0,4 = 20 N·m sans appliquer le facteur sin(30°) = 0,5.',
    explanation: 'Bras de levier : d = L · sin(30°) = 0,4 × 0,5 = 0,2 m. Moment M = F · d = 50 N × 0,2 m = 10 N·m.',
    steps: [
      '1. Détermination du bras de levier : d = L · sin(θ) = 0,4 × sin(30°).',
      '2. Valeur de d : d = 0,4 × 0,5 = 0,2 m.',
      '3. Calcul du moment : M_Δ = F · d = 50 × 0,2 = 10 N·m.'
    ]
  },
  {
    id: 'q-2s-pc-mom-4',
    exerciseId: 'ex-pc-mom-4',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Théorème des Moments & Équilibre d\'un Levier',
    microConcept: 'Théorème des moments : Un solide mobile autour d\'un axe fixe (Δ) est en équilibre de rotation si et seulement si la somme algébrique des moments des forces extérieures par rapport à cet axe est nulle : ∑ M_Δ(F⃗) = 0. Pour deux forces agissant en sens contraires : F₁ · d₁ = F₂ · d₂.',
    hint: 'À l\'équilibre : F₁ · d₁ = F₂ · d₂. On a F₁ = 200 N à d₁ = 3 m, ce qui donne un moment de 600 N·m. Calcule d₂ tel que 600 · d₂ = 600.',
    prompt: 'Une règle rigide horizontale de masse négligeable pivote sans frottement autour d\'un axe central (Δ). À gauche de l\'axe, une masse exerce une force verticale descendante F₁ = 200 N à une distance d₁ = 3 m du pivot. À droite, on applique une force verticale descendante F₂ = 600 N. À quelle distance d₂ (en mètres) de l\'axe doit-on appliquer cette force F₂ pour que la règle reste en équilibre horizontal ? (Entrer un nombre entier)',
    correctAnswer: 1,
    commonMistake: 'Calculer F₂ / F₁ sans relier aux distances, ou multiplier les grandeurs au lieu d\'égaliser les moments.',
    explanation: 'Théorème des moments : F₁ · d₁ - F₂ · d₂ = 0 <=> F₁ · d₁ = F₂ · d₂ <=> 200 × 3 = 600 × d₂ <=> 600 = 600 × d₂ <=> d₂ = 1 m.',
    steps: [
      '1. Moment de F₁ (sens trigonométrique positif) : M₁ = +F₁ · d₁ = 200 × 3 = 600 N·m.',
      '2. Moment de F₂ (sens horaire négatif) : M₂ = -F₂ · d₂ = -600 · d₂.',
      '3. Condition d\'équilibre : M₁ + M₂ = 0 => 600 - 600 · d₂ = 0.',
      '4. Distance recherchée : d₂ = 600 / 600 = 1 m.'
    ]
  },
  {
    id: 'q-2s-pc-mom-5',
    exerciseId: 'ex-pc-mom-5',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Équilibre du Treuil & Démultiplication d\'Effort)',
    microConcept: 'Un treuil est constitué d\'un cylindre de rayon r (autour duquel s\'enroule la corde portant la charge de poids P) solidaire d\'une manivelle de longueur R (sur laquelle l\'utilisateur applique la force F perpendiculairement). À l\'équilibre : P · r = F · R <=> F = P · (r / R). Plus la manivelle R est grande devant r, plus la force musculaire F nécessaire est faible.',
    hint: 'Applique P · r = F · R avec r = 10 cm = 0,1 m, R = 50 cm = 0,5 m et P = 800 N. F = 800 × 0,1 / 0,5.',
    prompt: 'Un treuil traditionnel de puits comporte un cylindre de rayon r = 10 cm et une manivelle de rayon R = 50 cm. Pour maintenir suspendu un seau d\'eau de poids P = 800 N, quelle force musculaire F (en Newtons) l\'opérateur doit-il exercer perpendiculairement à l\'extrémité de la manivelle ? (Entrer un nombre entier)',
    correctAnswer: 160,
    commonMistake: 'Inverser le rapport des rayons (multiplier par 50/10 au lieu de 10/50), ce qui donnerait 4000 N au lieu de 160 N.',
    explanation: 'Équilibre des moments autour de l\'axe du treuil : M_P + M_F = 0 <=> P · r = F · R <=> F = P · (r / R) = 800 × (0,10 / 0,50) = 800 × 0,2 = 160 N. Le treuil permet de diviser l\'effort par 5.',
    steps: [
      '1. Moment de la charge P : M(P⃗) = P · r = 800 N × 0,10 m = 80 N·m.',
      '2. Moment de la force motrice F : M(F⃗) = F · R = F × 0,50 m.',
      '3. Équilibre : F × 0,50 = 80.',
      '4. Force minimale requise : F = 80 / 0,50 = 160 N.'
    ]
  }
];

// ==========================================
// 3. PHYSIQUE - B. ÉLECTRICITÉ & ÉLECTRONIQUE
// ==========================================
export const SECONDE_ELECTRICITE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-elec-1',
    exerciseId: 'ex-pc-elec-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Sens du courant vs Électrons)',
    microConcept: 'Par convention historique, le courant électrique continu sort de la borne positive (+) et rentre par la borne négative (-) du générateur dans le circuit extérieur. Les électrons libres (porteurs de charge négative -e) circulent en sens inverse, de la borne (-) vers la borne (+).',
    hint: 'Rappelle-toi : le sens conventionnel a été choisi avant la découverte des électrons.',
    prompt: 'Dans un circuit électrique à l\'extérieur du générateur, quel est le sens de déplacement des électrons libres par rapport au sens conventionnel du courant ?',
    options: [
      'Les électrons se déplacent en sens opposé au sens conventionnel (du pôle - vers le pôle +)',
      'Les électrons se déplacent dans le même sens que le courant (du pôle + vers le pôle -)',
      'Les électrons restent parfaitement immobiles',
      'Leur sens dépend uniquement de la tension appliquée'
    ],
    correctAnswer: 'Les électrons se déplacent en sens opposé au sens conventionnel (du pôle - vers le pôle +)',
    commonMistake: 'Croire que les électrons vont du pôle + vers le pôle -. Comme ils sont chargés négativement, ils sont repoussés par le pôle négatif et attirés par le pôle positif.',
    explanation: 'Les électrons de charge q = -e négative sont attirés par la borne positive (+) et fuient la borne négative (-). Le sens conventionnel du courant (+ vers -) est donc opposé au sens des électrons.',
    steps: [
      '1. Charge de l\'électron : négative (-e).',
      '2. Répulsion électrostatique : attiré par la borne (+), repoussé par la borne (-).',
      '3. Sens de circulation : de (-) vers (+), soit à l\'opposé du sens conventionnel.'
    ]
  },
  {
    id: 'q-2s-pc-elec-2',
    exerciseId: 'ex-pc-elec-2',
    type: 'true_false',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Branchement Ampèremètre & Voltmètre)',
    microConcept: 'Un ampèremètre (résistance interne quasi nulle) mesure l\'intensité du courant I et se branche TOUJOURS EN SÉRIE dans la branche. Un voltmètre (résistance interne très grande) mesure une différence de potentiel U et se branche TOUJOURS EN DÉRIVATION (en parallèle) aux bornes du dipôle.',
    hint: 'L\'ampèremètre traverse le courant (série) ; le voltmètre se place à cheval sur les bornes (dérivation).',
    prompt: 'Pour mesurer la tension aux bornes d\'une lampe sans perturber le circuit, on doit brancher le voltmètre en dérivation (en parallèle) à ses bornes.',
    options: [
      'Vrai (le voltmètre se branche en dérivation ; l\'ampèremètre en série)',
      'Faux (le voltmètre doit impérativement être branché en série)'
    ],
    correctAnswer: 'Vrai (le voltmètre se branche en dérivation ; l\'ampèremètre en série)',
    commonMistake: 'Brancher un ampèremètre en dérivation (ce qui provoque un court-circuit dangereux) ou un voltmètre en série (ce qui coupe le courant en raison de sa résistance immense).',
    explanation: 'Le voltmètre mesure la différence de potentiel U_AB entre deux points A et B, il doit donc être raccordé en dérivation en ces deux points.',
    steps: [
      '1. La tension est une grandeur entre deux points distincts.',
      '2. L\'appareil doit être branché en dérivation pour "sonder" ces deux potentiels.',
      '3. Sa résistance interne très élevée évite de dévier le courant du dipôle.'
    ]
  },
  {
    id: 'q-2s-pc-elec-3',
    exerciseId: 'ex-pc-elec-3',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Loi des Nœuds)',
    microConcept: 'Loi des nœuds : La somme des intensités des courants qui entrent dans un nœud est égale à la somme des intensités des courants qui en sortent (conservation de la charge électrique) : ∑ I_entrants = ∑ I_sortants.',
    hint: 'Le courant I₁ entre (5 A). Les courants I₂ (1,8 A) et I₃ sortent. Donc I₁ = I₂ + I₃, d\'où I₃ = 5 - 1,8.',
    prompt: 'À un carrefour de circuit (nœud), un courant d\'intensité I₁ = 5,0 A arrive. Deux branches en sortent : la première emporte un courant I₂ = 1,8 A. Quelle est l\'intensité I₃ (en Ampères) dans la seconde branche ? (Indiquer la valeur avec une décimale ou virgule)',
    correctAnswer: 3.2,
    commonMistake: 'Additionner les intensités au lieu de les soustraire (5 + 1,8 = 6,8 A).',
    explanation: 'D\'après la loi des nœuds : I_entrant = I₁ = 5,0 A. I_sortants = I₂ + I₃ = 1,8 + I₃. Donc I₃ = 5,0 - 1,8 = 3,2 A.',
    steps: [
      '1. Identifier les courants entrants : I₁ = 5,0 A.',
      '2. Identifier les courants sortants : I₂ = 1,8 A et I₃.',
      '3. Équation de conservation : 5,0 = 1,8 + I₃.',
      '4. I₃ = 5,0 - 1,8 = 3,2 A.'
    ]
  },
  {
    id: 'q-2s-pc-elec-4',
    exerciseId: 'ex-pc-elec-4',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Loi d\'Ohm U = R · I)',
    microConcept: 'Loi d\'Ohm pour un conducteur ohmique : U = R · I, avec U la tension en Volts (V), R la résistance en Ohms (Ω), et I l\'intensité en Ampères (A). Attention aux sous-multiples : 20 mA = 0,020 A.',
    hint: 'Convertis 20 mA en Ampères : 20 mA = 20 × 10⁻³ A = 0,02 A. Calcule ensuite U = 150 × 0,02.',
    prompt: 'Un conducteur ohmique de résistance R = 150 Ω est traversé par un courant I = 20 mA. Quelle est la tension U (en Volts) à ses bornes ?',
    correctAnswer: 3,
    commonMistake: 'Oublier de convertir les milliampères en ampères et calculer 150 × 20 = 3000 V !',
    explanation: 'I = 20 mA = 0,02 A. D\'après la loi d\'Ohm : U = R × I = 150 Ω × 0,02 A = 3 V.',
    steps: [
      '1. Conversion : I = 20 mA = 0,020 A.',
      '2. Formule : U = R · I.',
      '3. Calcul : U = 150 × 0,02 = 3 V.'
    ]
  },
  {
    id: 'q-2s-pc-elec-5',
    exerciseId: 'ex-pc-elec-5',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Loi d\'additivité des tensions dans une maille)',
    microConcept: 'Loi d\'additivité des tensions (circuit série) : La tension aux bornes d\'une association en série de dipôles est égale à la somme des tensions aux bornes de chacun d\'eux : U_générateur = U₁ + U₂ + U₃.',
    hint: 'Le générateur délivre 12 V. Le moteur prend 7,5 V et la résistance prend 1,5 V. Que reste-t-il pour la lampe ?',
    prompt: 'Un générateur maintient une tension constante U_G = 12 V aux bornes d\'un circuit en boucle simple comportant en série : un petit moteur (U_moteur = 7,5 V), un résistor (U_resistor = 1,5 V) et une diode DEL. Quelle est la tension U_DEL (en Volts) aux bornes de la diode ?',
    correctAnswer: 3,
    commonMistake: 'Oublier l\'un des dipôles ou faire une soustraction incomplète (ex: 12 - 7,5 = 4,5 V en omettant le résistor de 1,5 V).',
    explanation: 'U_G = U_moteur + U_resistor + U_DEL => 12 = 7,5 + 1,5 + U_DEL => 12 = 9,0 + U_DEL => U_DEL = 3,0 V.',
    steps: [
      '1. Énoncer la loi des mailles : U_G = U_moteur + U_resistor + U_DEL.',
      '2. Remplacer les valeurs : 12 = 7,5 + 1,5 + U_DEL = 9 + U_DEL.',
      '3. Isoler l\'inconnue : U_DEL = 12 - 9 = 3 V.'
    ]
  }
];

// ==========================================
// 4. PHYSIQUE - C. OPTIQUE
// ==========================================
export const SECONDE_OPTIQUE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-opt-1',
    exerciseId: 'ex-pc-opt-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Propagation rectiligne de la lumière)',
    microConcept: 'Dans un milieu transparent, homogène et isotrope (comme l\'air ou le vide), la lumière se propage en ligne droite. Dans le vide, sa vitesse (célérité c) vaut exactement c ≈ 3,00 × 10⁸ m/s (soit 300 000 km/s).',
    hint: 'La lumière voyage-t-elle en zigzag dans l\'air calme ? Non, elle suit des rayons rectilignes.',
    prompt: 'Dans quelles conditions la lumière se propage-t-elle rigoureusement en ligne droite ?',
    options: [
      'Dans tout milieu transparent et homogène',
      'Uniquement dans le vide absolu',
      'Uniquement lorsqu\'elle traverse des lentilles convergentes',
      'Dans les milieux opaques et diffusants'
    ],
    correctAnswer: 'Dans tout milieu transparent et homogène',
    commonMistake: 'Penser que la propagation rectiligne n\'a lieu que dans le vide. Elle a également lieu dans l\'air, l\'eau pure ou le verre, tant que le milieu est homogène (même indice partout).',
    explanation: 'Le principe de propagation rectiligne énonce que dans un milieu transparent et homogène, le trajet de la lumière est une ligne droite matérialisée par un rayon lumineux.',
    steps: [
      '1. Milieu transparent : laisse passer la lumière.',
      '2. Milieu homogène : possède les mêmes propriétés physiques en tout point.',
      '3. Les rayons lumineux y sont des lignes droites.'
    ]
  },
  {
    id: 'q-2s-pc-opt-2',
    exerciseId: 'ex-pc-opt-2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (1ère loi de Snell-Descartes pour la réflexion)',
    microConcept: 'Loi de réflexion de Descartes : Le rayon réfléchi appartient au plan d\'incidence, et l\'angle de réflexion r est rigoureusement égal à l\'angle d\'incidence i (r = i). Ces angles sont TOUJOURS mesurés par rapport à la NORMALE (la perpendiculaire au miroir).',
    hint: 'L\'angle de réflexion r est égal à l\'angle d\'incidence i : r = i.',
    prompt: 'Un rayon lumineux frappe la surface plane d\'un miroir avec un angle d\'incidence de 35° mesuré par rapport à la normale. Quel est l\'angle de réflexion r (en degrés) ?',
    correctAnswer: 35,
    commonMistake: 'Prendre l\'angle complémentaire par rapport au plan du miroir (90 - 35 = 55°). En optique, tous les angles sont mesurés par rapport à la perpendiculaire (normale) !',
    explanation: 'D\'après la première loi de Snell-Descartes pour la réflexion, l\'angle de réflexion est strictement égal à l\'angle d\'incidence : r = i = 35°.',
    steps: [
      '1. Repérer la normale à la surface réfléchissante.',
      '2. Angle d\'incidence i = 35°.',
      '3. Loi de Descartes : r = i, donc r = 35°.'
    ]
  },
  {
    id: 'q-2s-pc-opt-3',
    exerciseId: 'ex-pc-opt-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (2ème loi de Snell-Descartes : Réfraction)',
    microConcept: 'Lors du passage d\'un milieu 1 (d\'indice n₁) à un milieu 2 (d\'indice n₂), le rayon est dévié selon la loi : n₁ · sin(i₁) = n₂ · sin(i₂). Si le milieu 2 est plus réfringent (n₂ > n₁), le rayon se rapproche de la normale (i₂ < i₁).',
    hint: 'Compare les indices : l\'eau a un indice n₂ = 1,33 supérieur à l\'air n₁ = 1,00.',
    prompt: 'Un faisceau lumineux passe de l\'air (indice n₁ = 1,00) dans l\'eau (indice n₂ = 1,33) avec un angle d\'incidence i₁ = 45°. Comment se comporte le rayon réfracté dans l\'eau ?',
    options: [
      'Il se rapproche de la normale (i₂ < 45°)',
      'Il s\'écarte de la normale (i₂ > 45°)',
      'Il continue tout droit sans aucune déviation (i₂ = 45°)',
      'Il fait demi-tour complet'
    ],
    correctAnswer: 'Il se rapproche de la normale (i₂ < 45°)',
    commonMistake: 'Croire que le rayon s\'éloigne de la normale. Comme n₂ > n₁, pour maintenir l\'égalité n₁ · sin(i₁) = n₂ · sin(i₂), sin(i₂) doit être plus petit que sin(i₁), donc i₂ < i₁.',
    explanation: 'n₁ · sin(i₁) = n₂ · sin(i₂). Comme n₂ (1,33) > n₁ (1,00), on a sin(i₂) = (n₁/n₂) · sin(i₁) < sin(i₁), donc l\'angle i₂ est plus petit : le rayon se rapproche de la normale.',
    steps: [
      '1. Milieu 1 : air (n₁ = 1,0). Milieu 2 : eau (n₂ = 1,33).',
      '2. Relation : 1,0 × sin(45°) = 1,33 × sin(i₂).',
      '3. sin(i₂) = sin(45°) / 1,33 ≈ 0,707 / 1,33 ≈ 0,53 => i₂ ≈ 32° < 45°.'
    ]
  },
  {
    id: 'q-2s-pc-opt-4',
    exerciseId: 'ex-pc-opt-4',
    type: 'true_false',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Réflexion totale)',
    microConcept: 'La réflexion totale ne peut se produire QUE lors du passage d\'un milieu plus réfringent vers un milieu moins réfringent (n₁ > n₂, ex: verre vers air), lorsque l\'angle d\'incidence dépasse l\'angle limite : i₁ > i_limite avec sin(i_limite) = n₂ / n₁.',
    hint: 'La lumière peut-elle subir une réflexion totale en allant de l\'air (n=1) vers l\'eau (n=1,33) ? Non !',
    prompt: 'Le phénomène de réflexion totale peut se produire lorsqu\'un rayon lumineux voyage dans l\'air et arrive sur un bloc de verre.',
    options: [
      'Faux (la réflexion totale n\'est possible que si la lumière part du milieu le plus réfringent, ex: du verre vers l\'air)',
      'Vrai (la réflexion totale se produit toujours quand la lumière entre dans un solide)'
    ],
    correctAnswer: 'Faux (la réflexion totale n\'est possible que si la lumière part du milieu le plus réfringent, ex: du verre vers l\'air)',
    commonMistake: 'Oublier la condition indispensable sur les indices de réfraction : n₁ doit être strictement supérieur à n₂.',
    explanation: 'Pour avoir réflexion totale, il faut que le rayon tente de s\'écarter de la normale jusqu\'à atteindre 90°, ce qui n\'est possible que si n₁ > n₂ (du verre vers l\'air, principe des fibres optiques).',
    steps: [
      '1. Condition de réfraction : sin(i₂) = (n₁ / n₂) · sin(i₁).',
      '2. Pour que sin(i₂) atteigne 1 (angle de 90°), il faut impérativement n₁ > n₂.',
      '3. Ici n_air (1,0) < n_verre (1,5), donc la réflexion totale est impossible.'
    ]
  },
  {
    id: 'q-2s-pc-opt-5',
    exerciseId: 'ex-pc-opt-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Dispersion par un prisme)',
    microConcept: 'La lumière blanche est polychromatique (mélange de radiations de longueurs d\'onde différentes). L\'indice de réfraction n d\'un milieu transparent dépend de la longueur d\'onde λ (milieu dispersif) : n_bleu > n_rouge. Le bleu est donc plus dévié que le rouge à la traversée d\'un prisme.',
    hint: 'Pense à l\'ordre des couleurs de l\'arc-en-ciel après déviation : rouge, orange, jaune, vert, bleu, violet.',
    prompt: 'Lorsqu\'un faisceau de lumière blanche traverse un prisme en verre, quelle couleur est la PLUS déviée par rapport à la direction incidente ?',
    options: [
      'La radiation violette / bleue (car l\'indice du verre est plus grand pour les courtes longueurs d\'onde)',
      'La radiation rouge (car sa longueur d\'onde est la plus grande)',
      'Toutes les couleurs sont déviées du même angle',
      'La radiation verte uniquement'
    ],
    correctAnswer: 'La radiation violette / bleue (car l\'indice du verre est plus grand pour les courtes longueurs d\'onde)',
    commonMistake: 'Répondre le rouge parce que c\'est la première couleur souvent citée dans l\'arc-en-ciel. En réalité, le rouge est le MOINS dévié, et le violet est le PLUS dévié.',
    explanation: 'La loi de Cauchy montre que l\'indice n du verre augmente quand la longueur d\'onde diminue. Comme λ_violet < λ_rouge, on a n_violet > n_rouge. D\'après Snell-Descartes, un indice plus fort produit une déviation plus prononcée.',
    steps: [
      '1. Longueur d\'onde : λ_rouge ≈ 750 nm > λ_violet ≈ 400 nm.',
      '2. Dépendance de l\'indice du prisme : n(λ) est décroissant avec λ, donc n_violet > n_rouge.',
      '3. Loi de Snell-Descartes : déviation plus importante pour n plus grand.',
      '4. Conclusion : le violet/bleu est le plus dévié.'
    ]
  }
];

// ==========================================
// 5. CHIMIE - A. MATIÈRE, CORPS PURS & SÉPARATION
// ==========================================
export const SECONDE_CHIMIE_MATIERE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-ch-mat-1',
    exerciseId: 'ex-pc-ch-mat-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Mélange homogène vs hétérogène)',
    microConcept: 'Un mélange est dit HOMOGÈNE si l\'on ne peut pas distinguer ses différents constituants à l\'œil nu après agitation (ex: eau salée limpide, air). Il est HÉTÉROGÈNE si au moins deux constituants restent visibles (ex: eau + huile, jus d\'orange avec pulpe).',
    hint: 'Regarde une boisson gazeuse avec bulles ou de l\'eau boueuse : voit-on plusieurs phases à l\'œil nu ?',
    prompt: 'Parmi les mélanges suivants, lequel est un mélange rigoureusement HOMOGÈNE ?',
    options: [
      'L\'eau minérale limpide et sans bulles',
      'Un mélange d\'eau et d\'huile',
      'Une eau boueuse prélevée dans un ruisseau',
      'Une vinaigrette non émulsionnée'
    ],
    correctAnswer: 'L\'eau minérale limpide et sans bulles',
    commonMistake: 'Penser que l\'eau minérale est un corps pur. C\'est un mélange (eau + sels minéraux dissous), mais parfaitement homogène car on ne distingue qu\'une seule phase limpide.',
    explanation: 'L\'eau minérale contient des sels minéraux (calcium, magnésium, chlorures) entièrement dissous dans l\'eau : une seule phase est observable à l\'œil nu, c\'est un mélange homogène.',
    steps: [
      '1. L\'eau et l\'huile forment deux phases distinctes non miscibles => hétérogène.',
      '2. L\'eau boueuse contient des particules solides en suspension => hétérogène.',
      '3. L\'eau minérale dissout complètement les ions sans particule visible => homogène.'
    ]
  },
  {
    id: 'q-2s-pc-ch-mat-2',
    exerciseId: 'ex-pc-ch-mat-2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Masse volumique ρ = m / V)',
    microConcept: 'La masse volumique d\'une espèce chimique est le rapport entre sa masse m et son volume V : ρ = m / V. Si m est en grammes (g) et V en cm³, ρ s\'exprime en g/cm³ (ou g/mL).',
    hint: 'Divise la masse (135 g) par le volume (50 cm³) : 135 / 50 = 270 / 100.',
    prompt: 'Un lingot d\'aluminium pur de volume V = 50 cm³ possède une masse mesurée m = 135 g sur une balance de précision. Quelle est la masse volumique ρ de l\'aluminium en g/cm³ ? (Indiquer la valeur décimale avec un point ou virgule)',
    correctAnswer: 2.7,
    commonMistake: 'Inverser la formule et diviser le volume par la masse (50 / 135 = 0,37 cm³/g).',
    explanation: 'ρ = m / V = 135 g / 50 cm³ = 2,7 g/cm³ (soit 2700 kg/m³).',
    steps: [
      '1. Formule : ρ = m / V.',
      '2. Remplacer les données : m = 135 g, V = 50 cm³.',
      '3. Calcul : 135 / 50 = 2,7 g/cm³.'
    ]
  },
  {
    id: 'q-2s-pc-ch-mat-3',
    exerciseId: 'ex-pc-ch-mat-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Techniques de séparation de mélanges)',
    microConcept: 'Techniques courantes : Décantation (séparation par gravité de deux liquides non miscibles ou de solides denses), Filtration (séparation solide-liquide à travers un filtre poreux), et Distillation (séparation de liquides miscibles selon leur température d\'ébullition différente).',
    hint: 'L\'eau et l\'éthanol sont parfaitement miscibles (mélange homogène). L\'éthanol bout à 78 °C et l\'eau à 100 °C.',
    prompt: 'Quelle méthode de séparation permet d\'extraire l\'éthanol présent dans un mélange homogène eau-éthanol en exploitant leurs températures d\'ébullition différentes ?',
    options: [
      'La distillation fractionnée',
      'La filtration sur papier filtre',
      'La décantation dans une ampoule à décanter',
      'Le tamisage'
    ],
    correctAnswer: 'La distillation fractionnée',
    commonMistake: 'Proposer l\'ampoule à décanter. L\'ampoule à décanter ne fonctionne que pour des liquides NON miscibles (comme eau + huile). Pour des liquides miscibles, seule la distillation convient.',
    explanation: 'La distillation sépare les constituants d\'un mélange liquide homogène grâce à leurs volatilités et températures d\'ébullition distinctes (l\'éthanol s\'évapore en premier à 78 °C, puis est condensé dans le réfrigérant).',
    steps: [
      '1. L\'eau et l\'éthanol sont miscibles (mélange homogène), la filtration ou décantation est inefficace.',
      '2. T_éb(éthanol) = 78 °C < T_éb(eau) = 100 °C.',
      '3. La montée en température fait s\'évaporer en premier le constituant le plus volatil : c\'est la distillation.'
    ]
  },
  {
    id: 'q-2s-pc-ch-mat-4',
    exerciseId: 'ex-pc-ch-mat-4',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Chromatographie sur couche mince & Rapport frontal)',
    microConcept: 'En chromatographie sur couche mince (CCM), le rapport frontal R_f d\'une tache est le quotient de la distance h parcourue par la tache sur la distance H parcourue par le front de l\'éluant : R_f = h / H. Le rapport frontal est un nombre sans unité, toujours compris entre 0 et 1.',
    hint: 'Divise la hauteur de la tache (3 cm) par la hauteur totale de l\'éluant (6 cm).',
    prompt: 'Sur une plaque de chromatographie, la ligne de front de l\'éluant a progressé de H = 6,0 cm depuis la ligne de dépôt. La tache d\'un colorant alimentaire a migré sur une distance h = 3,0 cm. Quel est le rapport frontal R_f de ce colorant ? (Indiquer le nombre décimal)',
    correctAnswer: 0.5,
    commonMistake: 'Calculer H / h (6 / 3 = 2), or le rapport frontal ne peut jamais dépasser 1 car la tache ne peut pas dépasser l\'éluant qui la transporte !',
    explanation: 'R_f = h / H = 3,0 cm / 6,0 cm = 0,5. Cette valeur caractéristique permet d\'identifier l\'espèce chimique par comparaison avec des témoins.',
    steps: [
      '1. Repérer la distance parcourue par l\'espèce : h = 3,0 cm.',
      '2. Repérer la distance parcourue par le solvant : H = 6,0 cm.',
      '3. Calcul du rapport frontal : R_f = h / H = 3 / 6 = 0,5.'
    ]
  },
  {
    id: 'q-2s-pc-ch-mat-5',
    exerciseId: 'ex-pc-ch-mat-5',
    type: 'true_false',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Changement d\'état d\'un corps pur vs mélange)',
    microConcept: 'Sous une pression constante, le changement d\'état (fusion, ébullition, solidification) d\'un CORPS PUR se fait à TEMPÉRATURE CONSTANTE : la courbe présente un palier de température horizontal. Pour un mélange, la température varie continuellement.',
    hint: 'Lorsqu\'on chauffe de l\'eau distillée pure à pression atmosphérique, la température reste-t-elle bloquée à 100 °C tant qu\'il y a du liquide et du gaz ?',
    prompt: 'À pression atmosphérique, la température d\'un corps pur reste rigoureusement constante tout au long de son changement d\'état (palier de température).',
    options: [
      'Vrai (la présence d\'un palier thermique à pression constante est une preuve de pureté)',
      'Faux (la température continue d\'augmenter en permanence)'
    ],
    correctAnswer: 'Vrai (la présence d\'un palier thermique à pression constante est une preuve de pureté)',
    commonMistake: 'Confondre le comportement d\'un mélange (dont la température change pendant l\'ébullition, ex: eau salée qui bout entre 101 °C et 105 °C) avec celui d\'un corps pur.',
    explanation: 'Toute l\'énergie thermique fournie pendant le changement d\'état du corps pur sert à rompre les liaisons intermoléculaires sans augmenter l\'agitation thermique, d\'où un palier à température fixe (ex: 0 °C pour la fusion de la glace pure).',
    steps: [
      '1. On chauffe un corps pur solide.',
      '2. Dès l\'apparition de la première goutte de liquide, la température cesse de monter.',
      '3. Elle reste rigoureusement constante jusqu\'à la disparition du dernier morceau de solide : c\'est le palier de fusion.'
    ]
  }
];

// ==========================================
// 6. CHIMIE - B. STRUCTURE DE LA MATIÈRE : L'ATOME
// ==========================================
export const SECONDE_CHIMIE_ATOME_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-ch-atome-1',
    exerciseId: 'ex-pc-ch-atome-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Constitution & Neutralité de l\'Atome)',
    microConcept: 'L\'atome est constitué d\'un noyau central très dense (formé de Z protons chargés positivement +e et de N neutrons sans charge) autour duquel gravitent Z électrons chargés négativement (-e). L\'atome est globalement électriquement neutre.',
    hint: 'Quelles sont les deux particules situées dans le noyau (nucléons) et celle qui orbite autour ?',
    prompt: 'Quelles sont les trois particules élémentaires constituant un atome neutre ?',
    options: [
      'Protons (positifs), Neutrons (neutres) et Électrons (négatifs)',
      'Protons (négatifs), Neutrons (positifs) et Photons',
      'Molécules, Ions et Quarks',
      'Électrons, Noyaux et Rayons X'
    ],
    correctAnswer: 'Protons (positifs), Neutrons (neutres) et Électrons (négatifs)',
    commonMistake: 'Inverser les charges des protons et des électrons.',
    explanation: 'Le noyau est composé de nucléons : les protons (+e) et les neutrons (charge nulle). Le nuage électronique est constitué d\'électrons (-e). Comme il y a autant de protons que d\'électrons, l\'atome est neutre.',
    steps: [
      '1. Noyau = Z protons (charge +Ze) + N neutrons (charge 0).',
      '2. Cortège électronique = Z électrons (charge -Ze).',
      '3. Charge globale = +Ze - Ze = 0.'
    ]
  },
  {
    id: 'q-2s-pc-ch-atome-2',
    exerciseId: 'ex-pc-ch-atome-2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Notation symbolique & Nombre de neutrons)',
    microConcept: 'Dans la notation symbolique ^A_Z X : A est le nombre de masse (nombre total de nucléons = protons + neutrons), et Z est le numéro atomique (nombre de protons). Le nombre de neutrons N est donné par la soustraction : N = A - Z.',
    hint: 'Pour l\'isotope Carbone-14 noté ¹⁴₆C : A = 14 et Z = 6. Fais la soustraction N = A - Z.',
    prompt: 'Le noyau d\'un isotope de carbone utilisé pour la datation est symbolisé par ¹⁴₆C. Combien de neutrons N ce noyau contient-il ?',
    correctAnswer: 8,
    commonMistake: 'Répondre 14 (en confondant le nombre de neutrons avec le nombre total de nucléons A) ou 6 (le nombre de protons Z).',
    explanation: 'A = 14 nucléons (protons + neutrons) et Z = 6 protons. Donc N = A - Z = 14 - 6 = 8 neutrons.',
    steps: [
      '1. Identifier le nombre de nucléons A = 14.',
      '2. Identifier le nombre de protons Z = 6.',
      '3. Calculer N = A - Z = 14 - 6 = 8 neutrons.'
    ]
  },
  {
    id: 'q-2s-pc-ch-atome-3',
    exerciseId: 'ex-pc-ch-atome-3',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Couches électroniques & Électrons de valence)',
    microConcept: 'Les électrons d\'un atome se répartissent sur des couches notées K (2 électrons max), L (8 électrons max) et M (8 électrons max pour Z ≤ 18). Les électrons de la dernière couche occupée sont appelés électrons de valence (ou de la couche externe).',
    hint: 'L\'atome d\'oxygène a Z = 8. La couche K prend 2 électrons. Combien d\'électrons restent sur la couche L ?',
    prompt: 'Le numéro atomique de l\'atome d\'oxygène est Z = 8. Combien d\'électrons de valence (électrons sur la couche externe L) cet atome possède-t-il ?',
    correctAnswer: 6,
    commonMistake: 'Répondre 8 en donnant le nombre total d\'électrons au lieu des seuls électrons de valence sur la couche externe.',
    explanation: 'Répartition électronique : (K)² (L)⁶. La couche externe L contient 6 électrons de valence. L\'oxygène cherchera à gagner 2 électrons pour acquérir l\'octet stable (ion O²⁻).',
    steps: [
      '1. Nombre total d\'électrons pour Z = 8 : 8 électrons.',
      '2. Remplissage par énergie croissante : la couche K est saturée à 2 électrons -> (K)²',
      '3. Reste pour la couche L : 8 - 2 = 6 électrons -> (L)⁶.',
      '4. Nombre d\'électrons externes = 6.'
    ]
  },
  {
    id: 'q-2s-pc-ch-atome-4',
    exerciseId: 'ex-pc-ch-atome-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Classification périodique & Familles chimiques)',
    microConcept: 'Dans le tableau périodique de Mendeleïev, les éléments d\'une MÊME COLONNE possèdent le même nombre d\'électrons de valence sur leur couche externe et appartiennent à la même famille chimique, avec des propriétés chimiques très similaires.',
    hint: 'Les éléments de la 18e et dernière colonne (Hélium, Néon, Argon) ont leur couche externe saturée. Quel nom leur donne-t-on ?',
    prompt: 'Comment nomme-t-on la famille chimique des éléments situés dans la dernière colonne (colonne 18) du tableau périodique, réputés pour leur grande inertie chimique ?',
    options: [
      'Les gaz nobles (ou gaz rares)',
      'Les métaux alcalins',
      'Les halogènes',
      'Les métaux de transition'
    ],
    correctAnswer: 'Les gaz nobles (ou gaz rares)',
    commonMistake: 'Confondre les halogènes (colonne 17, très réactifs comme le fluor ou chlore) avec les gaz nobles (colonne 18, inertes et chimiquement très stables).',
    explanation: 'Les gaz nobles (He, Ne, Ar, Kr, Xe) ont une couche externe complètement saturée (duet pour He, octet pour les autres). Ils ne forment pas de liaisons chimiques dans les conditions ordinaires.',
    steps: [
      '1. Colonne 1 : Métaux alcalins (Li, Na, K...).',
      '2. Colonne 17 : Halogènes (F, Cl, Br, I...).',
      '3. Colonne 18 : Gaz nobles chimiquement inertes (He, Ne, Ar...).'
    ]
  },
  {
    id: 'q-2s-pc-ch-atome-5',
    exerciseId: 'ex-pc-ch-atome-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Formation des ions & Règle de l\'octet)',
    microConcept: 'Règle du duet et de l\'octet : Les atomes cherchent à acquérir la configuration électronique stable du gaz noble le plus proche (2 électrons sur K ou 8 sur la couche externe). Le chlore (Z = 17, formule (K)²(L)⁸(M)⁷) gagne 1 électron pour former l\'ion Cl⁻.',
    hint: 'Le sodium a pour numéro Z = 11. Sa structure est (K)²(L)⁸(M)¹. Que fait-il pour avoir 8 électrons sur sa dernière couche ?',
    prompt: 'L\'atome de sodium Na a Z = 11 électrons. Quel ion monoatomique stable forme-t-il spontanément en solution pour respecter la règle de l\'octet ?',
    options: [
      'L\'ion sodium Na⁺ (en perdant son unique électron de valence M¹)',
      'L\'ion sodium Na⁻ (en gagnant un électron)',
      'L\'ion sodium Na²⁺ (en perdant deux électrons)',
      'Il ne forme jamais d\'ion'
    ],
    correctAnswer: 'L\'ion sodium Na⁺ (en perdant son unique électron de valence M¹)',
    commonMistake: 'Croire qu\'il va gagner 7 électrons pour remplir la couche M. Il est énergétiquement beaucoup plus facile de perdre 1 électron pour devenir (K)²(L)⁸ (structure du néon).',
    explanation: 'La structure de Na (Z=11) est (K)²(L)⁸(M)¹. En perdant son électron externe, il acquiert la structure très stable (K)²(L)⁸ du néon avec 10 électrons et 11 protons, d\'où une charge nette de +1 : l\'ion Na⁺.',
    steps: [
      '1. Configuration de l\'atome neutre Na : (K)²(L)⁸(M)¹.',
      '2. Perte du seul électron de la couche M : reste (K)²(L)⁸ (couche L saturée à 8 électrons).',
      '3. Bilan de charges : 11 protons (+11) et 10 électrons (-10) = charge +1.',
      '4. Symbole de l\'ion : Na⁺.'
    ]
  }
];

// ==========================================
// 7. CHIMIE - C. QUANTITÉ DE MATIÈRE & LA MOLE
// ==========================================
export const SECONDE_CHIMIE_MOLE_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-ch-mole-1',
    exerciseId: 'ex-pc-ch-mole-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Définition de la Mole & Constante d\'Avogadro)',
    microConcept: 'La mole (mol) est l\'unité de quantité de matière. Une mole contient exactement N_A ≈ 6,02 × 10²³ entités élémentaires (atomes, molécules ou ions). Ce nombre immense est la constante d\'Avogadro N_A.',
    hint: 'La mole est comme une "douzaine", mais pour les particules microscopiques : un paquet fixe d\'atomes ou molécules.',
    prompt: 'Que représente la mole en sciences physiques et chimiques ?',
    options: [
      'Un "paquet" contenant environ 6,02 × 10²³ entités chimiques identiques',
      'La masse exacte d\'un mètre cube de gaz',
      'Le nombre total de protons dans l\'univers',
      'La vitesse de réaction chimique à 0 °C'
    ],
    correctAnswer: 'Un "paquet" contenant environ 6,02 × 10²³ entités chimiques identiques',
    commonMistake: 'Confondre la mole (quantité de matière n en mol) avec la molécule ou avec la masse molaire M.',
    explanation: 'La mole permet aux chimistes de compter des quantités gigantesques d\'atomes ou de molécules à l\'échelle macroscopique grâce à la constante d\'Avogadro N_A = 6,02 × 10²³ mol⁻¹.',
    steps: [
      '1. Les atomes sont infiniment petits et innombrables.',
      '2. Pour relier le microscopique au macroscopique, on les regroupe par paquets.',
      '3. Chaque paquet d\'une mole contient N_A = 6,02 × 10²³ particules.'
    ]
  },
  {
    id: 'q-2s-pc-ch-mole-2',
    exerciseId: 'ex-pc-ch-mole-2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Masse molaire de l\'eau H₂O)',
    microConcept: 'La masse molaire moléculaire M est la masse d\'une mole de molécules. Elle se calcule en additionnant les masses molaires atomiques de tous les atomes de la formule chimique : M(H₂O) = 2 · M(H) + M(O).',
    hint: 'On donne M(H) = 1 g/mol et M(O) = 16 g/mol. Calcule 2 × 1 + 16.',
    prompt: 'En prenant M(H) = 1 g/mol et M(O) = 16 g/mol, quelle est la masse molaire moléculaire M de l\'eau pure H₂O (en g/mol) ?',
    correctAnswer: 18,
    commonMistake: 'Oublier de multiplier par 2 l\'atome d\'hydrogène (1 + 16 = 17 g/mol).',
    explanation: 'M(H₂O) = 2 × M(H) + 1 × M(O) = 2 × 1 + 16 = 18 g/mol. Une mole d\'eau pèse exactement 18 grammes.',
    steps: [
      '1. Formule chimique de l\'eau : 2 atomes H et 1 atome O.',
      '2. M = 2 × 1 g/mol + 16 g/mol.',
      '3. M = 2 + 16 = 18 g/mol.'
    ]
  },
  {
    id: 'q-2s-pc-ch-mole-3',
    exerciseId: 'ex-pc-ch-mole-3',
    type: 'numeric',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Relation fondamentale n = m / M)',
    microConcept: 'La quantité de matière n (en mol) contenue dans un échantillon de masse m (en g) d\'une espèce de masse molaire M (en g/mol) est donnée par la relation : n = m / M.',
    hint: 'On a une masse de m = 36 g d\'eau pure et sa masse molaire est M = 18 g/mol. Calcule n = 36 / 18.',
    prompt: 'Un élève pèse m = 36 g d\'eau distillée (M = 18 g/mol) dans un bécher. Quelle est la quantité de matière n (en moles) correspondante ?',
    correctAnswer: 2,
    commonMistake: 'Multiplier la masse par la masse molaire (36 × 18 = 648 mol) au lieu de diviser.',
    explanation: 'n = m / M = 36 g / (18 g/mol) = 2,0 mol. Cet échantillon contient 2 moles de molécules d\'eau.',
    steps: [
      '1. Identifier la masse m = 36 g.',
      '2. Identifier la masse molaire M = 18 g/mol.',
      '3. Calculer n = m / M = 36 / 18 = 2 mol.'
    ]
  },
  {
    id: 'q-2s-pc-ch-mole-4',
    exerciseId: 'ex-pc-ch-mole-4',
    type: 'numeric',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Volume molaire d\'un gaz V = n · Vm)',
    microConcept: 'D\'après la loi d\'Avogadro-Ampère, dans les mêmes conditions de température et de pression, une mole de n\'importe quel gaz occupe le même volume molaire V_m. La relation est : V = n · V_m ou n = V / V_m.',
    hint: 'Multiplie le nombre de moles n = 0,5 mol par le volume molaire V_m = 24 L/mol.',
    prompt: 'Dans les conditions ambiantes de température et de pression au laboratoire, le volume molaire des gaz vaut V_m = 24 L/mol. Quel volume V (en Litres) occupe une quantité n = 0,5 mol de gaz dioxygène O₂ ?',
    correctAnswer: 12,
    commonMistake: 'Diviser 24 par 0,5 (ce qui donnerait 48 L au lieu de 12 L).',
    explanation: 'V = n × V_m = 0,5 mol × 24 L/mol = 12 L.',
    steps: [
      '1. Formule des gaz : V = n · V_m.',
      '2. Données : n = 0,5 mol et V_m = 24 L/mol.',
      '3. Calcul : V = 0,5 × 24 = 12 L.'
    ]
  },
  {
    id: 'q-2s-pc-ch-mole-5',
    exerciseId: 'ex-pc-ch-mole-5',
    type: 'numeric',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Concentration molaire C = n / V)',
    microConcept: 'La concentration molaire C d\'un soluté en solution aqueuse est la quantité de matière n de soluté dissous par litre de solution : C = n / V_solution, avec n en mol, V en Litres (L) et C en mol/L. Attention : 500 mL = 0,5 L.',
    hint: 'Convertis 500 mL en Litres : 500 mL = 0,5 L. Calcule ensuite C = 0,1 / 0,5.',
    prompt: 'On dissout complètement une quantité de sel de table n = 0,10 mol dans une fiole jaugée d\'eau de volume V = 500 mL (soit 0,50 L). Quelle est la concentration molaire C de la solution en mol/L ? (Indiquer le nombre décimal)',
    correctAnswer: 0.2,
    commonMistake: 'Diviser par 500 sans convertir en Litres (0,1 / 500 = 0,0002 mol/L).',
    explanation: 'V = 500 mL = 0,50 L. C = n / V = 0,10 mol / 0,50 L = 0,20 mol/L.',
    steps: [
      '1. Convertir le volume de solution en Litres : V = 500 mL = 0,5 L.',
      '2. Formule : C = n / V.',
      '3. Calcul : C = 0,10 / 0,5 = 0,2 mol/L.'
    ]
  }
];

// ==========================================
// 8. CHIMIE - D. TRANSFORMATIONS CHIMIQUES & SOLUTIONS AQUEUSES
// ==========================================
export const SECONDE_CHIMIE_SOLUTIONS_QUESTIONS: ExerciseQuestion[] = [
  {
    id: 'q-2s-pc-ch-sol-1',
    exerciseId: 'ex-pc-ch-sol-1',
    type: 'mcq',
    difficulty: 1,
    difficultyLabel: 'Niveau 1 : Découverte (Échelle de pH à 25 °C)',
    microConcept: 'L\'échelle de pH mesure l\'acidité ou la basicité d\'une solution aqueuse (de 0 à 14 à 25 °C). Une solution est ACIDE si son pH < 7, NEUTRE si son pH = 7 (eau pure), et BASIQUE si son pH > 7.',
    hint: 'Plus le pH est petit (vers 0 ou 1), plus la solution est acide. À 7, elle est neutre.',
    prompt: 'Le jus de citron a un pH mesuré de 2,4. Comment qualifie-t-on cette solution aqueuse ?',
    options: [
      'Solution nettement acide (car son pH est strictement inférieur à 7)',
      'Solution basique',
      'Solution rigoureusement neutre',
      'Solution amphotère sans ions'
    ],
    correctAnswer: 'Solution nettement acide (car son pH est strictement inférieur à 7)',
    commonMistake: 'Penser que 7 est acide et que les grands nombres sont "forts". Plus le pH est faible, plus la concentration en ions hydrogène H⁺ (ou H₃O⁺) est élevée.',
    explanation: 'À 25 °C, toute solution dont le pH est inférieur à 7 est acide. 2,4 < 7, le jus de citron est donc une solution acide.',
    steps: [
      '1. Comparer la valeur au seuil de neutralité : pH_neutre = 7,0.',
      '2. Ici pH = 2,4 < 7.',
      '3. Conclusion : solution acide.'
    ]
  },
  {
    id: 'q-2s-pc-ch-sol-2',
    exerciseId: 'ex-pc-ch-sol-2',
    type: 'numeric',
    difficulty: 2,
    difficultyLabel: 'Niveau 2 : Application directe (Équilibrage d\'équation-bilan : Combustion)',
    microConcept: 'Lors d\'une transformation chimique, il y a conservation des éléments chimiques et de la charge (principe de Lavoisier : "Rien ne se perd, rien ne se crée, tout se transforme"). On ajuste les coefficients stœchiométriques.',
    hint: 'CH₄ + a O₂ -> CO₂ + 2 H₂O. À droite, compte les atomes d\'oxygène : 2 dans CO₂ + 2 dans 2 H₂O = 4 atomes d\'oxygène au total. Quel doit être le coefficient "a" devant O₂ pour avoir 4 atomes O ?',
    prompt: 'On considère l\'équation de combustion complète du méthane : CH₄ + a O₂ -> CO₂ + 2 H₂O. Quel est le coefficient stœchiométrique entier "a" devant O₂ pour équilibrer la réaction ?',
    correctAnswer: 2,
    commonMistake: 'Mettre 4 au lieu de 2, en oubliant que la molécule de dioxygène O₂ contient déjà 2 atomes d\'oxygène (2 × 2 = 4).',
    explanation: 'À droite, on a 2 oxygènes dans CO₂ et 2 oxygènes dans 2 H₂O, soit 4 atomes d\'oxygène. Il faut donc 2 molécules de O₂ à gauche (2 × 2 = 4). L\'équation équilibrée est : CH₄ + 2 O₂ -> CO₂ + 2 H₂O.',
    steps: [
      '1. Bilan Carbone : 1 C à gauche (CH₄), 1 C à droite (CO₂). Équilibré.',
      '2. Bilan Hydrogène : 4 H à gauche (CH₄), 2 × 2 = 4 H à droite (2 H₂O). Équilibré.',
      '3. Bilan Oxygène : à droite 2 + 2 = 4 atomes O. À gauche a × 2 = 4 => a = 2.'
    ]
  },
  {
    id: 'q-2s-pc-ch-sol-3',
    exerciseId: 'ex-pc-ch-sol-3',
    type: 'mcq',
    difficulty: 3,
    difficultyLabel: 'Niveau 3 : Intermédiaire (Effet de la dilution sur le pH)',
    microConcept: 'Lorsqu\'on dilue une solution acide en y ajoutant de l\'eau pure (pH = 7), la concentration en ions H⁺ diminue : le pH AUGMENTE et se rapproche de 7, sans jamais dépasser 7. Inversement, pour une base, le pH diminue vers 7.',
    hint: 'Si on ajoute beaucoup d\'eau pure à un acide, il devient moins agressif, son pH se rapproche de l\'eau pure (7).',
    prompt: 'Lorsqu\'on ajoute de l\'eau distillée pure à une solution d\'acide chlorhydrique dont le pH initial était de 1, comment évolue son pH ?',
    options: [
      'Le pH augmente progressivement en se rapprochant de 7 (la solution devient moins acide)',
      'Le pH diminue vers 0 (la solution devient plus acide)',
      'Le pH reste rigoureusement inchangé',
      'Le pH dépasse immédiatement 10 pour devenir basique'
    ],
    correctAnswer: 'Le pH augmente progressivement en se rapprochant de 7 (la solution devient moins acide)',
    commonMistake: 'Penser que diluer rend la solution "plus acide" ou que le pH peut dépasser 7 en ajoutant seulement de l\'eau.',
    explanation: 'La dilution diminue la concentration des ions H⁺. Moins la solution est acide, plus son pH est élevé, tendant vers la neutralité pH = 7 de l\'eau ajoutée.',
    steps: [
      '1. Ajout d\'eau pure (pH = 7) => dilution du soluté acide.',
      '2. La concentration en ions responsables de l\'acidité baisse.',
      '3. Le pH augmente et converge vers 7.'
    ]
  },
  {
    id: 'q-2s-pc-ch-sol-4',
    exerciseId: 'ex-pc-ch-sol-4',
    type: 'mcq',
    difficulty: 4,
    difficultyLabel: 'Niveau 4 : Avancé (Indicateurs colorés : Bleu de Bromothymol)',
    microConcept: 'Un indicateur coloré acido-basique change de couleur selon le pH de la solution. Le Bleu de Bromothymol (BBT) est : JAUNE en milieu acide (pH < 6,0), VERT en milieu neutre (zone de virage 6,0 à 7,6), et BLEU en milieu basique (pH > 7,6).',
    hint: 'Dans une solution de savon ou de soude (pH = 10, basique), le BBT prend sa teinte basique caractéristique.',
    prompt: 'Quelle couleur prend une solution basique d\'hydroxyde de sodium (pH = 11) lorsqu\'on y verse quelques gouttes de Bleu de Bromothymol (BBT) ?',
    options: [
      'Bleu vif',
      'Jaune canari',
      'Incolore limpide',
      'Rouge écarlate'
    ],
    correctAnswer: 'Bleu vif',
    commonMistake: 'Répondre jaune (couleur du BBT en milieu acide) ou vert (couleur en milieu neutre).',
    explanation: 'Le BBT est un indicateur coloré classique : il est jaune en milieu acide, vert en milieu neutre, et prend une coloration bleu franc dès que le pH est supérieur à 7,6 (milieu basique).',
    steps: [
      '1. Identifier la nature de la solution : pH = 11 > 7 => milieu basique.',
      '2. Règle du BBT : acide = jaune, neutre = vert, basique = bleu.',
      '3. Donc la solution se colore en bleu.'
    ]
  },
  {
    id: 'q-2s-pc-ch-sol-5',
    exerciseId: 'ex-pc-ch-sol-5',
    type: 'mcq',
    difficulty: 5,
    difficultyLabel: 'Niveau 5 : Défi de Maîtrise (Test caractéristique de reconnaissance des ions)',
    microConcept: 'Tests d\'identification par précipitation avec la soude (hydroxyde de sodium Na⁺ + HO⁻) : Cu²⁺ donne un précipité BLEU d\'hydroxyde de cuivre Cu(OH)₂ ; Fe²⁺ donne un précipité VERT de Fe(OH)₂ ; Fe³⁺ donne un précipité ROUILLE de Fe(OH)₃.',
    hint: 'Pense à la couleur caractéristique des sels de cuivre (comme le sulfate de cuivre hydraté ou la statue de la liberté avec le vert-de-gris). Quel ion donne un beau précipité bleu azur avec la soude ?',
    prompt: 'Lors d\'une séance de travaux pratiques, l\'ajout de quelques gouttes de solution de soude (hydroxyde de sodium) dans un tube à essai contenant une solution inconnue provoque instantanément l\'apparition d\'un précipité bleu intense. Quels ions métalliques sont ainsi mis en évidence ?',
    options: [
      'Les ions cuivre(II) Cu²⁺',
      'Les ions fer(II) Fe²⁺',
      'Les ions fer(III) Fe³⁺',
      'Les ions zinc Zn²⁺'
    ],
    correctAnswer: 'Les ions cuivre(II) Cu²⁺',
    commonMistake: 'Confondre le précipité bleu de Cu²⁺ avec le précipité vert rouille de Fe²⁺.',
    explanation: 'La réaction Cu²⁺ + 2 HO⁻ -> Cu(OH)₂(s) produit un précipité bleu gélatineux caractéristique de l\'hydroxyde de cuivre(II). Fe²⁺ donnerait un précipité vert et Fe³⁺ donnerait un précipité rouille.',
    steps: [
      '1. Réactif utilisé : la soude (ions hydroxyde HO⁻).',
      '2. Précipité obtenu : bleu caractéristique.',
      '3. Formule du précipité : Cu(OH)₂ (hydroxyde de cuivre II).',
      '4. Conclusion : la solution contient des ions Cu²⁺.'
    ]
  }
];

export const PHYSICS_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  'skill-2s-pc-mecanique1': SECONDE_MECANIQUE_1_QUESTIONS,
  'skill-2s-pc-mecanique2': SECONDE_MECANIQUE_2_QUESTIONS,
  'skill-2s-pc-equilibre-forces': SECONDE_EQUILIBRE_FORCES_QUESTIONS,
  'skill-2s-pc-theoreme-moments': SECONDE_THEOREME_MOMENTS_QUESTIONS,
  'skill-2s-pc-electricite': SECONDE_ELECTRICITE_QUESTIONS,
  'skill-2s-pc-optique': SECONDE_OPTIQUE_QUESTIONS,
  'skill-2s-pc-chimie-matiere': SECONDE_CHIMIE_MATIERE_QUESTIONS,
  'skill-2s-pc-chimie-atome': SECONDE_CHIMIE_ATOME_QUESTIONS,
  'skill-2s-pc-chimie-mole': SECONDE_CHIMIE_MOLE_QUESTIONS,
  'skill-2s-pc-chimie-solutions': SECONDE_CHIMIE_SOLUTIONS_QUESTIONS,
};
