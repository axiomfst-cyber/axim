import React, { useState } from 'react';
import { 
  Calculator, 
  Search, 
  ChevronRight, 
  Sparkles, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Check, 
  Play, 
  Layers, 
  Sigma, 
  BarChart3, 
  Compass, 
  Lightbulb, 
  GraduationCap,
  TrendingUp
} from 'lucide-react';
import { PREMIERE_AB_MATH_SEQUENCES, MathSequenceDetail } from '../data/axiomPremiereABMathData';

interface PremiereABMathSynthesisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSequenceSkill?: (skillId: string) => void;
}

export const PremiereABMathSynthesisModal: React.FC<PremiereABMathSynthesisModalProps> = ({
  isOpen,
  onClose,
  onSelectSequenceSkill
}) => {
  const [activeTab, setActiveTab] = useState<'programme' | 'formulaire' | 'methodologie'>('programme');
  const [selectedTrimestre, setSelectedTrimestre] = useState<0 | 1 | 2 | 3>(0); // 0 = all
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSequence, setSelectedSequence] = useState<MathSequenceDetail>(PREMIERE_AB_MATH_SEQUENCES[0]);

  if (!isOpen) return null;

  const filteredSequences = PREMIERE_AB_MATH_SEQUENCES.filter(seq => {
    const matchesTrimestre = selectedTrimestre === 0 || seq.trimestre === selectedTrimestre;
    const matchesSearch = 
      seq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seq.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seq.contents.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
      seq.keyFormulas.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTrimestre && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-gradient-to-r from-blue-950 via-[#2452FF] to-indigo-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-white text-2xl shadow-inner border border-white/20">
              📐
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Gabon • Programme Officiel National
              </div>
              <h2 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                Mathématiques 1ère A1 & 1ère B (29 Séquences)
              </h2>
              <p className="text-xs text-blue-100 hidden sm:block">
                Compilation complète et unifiée des 3 trimestres : Algèbre, Analyse, Probabilités & Statistiques
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer text-lg font-bold border border-white/20"
            aria-label="Fermer la modal"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50 px-4 sm:px-6 shrink-0 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('programme')}
            className={`py-3.5 px-4 font-heading font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'programme'
                ? 'border-[#2452FF] text-[#2452FF]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Programme Annuel (29 Séquences)</span>
          </button>
          <button
            onClick={() => setActiveTab('formulaire')}
            className={`py-3.5 px-4 font-heading font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'formulaire'
                ? 'border-[#2452FF] text-[#2452FF]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sigma className="w-4 h-4" />
            <span>Formulaire & Synthèses Clés</span>
          </button>
          <button
            onClick={() => setActiveTab('methodologie')}
            className={`py-3.5 px-4 font-heading font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'methodologie'
                ? 'border-[#2452FF] text-[#2452FF]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Guide Méthodologique & Épreuves</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* TAB 1: PROGRAMME ANNUEL (29 SÉQUENCES) */}
          {activeTab === 'programme' && (
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              {/* Left Column: Sequence Selector */}
              <div className="w-full md:w-5/12 border-r border-slate-200 flex flex-col bg-slate-50/50">
                {/* Search & Trimestre Filters */}
                <div className="p-3 sm:p-4 border-b border-slate-200 space-y-2 bg-white">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Rechercher une séquence, notion, formule..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-100 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2452FF] focus:bg-white transition-all border border-slate-200"
                    />
                  </div>

                  {/* Trimestre Filter Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px]">
                    <button
                      onClick={() => setSelectedTrimestre(0)}
                      className={`px-2.5 py-1 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                        selectedTrimestre === 0 
                          ? 'bg-[#2452FF] text-white shadow-xs' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      Tous (29)
                    </button>
                    <button
                      onClick={() => setSelectedTrimestre(1)}
                      className={`px-2.5 py-1 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                        selectedTrimestre === 1 
                          ? 'bg-amber-600 text-white shadow-xs' 
                          : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                      }`}
                    >
                      🍂 T1 (1-12)
                    </button>
                    <button
                      onClick={() => setSelectedTrimestre(2)}
                      className={`px-2.5 py-1 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                        selectedTrimestre === 2 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200'
                      }`}
                    >
                      ❄️ T2 (13-19)
                    </button>
                    <button
                      onClick={() => setSelectedTrimestre(3)}
                      className={`px-2.5 py-1 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                        selectedTrimestre === 3 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                      }`}
                    >
                      🌱 T3 (20-29)
                    </button>
                  </div>
                </div>

                {/* Sequence List */}
                <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                  {filteredSequences.length === 0 ? (
                    <div className="p-8 text-center text-slate-400 text-xs">
                      Aucune séquence ne correspond à cette recherche.
                    </div>
                  ) : (
                    filteredSequences.map((seq) => {
                      const isSelected = selectedSequence.sequenceNumber === seq.sequenceNumber;
                      const trimBadgeColor = seq.trimestre === 1 
                        ? 'bg-amber-100 text-amber-800 border-amber-200' 
                        : seq.trimestre === 2 
                        ? 'bg-blue-100 text-blue-800 border-blue-200' 
                        : 'bg-emerald-100 text-emerald-800 border-emerald-200';

                      return (
                        <button
                          key={seq.sequenceNumber}
                          onClick={() => setSelectedSequence(seq)}
                          className={`w-full text-left p-3 sm:p-3.5 transition-all flex items-center justify-between gap-3 cursor-pointer ${
                            isSelected 
                              ? 'bg-blue-50/80 border-l-4 border-l-[#2452FF]' 
                              : 'hover:bg-slate-100/70 border-l-4 border-l-transparent'
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className={`px-1.5 py-0.5 rounded text-[9px] font-extrabold border ${trimBadgeColor}`}>
                                T{seq.trimestre}
                              </span>
                              <span className="text-[10px] font-bold text-slate-500">
                                Séquence {seq.sequenceNumber}
                              </span>
                              <span className="text-[9px] font-semibold text-slate-400 px-1 bg-slate-100 rounded">
                                {seq.domain}
                              </span>
                            </div>
                            <h4 className="text-xs font-bold text-slate-900 truncate">
                              {seq.title}
                            </h4>
                          </div>
                          <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${
                            isSelected ? 'text-[#2452FF] translate-x-0.5' : 'text-slate-300'
                          }`} />
                        </button>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Right Column: Detailed Sequence Viewer */}
              <div className="w-full md:w-7/12 flex-1 p-5 sm:p-6 overflow-y-auto space-y-5 bg-white">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-[#2452FF]/10 text-[#2452FF] border border-[#2452FF]/20">
                      Séquence {selectedSequence.sequenceNumber} • {selectedSequence.trimestre === 1 ? '1er Trimestre' : selectedSequence.trimestre === 2 ? '2ème Trimestre' : '3ème Trimestre'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                      {selectedSequence.domain}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                    {selectedSequence.title}
                  </h3>
                </div>

                {/* Contenus Officiels */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2452FF]" />
                    <span>Contenus et Notions au Programme</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedSequence.contents.map((content, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2452FF] mt-1.5 shrink-0" />
                        <span>{content}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formules Clés */}
                {selectedSequence.keyFormulas.length > 0 && (
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2.5">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-blue-900 flex items-center gap-2">
                      <Sigma className="w-4 h-4 text-[#2452FF]" />
                      <span>Formules & Résultats Clés</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedSequence.keyFormulas.map((formula, idx) => (
                        <div 
                          key={idx} 
                          className="p-2.5 rounded-xl bg-white border border-blue-200 text-xs font-mono font-bold text-slate-900 shadow-2xs"
                        >
                          {formula}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Compétences Exigibles */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2.5">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-700" />
                    <span>Compétences Exigibles & Évaluations</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-emerald-900/90">
                    {selectedSequence.competencies.map((comp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Launch Training */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      if (onSelectSequenceSkill) {
                        onSelectSequenceSkill(selectedSequence.skillId);
                      }
                      onClose();
                    }}
                    className="flex-1 py-3 px-5 rounded-2xl bg-[#2452FF] hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Lancer la série d'exercices (Séquence {selectedSequence.sequenceNumber})</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FORMULAIRE & SYNTHÈSES CLÉS */}
          {activeTab === 'formulaire' && (
            <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-6 bg-slate-50">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#2452FF]">
                    <Calculator className="w-5 h-5" />
                    <h3 className="font-heading font-extrabold text-base text-slate-900">
                      1. Équations & Fonctions Polynômes du Second Degré
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Forme Canonique</span>
                      <p className="font-mono text-blue-700 font-bold mb-1">f(x) = a(x - α)² + β</p>
                      <p className="text-slate-600">Avec α = -b / (2a) et β = f(α) = -Δ / (4a). Le sommet de la parabole est S(α ; β).</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Discriminant & Racines</span>
                      <p className="font-mono text-blue-700 font-bold mb-1">Δ = b² - 4ac</p>
                      <p className="text-slate-600">Si Δ &gt; 0 : 2 racines x₁,₂ = (-b ± √Δ)/(2a). Si Δ = 0 : racine double x₀ = -b/(2a). Si Δ &lt; 0 : pas de racine réelle.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Somme et Produit</span>
                      <p className="font-mono text-blue-700 font-bold mb-1">S = x₁ + x₂ = -b/a  |  P = x₁ · x₂ = c/a</p>
                      <p className="text-slate-600">Deux nombres de somme S et produit P sont solutions de l'équation x² - Sx + P = 0.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Règle du Signe</span>
                      <p className="font-bold text-slate-800 mb-1">Signe de "a" à l'extérieur des racines</p>
                      <p className="text-slate-600">Si Δ &gt; 0, le trinôme est du signe opposé à "a" strictement entre les racines x₁ et x₂.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-indigo-700">
                    <Layers className="w-5 h-5" />
                    <h3 className="font-heading font-extrabold text-base text-slate-900">
                      2. Dénombrement & Calcul des Probabilités
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Tirages avec remise</span>
                      <span className="text-[10px] uppercase font-bold text-indigo-700 block mb-1">p-listes</span>
                      <p className="font-mono text-indigo-700 font-bold text-sm mb-1">n^p</p>
                      <p className="text-slate-600">L'ordre compte, répétitions permises (ex : codes PIN, mots de passe).</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Tirages sans remise</span>
                      <span className="text-[10px] uppercase font-bold text-indigo-700 block mb-1">Arrangements</span>
                      <p className="font-mono text-indigo-700 font-bold text-sm mb-1">A_n^p = n! / (n-p)!</p>
                      <p className="text-slate-600">L'ordre compte, sans répétition (ex : podium, bureau avec Président/Trésorier).</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Tirages simultanés</span>
                      <span className="text-[10px] uppercase font-bold text-indigo-700 block mb-1">Combinaisons</span>
                      <p className="font-mono text-indigo-700 font-bold text-sm mb-1">binom(n, p) = n! / [p!(n-p)!]</p>
                      <p className="text-slate-600">L'ordre ne compte pas, sans répétition (ex : mains de cartes, comités).</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <TrendingUp className="w-5 h-5" />
                    <h3 className="font-heading font-extrabold text-base text-slate-900">
                      3. Suites Arithmétiques et Géométriques
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Suite Arithmétique (raison r)</span>
                      <p className="font-mono text-emerald-700 font-bold mb-1">u_{`{n+1}`} = u_n + r  |  u_n = u₀ + n·r</p>
                      <p className="text-slate-600 mb-1">Somme : S = (nb de termes) × (premier + dernier) / 2</p>
                      <p className="font-mono text-[11px] text-slate-500">1 + 2 + ... + n = n(n+1)/2</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Suite Géométrique (raison q ≠ 1)</span>
                      <p className="font-mono text-emerald-700 font-bold mb-1">u_{`{n+1}`} = q · u_n  |  u_n = u₀ · q^n</p>
                      <p className="text-slate-600 mb-1">Somme : S = u_{`{premier}`} × (1 - q^{`{nb termes}`}) / (1 - q)</p>
                      <p className="font-mono text-[11px] text-slate-500">1 + q + ... + q^n = (1 - q^{`{n+1}`}) / (1 - q)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-amber-700">
                    <BarChart3 className="w-5 h-5" />
                    <h3 className="font-heading font-extrabold text-base text-slate-900">
                      4. Dérivation, Tangentes & Asymptotes
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Tangente & Approximation affine</span>
                      <p className="font-mono text-amber-700 font-bold mb-1">y = f'(x₀)(x - x₀) + f(x₀)</p>
                      <p className="text-slate-600">Extremum local en x₀ ⇒ f'(x₀) = 0 (tangente horizontale).</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Opérations sur les dérivées</span>
                      <p className="font-mono text-amber-700 font-bold mb-1">(uv)' = u'v + uv'  |  (u/v)' = (u'v - uv')/v²</p>
                      <p className="text-slate-600">(x^n)' = n · x^{`{n-1}`} pour tout n ∈ ℤ (y compris les puissances négatives).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GUIDE MÉTHODOLOGIQUE */}
          {activeTab === 'methodologie' && (
            <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-6 bg-slate-50">
              <div className="max-w-4xl mx-auto space-y-5">
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2.5 text-[#2452FF]">
                    <Lightbulb className="w-5 h-5" />
                    <h3 className="font-heading font-extrabold text-base text-slate-900">
                      Les 4 Piliers de la Rigueur en 1ère A1 & 1ère B
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-1.5">
                      <span className="font-bold text-blue-900 block text-sm">1. Poser les ensembles de définition</span>
                      <p className="text-slate-700 leading-relaxed">
                        Avant toute factorisation, dérivation ou résolution d'équation rationnelle, précisez toujours le domaine d'étude D_f (valeurs interdites au dénominateur ou sous le radical).
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-1.5">
                      <span className="font-bold text-emerald-900 block text-sm">2. Justifier le signe de la dérivée</span>
                      <p className="text-slate-700 leading-relaxed">
                        Ne dressez jamais un tableau de variations sans une ligne explicite pour le signe de f'(x). Énoncez le théorème : « f'(x) &gt; 0 sur I donc f est strictement croissante sur I ».
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                      <span className="font-bold text-amber-900 block text-sm">3. Identifier le type de tirage</span>
                      <p className="text-slate-700 leading-relaxed">
                        En dénombrement, repérez les mots-clés : « successivement avec remise » (p-liste), « successivement sans remise » (arrangement) ou « simultanément » (combinaison).
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-1.5">
                      <span className="font-bold text-indigo-900 block text-sm">4. Rédiger les conclusions économiques</span>
                      <p className="text-slate-700 leading-relaxed">
                        En 1ère B particulièrement, donnez toujours l'unité et le sens économique du résultat (ex : « Le coût marginal minimal est atteint pour une production de 450 unités »).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2.5 text-slate-800">
                    <Compass className="w-5 h-5 text-[#2452FF]" />
                    <h3 className="font-heading font-extrabold text-base text-slate-900">
                      Structure Type d'une Épreuve de Mathématiques (Bac A1 / B)
                    </h3>
                  </div>
                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#2452FF] text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                      <div>
                        <span className="font-bold text-slate-900 block">Exercice 1 : Équations & Dénombrement (4 à 5 points)</span>
                        <p className="text-slate-600 mt-0.5">Second degré, factorisations, tirages dans une urne, calculs de combinaisons et probabilités d'événements.</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#2452FF] text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                      <div>
                        <span className="font-bold text-slate-900 block">Exercice 2 : Suites Numériques & Pourcentages (4 à 5 points)</span>
                        <p className="text-slate-600 mt-0.5">Suites arithmétiques ou géométriques appliquées à des évolutions économiques, calcul du terme général et sommes cumulées.</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#2452FF] text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                      <div>
                        <span className="font-bold text-slate-900 block">Problème d'Analyse : Étude de Fonction & Dérivation (10 à 11 points)</span>
                        <p className="text-slate-600 mt-0.5">Limites, asymptotes (horizontale, verticale, oblique), calcul de dérivée, tableau de variations complet, tangentes et tracé soigné de la courbe.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <span>29 Séquences Officielles • 1ère A1 & 1ère B (Gabon)</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-all cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
