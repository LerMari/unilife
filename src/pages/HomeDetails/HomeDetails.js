import React from 'react'
import './HomeDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function HomeDetails() {

    const{propertyId} = useParams();
    const baseUrl="https://unilife-server.herokuapp.com/";

    const [property, setProperty] = React.useState('');


    React.useEffect(
        ()=> {
            axios.get(`${baseUrl}properties/${propertyId}`)
            .then(res=>{
                console.log(res.data);
                setProperty(res.data);
            })
    .catch(err=>console.log(err))
        }, []
    )


  return (
    <div>HomeDetails
        <p>{property.availability}</p>

        <h3>Description</h3>
        <p>{property.property_description}</p>

        <h3>Key Features</h3>
    
    </div>
  )
}

export default HomeDetails