var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  //Creates new item
  var newItem = {
    [itemName]: Math.floor(Math.random()*100)
  };
  
  //Adds new item object to cart array
  cart.push(newItem);
  
  //Prints:
  console.log(itemName +' has been added to your cart.')
  return(cart);
}

function viewCart() {
  if(cart.length===0){
    console.log('Your shopping cart is empty.')
    return;
  } 
  
  else if(cart.length===1){
    console.log('In your cart, you have ' + cart[0].itemName + ' at ' + cart[0].itemPrice + ' .')
  }
  return;
}

function total() {
  
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  // write your code here
}