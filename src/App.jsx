import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import NewArrivals from './pages/NewArrivals';
import Collection from './pages/Collection';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
   <div className='transition-all ease-in-out duration-200'>
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      
      <Footer />
    </Router>
   </div>
  );
};

export default App;
