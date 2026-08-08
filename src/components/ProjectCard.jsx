import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({
  imagem,
  titulo,
  descricao,
  tecnologias = [],
  github,
  demo,
  slug,
  tipo,
  destaque = false
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (slug) {
      navigate(`/projetos/${slug}`);
    }
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={`project-card ${destaque ? 'featured-card' : ''}`}
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`Ver detalhes do projeto ${titulo}`}
    >
      {destaque && <span className="featured-badge">Destaque</span>}

      <div className="project-img">
        <img src={imagem} alt={`Preview do projeto ${titulo}`} loading="lazy" />
      </div>

      <div className="project-info">
        <div className="project-header">
          {tipo && <span className="project-tipo-badge">{tipo}</span>}
          <h2>{titulo}</h2>
        </div>

        <p className="project-desc">{descricao}</p>

        {tecnologias.length > 0 && (
          <div className="project-techs">
            {tecnologias.slice(0, 5).map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
            {tecnologias.length > 5 && (
              <span className="tech-badge more">+{tecnologias.length - 5}</span>
            )}
          </div>
        )}

        <div className="project-footer">
          <span className="view-details-link">Ver case completo →</span>

          <div className="project-links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                aria-label={`Repositório do GitHub do projeto ${titulo}`}
                className="btn-card-icon"
              >
                💻 GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                aria-label={`Demonstração ao vivo do projeto ${titulo}`}
                className="btn-card-icon demo"
              >
                🚀 Ver Projeto
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}