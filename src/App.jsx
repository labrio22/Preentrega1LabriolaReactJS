import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/componentes/Navbar/NavBar'
import ItemListContainer from './assets/componentes/ItemListContainer/ItemListContainer'

function App() {


  return (
    <>
     <Navbar/>
     <ItemListContainer greeting="Bienvenido a Sogem"/>
    </>
  )
}

export default App
