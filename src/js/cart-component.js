import productImgCart from '../assets/chicken.png';

class SlideOutCart extends HTMLElement {
  constructor() {
    super();

    // Cart state
    this.items = [];

    // Bind methods for cleanup
    this.handleAddToBagClick = this.handleAddToBagClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleContinueClick = this.handleCloseClick.bind(this);
    this.handleHeaderCartClick = this.handleHeaderCartClick.bind(this);
  }

  connectedCallback() {
    // DOM elements
    this.cartItems = this.querySelector(".cart__items");
    this.addBtn = document.querySelector(".product__add-btn");
    this.headerCartBtn = document.querySelector(".header__cart-btn");
    this.overlay = document.querySelector(".cart__overlay");
    this.closeBtn = this.querySelector(".cart__close-btn");
    this.continueBtn = this.querySelector(".cart__continue-btn");
        
    // Event listeners
    if (this.addBtn) this.addBtn.addEventListener("click", this.handleAddToBagClick);
    if (this.headerCartBtn) this.headerCartBtn.addEventListener("click", this.handleHeaderCartClick);
    if (this.closeBtn) this.closeBtn.addEventListener("click", this.handleCloseClick);
    if (this.overlay) this.overlay.addEventListener("click", this.handleCloseClick);
    if (this.continueBtn) this.continueBtn.addEventListener("click", this.handleCloseClick);
    
  }

  disconnectedCallback() {
    this.closeBtn?.removeEventListener("click", this.handleCloseClick);
    this.continueBtn?.removeEventListener("click", this.handleCloseClick);
    this.overlay?.removeEventListener("click", this.handleCloseClick);
    this.headerCartBtn?.removeEventListener("click", this.handleHeaderCartClick);
    this.addBtn?.removeEventListener("click", this.handleAddToBagClick);
  }

  handleHeaderCartClick() {
    this.open();
  }

  handleCloseClick() {
    this.close();
  }

  handleAddToBagClick() {
    if (!this.addBtn) return;

    // Product (hardcoded for demo_purposes)
    const product = {
      id: "product-123",
      title: "Natures Menu Dog Food Can Chicken",
      price: 22.81,
      quantity: 1,
      image: productImgCart
    };

    // Add item
    const existingProduct = this.items.find(i => i.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.items.push(product);
    }

    // Spinner/tick animation
    this.addBtn.classList.remove("success", "loading");
    this.addBtn.classList.add("loading");

    setTimeout(() => {
      this.addBtn.classList.remove("loading");
      this.addBtn.classList.add("success");

      // Tick visible for 0.2s then open cart
      setTimeout(() => {
        this.renderCart();
        this.open();
      }, 200);
    }, 800);
  }

  renderCart() {
    if (!this.cartItems) return;
    this.cartItems.innerHTML = "";

    this.items.forEach((item, index) => {
      const itemEl = document.createElement("div");
      itemEl.classList.add("cart__item");

      itemEl.innerHTML = `
        <div class="cart__item__image-container">
          <img src="${item.image}" alt="${item.title}" class="cart__item__image">
        </div>
        <div class="cart__item__info">
          <h2 class="cart__item__title">${item.title}</h2>
          <p class="cart__item__price">£${item.price.toFixed(2)}</p>
          <p class="cart__item__quantity">Quantity: ${item.quantity}</p>
          <button class="cart__item__remove">REMOVE</button>
        </div>
      `;

      // Remove product
      const removeBtn = itemEl.querySelector(".cart__item__remove");
      if (removeBtn) removeBtn.addEventListener("click", () => {
        this.items.splice(index, 1);
        this.renderCart();
      });

      this.cartItems.appendChild(itemEl);
    });

    this.updateSubtotal();
  }

  updateSubtotal() {
    const subtotalEl = this.querySelector(".cart__total-price");
    if (!subtotalEl) return;

    const subtotal = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    subtotalEl.textContent = `£${subtotal.toFixed(2)}`;
  }

  open() {
    this.classList.add("cart--open");
    if (this.overlay) this.overlay.classList.add("active");
    this.dispatchEvent(new CustomEvent('cart-opened'));
  }

  close() {
    this.classList.remove("cart--open");
    if (this.overlay) this.overlay.classList.remove("active");
    this.addBtn?.classList.remove("success", "loading");
    this.dispatchEvent(new CustomEvent('cart-closed'));
  }
}

customElements.define("slide-out-cart", SlideOutCart);
