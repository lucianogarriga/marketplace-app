import React, { useContext } from 'react';
import './item.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const Item = ({ info }) => {
  const nombre = useContext(CartContext);
  console.log('Item: ', nombre);

  return (

    <div className="col-md-4">
      <div className='m-2 align-items-center'>
        <img className="image" src={info.image} style={{ borderRadius: '25px' }} />
      </div>
      <div className='card-body m-1' style={{ textAlign: 'center', alignContent: 'center' }}>
        <p className="card-title m-3 fw-bold">{info.title}</p>
        <div className="details-container">
          <div className="value">
            <span>{info.price}</span>
          </div>
          <div className="time">
            <span>{info.days}</span>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <Link to={`/detail/${info.id}`}>
        <button className='btn btn-primary m-2'>Ver mas</button>
      </Link>
    </div>

  )
}

export default Item