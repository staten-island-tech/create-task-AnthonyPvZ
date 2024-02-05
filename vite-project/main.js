import './style.css';
import { Store } from './Items';

function Insert(blah) {
  blah.map((result) => {
    const card = document.createElement('div');
    card.classlist = 'card';
    const description =
      `<div class="card"> 
      <h2 class="card-title">${result.Name}</h2>
      <img src="${result.image}" alt="" class="card-img">
      <p class="card-desc">Worth: Click to buy for $${result.Worth}</p>
      <button type="button" class="buy">${result.Name}</button>
      </div>`;
    container.innerHTML += description;
  })
  document.querySelectorAll(".buy").forEach((buy) =>
    buy.addEventListener("click", function () {
      let filt = buy.textContent
      let retrieve = Store.filter((options) => { return options.Name === filt })
      Create(retrieve)
    }))
}
Insert(Store)
function Create(blah) {
  blah.map((result) => {
    const card = document.createElement('div');
    card.classlist = 'card';
    const description =
      `<div class="card"> 
      <h2 class="card-title">${result.Name}</h2>
      <img src="${result.image}" alt="" class="card-img">
      <p class="card-desc">This is worth $${result.Worth}</p>
      </div>`;
    cart.innerHTML += description;
    let currentvalue = (document.querySelector(".moneyvalue").innerHTML - result.Worth)
    document.querySelector(".moneyvalue").innerHTML = currentvalue
  })
}
let filters = document.querySelectorAll(".button")
filters.forEach((btn) => btn.addEventListener("click", function () {
  let filter = btn.textContent
  container.innerHTML = ""
  let newarr = Store.filter((option) => { return option.type === filter })
  if (filter === "Reset") { Insert(Store) }
  else {
    Insert(newarr)
  }
}))

let buying = document.querySelectorAll("#Checkout")
buying.forEach((check) => check.addEventListener("click", function () {
  if (document.querySelector(".moneyvalue").innerHTML >= 0) { window.alert("Successfully bought!") }
  else { window.alert("Purchase denied, overbudget!") };
  cart.innerHTML = "";
}))
