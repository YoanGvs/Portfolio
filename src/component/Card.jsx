import React from 'react'

function Card({ project }) {
  return (
    <div className="card" title={project.presentation}>
      <img
        src={project.image}
        alt={project.name}
        style={{ maxWidth: '100%', borderRadius: '4px' }}
      />
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
      <p>{project.tags.join(', ')}</p>
    </div>
  )
}

export default Card
