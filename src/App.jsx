import { useState } from 'react';

// Components
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

const teams = [
  {
    name: "Programação",
    primaryColor: "#57C278",
    secondaryColor: "#D9F7E9",
  },
  {
    name: "Front-End",
    primaryColor: "#82CFFA",
    secondaryColor: "#E8F8FF",
  },
  {
    name: "Data Science",
    primaryColor: "#A6D157",
    secondaryColor: "#F0F8E2",
  },
  {
    name: "Devops",
    primaryColor: "#E06B69",
    secondaryColor: "#FDE7E8",
  },
  {
    name: "UX e Design",
    primaryColor: "#DB6EBF",
    secondaryColor: "#FAE9F5",
  },
  {
    name: "Mobile",
    primaryColor: "#FFBA05",
    secondaryColor: "#FFF5D9",
  },
  {
    name: "Inovação e Gestão",
    primaryColor: "#FF8A29",
    secondaryColor: "#FFEEDF",
  },
]

const App = () => {
  const [colaboradores, setColaboradores] = useState([])

  const addNewColaborador = (colaborador) => {
    setColaboradores(colaboradores => {
      return [
        ...colaboradores,
        colaborador
      ]
    })
  }

  const deleteColaborador = () => {
    console.log("Deletandoooo")
  }

  return (
    <div className="App">
      <Banner />
      <Form newColaborador={addNewColaborador} teams={teams.map(team => team.name)} />

      {colaboradores.length > 0 && ( 
        <section className="teams">
          <div className="teams-header">
            <h1>Minha Organização:</h1>
            <span></span>
          </div>

          {teams.map(team => {
            return <Team 
              key={team.name} 
              team={team} 
              colaboradores={colaboradores.filter(colaborador => colaborador.time === team.name)}
              deleteColaborador={deleteColaborador}
            />
          })}
        </section>
      )}

      <Footer />
    </div>
  )
}

export default App
