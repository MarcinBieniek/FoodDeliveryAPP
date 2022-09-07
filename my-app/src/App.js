import React from 'react';
import { Routes, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';

import MainLayout from './components/views/MainLayout/MainLayout';
import Homepage from './components/pages/Homepage/Homepage';
import ProductPage from './components/pages/ProductPage/ProductPage';
import ProductList from './components/pages/ProductList/ProductList';
import Cart from './components/pages/Cart/Cart';
import SearchPage from './components/pages/SearchPage/SearchPage';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => (
    <main>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/category/:categoryId' element={<ProductList />} />
          <Route path='/breakfast' element={<ProductList />} />
          <Route path='/lunch' element={<ProductList />} />
          <Route path='/dinner' element={<ProductList />} />
          <Route path='/dessert' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </main>
)

export default App;
