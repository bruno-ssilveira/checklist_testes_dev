import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ["Consistência Visual", "Consistência Comportamental", "Fluxo e Navegação", "Padrões e Expectativas"];

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(113, 51, 129)', // roxo para o ícone ativo
    },
  },
});

function StepperComponent(props) {
  return (
    <ThemeProvider theme={theme}>
        <Stepper style={{width: "100%",}} activeStep={props.page} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
                <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
    </ThemeProvider>
  );
}

export default StepperComponent;