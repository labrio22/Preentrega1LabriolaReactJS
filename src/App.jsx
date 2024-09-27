import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/componentes/Navbar/NavBar'
import ItemListContainer from './assets/componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './assets/componentes/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
     </Routes>




    </BrowserRouter>
    </>
  )
}

export default App
