import React from 'react'
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img,detalle}) => {
  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio:{precio}</h3>
      <h3>ID:{id}</h3>
      <img src= {img} alt={nombre} />
      <p>{detalle}</p>

    </div>
  )
}

export default ItemDetail