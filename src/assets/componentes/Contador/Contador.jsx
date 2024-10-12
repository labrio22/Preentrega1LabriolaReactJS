import { useState } from "react"



const contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)
    const sumarContador = () =>{
        if (contador < stock) {
            setContador(contador + 1)

        }
    }

    const restarContador = () =>{
        if (contador > inicial) {
            setContador(contador - 1)

        }
    }



  return (
    <>
    <div>
        <button onClick={restarContador}> -</button>
        <span>{contador}</span>
        <button onClick={sumarContador}> + </button>

    </div>
    <button onClick={()=>funcionAgregar(contador)}>Agregar</button>
    </>
  )
}

export default contador