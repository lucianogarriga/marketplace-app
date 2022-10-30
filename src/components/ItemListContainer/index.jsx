import React from 'react'
import Title from '../Title';
import ItemAdd from '../ItemAdd';

//utilizamos destructuring, para evitar llamar los objetos por cada propiedad (props.texto)

export const ItemListContainer = ({texto}) => {

    const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} NFT al carrito`);
    }

  return (
    <>
        <Title greeting={texto}/>
        <ItemAdd initial={1} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer; 