
import profilePics from './../../image/profile.jpeg';

function Intro(){
    return (
        <div className="App-intro">
            <div>
                <p> Hi there! <br /> 
                    &emsp; I'm <strong>Rohit Paul</strong>. <br /> 
                    A Computer Enthusiast who love developing stuff and playing with data. 
                </p>
            </div>
            <img src={profilePics} alt="My Pics" /> 
        </div>
    );
}

export default Intro;