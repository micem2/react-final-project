import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteNavbar from './Navbar';
import About from './Aboutpage';
import Home from './Homepage';
import ProductList from './Productpage';
import ProductForm from './ProductForm';
import Product from './Product';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SiteNavbar />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<ProductList />}>
        <Route index element={<p>Select an item for more details</p>} />
          <Route path='new' element={<ProductForm />} />
          <Route path=':productId/edit' element={<ProductForm />} />
          <Route path=':productId' element={<Product />} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
