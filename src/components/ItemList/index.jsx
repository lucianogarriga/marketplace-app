import React from 'react';
import Item from '../Item';

export const ItemList = ({data = []}) => {
  return (
        data.map(nftickets => <Item key={nftickets.id} info={nftickets}/>) 
  )
}

export default ItemList