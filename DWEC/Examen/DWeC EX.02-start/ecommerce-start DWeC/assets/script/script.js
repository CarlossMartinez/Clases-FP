//Local storage

let state = {
  products: [],
  filteredProducts: [],
  favorites,
};

function loadState() {
  const stateStorage = localStorage.getItem("state");
  if (stateStorage) state = JSON.parse(stateStorage);
}

function saveState() {
  localStorage.setItem("state", stringify(state));
}

async function loadProducts() {
  try {
    const response = await fetch("./assets/data/prueba.json");
    const data = await response.json;

    state.products = data;
    state.filteredProducts = [...data];
    state.scorefilteredProducts = [...data];

    console.log(data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
}
