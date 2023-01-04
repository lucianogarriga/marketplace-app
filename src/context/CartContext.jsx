import React, { useState, useContext } from 'react'

export const CartContext = React.createContext([]);

//We create our own customized hook for export to ItemDetail

export const useCartContext = () => {
    useContext(CartContext);
}

const CartProvider = ({ children }) => {

    // Logic fot Cart
    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart)
    }

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
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider