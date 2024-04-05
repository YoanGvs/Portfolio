import React, { useState } from 'react'
const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
  }
  return (
    <div className="Header">
      <h4 className="logo">Yoan Govaerts</h4>
      <div className="burger-icon" onClick={toggleNav}>
        ☰
      </div>
      <nav className={`nav ${isNavVisible ? 'show' : ''}`}>
        <div className="close-icon" onClick={toggleNav}>
          ×
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Pooject</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
