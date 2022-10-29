import './app.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
// import About from './components/About/about';

function App(props) {
  
  return(
    <> 
        <NavBar/>  
        <ItemListContainer texto='NFT MARKETPLACE'/>
    </>
  )
}

export default App;
