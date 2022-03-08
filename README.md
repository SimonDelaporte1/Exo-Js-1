# Petit exo personnel ...
.... pour manipuler un peu de JS Vanilla avant de passer à l'apprentissage de REACT

Dans cet exercice je veux créer une page qui soit responsive, et dont le contenu soit modifiable dynamiquement.

Pour la partie responsive je vais utiliser Bootstrap 5

Je vais créer un tableau de données en dur dans le code, qui listera des produits (vêtements).
Cette liste de produits sera affichée et mise à jour dynamiquement en fonction des filtres (couleur, taille et stock) choisis par l'utilisateur

Les produits seront constitués de plusieurs critères :
<ol>
  <li>Un titre</li>
  <li>Une image</li>
  <li>Une description</li>
  <li>Stock restant</li>
  <li>Couleur</li>
  <li>Taille</li>
</ol> 
<br>

<details>
  <summary>
    Liste des produits
  </summary>

```js
[
        {
          name: 'Pantalon',
          picture: 'https://vstreet.eu/375-large_default/pantalon-moto-vstreet-chino-beige.jpg',
          description: 'Un pantalon est un vêtement porté sur la partie inférieure du corps, les deux jambes étant couvertes séparément.',
          stock: 5,
          color: 'black',
          size: 'medium'
        },
        {
          name: 'Veste',
          picture: 'https://media.ccvmode.com/125711-large_new_default/premium-by-jack-jones-veste-homme-bleu.jpg',
          description: 'Une veste est un vêtement à manches longues couvrant la partie supérieure du corps qui s\'ouvre sur le devant et ne descend pas plus bas que les hanches',
          stock: 3,
          color: 'black',
          size: 'medium'
        },
        {
          name: 'Tee-shirt',
          picture: 'https://img01.ztat.net/article/spp-media-p1/b37c72e1184c3acb8cab529d8b7a644c/2490d6d4805443b4b4481dee0e96ac0c.jpg?imwidth=762',
          description: 'Un tee-shirt est un maillot de corps qui doit son nom à sa forme en « T », sans col et initialement à manches courtes mais éventuellement à manches longues',
          stock: 5,
          color: 'black',
          size: 'medium'
        },
        {
          name: 'Chaussette',
          picture: 'https://www.labonal.fr/18341-large_default/chaussettes-tennis-coton-blanc.jpg',
          description: 'Une chaussette est un bas qui s\'arrête à mi-jambe ou à la cheville et se porte à l\'intérieur d\'une chaussure ou d\'un chausson',
          stock: 3,
          color: 'white',
          size: 'large'
        },
        {
          name: 'Chemise noir',
          picture: 'https://img.ltwebstatic.com/images3_pi/2021/10/11/163391778159e817dc0bd8050cf7528d0144ee01b3_thumbnail_600x.webp',
          description: 'Une chemise est un vêtement qui couvre le buste et les bras.',
          stock: 6,
          color: 'black',
          size: 'large'
        },
        {
          name: 'Chemise blanche',
          picture: 'https://img.ltwebstatic.com/images3_pi/2021/09/13/16315091545921f52b884479a0ebda6370eb7f4f42_thumbnail_600x.webp',
          description: 'Une chemise est un vêtement qui couvre le buste et les bras.',
          stock: 10,
          color: 'white',
          size: 'large'
        },
        {
          name: 'Chaussures',
          picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Mens%27_ballroom_shoes%2C_Eurodance_CZ.jpg',
          description: 'Il s\'agit  d\'un accessoire de mode qui vêt les femmes comme les hommes',
          stock: 1,
          color: 'black',
          size: 'large'
        },
      ]
```
</details>