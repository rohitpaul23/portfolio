import './style/App.css';
import Header from './header';
import HomeBody from './pages/home/home_body';
import RouteSwitch from './RouteSwitch';
import Footer from './footer';
import {useState} from 'react';

function App() {
  const [urlHome, toggleHome] = useState('/');
  const [urlProject, toggleProject] = useState('./pages/project/project_body');
  const [urlSkill, toggleSkill] = useState('./pages/skill/skill_body');
  const [urlContact, toggleContact] = useState('./pages/contact/contact_body');

  return (
    <div className="App">
      <Header url = {[urlHome, urlProject, urlSkill, urlContact]} homeUrl = {toggleHome} projectUrl = {toggleProject} skillUrl = {toggleSkill} contactUrl = {toggleContact}/>
      <RouteSwitch homeURL={urlHome} projectURL={urlProject} skillURL={urlSkill} contactURL={urlContact}/>
      <Footer />
    </div>
  );
}

export default App;
