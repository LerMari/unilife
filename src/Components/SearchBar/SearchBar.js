import React from 'react'
import './SearchBar.css'

function Searchbar() {
  return (
    <div className="search-container">
        <input type="text" placeholder="Search by city"></input>
        <input type="text" placeholder="Number of bedrooms"></input>
        <button>Find Homes</button>
    </div>
  )
}

export default Searchbar