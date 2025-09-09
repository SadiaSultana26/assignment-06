// API URLs
const API_CATEGORIES = "https://openapi.programming-hero.com/api/categories";
const API_PLANTS = "https://openapi.programming-hero.com/api/plants";
const API_CATEGORY = id => `https://openapi.programming-hero.com/api/category/${id}`;
const API_PLANT = id => `https://openapi.programming-hero.com/api/plant/${id}`;

const categoriesDiv = document.getElementById("categories");
const cardsDiv = document.getElementById("cards");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const spinner = document.getElementById("spinner");

let total = 0;
let cart = [];



// Load Categories
async function loadCategories() {
  const res = await fetch(API_CATEGORIES);
  const data = await res.json();
  data.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.category_name;
    btn.onclick = () => loadCategory(cat.id, btn);
    categoriesDiv.appendChild(btn);
  });
}

// Load Plants (default all)
async function loadPlants(url = API_PLANTS) {
  spinner.classList.remove("hidden");
  cardsDiv.innerHTML = "";
  const res = await fetch(url);
  const data = await res.json();
  spinner.classList.add("hidden");

  data.plants.forEach(plant => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}">
      <h4 onclick="showDetails(${plant.id})">${plant.name}</h4>
      <p>${plant.category}</p>
      <p>$${plant.price}</p>
      <button class="btn-primary" onclick="addToCart('${plant.name}', ${plant.price})">Add to Cart</button>
    `;
    cardsDiv.appendChild(card);
  });
}

// Load Category
async function loadCategory(id, btn) {
  document.querySelectorAll(".category-list button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  loadPlants(API_CATEGORY(id));
}

// Add to Cart
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

// Render Cart
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} <span onclick="removeFromCart(${i})" style="cursor:pointer;color:red;">❌</span>`;
    cartList.appendChild(li);
  });
  cartTotal.textContent = total.toFixed(2);
}

// Remove from Cart
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

// Modal Details
async function showDetails(id) {
  const res = await fetch(API_PLANT(id));
  const data = await res.json();
  const plant = data.plant;
  document.getElementById("modal-body").innerHTML = `
    <h2>${plant.name}</h2>
    <img src="${plant.image}" style="width:100%;max-height:200px;object-fit:cover;">
    <p>${plant.description}</p>
    <p>Category: ${plant.category}</p>
    <p>Price: $${plant.price}</p>
  `;
  document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("modal-close").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

// Init
loadCategories();
loadPlants();