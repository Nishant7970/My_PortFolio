import React from 'react'
import './Skill.css'
import img1 from "../assets/theme_pattern.svg"
function Skill() {
  return (
    <div id='skill' className='Skills'>
        <div className="skills-title">
            <h1>Skills</h1>
            <img src={img1} alt="" />
        </div>
        
        <div className="html">
        <i class="fa-brands fa-html5"></i>
        <div className="text-perc">
          <p className='text'>HTML</p>
          <p className='perc'>90%</p>
        </div>
        <div className='crossbar'><div className='crossbar-child'></div></div>
      </div>

      <div className="css">
      <i class="fa-brands fa-css3-alt"></i>
        <div className="text-perc">
          <p className='text'>CSS</p>
          <p className='perc'>70%</p>
        </div>
        <div className='crossbar'><div className='crossbar-child'></div></div>
      </div>

      <div className="javascript">
      <i class="fa-brands fa-js"></i>
        <div className="text-perc">
          <p className='text'>Javasript</p>
          <p className='perc'>75%</p>
        </div>
        <div className='crossbar'><div className='crossbar-child'></div></div>
      </div>

      <div className="react">
      <i class="fa-brands fa-react"></i>
        <div className="text-perc">
          <p className='text'>ReactJs</p>
          <p className='perc'>80%</p>
        </div>
        <div className='crossbar'><div className='crossbar-child'></div></div>
      </div>

      <div className="node">
      <i class="fa-brands fa-node-js"></i>
        <div className="text-perc">
          <p className='text'>NodeJs</p>
          <p className='perc'>65%</p>
        </div>
        <div className='crossbar'><div className='crossbar-child'></div></div>
      </div>

      <div className="mongo">
      <i class="fa-solid fa-database"></i>
        <div className="text-perc">
          <p className='text'>MongoDB</p>
          <p className='perc'>75%</p>
        </div>
        <div className='crossbar'><div className='crossbar-child'></div></div>
      </div>
        </div>

  )
}
export default Skill