import React from 'react'
import './Social.css'

function Social() {
  return (
    <div className="social-container">
        <div className="social-signup">
            <h2>Keep in touch</h2>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type ="email" placeholder="Your email"></input>
        </div>


        <div className="social-links-cont">
            <h2>Let's Socialize</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>


        </div>

    </div>
  )
}

export default Social