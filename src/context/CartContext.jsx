import React, { useState, useContext } from 'react'

export const CartContext = React.createContext([]);

//We create our own customized hook for export to ItemDetail

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    console.log('carrito: ', cart);
 
    // Logic for Cart
    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        //we create a new object with all propierties of item + newQuantity
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }
    
    //prev == acumulador
    
    const totalProducts = () => 
        cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    //function to clear cart
    const clearCart = () => setCart([]);

    //function to know if product is in cart
    const isInCart = (id) => 
        cart.find(product => product.id === id) ? true : false;

    //function to remove a product
    const removeProduct = (id) =>
        setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider