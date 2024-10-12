export const getProductos = ()=> {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100);
    })

}
  
 
export const getProducto = (id)=> {
    return new Promise ((resolve) => {
        setTimeout(() => {
            ///devuelve el primer producto con el mismo id
            const producto = productos.find(item => item.id === Number(id))
            resolve(producto)
        }, 100);
    })

}

export const getProductosPorCategoria = (id) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            ///devuelve el producto segun el id filtrado
            const producto = productos.filter(item => item.idCat === id)
            resolve(producto)

        }, 100)
    })

}