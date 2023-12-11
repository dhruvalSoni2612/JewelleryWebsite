onLoad();

function onLoad() {
    displayCategorySection();
    displayGenderSection();
    displayGiftSection();
}


function displayCategorySection() {
    let categoryElement = document.querySelector('.category-img');
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `<div class="img-set"><img src="${item.image}" alt="chain">
        <div class="hovercap">${item.item_name}</div>
        <div class="txt-set"><a href="">Explore</a></div>
    </div>
    `
    });
    categoryElement.innerHTML = innerHTML;
};

function displayGenderSection() {
    let genderElement = document.querySelector('.gender-img');
    let innerHTML = '';
    gender.forEach(tag =>{
        innerHTML += `<div class="gimg-set"><img src="${tag.image}" alt="men">
        <div class="fullcap men">${tag.gender_name}</div>
        <div class="txt-set txt-set2"><a href="">Explore</a></div>
    </div>`
    });
    genderElement.innerHTML = innerHTML;
};

function displayGiftSection() {
    let giftElement = document.querySelector('.gift-img');
    let innerHTML ='';
    gifts.forEach(gift =>{
        innerHTML +=`<div class="one giftcard" id="img1"><a href=""><img src="${gift.image}" alt="birthday"></a>
        </div>`;
    });
    giftElement.innerHTML = innerHTML;
};