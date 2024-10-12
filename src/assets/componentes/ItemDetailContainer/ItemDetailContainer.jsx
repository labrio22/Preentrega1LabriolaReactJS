import React, { useState, useEffect} from "react"
// import { getProducto } from "../../../asyncmock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../../services/config"
import { getDoc, doc } from "firebase/firestore"




const ItemDetailContainer = () => {
  const[producto, setProducto] = useState(null)

  const {idItem} = useParams()

  useEffect(()=>{

    const nuevoDoc = doc(db, "productos", idItem)

    getDoc(nuevoDoc)
    .then(res => {
      const data = res.data()
      const nuevoProducto = {id: res.id, ...data}
      setProducto(nuevoProducto)
      
    }) .catch(error => console.log(error))

  },[idItem])

  // useEffect(()=>{ 
  //   getProducto(idItem)
  //   .then(respuesta => setProducto(respuesta))

  // }, [idItem])





  return (
    <div>
      
      <ItemDetail {...producto}/>


    </div>

  )
}

export default ItemDetailContainer