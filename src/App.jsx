import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing'; // Adjust the path if necessary
import NewArrivals from './pages/NewArrivals';
import Product from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
const App = () => {
  return (
   <div className='transition-all ease-in-out duration-200'>
    <Router>
      <Header cartItems={cartItems}/>
      
      <Routes>
        <Route path="/"  element={<Landing addToCart={addToCart} />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />

      </Routes>
      
      <Footer />
    </Router>
   </div>
  );
};

export default App;
