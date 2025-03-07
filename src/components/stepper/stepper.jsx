import { createTheme, ThemeProvider } from '@mui/material/styles'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import { useNavigate } from 'react-router-dom'

const steps = ["Consistência Visual", "Consistência Comportamental", "Fluxo e Navegação", "Padrões e Expectativas"];

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(113, 51, 129)', // Roxo para ativo e completo
    },
  },
  components: {
    MuiStepLabel: {
      styleOverrides: {
        label: {
          cursor: "pointer",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          transition: 'all 0.3s ease',
          background: 'radial-gradient(circle, #f0f0f0 0%, #d3d3d3 100%)', 
          borderRadius: '50%',
          '&.Mui-active': {
            background: 'linear-gradient(145deg, #A25AAC, #713381)',
            transform: 'scale(1.1)',
          },
          '&:hover': {
            transform: 'scale(1.15)',
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderWidth: '3px',
          borderColor: '#d3d3d3',
        },
        root: {
          '&.Mui-active .MuiStepConnector-line, &.Mui-completed .MuiStepConnector-line': {
            borderColor: 'rgb(113, 51, 129)',
          },
        },
      },
    },
  },
});

function StepperComponent(props) {
  const navigate = useNavigate()

  // Mapeamento das páginas para cada etapa do Stepper
  const routes = ["/checklist/checklist1", "/checklist/checklist2", "/checklist/checklist3", "/checklist/checklist4"]

  return (
    <ThemeProvider theme={theme}>
        <Stepper style={{ width: "100%" }} activeStep={props.page} alternativeLabel >
          {steps.map((label, index) => (
            <Step key={index} >
              <StepButton onClick={() => navigate(routes[index])} disabled={false} >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
    </ThemeProvider>
  )
}

export default StepperComponent