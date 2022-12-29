import React from 'react'
import './Social.css'
import {MdFacebook} from 'react-icons/md'
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

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
            <MdFacebook />
            <p>Facebook</p>
            <AiFillTwitterCircle />
            <p>Twitter</p>
            <AiFillInstagram />
            <p>Instagram</p>


        </div>

    </div>
  )
}

export default Social