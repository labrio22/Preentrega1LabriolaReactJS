import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJQ0A5QYgzy_cUHI6P0uzBVGsI_pKlWZ4",
  authDomain: "sogem-43f5f.firebaseapp.com",
  projectId: "sogem-43f5f",
  storageBucket: "sogem-43f5f.appspot.com",
  messagingSenderId: "175420342644",
  appId: "1:175420342644:web:85b9f3186ed40f24302c21"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// const productos = [
//   {nombre: "Laptop", stock:5 ,precio: 300000, img:"../public/img/laptop.png", idCat:"notebooks", detalle:"Laptop ASUS 22'' 36GB RAM "},
//   {nombre: "Smartphone", stock:3, precio: 250000, img:"../public/img/smartphone.png", idCat:"smartphones", detalle:" Smartphone SAMSUNG S23 12GB RAM"},
//   {nombre: "Tablet", stock:10, precio: 22000, img:"../public/img/tablet.png", idCat:"tablets", detalle:"Tablet SONY 10'' 8GB RAM"},
//   {nombre: "Smartwatch", stock:13, precio: 45000, img:"../public/img/smartwatch.png", idCat:"smartwatches", detalle:"Reloj sumergible"}
// ]

// import {collection, doc, writeBatch} from "firebase/firestore";

// const levantarProductos = async () => {

//   const batch = writeBatch(db)
//   const productosRef = collection(db, "productos")

//   productos.forEach((producto) =>{

//     const nuevoDoc = doc(productosRef)
//     batch.set(nuevoDoc, producto)
//   })

//   try{
//     await batch.commit();
//     console.log("Productos cargados")
//   } catch(error) {
//     console.log("Intentando subir los productos", error)
//   }

// }
//  levantarProductos()

