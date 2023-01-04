import React, { useState } from 'react'

export const CartContext = React.createContext([]);
console.log('Cart Context: ', CartContext);

const CartProvider = ({ children }) => {

    // LOGICA PARA EL CARRITO
    const [cart, setCart] = useState([]);

    //funcion para vaciar el carrito
    const clearCart = () => setCart([]);

    //funcion p/ saber si un producto esta en el carrito
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }



    return (
        <CartContext.Provider value='NFT'>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider