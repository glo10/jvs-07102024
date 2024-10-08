# Exercice 4 : ajout pays et villes de manière asynchrone sur la page d'inscription

1. Depuis la page d'inscription (sign-up.html), chargez les pays dans la partie du formulaire dédiée (champ de type *select*) en faisant un appel asynchrone vers le fichier data/countries.json et ajoutez les pays récupérées dans l'élément HTML *select* dédié.
2. Toujours depuis la page d'inscription, lorsqu'un pays est séléctionné, récupérez les villes de ce pays depuis le fichier data/cities en faisant un appel asynchrone et ajoutez les villes récupérées dans le *select* associé.


PS: certains pays ne possèdent pas de villes, exemple Andore.

---

### Spécifications techniques pour les pays et les villes

- Vous pouvez récupérez les pays depuis le fichier ***src/data/countries.json*** ou depuis l'API *Country State City API* [https://countrystatecity.in/docs/api/all-countries/](https://countrystatecity.in/docs/api/all-countries/) en vous appuyant sur sa [documentation](https://countrystatecity.in/docs/).
- Pareil pour les villes, fichier ***src/data/cities.json*** ou depuis l'API *Country State City* [https://countrystatecity.in/docs/api/cities-by-country/](https://countrystatecity.in/docs/api/cities-by-country/).
- Le choix du pays déclenche la récupération de toutes les villes de ce pays.
- Chaque ville présente dans la sélection doit avoir les attributs HTML suivants correspondants aux informations récupérées :
 - value = nom de la ville ;
 - data-latitude = coordonnée de la latitude de la ville;
 - data-longitude = coordonnée de la longitude de la ville;


PS : les informations sur la latitude et la longitude serviront pour récupérer les données météorologique de la ville séléctionné par l'utilisateur
