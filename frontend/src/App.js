import './App.css';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import ContactMe from './Components/ContactMe';
import MuiTheme from './MuiTheme';
import { ThemeProvider } from '@mui/material';
import { Helmet } from 'react-helmet-async';

function App() {

  return (
    <ThemeProvider theme={MuiTheme}>

      <Helmet>
        <meta
          name='description'
          content="I am Rivaldi Kongres, a recent graduate from Singapore Management University (SMU). Feel free to look at my porfolio!
          You can find my contact information inside!
          "
        />

        <link
          rel="canonical" href='/'
        />
      </Helmet>

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
