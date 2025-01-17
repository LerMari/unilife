import React from 'react'
import './HomeDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import BedroomPrice from '../../Components/BedroomPrice/BedroomPrice'

function HomeDetails() {

    const{propertyId} = useParams();
    const baseUrl="https://unilife-server.herokuapp.com/";
    const [property, setProperty] = React.useState('');
    const [features, setFeatures] = React.useState([]);
    const [bedroomPrices, setBedroomPrices] = React.useState([]);


    React.useEffect(
        ()=> {
            axios.get(`${baseUrl}properties/${propertyId}`)
            .then(res=>{
                console.log(res.data);
                console.log(res.data.bedroom_prices)
                // setBedroomPrices(res.data.bedroom_prices)
                for (let bname in res.data.bedroom_prices){
                    bedroomPrices.push({name: bname, price: res.data.bedroom_prices[bname]}
                        )
                }
                console.log(bedroomPrices);
                setProperty(res.data);
                setFeatures(res.data.key_features);
            })
    .catch(err=>console.log(err))
        }, []
    )


  return (
    <div className="home-details-wrapper">
        <div className="images-container">
            {/* <img src={`${property?.images[0]}`} className="home-images"/> */}
        </div>

        <div className="home-breakdown-container">
            <p>ADDRESS</p>
            <p>Bedrooms: {property.bedroom_count}</p>
            <p>Bathrooms: {property.bathroom_count}</p>
            <p>Property type: {property.property_type}</p>
            <p>Rent: {property.rent}</p>
            <p>Furnished type: {property.furnished}</p>
            <p>{property.availability}</p>
        </div>
        
        <div className="description-container">
            <h3>Description</h3>
            <p>{property.property_description}</p>
        </div>

        <div className="bedroom-prices-container">
            <h3>Bedroom Prices</h3>
            {bedroomPrices.map(item=>
                <BedroomPrice room={item.name}
                              price={item.price} />
            )}         
        </div>

        <div className="features-container">
            <h3>Key Features</h3>
            {features?.map(item=> 
                <p>{item}</p>
            )}
        </div>
    </div>
  )
}

export default HomeDetails