import './style.css';
import {Store} from './Items';

function Insert(blah) {
    blah.map((result) => {
      const card = document.createElement('div');
      card.classlist = 'card';
      const description = `<div class="card"> 
      <h2 class="card-title">${result.Name}</h2>
      <img src="${result.image}" alt="" class="card-img">
      <p class="card-desc">${result.Worth}</p>
    </div>`;
      container.innerHTML += description;
    })
  }
  let buttonse = document.querySelectorAll(".button")
  buttonse.forEach((btn) => btn.addEventListener("click", function () {
    let filter = btn.textContent
    container.innerHTML = ""
    let newarr = Store.filter((option) => { return option.type === filter })
    if (filter === "Reset"){Insert(cards)}
    else {Insert(newarr)}
  }))