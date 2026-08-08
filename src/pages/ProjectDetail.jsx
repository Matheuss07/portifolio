import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import { projectsData } from '../data/projectsData';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="project-not-found">
        <Navbar />
        <div className="not-found-content">
          <h2>Projeto não encontrado</h2>
          <p>O case do projeto que você procura não está disponível.</p>
          <Link to="/" className="btn-back-home">
            ← Voltar para o Portfólio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <Navbar />

      <main className="detail-container">
        {/* NAVEGAÇÃO DE RETORNO */}
        <div className="back-link-wrapper">
          <button onClick={() => navigate('/#projetos')} className="back-link">
            ← Voltar para todos os projetos
          </button>
        </div>

        {/* CABEÇALHO DO PROJETO */}
        <header className="detail-header">
          <span className="detail-tipo-tag">{project.tipo}</span>
          <h1 className="detail-title">{project.titulo}</h1>
          <p className="detail-subtitle">{project.descricaoCurta}</p>

          <div className="detail-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action primary"
                aria-label={`Ver repositório do projeto ${project.titulo} no GitHub`}
              >
                💻 Repositório no GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action secondary"
                aria-label={`Acessar demonstração ao vivo do projeto ${project.titulo}`}
              >
                🚀 Ver Projeto Online
              </a>
            )}
          </div>
        </header>

        {/* PREVIEW / IMAGEM PRINCIPAL */}
        <section className="detail-media">
          <div className="media-card">
            <img
              src={project.imagem}
              alt={`Demonstração visual do projeto ${project.titulo}`}
              className="detail-main-img"
            />
          </div>
        </section>

        {/* PROBLEMA E SOLUÇÃO (SE HOUVER) */}
        {project.problemaSolucao && (
          <section className="detail-section problem-solution-box">
            <h2>Problema & Solução</h2>
            <div className="ps-grid">
              <div className="ps-card problem">
                <h3>⚠️ O Problema</h3>
                <p>{project.problemaSolucao.problema}</p>
              </div>
              <div className="ps-card solution">
                <h3>💡 A Solução</h3>
                <p>{project.problemaSolucao.solucao}</p>
              </div>
            </div>
          </section>
        )}

        {/* SOBRE O PROJETO */}
        <section className="detail-section">
          <h2>Sobre o Projeto</h2>
          <p className="detail-text">{project.descricaoCompleta}</p>
        </section>

        {/* TECNOLOGIAS UTILIZADAS */}
        <section className="detail-section">
          <h2>Tecnologias Utilizadas</h2>
          <div className="detail-tech-list">
            {project.tecnologias.map((tech, index) => (
              <span key={index} className="detail-tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* FUNCIONALIDADES CHAVE */}
        {project.funcionalidades && project.funcionalidades.length > 0 && (
          <section className="detail-section">
            <h2>Funcionalidades Principais</h2>
            <ul className="detail-feature-list">
              {project.funcionalidades.map((func, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  <span>{func}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* COMO FUNCIONA / ARQUITETURA */}
        {project.comoFunciona && (
          <section className="detail-section">
            <h2>Como Funciona</h2>
            <p className="detail-text">{project.comoFunciona}</p>
          </section>
        )}

        {/* DESAFIOS E APRENDIZADOS */}
        <div className="details-two-col">
          <section className="detail-section half">
            <h2>Desafios Técnicos</h2>
            <p className="detail-text placeholder-note">{project.desafios}</p>
          </section>

          <section className="detail-section half">
            <h2>Principais Aprendizados</h2>
            <p className="detail-text placeholder-note">{project.aprendizados}</p>
          </section>
        </div>

        {/* MINHA PARTICIPAÇÃO */}
        <section className="detail-section">
          <h2>Minha Participação</h2>
          <p className="detail-text">{project.participacao}</p>
        </section>

        {/* RODAPÉ E NAVEGAÇÃO DA PÁGINA */}
        <footer className="detail-footer">
          <button onClick={() => navigate('/#projetos')} className="back-link footer-back">
            ← Voltar para os projetos
          </button>
          <div className="detail-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action primary"
              >
                💻 GitHub
              </a>
            )}
          </div>
        </footer>
      </main>
    </div>
  );
}
