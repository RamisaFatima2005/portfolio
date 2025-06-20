
import React from 'react'
import LandingPage from './home/page'
import About from './about/page'
import Services from './services/page'
import Skills from './skills/page'

function page() {
  return (
    <div>
      <LandingPage/>
      <About/>
      <Services/>
      <Skills/>
    </div>
  )
}

export default page