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
      ],
    translate: [
        {
            technicalCode: 'black',
            translation: 'Noir',
        },
        {
            technicalCode: 'white',
            translation: 'Blanc',
        },
        {
            technicalCode: 'small',
            translation: 'Petit',
        },
        {
            technicalCode: 'medium',
            translation: 'Moyen',
        },
        {
            technicalCode: 'large',
            translation: 'Grand',
        },
    ],
    init: function() {
      app.container = document.getElementById('app');
      // formulaire. L'affichage n'est pas rafraichi avec le reste
      app.createForm();
      app.createProductsList();
    },
    // création de l'interface
    createProductsList: function() {
      // 2 blocs : compteur, résultats
      app.createCounter();
      app.createResults();
    },
    // création du formulaire
    createForm: function() {
      const formContainer = document.createElement('div');
      formContainer.className = 'row';

      const formElement = document.createElement('form');

      const selectColorElement = document.createElement('select');
      const selectColorContainer = document.createElement('div');
      selectColorContainer.className = 'col';

      selectColorElement.className = 'form-select';
      // autre syntaxe
      // selectElement.setAttribute('class', 'search-choices);
      selectColorElement.addEventListener('change', app.handleColorChange);
  
      app.createOption('black', 'Noir', selectColorElement, app.state.currentColor);
      app.createOption('white', 'Blanc', selectColorElement, app.state.currentColor);
  
      selectColorContainer.appendChild(selectColorElement);

      const selectSizeElement = document.createElement('select');
      const selectSizeContainer = document.createElement('div');
      selectSizeContainer.className = 'col';
      selectSizeElement.className = 'form-select';
  
      // autre syntaxe
      // selectElement.setAttribute('class', 'search-choices);
      selectSizeElement.addEventListener('change', app.handleSizeChange);
  
      app.createOption('small', 'Petit', selectSizeElement, app.state.currentSize);
      app.createOption('medium', 'Moyen', selectSizeElement, app.state.currentSize);
      app.createOption('large', 'Grand', selectSizeElement, app.state.currentSize);

      selectSizeContainer.appendChild(selectSizeElement);
  
      const inputStockElement = document.createElement('input');
      const selectStockContainer = document.createElement('div');

      inputStockElement.setAttribute("type", "text"); 
      selectStockContainer.className = 'col';
      inputStockElement.className = 'form-control';

      selectStockContainer.appendChild(inputStockElement);
  
      // autre syntaxe
      // selectElement.setAttribute('class', 'search-choices);
      inputStockElement.addEventListener('input', app.handleStockChange);
      inputStockElement.setAttribute('value', app.state.currentStock);
      inputStockElement.setAttribute('placeholder', 'Quantité');
  
      formContainer.appendChild(selectColorContainer);
      formContainer.appendChild(selectSizeContainer);
      formContainer.appendChild(selectStockContainer);

      formElement.appendChild(formContainer);
  
      app.container.appendChild(formContainer);
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
      counter.className = 'p-2 mt-2 bg-dark text-white';
      counter.textContent = `${selectedResults.length} produit(s) trouvé(s)`;
      app.container.appendChild(counter);
    },
    // Fonction pour chercher le nom Français d'une couleur ou d'une taille à partir d'un code technique
    getNameToDisplay: function(value) {
        // filtre du tableau pour retourner uniquement la traduction qui nous intéresse
        const results = app.translate.filter((item) => item.technicalCode === value);
        // Une seule solution possible
        return results[0].translation;
    },
    createResults: function() {
      const results = document.createElement('div');
      // results.className = 'row';
      results.id = 'results';
      // on récupère les produits à afficher en fonction du state
      const selectedResults = app.data.filter((item) => item.stock >= app.state.currentStock
        && item.color === app.state.currentColor && item.size === app.state.currentSize);
      // on affiche les produits
      selectedResults.forEach((item) => {
        const mainResult = document.createElement('div');
        mainResult.className = 'row p-3 m-2 bg-primary text-white'; 

        const img = document.createElement('img');
        img.className = 'col-md-2 img-thumbnail productPicture';
        img.src = item.picture;
        mainResult.appendChild(img);
  
        const name = document.createElement('div');
        name.textContent = item.name;
        name.className = 'col-md-2';
        mainResult.appendChild(name);

        const description = document.createElement('div');
        description.textContent = item.description;
        description.className = 'col-md-3';
        mainResult.appendChild(description);

        const colorAndSize = document.createElement('div');
        colorAndSize.textContent = `${app.getNameToDisplay(item.color)} / ${app.getNameToDisplay(item.size)}`;
        colorAndSize.className = 'col-md-3';
        mainResult.appendChild(colorAndSize);

        const stock = document.createElement('div');
        stock.textContent = `${item.stock} en stock`;
        stock.className = 'col-md-2';
        mainResult.appendChild(stock);

        results.appendChild(mainResult);
      });
  
      app.container.appendChild(results);
    }
  };
  
  // on initialise l'app dès que le document est prêt
  document.addEventListener('DOMContentLoaded', app.init);
  