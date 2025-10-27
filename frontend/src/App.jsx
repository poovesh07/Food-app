import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Card from './pages/Card/Card';
import Placeorder from './pages/Placeorder/Placeorder';
import Fooditem from './components/Fooditem/Fooditem';
import Footer from './components/Footer/Footer';
import Loginpopup from './components/Loginpopup/Loginpopup';

const App = () => {

  const [showlogin,setshowLogin]=useState(false)
  return (
    <>
    {showlogin?<Loginpopup setshowLogin={setshowLogin}/>: <></>}
      <div className='app'>
        <Navbar setshowLogin ={setshowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Card />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
          </>
  );
};

export default App;
