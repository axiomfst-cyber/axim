import { ExerciseQuestion } from '../types';

// =========================================================================================
// BANQUE DE QUESTIONS CALIBRÉES BACCALAURÉAT SÉRIE C & D (PHYSIQUE-CHIMIE TERMINALE)
// Conforme au Programme Officiel Gabonais (4 Blocs de Physique + 3 Blocs de Chimie)
// =========================================================================================

export const TERMINALE_PHYSICS_CHEMISTRY_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // =======================================================================================
  // 🧲 PARTIE PHYSIQUE
  // =======================================================================================

  // --- Bloc 1 : Cinématique et Dynamique du Point ---
  'skill-tpc-cinematique-vecteurs': [
    {
      id: 'q-tpc-cin-1',
      exerciseId: 'ex-tpc-cin',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Cinématique : Repère de Frenet & Mouvement Circulaire',
      microConcept: 'Dans le repère de Frenet (M, u_t, u_n), l\'accélération se décompose en a = (dv/dt) u_t + (v²/R) u_n. Pour un mouvement circulaire uniforme (MCU), la vitesse scalaire v est constante (dv/dt = 0), donc l\'accélération est purement normale et centripète : a = a_n = v²/R = R ω².',
      hint: 'Pour un mouvement uniforme, la composante tangentielle de l\'accélération est nulle.',
      prompt: 'Un point mobile décrit une trajectoire circulaire de rayon R = 0,5 m à une vitesse scalaire constante v = 4 m/s. Quelle est la valeur de son accélération ?',
      options: [
        'a = 32 m/s², dirigée vers le centre de la trajectoire (centripète)',
        'a = 0 m/s² car la vitesse est constante',
        'a = 8 m/s², tangentielle à la trajectoire',
        'a = 16 m/s², centrifuge'
      ],
      correctAnswer: 'a = 32 m/s², dirigée vers le centre de la trajectoire (centripète)',
      explanation: 'Dans un mouvement circulaire uniforme, dv/dt = 0 donc a_t = 0. L\'accélération est uniquement normale : a = a_n = v² / R = 4² / 0,5 = 16 / 0,5 = 32 m/s². Elle est centripète (orientée vers le centre de la courbure).',
      steps: [
        '1. Rappeler la formule de l\'accélération dans la base de Frenet : a = (dv/dt) u_t + (v²/R) u_n.',
        '2. Mouvement uniforme ⇒ v = cste ⇒ dv/dt = 0 ⇒ a = a_n = v²/R.',
        '3. Calcul numérique : a = 4² / 0,5 = 16 / 0,5 = 32 m/s².'
      ]
    },
    {
      id: 'q-tpc-cin-2',
      exerciseId: 'ex-tpc-cin',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Cinématique : Chiffres Significatifs & Mesure',
      microConcept: 'Lors d\'une multiplication ou d\'une division de grandeurs mesurées, le résultat doit être arrondi avec le même nombre de chiffres significatifs que la donnée la moins précise.',
      hint: 'Comptez les chiffres significatifs de 12,4 (3 CS) et 2,50 (3 CS) ou 2,5 (2 CS).',
      prompt: 'On calcule la distance parcourue d = v × t avec une vitesse v = 14,2 m/s et une durée t = 3,0 s. Quel résultat doit-on écrire en respectant les règles des chiffres significatifs ?',
      options: [
        '43 m',
        '42,6 m',
        '42,60 m',
        '40 m'
      ],
      correctAnswer: '43 m',
      explanation: '14,2 comporte 3 chiffres significatifs, tandis que 3,0 en comporte 2. Le résultat du produit 14,2 × 3,0 = 42,6 doit donc être arrondi à 2 chiffres significatifs, ce qui donne 43 m.',
      steps: [
        '1. v = 14,2 a 3 chiffres significatifs.',
        '2. t = 3,0 a 2 chiffres significatifs.',
        '3. Le résultat doit comporter 2 chiffres significatifs : 42,6 s\'arrondit à 43 m.'
      ]
    }
  ],

  'skill-tpc-centre-inertie-newton': [
    {
      id: 'q-tpc-newton-1',
      exerciseId: 'ex-tpc-newton',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Dynamique : Deuxième Loi de Newton sur Plan Incliné',
      microConcept: 'Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un solide est égale au produit de sa masse par l\'accélération de son centre d\'inertie : ∑ F_ext = m a_G. Sur un plan incliné d\'un angle α sans frottement, la projection selon la ligne de plus grande pente donne a = g sin(α).',
      hint: 'Projetez les forces (poids et réaction normale) sur l\'axe parallèle au plan incliné orienté vers le bas.',
      prompt: 'Un solide de masse m glisse sans frottement le long d\'un plan incliné faisant un angle α = 30° avec l\'horizontale. On prend g = 10 m/s². Quelle est l\'accélération a_G du solide ?',
      options: [
        '5 m/s²',
        '10 m/s²',
        '8,66 m/s²',
        '2,5 m/s²'
      ],
      correctAnswer: '5 m/s²',
      explanation: 'Le bilan des forces exercées sur le solide comprend le poids P et la réaction normale R du plan. En projetant la relation fondamentale ∑ F_ext = m a sur l\'axe Ox dirigé vers le bas le long du plan : P_x + R_x = m a ⇒ m g sin(α) + 0 = m a, d\'où a = g sin(α) = 10 × sin(30°) = 10 × 0,5 = 5 m/s².',
      steps: [
        '1. Faire le bilan des forces : Poids P (vertical) et Réaction normale R (perpendiculaire au plan).',
        '2. Appliquer la 2e loi de Newton : P + R = m a.',
        '3. Projeter sur l\'axe parallèle au plan : m g sin(α) = m a ⇒ a = g sin(α) = 10 × 0,5 = 5 m/s².'
      ]
    }
  ],

  'skill-tpc-gravitation-satellites': [
    {
      id: 'q-tpc-sat-1',
      exerciseId: 'ex-tpc-sat',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Gravitation : Vitesse Orbitale d’un Satellite',
      microConcept: 'Pour un satellite de masse m en orbite circulaire de rayon r = R_T + h autour de la Terre de masse M_T, la force gravitationnelle centripète F = G M_T m / r² = m v² / r impose une vitesse orbitale v = √(G M_T / r).',
      hint: 'Égalez la force gravitationnelle à la force centripète m v² / r.',
      prompt: 'Si le rayon de l’orbite circulaire d’un satellite autour de la Terre est multiplié par 4, par quel facteur sa vitesse orbitale v est-elle multipliée ?',
      options: [
        'Divisée par 2 (multipliée par 1/2)',
        'Divisée par 4',
        'Multipliée par 2',
        'Multipliée par 16'
      ],
      correctAnswer: 'Divisée par 2 (multipliée par 1/2)',
      explanation: 'La vitesse orbitale est donnée par v = √(G M_T / r). Si r devient r\' = 4r, alors v\' = √(G M_T / (4r)) = 1/√4 × √(G M_T / r) = 1/2 v. La vitesse est donc divisée par 2.',
      steps: [
        '1. Expression de la vitesse orbitale : v = √(G M_T / r).',
        '2. Remplacer r par 4r : v\' = √(G M_T / (4r)) = (1/2) √(G M_T / r).',
        '3. Conclure : la vitesse orbitale est divisée par 2.'
      ]
    }
  ],

  'skill-tpc-force-constante-champ': [
    {
      id: 'q-tpc-champ-1',
      exerciseId: 'ex-tpc-champ',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Champ Uniforme : Particule dans un Champ Électrostatique',
      microConcept: 'Une particule de charge q et de masse m placée dans un condensateur plan soumis à un champ électrique uniforme E = U/d subit une force constante F = q E. L\'accélération est a = q E / m.',
      hint: 'Exprimez l\'accélération en appliquant la 2e loi de Newton : F = q E = m a.',
      prompt: 'Un électron (charge -e = -1,6 × 10⁻¹⁹ C, masse m) pénètre avec une vitesse horizontale v₀ entre deux plaques planes horizontales distantes de d = 2 cm entre lesquelles règne une tension U = 200 V. Quelle est la valeur du champ électrique E entre les armatures ?',
      options: [
        '10 000 V/m (ou N/C)',
        '400 V/m',
        '100 V/m',
        '4 000 V/m'
      ],
      correctAnswer: '10 000 V/m (ou N/C)',
      explanation: 'Dans un condensateur plan, le champ électrique uniforme a pour intensité E = U / d. Avec U = 200 V et d = 2 cm = 0,02 m, on a E = 200 / 0,02 = 10 000 V/m.',
      steps: [
        '1. Convertir la distance en mètres : d = 2 cm = 2 × 10⁻² m.',
        '2. Appliquer la formule du champ uniforme : E = U / d.',
        '3. Calcul numérique : E = 200 / 0,02 = 10 000 V/m.'
      ]
    }
  ],

  // --- Bloc 2 : Physique Nucléaire et Atomique ---
  'skill-tpc-niveaux-energie-atome': [
    {
      id: 'q-tpc-atome-1',
      exerciseId: 'ex-tpc-atome',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Physique Atomique : Émission d’un Photon & Relation de Planck',
      microConcept: 'Lorsqu\'un atome effectue une transition d\'un niveau d\'énergie supérieur E_n vers un niveau inférieur E_p, il émet un photon d\'énergie h ν = E_n - E_p = h c / λ. La longueur d\'onde émise est donc λ = h c / (E_n - E_p).',
      hint: 'Exprimez la différence d\'énergie ΔE en Joules (1 eV = 1,6 × 10⁻¹⁹ J) pour calculer la longueur d\'onde ou la fréquence.',
      prompt: 'Un atome d’hydrogène passe d’un niveau excité d’énergie E₂ = -3,40 eV au niveau fondamental E₁ = -13,60 eV. Quelle est l’énergie du photon émis ?',
      options: [
        '10,20 eV',
        '17,00 eV',
        '3,40 eV',
        '13,60 eV'
      ],
      correctAnswer: '10,20 eV',
      explanation: 'L\'énergie du photon émis est égale à la différence des deux niveaux d\'énergie : ΔE = E₂ - E₁ = -3,40 - (-13,60) = 13,60 - 3,40 = 10,20 eV. En Joules, cela correspond à 10,20 × 1,6 × 10⁻¹⁹ J ≈ 1,63 × 10⁻¹⁸ J.',
      steps: [
        '1. Écrire la relation de Bohr : E_photon = E_initial - E_final.',
        '2. Remplacer par les valeurs : E_photon = (-3,40 eV) - (-13,60 eV).',
        '3. Obtenir : 10,20 eV.'
      ]
    }
  ],

  'skill-tpc-noyau-radioactivite': [
    {
      id: 'q-tpc-radio-1',
      exerciseId: 'ex-tpc-radio',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Décroissance Radioactive : Période Radioactive (Demi-Vie)',
      microConcept: 'La demi-vie (ou période radioactive t_{1/2}) est la durée au bout de laquelle le nombre de noyaux radioactifs initialement présents est divisé par deux : N(t_{1/2}) = N₀ / 2. Au bout de n demi-vies, N(n × t_{1/2}) = N₀ / 2^n.',
      hint: 'Calculez le nombre de périodes écoulées au bout de 60 jours pour une demi-vie de 20 jours.',
      prompt: 'Un échantillon radioactif a une période radioactive t_{1/2} = 20 jours. Quelle fraction du nombre initial de noyaux radioactifs subsiste au bout de 60 jours ?',
      options: [
        '1/8 (soit 12,5 %)',
        '1/4 (soit 25 %)',
        '1/3 (soit 33 %)',
        '1/16 (soit 6,25 %)'
      ],
      correctAnswer: '1/8 (soit 12,5 %)',
      explanation: 'La durée écoulée t = 60 jours correspond à n = 60 / 20 = 3 périodes radioactives. Au bout de 3 périodes, la fraction restante est (1/2)³ = 1/8, soit 12,5 % des noyaux initiaux.',
      steps: [
        '1. Calculer le nombre de demi-vies : n = t / t_{1/2} = 60 / 20 = 3.',
        '2. Appliquer la loi de division par 2 : N = N₀ / (2³) = N₀ / 8.',
        '3. Il reste donc 1/8 (12,5 %) des noyaux non désintégrés.'
      ]
    },
    {
      id: 'q-tpc-radio-2',
      exerciseId: 'ex-tpc-radio',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Réactions Nucléaires : Lois de Soddy',
      microConcept: 'Lors d\'une désintégration radioactive, il y a conservation du nombre total de nucléons A et de la charge électrique totale Z (Lois de Soddy). Une particule alpha α est un noyau d\'hélium ⁴₂He.',
      hint: 'Vérifiez la conservation de A et Z : A_parent = A_fils + A_particule et Z_parent = Z_fils + Z_particule.',
      prompt: 'Le noyau d’uranium ²³⁸₉₂U se désintègre par émission d’une particule alpha (⁴₂He) pour former un noyau de thorium ²³⁴_Z Th. Quel est le numéro atomique Z du thorium produit ?',
      options: [
        'Z = 90',
        'Z = 94',
        'Z = 91',
        'Z = 88'
      ],
      correctAnswer: 'Z = 90',
      explanation: 'D\'après la loi de Soddy pour le nombre de charge Z : Z_uranium = Z_thorium + Z_alpha ⇒ 92 = Z + 2, d\'où Z = 92 - 2 = 90.',
      steps: [
        '1. Écrire l\'équation nucléaire : ²³⁸₉₂U → ²³⁴_Z Th + ⁴₂He.',
        '2. Appliquer la conservation de Z : 92 = Z + 2.',
        '3. En déduire Z = 90.'
      ]
    }
  ],

  'skill-tpc-fission-fusion': [
    {
      id: 'q-tpc-fis-1',
      exerciseId: 'ex-tpc-fis',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Réactions Nucléaires Provoquées : Fission vs Fusion',
      microConcept: 'La fission est la cassure d\'un noyau lourd instable (comme l\'uranium 235) sous l\'impact d\'un neutron en deux noyaux plus légers. La fusion est la réunion de deux noyaux légers (comme le deutérium et le tritium) pour former un noyau plus lourd.',
      hint: 'Repérez si la réaction implique des noyaux très légers (hydrogène) ou un noyau très lourd (uranium).',
      prompt: 'Considérons la réaction : ²₁H + ³₁H → ⁴₂He + ¹₀n. De quel type de réaction nucléaire s’agit-il ?',
      options: [
        'Une réaction de fusion nucléaire',
        'Une réaction de fission nucléaire',
        'Une désintégration radioactive spontanée bêta moins',
        'Une ionisation atomique'
      ],
      correctAnswer: 'Une réaction de fusion nucléaire',
      explanation: 'Deux noyaux légers (le deutérium ²₁H et le tritium ³₁H) s\'unissent pour former un noyau plus lourd (l\'hélium ⁴₂He) avec libération d\'un neutron et d\'une grande quantité d\'énergie. Il s\'agit de la réaction de fusion thermonucléaire.',
      steps: [
        '1. Identifier les réactifs : ²₁H (deutérium) et ³₁H (tritium) sont des noyaux très légers.',
        '2. Constater l\'union pour former un noyau plus lourd (⁴₂He).',
        '3. Conclure : c\'est une réaction de fusion.'
      ]
    }
  ],

  // --- Bloc 3 : Systèmes Oscillants & Électromagnétisme ---
  'skill-tpc-pendule-elastique': [
    {
      id: 'q-tpc-pend-1',
      exerciseId: 'ex-tpc-pend',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Oscillateur Élastique : Période Propre',
      microConcept: 'La période propre d\'un pendule élastique constitué d\'un solide de masse m attaché à un ressort de raideur k sans frottement est T₀ = 2π √(m / k). Elle est indépendante de l\'amplitude des oscillations (isochronisme des petites oscillations).',
      hint: 'Si la masse m est quadruplée, quelle est l\'incidence sous la racine carrée ?',
      prompt: 'Un pendule élastique horizontal a une période propre T₀ = 1,0 s avec une masse m. Si on remplace cette masse par une masse m\' = 4m sans modifier le ressort, que devient la nouvelle période propre T\'₀ ?',
      options: [
        'T\'₀ = 2,0 s',
        'T\'₀ = 0,5 s',
        'T\'₀ = 4,0 s',
        'T\'₀ = 1,41 s'
      ],
      correctAnswer: 'T\'₀ = 2,0 s',
      explanation: 'T₀ = 2π √(m/k). Avec m\' = 4m, on a T\'₀ = 2π √(4m/k) = √4 × (2π √(m/k)) = 2 × T₀ = 2 × 1,0 = 2,0 s.',
      steps: [
        '1. Rappeler la formule de la période propre : T₀ = 2π √(m/k).',
        '2. Exprimer T\'₀ avec m\' = 4m : T\'₀ = 2π √(4m/k) = 2 T₀.',
        '3. Calculer : 2 × 1,0 = 2,0 s.'
      ]
    }
  ],

  'skill-tpc-champ-b-laplace': [
    {
      id: 'q-tpc-lap-1',
      exerciseId: 'ex-tpc-lap',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Électromagnétisme : Loi et Force de Laplace',
      microConcept: 'Une tige conductrice de longueur L parcourue par une intensité I et placée perpendiculairement dans un champ magnétique uniforme B subit la force de Laplace F = I L B. La direction et le sens sont donnés par la règle de la main droite ou des trois doigts.',
      hint: 'Appliquez directement F = I × L × B pour un conducteur rectiligne orthogonal au champ B.',
      prompt: 'Une tige conductrice de longueur active L = 10 cm parcourue par un courant d’intensité I = 5 A est placée perpendiculairement aux lignes d’un champ magnétique uniforme B = 0,2 T. Quelle est la valeur de la force de Laplace subie par cette tige ?',
      options: [
        '0,10 N',
        '1,0 N',
        '10 N',
        '0,01 N'
      ],
      correctAnswer: '0,10 N',
      explanation: 'La formule de Laplace pour un conducteur orthogonal au champ est F = I × L × B. Avec I = 5 A, L = 10 cm = 0,10 m et B = 0,2 T : F = 5 × 0,10 × 0,2 = 0,10 N.',
      steps: [
        '1. Convertir la longueur en mètres : L = 10 cm = 0,10 m.',
        '2. Appliquer la formule de Laplace : F = I × L × B.',
        '3. Calcul numérique : F = 5 × 0,10 × 0,2 = 0,10 N.'
      ]
    }
  ],

  'skill-tpc-induction-autoinduction': [
    {
      id: 'q-tpc-ind-1',
      exerciseId: 'ex-tpc-ind',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Auto-induction : Énergie Emmagasinée dans une Bobine',
      microConcept: 'Une bobine d\'inductance L traversée par un courant d\'intensité permanente I emmagasine une énergie magnétique E_m = 1/2 L I².',
      hint: 'Utilisez la relation E_m = (1/2) L I² en exprimant L en Henry et I en Ampère.',
      prompt: 'Une bobine d’inductance L = 0,5 H est parcourue par un courant continu d’intensité I = 2 A. Quelle est l’énergie magnétique emmagasinée dans cette bobine ?',
      options: [
        '1,0 J',
        '2,0 J',
        '0,5 J',
        '4,0 J'
      ],
      correctAnswer: '1,0 J',
      explanation: 'L\'énergie magnétique emmagasinée dans une bobine est donnée par E_m = 1/2 L I² = 1/2 × 0,5 × 2² = 1/2 × 0,5 × 4 = 1,0 J.',
      steps: [
        '1. Formule de l\'énergie magnétique : E_m = 1/2 L I².',
        '2. Remplacer par les valeurs : E_m = 0,5 × 0,5 × 4.',
        '3. Résultat : 1,0 Joule.'
      ]
    }
  ],

  'skill-tpc-circuits-oscillants-rlc': [
    {
      id: 'q-tpc-rlc-1',
      exerciseId: 'ex-tpc-rlc',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Circuit RLC Série : Résonance d’Intensité',
      microConcept: 'Dans un circuit RLC série en régime sinusoïdal forcé, la résonance d\'intensité se produit lorsque la pulsation imposée ω est égale à la pulsation propre ω₀ = 1 / √(LC). À la résonance, l\'impédance est minimale Z = R, l\'intensité efficace I_eff est maximale (I_max = U_eff / R) et la tension et le courant sont en phase (cos φ = 1).',
      hint: 'À la résonance, la réactance totale (Lω - 1/Cω) s\'annule.',
      prompt: 'À la résonance d’intensité d’un circuit RLC série alimenté sous une tension efficace U_eff = 12 V avec R = 24 Ω, quelle est la valeur de l’intensité efficace I_eff qui traverse le circuit ?',
      options: [
        '0,50 A',
        '2,0 A',
        '0,25 A',
        '0 A'
      ],
      correctAnswer: '0,50 A',
      explanation: 'À la résonance d\'intensité, l\'impédance du circuit RLC série se réduit à sa résistance pure Z = R = 24 Ω car la composante réactive s\'annule : Lω - 1/(Cω) = 0. L\'intensité efficace est donc I_eff = U_eff / R = 12 / 24 = 0,50 A.',
      steps: [
        '1. À la résonance, l\'impédance minimale est Z = R.',
        '2. Appliquer la loi d\'Ohm en alternatif : I_eff = U_eff / Z = U_eff / R.',
        '3. Calcul : 12 / 24 = 0,50 A.'
      ]
    }
  ],

  // --- Bloc 4 : Optique et Ondes ---
  'skill-tpc-optique-lentilles': [
    {
      id: 'q-tpc-opt-1',
      exerciseId: 'ex-tpc-opt',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Optique Géométrique : Formule de Conjugaison de Descartes',
      microConcept: 'Pour une lentille mince de centre optique O et de distance focale f\' = OF\', la formule de conjugaison avec des grandeurs algébriques est 1/OA\' - 1/OA = 1/OF\'.',
      hint: 'Attention au signe algébrique : un objet réel situé 30 cm devant la lentille a pour mesure algébrique OA = -30 cm = -0,30 m.',
      prompt: 'Un objet réel est placé à 30 cm devant une lentille mince convergente de distance focale f\' = +20 cm (OA = -30 cm). À quelle distance OA\' se forme l’image réelle ?',
      options: [
        'OA\' = +60 cm',
        'OA\' = +50 cm',
        'OA\' = -60 cm',
        'OA\' = +12 cm'
      ],
      correctAnswer: 'OA\' = +60 cm',
      explanation: 'D\'après la formule de Descartes : 1/OA\' = 1/OF\' + 1/OA = 1/20 + 1/(-30) = 1/20 - 1/30 = (3 - 2)/60 = 1/60. On en déduit OA\' = +60 cm. L\'image est réelle et située à 60 cm après la lentille.',
      steps: [
        '1. Poser la formule de conjugaison : 1/OA\' - 1/OA = 1/OF\'.',
        '2. Exprimer 1/OA\' : 1/OA\' = 1/OF\' + 1/OA = 1/20 - 1/30.',
        '3. Mettre au même dénominateur : 1/60 ⇒ OA\' = +60 cm.'
      ]
    }
  ],

  'skill-tpc-dispersion-diffraction-ondes': [
    {
      id: 'q-tpc-diff-1',
      exerciseId: 'ex-tpc-diff',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Diffraction de la Lumière : Écart Angulaire',
      microConcept: 'Lorsqu\'un faisceau lumineux monochromatique de longueur d\'onde λ traverse une fente de largeur a, le demi-angle de diffraction (écart angulaire) de la tache centrale est donné par θ = λ / a (en radians).',
      hint: 'Si la largeur a de la fente est divisée par 2, l\'angle θ double.',
      prompt: 'Un faisceau laser de longueur d’onde λ = 633 nm éclaire une fente de largeur a = 0,10 mm. Que devient l’écart angulaire θ si l’on remplace la fente par une autre de largeur a\' = 0,05 mm ?',
      options: [
        'Il est doublé (multiplié par 2)',
        'Il est divisé par 2',
        'Il reste inchangé',
        'Il est quadruplé'
      ],
      correctAnswer: 'Il est doublé (multiplié par 2)',
      explanation: 'L\'écart angulaire de diffraction est inversement proportionnel à la largeur de la fente : θ = λ / a. En divisant la largeur a par 2, le demi-angle θ\' = λ / (a/2) = 2 (λ/a) = 2θ est doublé.',
      steps: [
        '1. Formule de l\'écart angulaire : θ = λ / a.',
        '2. Comme a\' = a / 2, θ\' = λ / (a/2) = 2(λ/a) = 2θ.',
        '3. L\'angle est multiplié par 2.'
      ]
    }
  ],

  // =======================================================================================
  // 🧪 PARTIE CHIMIE
  // =======================================================================================

  // --- Bloc 1 : Solutions Aqueuses et Réactions Acido-Basiques ---
  'skill-tpc-solutions-ph-produit-ionique': [
    {
      id: 'q-tpc-ph-1',
      exerciseId: 'ex-tpc-ph',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Solutions Aqueuses : pH d’un Acide Fort',
      microConcept: 'Un monoacide fort (comme l\'acide chlorhydrique HCl) se dissocie totalement dans l\'eau : HCl + H₂O → H₃O⁺ + Cl⁻. La concentration en ions oxonium est [H₃O⁺] = C_a, et le pH est donné par pH = -log(C_a).',
      hint: 'Appliquez la formule pH = -log(C_a) pour une solution pas trop diluée (C_a ≥ 10⁻⁶ mol/L).',
      prompt: 'Quelle est la valeur du pH d’une solution aqueuse d’acide chlorhydrique de concentration molaire C_a = 2,5 × 10⁻³ mol/L à 25°C ? (Donnée : log(2,5) ≈ 0,40)',
      options: [
        '2,60',
        '3,40',
        '2,40',
        '1,40'
      ],
      correctAnswer: '2,60',
      explanation: 'L\'acide chlorhydrique étant un acide fort totalement dissocié, [H₃O⁺] = C_a = 2,5 × 10⁻³ mol/L. Le pH vaut pH = -log(2,5 × 10⁻³) = -(log(2,5) + log(10⁻³)) = -(0,40 - 3) = 3 - 0,40 = 2,60.',
      steps: [
        '1. Écrire la relation du monoacide fort : pH = -log C_a.',
        '2. Décomposer le logarithme : pH = -log(2,5) - log(10⁻³) = -0,40 + 3.',
        '3. Calcul : 3 - 0,40 = 2,60.'
      ]
    }
  ],

  'skill-tpc-couples-acide-base-tampon': [
    {
      id: 'q-tpc-tampon-1',
      exerciseId: 'ex-tpc-tampon',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Dosage Acido-Basique : Point de Demi-Équivalence & Solution Tampon',
      microConcept: 'Lors du dosage d\'un acide faible HA par une base forte HO⁻, au point de demi-équivalence (V = V_E / 2), la moitié de l\'acide a été transformée en sa base conjuguée : [HA] = [A⁻]. D\'après la relation d\'Henderson-Hasselbalch pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa. La solution obtenue est une solution tampon.',
      hint: 'À la demi-équivalence, les concentrations de l\'acide et de sa base conjuguée sont rigoureusement égales.',
      prompt: 'On dose 20 mL d’une solution d’acide éthanoïque CH₃COOH (pKa = 4,8) par une solution d’hydroxyde de sodium. Le volume équivalent obtenu est V_E = 14 mL. Quel est le pH de la solution lorsqu’on a versé exactement 7 mL de base ?',
      options: [
        'pH = 4,8',
        'pH = 7,0',
        'pH = 8,8',
        'pH = 2,4'
      ],
      correctAnswer: 'pH = 4,8',
      explanation: 'Le volume versé V = 7 mL correspond exactement à la moitié du volume équivalent V_E / 2 = 14 / 2 = 7 mL. On est au point de demi-équivalence. À ce point, [CH₃COOH] = [CH₃COO⁻], donc pH = pKa = 4,8.',
      steps: [
        '1. Constater que V = 7 mL = V_E / 2 : c\'est la demi-équivalence.',
        '2. À la demi-équivalence, [Acide] = [Base conjuguée].',
        '3. D\'après pH = pKa + log([Base]/[Acide]) = pKa + 0 = 4,8.'
      ]
    }
  ],

  // --- Bloc 2 : Cinétique Chimique ---
  'skill-tpc-cinetique-vitesse-facteurs': [
    {
      id: 'q-tpc-cinet-1',
      exerciseId: 'ex-tpc-cinet',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Cinétique Chimique : Évolution de la Vitesse Instantanée',
      microConcept: 'Au cours du temps, les réactifs sont consommés, donc leurs concentrations diminuent. La concentration étant un facteur cinétique, la fréquence des chocs efficaces diminue et la vitesse volumique de réaction décroît constamment jusqu\'à s\'annuler à l\'état final.',
      hint: 'Pensez à la pente de la tangente à la courbe d\'avancement x(t) au fur et à mesure que le temps s\'écoule.',
      prompt: 'Dans une réaction d’ordre classique sans catalyseur autocatalytique, comment évolue la vitesse volumique de réaction au cours du temps ?',
      options: [
        'Elle diminue continuellement au cours du temps car les réactifs s’épuisent',
        'Elle augmente continuellement',
        'Elle reste parfaitement constante de t = 0 à l’état final',
        'Elle oscille périodiquement'
      ],
      correctAnswer: 'Elle diminue continuellement au cours du temps car les réactifs s’épuisent',
      explanation: 'La concentration des réactifs est un facteur cinétique majeur. Comme les réactifs sont consommés au fil de la réaction, leurs concentrations diminuent, ce qui réduit la fréquence des chocs efficaces. Par conséquent, la vitesse de réaction diminue au cours du temps.',
      steps: [
        '1. Observer que la concentration des réactifs diminue au cours du temps.',
        '2. Moins de réactifs ⇒ moins de chocs efficaces par seconde.',
        '3. La vitesse de réaction diminue continuellement (la pente de la courbe x(t) s\'aplatit).'
      ]
    }
  ],

  'skill-tpc-catalyse-mecanismes': [
    {
      id: 'q-tpc-cat-1',
      exerciseId: 'ex-tpc-cat',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Catalyse : Propriétés Fondamentales d’un Catalyseur',
      microConcept: 'Un catalyseur est une espèce chimique qui accélère une réaction thermodynamiquement possible en abaissant son énergie d\'activation, sans modifier ni le sens spontané d\'évolution, ni la composition du système à l\'état d\'équilibre final.',
      hint: 'Un catalyseur change-t-il la constante d\'équilibre ou le rendement final ? Non !',
      prompt: 'Parmi les affirmations suivantes concernant un catalyseur, laquelle est scientifiquement exacte ?',
      options: [
        'Il augmente la vitesse de la réaction mais ne modifie pas le rendement final à l’équilibre',
        'Il permet de rendre possible une réaction thermodynamiquement impossible',
        'Il est consommé en grande quantité lors de la réaction',
        'Il déplace l’état d’équilibre chimique vers un rendement de 100 %'
      ],
      correctAnswer: 'Il augmente la vitesse de la réaction mais ne modifie pas le rendement final à l’équilibre',
      explanation: 'Le catalyseur abaisse l\'énergie d\'activation en proposant un nouveau chemin réactionnel plus rapide. Cependant, il ne modifie ni la constante d\'équilibre K, ni le quotient de réaction, ni le taux d\'avancement final (rendement) du système chimique.',
      steps: [
        '1. Rappeler le rôle du catalyseur : action purement cinétique (accélération).',
        '2. Constater qu\'il ne figure pas dans le bilan stœchiométrique global.',
        '3. Conclure : il n\'augmente pas le rendement final, il permet seulement d\'atteindre l\'équilibre plus rapidement.'
      ]
    }
  ],

  // --- Bloc 3 : Chimie Organique ---
  'skill-tpc-chimie-organique-alcools': [
    {
      id: 'q-tpc-alc-1',
      exerciseId: 'ex-tpc-alc',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Chimie Organique : Oxydation Ménagée des Alcools',
      microConcept: 'L\'oxydation ménagée d\'un alcool dépend de sa classe : un alcool primaire R-CH₂OH donne d\'abord un aldéhyde R-CHO puis un acide carboxylique R-COOH ; un alcool secondaire R-CH(OH)-R\' donne une cétone R-CO-R\' ; un alcool tertiaire ne subit pas d\'oxydation ménagée.',
      hint: 'Le produit forme un précipité rouge brique avec la liqueur de Fehling : c\'est donc un aldéhyde.',
      prompt: 'Un composé organique A donne par oxydation ménagée un corps B qui forme un précipité jaune avec la 2,4-DNPH et un précipité rouge brique avec la liqueur de Fehling à chaud. De quelle classe est l’alcool A ?',
      options: [
        'Alcool primaire',
        'Alcool secondaire',
        'Alcool tertiaire',
        'Ce n’est pas un alcool'
      ],
      correctAnswer: 'Alcool primaire',
      explanation: 'Le corps B réagit avec la DNPH (donc c\'est un composé carbonylé) et réduit la liqueur de Fehling (donc c\'est un aldéhyde). Seul un alcool primaire peut être oxydé en aldéhyde.',
      steps: [
        '1. Test DNPH positif ⇒ B possède un groupe carbonyle C=O (aldéhyde ou cétone).',
        '2. Test liqueur de Fehling positif ⇒ B est spécifiquement un aldéhyde.',
        '3. L\'oxydation ménagée d\'un alcool primaire donne un aldéhyde : A est donc un alcool primaire.'
      ]
    },
    {
      id: 'q-tpc-alc-2',
      exerciseId: 'ex-tpc-alc',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Chimie Organique : Polyalcools & Glycol',
      microConcept: 'Le glycol est le nom usuel de l\'éthane-1,2-diol (formule semi-développée HO-CH₂-CH₂-OH). Il possède deux fonctions alcool primaire (diol), utilisé notamment comme liquide antigel.',
      hint: 'Comptez le nombre d\'atomes de carbone de l\'éthane (2 carbones).',
      prompt: 'Quelle est la formule semi-développée du glycol (éthane-1,2-diol) ?',
      options: [
        'HO - CH₂ - CH₂ - OH',
        'CH₃ - CH₂ - OH',
        'HO - CH₂ - CH(OH) - CH₂ - OH',
        'CH₃ - O - CH₃'
      ],
      correctAnswer: 'HO - CH₂ - CH₂ - OH',
      explanation: 'L\'éthane-1,2-diol comporte une chaîne à 2 atomes de carbone saturée portant un groupe hydroxyle -OH sur chaque carbone : HO-CH₂-CH₂-OH.',
      steps: [
        '1. Préfixe "éthan-" ⇒ 2 atomes de carbone.',
        '2. Suffixe "-1,2-diol" ⇒ 2 groupements -OH situés sur les carbones 1 et 2.',
        '3. Formule semi-développée : HO-CH₂-CH₂-OH.'
      ]
    }
  ],

  'skill-tpc-acides-esters-derives': [
    {
      id: 'q-tpc-est-1',
      exerciseId: 'ex-tpc-est',
      type: 'mcq',
      difficulty: 4,
      difficultyLabel: 'Estérification : Caractéristiques & Rendement avec un Alcool Primaire',
      microConcept: 'La réaction d\'estérification entre un acide carboxylique et un alcool (R-COOH + R\'-OH ⇌ R-COO-R\' + H₂O) est lente, athermique et limitée par un équilibre chimique. Pour un mélange équimolaire d\'acide et d\'alcool primaire, le rendement à l\'équilibre est d\'environ 67 % (2/3).',
      hint: 'Pour un alcool primaire, environ 2/3 des réactifs réagissent à l\'équilibre en partant d\'un mélange équimolaire.',
      prompt: 'On réalise l’estérification d’un mélange équimolaire de 1,0 mol d’acide éthanoïque et de 1,0 mol d’éthanol (alcool primaire) en présence de traces d’acide sulfurique. Quelle est la quantité d’ester formé à l’équilibre ?',
      options: [
        '0,67 mol (soit un rendement de 67 %)',
        '1,0 mol (la réaction est totale)',
        '0,33 mol',
        '0,05 mol'
      ],
      correctAnswer: '0,67 mol (soit un rendement de 67 %)',
      explanation: 'L\'estérification d\'un alcool primaire avec un acide carboxylique à partir d\'un mélange équimolaire est limitée à un rendement d\'environ 67 % (2/3). À l\'équilibre, il s\'est formé 0,67 mol d\'ester et d\'eau.',
      steps: [
        '1. Identifier la classe de l\'alcool : l\'éthanol CH₃-CH₂OH est un alcool primaire.',
        '2. Rappeler le résultat classique : rendement r ≈ 67 % pour un mélange équimolaire acide + alcool I.',
        '3. Quantité d\'ester : n_ester = 0,67 × 1,0 mol = 0,67 mol.'
      ]
    },
    {
      id: 'q-tpc-est-2',
      exerciseId: 'ex-tpc-est',
      type: 'mcq',
      difficulty: 5,
      difficultyLabel: 'Dérivés d’Acides : Synthèse Totale & Rapide d’Ester',
      microConcept: 'Pour rendre la synthèse d\'un ester totale et rapide (non limitée par un équilibre chimique avec l\'eau), on remplace l\'acide carboxylique par un chlorure d\'acyle (R-COCl) ou un anhydride d\'acide (R-CO-O-CO-R).',
      hint: 'Le chlorure d\'acyle R-COCl réagit de manière vive et totale avec les alcools.',
      prompt: 'Quel réactif dérivé d’acide carboxylique permet d’obtenir un ester par une réaction TOTALE et RAPIDE avec un alcool ?',
      options: [
        'Un chlorure d’acyle (R-COCl)',
        'Un autre ester',
        'Un acide carboxylique en excès d’eau',
        'Un alcane'
      ],
      correctAnswer: 'Un chlorure d’acyle (R-COCl)',
      explanation: 'L\'action d\'un chlorure d\'acyle R-COCl sur un alcool R\'-OH produit un ester R-COO-R\' et du chlorure d\'hydrogène gazeux HCl. Cette réaction est vive, exothermique, rapide et totale (irréversible car HCl s\'échappe et ne réagit pas avec l\'ester).',
      steps: [
        '1. Analyser le problème : l\'acide carboxylique donne une réaction équilibrée et limitée.',
        '2. L\'utilisation d\'un chlorure d\'acyle (ou anhydride d\'acide) supprime l\'eau des produits.',
        '3. La réaction R-COCl + R\'-OH → R-COOR\' + HCl est totale et rapide.'
      ]
    }
  ]
};
