// imports
import './App.css'
import './components/Item.css'
import './components/ItemList.css'
import ItemListContainer from './components/ItemListContainer'
function App() {

  return (
    <>
      <header>
        <h1>Scorpion Calzados</h1>
        <nav>
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Categoria</a></li>
            <li><a href="">🛒</a></li>
          </ul>
        </nav>
      </header>
      <ItemListContainer />
    </>
  )
}

export default App
