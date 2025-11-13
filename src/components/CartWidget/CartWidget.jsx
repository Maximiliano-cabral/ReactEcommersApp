import { useContext } from 'react';
import cartContext from '../../context/CartContext';
import { Link } from 'react-router';
import './CartWidget.css';

function CartWidget() {
  const { countItemsInCart } = useContext(cartContext);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        <span className="cart-icon">🛒</span>
        <span className="cart-badge">{countItemsInCart()}</span>
      </Link>
    </div>
  );
}

export default CartWidget;