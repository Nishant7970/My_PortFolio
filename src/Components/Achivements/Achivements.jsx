import React from 'react';
import '../Achivements/Achivements.css';
import img1 from '../assets/theme_pattern.svg';
import cert1 from '../assets/certificate1.png';
import cert2 from '../assets/certificate2.png';
import cert3 from '../assets/certificate3.png';

function Achievements() {
  return (
    <div id="achievements" className="achievements">
      <div className="achievements-title">
        <h1>My Achievements</h1>
        <img src={img1} alt="" />
      </div>

      <p className="achievements-quote">“Achievements are the milestones that reflect your growth.”</p>

      <div className="achievements-container">
        <div className="achievements-card">
          <img src={cert1} alt="Smart Class Certificate" />
          <div className="achievements-details">
            <h1>Smart Class Volunteer</h1>
            <p>Volunteered with Prayatna NGO to enable digital learning under LIC-HFL, awarded Mayor Certificate for contribution.</p>
          </div>
        </div>

        <div className="achievements-card">
          <img src={cert2} alt="Internship Certificate" />
          <div className="achievements-details">
            <h1>DSA Internship</h1>
            <p>Completed a 6-week internship at Board Infinity, mastering Data Structures and Algorithms in Java and C++.</p>
          </div>
        </div>

        <div className="achievements-card">
          <img src={cert3} alt="Web Development Hackathon Certificate" />
          <div className="achievements-details">
            <h1>Web Development Hackathon</h1>
            <p>Attended a Web Development Hackathon, building a functional web-based solution in 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
