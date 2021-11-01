

import NavBar from './components/NavBar';
import ItemListContainer from './components/contenedores/ItemListContainer'
import ItemDetailContainer from './components/contenedores/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <NavBar/>
          <ItemListContainer greeting='Productos'></ItemListContainer>
          <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;



