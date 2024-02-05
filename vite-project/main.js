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
      <p class="card-desc">Worth: Click to buy for ${result.Worth}</p>
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
      <p class="card-desc">${result.Worth}</p>
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
  Insert(newarr)
}))

let buying = document.querySelectorAll(".checkout")
buying.forEach((check) => check.addEventListener("click", function () {
  if (Money.innerHTML > 0) { console.log("positive") }
  else { console.log("negative") }
}))
