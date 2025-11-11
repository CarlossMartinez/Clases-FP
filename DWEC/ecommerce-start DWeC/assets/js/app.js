let state = {
  products: [],
  filteredProducts: [],
  scorefilteredProducts: [],
  favorites: [3, 5, 4, 7],
};

function loadState() {
  const stateStorage = localStorage.getItem("state");
  if (stateStorage) state = JSON.parse(stateStorage);
}

function saveState() {
  localStorage.setItem("state", JSON.stringify(state));
}

async function loadProducts() {
  try {
    const response = await fetch("./assets/data/productes.json");
    const data = await response.json();

    state.products = data;
    state.filteredProducts = [...data];
    state.scorefilteredProducts = [...data];
    loadState();

    renderProducts(state.filteredProducts);
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

function renderProducts(products) {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";

  for (let product of products) {
    const reducedPrice = (product.preu * (1 - product.descompte / 100)).toFixed(
      2
    );
    const isFavorite = state.favorites.includes(product.id);

    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += `<i class= star "${
        product.puntuacio > i
          ? "fa-solid fa-star"
          : "fa-solid fa-star grey-star"
      }"></i>`;
    }

    let productCard = `<article class="card">
          <div class="info-1">
            <img src="./assets/images/products/${product.imatge}" alt="${
      product.nom
    }">
            <h3>${product.nom}</h3>
            <h4>${product.descripcio}</h4>
          </div>
          <div class="info2">
            <div class="showcase-rating">${stars}</div>
            <div class="price-box">
              <p class="price">${reducedPrice} &euro; ${
      product.descompte ? `<del>${product.preu} &euro;</del>` : ``
    }</p>
              <button>Add</button>
            </div>
          </div>
          <div class="favorite">
              <i class="${
                isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }" data-id="${product.id}"></i>
          </div>
        </article>`;

    productGrid.innerHTML += productCard;
  }

  document.querySelectorAll(".favorite").forEach((coret) => {
    coret.addEventListener("click", toggleFavorite);
  });

  document.querySelectorAll(".").forEach((star) => {
    star.addEventListener("click", toggleRating);
  });
}

function toggleFavorite(event) {
  const productId = Number(event.target.dataset.id);
  const index = state.favorites.indexOf(productId);

  if (index == -1) {
    state.favorites.push(productId);
  } else {
    state.favorites.splice(index, 1);
  }
  saveState();
  renderProducts(state.filteredProducts);
}

function toggleRating(event) {
  //dataset y puntuacion ; querySelectAll y foreach
  const productId = Number(event.target.dataset.id);
  const productRating = Number(event.target.dataset.puntuacio);

  saveState();
  renderProducts(state.filteredProducts);
}

function init() {
  document.querySelector(".fa-eraser").addEventListener("click", resetAll);

  loadProducts();
}

function resetAll() {
  state.filteredProducts = [...state.products];
  state.scorefilteredProducts = [...state.products];
  state.favorites = [];
  renderProducts(state.filteredProducts);
}

document.addEventListener("DOMContentLoaded", init);
