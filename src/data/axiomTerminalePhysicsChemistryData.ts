import { SkillNode } from '../types';

// =========================================================================================
// PROGRAMME OFFICIEL DE PHYSIQUE-CHIMIE (PC) : TERMINALE SCIENTIFIQUE (GABON)
// Conforme au programme officiel IGS-R / IPN pour Terminales C & D
// 4 Blocs de Physique + 3 Blocs de Chimie
// =========================================================================================

export const TERMINALE_PHYSICS_CHEMISTRY_SKILLS: SkillNode[] = [
  // =======================================================================================
  // 🧲 PARTIE PHYSIQUE
  // =======================================================================================

  // --- Bloc 1 : Cinématique et Dynamique du Point ---
  {
    id: 'skill-tpc-cinematique-vecteurs',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Cinématique du Point : Vecteurs Vitesse & Accélération',
    description: 'Chiffres significatifs, incertitudes, repère cartésien et repère de Frenet (a = a_t u_t + a_n u_n avec a_n = v²/R), équations horaires du mouvement rectiligne et circulaire uniforme.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 82,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Physique - Bloc 1 : Cinématique & Dynamique',
    order: 1,
    topics: [
      'Chiffres significatifs, incertitudes de mesure et précision du calcul',
      'Vecteur position OM(t) et vecteur vitesse v(t) = dOM/dt dans un repère donné',
      'Vecteur accélération a(t) = dv/dt et composantes tangentielles/normales de Frenet',
      'Équations horaires du mouvement rectiligne uniformément varié (MRUV)',
      'Mouvement circulaire uniforme (MCU) : vitesse angulaire ω, période T et accélération centripète a_n = v²/R'
    ]
  },
  {
    id: 'skill-tpc-centre-inertie-newton',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Mouvement du Centre d’Inertie d’un Solide (Lois de Newton)',
    description: 'Centre d\'inertie G d\'un solide, première loi (principe d’inertie), deuxième loi fondamentale (∑ F_ext = m a_G) et troisième loi (actions réciproques) appliquées à la translation de solides.',
    difficulty: 4,
    prerequisiteIds: ['skill-tpc-cinematique-vecteurs'],
    masteryScore: 78,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Physique - Bloc 1 : Cinématique & Dynamique',
    order: 2,
    topics: [
      'Définition et barycentre du centre d’inertie G d’un solide continu',
      'Principe d’inertie et référentiels galiléens (terrestre, géocentrique, héliocentrique)',
      'Deuxième loi de Newton : relation fondamentale de la dynamique ∑ F_ext = m a_G',
      'Bilan dynamique des forces : poids, réaction normale, forces de frottement de Coulomb',
      'Applications : mouvement d’un solide sur plan incliné avec ou sans frottement'
    ]
  },
  {
    id: 'skill-tpc-gravitation-satellites',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Interaction Gravitationnelle & Satellites en Orbite',
    description: 'Loi de gravitation universelle de Newton (F = G M m / r²), champ de gravitation terrestre, mouvement circulaire uniforme des satellites artificiels, vitesse orbitale, période de révolution et troisième loi de Kepler (T²/r³ = constante).',
    difficulty: 4,
    prerequisiteIds: ['skill-tpc-centre-inertie-newton'],
    masteryScore: 75,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Physique - Bloc 1 : Cinématique & Dynamique',
    order: 3,
    topics: [
      'Loi de gravitation universelle de Newton et expression vectorielle de la force',
      'Champ de gravitation terrestre g(h) en fonction de l’altitude h',
      'Mouvement circulaire orbital des satellites terrestres (vitesse v = √(GM/r))',
      'Période de révolution d’un satellite et vérification de la 3e loi de Kepler : T²/r³ = 4π²/(GM)',
      'Caractéristiques d’un satellite géostationnaire (plan équatorial, sens de rotation, altitude de 36 000 km)'
    ]
  },
  {
    id: 'skill-tpc-force-constante-champ',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Mouvement d’une Particule dans un Champ Constant (Pesanteur & Électrique)',
    description: 'Particule soumise à une force constante : tir balistique dans le champ de pesanteur uniforme (g), particule chargée (électron/proton) déviée entre les armatures d’un condensateur plan sous tension U (F = qE). Équations horaires et équation cartésienne de la trajectoire parabolique.',
    difficulty: 5,
    prerequisiteIds: ['skill-tpc-centre-inertie-newton'],
    masteryScore: 70,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Physique - Bloc 1 : Cinématique & Dynamique',
    order: 4,
    topics: [
      'Équations différentielles du mouvement pour une accélération vectorielle constante a = cste',
      'Trajectoire parabolique d’un projectile dans le champ de pesanteur uniforme g',
      'Calcul de la flèche (hauteur maximale) et de la portée horizontale du tir',
      'Champ électrostatique uniforme E = U/d entre deux armatures planes parallèles',
      'Mouvement et déflexion d’une particule chargée soumise à la force électrostatique F = qE',
      'Théorème de l’énergie cinétique appliqué aux accélérateurs de particules'
    ]
  },

  // --- Bloc 2 : Physique Nucléaire et Atomique ---
  {
    id: 'skill-tpc-niveaux-energie-atome',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Niveaux d’Énergie Atomiques & Spectres d’Émission/Absorption',
    description: 'Quantification de l’énergie de l’atome (modèle de Bohr), formule de Planck-Einstein ΔE = h ν = h c / λ, transitions électroniques, spectre de raies d’émission et d’absorption de l’atome d’hydrogène.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 85,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Physique - Bloc 2 : Physique Nucléaire & Atomique',
    order: 5,
    topics: [
      'Postulats de Bohr et quantification des niveaux d’énergie d’un atome',
      'Diagramme d’énergie : état fondamental, états excités et niveau ionisé (E_∞ = 0 eV)',
      'Relation de Planck-Einstein : absorption et émission de photon ΔE = hν = hc/λ',
      'Spectre d’émission et d’absorption de l’hydrogène : séries de Lyman, Balmer et Paschen',
      'Énergie d’ionisation de l’atome d’hydrogène (E₁ = -13,6 eV)'
    ]
  },
  {
    id: 'skill-tpc-noyau-radioactivite',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Noyau Atomique & Décroissance Radioactive Spontanée',
    description: 'Composition du noyau (nucléides ^A_Z X, isotopes), défaut de masse Δm et énergie de liaison par nucléon E_l/A. Lois de conservation de Soddy, désintégrations α, β⁻, β⁺ et désexcitation γ. Loi de décroissance radioactive N(t) = N₀ e^{-λt}, demi-vie t_{1/2} = ln(2)/λ et activité A(t).',
    difficulty: 4,
    prerequisiteIds: ['skill-tpc-niveaux-energie-atome'],
    masteryScore: 76,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Physique - Bloc 2 : Physique Nucléaire & Atomique',
    order: 6,
    topics: [
      'Constitution du noyau : protons Z, neutrons N = A - Z, nucléons A et isotopes',
      'Défaut de masse Δm = [Z m_p + (A-Z) m_n] - m_noyau et relation d’Einstein E = mc²',
      'Énergie de liaison du noyau E_l et courbe d’Aston (stabilité maximale vers le fer 56)',
      'Lois de Soddy (conservation du nombre de charge Z et du nombre de masse A)',
      'Rayonnements radioactifs spontanés : α (noyau He), β⁻ (électron), β⁺ (positon) et γ (photon)',
      'Loi de décroissance radioactive N(t) = N₀ e^{-λt}, période radioactive t_{1/2} et datation au carbone 14'
    ]
  },
  {
    id: 'skill-tpc-fission-fusion',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Réactions Nucléaires Provoquées : Fission & Fusion',
    description: 'Différence entre réactions spontanées et provoquées. Fission de l’uranium 235 par bombardement neutronique, réaction en chaîne, fusion thermonucléaire des isotopes de l’hydrogène (deutérium et tritium), bilan de masse et calcul d’énergie libérée.',
    difficulty: 4,
    prerequisiteIds: ['skill-tpc-noyau-radioactivite'],
    masteryScore: 72,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Physique - Bloc 2 : Physique Nucléaire & Atomique',
    order: 7,
    topics: [
      'Définition d’une réaction nucléaire provoquée par bombardement de particules',
      'Fission nucléaire : rupture d’un noyau lourd sous impact d’un neutron thermique',
      'Réaction en chaîne, masse critique et applications (réacteurs nucléaires civils)',
      'Fusion nucléaire : union de deux noyaux légers (^2_1 H + ^3_1 H → ^4_2 He + ^1_0 n)',
      'Bilan énergétique : ΔE = Δm × c² et calcul de l’énergie thermique libérée par nucléon'
    ]
  },

  // --- Bloc 3 : Systèmes Oscillants & Électromagnétisme ---
  {
    id: 'skill-tpc-pendule-elastique',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Systèmes Oscillants Mécaniques : Pendule Élastique',
    description: 'Oscillateur harmonique solide-ressort horizontal et vertical. Force de rappel F = -k x i, équation différentielle x\'\' + (k/m)x = 0, pulsation propre ω₀ = √(k/m), période propre T₀ = 2π√(m/k), énergie cinétique, énergie potentielle élastique et conservation de l’énergie mécanique.',
    difficulty: 4,
    prerequisiteIds: ['skill-tpc-centre-inertie-newton'],
    masteryScore: 68,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Physique - Bloc 3 : Oscillateurs & Électromagnétisme',
    order: 8,
    topics: [
      'Description du pendule élastique horizontal et force de rappel élastique F = -k x',
      'Établissement de l’équation différentielle du mouvement sans frottement x\'\' + ω₀² x = 0',
      'Période propre d’oscillation T₀ = 2π√(m/k) et pulsation propre ω₀ = √(k/m)',
      'Énergie potentielle élastique E_pe = 1/2 k x² et énergie cinétique E_c = 1/2 m v²',
      'Conservation de l’énergie mécanique totale E_m = E_c + E_pe en l’absence de frottement',
      'Amortissement des oscillations par frottement visqueux (régimes pseudo-périodique, apériodique, critique)'
    ]
  },
  {
    id: 'skill-tpc-champ-b-laplace',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Champ Magnétique & Force Électromagnétique de Laplace',
    description: 'Mise en évidence expérimentale du champ magnétique B (aimants, bobines, solénoïde B = μ₀ n I). Trajectoire circulaire d’une particule chargée dans un champ B uniforme (F = q v ∧ B, rayon R = mv / (|q|B)). Force de Laplace sur un conducteur F = I L ∧ B et applications (rails de Laplace, haut-parleur électrodynamique).',
    difficulty: 5,
    prerequisiteIds: ['skill-tpc-cinematique-vecteurs'],
    masteryScore: 65,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Physique - Bloc 3 : Oscillateurs & Électromagnétisme',
    order: 9,
    topics: [
      'Sources de champ magnétique : aimants, courants rectilignes et solénoïde (B = μ₀ N I / L)',
      'Force de Lorentz subie par une particule chargée : F = q v ∧ B (règle de la main droite)',
      'Mouvement circulaire uniforme d’une particule chargée dans B perpendiculaire à v₀ (rayon R = mv/(qB))',
      'Spectrographe de masse et cyclotron : séparation isotopique par déviation magnétique',
      'Loi de Laplace pour un élément de courant : dF = I dl ∧ B et expérience des rails de Laplace',
      'Applications industrielles : moteur à courant continu, galvanomètre et haut-parleur'
    ]
  },
  {
    id: 'skill-tpc-induction-autoinduction',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Induction Électromagnétique & Auto-Induction dans une Bobine',
    description: 'Flux magnétique Φ = B · S, loi de Faraday e = -dΦ/dt, loi de Lenz (le sens du courant induit s’oppose à la cause qui lui donne naissance). Phénomène d’auto-induction : inductance propre L d’une bobine, f.é.m. d’auto-induction e = -L di/dt et énergie magnétique emmagasinée E_L = 1/2 L i².',
    difficulty: 4,
    prerequisiteIds: ['skill-tpc-champ-b-laplace'],
    masteryScore: 70,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Physique - Bloc 3 : Oscillateurs & Électromagnétisme',
    order: 10,
    topics: [
      'Définition du flux magnétique à travers un circuit plan : Φ = B · S · cos(θ)',
      'Expériences fondamentales de Faraday : création d’un courant induit par variation de flux',
      'Loi de Lenz pour l’orientation du courant induit et expression de la f.é.m. induite e = -dΦ/dt',
      'Phénomène d’auto-induction d’un circuit sur lui-même et inductance L (en Henry)',
      'Force électromotrice d’auto-induction : e = -L di/dt et constante de temps τ = L/R',
      'Énergie magnétique emmagasinée dans une bobine parcourue par un courant : E_m = 1/2 L i²'
    ]
  },
  {
    id: 'skill-tpc-circuits-oscillants-rlc',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Circuits Oscillants LC & RLC en Régime Forcé Sinusoïdal',
    description: 'Oscillations électriques libres dans un circuit LC idéal (q\'\' + (1/LC)q = 0, période T₀ = 2π√(LC)). Circuit RLC série : oscillations amorties. Circuit RLC en régime sinusoïdal forcé : impédance Z = √(R² + (Lω - 1/Cω)²), résonance d’intensité (ω₀ = 1/√(LC)), déphasage tan(φ) et puissance moyenne P = U I cos(φ).',
    difficulty: 5,
    prerequisiteIds: ['skill-tpc-induction-autoinduction', 'skill-tpc-pendule-elastique'],
    masteryScore: 58,
    tier: 'En cours',
    status: 'in_progress',
    unit: 'Physique - Bloc 3 : Oscillateurs & Électromagnétisme',
    order: 11,
    topics: [
      'Oscillations libres non amorties d’un circuit LC : équation q\'\' + q/(LC) = 0 et période T₀ = 2π√(LC)',
      'Échanges énergétiques entre énergie électrique du condensateur (1/2 q²/C) et magnétique de la bobine (1/2 L i²)',
      'Circuit RLC série libre : équation différentielle amortie par effet Joule',
      'Circuit RLC en régime alternatif sinusoïdal forcé par un générateur basse fréquence (GBF)',
      'Construction de Fresnel, impédance totale Z du dipôle RLC et intensité efficace I_eff = U_eff / Z',
      'Phénomène de résonance d’intensité : fréquence de résonance f₀, facteur de qualité Q et bande passante',
      'Puissance moyenne consommée en régime forcé : P = U I cos φ (facteur de puissance cos φ)'
    ]
  },

  // --- Bloc 4 : Optique et Ondes ---
  {
    id: 'skill-tpc-optique-lentilles',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Lentilles Minces Convergentes & Divergentes',
    description: 'Lentilles minces dans l’approximation de Gauss. Foyers F et F\', distance focale f\' = OF\', vergence C = 1/f\' (en dioptries δ). Formules de conjugaison de Descartes (1/OA\' - 1/OA = 1/f\') et formule du grandissement γ = A\'B\' / AB = OA\' / OA. Construction géométrique d’images réelles et virtuelles.',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 84,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Physique - Bloc 4 : Optique & Ondes',
    order: 12,
    topics: [
      'Classification des lentilles : lentilles convergentes (bords minces) et divergentes (bords épais)',
      'Conditions de Gauss pour un stigmatisme approché (rayons peu inclinés et proches de l’axe optique)',
      'Centre optique O, foyers objet F et image F\', distance focale f\' et vergence C = 1/f\' (δ)',
      'Formule de conjugaison de Descartes avec grandeurs algébriques : 1/OA\' - 1/OA = 1/OF\'',
      'Grandissement linéaire : γ = A\'B\' / AB = OA\' / OA (image droite si γ > 0, renversée si γ < 0)',
      'Tracé géométrique rigoureux des trois rayons caractéristiques pour former l’image'
    ]
  },
  {
    id: 'skill-tpc-dispersion-diffraction-ondes',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Dispersion de la Lumière (Prisme) & Diffraction par un Réseau',
    description: 'Lois de Snell-Descartes pour la réfraction de la lumière, dispersion par un prisme de verre (l’indice n dépend de la longueur d’onde selon la formule de Cauchy n(λ) = A + B/λ²). Phénomène de diffraction d’une onde lumineuse par une fente (θ = λ/a) et formule des maxima d’un réseau de diffraction (a sin θ = k λ).',
    difficulty: 4,
    prerequisiteIds: ['skill-tpc-optique-lentilles'],
    masteryScore: 74,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Physique - Bloc 4 : Optique & Ondes',
    order: 13,
    topics: [
      'Réfraction de la lumière et formules du prisme d’angle A au minimum de déviation D_m',
      'Milieu dispersif : variation de l’indice de réfraction avec la longueur d’onde (loi de Cauchy)',
      'Mise en évidence de la nature ondulatoire de la lumière par la diffraction',
      'Diffraction d’un faisceau laser par une fente fine de largeur a : demi-angle de diffraction θ = λ / a',
      'Réseau plan de diffraction : pas du réseau a = 1/n, condition des interférences constructives a sin θ = k λ',
      'Mesure expérimentale précise de longueurs d’onde lumineuses par goniomètre à réseau'
    ]
  },

  // =======================================================================================
  // 🧪 PARTIE CHIMIE
  // =======================================================================================

  // --- Bloc 1 : Solutions Aqueuses et Réactions Acido-Basiques ---
  {
    id: 'skill-tpc-solutions-ph-produit-ionique',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'L’Eau Solvant Ionisant, Produit Ionique & pH des Solutions',
    description: 'Propriétés ionisantes et dispersantes de l’eau (molécule polaire). Autoprotolyse de l’eau 2 H₂O ⇌ H₃O⁺ + HO⁻, produit ionique Ke = [H₃O⁺][HO⁻] = 10^{-14} à 25°C. Définition du pH = -log[H₃O⁺]. Solutions d’acide chlorhydrique fort (pH = -log C_a) et d’hydroxyde de sodium fort (pH = 14 + log C_b).',
    difficulty: 3,
    prerequisiteIds: [],
    masteryScore: 86,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Chimie - Bloc 1 : Solutions & Réactions Acido-Basiques',
    order: 14,
    topics: [
      'Structure dipolaire de l’eau, solvatation des ions et caractère solvant ionisant',
      'Équilibre d’autoprotolyse de l’eau et définition du produit ionique Ke (pKe = 14 à 25°C)',
      'Définition opérationnelle du pH d’une solution aqueuse diluée : pH = -log[H₃O⁺]',
      'Solution d’acide fort (chlorhydrique HCl) : dissociation totale et formule pH = -log C_a',
      'Solution de base forte (hydroxyde de sodium NaOH) : dissociation totale et formule pH = 14 + log C_b',
      'Domaine d’acidité, de neutralité (pH = 7) et de basicité à 25°C'
    ]
  },
  {
    id: 'skill-tpc-couples-acide-base-tampon',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Couples Acide-Base, Dosages pH-métriques & Solutions Tampons',
    description: 'Théorie de Brönsted : couple acide-base HA/A⁻. Constante d’acidité Ka = [A⁻][H₃O⁺]/[HA], relation pH = pKa + log([A⁻]/[HA]) et diagramme de prédominance. Courbe de dosage pH-métrique acide fort/base forte et acide faible/base forte, point d’équivalence E (méthode des tangentes), demi-équivalence (pH = pKa) et propriétés des solutions tampons.',
    difficulty: 5,
    prerequisiteIds: ['skill-tpc-solutions-ph-produit-ionique'],
    masteryScore: 72,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Chimie - Bloc 1 : Solutions & Réactions Acido-Basiques',
    order: 15,
    topics: [
      'Définition d’un acide et d’une base selon Brönsted, couple acide-base conjugué HA/A⁻',
      'Constante d’acidité Ka et pKa = -log Ka, relation d’Henderson-Hasselbalch pH = pKa + log([A⁻]/[HA])',
      'Diagramme de prédominance des espèces acido-basiques en fonction du pH',
      'Courbe de titrage pH-métrique acide faible / base forte : allure, saut de pH et point d’équivalence E',
      'Détermination graphique du volume équivalent V_E par la méthode des tangentes parallèles',
      'Point de demi-équivalence : vérification expérimentale pH = pKa du couple titré',
      'Solution tampon : définition, préparation et résistance aux variations de pH (dilution ou ajout modéré)'
    ]
  },

  // --- Bloc 2 : Cinétique Chimique ---
  {
    id: 'skill-tpc-cinetique-vitesse-facteurs',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Vitesse de Réaction & Facteurs Cinétiques',
    description: 'Définition de la vitesse volumique de disparition d’un réactif v_disp = -1/V d[R]/dt et de formation d’un produit v_form = 1/V d[P]/dt. Vitesse instantanée (pente de la tangente à la courbe d’avancement x(t)). Temps de demi-réaction t_{1/2}. Étude des facteurs cinétiques : influence de la concentration des réactifs et de la température.',
    difficulty: 4,
    prerequisiteIds: [],
    masteryScore: 78,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Chimie - Bloc 2 : Cinétique Chimique',
    order: 16,
    topics: [
      'Avancement d’une réaction x(t) et vitesse volumique de réaction v(t) = 1/V dx/dt',
      'Vitesse de disparition d’un réactif et vitesse de formation d’un produit',
      'Détermination graphique de la vitesse instantanée par tracé de la tangente',
      'Temps de demi-réaction t_{1/2} : définition et détermination sur la courbe d’avancement',
      'Facteur cinétique température : agitation thermique et fréquence des chocs efficaces',
      'Facteur cinétique concentration : loi de vitesse et probabilité de collision intermoléculaire'
    ]
  },
  {
    id: 'skill-tpc-catalyse-mecanismes',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Catalyse & Mécanismes Réactionnels (Réactions en Chaînes)',
    description: 'Définition d’un catalyseur (substance qui accélère une réaction thermodynamiquement possible sans être consommée). Types de catalyse : homogène, hétérogène et enzymatique. Mécanisme réactionnel par étapes : intermédiaires réactionnels, réactions radicalaires en chaînes (initiation, propagation, rupture) et rôle activateur des radiations lumineuses (photochimie).',
    difficulty: 4,
    prerequisiteIds: ['skill-tpc-cinetique-vitesse-facteurs'],
    masteryScore: 66,
    tier: 'Acquise',
    status: 'acquired',
    unit: 'Chimie - Bloc 2 : Cinétique Chimique',
    order: 17,
    topics: [
      'Définition et propriétés générales d’un catalyseur (spécificité, diminution de l’énergie d’activation)',
      'Classification des catalyses : homogène (même phase), hétérogène (support solide) et enzymatique',
      'Notion d’étape élémentaire et intermédiaires réactionnels de courte durée de vie',
      'Réactions en chaînes par voie radicalaire (exemple : chloration des alcanes)',
      'Les trois phases fondamentales : amorçage (initiation photochimique Cl₂ + hν → 2 Cl•), propagation et rupture',
      'Rôle des radiations électromagnétiques (UV/lumière) dans la rupture homolytique des liaisons covalentes'
    ]
  },

  // --- Bloc 3 : Chimie Organique ---
  {
    id: 'skill-tpc-chimie-organique-alcools',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Alcools (Classes, Nomenclature, Synthèses & Propriétés)',
    description: 'Fonction alcool (-OH), trois classes d’alcools (primaire R-CH₂OH, secondaire R-CH(OH)-R\', tertiaire R-C(OH)R\'R\'\') et nomenclature IUPAC. Préparation par hydratation catalytique d’un alcène (règle de Markovnikov), bioéthanol par fermentation des sucres. Propriétés chimiques : combustion, déshydratation (intra- et intermoléculaire) et oxydation ménagée (aldéhydes, cétones, acides carboxyliques). Exemple de polyalcool : le glycol (éthane-1,2-diol).',
    difficulty: 4,
    prerequisiteIds: [],
    masteryScore: 80,
    tier: 'Maîtrisée',
    status: 'mastered',
    unit: 'Chimie - Bloc 3 : Chimie Organique',
    order: 18,
    topics: [
      'Groupe hydroxyle -OH et distinction rigoureuse des trois classes d’alcools (I, II, III)',
      'Règles de nomenclature officielle IUPAC des alcools à chaîne ramifiée',
      'Synthèse industrielle par hydratation des alcènes en milieu acide (règle de Markovnikov)',
      'Fermentation alcoolique des jus sucrés pour l’obtention de l’éthanol',
      'Oxydation ménagée par les ions permanganate ou dichromate en milieu acide selon la classe de l’alcool',
      'Caractérisation des produits d’oxydation par les tests spécifiques (DNPH, liqueur de Fehling, réactif de Tollens)',
      'Polyols : structure et applications de l’éthane-1,2-diol (glycol) et du propane-1,2,3-triol (glycérol)'
    ]
  },
  {
    id: 'skill-tpc-acides-esters-derives',
    subjectId: 'physics',
    levelId: 'term-c',
    name: 'Acides Carboxyliques, Estérification, Saponification & Dérivés',
    description: 'Acides carboxyliques R-COOH (nomenclature et caractère acide). Réaction d’estérification (acide + alcool ⇌ ester + eau) et hydrolyse de l’ester : équilibre chimique, athermique, lente et limitée. Rendement de l’estérification selon la classe de l’alcool. Saponification par hydrolyse basique (fabrication des savons). Dérivés d’acides : chlorures d’acyle (R-COCl) et anhydrides d’acide (R-CO-O-CO-R) pour une estérification totale et rapide. Amides et polymères (chlorure de vinyle et PVC).',
    difficulty: 5,
    prerequisiteIds: ['skill-tpc-chimie-organique-alcools'],
    masteryScore: 62,
    tier: 'En cours',
    status: 'in_progress',
    unit: 'Chimie - Bloc 3 : Chimie Organique',
    order: 19,
    topics: [
      'Groupe carboxyle -COOH : nomenclature IUPAC et propriétés acido-basiques',
      'Réaction réversible d’estérification-hydrolyse : caractéristiques (lente, athermique, limitée par un équilibre)',
      'Rendement de l’estérification : 67 % pour un alcool I, 60 % pour un alcool II et 5 % pour un alcool III',
      'Facteurs influençant l’équilibre : augmentation du rendement par excès d’un réactif ou distillation de l’eau',
      'Hydrolyse basique des esters ou saponification : réaction totale donnant un carboxylate (savon) et un alcool',
      'Dérivés réactifs d’acides carboxyliques : chlorures d’acyle R-COCl et anhydrides d’acide (synthèse rapide et totale d’esters)',
      'Formation des amides par action sur l’ammoniac ou les amines, et polymérisation par polyaddition (chlorure de vinyle → PVC)'
    ]
  }
];
