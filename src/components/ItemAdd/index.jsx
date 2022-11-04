import React from 'react';
import './itemAdd.css';

export const ItemAdd = ({initial, onAdd}) => { 

  return (
    <> 
        <div className='counter'> 
            <button className='btn-add' onClick={() => onAdd(initial)}>Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemAdd