import React from 'react'
import About from '../component/About'
import Hero from '../component/Hero'
import Contact from '../component/Contact'
import Projet from '../component/Projet'

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projet />
      <Contact />
    </div>
  )
}

export default Home
