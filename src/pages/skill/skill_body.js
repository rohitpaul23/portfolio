import '../../style/skill.css'
import Tab from "./tabSkill";
import htmlSrc from "./image/html.png";
import cssSrc from "./image/css3.png";
import jsSrc from "./image/javascript.png";
import reactSrc from "./image/react.png";
import nodejsSrc from "./image/node-js.png";
import gitSrc from "./image/git.png";
import githubSrc from "./image/github.png";
import mongodbSrc from "./image/mongodb.png";
import webpackSrc from "./image/webpack.png";
import javaSrc from "./image/java.png";
import pythonSrc from "./image/python.png";
import vsSrc from "./image/visualstudio.png";
import msSrc from "./image/microsoft-office.png";
import windowsSrc from "./image/windows.png";
import linuxSrc from "./image/linux.png";


function SkillBody(){  
    return (
        <div className='bodySkill'>
            <h3>Skill</h3>
            <div className="containSkill">
                <Tab gif = {htmlSrc}/> 
                <Tab gif = {cssSrc}/>
                <Tab gif = {jsSrc}/>
                <Tab gif = {reactSrc}/>
                <Tab gif = {nodejsSrc}/>
                <Tab gif = {gitSrc}/>
                <Tab gif = {githubSrc}/>
                <Tab gif = {mongodbSrc}/>
                <Tab gif = {webpackSrc}/>
                <Tab gif = {javaSrc}/>
                <Tab gif = {pythonSrc}/>
                <Tab gif = {vsSrc}/>
                <Tab gif = {msSrc}/>
                <Tab gif = {windowsSrc}/>
                <Tab gif = {linuxSrc}/>
            </div>
        </div>
       );
   }
   

export default SkillBody;