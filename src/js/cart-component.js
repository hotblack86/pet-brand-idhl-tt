class SlideOutCart extends HTMLElement {
  constructor() {
    super();

    // Bind methods for cleanup
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleAddToBagClick = this.handleAddToBagClick.bind(this);
  }

  connectedCallback() {
    // Product add-to-bag button
    this.addBtn = document.querySelector(".product__add-btn");
    if (this.addBtn) this.addBtn.addEventListener("click", this.handleAddToBagClick);
    // Close button
    this.closeBtn = this.querySelector(".cart__close-btn");
    if (this.closeBtn) this.closeBtn.addEventListener("click", this.handleCloseClick);
    // Overlay click
    this.overlay = document.querySelector(".cart__overlay");
    if (this.overlay) this.overlay.addEventListener("click", this.handleCloseClick);
    // Continue shopping button
    this.continueShoppingBtn = this.querySelector(".cart__continue-btn");
    if (this.continueShoppingBtn) this.continueShoppingBtn.addEventListener("click", this.handleCloseClick);
    
  }

  disconnectedCallback() {
    if (this.closeBtn) this.closeBtn.removeEventListener("click", this.handleCloseClick);
    if (this.continueShoppingBtn) this.continueShoppingBtn.removeEventListener("click", this.handleCloseClick);
    if (this.overlay) this.overlay.removeEventListener("click", this.handleCloseClick);
    if (this.addBtn) this.addBtn.removeEventListener("click", this.handleAddToBagClick);
  }

  handleCloseClick() {
    this.close();
  }

  handleAddToBagClick() {
    if (!this.addBtn) return;

    // Reset states in case of multiple clicks
    this.addBtn.classList.remove("success", "loading");

    // Start spinner
    this.addBtn.classList.add("loading");

    // Spinner for 0.8s
    setTimeout(() => {
      this.addBtn.classList.remove("loading");
      this.addBtn.classList.add("success"); // Show tick

      // Tick for 0.2s before opening cart
      setTimeout(() => {
        this.open();
      }, 200);
    }, 800);
  }

  open() {
    this.classList.add("cart--open");
    if (this.overlay) this.overlay.classList.add("active");
  }

  close() {
    this.classList.remove("cart--open");
    if (this.overlay) this.overlay.classList.remove("active");

    // Reset button
    if (this.addBtn) this.addBtn.classList.remove("success", "loading");
  }
}

customElements.define("slide-out-cart", SlideOutCart);
