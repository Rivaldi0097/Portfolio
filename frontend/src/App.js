import './App.css';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import ContactMe from './Components/ContactMe';
import MuiTheme from './MuiTheme';
import { ThemeProvider } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={MuiTheme}>
      <div className="App">


        <AboutMe/>

        <Education/>

        <Skills/>

        <Experience/>

        <ContactMe/>


      </div>
    </ThemeProvider>
  );
}

export default App;
