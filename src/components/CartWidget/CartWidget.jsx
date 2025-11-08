import { useContext } from 'react';
import cartContext from '../../context/cartContext'; 

function CartWidget() {
  const {countItemsInCart} = useContext(cartContext);


  return (
    <div className="cart-widget">
      🛒 
      {countItemsInCart ()}
    </div>
  );
}

export default CartWidget;