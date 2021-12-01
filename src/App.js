
import NavBar from './components/NavBar';
import ItemListContainer from './components/contenedores/ItemListContainer'
import ItemDetailContainer from './components/contenedores/ItemDetailContainer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Cart from './components/Cart';
 import CartContextProvider from './context/CartContext';


function App() {
  return (
    <div className="App">
      <header className="App-header">
           <CartContextProvider> 
              <BrowserRouter>
                <NavBar/> 
                <Switch>
                   <Route exact path='/' >
                       <ItemListContainer />
                   </Route>
                   <Route exact path='/categoria/:idCategoria'>
                       <ItemListContainer/>
                   </Route>
                   <Route exact path='/detalle/:id'>
                      <ItemDetailContainer/>
                   </Route>
                   <Route exact path='/cart' >
                       <Cart/>
                   </Route>
                </Switch>
             </BrowserRouter>
             
           </CartContextProvider> 

          
      </header>
    </div>
  );
}

export default App;



