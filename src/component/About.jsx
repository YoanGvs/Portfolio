import React from 'react'
import aboutHero from '../assets/img/desktop.webp'

const About = () => {
  return (
    <div className="about-container">
      <img className="about-banner" src={aboutHero} alt="" />
      <h3 className="about-title">About me</h3>
      <h4>
        Front-end Developer <br /> based in Meaux, France <br />
        📍
      </h4>
      <p className="about-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        quisquam reiciendis obcaecati laboriosam, incidunt eaque error modi ea
        fugit quibusdam, voluptate perspiciatis provident facere, maiores itaque
        amet! Esse, pariatur itaque.
      </p>
    </div>
  )
}

export default About
