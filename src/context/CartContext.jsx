import React from 'react'

export const CartContext = React.createContext([]);
console.log('Cart Context: ', CartContext);

const CartProvider = ({ children }) => {

    // LOGICA PARA EL CARRITO


    return (
        <CartContext.Provider value='NFT'>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider