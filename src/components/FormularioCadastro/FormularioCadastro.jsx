import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Step, Stepper, Typography, StepLabel } from '@material-ui/core';

function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length){
            console.log(dadosColetados);
        }
        
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletaDados}/>, 
        <DadosPessoais aoEnviar={coletaDados}/>, 
        <DadosEntrega aoEnviar={coletaDados}/>,
        <Typography variant="h5">Obrigado pelo Cadastro</Typography>
    ];

    function coletaDados(dados) {
        setDados({...dadosColetados,...dados});
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual+1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Dados Pessoais</StepLabel></Step>
                <Step><StepLabel>Dados de Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
       
    );

}

export default FormularioCadastro;