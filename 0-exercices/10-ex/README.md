# Exercice 10 : gestion des événements

1. Créez un programme `Node` qui émet un événement avec un objet qui contient 2 nombres. L'événement est émit après 5 sécondes en utilisant [setTimeout()](https://developer.mozilla.org/fr/docs/Web/API/Window/setTimeout)
2. Toujours dans le même programme ajoutez un ***listener*** qui écoute et réagit à cet événement pour effectuer 4 opérations mathématiques :
- Le premier fait la somme des 2 nombres et affiche le résultat
- Le deuxième une multiplication
- Le troisième une division
- Le dernier une soustraction

***PS: Chaque calcul (addition, multiplication, etc.) correspond à une fonction crée dans un fichier qui exportent les 4 fonctions.
Dans le programme principale, il faut les importer pour les utiliser*** 