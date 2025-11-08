import { useState,useContext } from "react";
import  cartContext  from "../../context/CartContext";




function ItemCount({product}) {
    
    const [contador, setContador] = useState(1);
    const maxValue = 10;
    const minValue = 1;
    const { addItem } = useContext (cartContext)

    function mas() {
        if (contador < maxValue) {
            setContador(contador + 1);
        }
    }

    function menos() {
        if (contador > minValue) {
            setContador(contador - 1);
        }
    }

    function addToCart () {
        addItem ({...product, cantidad: contador })
    }

    return (
    <div className="itemcount">
        <div className="counter-controls">
        <button onClick={menos}>-</button>
        <p>{contador}</p>
        <button onClick={mas}>+</button>
    </div>
    <button onClick={addToCart}>Agregar</button>
</div>
    )
}

export default ItemCount;