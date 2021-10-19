
import NavBar from './components/NavBar';
import ItemListContainer from './components/contenedores/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <NavBar/>
          <ItemListContainer greeting='hola' />
       
      </header>
    </div>
  );
}

export default App;
