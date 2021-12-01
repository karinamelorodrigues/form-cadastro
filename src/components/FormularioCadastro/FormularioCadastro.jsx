import React from 'react';
import { TextField, Button, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro() {
    return (
        <form>
            <TextField 
                id="nome" 
                label="Nome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />

            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal"
                fullWidth
            />

            <TextField 
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />
            <FormControlLabel 
                label="Promoções" 
                control={<Switch name="promocoes" defaultChecked color="primary"></Switch>}
            />

            <FormControlLabel 
                label="Novidades" 
                control={<Switch name="novidades" defaultChecked color="primary"></Switch>}
            />
            
            <Button 
                variant="contained" 
                color="primary" 
                type="submit">
                Cadastrar
            </Button>
        </form>
    );

}

export default FormularioCadastro;