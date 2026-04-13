import react from "react";
import "./navbar.css";
import logo from "../assets/logo-portifolio.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar