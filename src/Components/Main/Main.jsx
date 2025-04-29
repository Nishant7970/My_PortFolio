import React from 'react'
import './Main.css'
import Resume from "../Resume/nishant_cv_.pdf"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Profile from "../assets/Profile2.jpg"
function Main() {
  return (
    <div  id='home' className='main'>
        <img src={Profile} alt="" />
        <h1><span>Nishant Kumar,</span> Full Stack Web Developer</h1>
        <p>I am a Full Stack Web Developer From Muzaffarpur, Bihar..</p>
        <div className='main-action'>
            <div className="main-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect With Me
            </AnchorLink></div>
            <a className='cv' href={Resume} download={Resume}>
            <div className="main-cv">
                My CV
            </div>
            </a>
        </div>
    </div>
  )
}

export default Main