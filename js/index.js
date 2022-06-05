// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((onePep) => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });

  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {

  document.querySelectorAll('.sauce').forEach((onePep) => {
    if (state.whiteSauce) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((onePep) => {
    if (state.whiteglutenFreeCrust) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  
//let buttonActive = document.querySelector(".panel.controls");
//buttonActive.forEach(button=>{
//button.addEventListener('click',function(){
//buttonActive.forEach(btns=>btns.classList.remove('active'));
//this.classList.add('active');
//});
//});

const pepButton = document.querySelector('.btn.btn-pepperoni');
const mushroomsButton = document.querySelector('.btn.btn-mushrooms');
const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
const whiteSauceButton = document.querySelector('.btn.btn-sauce');
const glutenFreeCrustButton = document.querySelector('.btn.btn-crust');
if (state.pepperoni) {
  pepButton.classList.add('active');
} else {
  pepButton.classList.remove('active');
}
if (state.mushrooms) {
  mushroomsButton.classList.add('active');
} else {
  mushroomsButton.classList.remove('active');
}
if (state.greenPeppers) {
  greenPeppersButton.classList.add('active');
} else {
  greenPeppersButton.classList.remove('active');
}
if (state.whiteSauce) {
  whiteSauceButton.classList.add('active');
} else {
  whiteSauceButton.classList.remove('active');
}
if (state.glutenFreeCrust) {
  glutenFreeCrustButton.classList.add('active');
} else {
  glutenFreeCrustButton.classList.remove('active');
}
}

  
  
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceSection = document.querySelector('.panel.price ul')
  const price = document.querySelector('.panel.price strong')
  let sum = basePrice;
  let startingText = '';

  // 
  for(let key in state){
    if(state[key]){
    // pepperoni:{price:100}
      startingText += `<li>$${ingredients[key].price} ${ingredients[key].name}</li>`
      sum += ingredients[key].price
    }
  }
  priceSection.innerHTML = startingText;
  price.innerHTML = sum
}



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
state.greenPeppers = !state.greenPeppers;
renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
state.whiteSauce = !state.whiteSauce;
renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.whiteglutenFreeCrust = !state.whiteglutenFreeCrust;
  renderEverything();
  });


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
