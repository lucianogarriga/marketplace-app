import React, {useState, useEffect} from 'react'
import './itemListContainer.css'
import Title from '../Title';
import ItemAdd from '../ItemAdd';
import ItemList from '../ItemList';

const nftickets = [
  {id: 1, image: "https://cdn.audleytravel.com/-/-/79/1012143-cafayate-argentina.jpg", title: "Desde Córdoba a CAFAYATE", description: "Aereo - Cordoba/Cafayate - Ida y Vuelta", price: "0.110 ETH", days: "3 days left"},
  {id: 2, image: "https://4.bp.blogspot.com/-R8v5VMuyOIM/URjZ7c57-nI/AAAAAAAAAWE/oL04Bw56CXU/s1600/grande+10.jpg", title: "Desde Córdoba a SALINAS GRANDES", description: "Aereo - Cordoba/Salinas Grandes - Ida y Vuelta", price: "0.122 ETH", days: "5 days left"},
  {id: 3, image: "https://th.bing.com/th/id/R.6793515d90b27662c252a74a082c6ab1?rik=wQuXO3mZru4h4w&riu=http%3a%2f%2fturismo.org%2fwp-content%2fuploads%2f2017%2f08%2fInvierno-en-Buenos-Aires.png&ehk=Aq0lX3zox341Y7hQ3dVANBTAXy0Dlml48e49ZHQfPtg%3d&risl=&pid=ImgRaw&r=0", title: "Desde Córdoba a BUENOS AIRES", description: "Aereo - Cordoba/Buenos Aires - Ida y Vuelta", price: "0.182 ETH", days: "6 days left"},
  {id: 4, image: "https://8ut3vnmqb148491id57v2rl2-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/City-Center-Cordoba-Argentina.jpg", title: "Desde Buenos Aires a CORDOBA", description: "Aereo - Buenos Aires/Cordoba - Ida y Vuelta", price: "0.147 ETH", days: "9 days left"}
]

//utilizamos destructuring, para evitar llamar los objetos por cada propiedad (props.texto)

export const ItemListContainer = ({texto}) => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   const getData = new Promise(resolve =>{
    //     setTimeout(() => {
    //       resolve(nftickets);
    //     }, 2000);
    //   });
    //   getData.then(res => setData(res));
    // }, [])

    const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} NFT al carrito`);
    }

  return (
    <>
        <Title greeting={texto}/>
        <ItemAdd initial={1} stock={1} onAdd={onAdd}/>
        {/* <ItemList data={data}/> */}
    </>
  )
}

export default ItemListContainer; 