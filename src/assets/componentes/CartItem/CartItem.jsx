 import { useContext } from "react"
 import { CarritoContext } from "../../../context/CarritoContext"


const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)
  return (

    <div>
        <h3>Nombre:{item.nombre}</h3>
        <h3>Cantidad:{cantidad}</h3>
        <h3>Precio:{item.precio}</h3>
        <button onClick={()=>eliminarProducto(item.id)}>Eliminar</button>




    </div>
  )
}

export default CartItem