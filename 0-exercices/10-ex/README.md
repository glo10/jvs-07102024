# Exercice 10 : gestion des événements

1. Créez un programme `Node` qui émet un événement à partir d'un objet de type EventEmitter. L'émission de l'événement s'effectue en envoyant 2 nombres et au bout de 5 sécondes (utilisation [setTimeout()](https://developer.mozilla.org/fr/docs/Web/API/Window/setTimeout))
2. Toujours dans le même programme et avec le même objet, ajoutez un ***listener*** qui écoute et réagit à cet événement pour effectuer 4 opérations mathématiques :
- Le premier fait la somme des 2 nombres et affiche le résultat
- Le deuxième une multiplication
- Le troisième une division
- Le dernier une soustraction

***PS: Chaque calcul (addition, multiplication, etc.) correspond à une fonction créee dans un fichier externe au programme principal.

Dans le programme principale, il faut donc les importer pour les utiliser*** 