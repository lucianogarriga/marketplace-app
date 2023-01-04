import React, { useState} from 'react';
import ItemAdd from '../../Item/ItemAdd';
import { Link } from 'react-router-dom';
import {useCartContext} from '../../../context/CartContext';

export const ItemDetail = ({ data }) => {

  const [goCart, setGoCart] = useState(false);
  //Import useCartContext and we use it
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoCart(true);
    //'data' is the object that the user chose
    addProduct(data,quantity);
    console.log(`Agregaste ${quantity} NFT al carrito`);
  }

  return (
    <div className='container my-1 py-1'>
      <div className='row' style={{ textAlign: 'justify', margin: '2rem' }}>
        <div className='col-md-5 d-flex justify-content-center mx-auto' style={{ marginTop: '1rem' }}>
          <img className='p-3' style={{ borderRadius: '25px' }} src={data[0]?.image} alt={data[0]?.title} height='300px' />
        </div>
        <div className='col-md-5 d-flex flex-column justify-content-center'>
          <h3 className='display-8 m-3  fw-bold' style={{ textAlign: 'center', color: 'lightgray' }}>{data[0]?.title}</h3>
          <h5 className='m-3 justify-content-justify' style={{ textAlign: 'center', color: 'lightgray' }}> Descripcion: {data[0]?.description}</h5>
          <div style={{ textAlign: 'center' }}>
            <h5 style={{ color: 'white' }}>Precio: {data[0]?.price} {data[0]?.coin}</h5>
            {
              goCart
                ? <Link to='/cart'><button className='btn btn-outline-info'>Terminar compra</button> </Link>
                : <ItemAdd initial={1} stock={1} onAdd={onAdd} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;