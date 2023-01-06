import React from 'react'
import './CityDetails.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import students from '../../assets/students.png'

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
            console.log(res.data.data);
            setCity(res.data.data[0]);
            console.log(res.data.data[0].name);
            console.log(res.data.data[0].student_life);
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

    <div className="city-info-box">
        <div className="city-info-text">
        <h2>Being a student in {city?.name}</h2>
        <p>{city?.student_life}</p>
        <p>{city?.universities}</p> 
        </div>
        <div className="city-info-img">
            <img src={students} className="students" />
        </div>       
    </div>    

</div>
    
  )
}

export default CityDetails