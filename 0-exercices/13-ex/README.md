# Exercice 13 : persistance dans une base de données

---

## Modalités

- Effectuez vos tests via l'extension Visual Studio Code **`ThunderClient`** dans un premier, le lien entre le front et le back-end pourra être effectué plus tard.
- Utilisez l'extension **`SQLite Viewer`** d'`alexcvzz` pour visualiser votre base de données (schéma et données).
- Le code pour la mise en place de la base de données vous ai fourni, il vous reste uniquement à gérer le hachage avec Bcrypt

---

## Enoncé

1. Gérez l'inscription d'un utilisateur dans une base de données *SQLite 3* en hachant le mot de passe avec *Bcrypt*.

---

## Instructions pour le script de la base de données

1. Installez *sqlite3* avec la commande `npm i sqlite3` : permet d'avoir une base de données SQL léger dans un fichier et donc embarqué dans l'application.
2. Récuperez le code de l'implémentation de la base de données depuis le dossier [db.zip](./db.zip) dans le repertoire de votre exercice ainsi que les [requêtes de la base de données](./db/user-table-requests.mjs) dont vous aurez besoin pour cette exercice et le suivant.
3. Créez un fichier avec une extension `.sqlite`, ce fichier est notre future base de données pour stocker les utilisateurs.
