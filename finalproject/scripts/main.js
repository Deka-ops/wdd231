import { updateYear } from './utils.js';
import { fetchDishes } from './menuData.js';

updateYear();

const featuredContainer = document.getElementById('featuredDishes');

fetchDishes().then(dishes => {
  const featured = dishes.slice(0, 3);
  featured.forEach(dish => {
    featuredContainer.innerHTML += `
      <div class="dish-card">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
      </div>`;
  });
}).catch(error => {
  featuredContainer.innerHTML = '<p>Error loading dishes.</p>';
});

// js/utils.js
export function updateYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

