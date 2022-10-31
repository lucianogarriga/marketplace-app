import React from 'react'
import Title from '../Title';
import ItemAdd from '../ItemAdd';

const nft = [
  {id: 1, image: "https://cdn.audleytravel.com/-/-/79/1012143-cafayate-argentina.jpg", title: "Desde Córdoba a CAFAYATE"},
  {id: 2, image: "https://4.bp.blogspot.com/-R8v5VMuyOIM/URjZ7c57-nI/AAAAAAAAAWE/oL04Bw56CXU/s1600/grande+10.jpg", title: "Desde Córdoba a SALINAS GRANDES"},
  {id: 3, image: "https://th.bing.com/th/id/R.6793515d90b27662c252a74a082c6ab1?rik=wQuXO3mZru4h4w&riu=http%3a%2f%2fturismo.org%2fwp-content%2fuploads%2f2017%2f08%2fInvierno-en-Buenos-Aires.png&ehk=Aq0lX3zox341Y7hQ3dVANBTAXy0Dlml48e49ZHQfPtg%3d&risl=&pid=ImgRaw&r=0", title: "Desde Córdoba a BUENOS AIRES"},
  {id: 4, image: "https://8ut3vnmqb148491id57v2rl2-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/City-Center-Cordoba-Argentina.jpg", title: "Desde Buenos Aires a CORDOBA"}
]

//utilizamos destructuring, para evitar llamar los objetos por cada propiedad (props.texto)

export const ItemListContainer = ({texto}) => {

    const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} NFT al carrito`);
    }

  return (
    <>
        <Title greeting={texto}/>
        <ItemAdd initial={1} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer; 