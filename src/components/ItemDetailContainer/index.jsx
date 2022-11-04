import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'

const nftickets =   
  {id: 1, image: "https://cdn.audleytravel.com/-/-/79/1012143-cafayate-argentina.jpg", title: "Desde Córdoba a CAFAYATE", description: "Aereo - Cordoba/Cafayate - Ida y Vuelta", price: "0.110 ETH", days: "3 days left"}; 

export const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  useEffect(() =>{
    const getData = new Promise(resolve => {
      setTimeout(()=> {
        resolve(nftickets);
      }, 2500);
    });
    getData.then(res => setData(res));
  }, [])

  // return (
  //   <ItemDetail data={data}/>
  // )
}

export default ItemDetailContainer