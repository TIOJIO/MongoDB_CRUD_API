# MongoDB_CRUD_API
crud API with node.js , express and MongoDB . deploy with Heroku

## init package.json

npm init -y

## install packages

npm install express mongoose cors body-parser dotenv nodemon

<!-- 
    1. express
    Description : Framework minimaliste et flexible pour créer des applications web et des API en Node.js.
    Utilité : Simplifie la gestion des routes, des requêtes HTTP, et des middlewares.

    2. mongoose
    Description : Bibliothèque permettant d'interagir avec MongoDB en utilisant des modèles définis par schéma.
    Utilité : Facilite la connexion à une base de données MongoDB et la gestion des documents.

    3. cors
    Description : Middleware permettant de gérer les Cross-Origin Resource Sharing (CORS).
    Utilité : Autorise ou bloque les requêtes HTTP provenant de domaines différents de celui du serveur backend.

    4. body-parser
    Description : Middleware pour traiter les données entrantes dans les requêtes HTTP.
    Utilité : Analyse les bodies des requêtes en formats JSON ou URL-encoded, ce qui est utile pour récupérer les données envoyées depuis le frontend.
    ⚠️ Note : À partir de Express 4.16.0, la fonctionnalité de body-parser est directement incluse dans Express (via express.json() et express.urlencoded()).

    5. dotenv
    Description : Bibliothèque permettant de charger des variables d'environnement depuis un fichier .env.
    Utilité : Gérer des données sensibles comme les clés API, les mots de passe, ou les chaînes de connexion à la base de données, sans les exposer dans le code source.
    
    6. nodemon
    Description : Outil qui surveille les fichiers de votre projet et redémarre automatiquement le serveur lorsqu’un changement est détecté.
    Utilité : Accélère le développement en évitant de relancer manuellement le serveur à chaque modification.
-->