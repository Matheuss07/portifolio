import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (e, anchor) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${anchor}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {!isHomePage && (
          <button 
            className="back-portfolio-btn" 
            onClick={() => navigate('/')}
            aria-label="Voltar para a página principal do portfólio"
          >
            ← Voltar para o Portfólio
          </button>
        )}

        <ul className="nav-links">
          <li><a href="/#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="/#sobre" onClick={(e) => handleNavClick(e, 'sobre')}>Sobre Mim</a></li>
          <li><a href="/#habilidades" onClick={(e) => handleNavClick(e, 'habilidades')}>Habilidades</a></li>
          <li><a href="/#projetos" onClick={(e) => handleNavClick(e, 'projetos')}>Projetos</a></li>
          <li><a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;