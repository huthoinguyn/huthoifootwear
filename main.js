// Cart
const cart = document.querySelector("#cart");
const closeIcon = document.querySelector("#cart .close__icon");
const cartIcon = document.querySelector("#header .cart__icon");
closeIcon.addEventListener("click", handleCloseCart);
cartIcon.addEventListener("click", function (event) {
  cart.style.width = "25%";
  event.stopPropagation();
});
document.body.addEventListener("click", handleCloseCart);
function handleCloseCart(event) {
  cart.style.width = 0;
}
// Add to cart
const cartNoti = `
<div class="cart__noti">
      <h3 class="title">Add to Cart</h3>
      <p class="status">Success</p>
    </div>
`;
const addCarts = [...document.querySelectorAll("#content .product .addtocart")];
addCarts.forEach((item) => item.addEventListener("click", handleAddtoCart));
function handleAddtoCart(event) {
  document.body.insertAdjacentHTML("afterbegin", cartNoti);
}
// Slider
const leftIcon = document.querySelector("#slider .left__icon");
const rightIcon = document.querySelector("#slider .right__icon");

leftIcon.addEventListener("click", handlePrevImage);
rightIcon.addEventListener("click", handleNextImage);
const images = [
  "./img/wk7_031322_size_1_desktop_vans.webp",
  "./img/wk03_021722_site_ads_rewards_spring_seasonal_preview_story1_us_ca_en_v1_desktop_sign-in.webp",
  "./img/wk7_031322_size_1_desktop_nikeairmax_wear_more_air.webp",
  "./img/wk9_032722_size_1_desktop_nike.webp",
  "./img/wk9_032722_size_1_desktop_vans.webp",
  "./img/wk9_032722_size_1_desktop_crocs.webp",
];
const slider = document.querySelector("#slider");
let index = 0;
Number(index);
function handleChangeImage(randomImage) {
  slider.style.backgroundImage = `url(${randomImage})`;
}
function handleNextImage() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  const randomImage = images[index];
  handleChangeImage(randomImage);
}
function handlePrevImage() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  const randomImage = images[index];
  handleChangeImage(randomImage);
}
setInterval(handleNextImage,3000);