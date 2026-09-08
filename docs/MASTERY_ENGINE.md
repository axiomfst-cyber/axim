# Axiom Progress Engine — Algorithme de Calcul du Mastery Score

Le `mastery_score` (compris entre 0 et 100 %) ne mesure pas un simple pourcentage de cours consultés, mais évalue la capacité réelle de l'élève à résoudre des problèmes liés à une compétence.

---

## 1. Paliers de Maîtrise Officiels

| Intervalle de Score | Palier Officiel | Signification Pédagogique | Statut Graphe |
| :--- | :--- | :--- | :--- |
| **0 %** | **Non commencée** | Aucune activité validée sur cette compétence. | Verrouillé / Disponible |
| **1 – 39 %** | **Découverte** | Premiers exercices abordés, bases encore fragiles. | En cours d'apprentissage |
| **40 – 59 %** | **En cours** | Notions comprises mais erreurs récurrentes. | En cours d'acquisition |
| **60 – 79 %** | **Acquise** | Compétence opérationnelle (seuil de validation des prérequis). | Acquise (débloque prérequis suivants) |
| **80 – 94 %** | **Maîtrisée** | Grande aisance, résout des exercices de difficulté 4-5. | Maîtrisée |
| **95 – 100 %** | **Excellence** | Maîtrise parfaite, réussites répétées en situation d'examen. | Excellence (Badge d'or) |

---

## 2. Formule de Pondération

Le calcul prend en compte :
1. **La nature de l'évaluation ($w_{type}$)** :
   - Exercice formatif unitaire : poids $0.2$
   - Quiz d'étape : poids $0.35$
   - Examen sommateur / BAC Blanc : poids $0.45$
2. **La difficulté de l'exercice ($D \in [1, 5]$)** :
   - Facteur multiplicateur : $F_{diff} = 0.6 + (0.1 \times D)$
3. **La récence de la performance ($R$)** :
   - Loi de décroissance exponentielle (demi-vie de 30 jours sans pratique) :
   $$R(t) = e^{-\lambda \Delta t} \quad \text{avec } \lambda = \frac{\ln(2)}{30}$$
4. **La cohérence temporelle (streak de succès)** :
   - Bonus de rétention si 3 réussites consécutives sans échec.
