import React from 'react'

const Skills = () => {
  return (
    <>
      <div className="skill">
        <p>Tech Stack</p>
        <div className="Stack-logo">
          <ul>
            <li>
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="Html icon"
              />
            </li>
            <li>
              <img src="https://skillicons.dev/icons?i=js,sass" alt="js sass" />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=react,redux"
                alt="React redux"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=mongodb,nextjs"
                alt="MongoDB NextJS"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills
