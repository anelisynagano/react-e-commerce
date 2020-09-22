import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cartArray: [],
      totalPrice: 0,
    }
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    fetch('https://floating-temple-56492.herokuapp.com/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }

  handleAddToCart = (clickedItem) => {
    const { cartArray, totalPrice } = this.state;

    let isInCart = cartArray.find(item => clickedItem.id === item.id);

    if (isInCart) {
      isInCart.quantity++
    } else {
      isInCart = {...clickedItem, quantity: 1}
      this.setState({ cartArray: [...cartArray, isInCart] })
    }

    this.setState({
      totalPrice: totalPrice + clickedItem.product_price
    })
  }

  handleClearCart = () => {
    this.setState({
      cartArray: [],
      totalPrice: 0
    })
  }

  render() {
    const { products, totalPrice, cartArray } = this.state;
    return (
      <div className="App">
        <Navbar totalPrice={totalPrice} />
        <Switch>
          <Route exact path='/' render={() => <Home products={products} />} />
          <Route path='/cart' render={() => <Cart handleClearCart={this.handleClearCart} totalPrice={totalPrice} cartArray={cartArray} />} />
          <Route path='/products/:id' render={(routeProps) => <ProductDetails handleAddToCart={this.handleAddToCart} routeProps={routeProps} products={products} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
