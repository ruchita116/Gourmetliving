import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import { Provider } from "react-redux"
import Footer from "./components/pages/Footer";
import Store from "./components/slice/Store";
import Contactus from "./components/pages/Contactus";
import Bestseller from "./components/pages/Bestseller";
import Singleproduct from "./components/pages/Singleproduct"
import Cart from "./components/pages/Cart";


const App = () => {
  return (
    <div>
   
   <Provider store={Store}>
  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contactus" element={<Contactus/>}/>
<Route path="Bestseller" element={<Bestseller/>}/>
<Route path='demo/:id' element={<Singleproduct/>}/>
<Route path='bestseller/demo/:id' element={<Singleproduct/>}/>
<Route path='Cart' element={<Cart/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>

    </Provider>


    </div>
  
  )
}

export default App

