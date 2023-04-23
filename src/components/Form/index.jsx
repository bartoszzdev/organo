import './form.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
import InputField from '../InputField';
import SelectField from '../SelectField';
import Button from '../Button';

const Form = ({ newColaborador, createNewTeam, teams }) => {
    // Colaborador
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")
    // Time
    const [timeNome, setTimeNome] = useState("")
    const [timeCor, setTimeCor] = useState("#000000")

    const createCard = (e) => {
        e.preventDefault()
        newColaborador({
            id: uuidv4(),
            favorite: false,
            nome,
            cargo, 
            imagem,
            time
        })

        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    const createTeam = (e) => {
        e.preventDefault()
        createNewTeam({
            name: timeNome,
            color: timeCor
        })

        setTimeNome("")
        setTimeCor("#000000")
    }

    return (
        <section className="form">
            <form onSubmit={createCard}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>

                <InputField 
                    type="text"
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required={true}
                    value={nome}
                    setValue={setNome}
                />
                <InputField 
                    type="text"
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    required={true}
                    value={cargo}
                    setValue={setCargo}
                />
                <InputField 
                    type="text"
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    required={true}
                    value={imagem}
                    setValue={setImagem}
                />

                <SelectField 
                    label="Time" 
                    itens={teams} 
                    required={true} 
                    value={time}
                    setValue={setTime}
                />

                <Button>
                    Criar Card
                </Button>
            </form>
            
            <form onSubmit={createTeam}>
                <h2>Preencha os dados para criar um novo time.</h2>

                <InputField 
                    type="text"
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    required={true}
                    value={timeNome}
                    setValue={setTimeNome}
                />
                <InputField 
                    type="color"
                    label="Cor" 
                    placeholder="" 
                    required={true}
                    value={timeCor}
                    setValue={setTimeCor}
                />

                <Button>
                    Criar Time
                </Button>
            </form>
        </section>
    )
}

export default Form