import React, { useState } from 'react';
import { 
  FolderTree, 
  Container, 
  Database, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  FileCode, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const MonorepoSetupView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'architecture' | 'docker' | 'schema' | 'engine' | 'roadmap'>('architecture');

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#2452FF] text-white text-xs font-semibold">
                Phase 1 : Fondations & Monorepo
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-[#16C784] border border-emerald-500/30 text-xs font-semibold">
                Docker + FastAPI + Postgres + React PWA
              </span>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
              Architecture & Setup Monorepo AXIOM ACADEMY
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Moteur pédagogique générique agnostique de la matière. Les 4 systèmes sont strictement découplés pour garantir l'extensibilité de la 6ème à la Terminale C au Gabon.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-xl text-xs">
              <span className="text-slate-400 block">Environnement</span>
              <span className="font-mono text-[#16C784] font-semibold">PostgreSQL 16 • Python 3.11 • Vite 6</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        <button
          id="btn-subtab-arch"
          onClick={() => setActiveSubTab('architecture')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeSubTab === 'architecture'
              ? 'bg-[#2452FF] text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Layers className="w-4 h-4" />
          Les 4 Systèmes Indépendants
        </button>

        <button
          id="btn-subtab-docker"
          onClick={() => setActiveSubTab('docker')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeSubTab === 'docker'
              ? 'bg-[#2452FF] text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Container className="w-4 h-4" />
          Docker Compose & Monorepo Tree
        </button>

        <button
          id="btn-subtab-schema"
          onClick={() => setActiveSubTab('schema')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeSubTab === 'schema'
              ? 'bg-[#2452FF] text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Database className="w-4 h-4" />
          Schéma PostgreSQL (17 Tables)
        </button>

        <button
          id="btn-subtab-engine"
          onClick={() => setActiveSubTab('engine')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeSubTab === 'engine'
              ? 'bg-[#2452FF] text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Cpu className="w-4 h-4" />
          Axiom Progress Engine (Paliers & Tests)
        </button>

        <button
          id="btn-subtab-roadmap"
          onClick={() => setActiveSubTab('roadmap')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeSubTab === 'roadmap'
              ? 'bg-[#2452FF] text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <FolderTree className="w-4 h-4" />
          Feuille de Route (Phases 1 à 6)
        </button>
      </div>

      {/* Subtab Content */}
      {activeSubTab === 'architecture' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1. Contenu */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2452FF] flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-slate-900">Système de Contenu</h3>
                <p className="text-xs text-slate-500">Stockage dynamique en base de données</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Gère les cours, chapitres, fiches de révision, documents PDF et vidéos pédagogiques. Aucune matière ni contenu n'est codé en dur dans le code applicatif.
            </p>
            <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 font-mono text-[11px] text-slate-700">
              <span className="text-blue-600 font-semibold">Tables :</span> SUBJECTS, LEVELS, CURRICULUMS, COURSES
            </div>
          </div>

          {/* 2. Moteur Pédagogique */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#16C784] flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-slate-900">Moteur Pédagogique</h3>
                <p className="text-xs text-slate-500">Graphe de compétences & prérequis (DAG)</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Gère la décomposition arborescente des savoirs, les relations de prérequis et les règles de franchissement de paliers. Indépendant des matières.
            </p>
            <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 font-mono text-[11px] text-slate-700">
              <span className="text-emerald-600 font-semibold">Tables :</span> SKILLS, SKILL_PREREQUISITES, USER_SKILLS
            </div>
          </div>

          {/* 3. Moteur d'Évaluation */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-slate-900">Moteur d'Évaluation</h3>
                <p className="text-xs text-slate-500">Tests, examens & correction multi-types</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Prend en charge QCM, réponse numérique, texte, association et examens minutés (BAC blanc). Validation côté serveur obligatoire pour empêcher toute triche.
            </p>
            <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 font-mono text-[11px] text-slate-700">
              <span className="text-amber-600 font-semibold">Tables :</span> EXERCISES, QUESTIONS, ASSESSMENTS, ATTEMPTS
            </div>
          </div>

          {/* 4. Gamification */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-purple-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-slate-900">Moteur de Gamification</h3>
                <p className="text-xs text-slate-500">XP général & par matière, séries, badges</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Motive l'élève par le renforcement positif sans polluer le calcul de maîtrise. Les événements d'évaluation déclenchent l'attribution asynchrone d'XP et de trophées.
            </p>
            <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 font-mono text-[11px] text-slate-700">
              <span className="text-purple-600 font-semibold">Tables :</span> XP_TRANSACTIONS, BADGES, USER_BADGES
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'docker' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monorepo directory tree */}
          <div className="bg-slate-900 text-slate-200 p-5 rounded-2xl font-mono text-xs shadow-md border border-slate-800">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="text-slate-400 font-sans font-semibold flex items-center gap-2">
                <FolderTree className="w-4 h-4 text-[#2452FF]" />
                Arborescence du Monorepo
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                axiom-academy/
              </span>
            </div>
            <pre className="text-slate-300 overflow-x-auto leading-relaxed">
{`axiom-academy/
├── docker-compose.yml       # Orchestration Postgres + FastAPI + React
├── docs/
│   ├── ARCHITECTURE.md      # Séparation des 4 systèmes & rôles
│   ├── DATABASE_SCHEMA.md   # Schéma relationnel complet
│   ├── MASTERY_ENGINE.md    # Algorithme pondéré du mastery_score
│   └── SETUP_DOCKER.md      # Commandes de démarrage
├── backend/                 # Python 3.11 + FastAPI
│   ├── Dockerfile
│   ├── requirements.txt     # FastAPI, SQLAlchemy 2, Alembic, asyncpg
│   ├── app/
│   │   ├── main.py          # Point d'entrée & middlewares CORS
│   │   ├── core/            # config.py, security.py (JWT)
│   │   ├── models/          # entities.py (Schéma SQL complet)
│   │   ├── schemas/         # Pydantic v2 DTOs
│   │   ├── services/        # progress_engine.py, xp_engine.py
│   │   └── api/             # Routers v1 découplés
│   ├── alembic/             # Migrations de schéma
│   └── tests/               # test_progress_engine.py
└── frontend/                # React 19 + Vite 6 PWA
    ├── Dockerfile.frontend
    ├── public/
    │   └── manifest.json    # Config PWA mobile
    └── src/
        ├── components/      # Header, SkillTree, ExerciseSession...
        ├── data/            # Modèles de compétences génériques
        └── App.tsx`}
            </pre>
          </div>

          {/* docker-compose preview */}
          <div className="bg-slate-900 text-slate-200 p-5 rounded-2xl font-mono text-xs shadow-md border border-slate-800">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="text-slate-400 font-sans font-semibold flex items-center gap-2">
                <Container className="w-4 h-4 text-[#16C784]" />
                docker-compose.yml (Services Déclarés)
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-[#16C784] border border-emerald-800">
                Prêt à l'emploi
              </span>
            </div>
            <div className="space-y-3">
              <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60">
                <div className="text-blue-400 font-bold mb-1 flex items-center justify-between">
                  <span>1. Service `db` (PostgreSQL 16)</span>
                  <span className="text-slate-400 text-[10px]">Port 5432</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Conteneur `postgres:16-alpine` avec persistance `postgres_data` et healthcheck automatisé.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60">
                <div className="text-emerald-400 font-bold mb-1 flex items-center justify-between">
                  <span>2. Service `backend` (FastAPI + Uvicorn)</span>
                  <span className="text-slate-400 text-[10px]">Port 8000</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Python 3.11, rechargement à chaud `--reload`, connexions asynchrones `asyncpg`, documentation interactive Swagger `/docs`.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60">
                <div className="text-amber-400 font-bold mb-1 flex items-center justify-between">
                  <span>3. Service `frontend` (React PWA + Vite)</span>
                  <span className="text-slate-400 text-[10px]">Port 3000</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Node 20, Tailwind CSS, support mobile PWA avec `manifest.json`.
                </p>
              </div>

              <div className="mt-4 p-2 bg-blue-950/60 border border-blue-800/60 rounded-xl text-blue-300 text-[11px]">
                💡 Commande de lancement : <code className="text-white font-bold">docker compose up --build -d</code>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'schema' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Schéma Relationnel PostgreSQL — 17 Entités Normalisées
              </h3>
              <p className="text-xs text-slate-500">
                Entièrement conforme au cahier des charges AXIOM ACADEMY (Alembic prêt)
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#2452FF] text-xs font-semibold border border-blue-200">
              Pas de code spécifique à une matière
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: 'USERS', desc: 'id, name, email, password_hash, role, created_at' },
              { name: 'SUBJECTS', desc: 'id, name (Maths, PC, SVT, Anglais, etc.)' },
              { name: 'LEVELS', desc: 'id, name (Terminale C, 3ème), school_level' },
              { name: 'CURRICULUMS', desc: 'id, country (Gabon), school_level, class_name' },
              { name: 'COURSES', desc: 'id, subject_id, level_id, title, content, pdf_url, video_url' },
              { name: 'SKILLS', desc: 'id, subject_id, level_id, name, description, difficulty (1-5)' },
              { name: 'SKILL_PREREQUISITES', desc: 'skill_id, prerequisite_id (Graphe orienté)' },
              { name: 'EXERCISES', desc: 'id, skill_id, difficulty, type, question' },
              { name: 'QUESTIONS', desc: 'id, exercise_id, question, answer, explanation' },
              { name: 'ASSESSMENTS', desc: 'id, title, type, duration (min)' },
              { name: 'ATTEMPTS', desc: 'id, user_id, assessment_id, score, date' },
              { name: 'USER_SKILLS', desc: 'user_id, skill_id, mastery_score (0-100), last_evaluation' },
              { name: 'XP_TRANSACTIONS', desc: 'id, user_id, amount, reason, date' },
              { name: 'BADGES', desc: 'id, name, condition, icon_url' },
              { name: 'USER_BADGES', desc: 'user_id, badge_id, unlocked_at' },
              { name: 'CLASSES', desc: 'id, name, level_id, teacher_id' },
              { name: 'CLASS_STUDENTS', desc: 'class_id, user_id' },
            ].map((tbl, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-mono text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#2452FF]" />
                  {tbl.name}
                </div>
                <p className="text-[11px] font-mono text-slate-500 leading-tight">
                  {tbl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'engine' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              Axiom Progress Engine — Paliers & Pondération
            </h3>
            <p className="text-xs text-slate-500">
              Le score de maîtrise n'est jamais basé sur la simple lecture de cours, mais sur les performances effectives.
            </p>
          </div>

          {/* 6 official mastery tiers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              { tier: 'Non commencée', range: '0 %', color: 'bg-slate-100 text-slate-700 border-slate-300', dot: 'bg-slate-400' },
              { tier: 'Découverte', range: '1 – 39 %', color: 'bg-amber-50 text-amber-800 border-amber-300', dot: 'bg-amber-500' },
              { tier: 'En cours', range: '40 – 59 %', color: 'bg-blue-50 text-blue-800 border-blue-300', dot: 'bg-blue-500' },
              { tier: 'Acquise', range: '60 – 79 %', color: 'bg-emerald-50 text-emerald-800 border-emerald-300', dot: 'bg-emerald-500' },
              { tier: 'Maîtrisée', range: '80 – 94 %', color: 'bg-indigo-50 text-indigo-800 border-indigo-300', dot: 'bg-indigo-500' },
              { tier: 'Excellence', range: '95 – 100 %', color: 'bg-yellow-100 text-yellow-900 border-yellow-400', dot: 'bg-yellow-500' },
            ].map((p, i) => (
              <div key={i} className={`p-3 rounded-xl border text-center ${p.color}`}>
                <div className={`w-2.5 h-2.5 rounded-full mx-auto mb-1 ${p.dot}`} />
                <span className="text-xs font-bold block">{p.range}</span>
                <span className="text-[11px] font-medium">{p.tier}</span>
              </div>
            ))}
          </div>

          {/* Mathematical formulation */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#2452FF]" />
              Formule de Calcul Côté Serveur (Python / Service backend)
            </h4>
            <p className="leading-relaxed">
              Pour chaque compétence $s$, le score est la moyenne pondérée de toutes les évaluations $k$ :
            </p>
            <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-[11px] text-slate-800 overflow-x-auto">
              MasteryScore(s) = ( Σ [ Score(k) × Weight(type) × DifficultyFactor(d) × RecencyDecay(Δt) ] ) / ( Σ Weights )
            </div>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Weight(type)</strong> : 0.20 pour exercice unitaire, 0.35 pour quiz d'étape, 0.45 pour examen sommateur.</li>
              <li><strong>DifficultyFactor</strong> : 0.6 + 0.1 × difficulté (diff 5 a plus d'impact que diff 1).</li>
              <li><strong>RecencyDecay</strong> : Demi-vie de 30 jours sans pratique pour inciter à la réactivation mnésique.</li>
              <li><strong>Sécurité</strong> : Aucun client front-end ne peut envoyer directement un score. Seul le résultat d'une soumission validée écrit dans la base.</li>
            </ul>
          </div>
        </div>
      )}

      {activeSubTab === 'roadmap' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="font-heading text-lg font-bold text-slate-900">
            Feuille de Route Structurée par Phases
          </h3>

          <div className="space-y-3">
            {[
              {
                phase: 'Phase 1 — Fondations',
                status: 'En cours de validation',
                badge: 'Actuel',
                badgeColor: 'bg-[#2452FF] text-white',
                items: [
                  'Setup du monorepo (frontend React PWA + backend FastAPI)',
                  'Docker Compose (Postgres + FastAPI + Vite)',
                  'Schéma relationnel 17 tables (SQLAlchemy + Alembic)',
                  'Authentification JWT et RBAC (Élève, Prof, Admin, Parent V2)'
                ]
              },
              {
                phase: 'Phase 2 — Moteur de Contenu',
                status: 'À venir',
                badge: 'Phase 2',
                badgeColor: 'bg-slate-100 text-slate-700',
                items: [
                  'CRUD générique Matières, Niveaux, Cours, Compétences et Prérequis',
                  'Brancher l\'accueil et la bibliothèque de cours',
                  'Affichage dynamique des programmes scolaires gabonais'
                ]
              },
              {
                phase: 'Phase 3 — Moteur d\'Évaluation',
                status: 'À venir',
                badge: 'Phase 3',
                badgeColor: 'bg-slate-100 text-slate-700',
                items: [
                  'Exercices multi-types (QCM, réponse numérique, association)',
                  'Session d\'évaluation en temps réel',
                  'Calcul du mastery_score par Axiom Progress Engine'
                ]
              },
              {
                phase: 'Phase 4 — Gamification',
                status: 'À venir',
                badge: 'Phase 4',
                badgeColor: 'bg-slate-100 text-slate-700',
                items: [
                  'Système XP global et par matière',
                  'Attribution automatique des badges et trophées',
                  'Missions journalières et hebdomadaires'
                ]
              },
              {
                phase: 'Phase 5 — Examens & Parcours',
                status: 'À venir',
                badge: 'Phase 5',
                badgeColor: 'bg-slate-100 text-slate-700',
                items: [
                  'Simulateur d\'épreuves officielles (BAC blanc, BEPC blanc)',
                  'Graphe interactif façon Duolingo avec statuts dynamiques',
                  'Parcours personnalisé selon les lacunes de l\'élève'
                ]
              },
              {
                phase: 'Phase 6 — Tuteur IA',
                status: 'Prévu V2',
                badge: 'Phase 6',
                badgeColor: 'bg-purple-100 text-purple-700',
                items: [
                  'Endpoint transversal `/ai/tutor` avec mémoire pédagogique',
                  'Explications personnalisées selon les erreurs passées'
                ]
              }
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-slate-900 text-sm">
                    {p.phase}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {p.items.map((it, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16C784] shrink-0" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
