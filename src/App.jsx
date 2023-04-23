import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

const App = () => {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57C278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const addNewColaborador = (colaborador) => {
    setColaboradores(colaboradores => {
      return [
        ...colaboradores,
        colaborador
      ]
    })
  }

  const deleteColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const changeTeamColor = (color, id) => {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
       
      return team
    }))
  }

  const createNewTeam = (newTeam) => {
    setTeams([ ...teams, { ...newTeam, id: uuidv4() } ])
  }

  const favoriteColaborador = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorite = !colaborador.favorite
      }

      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        newColaborador={addNewColaborador} 
        createNewTeam={createNewTeam}
        teams={teams.map(team => team.name)} 
      />

      {colaboradores.length > 0 && ( 
        <section className="teams">
          <div className="teams-header">
            <h1>Minha Organização:</h1>
            <span></span>
          </div>

          {teams.map(team => {
            return (
              <Team 
                key={team.id} 
                team={team} 
                colaboradores={colaboradores.filter(colaborador => colaborador.time === team.name)}
                deleteColaborador={deleteColaborador}
                favoriteColaborador={favoriteColaborador}
                changeColor={changeTeamColor}
              />
            )
          })}
        </section>
      )}

      <Footer />
    </div>
  )
}

export default App
