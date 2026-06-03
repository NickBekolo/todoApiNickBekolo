
# Todo API - Node.js + PostgreSQL + Docker

## 📌 Description

API REST de gestion de tâches (Todo List) développée avec :

- Node.js
- Express.js
- PostgreSQL
- Sequelize (ORM)
- Docker & Docker Compose

Ce projet a été réalisé dans un contexte DevOps afin de mettre en pratique :

- Création d'une API REST
- Conteneurisation avec Docker
- Orchestration multi-services avec Docker Compose
- Utilisation d’une base de données PostgreSQL
- Préparation CI/CD

---

## 🚀 Architecture du projet

```

todoApiNickBekolo/
├── src/
│   ├── routes/
│   │   └── tasks.js
│   ├── models/
│   │   └── task.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── database.js
│   └── app.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

````

---

## ⚙️ Technologies utilisées

- Node.js 18
- Express.js
- PostgreSQL 17
- Sequelize ORM
- Docker
- Docker Compose

---

## 🧱 Modèle de données (Task)

```json
{
  "id": 1,
  "title": "string",
  "description": "string",
  "status": "todo | done",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
````

---

## 🐳 Lancer le projet avec Docker (RECOMMANDÉ)

### 1. Build et démarrage

```bash
docker compose up --build
```

### 2. Vérifier les conteneurs

```bash
docker ps
```

Vous devez voir :

* todo-api
* postgres

### 3. Stopper les conteneurs

```bash
docker compose down
```

---

## 💻 Lancer le projet en local (sans Docker)

### 1. Installer les dépendances

```bash
npm install
```

### 2. Créer le fichier `.env`

```env
PORT=8080

DB_HOST=localhost
DB_PORT=5432
DB_NAME=todo_db
DB_USER=postgres
DB_PASSWORD=postgres
```

### 3. Lancer PostgreSQL localement

Via Docker ou installation locale.

### 4. Démarrer l’API

```bash
npm start
```

---

## 🌐 API Endpoints

### Health check

```http
GET /health
```

### Créer une tâche

```http
POST /tasks
```

### Lister les tâches

```http
GET /tasks
```

### Récupérer une tâche

```http
GET /tasks/:id
```

### Modifier une tâche

```http
PUT /tasks/:id
```

### Supprimer une tâche

```http
DELETE /tasks/:id
```

---

## 🧪 Tests API (curl)

### Créer une tâche

```bash
curl -X POST http://localhost:8080/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Test Docker","description":"API test","status":"todo"}'
```

### Lister les tâches

```bash
curl http://localhost:8080/tasks
```

### Récupérer une tâche

```bash
curl http://localhost:8080/tasks/<TASK_ID>
```

### Modifier une tâche

```bash
curl -X PUT http://localhost:8080/tasks/<TASK_ID> \
-H "Content-Type: application/json" \
-d '{"status":"done"}'
```

### Supprimer une tâche

```bash
curl -X DELETE http://localhost:8080/tasks/<TASK_ID>
```

---

## 🐘 Base de données PostgreSQL

### Accéder au conteneur

```bash
docker exec -it postgres psql -U postgres -d todo_db
```

### Lister les tables

```sql
\dt
```

### Voir les données

```sql
SELECT * FROM "Tasks";
```

---

## 🐳 Docker Compose services

* API : port `8080`
* PostgreSQL : port `5432`
* Base : `todo_db`

---

## 📦 Build image Docker

```bash
docker build -t todo-api .
```

---

## 🔥 Points forts

* API REST complète (CRUD)
* PostgreSQL persistant
* Architecture propre
* Docker + Docker Compose
* Prêt pour CI/CD

---

## 👨‍💻 Auteur

Nick Bekolo
GitHub : [https://github.com/NickBekolo](https://github.com/NickBekolo)



