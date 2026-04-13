import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ imagem, titulo, categoria }) {
  return (
    <div className="project-card">

      <div className="project-img">
        <img src={imagem} alt={titulo} />
      </div>

      <div className="project-info">
        <h2>{titulo}</h2>
        <p>{categoria}</p>
      </div>

    </div>
  )
}