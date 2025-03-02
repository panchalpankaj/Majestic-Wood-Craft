import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Contactus from './Component/Contactus';
import Product from './Component/Product';
import Projects from './Component/Projects';
import ProjectDetail from './Component/ProjectDetail';

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path="/projects/:id" element={<ProjectDetail />} /> 
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
