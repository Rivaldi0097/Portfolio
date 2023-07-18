import './App.css';
import AppHeader from './Components/AppHeader';
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

        <AppHeader/>

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
