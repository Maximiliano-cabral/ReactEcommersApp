import { useContext, useState } from 'react';
import { useNavigate } from 'react-router'; 
import cartContext from '../../context/CartContext';
import '../CartContainer/CartContainer.css';
import { creatBuyOrder } from '../../data/FirestoreService';
import Checkout from '../CheckoutForm/CheckoutForm';

function CartContainer() {
  const { cart, clearCart, removeItem, totalPrice } = useContext(cartContext);
  const [orderCreated, setOrderCreated] = useState(false);

  const navigate = useNavigate(); 

  async function handleCheckout(data) {
    const orderData = {
      buyer: data,
      items: cart,
      total: totalPrice(),
      date: new Date(),
    };
    const response = await creatBuyOrder(orderData);
    alert(`gracias por tu compra. este es tu id de compra: ${response.id}`);
    setOrderCreated(response.id);
    clearCart();
  }

  if (orderCreated) {
    return (
      <section className="success-card">
        <h2 className="success-title">¡Gracias por tu compra!</h2>
        <p className="success-text">
          Tu número de orden es: <span className="success-id">{orderCreated}</span>
        </p>
        <button className="btn-total" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </section>
    );
  }

  return (
    <section className="cart-container">
      <h1>Tu carrito de compras</h1>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <button className="clear-cart-btn" onClick={clearCart}>
            Vaciar carrito
          </button>

          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img width="150" src={item.img} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button
                  className="remove-item-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <strong>Sub total: ${totalPrice().toFixed(2)}</strong>
          </div>
          <hr />
          <div>
            Total de tu compra: ${totalPrice().toFixed(2)}
            <Checkout handleCheckout={handleCheckout} />
          </div>
        </>
      )}
    </section>
  );
}

export default CartContainer;
