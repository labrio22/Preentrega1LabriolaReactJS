import React from 'react'
import Cartwidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {

  return (
    
    <div className="NavBarMod">
      <h1>Sogem</h1>
      <ul>
        <li>Accesorios</li>
        <li>Modems</li>
        <li>Placas</li>
        <li>Parlantes</li>
      </ul>
    <Cartwidget/>
    </div>
  
  )
}

export default Navbar