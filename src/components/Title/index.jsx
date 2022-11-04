import React from 'react'

export const Title = ({greeting}) => {
 
  return (
    <>
      <h1 style={{textAlign: "center", margin: 10, padding: 10}}>{greeting}</h1>
    </>
  )
}

export default Title