import React from 'react'
import axios from 'axios'
import './AllCities.css'
import {Link} from 'react-router-dom'

function AllCities({city}) {

    const baseUrl="https://unilife-server.herokuapp.com/";
    const [citiesList, setCitiesList] = React.useState([]);


    React.useEffect(
        ()  => {
          axios.get(`${baseUrl}cities`)
          .then(res => {
            
            
            console.log(res)
            setCitiesList(res.data.response);
          })
          .catch(err => console.log(err))
        }, []
      )



  return (
    <div>
        <h2>Search by City</h2>
        <div className="city-list">
        <Link to='citydetails'>
             {citiesList.map(item => <p className="city-link">{item.name}</p>)}
             </Link>
        </div>
    
    
    </div>
  )
}

export default AllCities