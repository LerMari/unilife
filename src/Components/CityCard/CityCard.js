import React from 'react'
import './CityCard.css'
import {Link} from 'react-router-dom'

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
      <Link to='citydetails'>
        <h2>{city.name}</h2>
        <p>{city.property_count} properties</p>
      </Link>  
    </div>
  )
}

export default CityCard