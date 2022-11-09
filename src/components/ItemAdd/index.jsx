import React, {useState} from 'react';
import './itemAdd.css';

export const ItemAdd = ({initial, onAdd}) => { 

  const [count, setCount] = useState(initial);

  const increase = () =>{
    setCount(count + 1);
  } 

  return (
    <> 
        <div className='counter'>  
            {/* <span style={{color: "white"}}>{count}</span> */}
            {/* <button disabled={count >= stock} onClick={increase}>+</button> */}
            <button className='btn-add' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemAdd