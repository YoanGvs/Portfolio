import React from 'react'

function Card({ project }) {
  return (
    <div className="card">
      <img
        src={project.image}
        alt={project.name}
        style={{ maxWidth: '100%', borderRadius: '4px' }}
      />
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <p>{project.tags.join(', ')}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Voir le projet
      </a>
    </div>
  )
}

export default Card
