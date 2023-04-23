import "./team.css";
import hexToRgba from "hex-to-rgba";

// Components
import CardColaborador from "../CardColaborador";

const Team = ({ team, colaboradores, deleteColaborador, favoriteColaborador, changeColor }) => {
    const { id, name, color } = team;

        return (
            colaboradores.length > 0 && (
                <section style={{ backgroundColor: hexToRgba(color, 0.6) }} className="team">
                    <h3>{ name }</h3>
                    <span style={{ backgroundColor: color }}></span>

                    <input 
                        type="color" 
                        value={color} 
                        onChange={(e) => changeColor(e.target.value, id)} 
                        className="input-color-team" 
                    />

                    <div className="colaboradores">
                        {colaboradores.map(colaborador => {
                            return (
                                <CardColaborador 
                                    key={colaborador.id} 
                                    color={color} 
                                    colaborador={colaborador} 
                                    deleteColaborador={deleteColaborador}
                                    favoriteColaborador={favoriteColaborador}
                                />
                            )
                        })}
                    </div>
                </section>
            )
        )
}

export default Team;