const productos = [
    {id: 1, nombre: "Laptop", precio: 1200, img:"../public/img/laptop.png", idCat:"notebooks"},
    {id: 2, nombre: "Smartphone", precio: 800, img:"../public/img/smartphone.png", idCat:"smartphones"},
    {id: 3, nombre: "Tablet", precio: 400, img:"../public/img/tablet.png", idCat:"tablets"},
    {id: 4, nombre: "Smartwatch", precio: 200, img:"../public/img/smartwatch.png", idCat:"smartwatches"}
  ]

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