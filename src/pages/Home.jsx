import React from 'react'
import Header from '../component/Header'
import About from '../component/About'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Contact from '../component/Contact'
import Projet from '../component/Projet'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Projet />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
