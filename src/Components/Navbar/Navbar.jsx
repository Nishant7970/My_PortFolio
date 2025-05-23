import React, { useState, useRef } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import img1 from "../assets/Logo.png";
import img2 from "../assets/nav_underline.svg";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-330px";
  };

  return (
    <div className='navbar'>
      <img src={img1} alt="logo" />
      <i onClick={openMenu} className='bx bx-menu'></i>
      <ul ref={menuRef} className='navmenu'>
        <i className="nav-mob-close fa-regular fa-circle-xmark" onClick={closeMenu}></i>
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={img2} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu('about me')}>About me</p>
          </AnchorLink>
          {menu === "about me" ? <img src={img2} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#education'>
            <p onClick={() => setMenu('educations')}>Educations</p>
          </AnchorLink>
          {menu === "educations" ? <img src={img2} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#skill'>
            <p onClick={() => setMenu('skills')}>Skills</p>
          </AnchorLink>
          {menu === "skills" ? <img src={img2} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#project'>
            <p onClick={() => setMenu('projects')}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? <img src={img2} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#achievements'>
            <p onClick={() => setMenu('achievements')}>Achievements</p>
          </AnchorLink>
          {menu === "achievements" ? <img src={img2} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={img2} alt="" /> : <></>}
        </li>
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
