import React from 'react'
import aboutHero from '../assets/img/desktop.webp'

const About = () => {
  return (
    <div id="about" className="about-container">
      <img className="about-banner" src={aboutHero} alt="desktop" />

      <div className="about-content">
        <h3 className="about-title">About me</h3>
        <h4>
          Front-end Developer <br /> based in Meaux, France 📍
        </h4>
        <p className="about-description">
          Hey, my name is Yoan, and I'm a Frontend Developer. My passion is to
          create and develop a clean UI/UX for my users.
          <br />
          <br />I completed a Web Integrator training with OpenClassroom, which
          enhanced my skills in web design and development. I am always looking
          for new challenges and am open to new opportunities. I am currently
          seeking a position as a Frontend Developer.
        </p>
      </div>
    </div>
  )
}

export default About
