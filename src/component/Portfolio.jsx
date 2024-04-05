import React, { useEffect, useState } from 'react'
import Card from './Card'

function Portfolio() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Portfolio
