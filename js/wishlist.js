let wishlistItemObject;
loadWishlistItemObjects();
displayWishlistItems();

function loadWishlistItemObjects(){
    wishlistItemObject = wishlistItem.map(itemId => {
        for(let i = 0; i < products.length; i++){
            if(itemId == products[i].id){
                return products[i];
            }  
        }
    });
}
function displayWishlistItems() {
    let wishlistElement = document.querySelector('.products-container');
    let innerHTML = '';
    wishlistItemObject.forEach(product => {
        innerHTML += generateItemHtml(product) ;
    });
    wishlistElement.innerHTML = innerHTML;
};

function removeFromWishlist(itemId) {
    wishlistItem = wishlistItem.filter(wishlistItemId => wishlistItemId != itemId)
    localStorage.setItem('wishlistItem', JSON.stringify(wishlistItem));
    loadWishlistItemObjects();
    displayWishlistItems();
    

}

function generateItemHtml(item) {
    return`<div class="product-container">
    <div class="product-details">
        <img class='product-image' src='${item.image}' alt="product">
        <a href="#" onclick='removeFromWishlist(${item.id})' ><span class="material-symbols-outlined wishlist">
        favorite  
        </span></a>
        <p class="product-name">${item.item_name}</p>
        <p class="product-price">₹${item.price}</p>
        <button class="btn-add-cart" onclick="addToCart(${item.id})"><p class="product-cart">Add to cart </p></button>
    </div>
</div>`;
}
