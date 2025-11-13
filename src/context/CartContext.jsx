import { createContext, useState } from 'react';

const cartContext = createContext({ cart: [] });  

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]) 

  function addItem(item) {
    const exists = cartItems.some(cartItem => cartItem.id === item.id);
    if (exists) {
      const newCartItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: (cartItem.quantity || 1) + (item.quantity || 1)
          };
        }
        return cartItem;
      });
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: item.quantity || 1 }]);
    }
  }
  

  function removeItem(id) {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  }

  function clearCart() {
    setCartItems([]);
  }

  function countItemsInCart() {
    let totalItems = 0;
    cartItems.forEach((item) => totalItems += item.quantity) 
    return totalItems;
  }

  
  function totalPrice() {
    let total = 0;
    for (const item of cartItems) {
      total += (parseFloat(item.price) || 0) * (item.quantity || 1);
    }
    return total;
  }
  

  return (
    <cartContext.Provider value={{ 
      cart: cartItems, 
      addItem, 
      countItemsInCart,
      removeItem,
      clearCart,
      totalPrice
    }}>
      {props.children}
    </cartContext.Provider>
  )
}

export default cartContext;