import { useState } from "react";

function ItemCount() {
    const [contador, setContador] = useState(1);
    const maxValue = 10;
    const minValue = 0;

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

    return (
        <div className="itemcount">
            <button onClick={mas}>+</button>
            <p>{contador}</p>
            <button onClick={menos}>-</button>
        </div>
    )
}

export default ItemCount;