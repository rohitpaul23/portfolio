
import profilePics from './../../image/profile.jpeg';
import resume from './../../file/Rohit_Paul_Resume.pdf';


function Intro(){
    return (
        <div className="App-intro">
            <div>
                <p> Hi there! <br /> 
                    &emsp; I'm <strong>Rohit Paul</strong>. <br /> 
                    A Computer Enthusiast who love developing stuff and playing with data. 
                </p>
                <a href={resume} download='rohitpaul'>
                    <button className='resume'>My Resume</button>
                </a>
            </div>
            <img src={profilePics} alt="My Pics" /> 
        </div>
    );
}

export default Intro;