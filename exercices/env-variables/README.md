# Exercice Guidé 2 - Fichier .env

## Objectif
Séparer les secrets dans un fichier .env
et ne jamais les commiter sur GitHub.

## Fichiers
- `.env` : secrets réels (dans .gitignore, jamais commité)
- `.env.example` : template pour l'équipe (commité)
- `.gitignore` : exclut .env du repo

## Utilisation

### 1. Cloner le repo
```bash
git clone ...
```

### 2. Copier le template
```bash
cp .env.example .env
```

### 3. Remplir ses valeurs dans .env

### 4. Lancer
```bash
docker compose up
```

## Résultat
- Les secrets ne sont jamais sur GitHub
- Chaque développeur a ses propres valeurs
- Le template .env.example guide l'équipe
