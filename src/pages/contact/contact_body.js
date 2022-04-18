import '../../style/contact.css';
import mailSrc from "./image/mail.png";
import phoneSrc from "./image/phone.png";
import addSrc from "./image/address.png";
import linkedinSrc from "./image/linkedin.png";
import githubSrc from "./image/github.png";

function ContactBody(){
    return (
        <div className='body'>
            <div className='contactsDetails'>
                <div>
                    <img src={mailSrc}/>
                    <h3>rohitpaul97@gmail.com</h3>
                </div>
                <div>
                    <img src={phoneSrc}/>
                    <h3>+91-7577887226</h3>
                </div>
                <div>
                    <img src={addSrc}/>
                    <h3>Tinsukia, Assam, India, PIN-786151</h3>
                </div>
                <div>
                    <img src={linkedinSrc}/>
                    <h3>https://www.linkedin.com/in/rohit-paul-91038310b/</h3>
                </div>
                <div>
                    <img src={githubSrc}/>
                    <h3>https://github.com/rohitpaul23</h3>
                </div>                
            </div>
        </div>
    );
}

export default ContactBody;
