import React from 'react'
import './PropertyCard.css'
import {Link} from 'react-router-dom'
import { MdOutlineBed, MdBathtub, MdHome, MdOutlineLocationOn } from "react-icons/md";


function PropertyCard({property, address}) {
  return (
    <div className="property-card">
        <img src={`${property?.images[0]}`} className="prop-image"/>

        <div className="home-breakdown">
            <p>Rent: {property.rent}</p>
            <div className="bed-bath-count">
                <MdOutlineBed />
                <p>{property.bedroom_count}</p>
                <MdBathtub />
                <p>{property.bathroom_count}</p>
            </div>
        </div>

        <div className="property-type">
            <p>{property.property_type}</p>
            <p>{property.furnished}</p>
        </div>

        <div className="location">
            <MdOutlineLocationOn />
            <p>{address.street} {address.city} {address.postcode} </p>
        </div>

        <div className="view-home-link">
            <Link 
            style={{color: 'black'}}
            to={`/homedetails/${property?._id}`}>
                <MdHome />
                View Home
            </Link>
        </div>
        
    </div>
  )
}

export default PropertyCard