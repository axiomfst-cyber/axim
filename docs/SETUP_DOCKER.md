# Guide de Démarrage — Monorepo Docker Compose

Ce guide explique comment lancer AXIOM ACADEMY localement avec Docker Compose.

---

## 1. Prérequis
- Docker Engine >= 24.0
- Docker Compose >= 2.20

---

## 2. Variables d'Environnement
Créez un fichier `.env` à la racine :

```env
POSTGRES_USER=axiom_user
POSTGRES_PASSWORD=axiom_secret_password
POSTGRES_DB=axiom_db
SECRET_KEY=cle_secrete_jwt_super_robuste_pour_la_production
VITE_API_URL=http://localhost:8000/api/v1
```

---

## 3. Commandes de Démarrage

```bash
# 1. Construire et lancer tous les conteneurs (DB, FastAPI, Frontend React)
docker compose up --build -d

# 2. Vérifier les logs
docker compose logs -f

# 3. Appliquer les migrations de base de données (Alembic)
docker compose exec backend alembic upgrade head

# 4. Lancer la suite de tests unitaires (moteur de maîtrise, XP, badges)
docker compose exec backend pytest -v
```

---

## 4. URLs d'Accès
- **Frontend React PWA** : [http://localhost:3000](http://localhost:3000)
- **API FastAPI Swagger UI** : [http://localhost:8000/docs](http://localhost:8000/docs)
- **Base de Données PostgreSQL** : `localhost:5432` (`axiom_db`)
