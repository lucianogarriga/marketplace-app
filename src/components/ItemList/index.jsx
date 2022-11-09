import React from 'react';
import Item from '../Item';

export const ItemList = ({onAdd, data = []}) => {
  return (
        data.map(nfticket => <Item key={nfticket.id} info={nfticket} onAdd={onAdd} />) 
  )
}

export default ItemList