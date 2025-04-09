import React from 'react'
import './Basket.css'
import { useLocation } from 'react-router-dom'

const Basket = () => {
  const location = useLocation()
	const product = location.state?.product

  
  return (
    <div>Basket</div>
  )
}

export default Basket