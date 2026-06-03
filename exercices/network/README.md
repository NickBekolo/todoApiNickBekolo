# Exercice Guidé 1 - Networks Docker

## Objectif
Créer deux conteneurs qui communiquent via un network personnalisé
et démontrer l'isolation réseau.

## Commandes exécutées

```bash
# Créer le network
docker network create app-network

# Lancer le serveur
docker run -dit --name serveur --network app-network alpine sh
docker exec serveur apk add --no-cache curl

# Lancer le client
docker run -dit --name client --network app-network alpine sh
docker exec client apk add --no-cache curl

# Tester la communication
docker exec client ping -c 3 serveur
# ✅ Résultat : réponses reçues

# Inspecter le network
docker network inspect app-network

# Tester l'isolation
docker network create other-network
docker run -dit --name isole --network other-network alpine sh
docker exec client ping -c 3 isole
# ✅ Résultat : ping: bad address 'isole' => isolation confirmée

# Nettoyage
docker stop serveur client isole
docker rm serveur client isole
docker network rm app-network other-network
```

## Résultat
- Les conteneurs sur le même network se voient par leur nom (DNS automatique)
- Les conteneurs sur des networks différents ne peuvent pas communiquer
