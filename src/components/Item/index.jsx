import React from 'react';
import './item.css';
import ItemAdd from '../ItemAdd';

export const Item = ({onAdd, info}) => {
  return ( 
    <div className="main-container">
        <div> <img src={info.image} className="image"/> 
        </div>
        <p className="title">{info.title}</p>
        <p className="description"> {info.description}</p>
        <div className="details-container">
        <div className="value"> 
            <span>{info.price}</span>
        </div>
        <div className="time"> 
            <span>{info.days}</span>
        </div>
        </div>
        <div className="line"></div>
        <ItemAdd initial={1} stock={1} onAdd={onAdd} /> 
  </div> 
  )
}

export default Item