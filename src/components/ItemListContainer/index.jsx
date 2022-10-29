import React from 'react'
import Title from '../Title';
//utilizamos destructuring, para evitar llamar los objetos por cada propiedad (props.texto)
export const ItemListContainer = ({texto}) => {
  return (
    <>
        <Title greeting={texto}/>
    </>
  )
}

export default ItemListContainer; 