// imports
import './App.css'
import './components/Item.css'
import './components/ItemList.css'
import './components/NavBar.css';
import  './components/ItemCount.css';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route  } from 'react-router';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route  path="/detalle/:id" element= { <ItemDetailContainer />}/>
        <Route path="/category/:catParam" element={<ItemListContainer greeting="Categorias..." />}/>
        <Route path="*" element={<div><h1>Error 404: no encontramos resultados</h1></div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
