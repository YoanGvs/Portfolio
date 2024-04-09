import React from 'react'
import aboutHero from '../assets/img/desktop.webp'

const About = () => {
  return (
    <div id="about" className="about-container">
      <img className="about-banner" src={aboutHero} alt="" />
      <h3 className="about-title">About me</h3>
      <h4>
        Front-end Developer <br /> based in Meaux, France <br />
        📍
      </h4>
      <p className="about-description">
        Hey, my name is Yoan, and I'm a Frontend Developer. My passion is to
        create and develop a clean UI/UX for my users.
        <br />
        <br />
        I'm always looking for new challenges, and I'm open to new
        opportunities. I'm currently looking for a job as a Frontend Developer.
      </p>
    </div>
  )
}

export default About
