import './style/header.css';

function Header(props){
    const homeClicked = () => {
        if (props.url[0] === './pages/home/home_body') {
            props.homeUrl('/');
            props.projectUrl('./pages/project/project_body');
            props.skillUrl('./pages/Skill/skill_body');
            props.contactUrl('./pages/contact/contact_body');
        }
    }

    const projectClicked = () => {
        if (props.url[1] === './pages/project/project_body') {
            props.homeUrl('./pages/home/home_body');
            props.projectUrl('/');
            props.skillUrl('./pages/skill/skill_body');
            props.contactUrl('./pages/contact/contact_body');
        }
    }

    const skillClicked = () => {
        if (props.url[2] === './pages/skill/skill_body') {
            props.homeUrl('./pages/home/home_body');
            props.projectUrl('./pages/project/project_body');
            props.skillUrl('/');
            props.contactUrl('./pages/contact/contact_body');
        }
    }

    const contactClicked = () => {
        if (props.url[3] === './pages/contact/contact_body') {
            props.homeUrl('./pages/home/home_body');
            props.projectUrl('./pages/project/project_body');
            props.skillUrl('./pages/Skill/skill_body');
            props.contactUrl('/');
        }
    }

    return (
        <div className="App-header">
            <img src='#' className="App-logo" alt="logo" />
            <p>
                My Portfolio
            </p>
            <div onClick={homeClicked}>Home</div>
            <div onClick={projectClicked}>Projects</div>
            <div onClick={skillClicked}>Skills</div>
            <div onClick={contactClicked}>Contact</div>
        </div>
    );
}

export default Header;