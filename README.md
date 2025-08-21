# Shopify Front End Developer Test – Pet Brand Landing Page

## Overview
This test is for a fictional pet brand requiring a responsive landing page with **add to bag** functionality. When the **“Add to Bag”** button is clicked, a slide-out cart appears from the right.   

Design assets for **desktop and mobile** can be found in the `assets` folder.  

---

## Requirements (for reference)

- Mobile-first build  
- Demonstrate the use of a task runner such as Webpack  
- Demonstrate the use of precompiled styles (SASS)  
- Use a naming convention such as BEM for CSS  
- Implement the slide-out cart functionality using JavaScript  
- Create a 1-second loading animation before the cart opens  
- Use animations for opening/closing the cart  
- Ensure the slide-out cart is scrollable on mobiles and tablets  
- Ensure cross-browser compatibility  
- Build reusable components usable in other areas of the website  
- Use Roboto and Open Sans fonts from Google Fonts  

**Do not:**  
- Use any frameworks for styling or functionality (e.g., Bootstrap, React)  
- Use third-party modal plugins (e.g., Lightbox)  

---

## Instructions

1. **Clone the repository**  

```bash
git clone https://github.com/hotblack86/pet-brand-idhl-tt.git
cd pet-brand-idhl-tt
```

2. **Install dependencies**  

```bash
npm install
```

3. **Start the development server**

```bash
npm run start
```

- The development server will be available at http://localhost:8080
- Changes to the code will automatically reload the page

4. **Build the project**

```bash
npm run build
```

- Generates minified CSS and JS in the dist/ folder
- The dist/ folder can be deployed directly to a web server


## Notes
- The slide-out cart is implemented as a reusable web component

- SCSS variables are used for colors, spacing, and typography

- The “Add to Bag” button features a 1-second spinner loading animation and tick confirmation before the cart slides out

- Tested on desktop, iOS, and Android for responsiveness and cross-browser support


## Additional Enhancements Beyond Requirements

While the test requirements allowed for a pre-populated cart, the following improvements have been implemented to demonstrate a more dynamic and reusable component:

- **Dynamic Cart Functionality**
  - The cart is initially empty.
  - The product can be added via the "Add to Bag" button.
  - The product can be removed from the cart.
  - Quantity and subtotal update dynamically based on user interactions.

- **Flexible Cart Interaction**
  - The cart can be opened immediately by clicking the header cart icon.
  - The cart can be closed by clicking either the overlay or the "Continue Shopping" button.


## Technologies Used

- Javascript ES6 with Web Components - for interactive cart component
- SASS - for modular, reusable styling
- Webpack - for bundling and asset management