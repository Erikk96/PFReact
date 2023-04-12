import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Shop Malanzan"}/>
    </div>
  );
}

export default App;
