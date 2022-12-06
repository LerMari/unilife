import React from 'react'
import './Banner.css'


function Banner({bannerImg}) {

const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    height: "400px",
    border: "solid 2px blue"
}

  return (
    <div style={ bannerStyle } className="banner">Banner
    </div>
  )
}

export default Banner