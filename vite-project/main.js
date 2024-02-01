import './style.css';
import {Store} from './Items';

function Insert(blah) {
    blah.map((result) => {
      const card = document.createElement('div');
      card.classlist = 'card';
      const description = 
      `<div class="card"> 
      <h2 class="card-title">${result.Name}</h2>
      <img src="${result.image}" alt="" class="card-img">
      <p class="card-desc">${result.Worth}</p>
      <button type="button" class="buy">${result.Name}</button>
      </div>`;
      container.innerHTML += description;
    })    
    document.querySelectorAll(".buy").forEach((buy)=>
        buy.addEventListener("click", function(){
          let filt = buy.textContent 
          let retrieve = Store.filter((options) => {return options.Name === filt})
          Create(retrieve)
        }))
    }

  function Create(blah) {
    blah.map((result) => {
      const card = document.createElement('div');
      card.classlist = 'card';
      const description = 
      `<div class="card"> 
      <h2 class="card-title">${result.Name}</h2>
      <img src="${result.image}" alt="" class="card-img">
      <p class="card-desc">${result.Worth}</p>
      </div>`;
      checkout.innerHTML += description;
    })    
  }
let filters = document.querySelectorAll(".button")
  filters.forEach((btn) => btn.addEventListener("click", function () {
    let filter = btn.textContent
    container.innerHTML = ""
    let newarr = Store.filter((option) => { return option.type === filter })
    if (filter === "Reset"){Insert(cards)}
    else {Insert(newarr)}
  }))

function finish(cart){
    cart.map((result)=>{
    })
  }
  // to do - fix add functionality -- try removeparent element
  // purchase function will add array items into a new array called cart 
  // check out function will add the prices of all items and compare it to the budget, returning a yes or no response 
  // if card.includes worth, return value, 