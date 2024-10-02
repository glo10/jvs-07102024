# Exercice 8 : vérifications des données à partir d'un plugin JQuery 

---

## Documentation

- [Documentation pour créer un Plugin JQuery](https://learn.jquery.com/plugins/basic-plugin-creation/)
- [Apprendre les expressions régulières](https://regexlearn.com/fr/learn/regex101)
- [Méthode test() pour vérifier une donnée avec une expression régulière](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

---

## Enoncé

1. Implémentez les scénarios suivant en créant un plugin JQuery permettant de vérifier les données d'un formulaire à partir des expressions régulières fournies ci-après. 

### Quelques précisions supplémentaires

- Dans le formulaire d'inscription fourni dans les templates, chaque champ possède un attribut dataset nommé *data-format* contenant les indications sur le format attendu, c'est ce message que vous devez afficher lorsque le format de la donnée saisi ne correspond pas au format attendu via les expressions régulières.
- Vous devez réagir aux événements *keyup* et *change* pour déclencher la vérification des informations saisies avec votre plugin JQuery vérifiant les formats des données via les expressions régulières.
- Vous dévez également réagir à l'événement *blur* lors de la perte du focus pour supprimer le message sur le format lorsque ce dernier correspond au format attendu.

**PS: pour simplifier l'exercice et gagner du temps, on ignore volontairement la vérification du mot de passe, pays et ville **

## Expressions régulières fournies

- Email : `"/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i"`
- Nom et prénom :  `"/^[a-zA-Z \-]{2,}$/"`
<!-- - Mot de passe : `"/^(?!abcdef|qwerty|azerty|123456)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&\$+\-*\/#~€%^!-_]).{15,36}\$/"`, entre 15 et 36 caractères, ne commençant pas par abcedef, ni querty, ni azerty, ni 123456, contenant au moins un chiffre, une lettre minuscule, une lettre majuscule et un caractère spécial entre &, $, -, etc. -->
- Pour l'age compris entre 18 et 130 (idéalement, il aura fallu demander la date de naissance puis de faire le calcul avec la date du jour, enfin calculer l'age et vérifier qu'il est compris entre 18 et 130, ici on a simplifié).
<!-- - Pays et Ville différent de *-1* (valeur par défaut qui correspond à l'option "Choisissez ...") -->

---

## Scénario 1

En tant qu'utilisateur ;

Lorsque, je souhaite m'inscrire ;

Et que je saisi une information incompatible avec le format attendu ;

Alors, je devrais avoir un message indiquant que le format est incorrecte ;

---

## Scénario 2

En tant qu'utilisateur ;

Lorsque, je souhaite m'inscrire ;

Et que je saisis une information compatible avec le format attendu d'un champ ;

Alors, je ne devrais pas avoir de message d'erreur lié au format du champ ;

---

## Spécifications techniques du plugin

- Pour chaque type de donnée, créez une fonction spécifique. Par exemple, une fonction pour le traitement de l'email, une autre pour le prénom, etc.
- Utilisez les animations JQuery pour faire apparaitre et disparaitre les messages selon les actions de l'utilisateur.

***Si vous n'êtes pas à l'aise avec les expressions régulières (REGEX), lisez et effectuez les 10 premières petits exercices du site [RegexLearn](https://regexlearn.com/fr/learn/regex101) pour apprendre à les manipuler.***

**Côté JavaScript pour comparer une donnée à une REGEX, vous pouvez utiliser la méthode [*test()*](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)**

<!-- 
### Nom et prénom

- Au moins 2 caractères.
- Aucun chiffre.
- Espaces et le tiret du 6 (-) autorisées.
- `< > & $ + * / # ~ € % ^ ! @` interdites.
- Expression régulière 

### Age

- Compris entre 14 et 130.

### Pays et villes

- Au moins 2 caractères.
- Chiffres autorisés.
- Espaces et tirets du 6 (-) autorisés.
- `& $ + * / # ~ € % ^ ! _ @` interdites.

### Email

- Les extensions doivent avoir au moins 2 caractères.
- Les extensions ne doivent pas avoir plus de 10 caractères.

### Mot de passe

- Le mot de passe doit contenir au moins 15 caractères.
- Le mot de passe doit contenir au maximum 36 caractères.
- Le mot de passe doit avoir au moins une lettre minuscule.
- Le mot de passe doit avoir au moins une lettre majuscule.
- Le mot de passe doit avoir au moins un chiffre.
- Le mot de passe doit avoir au moins un des caractères suivants  `& $ + - * / # ~ € % ^ ! - _`. -->