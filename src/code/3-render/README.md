# Le render en react

Par défaut un composant est rendu, c'est-à-dire que toute sa fonction de rendu (le composant si c'est un composant fonctionnel) est éxécutée pour générer l'HTML pour le navigateur.

Une fois généré, il faut effectuer un rerendu complet pour changer l'affichage.

En react, on peut déclencher ce re-rendu avec les states. Composés d'une valeur en read-only et d'une callback pour changer sa valeur, les states sont très largement utilisés pour beaucoup d'aspects du dévelopment (affichage dynamique, formulaires).

On peut également attacher des comportements additionnel (appelés effets) aux rendus en fonction (ou non) des states. Une liste de dépendences est alors déclarée pour lister dans quels cas l'effet sera éxécuté. On les utilise souvent pour récupérer des données à une API au rendu du composant ou déclencher un comportement au changement d'un ou plusieurs states.