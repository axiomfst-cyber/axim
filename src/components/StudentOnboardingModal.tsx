import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Check, 
  School, 
  User, 
  Mail, 
  ArrowRight, 
  X,
  BookOpen,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { AVAILABLE_CLASSES, GABON_HIGH_SCHOOLS } from '../data/axiomData';
import { SchoolClassDefinition, UserProfile } from '../types';

interface StudentOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterStudent: (data: {
    name: string;
    email: string;
    schoolName: string;
    selectedClass: SchoolClassDefinition;
    openAvatarSetup?: boolean;
  }) => void;
  currentClassId?: string;
}

export const StudentOnboardingModal: React.FC<StudentOnboardingModalProps> = ({
  isOpen,
  onClose,
  onRegisterStudent,
  currentClassId = 'term-c'
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('Moussa Obiang');
  const [email, setEmail] = useState('moussa.obiang@lycee-leon-mba.ga');
  const [schoolName, setSchoolName] = useState(GABON_HIGH_SCHOOLS[0]);
  const [selectedClassId, setSelectedClassId] = useState<string>(currentClassId);
  const [gradeFilter, setGradeFilter] = useState<'all' | 'Seconde' | 'Première' | 'Terminale'>('all');
  const [openAvatarSetup, setOpenAvatarSetup] = useState<boolean>(true);

  if (!isOpen) return null;

  const selectedClass = AVAILABLE_CLASSES.find(c => c.id === selectedClassId) || AVAILABLE_CLASSES[0];

  const filteredClasses = gradeFilter === 'all' 
    ? AVAILABLE_CLASSES 
    : AVAILABLE_CLASSES.filter(c => c.grade === gradeFilter);

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onRegisterStudent({
      name,
      email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@axiom.ga`,
      schoolName,
      selectedClass,
      openAvatarSetup,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2452FF] to-blue-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Inscription & Choix de Classe (Lycée Gabon)
          </div>

          <h2 className="font-heading text-2xl font-bold tracking-tight">
            Bienvenue sur AXIOM ACADEMY
          </h2>
          <p className="text-blue-100 text-xs mt-1 max-w-lg">
            Créez votre profil élève, choisissez votre classe de la <strong>Seconde à la Terminale</strong> et commencez immédiatement votre parcours de compétences.
          </p>

          {/* Stepper */}
          <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/20 text-xs font-medium">
            <div className={`flex items-center gap-1.5 ${step === 1 ? 'text-white font-bold' : 'text-blue-200'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step === 1 ? 'bg-white text-[#2452FF]' : 'bg-white/30 text-white'
              }`}>1</span>
              <span>Profil Élève</span>
            </div>
            <span className="text-white/40">•</span>
            <div className={`flex items-center gap-1.5 ${step === 2 ? 'text-white font-bold' : 'text-blue-200'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step === 2 ? 'bg-white text-[#2452FF]' : 'bg-white/30 text-white'
              }`}>2</span>
              <span>Choix du Niveau (2nde à Terminale)</span>
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {step === 1 && (
            <div className="space-y-4 max-w-xl mx-auto py-2">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#2452FF]" />
                  Nom complet de l'élève
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Ex : Moussa Obiang, Jean-Marc Mba..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 text-sm outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#2452FF]" />
                  Adresse email scolaire ou personnelle
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="moussa.obiang@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5 text-[#2452FF]" />
                  Établissement scolaire au Gabon
                </label>
                <select
                  value={schoolName}
                  onChange={e => setSchoolName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 text-sm outline-none bg-white"
                >
                  {GABON_HIGH_SCHOOLS.map((hs, i) => (
                    <option key={i} value={hs}>{hs}</option>
                  ))}
                </select>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2452FF] shrink-0 mt-0.5" />
                <p>
                  Votre compte sera rattaché au rôle <strong>Élève</strong>. Vos scores et compétences seront sécurisés par le serveur backend AXIOM ACADEMY.
                </p>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
                >
                  Choisir mon niveau scolaire
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-base">
                    Sélectionnez votre classe actuelle
                  </h3>
                  <p className="text-xs text-slate-500">
                    Les programmes sont conformes aux référentiels du Ministère de l'Éducation Nationale du Gabon.
                  </p>
                </div>

                {/* Grade filter pills */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  {(['all', 'Seconde', 'Première', 'Terminale'] as const).map(g => (
                    <button
                      key={g}
                      onClick={() => setGradeFilter(g)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        gradeFilter === g
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {g === 'all' ? 'Toutes' : g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Class Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                {filteredClasses.map(cls => {
                  const isSelected = selectedClassId === cls.id;
                  return (
                    <button
                      key={cls.id}
                      type="button"
                      onClick={() => setSelectedClassId(cls.id)}
                      className={`p-4 rounded-2xl border text-left transition-all relative group flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#2452FF] bg-blue-50/60 ring-2 ring-[#2452FF]/20 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                            {cls.grade} • {cls.track}
                          </span>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected ? 'bg-[#2452FF] border-[#2452FF] text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>

                        <h4 className="font-heading font-bold text-sm text-slate-900 group-hover:text-[#2452FF] transition-colors">
                          {cls.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                          {cls.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-600">
                        <span>Matières clés :</span>
                        <span className="font-semibold text-slate-800 uppercase">
                          {cls.focusSubjects.join(', ')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Duolingo Avatar Setup Checkbox */}
              <div 
                className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl flex items-center justify-between gap-3 cursor-pointer hover:bg-blue-50 transition-colors"
                onClick={() => setOpenAvatarSetup(!openAvatarSetup)}
              >
                <div className="flex items-center gap-2.5 text-xs text-blue-950 font-medium">
                  <span className="text-base">🎓</span>
                  <div>
                    <span className="font-bold text-slate-900 block">
                      Initialiser mon avatar interactif (Style Duolingo)
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Le personnage portera ton prénom ({name.trim().split(/\s+/)[0] || 'Moussa'}) : choisis la forme de sa tête et ses vraies tenues (blazer, maillot Gabon, wax, blouse labo...).
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={openAvatarSetup}
                  onChange={e => setOpenAvatarSetup(e.target.checked)}
                  onClick={e => e.stopPropagation()}
                  className="w-4 h-4 text-[#2452FF] rounded border-slate-300 focus:ring-blue-500 cursor-pointer shrink-0"
                />
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
                >
                  ← Retour au profil
                </button>

                <button
                  type="button"
                  onClick={handleComplete}
                  className="px-6 py-3 rounded-xl bg-[#16C784] hover:bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Commencer mon parcours en {selectedClass.name}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
