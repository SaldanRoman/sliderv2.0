fetch('drinks.json')
  .then(response =>response.json()).then(obj =>{ 
    function generateDiv(obj){
      let randDrinksElement = document.createElement('div');
      randDrinksElement.setAttribute('class', 'random-drinks-elment');

      let randDrinksElementImgContainer = document.createElement('div');
      randDrinksElementImgContainer.setAttribute('class', 'random-drinks-elment-img-container');

      let randDrinksElementLink = document.createElement('a');
      randDrinksElementLink.setAttribute('href', obj.image);
      randDrinksElementLink.setAttribute('target', '_blanck');

      let randDrinksElementImg = document.createElement('img');
      randDrinksElementImg.setAttribute('class', 'random-drinks-elment-img')
      randDrinksElementImg.setAttribute('src', obj.image);
      randDrinksElementImg.setAttribute('alt', obj.name);

    //   let randDrinksElementName = document.createElement('p');
    //   randDrinksElementName.setAttribute('class', 'random-drinks-elment-name');
    //   randDrinksElementName.innerText = obj.name;
      let randDrinksElementText = document.createElement('a');
      randDrinksElementText.setAttribute('href', obj.image);
      randDrinksElementText.setAttribute('target', '_blanck');
      randDrinksElementText.setAttribute('class', 'random-drinks-elment-text');
      randDrinksElementText.innerText = obj.name;

      let randDrinksElementPrice = document.createElement('p');
      let randDrinksElementCurrency = document.createElement('p');
      randDrinksElementCurrency.innerText=`${obj.currency} `;
      randDrinksElementPrice.innerText = `${obj.price}`;

      let randDrinksElementPriceContainer = document.createElement('div');
      randDrinksElementPriceContainer.setAttribute('class', 'random-drinks-elment-price');
      randDrinksElementPriceContainer.appendChild(randDrinksElementPrice);
      randDrinksElementPriceContainer.appendChild(randDrinksElementCurrency);

      randDrinksElementLink.appendChild(randDrinksElementImg);
      
      randDrinksElementImgContainer.appendChild(randDrinksElementLink);
      randDrinksElement.appendChild(randDrinksElementImgContainer);
    //   randDrinksElement.appendChild(randDrinksElementName);
      randDrinksElement.appendChild(randDrinksElementText);
      randDrinksElement.appendChild(randDrinksElementPriceContainer);
      return randDrinksElement
    }
  
    (function(){
      function getRandom(){
        return ~~( Math.random() * obj.drinks.length-1);
      };
      getRandom();
      const sectionofPage = document.querySelector('.random-drinks-container');
      sectionofPage.appendChild(generateDiv(obj.drinks[getRandom()]));
      sectionofPage.appendChild(generateDiv(obj.drinks[getRandom()]));
      sectionofPage.appendChild(generateDiv(obj.drinks[getRandom()]));
      sectionofPage.appendChild(generateDiv(obj.drinks[getRandom()]));

    })()

  })
  