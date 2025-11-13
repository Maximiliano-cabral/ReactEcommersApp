import { useContext } from 'react';
import  cartContext  from '../../context/CartContext';
import { Link } from 'react-router';

function CartWidget() {
  const {countItemsInCart} = useContext(cartContext);


  return (
    <div className="cart-widget">
      <Link to="/cart"> 
      🛒 {countItemsInCart()}
      </Link>
    </div>
  );
}

export default CartWidget;