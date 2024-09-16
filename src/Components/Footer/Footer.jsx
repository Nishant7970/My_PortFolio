import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div id='footer'
    className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img width={100} src="./src/assets/Logo.png" alt="" />
                <p>I am a full stack develper fron,Muzaffarpur,Bihar</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                <img src="./src/assets/user_icon.svg" alt="" />
                <input type="email" placeholder='Enter Your Email' />
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-buttom">
          <p className='footer-bottom-left'>© 2024 Nishant Kumar. All rights reserved.</p>
          <div className="footer-buttom-right">
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer