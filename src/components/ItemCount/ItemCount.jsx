import { useState, useContext } from "react";
import cartContext from "../../context/CartContext";

function ItemCount({ product }) {
  const { addItem } = useContext(cartContext);
  const maxValue = product.stock || 0;
  const minValue = 1;

  const [count, setCount] = useState(maxValue > 0 ? minValue : 0);

  const mas = () => {
    if (count < maxValue) setCount(prev => prev + 1);
  };

  const menos = () => {
    if (count > minValue) setCount(prev => prev - 1);
  };

  const addToCart = () => {
    if (count < 1 || maxValue < 1) return;
    addItem({ ...product, quantity: count });
  };

  if (maxValue === 0)
    return <p className="no-stock">Sin stock disponible</p>;

  return (
    <div className="itemcount">
      <div className="counter-controls">
        <button onClick={menos} disabled={count <= minValue}>−</button>
        <p>{count}</p>
        <button onClick={mas} disabled={count >= maxValue}>+</button>
      </div>
      <button className="btn" onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;