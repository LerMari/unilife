import React from 'react'
import './CityCard.css'

function CityCard({city, cityImg, borderRadius}) {

const cardStyle={
    backgroundImage: `url(${cityImg})`,
    backgroundSize: 'cover',
    borderRadius: borderRadius,
    height: '250px',
    width: '350px'
}


  return (
    <div style={cardStyle} className="cityCard">
        <h2>{city.name}</h2>
        <p>{city.property_count} properties</p>
    </div>
  )
}

export default CityCard