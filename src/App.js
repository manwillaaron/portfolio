import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import SmallProjects from './components/SmallProjects/SmallProject';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Header from './components/Header/Header';

const App = () =>(
    <div className="App">
      <Intro />
      <About />
      <Projects />
      {/* <SmallProjects /> */}
      <Technologies />
    </div>
  );


export default App;
