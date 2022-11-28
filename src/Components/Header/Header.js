import React from 'react'
import './Header.css'
import {MdOutlineMapsHomeWork, MdOutlineEmail, MdFavoriteBorder} from 'react-icons/md'

function Header() {
  return (
    <div className="header-container">
        <div className="title-container">
            <MdOutlineMapsHomeWork className="icon" />
            <h1>UniLife</h1>
        </div>
        <div className="links-container">
            <div className="shortlist-container">
                <MdFavoriteBorder className="icon" />
                <p>Shortlist</p>
            </div>    
            <div className="contact-container">
                <MdOutlineEmail className="icon" />   
                <p>Contact Us</p>
            </div>    
        </div>    
    </div>
  )
}

export default Header