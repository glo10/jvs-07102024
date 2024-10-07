# Prototype

- Les deux scripts sont identitiques, l'un utilise les [prototypes](./with-prototype.js) en JS et l'autre une [notation simplifiée](dom-extends.js) orientée objet.

- [Modifier une propriété d'une classe native déclenche une exception](./error-from-properties.js) : via les prototypes, l'utilisation des fonction call et apply il est possible de réecrire une fonction de base d'un objet natif JS
- Par contre, modifer une méthode native d'un objet ne pose aucun problème. cf. [ce script](./tranform-native-method.js)

