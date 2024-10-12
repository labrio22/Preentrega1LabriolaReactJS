import { useState } from 'react'
import './App.css'
import Navbar from './assets/componentes/Navbar/NavBar'
import ItemListContainer from './assets/componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './assets/componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './assets/componentes/Cart/Cart'
import { CarritoProvider } from './context/CarritoContext'
import Checkout from './assets/componentes/Checkout/Checkout';


function App() {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<h2>ERROR 404 SAL DE AQUI</h2>}/>
     </Routes>
    </CarritoProvider>

    </BrowserRouter>

    </>
  )
}

export default App
