import React, { useState } from 'react';
import { 
  Check, 
  Lock, 
  Star, 
  Sparkles, 
  Play, 
  BookOpen, 
  Award, 
  Target,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { SkillNode, Subject, MasteryTier } from '../types';
import { getTierColor } from '../data/axiomData';
import { PhilosophySynthesisModal } from './PhilosophySynthesisModal';
import { ComputerScienceSynthesisModal } from './ComputerScienceSynthesisModal';
import { PremiereABMathSynthesisModal } from './PremiereABMathSynthesisModal';
import { Terminal, Calculator } from 'lucide-react';

interface SkillTreeViewProps {
  subject: Subject;
  skills: SkillNode[];
  onStartExercise: (skillId: string) => void;
  userClass?: string;
  allSubjects?: Subject[];
  selectedSubjectId?: string;
  onSelectSubject?: (id: string) => void;
  totalClassSkills?: SkillNode[];
  isLevelCompleted?: boolean;
  onPromoteNextLevel?: () => void;
}

export const SkillTreeView: React.FC<SkillTreeViewProps> = ({
  subject,
  skills,
  onStartExercise,
  userClass = 'Première S',
  allSubjects = [],
  selectedSubjectId,
  onSelectSubject,
  totalClassSkills = [],
  isLevelCompleted = false,
  onPromoteNextLevel,
}) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(skills[0]?.id || '');
  const [isPhilosophyModalOpen, setIsPhilosophyModalOpen] = useState(false);
  const [isCSModalOpen, setIsCSModalOpen] = useState(false);
  const [isMathABModalOpen, setIsMathABModalOpen] = useState(false);

  // Keep selected skill synchronized with skills prop changes
  React.useEffect(() => {
    if (!skills.some(s => s.id === selectedSkillId)) {
      setSelectedSkillId(skills[0]?.id || '');
    }
  }, [skills, selectedSkillId]);

  const selectedSkill = skills.find(s => s.id === selectedSkillId) || skills[0] || {
    id: 'placeholder',
    name: 'Compétence',
    description: '',
    difficulty: 1,
    prerequisiteIds: [],
    masteryScore: 0,
    tier: 'Non commencée' as MasteryTier,
    status: 'available' as const,
    unit: 'Général',
    order: 1
  };

  // Check if a skill's prerequisites are met (i.e. all prerequisites have mastery >= 60%)
  const checkPrerequisitesMet = (skill: SkillNode): boolean => {
    if (!skill.prerequisiteIds || skill.prerequisiteIds.length === 0) return true;
    return skill.prerequisiteIds.every(prereqId => {
      const prereqSkill = skills.find(s => s.id === prereqId);
      return prereqSkill && prereqSkill.masteryScore >= 60;
    });
  };

  return (
    <div className="space-y-6">
      {/* Subject switcher tabs (if multiple subjects available) */}
      {allSubjects.length > 0 && onSelectSubject && (
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-bold text-slate-500 px-3 uppercase tracking-wider whitespace-nowrap">
            Matière :
          </span>
          {allSubjects
            .filter(sub => totalClassSkills.some(s => s.subjectId === sub.id) || ['math', 'physics', 'svt', 'history_geo', 'philo', 'cs'].includes(sub.id))
            .map(sub => {
              const isCurrent = sub.id === (selectedSubjectId || subject.id);
              const count = totalClassSkills.filter(s => s.subjectId === sub.id).length;
              return (
                <button
                  key={sub.id}
                  id={`skill-tree-subj-btn-${sub.id}`}
                  onClick={() => onSelectSubject(sub.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    isCurrent
                      ? 'bg-[#2452FF] text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span 
                    className="w-2.5 h-2.5 rounded-full" 
                    style={{ backgroundColor: isCurrent ? '#FFFFFF' : sub.color }} 
                  />
                  <span>{sub.name}</span>
                  {count > 0 && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isCurrent ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
        </div>
      )}

      {/* Header bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0"
            style={{ backgroundColor: subject.color }}
          >
            {subject.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-heading text-xl font-bold text-slate-900">
                Parcours & Progression : {subject.name}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2452FF] text-[11px] font-semibold border border-blue-200">
                {userClass}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">
                {skills.length} chapitres au programme
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Parcours modulaire officiel • Progressez à votre rythme à travers les chapitres du programme.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
          {(subject.id === 'philo' || skills.some(s => s.subjectId === 'philo')) && (
            <button
              onClick={() => setIsPhilosophyModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>Tableau des 20 Notions & Méthode Bac</span>
            </button>
          )}

          {(subject.id === 'cs' || skills.some(s => s.subjectId === 'cs')) && (
            <button
              onClick={() => setIsCSModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-teal-600" />
              <span>Guide Python & Algorithmique (2nde • 1ère • Term)</span>
            </button>
          )}

          {(subject.id === 'math' && (skills.some(s => s.id.startsWith('skill-1ab-m-')) || userClass.includes('Première'))) && (
            <button
              onClick={() => setIsMathABModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2452FF] border border-blue-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-[#2452FF]" />
              <span>Progression 29 Séquences (1ère A1 & B)</span>
            </button>
          )}

          {isLevelCompleted && onPromoteNextLevel && (
            <button
              onClick={onPromoteNextLevel}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm animate-pulse"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Passer en classe supérieure</span>
            </button>
          )}
        </div>
      </div>

      {/* Curriculum Mastery Summary Stats */}
      {(() => {
        const acquiredCount = skills.filter(s => s.masteryScore >= 60).length;
        const avgScore = skills.length > 0 
          ? Math.round(skills.reduce((acc, curr) => acc + curr.masteryScore, 0) / skills.length) 
          : 0;

        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Chapitres Validés
                </span>
                <span className="font-heading font-extrabold text-lg text-slate-900">
                  {acquiredCount} / {skills.length}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs border border-emerald-200">
                {Math.round((acquiredCount / Math.max(1, skills.length)) * 100)}%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Score de Maîtrise Moyen
                </span>
                <span className="font-heading font-extrabold text-lg text-[#2452FF]">
                  {avgScore} %
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2452FF] flex items-center justify-center font-bold text-xs border border-blue-200">
                ★
              </div>
            </div>
          </div>
        );
      })()}

      {/* Main Grid: Interactive Axiom Pedagogical Pathway Graph + Selected Skill Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column: Skill Tree Graph (Exact same representation as Seconde) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs min-h-[500px]">
          <div className="max-w-md mx-auto py-4 space-y-8">
            {skills.map((skill, index) => {
              const isPrereqMet = checkPrerequisitesMet(skill);
              const isSelected = selectedSkill.id === skill.id;
              const isAcquired = skill.masteryScore >= 60;
              const isMastered = skill.masteryScore >= 80;
              const isLocked = !isPrereqMet;

              // Horizontal offset for rhythmic progressive path
              const offsets = ['translate-x-0', 'translate-x-8', 'translate-x-0', '-translate-x-8'];
              const currentOffset = offsets[index % offsets.length];

              const isNewUnit = index === 0 || skills[index - 1].unit !== skill.unit;

              return (
                <div key={skill.id} className="relative flex flex-col items-center w-full">
                  {/* Unit Section Header Banner */}
                  {isNewUnit && (
                    <div className="w-full text-center my-3">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-extrabold text-slate-700 uppercase tracking-wider shadow-xs">
                        <span>{skill.unit}</span>
                      </div>
                    </div>
                  )}

                  {/* Connecting dashed line to previous item */}
                  {index > 0 && !isNewUnit && (
                    <div className="w-1 h-8 bg-slate-200 -mt-2 mb-2 rounded-full" />
                  )}

                  <div className={`transition-transform duration-300 ${currentOffset}`}>
                    <button
                      id={`skill-node-${skill.id}`}
                      onClick={() => setSelectedSkillId(skill.id)}
                      className={`relative group p-1 rounded-3xl transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? 'ring-4 ring-[#2452FF]/30 scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      {/* Circle Node */}
                      <div
                        className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-md relative transition-colors ${
                          isLocked
                            ? 'bg-slate-100 border-2 border-slate-300 text-slate-400'
                            : isMastered
                            ? 'bg-gradient-to-br from-indigo-500 to-[#2452FF] text-white border-2 border-indigo-400 shadow-indigo-500/20'
                            : isAcquired
                            ? 'bg-gradient-to-br from-emerald-500 to-[#16C784] text-white border-2 border-emerald-400 shadow-emerald-500/20'
                            : 'bg-white border-2 border-[#2452FF] text-[#2452FF]'
                        }`}
                      >
                        {isLocked ? (
                          <Lock className="w-6 h-6 text-slate-400" />
                        ) : isMastered ? (
                          <Award className="w-7 h-7 text-amber-300 fill-amber-300" />
                        ) : isAcquired ? (
                          <Check className="w-7 h-7 stroke-[3]" />
                        ) : (
                          <Star className="w-6 h-6 fill-[#2452FF] text-[#2452FF]" />
                        )}

                        <span className="text-[10px] font-bold mt-1">
                          {isLocked ? 'Verrouillé' : `${skill.masteryScore}%`}
                        </span>
                      </div>

                      {/* Small crown badge if excellence */}
                      {skill.masteryScore >= 95 && (
                        <div className="absolute -top-2 -right-1 w-6 h-6 bg-[#FFC93C] rounded-full flex items-center justify-center shadow-xs">
                          <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                        </div>
                      )}
                    </button>

                    {/* Skill title label */}
                    <div className="text-center mt-2 max-w-[140px]">
                      <span className="font-heading text-xs font-bold text-slate-800 line-clamp-1 block">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        Niveau diff. {skill.difficulty}/5
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Selected Skill Detail Card (Sticky Inspector) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs sticky top-24 space-y-5">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {selectedSkill.unit}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getTierColor(selectedSkill.tier).bg} ${getTierColor(selectedSkill.tier).text} ${getTierColor(selectedSkill.tier).border}`}>
              Palier : {selectedSkill.tier}
            </span>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
              {selectedSkill.name}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedSkill.description}
            </p>
          </div>

          {/* Detailed Syllabus Topics if available */}
          {selectedSkill.topics && selectedSkill.topics.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#2452FF]" />
                Notions au programme du chapitre :
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedSkill.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mastery details */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-slate-600">Score de maîtrise</span>
              <span className="font-extrabold text-slate-900 text-sm">
                {selectedSkill.masteryScore} %
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#2452FF] rounded-full transition-all duration-500"
                style={{ width: `${selectedSkill.masteryScore}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500">
              <span>Difficulté : {selectedSkill.difficulty} / 5</span>
              <span>Session calibrée : 15 questions</span>
            </div>
          </div>

          {/* Progressive Difficulty Roadmap (Axiom Pedagogical Framework) */}
          <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/80 space-y-2">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
              Structure de la session (15 Questions • 3 Phases) :
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="p-2 rounded-xl bg-emerald-100/70 border border-emerald-200 text-[10px] font-bold text-emerald-900">
                1. Fondations
                <span className="block text-[9px] font-normal text-emerald-700">Q1 - Q5</span>
              </div>
              <div className="p-2 rounded-xl bg-blue-100/70 border border-blue-200 text-[10px] font-bold text-blue-900">
                2. Application
                <span className="block text-[9px] font-normal text-blue-700">Q6 - Q10</span>
              </div>
              <div className="p-2 rounded-xl bg-indigo-100/70 border border-indigo-200 text-[10px] font-bold text-indigo-900">
                3. Maîtrise
                <span className="block text-[9px] font-normal text-indigo-700">Q11 - Q15</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 italic mt-1 text-center">
              Indices contextuels, micro-concepts et résolutions détaillées étape par étape.
            </p>
          </div>

          {/* Rewards and Unlocking impact */}
          {(() => {
            const skillIndex = skills.findIndex(s => s.id === selectedSkill.id);
            const nextSkill = skillIndex >= 0 && skillIndex + 1 < skills.length ? skills[skillIndex + 1] : null;
            const isPrereqMet = checkPrerequisitesMet(selectedSkill);

            return (
              <div className="space-y-2">
                {/* Rewards callout */}
                <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs flex items-center justify-between text-amber-900">
                  <span className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Points Axiom en jeu :
                  </span>
                  <span className="font-extrabold text-amber-700 bg-white px-2.5 py-0.5 rounded-full border border-amber-200">
                    Jusqu'à +450 XP
                  </span>
                </div>

                {/* Next chapter recommendation */}
                {nextSkill && (
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 space-y-1">
                    <span className="font-bold block text-slate-700 text-[11px] uppercase tracking-wider">
                      Chapitre suivant :
                    </span>
                    <p className="text-slate-600 font-medium leading-snug">
                      Ce chapitre prépare l'apprentissage de : <strong>{nextSkill.name}</strong>.
                    </p>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Action button */}
          <button
            id="btn-action-start-skill-exercise"
            onClick={() => onStartExercise(selectedSkill.id)}
            className="w-full py-3.5 px-4 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            Lancer l'entraînement (15 questions)
          </button>
        </div>
      </div>

      {/* Philosophy Synthesis Modal (20 Notions + Méthodologie Bac) */}
      <PhilosophySynthesisModal
        isOpen={isPhilosophyModalOpen}
        onClose={() => setIsPhilosophyModalOpen(false)}
        onSelectNotionSkill={(skillId) => {
          setSelectedSkillId(skillId);
          setIsPhilosophyModalOpen(false);
        }}
      />

      {/* Computer Science / Python Synthesis Modal (2nde, 1ère, Term) */}
      <ComputerScienceSynthesisModal
        isOpen={isCSModalOpen}
        onClose={() => setIsCSModalOpen(false)}
        onSelectSkill={(skillId) => {
          setSelectedSkillId(skillId);
          setIsCSModalOpen(false);
        }}
        currentLevel={userClass}
      />

      {/* Mathématiques 1ère A1 & 1ère B Synthesis Modal (29 Séquences Gabon) */}
      <PremiereABMathSynthesisModal
        isOpen={isMathABModalOpen}
        onClose={() => setIsMathABModalOpen(false)}
        onSelectSequenceSkill={(skillId) => {
          setSelectedSkillId(skillId);
          setIsMathABModalOpen(false);
        }}
      />
    </div>
  );
};
