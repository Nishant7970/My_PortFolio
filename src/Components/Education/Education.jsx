import React from 'react'
import './Education.css'
function Education() {
  return (
    <div id='education' className='education'>
      <div className='education-title'>
        <h1>Education</h1>
        <img src="./src/assets/theme_pattern.svg" alt="" />

      </div>
      <p>Education is not the learning of facts, but the training of the mind to think.</p>
      <div className="education-container">
        <div className="image1">
          <img src="./src/assets/Lpu.jpeg" alt="" />
          <div className="details1">
            <h1>Bachelor of Computer Science</h1>
            <p>Lovely Professional University</p>
            <p>2022-2026 | Pursuing</p>
          </div>
        </div>
        <div className="image2">
          <img src="./src/assets/Global_school.webp" alt="" />
          <div className="details2">
            <h1>Higher Secondary Certificate (HSC) | CBSE</h1>
            <p>Global Internation School</p>
            <p>2020-2022</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education