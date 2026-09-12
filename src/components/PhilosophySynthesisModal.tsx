import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Quote, 
  ChevronRight, 
  Sparkles, 
  HelpCircle, 
  FileText, 
  Calendar,
  Layers,
  GraduationCap,
  Compass,
  CheckCircle2,
  BookCheck,
  AlertCircle,
  Clock
} from 'lucide-react';
import { TERMINALE_PHILOSOPHIE_SYNTHESIS_DATA } from '../data/axiomTerminalePhilosophySynthesis';
import { GABON_PHILOSOPHIE_ANNUAL_PROGRAM } from '../data/axiomPhilosophyAnnualProgram';

interface PhilosophySynthesisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectNotionSkill?: (skillId: string) => void;
}

export const PhilosophySynthesisModal: React.FC<PhilosophySynthesisModalProps> = ({
  isOpen,
  onClose,
  onSelectNotionSkill
}) => {
  const [activeTab, setActiveTab] = useState<'programme' | 'tableau' | 'methode'>('programme');
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNotion, setSelectedNotion] = useState(TERMINALE_PHILOSOPHIE_SYNTHESIS_DATA[0]);

  if (!isOpen) return null;

  const currentMonthData = GABON_PHILOSOPHIE_ANNUAL_PROGRAM[selectedMonthIndex] || GABON_PHILOSOPHIE_ANNUAL_PROGRAM[0];

  const filteredNotions = TERMINALE_PHILOSOPHIE_SYNTHESIS_DATA.filter(item => 
    item.notion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.probleme.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.argument.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.citation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.auteur.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-gradient-to-r from-indigo-950 via-indigo-900 to-[#2452FF] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-white text-xl shadow-inner border border-white/20">
              🏛️
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-indigo-100 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Programme Officiel Gabon – Enseignement Secondaire (1ère & Tle)
              </div>
              <h2 className="font-heading font-black text-xl sm:text-2xl tracking-tight text-white">
                Mémento de Philosophie : Programme Annuel & Méthodologie
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer text-lg"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/80 shrink-0">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('programme')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'programme'
                  ? 'bg-[#2452FF] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Programme Annuel (9 Mois)
            </button>
            <button
              onClick={() => setActiveTab('tableau')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'tableau'
                  ? 'bg-[#2452FF] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              20 Notions Fondamentales
            </button>
            <button
              onClick={() => setActiveTab('methode')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'methode'
                  ? 'bg-[#2452FF] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              Méthodologie 3 Sujets Bac
            </button>
          </div>

          {activeTab === 'tableau' && (
            <div className="relative w-60 hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher une notion, auteur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2452FF]"
              />
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {activeTab === 'programme' ? (
            /* Programme Annuel sur 9 Mois */
            <div className="space-y-6">
              {/* Monthly Selector Pills */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                  <span className="flex items-center gap-1.5 text-indigo-900">
                    <Compass className="w-4 h-4 text-[#2452FF]" />
                    Progression chronologique des 9 mois d'enseignement
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    Mois {selectedMonthIndex + 1} sur 9
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-1.5">
                  {GABON_PHILOSOPHIE_ANNUAL_PROGRAM.map((m, idx) => {
                    const isCurrent = idx === selectedMonthIndex;
                    return (
                      <button
                        key={m.month}
                        onClick={() => setSelectedMonthIndex(idx)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all cursor-pointer border ${
                          isCurrent
                            ? 'bg-[#2452FF] text-white border-[#2452FF] shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <span className="block text-[10px] opacity-75 font-medium">Mois</span>
                        <span className="text-sm font-black">{m.month}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Month Detail Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-[#2452FF] text-[11px] font-extrabold mb-1">
                      <Clock className="w-3 h-3" />
                      {currentMonthData.period}
                    </div>
                    <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
                      {currentMonthData.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {currentMonthData.themeGlobal}
                    </p>
                  </div>

                  {onSelectNotionSkill && currentMonthData.associatedSkillIds.length > 0 && (
                    <button
                      onClick={() => {
                        onSelectNotionSkill(currentMonthData.associatedSkillIds[0]);
                        onClose();
                      }}
                      className="px-4 py-2 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>S'entraîner sur ce mois</span>
                    </button>
                  )}
                </div>

                {/* Grid: Segments de connaissances & Méthodologie / Oeuvres */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Left Column: Segments de connaissances */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#2452FF]" />
                      Segments de Connaissances & Contenus
                    </h4>
                    <div className="space-y-3">
                      {currentMonthData.segments.map((seg, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-800 font-bold text-xs inline-block">
                            {seg.segment}
                          </span>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {seg.content.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="text-[#2452FF] font-black shrink-0 mt-0.5">•</span>
                                <span className="leading-snug">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Méthodologie / Oeuvres / Evaluation */}
                  <div className="space-y-4">
                    {/* Methodology */}
                    {currentMonthData.methodology && (
                      <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 font-bold text-xs">
                            Méthodologie : {currentMonthData.methodology.title}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-slate-100 rounded-md text-slate-600">
                            Baccalauréat
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 leading-snug">
                          {currentMonthData.methodology.description}
                        </p>
                        <div className="space-y-1 pt-1 border-t border-slate-100">
                          <span className="text-[11px] font-bold text-slate-600 block">Étapes cardinales :</span>
                          <ul className="text-[11px] text-slate-600 space-y-1">
                            {currentMonthData.methodology.keySteps.map((step, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-1.5">
                                <span className="text-amber-600 font-bold">✓</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-[11px] text-amber-900">
                          <strong className="block mb-0.5">Exemple de sujet type :</strong>
                          <span className="italic">{currentMonthData.methodology.typicalSubjectExample}</span>
                        </div>
                      </div>
                    )}

                    {/* Oeuvres */}
                    {currentMonthData.oeuvres && (
                      <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-bold text-xs">
                          {currentMonthData.oeuvres.title}
                        </span>
                        <p className="text-xs text-slate-700 leading-snug">
                          {currentMonthData.oeuvres.description}
                        </p>
                        <div className="text-[11px] text-slate-600">
                          <strong>Auteurs au programme :</strong> {currentMonthData.oeuvres.suggestedAuthors.join(', ')}
                        </div>
                      </div>
                    )}

                    {/* Évaluation */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                      <div className="flex items-center gap-1.5">
                        <BookCheck className="w-4 h-4 text-indigo-600" />
                        <span className="text-xs font-bold text-slate-900">
                          {currentMonthData.evaluation.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-snug">
                        {currentMonthData.evaluation.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {currentMonthData.evaluation.criteria.map((crit, cIdx) => (
                          <span key={cIdx} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200">
                            {crit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* African Perspective */}
                    {currentMonthData.africanGabonesePerspective && (
                      <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs text-purple-950 space-y-1">
                        <span className="font-extrabold flex items-center gap-1.5 text-purple-900 text-[11px] uppercase tracking-wider">
                          <GraduationCap className="w-3.5 h-3.5 text-purple-700" />
                          Perspective Africaine & Gabonaise
                        </span>
                        <p className="leading-snug text-[11px] text-purple-900/90">
                          {currentMonthData.africanGabonesePerspective}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'tableau' ? (
            <div className="space-y-6">
              {/* Quick stats & instruction banner */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-indigo-900">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2452FF] shrink-0" />
                  <span>
                    <strong>20 Notions fondamentales</strong> au programme : Problème philosophique, Thèse centrale, Argumentation et Citation clé d'auteur.
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white border border-indigo-200 font-extrabold text-[#2452FF] text-[11px] shrink-0">
                  {filteredNotions.length} notions affichées
                </span>
              </div>

              {/* Table / Grid of Notions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredNotions.map((item, idx) => {
                  const isSelected = selectedNotion.notion === item.notion;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedNotion(item)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#2452FF] bg-blue-50/40 shadow-xs ring-2 ring-[#2452FF]/20'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-md bg-indigo-100 text-indigo-800 font-black text-xs tracking-wide">
                            {item.notion}
                          </span>
                          <span className="text-[11px] font-bold text-slate-500">
                            {item.auteur}
                          </span>
                        </div>

                        <div>
                          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                            <HelpCircle className="w-3 h-3 text-[#2452FF]" />
                            <span>Problème :</span>
                          </div>
                          <p className="text-xs font-bold text-slate-900">
                            {item.probleme}
                          </p>
                        </div>

                        <div>
                          <div className="text-[11px] font-semibold text-slate-500">
                            <span>Argumentation :</span>
                          </div>
                          <p className="text-xs text-slate-700 leading-snug">
                            {item.argument}
                          </p>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 italic flex items-start gap-2">
                          <Quote className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>« {item.citation} »</span>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-slate-500">
                          Notion n°{idx + 1}
                        </span>
                        {onSelectNotionSkill && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectNotionSkill(item.skillId);
                              onClose();
                            }}
                            className="inline-flex items-center gap-1 text-[#2452FF] font-bold hover:underline cursor-pointer"
                          >
                            <span>S'entraîner sur cette notion</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Méthodologie Baccalauréat */
            <div className="space-y-6">
              {/* Sujet Type 1 : Dissertation */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#2452FF] font-black flex items-center justify-center text-lg">
                    ✒️
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-slate-900">
                      Sujet Type 1 : La Dissertation Philosophique (Question ou Citation)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Démarche réflexive et dialectique rigoureuse en 3 temps (Thèse, Antithèse, Synthèse)
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2452FF] font-black text-xs flex items-center justify-center border border-blue-200">
                        1
                      </span>
                      <h4 className="font-bold text-xs text-slate-900">
                        Introduction (4 étapes)
                      </h4>
                    </div>
                    <ul className="text-[11px] text-slate-600 space-y-1.5 pl-1">
                      <li>• <strong>Amorce :</strong> mise en situation sans cliché historique.</li>
                      <li>• <strong>Définition :</strong> clarifier les notions clés du sujet.</li>
                      <li>• <strong>Problématique :</strong> formuler le paradoxe ou la tension centrale.</li>
                      <li>• <strong>Annonce du plan :</strong> énoncer clairement les 3 axes directeurs.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center border border-indigo-200">
                        2
                      </span>
                      <h4 className="font-bold text-xs text-slate-900">
                        Développement Dialectique
                      </h4>
                    </div>
                    <ul className="text-[11px] text-slate-600 space-y-1.5 pl-1">
                      <li>• <strong>Thèse :</strong> argumentation de la première réponse (auteurs, raisonnements).</li>
                      <li>• <strong>Antithèse :</strong> limites et objections rationnelles à la thèse.</li>
                      <li>• <strong>Synthèse :</strong> dépassement conceptuel (Aufhebung) sans compromis tiède.</li>
                      <li>• <strong>Transitions :</strong> lier logiquement chaque paragraphe.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">
                        3
                      </span>
                      <h4 className="font-bold text-xs text-slate-900">
                        Conclusion Rigoureuse
                      </h4>
                    </div>
                    <ul className="text-[11px] text-slate-600 space-y-1.5 pl-1">
                      <li>• <strong>Bilan ordonné :</strong> rappeler brièvement l'itinéraire de pensée.</li>
                      <li>• <strong>Réponse claire :</strong> prise de position sans ambiguïté.</li>
                      <li>• <strong>Ouverture :</strong> élargir le champ de réflexion à une dimension supérieure.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sujet Type 2 : Commentaire de Texte */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-black flex items-center justify-center text-lg">
                    🔎
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-slate-900">
                      Sujet Type 2 : Le Commentaire de Texte Philosophique
                    </h3>
                    <p className="text-xs text-slate-500">
                      Expliquer le texte sans jamais tomber dans l'écueil de la paraphrase
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-50 text-amber-800 font-black text-xs flex items-center justify-center border border-amber-200">
                        1
                      </span>
                      <h4 className="font-bold text-xs text-slate-900">
                        Thème, Thèse & Problème
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Identifier avec certitude <strong>de quoi</strong> parle le texte (le thème), <strong>ce que soutient</strong> l'auteur (la thèse) et <strong>à quelle difficulté théorique</strong> il apporte une réponse (le problème).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2452FF] font-black text-xs flex items-center justify-center border border-blue-200">
                        2
                      </span>
                      <h4 className="font-bold text-xs text-slate-900">
                        Explication des Arguments
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Découper le texte selon ses articulations logiques (connecteurs). Pour chaque étape, élucider les concepts, dégager les présupposés et montrer la rigueur démonstrative de l'auteur.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-50 text-purple-700 font-black text-xs flex items-center justify-center border border-purple-200">
                        3
                      </span>
                      <h4 className="font-bold text-xs text-slate-900">
                        Discussion Critique
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Évaluer l'intérêt philosophique du texte : mesurer la fécondité de la solution proposée, la confronter à d'autres doctrines et en souligner les limites sans jugement superficiel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs shrink-0">
          <span className="text-slate-500 font-medium hidden sm:inline">
            Baccalauréat Gabonais – Terminales A, C et D & Première Littéraire
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#2452FF] text-white font-bold text-xs hover:bg-blue-700 transition-all cursor-pointer ml-auto flex items-center gap-1.5 shadow-sm"
          >
            <span>Fermer le mémento</span>
          </button>
        </div>
      </div>
    </div>
  );
};

