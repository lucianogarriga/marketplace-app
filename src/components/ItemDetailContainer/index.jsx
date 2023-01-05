import React, {useState, useEffect} from 'react'
import './itemDetailContainer.css'  
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"; 

const nftickets = [
  {id: 1, image: "https://cdn.audleytravel.com/-/-/79/1012143-cafayate-argentina.jpg", title: "Desde Córdoba a CAFAYATE", description: "Aereo - Cordoba/Cafayate - Ida y Vuelta", price: 0.110, coin: " ETH", days: "3 days left", category: "tickets"},
  {id: 2, image: "https://4.bp.blogspot.com/-R8v5VMuyOIM/URjZ7c57-nI/AAAAAAAAAWE/oL04Bw56CXU/s1600/grande+10.jpg", title: "Desde Córdoba a SALINAS GRANDES", description: "Aereo - Cordoba/Salinas Grandes - Ida y Vuelta", price: 0.122, coin: " ETH", days: "5 days left", category: "tickets"},
  {id: 3, image: "https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=", title: "Desde Córdoba a BUENOS AIRES", description: "Aereo - Cordoba/Buenos Aires - Ida y Vuelta", price: 0.182, coin: " ETH", days: "6 days left", category: "tickets"},
  {id: 4, image: "https://i0.wp.com/barilocheparabrasileiros.com.br/wp-content/uploads/2020/08/Guia-de-Inverno.jpeg?resize=730%2C730&ssl=1", title: "Desde Córdoba a BARILOCHE", description: "Aereo - Cordoba/Bariloche - Ida y Vuelta + Hospedaje 5 noches", price: 0.543, coin: " ETH", days: "2 days left", category: "full"}
];

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const {detailId} = useParams();

    useEffect(() => {
      const getData = new Promise(resolve =>{
        setTimeout(() => {
          resolve(nftickets);
        }, 400);
      });
      
        getData.then(res => setData(res.filter(nfticket => nfticket.id === parseInt(detailId))));
 
    }, [])

  return (
        <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer; 