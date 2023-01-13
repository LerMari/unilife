import React from 'react'
import './BedroomPrice.css'

function BedroomPrice({room, price}) {
  return (
    <div className="bedroom-prices-table">
        <p>{room}</p>
        <p>{price}</p>
    </div>
  )
}

export default BedroomPrice