import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Router>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404  NOT FOUND</h1>}/>
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;



//<ItemListContainer greeting={"Bienvenidos a Shop Malanzan"}/>
//<ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log('Cantidad agregada',quantity)}/>
//<Item />
