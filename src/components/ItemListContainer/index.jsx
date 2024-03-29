import React, { useState, useEffect } from 'react'
import './itemListContainer.css'
import Title from '../Title';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';

const nftickets = [
  { id: 1, image: "https://cdn.audleytravel.com/-/-/79/1012143-cafayate-argentina.jpg", title: "CORDOBA - CAFAYATE", description: "Aereo - Cordoba/Cafayate - Ida y Vuelta", price: 0.110, coin: " ETH", days: "3 days left", category: "tickets" },
  { id: 2, image: "https://4.bp.blogspot.com/-R8v5VMuyOIM/URjZ7c57-nI/AAAAAAAAAWE/oL04Bw56CXU/s1600/grande+10.jpg", title: "CORDOBA - SALINAS", description: "Aereo - Cordoba/Salinas Grandes - Ida y Vuelta", price: 0.122 , coin: " ETH", days: "5 days left", category: "tickets" },
  { id: 3, image: "https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=", title: "CORDOBA - BS AS", description: "Aereo - Cordoba/Buenos Aires - Ida y Vuelta", price: 0.182, coin: " ETH", days: "6 days left", category: "tickets" },
  { id: 4, image: "https://i0.wp.com/barilocheparabrasileiros.com.br/wp-content/uploads/2020/08/Guia-de-Inverno.jpeg?resize=730%2C730&ssl=1", title: "CORDOBA - BARILOCHE", description: "Aereo - Cordoba/Bariloche - Ida y Vuelta + Hospedaje 5 noches", price: 0.543, coin: " ETH", days: "2 days left", category: "full" }
]

//utilizamos destructuring, para evitar llamar los objetos por cada propiedad (props.texto)

export const ItemListContainer = ({ texto }) => {

  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(nftickets);
      }, 350);
    });

    if (categoryId) {
      getData.then(res => setData(res.filter(nfticket => nfticket.category === categoryId)));
    } else {
      //en el home no detecta ninguna category, por ende muestra todos los objetos
      getData.then(res => setData(res));
    }
    // el useEffect necesita una dependencia dentro de []     
    // renderiza 1 sola vez, 
    // cada vez que cambia la categoria [] que vuelva a ejecutar el useEffect
    // para corroborar si existe la categoria [] y si cambio, que lo filtre de nuevo
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