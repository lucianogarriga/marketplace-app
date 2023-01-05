import React from 'react';
import CartWidget from '../CartWidget';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './cart.css'

export const Cart = () => {

  const {cart, totalPrice} = useCartContext();

  if(cart.length === 0){
    return (
      <>
        <p className='cart_title'>No hay elementos en el carrito</p>
        <Link to='/'><button className='btn btn-primary'>Ver Tickets</button> </Link>
      </>
    );
  }

  return (
    <div>
      <CartWidget/>
      <h1>CART</h1>
    </div>
  )
}

export default Cart