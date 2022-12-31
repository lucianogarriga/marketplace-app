import React, { useState, useEffect } from 'react'
import './itemListContainer.css'
import Title from '../Title';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';

const nftickets = [
  { id: 1, image: "https://cdn.audleytravel.com/-/-/79/1012143-cafayate-argentina.jpg", title: "CORDOBA - CAFAYATE", description: "Aereo - Cordoba/Cafayate - Ida y Vuelta", price: "0.110 ETH", days: "3 days left", category: "tickets" },
  { id: 2, image: "https://4.bp.blogspot.com/-R8v5VMuyOIM/URjZ7c57-nI/AAAAAAAAAWE/oL04Bw56CXU/s1600/grande+10.jpg", title: "CORDOBA - SALINAS", description: "Aereo - Cordoba/Salinas Grandes - Ida y Vuelta", price: "0.122 ETH", days: "5 days left", category: "tickets" },
  { id: 3, image: "https://th.bing.com/th/id/R.6793515d90b27662c252a74a082c6ab1?rik=wQuXO3mZru4h4w&riu=http%3a%2f%2fturismo.org%2fwp-content%2fuploads%2f2017%2f08%2fInvierno-en-Buenos-Aires.png&ehk=Aq0lX3zox341Y7hQ3dVANBTAXy0Dlml48e49ZHQfPtg%3d&risl=&pid=ImgRaw&r=0", title: "CORDOBA - BUENOS AIRES", description: "Aereo - Cordoba/Buenos Aires - Ida y Vuelta", price: "0.182 ETH", days: "6 days left", category: "tickets" },
  { id: 4, image: "https://i0.wp.com/barilocheparabrasileiros.com.br/wp-content/uploads/2020/08/Guia-de-Inverno.jpeg?resize=730%2C730&ssl=1", title: "CORDOBA - BARILOCHE", description: "Aereo - Cordoba/Bariloche - Ida y Vuelta + Hospedaje 5 noches", price: "0.543 ETH", days: "2 days left", category: "full" }
]

//utilizamos destructuring, para evitar llamar los objetos por cada propiedad (props.texto)

export const ItemListContainer = ({ texto }) => {

  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(nftickets);
      }, 1500);
    });

    if (categoryId) {
      getData.then(res => setData(res.filter(nfticket => nfticket.category === categoryId)));
    } else {
      getData.then(res => setData(res));
    }

  }, [categoryId])

  return (
    <>
      <Title greeting={texto} />
      <div style={{ textAlign: 'center' }}>
        <div className='container'>
          <div className='row'>
            <ItemList data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemListContainer; 