import React from 'react'
import Header from '../component/Header'
import About from '../component/About'
import Hero from '../component/Hero'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
    </div>
  )
}

export default Home
