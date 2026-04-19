import './App.css'
import Navbar from './components/navbar'
import Perfil from './assets/PerfilSemFundo.png'
import curriculo from './curriculo.pdf'
import Habilidades from './components/Habilidades'
import javascript from './assets/javascript.svg'
import react from './assets/react.svg'
import python from './assets/python.svg'
import mysql from './assets/mysql.svg'
import node from './assets/nodejs.svg'
import postgresql from './assets/postgresql.svg'
import ProjectCard from './components/ProjectCard'
import projetoImg from './assets/netflix1.png'
import projeto2Img from './assets/hospitalapi.png'


function App() {
  return (
    <>
      <Navbar />
      <section id="home" className='home'>

        <div className='conteudo'>

          <div className='img'>
            <img src={Perfil} alt="Foto de Perfil" />
          </div>

          <div className='texto'>
            <p className='hello-text'>Hello! I Am <span>Matheus Luna</span></p>
            <h1>
              A Software Engineer
            </h1>

            <p className='desc-text'>
              Desenvolvedor de Software com sólida base em lógica de programação, desenvolvimento web e automação, criando soluções eficientes e bem estruturadas.
            </p>

            <a href={curriculo} download>
              <button className="btn">
                Baixar Currículo
              </button>
            </a>
          </div>

        </div>

      </section>
      <section id="habilidades" className='habilidades'>
        <h1>Habilidades</h1>
        <div className='top'>
          <Habilidades
            imagem={javascript}
            nome="JavaScript"
            descricao="Linguagem de programação versátil para desenvolvimento web, automação e muito mais." />

          <Habilidades
            imagem={react}
            nome="React"
            descricao="Biblioteca para construção de interfaces de usuário." />

          <Habilidades
            imagem={python}
            nome="Python"
            descricao="Linguagem de programação de alto nível, conhecida por sua simplicidade e poder." />
        </div>
        <div className='down'>
          <Habilidades
            imagem={mysql}
            nome="MySQL"
            descricao="Sistema de gerenciamento de banco de dados relacional." />

          <Habilidades
            imagem={node}
            nome="Node.js"
            descricao="Ambiente de execução para JavaScript no lado do servidor." />

          <Habilidades
            imagem={postgresql}
            nome="PostgreSQL"
            descricao="Sistema de gerenciamento de banco de dados relacional." />
        </div>
      </section>
      <section id="projetos" className='projetos'>
        <h1>Projetos</h1>
        <div className='carproject'>
          <ProjectCard
            imagem={projetoImg}
            titulo="Api Netflix"
            categoria="Aplicação frontend em React integrada à API do TMDb, utilizada para exibição dinâmica de filmes e séries, com consumo de dados via Axios."
          />
          <ProjectCard
            imagem={projeto2Img}
            titulo="Api Hospital"
            categoria="API REST desenvolvida com Node.js e Sequelize para gerenciamento de entidades como médicos, pacientes, consultas e prontuários, com operações de CRUD e validação de dados."
          />
        </div>
      </section>
      <section id="contact" className="contact">

        <div className="contact-container">
          <h1>Contato</h1>

          <p>
            Entre em contato comigo para oportunidades, projetos ou qualquer dúvida.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <a href="mailto:matheusluna1925@gmail.com">📧 Email</a>
              <a href="https://github.com/Matheuss07" target="_blank">💻 GitHub</a>
              <a href="https://www.linkedin.com/in/matheusluna8" target="_blank">🔗 LinkedIn</a>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default App