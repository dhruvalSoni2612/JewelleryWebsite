let cartItems;

onLoad();

function onLoad(){
    let cartItemStr = localStorage.getItem('cartItems');
    cartItems = cartItemStr ? JSON.parse(cartItemStr) : [];
    displayJewelleryItems();
    displayCartIcon();

}

function displayJewelleryItems() {
    let containerElement = document.querySelector('.products-container');
    let innerHTML = '';
    products.forEach(product => {
        innerHTML += `
        <div class="product-container">
            <div class="product-details">
                <img class='product-image' src='${product.image}' alt="product">
                <a href=""><span class="material-symbols-outlined wishlist">
                    favorite  
                    </span></a>
                <p class="product-name">${product.item_name}</p>
                <p class="product-price">₹${product.price}</p>
                <button class="btn-add-cart" onclick="addToCart(${product.id})"><p class="product-cart">Add to cart </p></button>
            </div>
        </div>`;
    });
    containerElement.innerHTML = innerHTML;
};

function addToCart(productId){
    cartItems.push(productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartIcon();
}

function displayCartIcon(){
    let cartItemCountElement = document.querySelector('.cart-item-count');
    if(cartItems.length > 0){
        cartItemCountElement.style.visibility = 'visible';
        cartItemCountElement.innerText = cartItems.length;
    }else{
        cartItemCountElement.style.visibility = 'hidden';

    }
}


