var imageId = JSON.parse(localStorage.getItem("Item Id"));

$.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${imageId}`, function (Response) {
    // console.log(Response)

    var productDetailsCover = document.getElementById("product-details-cover");

    var imageContainer = document.createElement("div");
    imageContainer.id = "image-container";

    var mainImage = document.createElement("img");
    mainImage.id = "main-image";
    mainImage.src = `${Response.photos[0]}`;

    var previewProductDetails = document.createElement("div");
    previewProductDetails.id = "preview-product-details";

    var previewProductName = document.createElement("h1");
    previewProductName.className = "preview-product-name";
    previewProductName.innerText = Response.name;

    var previewProductBrandName = document.createElement("h2");
    previewProductBrandName.className = "preview-product-brand-name";
    previewProductBrandName.innerText = Response.brand;

    var previewPrice = document.createElement("span");
    previewPrice.className = "preview-price";
    previewPrice.innerText = Response.price;

    var previewProductPrice = document.createElement("h2");
    previewProductPrice.className = "preview-product-price";
    previewProductPrice.innerText = "Price: Rs ";
    previewProductPrice.appendChild(previewPrice);

    var previewProductDescriptionTag = document.createElement("h2");
    previewProductDescriptionTag.className = "preview-product-description-tag";
    previewProductDescriptionTag.innerText = "Description";

    var previewProductDescription = document.createElement("p");
    previewProductDescription.className = "preview-product-description";
    previewProductDescription.innerText = Response.description;

    var previewProductPreviewTag = document.createElement("h2");
    previewProductPreviewTag.className = "preview-product-preview-tag";
    previewProductPreviewTag.innerText = "Product Preview";

    var previewSection = document.createElement("div");
    previewSection.className = "preview-section"

    var addCartBtn = document.createElement("button");
    addCartBtn.className = "add-cart-btn";
    addCartBtn.id = Response.id;
    addCartBtn.onclick = ()=>addToCart(id=Response.id, name=Response.name, brand=Response.brand, price=Response.price,preview=Response.photos[0]);
    addCartBtn.innerText = "Add Cart";
    addCartBtn.style.padding = "10px 20px";
    addCartBtn.style.fontSize = "20px";

    for (var i = 0; i < Response.photos.length; i++) {
        previewSection.innerHTML += `<img src= ${Response.photos[i]} class=preview-images />`;
    }

    imageContainer.appendChild(mainImage);
    productDetailsCover.append(imageContainer, previewProductDetails);
    previewProductDetails.append(previewProductName, previewProductBrandName, previewProductPrice, previewProductDescriptionTag, previewProductDescription, previewProductPreviewTag, previewSection, addCartBtn);

    var previewImages = document.querySelectorAll(".preview-images");
     previewImages[0].classList.add("preview-images-border");

    previewImages.forEach((card) => {
        card.addEventListener("click", function(e){

            for (let i = 0; i < previewImages.length; i++) {
                previewImages[i].classList.remove("preview-images-border");
            }
                mainImage.src = e.target.src;
                e.target.classList.add("preview-images-border");
        })
    });
    

    function addToCart(id, name, brand, price, preview){

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
        
     var clothingLink = document.getElementById("clothing-link");
     clothingLink.onclick = function(){
         location.assign("./index.html#clothing-heading");
     }
    
     var AccessoriesLink = document.getElementById("accessories-link");
     AccessoriesLink.onclick = function(){
         location.assign("./index.html#Accessories-heading");
     }

     
    var cartIcon = document.querySelector(".fa-cart-shopping");

    cartIcon.addEventListener("click", function () {
        location.assign("./cart.html");
    })
    

    var cartLength = JSON.parse(localStorage.getItem("Add Cart"));

    var cartCount = document.getElementById("items-count");

    var count = 0;

    for(let i = 0; i < Object.values(cartLength).length; i++){
        count += Object.values(cartLength)[i].quantity;
    }
    cartCount.innerText = count;


});

