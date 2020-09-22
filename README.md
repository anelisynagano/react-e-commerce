1. create components: Home, Cart, ProductDetails and create the routes;

2. create Navbar component and have it navigate to the correct routes:
- '/' to Home.js
- '/cart' to Cart.js
- '/products/:id' to ProductDetails.js

3. fetch from the API https://floating-temple-56492.herokuapp.com/products and to each element on the array, render a ProductCard component. You may need a ProductsList component to help you;

4. link each ProductCard to navigate to the correct route according to the id;

5. on ProductDetails component, show only the content of the object that the id will match with the id from the URL (look at the props that you have access to with Route component from react-router-dom)

6. when clicking on Add to Cart button on ProductDetails, it adds the product you clicked to a cartArray on the state;

7. to each element on the cartArray, render a CartItem.js (from Cart.js component)

8. if item already on cartArray, don't add it multiple times, instead add a property *quantity* to the item and add one when clicked on.