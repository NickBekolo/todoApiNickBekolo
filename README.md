# Todo API - Nick Bekolo

## Description

Todo API est une API REST développée avec Node.js et Express permettant de gérer une liste de tâches (Todo List).

Le projet a été réalisé dans le cadre du cours DevOps afin de mettre en pratique :

* Le développement d'une API REST
* La conteneurisation avec Docker
* L'utilisation de Git et GitHub
* Les bonnes pratiques de préparation à la CI/CD

---

## Fonctionnalités

### CRUD des tâches

L'API permet :

* Créer une tâche
* Lister toutes les tâches
* Consulter une tâche
* Modifier une tâche
* Supprimer une tâche

### Structure d'une tâche

```json
{
  "id": "uuid",
  "description": "Faire les exercices Docker",
  "state": "todo"
}
```

---

## Technologies utilisées

* Node.js
* Express.js
* Docker
* Git / GitHub

---

## Installation

### Cloner le projet

```bash
git clone https://github.com/NickBekolo/todoApiNickBekolo.git
cd todoApiNickBekolo
```

### Installer les dépendances

```bash
npm install
```

---

## Lancement en local

```bash
npm start
```

L'API est disponible sur :

```text
http://localhost:8080
```

---

## Vérification de l'état du serveur

### Health Check

```http
GET /health
```

Exemple de réponse :

```json
{
  "status": "UP"
}
```

---

## Endpoints API

### Créer une tâche

```http
POST /tasks
```

Body :

```json
{
  "description": "Apprendre Docker",
  "state": "todo"
}
```

---

### Récupérer toutes les tâches

```http
GET /tasks
```

---

### Récupérer une tâche

```http
GET /tasks/:id
```

---

### Modifier une tâche

```http
PUT /tasks/:id
```

Body :

```json
{
  "description": "Apprendre Docker et CI/CD",
  "state": "done"
}
```

---

### Supprimer une tâche

```http
DELETE /tasks/:id
```

---

## Docker

### Construire l'image

```bash
docker build -t todo-api .
```

### Lancer le conteneur

```bash
docker run -p 8080:8080 todo-api
```

### Vérifier les conteneurs actifs

```bash
docker ps
```

### Arrêter un conteneur

```bash
docker stop NOM_DU_CONTENEUR
```

---

## Docker Compose

### Démarrer les services

```bash
docker compose up --build
```

### Arrêter les services

```bash
docker compose down
```

---

## Structure du projet

```text
todoApiNickBekolo/
├── src/
│   ├── routes/
│   │   └── tasks.js
│   ├── models/
│   │   └── task.js
│   ├── middleware/
│   │   └── errorHandler.js
│   └── app.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Gestion de projet

Projet réalisé en mode Agile/Kanban.

### Backlog initial

* Création de l'API Node.js
* Création du CRUD des tâches
* Dockerisation du projet
* Documentation du projet
* Préparation à la CI/CD

---

## Auteur

Nick Bekolo

GitHub : https://github.com/NickBekolo
