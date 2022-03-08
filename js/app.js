/*



*/
const app = {
    state: {
      currentStock: '1',
      currentColor: 'black',
      currentSize: 'medium',
    },
    data: [
        {
          name: 'Pantalon',
          picture: 'https://vstreet.eu/375-large_default/pantalon-moto-vstreet-chino-beige.jpg',
          description: 'Un pantalon est un vêtement porté sur la partie inférieure du corps, les deux jambes étant couvertes séparément.',
          stock: 5,
          color: 'beige',
          size: 'medium'
        },
        {
          name: 'Veste',
          picture: 'https://media.ccvmode.com/125711-large_new_default/premium-by-jack-jones-veste-homme-bleu.jpg',
          description: 'Une veste est un vêtement à manches longues couvrant la partie supérieure du corps qui s\'ouvre sur le devant et ne descend pas plus bas que les hanches',
          stock: 3,
          color: 'blue',
          size: 'medium'
        },
        {
          name: 'Tee-shirt',
          picture: 'https://img01.ztat.net/article/spp-media-p1/b37c72e1184c3acb8cab529d8b7a644c/2490d6d4805443b4b4481dee0e96ac0c.jpg?imwidth=762',
          description: 'Un tee-shirt est un maillot de corps qui doit son nom à sa forme en « T », sans col et initialement à manches courtes3 mais éventuellement à manches longues',
          stock: 5,
          color: 'black',
          size: 'medium'
        },
        {
          name: 'Chaussette',
          picture: 'https://www.labonal.fr/18341-large_default/chaussettes-tennis-coton-blanc.jpg',
          description: 'Une chaussette est un bas qui s\'arrête à mi-jambe ou à la cheville et se porte à l\'intérieur d\'une chaussure ou d\'un chausson',
          stock: 0,
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
      ],
    init: function() {
      app.container = document.getElementById('app');
      app.createForm();
      app.createProductsList();
    },
    // création de l'interface
    createProductsList: function() {
      // 3 blocs : formulaire, compteur, résultats
      app.createCounter();
      app.createResults();
    },
    // création du formulaire
    createForm: function() {
      const formElement = document.createElement('form');
  
      const selectColorElement = document.createElement('select');
      selectColorElement.className = 'search-choices';
      // autre syntaxe
      // selectElement.setAttribute('class', 'search-choices);
      selectColorElement.addEventListener('change', app.handleColorChange);
  
      app.createOption('black', 'Noir', selectColorElement, app.state.currentColor);
      app.createOption('white', 'Blanc', selectColorElement, app.state.currentColor);
      app.createOption('blue', 'Bleu', selectColorElement, app.state.currentColor);
      app.createOption('beige', 'Beige', selectColorElement, app.state.currentColor);
  

      const selectSizeElement = document.createElement('select');
      selectSizeElement.className = 'search-choices';
  
      // autre syntaxe
      // selectElement.setAttribute('class', 'search-choices);
      selectSizeElement.addEventListener('change', app.handleSizeChange);
  
      app.createOption('small', 'Petit', selectSizeElement, app.state.currentSize);
      app.createOption('medium', 'Moyen', selectSizeElement, app.state.currentSize);
      app.createOption('large', 'Grand', selectSizeElement, app.state.currentSize);
  

      const inputStockElement = document.createElement('input');
      inputStockElement.setAttribute("type", "text"); 
      inputStockElement.className = 'search-choices';
  
      // autre syntaxe
      // selectElement.setAttribute('class', 'search-choices);
      inputStockElement.addEventListener('input', app.handleStockChange);
      inputStockElement.setAttribute('value', app.state.currentStock);
  
      formElement.appendChild(selectColorElement);
      formElement.appendChild(selectSizeElement);
      formElement.appendChild(inputStockElement);
  
      app.container.appendChild(formElement);
    },
    // créer une option dans un select :
    // - text : le texte à placer dans l'option
    // - selectElement : le select dans lequel ajouter l'option
    // - selectedValue : la valeur sélectionnée pour ce sélecteur
    createOption: function(value, text, selectElement, selectedValue) {
      const option = document.createElement('option');
      option.textContent = text;
      option.value = value;
      // attribut selected : indique si l'option est actuellement sélectionnée
      let isSelected;
      if (value === selectedValue) {
        isSelected = true;
      }
      else {
        isSelected = false;
      }
      option.selected = isSelected;
      selectElement.appendChild(option);
    },
    handleColorChange: function(event) {
      // on met à jour la valeur dans le state
      app.state.currentColor = event.target.value;
  
      // on adapte l'affichage : on efface tout, et on re-crée les différents blocs
      
      document.getElementById('results').outerHTML = '';
      document.getElementById('counter').outerHTML = '';
      app.createProductsList();
    },
    handleSizeChange: function(event) {
      app.state.currentSize = event.target.value;
  
      document.getElementById('results').outerHTML = '';
      document.getElementById('counter').outerHTML = '';
      app.createProductsList();
    },
    handleStockChange: function(event) {
      app.state.currentStock = event.target.value;
  
      document.getElementById('results').outerHTML = '';
      document.getElementById('counter').outerHTML = '';
      app.createProductsList();
    },
    createCounter: function() {
      // on récupère les produits qui correspondent aux critères de recherche pour
      // pouvoir les compter
      const selectedResults = app.data.filter((item) => item.stock >= app.state.currentStock
        && item.color === app.state.currentColor && item.size === app.state.currentSize );
  

      const counter = document.createElement('p');
      counter.id = 'counter';
      counter.textContent = `${selectedResults.length} produit(s) trouvé(s)`;
      app.container.appendChild(counter);
    },
    createResults: function() {
      const results = document.createElement('div');
      results.id = 'results';
      // on récupère les produits à afficher en fonction du state
      const selectedResults = app.data.filter((item) => item.stock >= app.state.currentStock
        && item.color === app.state.currentColor && item.size === app.state.currentSize);
      // on affiche les produits
      selectedResults.forEach((item) => {
        const mainResult = document.createElement('div');
        mainResult.textContent = item.name;
        mainResult.className = 'col-md-12';

        const img = document.createElement('img');
        img.src = item.picture;
        mainResult.appendChild(img);
  
        const color = document.createElement('span');
        color.textContent = item.color;
        color.className = 'list-tag';
        mainResult.appendChild(color);

        const size = document.createElement('span');
        size.textContent = item.size;
        size.className = 'list-tag';
        mainResult.appendChild(size);
    
        const stock = document.createElement('span');
        size.textContent = item.stock;
        size.className = 'list-tag';
        mainResult.appendChild(stock);

        results.appendChild(mainResult);
      });
  
      app.container.appendChild(results);
    }
  };
  
  // on initialise l'app dès que le document est prêt
  document.addEventListener('DOMContentLoaded', app.init);
  