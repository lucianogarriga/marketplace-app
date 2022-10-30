import React from 'react'
import './itemAdd.css'

export const ItemAdd = () => {
  return (
    <>
    <body>
    <main className="main-container">
        <div className="image">
        <div className="eye-image"></div>
        </div>

        <h1 className="title">Equilibrium #3429</h1>
        <p className="description"> Our Equilibrium collection promotes balance and calm.</p>
        
        <div className="details-container">
        <div className="value"> 
            <span>0.041 ETH</span>
        </div>
        <div className="time"> 
            <span>3 days left</span>
        </div>
        </div>
        <div className="line"></div>
        <div className='counter'> 
            <button className='btn-add'>Agregar al carrito</button>
        </div>
  </main>
  </body>
  </>
  )
}

export default ItemAdd