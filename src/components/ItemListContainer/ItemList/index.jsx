import React from 'react';
import Item from '../../Item'

export const ItemList = ({data = []}) => {
  return (
        data.map(nfticket => <Item key={nfticket.id} info={nfticket}/>) 
  )
}

export default ItemList