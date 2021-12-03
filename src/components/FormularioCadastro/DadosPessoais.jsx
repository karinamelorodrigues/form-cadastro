import React, {useState, useContext} from 'react';
import { TextField, Button, Switch, FormControlLabel} from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event)=>{
                event.preventDefault();
                if(possoEnviar()) {
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
                }
                
            }}
        >
            
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                name="nome"
                required
                label="Nome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />
           
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                name="sobrenome"
                required
                label="Sobrenome" 
                variant="outlined" 
                margin="normal"
                fullWidth
            />
          
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                id="cpf"
                name="cpf"
                required
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth
                error= {!erros.cpf.valido}
                helperText={erros.cpf.texto}
            />
        
            <FormControlLabel 
                label="Promoções" 
                control={
                    <Switch
                        checked={promocoes} 
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }} 
                        name="promocoes"
                        color="primary"
                    />
                }
            />

            <FormControlLabel 
                label="Novidades" 
                control={
                    <Switch 
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }} 
                        name="novidades" 
                        color="primary"
                    />
                }
            />
            
            <Button 
                variant="contained" 
                color="primary" 
                type="submit">
                Próximo
            </Button>
        </form>
    );

}

export default DadosPessoais;