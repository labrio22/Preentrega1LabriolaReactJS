import { useState, useContext } from "react"
import { CarritoContext } from "../../../context/CarritoContext"
import { db } from "../../../service/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [confirmarEmail, setConfirmarEmail] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)


    const controladorFormulario = (e) =>{
        e.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !confirmarEmail){
            setError("TODOS LOS CAMPOS SON OBLIGATORIOS")
            return;
        } 
    };

        if(email !== confirmarEmail){
            setError("EL EMAIL INGRESADO NO COINCIDE")
            return;
    };

    const orden = {
        items: carrito.map(producto =>({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad: producto.cantidad
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email

    };

    Promise.all(
        orden.item.map(async (productoOrden) =>{
            const productoRef = doc(db,"producto", productoOrden.id)
            const productoDoc = await getDoc(productoRef)
            const stockActual = productoDoc.data().stock

            await updateDoc(productoRef,{
                stock: stockActual - productoOrden.cantidad
            })
        })

    )
    .then(()=>{

    addDoc(collection(db,"ordenes"), orden)
    .then(docRef =>{
        setOrdenId(docRef.id)
        vaciarCarrito()
    })
    .catch(error =>{
        console.log("Fallo al crear la orden", error)
        setError("Orden inexistente")
    })
})
    .catch((error ) =>{
    console.log("No se actualizo el stock", error)
    setError("Stock no actualizable")
})

  return (
    <div>
        <h2>checkout</h2>

        <form onSubmit={controladorFormulario}>
            {
                carrito.map(producto =>(
                    <div key={producto.item.id}>

                    <p>{producto.item.nombre}</p>

                    <p>{producto.item.precio} x {producto.cantidad}</p>

                    <p>{producto.item.precio}</p>
                    </div>
                ))
  
            }
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e)=>setTelefono(e.target.value)} value={telefono}/>
                
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label htmlFor="">Confirmar Email</label>
                <input type="email" onChange={(e)=>setConfirmarEmail(e.target.value)} value={confirmarEmail}/>
            </div>
            {
                error && <p>{error}</p>
            }


            <button type="submit">Confirmar compra</button>
            {
                ordenId &&(
                    <p>Gracias por elegirnos y confiar en la calidad de nuestros productos, hace tu seguimiento {ordenId}</p>
                )
            }


        </form>
    
    
    
    </div>
  )
}

export default checkout