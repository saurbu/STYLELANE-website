

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (Response) {
    // console.log(Response)

    function createCard(id, name, brand, price, isAccessory, preview) {

        var productCard = document.createElement("div");
        productCard.className = "card";

        var productImage = document.createElement("img");
        productImage.className = "product-image";
        productImage.id = id;
        productImage.src = preview;


        productCard.appendChild(productImage)

        var detailsDiv = document.createElement("div");
        detailsDiv.className = "details";

        var productName = document.createElement("h3");
        productName.className = "product-name";
        productName.innerText = name;

        var productBrand = document.createElement("h4");
        productBrand.className = "product-brand";
        productBrand.innerText = brand;

        var productPrice = document.createElement("h5");
        productPrice.className = "product-price";
        productPrice.innerText = "Rs " + price;

        var addCartBtn = document.createElement("button");
        addCartBtn.className = "add-cart-btn";
        addCartBtn.innerText = "Add Cart";
        addCartBtn.onclick = ()=>addToCart(id, name, brand, price, isAccessory, preview);
        detailsDiv.appendChild(productName);
        detailsDiv.appendChild(productBrand);
        detailsDiv.appendChild(productPrice);
        detailsDiv.appendChild(addCartBtn);
        productCard.appendChild(detailsDiv);


        if (isAccessory == true) {
            var AccessoriesSection = document.getElementById("Accessories-section");
            AccessoriesSection.appendChild(productCard);
        } else {
            var clothingSection = document.getElementById("clothing-section");
            clothingSection.appendChild(productCard);
        }

    }
function addToCart(id, name, brand, price, isAccessory, preview){


    if(localStorage.getItem("Add Cart") == null){
        
        localStorage.setItem("Add Cart", JSON.stringify({[id]: {id, price, brand, preview, name, quantity:1}}));
    }else{
        localStorage.getItem("Add Cart");
        var data = JSON.parse(localStorage.getItem("Add Cart"));
        if(data.hasOwnProperty(id)){
            data[id].quantity += 1;
        }else{
            data = {...data, [id]: {id, price, brand, preview, name, quantity:1}}
        }
        localStorage.setItem("Add Cart", JSON.stringify(data));
    }

    var cartLength = JSON.parse(localStorage.getItem("Add Cart"));

    var cartCount = document.getElementById("items-count");

    var count = 0;

    for(let i = 0; i < Object.values(cartLength).length; i++){
        count += Object.values(cartLength)[i].quantity;
    }
    cartCount.innerText = count;


}
    for (var i = 0; i < Response.length; i++) {
        createCard(Response[i].id, Response[i].name, Response[i].brand,
            Response[i].price, Response[i].isAccessory, Response[i].preview)
    }

    var cartIcon = document.getElementById("cart");    

    cartIcon.addEventListener("click", function () {
        location.assign("./cart.html");
    })


    var imageId = 0;

    var productImage = document.querySelectorAll(".product-image");
  
    productImage.forEach((card) => {
      card.addEventListener("click", function (e) {
          location.assign("./preview.html");
          console.log(e.target.id)
        imageId = e.target.id;

        if(localStorage.getItem("Item Id") == null){
            var itemId = "";
            itemId = imageId;
            localStorage.setItem("Item Id", JSON.stringify(itemId));
        }else{
            localStorage.getItem("Item Id");
            itemId = "";
            itemId = imageId;
            localStorage.setItem("Item Id", JSON.parse(itemId));
        };

        });

    });

    var cartLength = JSON.parse(localStorage.getItem("Add Cart"));

    var cartCount = document.getElementById("items-count");

    var count = 0;

    for(let i = 0; i < Object.values(cartLength).length; i++){
        count += Object.values(cartLength)[i].quantity;
    }
    cartCount.innerText = count;



    });
    var clothingLink = document.getElementById("clothing-link");
    clothingLink.onclick = function(){
        location.assign("./index.html#clothing-heading");
    }
    
    var AccessoriesLink = document.getElementById("accessories-link");
    AccessoriesLink.onclick = function(){
        location.assign("./index.html#Accessories-heading");
    }
    
    