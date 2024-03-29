import React from 'react'
import htmlIcon from '../assets/icon/HTML.svg'
import cssIcon from '../assets/icon/CSS.svg'
import jsIcon from '../assets/icon/JavaScript.svg'
import mongoIcon from '../assets/icon/MongoDB.svg'
import nextIcon from '../assets/icon/NextJS-Dark.svg'
import reduxIcon from '../assets/icon/Redux.svg'
import sassIcon from '../assets/icon/Sass.svg'
import reactIcon from '../assets/icon/React-Dark.svg'

const Skills = () => {
  return (
    <div>
      <div className="skill">
        <p>Tech Stack</p>
        <div className="Stack-logo">
          <ul>
            <li>
              <img src={htmlIcon} alt="Html icon" />
            </li>
            <li>
              <img src={cssIcon} alt="css icon" />
            </li>
            <li>
              <img src={jsIcon} alt="javascript icon" />
            </li>
            <li>
              <img src={sassIcon} alt="sass icon" />
            </li>
            <li>
              <img src={reactIcon} alt="react icon" />
            </li>
            <li>
              <img src={nextIcon} alt="nextjs icon" />
            </li>
            <li>
              <img src={mongoIcon} alt="mongo icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
