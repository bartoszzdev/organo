import "./cardColaborador.css";
import { XCircle } from "@phosphor-icons/react";

const CardColaborador = ({ primaryColor, colaborador, deleteColaborador }) => {
    const { nome, cargo, imagem } = colaborador

    return (
        <div className="card">
            <div style={{ backgroundColor: primaryColor }} className="header-box">
                <XCircle size={24} color="#fafafa" weight="fill" className="deletar" onClick={deleteColaborador} />

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