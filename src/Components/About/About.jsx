import React from 'react'
import './About.css'
import Profile from "../assets/Profile2.jpg"
import img1 from "../assets/theme_pattern.svg"
function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={img1} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left"><img src={Profile} alt="" /></div>
            <div className="about-right">
                <div className="about-para">
                    <h1>Web developer</h1>
                    <p>Nishant Kumar — a Frontend Developer with a strong passion for crafting captivating and responsive web interfaces. Currently pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University, with a focus on creating visually appealing and user-centric websites.

Skilled in HTML, CSS, JavaScript, and React, with a commitment to staying current with the latest design trends and frontend technologies. Designs are always approached with the end-user in mind, ensuring seamless interaction and an intuitive browsing experience.

Belief in design goes beyond aesthetics — prioritizing functionality, performance, and user satisfaction to deliver impactful digital experiences. </p>
                    <p>In addition to my technical skills, I am a proactive learner and a collaborative team player, eager to contribute to innovative projects that push the boundaries of web development. Let's connect and explore how we can create something amazing together!</p>
                </div>
               
            </div>
        </div>
        {/* <div className="about-achivements">
            <div className="about-achivement"><h1>10+</h1>
            <p>Year of Experiance</p></div>
            <hr />
            <div className="about-achivement"><h1>90+</h1>
            <p>Projects Completed</p></div>
            <hr />
            <div className="about-achivement"><h1>15+</h1>
            <p>Happy Clients</p></div>
        </div> */}
    </div>
  )
}

export default About