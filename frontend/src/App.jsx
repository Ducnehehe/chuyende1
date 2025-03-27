import React, { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOther from './pages/PlaceOther/PlaceOther'
import Footer from './components/Footer/Footer'
import LoginPopu from './components/Login/LoginPopup';

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopu setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/oder' element={<PlaceOther />} />
        </Routes>
      </div>
      <Footer/>
    </>


  )
}

export default App