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
        {/* <Link to='citydetails'> */}
             {citiesList.map(item => <Link className="city-link" to={`/citydetails/${item._id}`}> {item.name} </ Link>)}
             {/* </Link> */}
        </div>
    
        {/* to={`citydetails/${city?._id}`} */}
    
    </div>
  )
}

export default AllCities