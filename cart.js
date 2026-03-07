var cartCount = document.getElementById("items-count");
            
var clothingLink = document.getElementById("clothing-link");
clothingLink.onclick = function(){
    location.assign("./index.html#clothing-heading");
}

var AccessoriesLink = document.getElementById("accessories-link");
AccessoriesLink.onclick = function(){
    location.assign("./index.html#Accessories-heading");
}

var cartItems = JSON.parse(localStorage.getItem("Add Cart"));

var cLength = Object.values(cartItems);

for(var i = 0; i <= cLength.length; i++){
    // console.log(cartItems[i]);
}

var cartCount = document.getElementById("items-count");

var count = 0;

for(let i = 0; i < cLength.length; i++){
    count += cLength[i].quantity;
}
cartCount.innerText = count;

// var displayCart = document.getElementById("cart-items-display");
var itemDetailsContainer = document.getElementById("item-details-container");
var totalAmount = document.getElementById("total-amount");
var totalItems = document.getElementById("total-items");

for(var i = 0; i < cLength.length; i++){
    
    var itemDetails = document.createElement("div");
    itemDetails.className = "item-details";

    var productImg = document.createElement("img");
    productImg.className = "product-img";
    productImg.src = cLength[i].preview;

    var productDetails = document.createElement("div");
    productDetails.className = "product-details";

    var itemName = document.createElement("h2");
    itemName.className = "item-name"
    itemName.innerText = cLength[i].name;

    var itemQuantity = document.createElement("p");
    itemQuantity.className = "item-quantity"
    itemQuantity.innerText = `x${cLength[i].quantity}`;

    var itemPrice = document.createElement("p");
    itemPrice.className = "item-price"
    itemPrice.innerText = `Amount: ${cLength[i].price}`;

    itemDetailsContainer.appendChild(itemDetails);
    itemDetails.append(productImg, productDetails);
    productDetails.append(itemName, itemQuantity, itemPrice);
}

var totalPrice = 0;
var finalQuantity = 0;
console.log(cLength)
for(var i = 0; i < cLength.length; i++){
    
    var Price = cLength[i].price;

    if( cLength[i].quantity > 1){
        totalPrice += Price *  cLength[i].quantity;
    }else{
        totalPrice += Price;
    }

    var quantity = cLength[i].quantity;
    finalQuantity += quantity;

}

totalAmount.innerText = totalPrice;
totalItems.innerText = finalQuantity;

var placeOrderBtn = document.getElementById("place-order-btn");

placeOrderBtn.addEventListener("click", function(){

    if(cLength != 0){
        location.assign("./orderConfirmed.html");
        cartCount.innerText = 0;
        localStorage.removeItem("Add Cart");
    }else{
        alert("Please add Items in your cart.")
    }
});


