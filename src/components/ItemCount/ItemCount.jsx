import { useState,useContext} from "react";
import  cartContext  from "../../context/CartContext";




function ItemCount({product}) {
    
    const [count, setCount] = useState(1);
    const maxValue = 10;
    const minValue = 1;
    const { addItem } = useContext (cartContext)

    function mas() {
        if (count < maxValue) {
            setCount(count + 1);
        }
    }

    function menos() {
        if (count > minValue) {
            setCount(count - 1);
        }
    }

    function addToCart () {
        addItem ({...product, quantity: count})
    }

    return (
    <div className="itemcount">
        <div className="counter-controls">
        <button onClick={menos}>-</button>
        <p>{count}</p>
        <button onClick={mas}>+</button>
    </div>
        <button onClick={addToCart}>agregar</button>
    
</div>
    )
}

export default ItemCount;