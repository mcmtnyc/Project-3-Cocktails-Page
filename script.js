//Set necessary variables +
let index = 0;
let cocktails = []
let nextSlide = document.querySelector('.next');
let prevSlide = document.querySelector('.prev');
let cocktailImg = document.querySelector('.cocktailImg');
let cocktailName = document.querySelector('.cocktailName');

let loadCocktail = fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php');

loadCocktail.then(res => res.json())
    .then((data) => {
      cocktails.push(data.drinks)

cocktailName.innerHTML = `${cocktails[0][0].strDrink}`
cocktailImg.src = cocktails[0][0].strDrinkThumb
    })

    function neverEnding() {
      if (index === cocktails[0].length) {
        index = 0;
      } else if (index === -1) {
        index = cocktails[0].length - 1;
      }
    }
    
    function addInfo() {
      cocktailName.innerHTML = `${cocktails[0][index].strDrink}`
      cocktailImg.src = cocktails[0][index].strDrinkThumb
    
    }
    
    function clearItAll() {
      cocktailName.innerHTML = ``;
      cocktailImg.src = null;
    }
    
    nextSlide.addEventListener('click', function () {
      index++;
      neverEnding();
      clearItAll();
      addInfo();
    })
    
    prevSlide.addEventListener('click', function () {
      index--;
      neverEnding();
      clearItAll();
      addInfo();
    })