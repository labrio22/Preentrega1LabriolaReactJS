import React, { useEffect, useState } from 'react'
import { getProductos, getProductosPorCategoria } from '../../../asyncmock'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

const [productos, setProductos] = useState([])


const {idCategoria} = useParams()

useEffect(()=>{

  /// Trae los productos por categoria seleccionada, si no existen vuelve a traer todos
  const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos

  funcionProductos(idCategoria)
  .then(respuesta => setProductos(respuesta))


  // Trae a todos los productos
  // getProductos()
  // .then(respuesta => setProductos(respuesta))
  // .catch(error => console.log(error))

}, [idCategoria])


  return (
    <>

    <h2>Productos</h2>
    <ItemList productos={productos}/>

    </>
  )
}

export default ItemListContainer