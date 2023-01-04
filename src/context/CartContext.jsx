import React, { useState } from 'react'

export const CartContext = React.createContext([]);
console.log('Cart Context: ', CartContext);

const CartProvider = ({ children }) => {

    // LOGICA PARA EL CARRITO
    const [cart, setCart] = useState([]);

    //function to clear cart
    const clearCart = () => setCart([]);

    //function to know if product is in cart
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    //function to remove a product
    const removeProduct = (id) =>{
        setCart(cart.filter(product => product.id !== id));
    }

    return (
        <CartContext.Provider value='NFT'>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider