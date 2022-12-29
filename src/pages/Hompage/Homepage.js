import React from 'react'
import Banner from '../../Components/Banner/Banner'
import './Homepage.css'
import axios from 'axios'
import CityCard from '../../Components/CityCard/CityCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import {Link} from 'react-router-dom'
import {MdSearch, MdChecklistRtl, MdOutlineReceiptLong} from 'react-icons/md'

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
            {citiesList.map(item => 
            <CityCard  key={item._id} city={item}
                                               citiesList={citiesList}
                                               cityImg={item.image_url} 
                                               borderRadius="24px" />)
                                               }
        </div>
        <Link style={{color: 'black'}} className="all-cities-button"
              to={'/AllCities'}
              >See all cities</Link>
      <div className="compare-banner">
        <h2>Compare all inclusive student homes.</h2>
        <div className="compare-items-container">
            <div className="compare-item">
              <MdSearch className="comp-icon" />
              <h4>Search</h4>
              <p>Find your dream home in the perfect area near your university.</p>
            </div>
            <div className="compare-item">
              <MdChecklistRtl className="comp-icon" />
              <h4>Compare</h4>
              <p>Compare student accommodation to find the right home for you.</p>
            </div>
            <div className="compare-item">
              <MdOutlineReceiptLong className="comp-icon" />
              <h4>Bills Included</h4>
              <p>Bills are included in all rent prices. No hidden fees.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage