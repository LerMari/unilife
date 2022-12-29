import React from 'react'
import './PropertyCard.css'
import {Link} from 'react-router-dom'
import { MdOutlineBed, MdBathtub, MdHome } from "react-icons/md";

function PropertyCard({property, address}) {
  return (
    <div className="property-card">
        <img src={`${property?.images[0]}`} className="prop-image"/>
        <p>Rent: {property.rent}</p>
        <MdOutlineBed />
        <p>Bedrooms: {property.bedroom_count}</p>
        <MdBathtub />
        <p>Bathrooms: {property.bathroom_count}</p>
        <p>{property.property_type}</p>
        <p>{property.furnished}</p>
        <p>{address.street} {address.city} {address.postcode} </p>

        <Link to={`/homedetails/${property?._id}`}>
            <MdHome />
            View Home
            </Link>
        
    </div>
  )
}

export default PropertyCard