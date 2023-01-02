import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import React from 'react'; 
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
          {/* Cada endpoint - Routes - Route */}
          <Routes>
            <Route path="/" element={<ItemListContainer texto="TU VIAJE AL INSTANTE" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
