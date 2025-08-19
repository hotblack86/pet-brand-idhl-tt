class SlideOutCart extends HTMLElement {
  constructor() {
    super();
    this.classList.add("cart"); 
    this.loading = null;
    this.cartItems = null;
  }

  connectedCallback() {
    // Find internal elements
    this.loading = this.querySelector(".loading");
    this.cartItems = this.querySelector(".cart__items");

    // Close button
    const closeBtn = this.querySelector(".cart__close-btn");
    closeBtn.addEventListener("click", () => this.close());
  }

  open() {
    if (this.loading) {
      this.loading.classList.add("active");
    }

    setTimeout(() => {
      if (this.loading) this.loading.classList.remove("active");
      this.classList.add("cart--open");
    }, 1000); // 1-second loading animation
  }

  close() {
    this.classList.remove("cart--open");
  }
}

customElements.define("slide-out-cart", SlideOutCart);
