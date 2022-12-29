import React from 'react'
import './Banner.css'


function Banner({bannerImg}) {

const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    height: "400px",
    border: "solid 2px blue"
}

  return (
    <div style={ bannerStyle } className="banner">
      <h1>Find student homes with bills included</h1>
      <p>A simple and faster way to search for student accommodation</p>
    </div>
  )
}

export default Banner