import './style.css';
import {Melees, guns, other, traits} from './Items';

function Insert(blah) {
    blah.map((result) => {
      const card = document.createElement('div');
      card.classlist = 'card';
      const description = `<div class="card"> 
      <h2 class="card-title">${result.title}</h2>
      <img src="${result.image}" alt="" class="card-img">
      <p class="card-desc">${result.description}</p>
    </div>`;
      container.innerHTML += description;
    })
  }
