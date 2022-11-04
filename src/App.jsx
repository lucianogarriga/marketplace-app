import './app.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() { 
  return(
    <>
      <BrowserRouter>
        <NavBar/>  
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/detalle" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
