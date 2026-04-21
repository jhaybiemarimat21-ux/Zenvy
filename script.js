function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

let currentProduct = "";
let currentPrice = 0;

function buyNow(productName, price) {
  currentProduct = productName;
  currentPrice = price;

  document.getElementById("selected-product").textContent =
    'Product: ${productName} (₱${price})';

  toggleOrder();
}

function toggleOrder() {
  const modal = document.getElementById("order-modal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function placeOrder() {
  const name = document.getElementById("customer-name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("customer-email").value;
  const contact = document.getElementById("contact").value;
  const size = document.getElementById("size").value;

  if (!name || !address || !email || !contact || !size) {
    alert("Please fill in all fields!");
    return;
  }

  alert(
`ORDER PLACED!
Thank you for choosing Zenvy!

Product: ${currentProduct}
Size: ${size}
Total: ₱${currentPrice}

It will be delivered to:
${address}

We will contact you at ${contact} or ${email}.`
  );

  toggleOrder();
}


let cart = [];

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
