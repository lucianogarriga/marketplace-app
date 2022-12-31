import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

export const Item = ({ info }) => {
  return (

    <div className="col-md-4">
      <div className='m-1 align-items-center'>
        <img className="image p-2" src={info.image} style={{borderRadius: '25px'}}/>
      </div>
      <div className='card-body' style={{textAlign: 'center', alignContent: 'center'}}>
        <p className="card-title">{info.title}</p>
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
        {/* <ItemAdd initial={1} stock={1} onAdd={onAdd} />  */}
      </Link>
    </div>

  )
}

export default Item