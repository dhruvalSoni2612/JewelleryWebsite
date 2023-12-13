let cartItemObject;

onLoad();
function onLoad() {
    loadBagItemObjects();
    displayItemHtml();
    displayOrderSummary();
}

function displayOrderSummary() {
    let orderSummaryElement = document.querySelector('.items-summary');
    let totalItem = cartItemObject.length;
    let totalMRP = 0;
    let shipping_fee = 0;

    cartItemObject.forEach(cartItem =>{
        totalMRP += cartItem.price;
        shipping_fee = 150;

    });

    let finalPayment = totalMRP  + shipping_fee;

    orderSummaryElement.innerHTML = `
        <div class="heading-text">ORDER SUMMARY</div>
        <div class="total-quantity">Total Items: ${totalItem}</div>
        <div class="subtotal">
    	    <span class="text">Sub Total</span>
            <span class="value">₹${totalMRP}</span>
        </div>
        <div class="shipping">
            <span class="text">Shipping Fee</span>
            <span class="value">₹ ${shipping_fee}</span>
        </div>
        <div class="total">
            <span class="total-price">TOTAL(Incl of all Taxes.)</span>
            <span class="value">₹${finalPayment}</span>    
        </div>
        <div>
            <button class="placeOrder-btn" onclick="alert('Your Order has been placed Successfilly')">Place Order</button>
        </div>`; 
}


function loadBagItemObjects(){
    cartItemObject = cartItems.map(itemId => {
        for(let i = 0; i < products.length; i++){
            if(itemId == products[i].id){
                return products[i];
            }  
        }
    });
    displayCartIcon();
}
function displayItemHtml(){
    let itemsContainerElement = document.querySelector(".cart-items-container");
    let innerHTML='';

    cartItemObject.forEach(cartItem => {
        innerHTML += generateItemHtml(cartItem); 
        itemsContainerElement.innerHTML = innerHTML;
    });
}

function removeFromCart(itemId) {
    cartItems = cartItems.filter(cartItemId => cartItemId != itemId)
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadBagItemObjects();
    displayCartIcon();
    displayItemHtml();

}
function generateItemHtml(item) {
        return`
        <div class="cart-item-container">
            <div class="left-side">
            <img class="item-image" src="${item.image}" alt="product">
            </div>
            <div class="right-side">
            <p class="product-name">${item.item_name} </p>
            <span class="product-weight">Weight : ${item.weight} g</span>
            <p class='product-price'>₹ ${item.price}</p>
            <div class="action">
                <a href="" onclick = 'removeFromCart(${item.id})' >
                <div class="remove">
                    <span class="material-symbols-outlined remove-icon">
                    delete
                    </span>
                    <div class="remove-text">Remove</div>
                </div>
                </a>
                <span>|</span>
                <a href="">
                <div class="wishlist">
                    <span class="material-symbols-outlined wishlist-icon">
                    heart_plus
                    </span>
                    <div class="wishlist-text"> Move to Wishlist</div>
                </div>
                </a>
            </div>
            </div>
        </div>`;
    }