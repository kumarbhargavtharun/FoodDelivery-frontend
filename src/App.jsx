
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart';
import {  Route,BrowserRouter as Router, Routes, useRoutes} from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';
import { useState } from 'react';

function App() {
  const [showLogin, setShowLogin]=useState(false)

  
  return  (
    <>
    {showLogin?<LoginPopup  setShowLogin={setShowLogin}/>:<></>}
    <div className="app">

   <Navbar setShowLogin={setShowLogin}/>
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/order' element={<PlaceOrder/>}/>

   </Routes>
   </div>
   
   <Footer/>
   </>
  );
}

export default App;
