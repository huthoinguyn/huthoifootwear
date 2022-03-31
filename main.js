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
const sliderImages = [];
const images = [
  "./img/wk03_021722_site_ads_rewards_spring_seasonal_preview_story1_us_ca_en_v1_desktop_sign-in.webp",
  "./img/wk7_031322_size_1_desktop_nikeairmax_wear_more_air.webp",
  "./img/wk7_031322_size_1_desktop_vans.webp",
  "./img/wk9_032722_size_1_desktop_nike.webp",
  "./img/wk9_032722_size_1_desktop_vans.webp",
  "./img/wk9_032722_size_1_desktop_crocs.webp",
];
const slider = document.querySelector("#slider");
let lastImage;
function handleChangeImage(event) {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  if (randomImage != lastImage) {
    slider.style.backgroundImage = `url(${randomImage})`;
  }
  lastImage = randomImage;
}
setInterval(handleChangeImage, 4000);
