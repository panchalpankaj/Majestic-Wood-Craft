import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Contactus from './Component/Contactus';
import Product from './Component/Product';

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
