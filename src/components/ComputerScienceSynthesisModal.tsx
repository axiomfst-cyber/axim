import React, { useState } from 'react';
import { Code, Terminal, Sparkles, BookOpen, ChevronRight, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { CS_PROGRESSION_DATA } from '../data/axiomComputerScienceSynthesis';

interface ComputerScienceSynthesisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSkill?: (skillId: string) => void;
  currentLevel?: string;
}

export const ComputerScienceSynthesisModal: React.FC<ComputerScienceSynthesisModalProps> = ({
  isOpen,
  onClose,
  onSelectSkill,
  currentLevel = 'Seconde'
}) => {
  const initialIndex = currentLevel.includes('Term') ? 2 : currentLevel.includes('1') ? 1 : 0;
  const [selectedLevelIdx, setSelectedLevelIdx] = useState<number>(initialIndex);

  if (!isOpen) return null;

  const currentProgression = CS_PROGRESSION_DATA[selectedLevelIdx];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white text-2xl shadow-inner border border-white/20">
              💻
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/30 text-teal-200 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Curriculum Officiel Gabon • De la 2nde à la Terminale
              </div>
              <h2 className="font-heading font-black text-xl sm:text-2xl tracking-tight text-white">
                Progression Informatique & Algorithmique Python
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

        {/* Level Tabs */}
        <div className="px-6 pt-4 pb-2 border-b border-slate-100 flex items-center gap-2 bg-slate-50/70 shrink-0 overflow-x-auto">
          {CS_PROGRESSION_DATA.map((prog, idx) => {
            const isSelected = selectedLevelIdx === idx;
            return (
              <button
                key={prog.level}
                onClick={() => setSelectedLevelIdx(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{prog.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Level presentation card */}
          <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-teal-900 font-black text-base">
                <span>{currentProgression.badge}</span>
              </div>
              <p className="text-xs font-semibold text-teal-800">
                {currentProgression.theme}
              </p>
              <p className="text-xs text-slate-600">
                {currentProgression.description}
              </p>
            </div>
            <div className="shrink-0 px-3 py-1.5 rounded-xl bg-white border border-teal-200 text-[11px] font-extrabold text-teal-800">
              4 Modules Clés
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentProgression.modules.map((mod, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-teal-300 transition-all shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-teal-100 text-teal-800 font-black text-xs">
                      Module {idx + 1}
                    </span>
                    <h3 className="font-heading font-black text-sm text-slate-900 flex-1 ml-2">
                      {mod.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Code snippet */}
                  <div className="p-3 rounded-xl bg-slate-900 text-emerald-300 font-mono text-[11px] leading-snug overflow-x-auto shadow-inner border border-slate-800">
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-emerald-400" />
                        Code Python
                      </span>
                    </div>
                    <pre className="whitespace-pre">{mod.syntaxExample}</pre>
                  </div>

                  {/* Math application */}
                  <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 flex items-start gap-2">
                    <Compass className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[11px] text-blue-800">Application mathématique : </span>
                      <span className="text-[11px] text-slate-700">{mod.mathApplication}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-end">
                  {onSelectSkill && (
                    <button
                      onClick={() => {
                        onSelectSkill(mod.skillId);
                        onClose();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline cursor-pointer"
                    >
                      <span>Pratiquer ce module</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs shrink-0">
          <span className="text-slate-500 font-medium">
            Progression Python conforme aux programmes officiels gabonais
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            Fermer le guide
          </button>
        </div>
      </div>
    </div>
  );
};
