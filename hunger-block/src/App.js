import React from 'react';
import './App.css';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';
import Shop from './pages/shop';
import SingleProduct from './pages/SingleProduct';
import Customer_login from './forms/Customer_login';
import Customer_signup from './forms/Customer_signup';
import Restaurant_add from './forms/Restaurant_add';
import Restaurant_listing from './forms/Restaurant_listing';

function App() {
  return (
    <div className="App">
      <CheckOut />
      <Home />
      <Shop />
      <Cart />
      <SingleProduct />
      <Customer_login />
      <Customer_signup />
      <Restaurant_add />
      <Restaurant_listing />
      
    </div>
  );
}

export default App;
