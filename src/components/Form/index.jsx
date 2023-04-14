import { useState } from 'react';
import './form.css';

// Components
import TextField from '../TextField';
import SelectField from '../SelectField';
import Button from '../Button';

const Form = ({ newColaborador, teams }) => {
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const createCard = (e) => {
        e.preventDefault()
        newColaborador({
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

    return (
        <section className="form">
            <form onSubmit={createCard}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>

                <TextField 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required={true}
                    value={nome}
                    setValue={setNome}
                />
                <TextField 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    required={true}
                    value={cargo}
                    setValue={setCargo}
                />
                <TextField 
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
        </section>
    )
}

export default Form