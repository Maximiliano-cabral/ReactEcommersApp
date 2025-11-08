import { createContext, useState } from 'react';

const cartContext = createContext({ cart: [] });  

// * creamos un custom provider 

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]) 

  function addItem(item) {
    const newCartItem = structuredClone(cartItems)
    newCartItem.push(item)
    setCartItems(newCartItem)
  }


function removeItem (){

}

function clearCart (){
    setCartItems ([]);
}

function countItemsInCart () {
    return cartItems.reduce ((total, item) => total + item.cantidad,0)
}


  return (
    <cartContext.Provider value={{ cart: cartItems, addItem, countItemsInCart }}>
      {props.children}
    </cartContext.Provider>
  )
}

export default cartContext;