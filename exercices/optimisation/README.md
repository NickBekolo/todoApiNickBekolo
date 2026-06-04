# Exercice Pratique 5 - Challenge d'optimisation

## Techniques appliquées
1. Image Alpine au lieu de node:18
2. Multi-stage build
3. .dockerignore
4. Ordre optimal des COPY
5. npm ci --only=production
6. Healthcheck

## Résultats
| Image | Taille |
|-------|--------|
| todo-v1 (non optimisé) | 1.57GB |
| todo-v2 (optimisé) | 194MB |
| **Gain** | **88%** |
