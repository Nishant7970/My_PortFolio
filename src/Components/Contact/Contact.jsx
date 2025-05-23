import React from 'react';
import './Contact.css';

// ✅ Importing images correctly
import themePattern from '../assets/theme_pattern.svg';
import mailIcon from '../assets/mail_icon.svg';
import callIcon from '../assets/call_icon.svg';
import locationIcon from '../assets/location_icon.svg';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "85974b16-a07d-462a-86e9-344284062cbe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={themePattern} alt="theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message
            about anything that you want to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="mail icon" />
              <p>nk7970922655@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="call icon" />
              <p>+91-7970922655</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="location icon" />
              <p>Muzaffarpur, Bihar</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your Message Here.. </label>
          <textarea name="message" rows={8} placeholder="Enter your message"></textarea>
          <button className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
