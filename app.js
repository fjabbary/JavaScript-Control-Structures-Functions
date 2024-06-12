
// Existing items in the cart
cart = []

const products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 699.99 },
  { name: "Tablet", price: 399.99 },
  { name: "Headphones", price: 199.99 },
  { name: "Smartwatch", price: 249.99 },
  { name: "Camera", price: 499.99 },
  { name: "Printer", price: 149.99 },
  { name: "Monitor", price: 299.99 },
  { name: "Keyboard", price: 89.99 },
  { name: "Mouse", price: 49.99 }
];

// Functions to add items to the cart, display products, 
function displayProducts(){
  console.log("*******************************************************************");
  products.forEach(product => console.log(product))
}

function addToCart(){
  const isUserLoggedIn = parseInt(prompt('Is user logged in? Enter 1 if logged in or enter 0 if not logged in'));
  if (isUserLoggedIn) {
    const itemToAdd = prompt('Enter the name of the product you want to add to the cart:')
    const foundProduct = products.find(product => product.name == itemToAdd)
    const foundCartItem = cart.find(cartItem => cartItem.name == itemToAdd)

    if (foundProduct) {
      if(!foundCartItem) {
        cart.push({...foundProduct, quantity: 1})    
        console.log(`${foundProduct.name} added to cart`);
      } else {
        foundCartItem.quantity += 1
        console.log(`${foundProduct.name} quantity increased to ${foundCartItem.quantity}`);
      }
      
    } else {
      console.log(`Product with the name of ${itemToAdd} doesn't exist`);
    }
    
  } else {
    alert('You need to login to add item to the cart')
  }
}

function displayCartItems() {
  console.log("*******************************************************************");
  if (cart.length > 0) {
    cart.forEach(cartItem => console.log(cartItem))
  } else {
    console.log('Cart is empty');
  }
}

function calcTotalCost() {
  const totalCost = cart.reduce((acc, val) => acc + (val.price * val.quantity), 0)
  console.log(`Total cost of the items in the cart: $${totalCost}`);
}




// ===================================================================================================
// ====================================|| Exploring Functions in JavaScript ||========================
// ===================================================================================================

let balance = 0

function showBalance(){
  console.log(`Current balance is $${balance}`);
}

function deposit() {
  const amount = parseInt(prompt("Enter amount to deposit:"))
  balance += amount
  
}


function withdraw() {
  const amount = parseInt(prompt("Enter amount to withdraw:"))
  if (balance >= amount) {
    balance -= amount
  } else {
    console.log(`Insufficient balance for withdrawal of $${amount}`);
  }
}

