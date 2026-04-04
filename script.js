
function toggleMenu() {
const nav = document.getElementById("navLinks");
nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

let cart = [];

function buyNow(productName) {
  alert(`Thank you for choosing ${productName}!`);
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  alert(`${name} added to cart!`);
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '10px';
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `₱${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Thank you for your purchase! Total: ₱${total.toFixed(2)}`);
    cart = [];
    updateCart();
    toggleCart();
  }
}

function buyNow(productName) {
  alert(`Thank you for choosing ${productName}!`);
}

function validateForm() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if (name === "" || email === "") {
alert("Please fill in all required fields");
return false;
}

alert("Message sent successfully!");
return true;
}
