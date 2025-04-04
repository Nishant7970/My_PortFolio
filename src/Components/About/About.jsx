import React from 'react'
import './About.css'
import Profile from "../assets/profile.jpg"
function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="./src/assets/theme_pattern.svg" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left"><img src={Profile} alt="" /></div>
            <div className="about-right">
                <div className="about-para">
                    <h1>Web developer</h1>
                    <p>I am Nishant Kumar and I am currently pursuing BTech CSE from Lovely Professional University. My passion lies in captivating website designs and implementing them through frontend development. I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my carrer, I have developed a deep understanding of HTML, CSS, Javascript and React. By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experiences. I believe that a well-designed website shiuld not only look visually appealing but Lalso provide smooth and enjoyable interaction for visitors. </p>
                    <p>When starting a new project, I throughly research and analyze the target audience and the clients specific requirements. This enables me to tailor my designs to meet their expectations and deliver a uique online presence that aligns with their brand ideneity.</p>
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