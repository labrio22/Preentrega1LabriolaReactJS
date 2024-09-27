import React from 'react'
import Cartwidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  return (
    
   <header className="NavBarMod">
    <Link to="/">
      <h1>Sogem</h1>
    </Link>
      <nav>
          <ul>
              <li>
                <NavLink to="/categoria/notebooks">Notebooks</NavLink>
                
              </li>

              
              <li>
                <NavLink to="/categoria/smartphones">Smartphones</NavLink>
                
              </li>


              <li>
                <NavLink to="/categoria/tablets">Tablets</NavLink>
                
              </li>


              <li>
              <NavLink to="/categoria/smartwatches">Smartwatches</NavLink>
                
              </li>


          </ul>   
      </nav>

<Cartwidget/>   
      
    </header>
  
  
  )
}

export default Navbar