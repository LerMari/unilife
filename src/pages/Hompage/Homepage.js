import React from 'react'
import Banner from '../../Components/Banner/Banner'
import './Homepage.css'
import axios from 'axios'
import CityCard from '../../Components/CityCard/CityCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import {Link} from 'react-router-dom'

function Homepage({imgSrc}) {
    const baseUrl="https://unilife-server.herokuapp.com/";
    const [citiesList, setCitiesList] = React.useState([]);


    React.useEffect(
        ()  => {
          axios.get(`${baseUrl}cities`)
          .then(res => {setCitiesList(res.data.response);
          })
          .catch(err => console.log(err))
        }, []
      )


  return (
    <div className="homepage-container">
        <Banner bannerImg={imgSrc}/>
        <SearchBar />

        <div className="cities-container">

            {citiesList.map(item => <CityCard  city={item}
                                               cityImg={item.image_url} 
                                               borderRadius="24px" />)}

            {console.log({citiesList})}
        </div>
        <Link className="all-cities-button"
              to={'/AllCities'}
              >See all cities</Link>

    </div>
  )
}

export default Homepage