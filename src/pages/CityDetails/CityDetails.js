import React from 'react'
import './CityDetails.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'

function CityDetails() {

const baseUrl="https://unilife-server.herokuapp.com/";
const{cityId} = useParams();
// console.log(cityId);

//state for city
const [city, setCity] = React.useState([]);

//state for property
const [propertyList, setPropertyList] = React.useState([]);

React.useEffect(
    ()=> {
        axios.get(`${baseUrl}properties/city/${cityId}`)
        .then(res=>{
            // console.log(res.data.response);
            setPropertyList(res.data.response);
        })
.catch(err=>console.log(err))
    }, []
)

//https://unilife-server.herokuapp.com/cities/633a96af6893d471a68cc88f
React.useEffect(
    ()=> {
        axios.get(`${baseUrl}cities/${cityId}`)
        .then(res=>{
            console.log(res.data);
            setCity(res.data);
        })
.catch(err=>console.log(err))
    }, []
)

  return (
    <div className="property-container">
        {
        propertyList.map(item => 
                        <PropertyCard  key={item._id}
                                       property={item}
                                       address={item.address}
                                                         />)
        }

</div>
    
  )
}

export default CityDetails