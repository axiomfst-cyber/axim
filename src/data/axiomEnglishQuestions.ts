import { ExerciseQuestion } from '../types';

// =====================================================================
// BANQUE OFFICIELLE DE QUESTIONS D'ANGLAIS : SECONDE & PREMIÈRE (GABON)
// Grammar (Tenses, Modals, Passive, Reported Speech), Gabon Environment, Essay Connectors
// =====================================================================

export const ENGLISH_QUESTIONS_MAP: Record<string, ExerciseQuestion[]> = {
  // -------------------------------------------------------------------
  // 1. TENSES & TIME EXPRESSIONS (SECONDE & PREMIÈRE)
  // -------------------------------------------------------------------
  'skill-2s-en-tenses': [
    {
      id: 'q-en-tenses-1',
      exerciseId: 'ex-en-tenses-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Level 2: Past Simple vs Present Perfect with "Since"',
      microConcept: 'The Present Perfect (have/has + past participle) connects the past to the present. With "since" (indicating a starting point in the past that continues until now), we use the Present Perfect in the main clause.',
      hint: 'The action began 5 years ago and is still going on today in Libreville.',
      prompt: 'Which verb form correctly completes the sentence: "He ________ in Libreville since 2018." ?',
      options: [
        'has lived',
        'is living since',
        'lived',
        'lives'
      ],
      correctAnswer: 'has lived',
      commonMistake: 'Using the simple past "lived" (which would mean he no longer lives there) or a French-style present "lives".',
      explanation: '"Since 2018" establishes a bridge between the past starting point and the present. English strictly requires the Present Perfect: "has lived" (or "has been living").',
      steps: [
        '1. Identify the time marker: "since 2018" (point in time continuing into the present).',
        '2. Grammatical rule: "since" + past date requires the Present Perfect.',
        '3. Subject "He" (3rd person singular) => "has lived".'
      ]
    },
    {
      id: 'q-en-tenses-2',
      exerciseId: 'ex-en-tenses-2',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Level 3: Past Perfect for Anteriority in the Past',
      microConcept: 'The Past Perfect (had + past participle) expresses an action completed BEFORE another past action (pluperfect/past of the past).',
      hint: 'The bell rang BEFORE the students arrived in the classroom.',
      prompt: 'Complete the sentence: "When the students arrived at the high school, the bell ________ already ________." ?',
      options: [
        'had / rung',
        'has / rung',
        'did / ring',
        'was / ringing'
      ],
      correctAnswer: 'had / rung',
      commonMistake: 'Using the Present Perfect "has rung" in a past narrative context, or irregular verb confusion (ring - rang - rung).',
      explanation: 'Action 1 occurred first in the past: the bell had already rung. Action 2 occurred later in the past: the students arrived. The earlier action takes the Past Perfect (had + rung).',
      steps: [
        '1. Past chronology: 1st action = the bell rang; 2nd action = students arrived.',
        '2. Prior action rule: Past Perfect (had + past participle).',
        '3. Irregular verb: ring - rang - rung => "had already rung".'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 2. MODAL AUXILIARIES & CONDITIONALS
  // -------------------------------------------------------------------
  'skill-2s-en-modals': [
    {
      id: 'q-en-modals-1',
      exerciseId: 'ex-en-modals-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Level 3: Third Conditional (Unreal Past)',
      microConcept: 'The Third Conditional expresses hypothetical regret about an impossible past event: Formula: If + Past Perfect (had + V-ed/3), would have + Past Participle (would have + V-ed/3).',
      hint: 'Look for "If she had worked harder, she _________ the exam."',
      prompt: 'Choose the correct grammatical structure: "If she had studied harder for the national exam, she ________." ?',
      options: [
        'would have passed',
        'will pass',
        'would pass',
        'passed'
      ],
      correctAnswer: 'would have passed',
      commonMistake: 'Mixing conditional types by saying "she would pass" (Second conditional) instead of the past form "would have passed".',
      explanation: 'Condition in the past (If + had studied) produces a counterfactual past consequence: "would have passed".',
      steps: [
        '1. Recognize Third Conditional structure: If + had + past participle.',
        '2. Required result clause: modal auxiliary would + have + past participle.',
        '3. Result: "would have passed".'
      ]
    },
    {
      id: 'q-en-modals-2',
      exerciseId: 'ex-en-modals-2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Level 2: Modals of Advice vs Obligation',
      microConcept: '"Must" expresses strict necessity or obligation, whereas "Should" gives friendly advice, recommendation, or moral duty.',
      hint: 'Which modal means "tu devrais" (advice) rather than "tu dois absolument" (strict obligation)?',
      prompt: 'Which modal auxiliary best expresses a piece of gentle advice or recommendation in English?',
      options: [
        'Should',
        'Must',
        'May',
        'Can'
      ],
      correctAnswer: 'Should',
      commonMistake: 'Using "must" for simple friendly recommendations (which sounds bossy or authoritarian).',
      explanation: '"Should" is the modal of recommendation and advice ("You should revise your physics lesson before the exam"). "Must" denotes a legal or imperative obligation.',
      steps: [
        '1. Definition of advice: suggestion without coercive force.',
        '2. Modal for advice: should (ought to).',
        '3. Modal for strict rule: must.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 3. PASSIVE VOICE & REPORTED SPEECH
  // -------------------------------------------------------------------
  'skill-2s-en-passive': [
    {
      id: 'q-en-passive-1',
      exerciseId: 'ex-en-passive-1',
      type: 'mcq',
      difficulty: 3,
      difficultyLabel: 'Level 3: Passive Voice Transformation',
      microConcept: 'In the Passive Voice, the object of the active sentence becomes the subject: Subject + BE (in the active tense) + Past Participle + by + Agent.',
      hint: 'Active: "Engineers built the Transgabonais railway." The railway ________ by engineers.',
      prompt: 'What is the correct passive form of the sentence: "Workers built the Transgabonais railway in the 1980s." ?',
      options: [
        'The Transgabonais railway was built by workers in the 1980s',
        'The Transgabonais railway is built by workers in the 1980s',
        'The Transgabonais railway has been build by workers in the 1980s',
        'The Transgabonais railway had built by workers in the 1980s'
      ],
      correctAnswer: 'The Transgabonais railway was built by workers in the 1980s',
      commonMistake: 'Putting "is built" (present) instead of "was built" for an action in the past (built = past simple).',
      explanation: 'The verb "built" is in the Past Simple. Therefore, the auxiliary BE must be conjugated in the Past Simple singular ("was"), followed by the past participle "built": "was built".',
      steps: [
        '1. Active verb: built (Past Simple).',
        '2. Auxiliary BE in the Past Simple for a singular noun: was.',
        '3. Past Participle: built.',
        '4. Full sentence: "The Transgabonais railway was built by workers in the 1980s".'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 4. READING COMPREHENSION & ENVIRONMENT IN CENTRAL AFRICA
  // -------------------------------------------------------------------
  'skill-1s-en-reading-env': [
    {
      id: 'q-en-env-1',
      exerciseId: 'ex-en-env-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Level 2: Gabon\'s Green Economy & National Parks',
      microConcept: 'Gabon established 13 national parks in 2002, protecting over 11% of its territory. As part of the Congo Basin rainforest, Gabon acts as a vital global carbon sink and is a pioneer in issuing verified sovereign carbon credits.',
      hint: 'Read the prompt to identify what prevents global warming by sequestering carbon dioxide.',
      prompt: 'Why is the equatorial rainforest of Gabon often described in international scientific reports as a "critical carbon sink" ?',
      options: [
        'Because its vast canopy naturally absorbs and sequesters huge volumes of carbon dioxide (CO2) from the atmosphere through photosynthesis',
        'Because it burns coal to generate electricity for Libreville',
        'Because it produces plastic materials for export',
        'Because it drains all tropical rainwater into deep underground caves'
      ],
      correctAnswer: 'Because its vast canopy naturally absorbs and sequesters huge volumes of carbon dioxide (CO2) from the atmosphere through photosynthesis',
      commonMistake: 'Confusing "carbon sink" (which absorbs CO2) with "carbon emission" (which releases CO2).',
      explanation: 'A carbon sink is any natural reservoir that accumulates and stores carbon-containing chemical compounds. Gabon\'s tropical forest absorbs more CO2 than the entire nation emits, making it carbon-negative.',
      steps: [
        '1. Meaning of "sink": absorption reservoir.',
        '2. Biological process: photosynthesis fixes carbon in plant biomass.',
        '3. Global impact: mitigating worldwide climate change.'
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 5. ESSAY WRITING & DISCOURSE CONNECTORS
  // -------------------------------------------------------------------
  'skill-1s-en-writing-connectors': [
    {
      id: 'q-en-conn-1',
      exerciseId: 'ex-en-conn-1',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Level 2: Connectors of Contrast (However / Although)',
      microConcept: '"However" is an adverbial linking word used to introduce a contrasting statement between two sentences or independent clauses. "Therefore" expresses consequence, "Furthermore" expresses addition.',
      hint: 'The country has huge mineral wealth, YET it must diversify its economy. Which word expresses this contrast?',
      prompt: 'Which linking word best expresses contrast to complete this sentence: "Gabon is rich in oil and manganese. ________, the government is investing heavily in eco-tourism and agriculture to diversify the economy." ?',
      options: [
        'However',
        'Consequently',
        'Furthermore',
        'Because'
      ],
      correctAnswer: 'However',
      commonMistake: 'Using "Consequently" (which indicates a logical result) instead of "However" (which expresses contrast/qualification).',
      explanation: '"However" shows contrast between past oil dependence and the new diversification strategy. "Consequently" would mean the diversification was caused by the wealth itself.',
      steps: [
        '1. Idea 1: wealth in extractive resources.',
        '2. Idea 2: transition to new sectors (contrast/shift).',
        '3. Appropriate transitional connector: "However".'
      ]
    },
    {
      id: 'q-en-conn-2',
      exerciseId: 'ex-en-conn-2',
      type: 'mcq',
      difficulty: 2,
      difficultyLabel: 'Level 2: Connectors of Addition (Moreover / Furthermore)',
      microConcept: '"Furthermore", "Moreover", and "In addition" are formal discourse markers used to add another supporting argument that reinforces the previous point.',
      hint: 'Which connector means "de plus" or "en outre"?',
      prompt: 'Which connector should you use to introduce an additional supporting argument in a formal essay?',
      options: [
        'Furthermore',
        'On the contrary',
        'Despite',
        'Unless'
      ],
      correctAnswer: 'Furthermore',
      commonMistake: 'Using "On the contrary" (which refutes or opposes) instead of "Furthermore" (which adds information).',
      explanation: '"Furthermore" means "in addition" or "moreover", effectively strengthening the previous argument.',
      steps: [
        '1. Function required: addition of a supporting point.',
        '2. Formal transition word: Furthermore / Moreover.',
        '3. Contrast/Condition options (Despite, Unless) are incorrect.'
      ]
    }
  ]
};
