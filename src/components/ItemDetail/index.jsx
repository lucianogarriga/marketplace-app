import React from 'react';
import ItemAdd from '../ItemAdd';

export const ItemDetail = ({data}) => {

  const onAdd = (quantity) =>{
    console.log(`Agregaste ${quantity} NFT al carrito`);
}

  return (
    <div className='container'>
      <div className='detail'>
        <img className='detail__image' src={data.image} alt="" />
        <div className='content'>
          <h1>{data.title}</h1>
          <ItemAdd initial={1} stock={1} onAdd={onAdd}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;