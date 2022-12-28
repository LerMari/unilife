import React from 'react'
import './PropertyCard.css'
import {Link} from 'react-router-dom'

function PropertyCard({property, address}) {
  return (
    <div className="property-card">
        <img src={`${property?.images[0]}`} className="prop-image"/>
        <p>Rent: {property.rent}</p>
        <p>Bedrooms: {property.bedroom_count}</p>
        <p>Bathrooms: {property.bathroom_count}</p>
        <p>{property.property_type}</p>
        <p>{property.furnished}</p>
        <p>{address.street} {address.city} {address.postcode} </p>

        <Link to={`/homedetails/${property?._id}`}>See details</Link>
        
    </div>
  )
}

export default PropertyCard