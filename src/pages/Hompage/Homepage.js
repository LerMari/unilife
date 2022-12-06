import React from 'react'
import Banner from '../../Components/Banner/Banner'
import './Homepage.css'
import axios from 'axios'
import CityCard from '../../Components/CityCard/CityCard'

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

        <div className="cities-container">

            {citiesList.map(item => <CityCard  city={item}
                                               cityImg={item.image_url} 
                                               borderRadius="24px" />)}

            {console.log({citiesList})}
        </div>
        <div className="contact-links-container">
            contact
        </div>
    </div>
  )
}

export default Homepage