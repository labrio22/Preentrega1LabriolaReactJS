const productos = [
    {id: 1, nombre: "Laptop", precio: 300000, img:"../public/img/laptop.png", idCat:"notebooks", detalle:"Laptop ASUS 22'' 36GB RAM "},
    {id: 2, nombre: "Smartphone", precio: 250000, img:"../public/img/smartphone.png", idCat:"smartphones", detalle:" Smartphone SAMSUNG S23 12GB RAM"},
    {id: 3, nombre: "Tablet", precio: 22000, img:"../public/img/tablet.png", idCat:"tablets", detalle:"Tablet SONY 10'' 8GB RAM"},
    {id: 4, nombre: "Smartwatch", precio: 45000, img:"../public/img/smartwatch.png", idCat:"smartwatches", detalle:"Reloj sumergible"}
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