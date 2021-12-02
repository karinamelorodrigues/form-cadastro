import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import "@fontsource/roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography 
        variant="h3" 
        component="h1" 
        align="center"
      >
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
