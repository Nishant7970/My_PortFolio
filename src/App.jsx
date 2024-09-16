import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import About from './Components/About/About'
import Skill from './Components/Skills/Skill'
import Project from './Components/My_Projects/Project'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <About/>
        <Education/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
    
  )
}
export default App