// imports
import './App.css'
import './components/Item/Item.css'
import './components/ItemList/ItemList.css'
import './components/NavBar/NavBar.css';
import  './components/ItemCount/ItemCount.css';
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route  } from 'react-router';
import {CartContextProvider} from './context/CartContext'; 
import CartContainer from './components/CartContainer/CartContainer';


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detalle/:idParam" element= { <ItemDetailContainer />}/>
        <Route path="/category/:catParam" element={<ItemListContainer greeting="Categorias..." />}/>
        <Route path= "/cart" element= {< CartContainer />} />
        <Route path="*" element={<div><h1>Error 404: no encontramos resultados</h1></div>}/>
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}


export default App
