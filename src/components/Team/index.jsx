import "./team.css";
import CardColaborador from "../CardColaborador";

const Team = ({ team, colaboradores, deleteColaborador }) => {
    const { name, primaryColor, secondaryColor } = team;

        return (
            colaboradores.length > 0 && (
                <section style={{ backgroundColor: secondaryColor }} className="team">
                    <h3>{name}</h3>
                    <span style={{ backgroundColor: primaryColor }}></span>

                    <div className="colaboradores">
                        {colaboradores.map(colaborador => {
                            return (
                                <CardColaborador 
                                    key={colaborador.nome} 
                                    primaryColor={primaryColor} 
                                    colaborador={colaborador} 
                                    deleteColaborador={deleteColaborador}
                                />
                            )
                        })}
                    </div>
                </section>
            )
        )
}

export default Team;