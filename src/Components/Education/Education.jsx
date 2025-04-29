import React from 'react'
import './Education.css'
import img1 from "../assets/theme_pattern.svg"
import img2 from "../assets/Lpu.jpeg"
import img3 from "../assets/Global_school.webp" 
import img4 from "../assets/image3.avif"

function Education() {
  return (
    <div id='education' className='education'>
      <div className='education-title'>
        <h1>Education</h1>
        <img src={img1} alt="" />

      </div>
      <p>Education is not the learning of facts, but the training of the mind to think.</p>
      <div className="education-container">
        <div className="image1">
          <img src={img2} alt="" />
          <div className="details1">
            <h1>Bachelor of Technology|Computer Science</h1>
            <p>Lovely Professional University</p>
            <p>2022-2026 | Pursuing</p>
          </div>
        </div>
        <div className="image2">
          <img src={img3} alt="" />
          <div className="details2">
            <h1>Intermediate|CBSE</h1>
            <p>Global Internation School</p>
            <p>2020-2022</p>
          </div>
        </div>
        <div className="image2">
          <img src={img4} alt="" />
          <div className="details2">
            <h1>Matriculate|CBSE</h1>
            <p>SRT Public School</p>
            <p>2020-2022</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education