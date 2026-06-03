# Exercice Guidé 2 - Multi-networks dans docker-compose

## Objectif
Créer une architecture avec plusieurs networks pour isoler les services.

## Architecture
## Résultat
- La BDD est isolée du frontend
- L'API fait le pont entre les deux networks
- Sécurité renforcée : la BDD n'est pas accessible depuis nginx
