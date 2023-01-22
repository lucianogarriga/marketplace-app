import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './cart.css'
import ItemCart from '../ItemCart';

const Cart = () => {

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
    <>  
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p>
        Total: {totalPrice()}
      </p>
    </>
  )
}

export default Cart