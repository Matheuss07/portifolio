import "./Habilidades.css"

export default function Habilidades({ imagem, nome, descricao }) {
  return (
    <div className="card">
      
      <div className="card-icon">
        <img src={imagem} alt={nome} />
      </div>

      <h2>{nome}</h2>

      <p>{descricao}</p>

    </div>
  )
}