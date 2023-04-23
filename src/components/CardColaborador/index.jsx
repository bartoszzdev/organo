import "./cardColaborador.css";
import { XCircle, Heart } from "@phosphor-icons/react";

const CardColaborador = ({ color, colaborador, deleteColaborador, favoriteColaborador }) => {
    const { id, nome, cargo, imagem, favorite } = colaborador

    return (
        <div className="card">
            <div style={{ backgroundColor: color }} className="header-box">
                <XCircle 
                    size={24} 
                    color="#fafafa" 
                    weight="fill" 
                    className="deletar" 
                    onClick={() => deleteColaborador(id)} 
                />

                <img src={ imagem } alt="Imagem do colaborador." />
            </div>

            <div className="footer-box">
                <h4>{ nome }</h4>
                <h5>{ cargo }</h5>

                <Heart 
                    style={{ cursor: "pointer" }}
                    size={22} 
                    color={favorite ? "#ff0000" : "#000000"}
                    weight={favorite ? "fill" : "regular"}
                    onClick={() => favoriteColaborador(id)}
                />
            </div>
        </div>
    )
}

export default CardColaborador;