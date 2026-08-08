import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Perfil from './assets/PerfilSemFundo.png';
import curriculo from './curriculo.pdf';
import SobreMim from './components/SobreMim';
import Habilidades from './components/Habilidades';
import javascript from './assets/javascript.svg';
import react from './assets/react.svg';
import python from './assets/python.svg';
import mysql from './assets/mysql.svg';
import node from './assets/nodejs.svg';
import postgresql from './assets/postgresql.svg';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './pages/ProjectDetail';
import { projectsData } from './data/projectsData';

function HomePage() {
  return (
    <>
      <Navbar />


      <section id="home" className="home">
        <div className="conteudo">
          <div className="img">
            <img src={Perfil} alt="Foto de perfil de Matheus Luna" />
          </div>

          <div className="texto">
            <p className="hello-text">
              Olá! Eu sou <span>Matheus Luna</span>
            </p>
            <h1>Desenvolvedor em Formação</h1>

            <p className="desc-text">
              Estudante do 2º período de Sistemas de Informação no IFAL, com formação técnica concluída em Informática. Foco em desenvolvimento web e na criação de soluções práticas, com conhecimentos em JavaScript, React, Node.js, Python, bancos de dados e integração de APIs. Busco desenvolver continuamente minhas habilidades e transformar ideias em aplicações funcionais e eficientes.
            </p>

            <a href={curriculo} download aria-label="Baixar currículo de Matheus Luna em PDF">
              <button className="btn">Baixar Currículo</button>
            </a>
          </div>
        </div>
      </section>


      <SobreMim />

      <section id="habilidades" className="habilidades">
        <h1>Habilidades</h1>
        <div className="top">
          <Habilidades
            imagem={javascript}
            nome="JavaScript"
            descricao="Linguagem de programação versátil para desenvolvimento web, automação e aplicações interativas."
          />

          <Habilidades
            imagem={react}
            nome="React"
            descricao="Biblioteca para construção de interfaces de usuário reativas e modernas."
          />

          <Habilidades
            imagem={python}
            nome="Python"
            descricao="Linguagem de programação de alto nível, ideal para automação, scripts e extração de dados."
          />
        </div>

        <div className="down">
          <Habilidades
            imagem={mysql}
            nome="MySQL"
            descricao="Sistema de gerenciamento de banco de dados relacional."
          />

          <Habilidades
            imagem={node}
            nome="Node.js"
            descricao="Ambiente de execução JavaScript no lado do servidor para criação de APIs REST."
          />

          <Habilidades
            imagem={postgresql}
            nome="PostgreSQL"
            descricao="Sistema de gerenciamento de banco de dados relacional de alto desempenho."
          />
        </div>
      </section>


      <section id="projetos" className="projetos">
        <div className="projetos-header">
          <h1>Projetos Destacados</h1>
          <p className="projetos-sub">
            Clique em qualquer card para explorar o case completo, funcionalidades e detalhes técnicos.
          </p>
        </div>

        <div className="carproject">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              imagem={project.imagem}
              titulo={project.titulo}
              descricao={project.descricaoCurta}
              tecnologias={project.tecnologias}
              github={project.github}
              demo={project.demo}
              tipo={project.tipo}
              destaque={project.destaque}
            />
          ))}
        </div>
      </section>


      <section id="contact" className="contact">
        <div className="contact-container">
          <h1>Contato</h1>

          <p>
            Entre em contato comigo para oportunidades de estágio, projetos ou qualquer dúvida.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <a href="mailto:matheusluna1925@gmail.com" aria-label="Enviar email para matheusluna1925@gmail.com">
                📧 Email
              </a>
              <a href="https://github.com/Matheuss07" target="_blank" rel="noopener noreferrer" aria-label="Acessar perfil de Matheus Luna no GitHub">
                💻 GitHub
              </a>
              <a href="https://www.linkedin.com/in/matheusluna8" target="_blank" rel="noopener noreferrer" aria-label="Acessar perfil de Matheus Luna no LinkedIn">
                🔗 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projetos/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}