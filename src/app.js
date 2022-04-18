


const menuBtn = document.querySelector(".menu-btn");
const linksContainer = document.querySelector(".links");
const btnClose = document.querySelector("#btnClose");

const cartBtn = document.querySelector("#cartBtn");
const btnDelete = document.querySelector("#btnDelete");
const bookmarkContainer = document.querySelector(".bookmark");
const bookmarkItemCont = document.querySelector(".bookmark__item");
const bookmarkCheckoutContainer = document.querySelector(".bookmark__checkout");
const emptyCart = document.querySelector(".empty-cart");
const totalOrder = document.querySelector(".totalOrder");
const sumPrice = document.querySelector(".sumPrice");
const cartItems = document.querySelector(".cart__items");


const btnMinus = document.querySelector("#btnMinus");
const btnPlus = document.querySelector("#btnPlus");
const totalItem = document.querySelector("#totalItem");
const addToCart = document.querySelector("#addToCart");

let totalItemValue = 0;
const itemPrice = 125;

menuBtn.addEventListener("click", function () {
  linksContainer.classList.toggle("active");
  // console.log('clicked');
});

btnClose.addEventListener("click", function () {
  linksContainer.classList.toggle("active");
  // console.log('clicked');
});
// console.log('kalp');

//? ----------------swiper js -------------------


// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var slider = new Swiper ('.gallery-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 6, 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

var thumbs = new Swiper ('.gallery-thumbs', {
  slidesPerView: '4',
  spaceBetween: 5,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;

//?------------------------------------------

//?----------- cart logic----------------------------
cartBtn.addEventListener("click", function (e){
  // console.log('clicked');
  bookmarkContainer.classList.toggle("active");
})

btnDelete.addEventListener("click", toggleCartItems);

function toggleCartItems () {
  bookmarkItemCont.classList.toggle("hidden");
  bookmarkCheckoutContainer.classList.toggle("hidden");
  emptyCart.classList.toggle("hidden");
  cartItems.classList.add("hidden");
}

//?----------------------------------------------------

//? btn-minus/plus logic---------------------------

btnMinus.addEventListener("click", function(){

  if(totalItemValue<=0) return;
  totalItemValue-=1;
  totalItem.innerHTML = totalItemValue;
})
btnPlus.addEventListener("click", function(){

  totalItemValue+=1;
  totalItem.innerHTML = totalItemValue;
})

//?--------------------------------------------

//? ---------- addtocart logic ---------------

addToCart.addEventListener("click", function(){
  // console.log('clicked');

  if(totalItemValue===0) return;
  totalOrder.innerHTML = '';
  sumPrice.innerHTML='';
  totalOrder.innerHTML = totalItemValue;
  sumPrice.innerHTML = `$${totalItemValue*itemPrice}`;
  cartItems.innerHTML = totalItemValue;


  removeHiddenClass();


})


function removeHiddenClass(){
  bookmarkItemCont.classList.remove("hidden");
  bookmarkCheckoutContainer.classList.remove("hidden");
  emptyCart.classList.add("hidden");
  cartItems.classList.remove("hidden");

}

//? -----------------------------------------