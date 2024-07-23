import { assets } from '../../assests/assets'
import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                        <h2>Company</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                </div>
                <div className="footer-content-right">
                      <h2> Contact Us</h2>
                      <ul>
                        <li>+91-833308329</li>
                        <li>Contact@tomato.in</li>
                      </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright 2024 @ Tomato.com</p>
        </div>
        
      
    </div>
  )
}

export default Footer
