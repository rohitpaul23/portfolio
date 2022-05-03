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
import cSrc from "./image/c.png";
import cplusSrc from "./image/c_plus.png";
import javaSrc from "./image/java.png";
import pythonSrc from "./image/python.png";
import vsSrc from "./image/visualstudio.png";
import msSrc from "./image/microsoft-office.png";
import windowsSrc from "./image/windows.png";
import linuxSrc from "./image/linux.png";


function SkillBody(){  
    return (
        <div className='bodySkill'>
            <h3>Languages</h3>
            <div className="programmingSkill">
                <Tab gif = {htmlSrc} name='HTML'/> 
                <Tab gif = {cssSrc} name='CSS'/>
                <Tab gif = {jsSrc} name='JavaScript'/>
                <Tab gif = {mongodbSrc} name='mongoDB'/>
                <Tab gif = {cSrc} name='C++ Language'/>
                <Tab gif = {cplusSrc} name='C Language'/>
                <Tab gif = {javaSrc} name='Java'/>
                <Tab gif = {pythonSrc} name='Python'/>
            </div>
            <h3>Framework and Libraries</h3>
            <div className='frameworkSkill'>
                <Tab gif = {reactSrc} name='React'/>
                <Tab gif = {nodejsSrc} name='NodeJS'/>
                <Tab gif = {webpackSrc} name='webpack'/>
            </div>
            <h3>Software</h3>
            <div className='softwareSkill'>
                <Tab gif = {gitSrc} name='Git'/>
                <Tab gif = {githubSrc} name='Github'/>
                <Tab gif = {vsSrc} name='Visual Studio'/>
                <Tab gif = {msSrc} name='Microsoft Office'/>
                <Tab gif = {windowsSrc} name='Windows'/>
                <Tab gif = {linuxSrc} name='Linux'/>            
            </div>
        </div>
       );
   }
   

export default SkillBody;