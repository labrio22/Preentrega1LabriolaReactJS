import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import { db } from '../../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {

const [productos, setProductos] = useState([])

const {idCategoria} = useParams()

useEffect(() =>{

  const productos = idCategoria ? query(collection(db,"productos"), where("idCat", "==", idCategoria)) : (collection(db,"productos"))

  getDocs(productos)
  .then(res =>{
    const nuevosProductos = res.docs.map(doc =>{

    const data = doc.data()
    return{id:doc.id, ...data}
  })
    setProductos(nuevosProductos)

  })
  .catch(error => console.log(error))
  .finally("Completado")
}, [idCategoria])



// useEffect(()=>{

//   /// Trae los productos por categoria seleccionada, si no existen vuelve a traer todos
//   const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos

//   funcionProductos(idCategoria)
//   .then(respuesta => setProductos(respuesta))


//   // Trae a todos los productos
//   // getProductos()
//   // .then(respuesta => setProductos(respuesta))
//   // .catch(error => console.log(error))

// }, [idCategoria])


  return (
    <>

    <h2>Productos</h2>
    <ItemList productos={productos}/>

    </>
  )
}

export default ItemListContainer