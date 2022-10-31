import './app.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
// import About from './components/About/about';

function App(props) {
  
  return(
    <> 
        <NavBar/>  
        <ItemListContainer texto='TU PROXIMO PASAJE EN UN NFT' className='texto'/>
        <ItemDetailContainer/>
    </>
  )
}

export default App;
