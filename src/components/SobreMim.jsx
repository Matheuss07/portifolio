import React from 'react';
import './SobreMim.css';

export default function SobreMim() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-container">
        <h1>Sobre Mim</h1>

        <div className="sobre-card">
          <div className="sobre-badge">Sistemas de Informação • IFAL</div>

          <p className="sobre-texto">
            Olá! Sou o <strong>Matheus Luna</strong>, estudante do <strong>2º período de Sistemas de Informação no Instituto Federal de Alagoas (IFAL)</strong>, com formação técnica concluída em <strong>Informática</strong>.
          </p>

          <p className="sobre-texto">
            Tenho foco no desenvolvimento de aplicações web modernas e na criação de soluções práticas, utilizando tecnologias como <strong>JavaScript, React, Node.js, Python e Bancos de Dados Relacionais</strong>. Busco desenvolver aplicações eficientes, organizadas e funcionais, aplicando boas práticas de programação e arquitetura de software.
          </p>

          <p className="sobre-texto">
            Estou em busca da minha <strong>primeira oportunidade profissional (Estágio / Desenvolvedor Júnior)</strong> na área de tecnologia, onde possa contribuir com projetos reais, colocar meus conhecimentos em prática, aprender com profissionais experientes e continuar evoluindo como desenvolvedor.
          </p>

          <div className="sobre-highlights">
            <div className="highlight-item">
              <span className="highlight-number">03+</span>
              <span className="highlight-label">Projetos Destacados</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">IFAL</span>
              <span className="highlight-label">Formação Técnica</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">Web & Data</span>
              <span className="highlight-label">Foco de Atuação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
