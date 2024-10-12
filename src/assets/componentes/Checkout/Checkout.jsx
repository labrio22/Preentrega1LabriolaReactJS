import { useState, useContext } from "react";
import { CarritoContext } from "../../../context/CarritoContext";
import { db } from "../../../services/config"; 
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [confirmarEmail, setConfirmarEmail] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const controladorFormulario = async (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !confirmarEmail) {
            setError("TODOS LOS CAMPOS SON OBLIGATORIOS");
            return;
        }

        if (email !== confirmarEmail) {
            setError("EL EMAIL INGRESADO NO COINCIDE");
            return;
        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        try {
            await Promise.all(
                orden.items.map(async (productoOrden) => {
                    const productoRef = doc(db, "productos", productoOrden.id);
                    const productoDoc = await getDoc(productoRef);
                    if (!productoDoc.exists()) {
                        throw new Error(`El producto con ID ${productoOrden.id} no existe.`);
                    }
                    const stockActual = productoDoc.data().stock;

                    await updateDoc(productoRef, {
                        stock: stockActual - productoOrden.cantidad,
                    });
                })
            );

            const docRef = await addDoc(collection(db, "ordenes"), orden);
            setOrdenId(docRef.id);
            vaciarCarrito();
        } catch (error) {
            console.log("Error en la creación de la orden:", error);
            setError("Error al procesar la orden.");
        }
    };

    return (
        <div>
            <h2>Checkout</h2>

            <form onSubmit={controladorFormulario}>
                {carrito.map((producto) => (
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre}</p>
                        <p>{producto.item.precio} x {producto.cantidad}</p>
                        <p>Total: {producto.item.precio * producto.cantidad}</p>
                    </div>
                ))}
                <div>
                    <label>Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Confirmar Email</label>
                    <input type="email" onChange={(e) => setConfirmarEmail(e.target.value)} value={confirmarEmail} />
                </div>
                {error && <p>{error}</p>}

                <button type="submit">Confirmar compra</button>
                {ordenId && (
                    <p>Gracias por elegirnos. Tu seguimiento es: {ordenId}</p>
                )}
            </form>
        </div>
    );
};

export default Checkout;
