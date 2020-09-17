import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
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

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home products={products} />} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' render={(routeProps) => <ProductDetails routeProps={routeProps} products={products} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
