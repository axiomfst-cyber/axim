// =========================================================================================
// TABLEAU SYNTHÉTIQUE DU PROGRAMME OFFICIEL DE PHILOSOPHIE – TERMINALE (GABON)
// Les 20 Notions fondamentales : Notion, Problème, Argument, Citation clé & Auteur
// =========================================================================================

export interface PhilosophyNotionSynthesis {
  notion: string;
  probleme: string;
  argument: string;
  citation: string;
  auteur: string;
  skillId: string;
}

export const TERMINALE_PHILOSOPHIE_SYNTHESIS_DATA: PhilosophyNotionSynthesis[] = [
  {
    notion: 'Liberté',
    probleme: 'Sommes-nous libres ?',
    argument: 'Le déterminisme limite, mais l’homme est responsable de ses actes.',
    citation: 'L’homme est condamné à être libre',
    auteur: 'Jean-Paul Sartre',
    skillId: 'skill-tphilo-liberte-determinisme'
  },
  {
    notion: 'Conscience',
    probleme: 'Peut-on se connaître ?',
    argument: 'Permet la réflexion et constitue la première certitude du sujet pensant.',
    citation: 'Je pense, donc je suis',
    auteur: 'René Descartes',
    skillId: 'skill-tphilo-conscience-inconscient'
  },
  {
    notion: 'Inconscient',
    probleme: 'Avons-nous la maîtrise de soi ?',
    argument: 'Influence cachée et pulsions refoulées qui échappent à la lucidité du moi.',
    citation: 'Le moi n’est pas maître dans sa propre maison',
    auteur: 'Sigmund Freud',
    skillId: 'skill-tphilo-conscience-inconscient'
  },
  {
    notion: 'Bonheur',
    probleme: 'Peut-on être heureux ?',
    argument: 'Désir maîtrisé, ataraxie, mais idéal empirique inaccessible de façon absolue.',
    citation: 'Le bonheur est un idéal non de la raison, mais de l’imagination',
    auteur: 'Emmanuel Kant',
    skillId: 'skill-tphilo-bonheur-devoir'
  },
  {
    notion: 'Devoir',
    probleme: 'Faut-il toujours obéir ?',
    argument: 'Morale universelle rationnelle et respect inconditionnel de l’impératif catégorique.',
    citation: 'Agis uniquement d’après la maxime qui fait que tu peux vouloir en même temps qu’elle devienne une loi universelle',
    auteur: 'Emmanuel Kant',
    skillId: 'skill-tphilo-bonheur-devoir'
  },
  {
    notion: 'Justice',
    probleme: 'Qu’est-ce que le juste ?',
    argument: 'Égalité arithmétique (échanges) et équité proportionnelle au mérite (distribution).',
    citation: 'Le juste est l’égal',
    auteur: 'Aristote',
    skillId: 'skill-tphilo-justice-droit'
  },
  {
    notion: 'État',
    probleme: 'Est-il nécessaire ?',
    argument: 'Garant de l’ordre, de la paix civile et accomplissement de la liberté citoyenne.',
    citation: 'L’homme est par nature un animal politique',
    auteur: 'Aristote',
    skillId: 'skill-tphilo-etat-pouvoir'
  },
  {
    notion: 'Travail',
    probleme: 'Libère ou aliène ?',
    argument: 'Humanise la nature par l’action, mais peut exploiter et déposséder le travailleur.',
    citation: 'L’aliénation du travail dépossède l’homme de sa propre essence',
    auteur: 'Karl Marx',
    skillId: 'skill-tphilo-travail-technique'
  },
  {
    notion: 'Technique',
    probleme: 'Constitue-t-elle un réel progrès ?',
    argument: 'Domine la nature et soulage l’effort, mais risque d’arraisonner le monde et l’humain.',
    citation: 'L’essence de la technique est un mode de dévoilement du réel (Gestell)',
    auteur: 'Martin Heidegger',
    skillId: 'skill-tphilo-travail-technique'
  },
  {
    notion: 'Science',
    probleme: 'Peut-elle atteindre la vérité ?',
    argument: 'Expérience sensible vérifiée et théories réfutables soumises à la méthode.',
    citation: 'Rien n’est dans l’entendement qui n’ait d’abord été dans les sens',
    auteur: 'John Locke',
    skillId: 'skill-tphilo-science-experience'
  },
  {
    notion: 'Vérité',
    probleme: 'Existe-t-elle objectivement ?',
    argument: 'Accord rigoureux de la pensée avec la réalité des faits constatés.',
    citation: 'Dire de ce qui est qu’il est, ou de ce qui n’est pas qu’il n’est pas, c’est dire la vérité',
    auteur: 'Aristote',
    skillId: 'skill-tphilo-verite-raison'
  },
  {
    notion: 'Raison',
    probleme: 'Doit-on toujours la suivre ?',
    argument: 'Guide suprême de la pensée autonome contre les préjugés et les superstitions.',
    citation: 'Sapere aude ! Ose savoir ! Aie le courage de te servir de ton propre entendement !',
    auteur: 'Emmanuel Kant',
    skillId: 'skill-tphilo-verite-raison'
  },
  {
    notion: 'Religion',
    probleme: 'Est-elle une illusion ?',
    argument: 'Aliénation et consolation illusoire face aux misères réelles du monde.',
    citation: 'La religion est l’opium du peuple',
    auteur: 'Karl Marx',
    skillId: 'skill-tphilo-religion-croyance'
  },
  {
    notion: 'Art',
    probleme: 'Quelle est son utilité ?',
    argument: 'Expression sensible désintéressée qui dévoile des vérités invisibles de l’existence.',
    citation: 'L’art ne reproduit pas le visible ; il rend visible',
    auteur: 'Paul Klee',
    skillId: 'skill-tphilo-art-beaute'
  },
  {
    notion: 'Temps',
    probleme: 'Est-il réel ou subjectif ?',
    argument: 'Flux qualitatif et indivisible de la conscience, distinct du temps spatialisé des horloges.',
    citation: 'La durée vécue est le temps réel de la conscience',
    auteur: 'Henri Bergson',
    skillId: 'skill-tphilo-temps-mort'
  },
  {
    notion: 'Nature',
    probleme: 'Faut-il la dominer ou la respecter ?',
    argument: 'Transformation légitime pour la médecine et le bien-être, avec impératif de préservation.',
    citation: 'Nous rendre comme maîtres et possesseurs de la nature',
    auteur: 'René Descartes',
    skillId: 'skill-tphilo-nature-environnement'
  },
  {
    notion: 'Langage',
    probleme: 'Peut-on tout dire ?',
    argument: 'Structure et délimite la pensée : les limites du dire sont les frontières du concevable.',
    citation: 'Les limites de mon langage signifient les limites de mon propre monde',
    auteur: 'Ludwig Wittgenstein',
    skillId: 'skill-tphilo-langage-pensee'
  },
  {
    notion: 'Développement',
    probleme: 'Pour qui produit-on la richesse ?',
    argument: 'Dénonce les inégalités : le développement authentique est l’expansion des libertés réelles.',
    citation: 'Le développement est un processus d’expansion des libertés substantielles (capabilités)',
    auteur: 'Amartya Sen',
    skillId: 'skill-tphilo-developpement-decolonisation'
  },
  {
    notion: 'Décolonisation',
    probleme: 'Est-elle réellement achevée ?',
    argument: 'Exige une libération mentale, culturelle et politique pour forger un homme nouveau.',
    citation: 'La décolonisation est véritablement création d’hommes neufs désaliénés',
    auteur: 'Frantz Fanon',
    skillId: 'skill-tphilo-developpement-decolonisation'
  },
  {
    notion: 'Violence',
    probleme: 'Est-elle jamais légitime ?',
    argument: 'Rôle historique de rupture révolutionnaire permettant la naissance du monde nouveau.',
    citation: 'La violence est l’accoucheuse de toute vieille société en travail d’une nouvelle',
    auteur: 'Karl Marx',
    skillId: 'skill-tphilo-violence-guerre'
  }
];
