import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import Skill from './Components/Skills/Skill'
import Project from './Components/My_Projects/Project'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
import Achivements from './Components/Achivements/Achivements'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <About/>
        <Education/>
        <Skill/>
        <Project/>
        <Achivements/>
        <Contact/>
        <Footer/>
        
    </div>
    
  )
}
export default App