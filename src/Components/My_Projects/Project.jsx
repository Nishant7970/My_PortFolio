import React from 'react';
import './Project.css';
import img1 from "../assets/theme_pattern.svg";
import ecommerceImg from "../assets/ecommerce.jpg"; 
import quizImg from "../assets/quiz.jpg";
import travelImg from "../assets/travel.jpg";

function Project() {
  return (
    <div id='project' className='project'>
      <div className='project-title'>
        <h1>My Projects</h1>
        <img src={img1} alt="" />
      </div>

      <p className='project-quote'>“Projects are the best proof of learning in action.”</p>

      <div className="project-container">
        <div className="project-card">
          <img src={ecommerceImg} alt="E-Commerce Website" />
          <div className="project-details">
            <h1>E-Commerce Website</h1>
            <p>Built a full-stack shopping platform using MERN stack with user authentication, responsive UI, and secure checkout.</p>
            <p><strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, Redux, JWT</p>
          </div>
        </div>

        <div className="project-card">
          <img src={quizImg} alt="Online Quiz Website" />
          <div className="project-details">
            <h1>Online Quiz Website</h1>
            <p>Developed an interactive quiz site using React and PHP with real-time scoring and MongoDB for data handling.</p>
            <p><strong>Tech Stack:</strong> React, PHP, MongoDB, Responsive Design</p>
          </div>
        </div>

        <div className="project-card">
          <img src={travelImg} alt="Tour and Travel Website" />
          <div className="project-details">
            <h1>Tour and Travel Website</h1>
            <p>Created a MERN-based site where users can explore destinations, book trips, and view Google Maps-based suggestions.</p>
            <p><strong>Tech Stack:</strong> MERN Stack, Google Maps API, Responsive UI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
