import React from 'react'
import './Main.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Main() {
  return (
    <div  id='home' className='main'>
        <img src="./src/assets/profile.jpg" alt="" />
        <h1><span>I am Nishant Kumar,</span> Full Stack Web Developer</h1>
        <p>I am a Full Stack Web Developer From Muzaffarpur, Bihar..</p>
        <div className='main-action'>
            <div className="main-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect With Me
            </AnchorLink></div>
            <div className="main-cv">
                My CV
            </div>
        </div>
    </div>
  )
}

export default Main