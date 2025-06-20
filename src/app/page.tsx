
import React from 'react'
import LandingPage from './home/page'
import About from './about/page'
import Services from './services/page'
import Skills from './skills/page'
import Projects from './projects/page'
import Contact from './contact/page'

function page() {
  return (
    <div>
      <LandingPage/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page