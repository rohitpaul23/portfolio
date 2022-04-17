import './style/header.css';
import {useState} from 'react';


function Header(props){

    const [homeColor, homeColorChange] = useState('#535a66');
    const [educationColor, educationColorChange] = useState('#282c34');
    const [projectColor, projectColorChange] = useState('#282c34');
    const [skillColor, skillColorChange] = useState('#282c34');
    const [contactColor, contactColorChange] = useState('#282c34');

    const reset = () => {
        homeColorChange('#282c34');
        educationColorChange('#282c34');
        projectColorChange('#282c34');
        skillColorChange('#282c34');
        contactColorChange('#282c34');
    }

    const homeClicked = () => {
        if (props.url[0] === './pages/home/home_body') {
            props.homeUrl('/');
            props.educationUrl('./pages/education/education_body');
            props.projectUrl('./pages/project/project_body');
            props.skillUrl('./pages/skill/skill_body');
            props.contactUrl('./pages/contact/contact_body');
            reset();
            homeColorChange('#535a66');
        }
    }

    const educationClicked = () => {
        if (props.url[1] === './pages/education/education_body') {
            props.homeUrl('./pages/home/home_body');
            props.educationUrl('/');
            props.projectUrl('./pages/project/project_body');
            props.skillUrl('./pages/skill/skill_body');
            props.contactUrl('./pages/contact/contact_body');
            reset();
            educationColorChange('#535a66');
        }
    }

    const projectClicked = () => {
        if (props.url[2] === './pages/project/project_body') {
            props.homeUrl('./pages/home/home_body');
            props.educationUrl('./pages/education/education_body');
            props.projectUrl('/');
            props.skillUrl('./pages/skill/skill_body');
            props.contactUrl('./pages/contact/contact_body');
            reset();
            projectColorChange('#535a66');
        }
    }

    const skillClicked = () => {
        if (props.url[3] === './pages/skill/skill_body') {
            props.homeUrl('./pages/home/home_body');
            props.educationUrl('./pages/education/education_body');
            props.projectUrl('./pages/project/project_body');
            props.skillUrl('/');
            props.contactUrl('./pages/contact/contact_body');
            reset();
            skillColorChange('#535a66');
        }
    }

    const contactClicked = () => {
        if (props.url[4] === './pages/contact/contact_body') {
            props.homeUrl('./pages/home/home_body');
            props.educationUrl('./pages/education/education_body');
            props.projectUrl('./pages/project/project_body');
            props.skillUrl('./pages/skill/skill_body');
            props.contactUrl('/');
            reset();
            contactColorChange('#535a66');
        }
    }


    return (
        <div className="App-header">
            <img src='#' className="App-logo" alt="logo" />
            <p>
                My Portfolio
            </p>
            <button onClick={homeClicked} style = {{backgroundColor:homeColor}}>Home</button>
            <button onClick={educationClicked} style = {{backgroundColor:educationColor}}>Education</button>
            <button onClick={projectClicked} style = {{backgroundColor:projectColor}}>Projects</button>
            <button onClick={skillClicked} style = {{backgroundColor:skillColor}}>Skills</button>
            <button onClick={contactClicked} style = {{backgroundColor:contactColor}}>Contact</button>
        </div>
    );
}

export default Header;