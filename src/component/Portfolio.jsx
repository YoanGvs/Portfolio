import React, { useEffect, useState } from 'react'
import Card from './Card'

function Portfolio() {
  const [projects, setProjects] = useState([])
  const [selectedTag, setSelectedTag] = useState('all')

  useEffect(() => {
    fetch('projects.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredProjects =
          selectedTag === 'all'
            ? data
            : data.filter((project) => project.tags.includes(selectedTag))
        setProjects(filteredProjects)
      })
      .catch((error) => console.log(error))
  }, [selectedTag])

  const tags = ['all', 'HTML', 'JS', 'SCSS', 'REACT', 'REDUX']

  return (
    <div className="project-container">
      <div className="project-filter">
        {tags.map((tag) => (
          <button key={tag} onClick={() => setSelectedTag(tag)}>
            {tag}
          </button>
        ))}
      </div>
      <div className="project-card">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
