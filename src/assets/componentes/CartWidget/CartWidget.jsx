import React from 'react'
import './CartWidget.css'
import CartIcon from '../CartIcon/CartIcon'
import { useContext } from 'react'
import { CarritoContext } from '../../../context/CarritoContext'
import { Link } from 'react-router-dom'

const Cartwidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)



    
  return (
    <div className='CartWidgetMod'>
    <Link to="/cart">
          <CartIcon/>
    </Link>
          {
            cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
          }
    </div>
  )
}

export default Cartwidget