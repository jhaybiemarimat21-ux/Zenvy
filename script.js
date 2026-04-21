function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

let cart = [];

function buyNow(productName, price) {
  cart = [{ name: productName, price: price }];
  updateCart();
  openCheckout();
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

  if (cartCount) cartCount.textContent = cart.length;
  if (cartItems) cartItems.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '10px';
    removeBtn.style.background = '#ef4444';
    removeBtn.style.color = 'white';
    removeBtn.style.border = 'none';
    removeBtn.style.borderRadius = '3px';
    removeBtn.style.cursor = 'pointer';
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    if (cartItems) cartItems.appendChild(li);
  });

  if (cartTotal) cartTotal.textContent = `₱${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  if (modal) {
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }
}

// Updated checkout function
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }
  toggleCart();
  openCheckout();
}

// Checkout modal functions
function openCheckout() {
  document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckout() {
  document.getElementById('checkout-modal').style.display = 'none';
}

function confirmOrder() {
  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const street = document.getElementById('checkout-street').value.trim();
  const city = document.getElementById('checkout-city').value.trim();
  const province = document.getElementById('checkout-province').value.trim();
  const zip = document.getElementById('checkout-zip').value.trim();

  if (!name || !phone || !street || !city || !province || !zip) {
    alert('Please fill in all fields.');
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const message = `Thank you, ${name}! Your order total is ₱${total.toFixed(2)}. It will be delivered to: ${street}, ${city}, ${province} ${zip}. We will contact you at ${phone}.`;

  document.getElementById('confirm-message').innerText = message;
  closeCheckout();
  document.getElementById('order-confirm').style.display = 'flex';
  
  // Clear cart after successful order
  cart = [];
  updateCart();
}

function closeConfirm() {
  document.getElementById('order-confirm').style.display = 'none';
}

function validateForm() {
  let name = document.getElementById("name")?.value || '';
  let email = document.getElementById("email")?.value || '';

  if (name === "" || email === "") {
    alert("Please fill in all required fields");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}