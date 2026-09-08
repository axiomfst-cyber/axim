# Architecture du Projet AXIOM ACADEMY

AXIOM ACADEMY est une plateforme de maîtrise de compétences scolaires adaptée aux programmes gabonais (Collège à Terminale C).
Elle repose sur un **moteur pédagogique générique et réutilisable** qui ne connaît aucune matière en particulier.

---

## 1. Le Pipeline Pédagogique Générique

Quelle que soit la matière (Mathématiques, Physique-Chimie, Français, Anglais, Mandarin, Histoire-Géo, SVT, Économie, Philosophie, Informatique) :

```
Matière (SUBJECT)
   ↓
Compétences (SKILLS)
   ↓
Prérequis (SKILL_PREREQUISITES) [Graphe orienté acyclique]
   ↓
Ressources (COURSES & DOCUMENTS)
   ↓
Exercices (EXERCISES & QUESTIONS)
   ↓
Évaluations & Tests (ASSESSMENTS)
   ↓
Maîtrise pondérée (USER_SKILLS & mastery_score)
   ↓
Progression & Gamification (XP, Niveaux, Badges, Parcours)
```

Aucune règle métier n'est écrite en dur pour une matière donnée.

---

## 2. Les 4 Systèmes Indépendants

Pour garantir la maintenabilité et l'évolutivité, le système est découpé en 4 couches strictement découplées :

| Système | Responsabilité | Entités Clés | Règles d'isolation |
| :--- | :--- | :--- | :--- |
| **1. Contenu** | Cours, leçons, ressources documentaires, PDF, vidéos | `COURSES`, `SUBJECTS`, `LEVELS`, `CURRICULUMS` | Stocké en base de données, jamais en dur dans le code. |
| **2. Moteur Pédagogique** | Graphe de compétences, arborescence des prérequis, état des nœuds de compétences | `SKILLS`, `SKILL_PREREQUISITES`, `USER_SKILLS` | Calcule les déblocages de compétences. Ne dépend pas de la gamification. |
| **3. Moteur d'Évaluation** | Sessions d'exercices, tests sommatifs, examens types (BAC blanc), correction, notation brute | `EXERCISES`, `QUESTIONS`, `ASSESSMENTS`, `ATTEMPTS` | Prend en charge QCM, réponse numérique, textuelle, vrai/faux, association. |
| **4. Gamification** | XP global & par matière, streaks journalières, badges, missions, niveaux | `XP_TRANSACTIONS`, `BADGES`, `USER_BADGES` | Écoute les événements du moteur d'évaluation via service dédié. |

---

## 3. Rôles et Modèle de Sécurité

### Rôles
1. **Élève (`student`)** : Consultation des cours, passage des exercices et évaluations, suivi de sa propre progression et badges.
2. **Enseignant (`teacher`)** : Création de cours/exercices/évaluations, gestion de ses classes, tableau de bord des élèves.
3. **Administrateur (`admin`)** : Gestion globale des utilisateurs, matières, curriculums officiels, modération et statistiques.
4. **Parent (V2) (`parent`)** : Lecture seule de la progression de son enfant.

### Sécurité du score de maîtrise (`mastery_score`)
> **Règle absolue :** Un élève ne peut JAMAIS modifier directement son `mastery_score`, son XP ou ses badges.
> - Toute mise à jour de score découle obligatoirement d'une requête `POST /api/v1/assessments/submit` ou `POST /api/v1/exercises/submit` validée par le backend.
> - Le backend vérifie l'authenticité de la tentative (`ATTEMPTS`), calcule la pondération et écrit dans `USER_SKILLS`.
