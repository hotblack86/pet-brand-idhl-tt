// Import SCSS
import '../scss/main.scss';

// Import assets
import logo from '../assets/logo.svg';
import bagIcon from '../assets/bag.svg';
import closeIcon from '../assets/close.svg';
import productImgLarge from '../assets/chicken@2x.png';
import productImg from '../assets/chicken.png';

console.log("Logo path:", logo);

// Import cart logic
import { initCart } from './cart';

// Inject images into DOM
document.querySelector('.header__logo-img').src = logo;
document.querySelector('.header__cart-icon').src = bagIcon;
document.querySelector('.cart__close-icon').src = closeIcon;
document.querySelector('.product__image').src = productImgLarge;

// Initialize cart functionality
//initCart();