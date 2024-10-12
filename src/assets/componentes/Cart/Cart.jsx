import { useContext } from "react";
import { CarritoContext } from "../../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem"; 

const Cart = () => {
  const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>Tu carrito aún está vacío</h2>
        <Link to="/">Continuar comprando</Link>
      </>
    );
  }
 
  return (
    <div>
      {
        carrito.map(producto => (
          <CartItem key={producto.item.id} {...producto} />
        ))
      }
      <h3>El total es de: ${total}</h3>
      <h3>La cantidad total es de: {cantidadTotal}</h3>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <Link to="/checkout">Terminar compra</Link>

    </div>
  );
};

export default Cart;
