var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  
  //Create new item
  var newItem = {
    [itemName]: Math.floor(Math.random()*100)
  };
  
  //Add new item object to cart array
  cart.push(newItem);
  
  //Print:
  console.log(itemName +' has been added to your cart.')
  
  return(cart);
  
}

function viewCart() {
  
  if(cart.length===0){
    console.log('Your shopping cart is empty.')
  } 
  
  else if(cart.length===1){
    console.log('In your cart, you have ' + cart[0] + ' at ' + cart[0] + ' .')
  }
  return;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}