
import { Link } from 'react-router-dom'

export const Item = ({id,nombre,precio,stock, img}) => {

  return (
    <div>
           <img src={img} alt={nombre} />
            <h3>Nombre: {nombre} </h3>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <p>Disponibles: {stock} </p>
            <Link to={`/item/${id}`}>Ver detalle</Link>
            
    </div>

  )
}
 