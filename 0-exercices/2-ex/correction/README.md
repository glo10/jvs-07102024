# Correction xercice 2

## Modifications par rapport au code source de l'exercice 1

- Séparation exécution et structure de la class SignIn
- Création du dossier [src/js/classes](./src/js/classes/) contenant la classe SignIn responsable de la gestion des messages d'aides et des événements focus, blur, et submit sur les champs du formulaire de connexion
- Refactorisation des fonctions onFocusShowHelpMessage et onBlurRemoveHelpMessage en une seule fonction onToggleHelpMessage