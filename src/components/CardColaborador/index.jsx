import "./cardColaborador.css";

const CardColaborador = ({ primaryColor, colaborador }) => {
    const { nome, cargo, imagem } = colaborador

    return (
        <div className="card">
            <div style={{ backgroundColor: primaryColor }} className="header-box">
                <img src={imagem} alt="Imagem do colaborador." />
            </div>

            <div className="footer-box">
                <h4>{ nome }</h4>
                <h5>{ cargo }</h5>
            </div>
        </div>
    )
}

export default CardColaborador;