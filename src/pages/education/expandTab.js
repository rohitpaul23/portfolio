import {useState} from 'react';

function ExpandTab(props){

    switch (props.topic) {
        case "Class 10":
            if (props.toView10 === 0)
                return '';
            else{
                return (
                    <div>
                        <div className='contentSection'><span>School :</span> Kendriya Vidyalaya ARC Doom Dooma</div>
                        <div className='contentSection'><span>Place :</span> Doom Dooma, Assam, India, Pincode - 786151</div>
                        <div className='contentSection'><span>CGPA :</span> 9.2/10</div>
                    </div>
                );
            }
                
            break;
            
        case "Class 12":
            if (props.toView12 === 0)
                return '';
            else{
                return (
                    <div>
                        <div className='contentSection'><span>School :</span> Kendriya Vidyalaya ARC Doom Dooma</div>
                        <div className='contentSection'><span>Place :</span> Doom Dooma, Assam, India, Pincode - 786151</div>
                        <div className='contentSection'><span>Stream :</span> Science</div>
                        <div className='contentSection'><span>Percentage :</span> 80.8/100</div>
                    </div>
                );
            }
                           
            break;
            
        case "Bachelor":
            if (props.toViewB === 0) {
                return '';
            } else {
                return (
                    <div>
                        <div className='contentSection'><span>Institute :</span> Tezpur University</div>
                        <div className='contentSection'><span>Place :</span> Sonitpur, Tezpur, Assam, India, Pincode - 784028</div>
                        <div className='contentSection'><span>Degree :</span> Bachelor of Technology</div>
                        <div className='contentSection'><span>Department :</span> Computer Science and Engineering</div>
                        <div className='contentSection'><span>CGPA :</span> 7.36/10</div>
                    </div>
                );
            }
                

            break;
            
        case "Masters":
            if (props.toViewM === 0) {
                return '';
            } else {
                return (
                    <div>
                        <div className='contentSection'><span>Institute :</span> Indian Institute of Engineering Science and Technology</div>
                        <div className='contentSection'><span>Place :</span> Shibpur, Howrah, West Bengal, India, Pincode - 711103</div>
                        <div className='contentSection'><span>Degree :</span> Master of Technology</div>
                        <div className='contentSection'><span>Department :</span> Computer Science and Engineering</div>
                        <div className='contentSection'><span>Specialization :</span> Computer Science and Technology</div>
                        <div className='contentSection'><span>CGPA :</span> 9.03/10</div>
                    </div>
                );              
            }

            break;
                
        case "Other Certification":
            if (props.toViewO === 0) {
                return '';
            } else {
                return (
                    <div className='certContent'>
                    <ul>
                        <li>
                            <div className='certTitle'>Python Programming Essential</div>
                            <div className='certUrl'><a href='coursera.org/verify/BZU9955YK28H'>coursera.org/verify/BZU9955YK28H</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>Python Data Representation</div>
                            <div className='certUrl'><a href='coursera.org/verify/4RJ6CHTZ6ZHW'>coursera.org/verify/4RJ6CHTZ6ZHW</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>Python Data Analysis</div>
                            <div className='certUrl'><a href='coursera.org/verify/TPE4AWU7KK5R'>coursera.org/verify/TPE4AWU7KK5R</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>Python Data Visualization</div>
                            <div className='certUrl'><a href='coursera.org/verify/Y7SBX34Z9385'>coursera.org/verify/Y7SBX34Z9385</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>Introduction to Data Science in Python</div>
                            <div className='certUrl'><a href='coursera.org/verify/KQKTTP4PLL2B'>coursera.org/verify/KQKTTP4PLL2B</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>Cluster Analysis in Data Mining</div>
                            <div className='certUrl'><a href='coursera.org/verify/MWQJF4MSSNC7'>coursera.org/verify/MWQJF4MSSNC7</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>Mathematics for Machine Learning: Linear Algebra</div>
                            <div className='certUrl'><a href='coursera.org/verify/B5WNS558EWCD'>coursera.org/verify/B5WNS558EWCD</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>Data Analysis with Python: Zero to Pandas</div>
                            <div className='certUrl'><a href='https://jovian.ai/certificate/MFQTCNZQG4'>https://jovian.ai/certificate/MFQTCNZQG4</a> </div>
                        </li>
                        <li>
                            <div className='certTitle'>Deep Learning with PyTorch: Zero to GANs</div>
                            <div className='certUrl'><a href='https://jovian.ai/certificate/MFQTONJTG4'>https://jovian.ai/certificate/MFQTONJTG4</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>Discrete Math and Analyzing Social Graphs</div>
                            <div className='certUrl'><a href='coursera.org/verify/RAHD358BJ95W'>coursera.org/verify/RAHD358BJ95W</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>M001: MongoDB Basics</div>
                            <div className='certUrl'><a href='https://university.mongodb.com/course_completion/aef2ec93-6d26-4737-a378-923f699bdf14?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing'>https://university.mongodb.com/course_completion/aef2ec93-6d26-4737-a378-923f699bdf14?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing</a></div>
                        </li>
                        <li>
                            <div className='certTitle'>Machine Learning Model Deployment using Flask</div>
                            <div className='certUrl'><a href='https://olympus1.mygreatlearning.com/course_certificate/IMOOQIZB'>https://olympus1.mygreatlearning.com/course_certificate/IMOOQIZB</a></div>
                        </li>
                    </ul>
                </div>
            );       
        }
                
            break;
            
        default: return '';
            break;
    }
}
    

export default ExpandTab;



/*
            <div className='educationSection'>
                <div className='bar'>Class 10</div>
                <div className='content'>
                    <div className='contentSection'><span>School :</span> Kendriya Vidyalaya ARC Doom Dooma</div>
                    <div className='contentSection'><span>Place :</span> Doom Dooma, Assam, India, Pincode - 786151</div>
                    <div className='contentSection'><span>CGPA :</span> 9.2/10</div>
                </div>
            </div>
            
            <div className='educationSection'>
                <div className='bar'>Class 12</div>
                <div className='content'>
                    <div className='contentSection'><span>School :</span> Kendriya Vidyalaya ARC Doom Dooma</div>
                    <div className='contentSection'><span>Place :</span> Doom Dooma, Assam, India, Pincode - 786151</div>
                    <div className='contentSection'><span>Stream :</span> Science</div>
                    <div className='contentSection'><span>Percentage :</span> 80.8/100</div>
                </div>
            </div>

            <div className='educationSection'>
                <div className='bar'>Bachelor</div>
                <div className='content'>
                    <div className='contentSection'><span>Institute :</span> Tezpur University</div>
                    <div className='contentSection'><span>Place :</span> Sonitpur, Tezpur, Assam, India, Pincode - 784028</div>
                    <div className='contentSection'><span>Degree :</span> Bachelor of Technology</div>
                    <div className='contentSection'><span>Department :</span> Computer Science and Engineering</div>
                    <div className='contentSection'><span>CGPA :</span> 7.36/10</div>
                </div>
            </div>

            <div className='educationSection'>
                <div className='bar'>Masters</div>
                <div className='content'>
                    <div className='contentSection'><span>Institute :</span> Indian Institute of Engineering Science and Technology</div>
                    <div className='contentSection'><span>Place :</span> Shibpur, Howrah, West Bengal, India, Pincode - 711103</div>
                    <div className='contentSection'><span>Degree :</span> Master of Technology</div>
                    <div className='contentSection'><span>Department :</span> Computer Science and Engineering</div>
                    <div className='contentSection'><span>Specialization :</span> Computer Science and Technology</div>
                    <div className='contentSection'><span>CGPA :</span> 9.03/10</div>
                </div>
            </div>

            <div className='educationSection'>
                <div className='bar'>Other Certification</div>
                <div className='certContent'>
                    <ul>
                        <li>
                            <div className='certTitle'>Python Programming Essential</div>
                            <div className='certUrl'>coursera.org/verify/BZU9955YK28H</div>
                        </li>
                        <li>
                            <div className='certTitle'>Python Data Representation</div>
                            <div className='certUrl'>coursera.org/verify/4RJ6CHTZ6ZHW</div>
                        </li>
                        <li>
                            <div className='certTitle'>Python Data Analysis</div>
                            <div className='certUrl'>coursera.org/verify/TPE4AWU7KK5R</div>
                        </li>
                        <li>
                            <div className='certTitle'>Python Data Visualization</div>
                            <div className='certUrl'>coursera.org/verify/Y7SBX34Z9385</div>
                        </li>
                        <li>
                            <div className='certTitle'>Introduction to Data Science in Python</div>
                            <div className='certUrl'>coursera.org/verify/KQKTTP4PLL2B</div>
                        </li>
                        <li>
                            <div className='certTitle'>Cluster Analysis in Data Mining</div>
                            <div className='certUrl'>coursera.org/verify/MWQJF4MSSNC7</div>
                        </li>
                        <li>
                            <div className='certTitle'>Mathematics for Machine Learning: Linear Algebra</div>
                            <div className='certUrl'>coursera.org/verify/B5WNS558EWCD</div>
                        </li>
                        <li>
                            <div className='certTitle'>Data Analysis with Python: Zero to Pandas</div>
                            <div className='certUrl'>Jovian/freecodecamp.org </div>
                        </li>
                        <li>
                            <div className='certTitle'>Deep Learning with PyTorch: Zero to GANs</div>
                            <div className='certUrl'>Jovian/freecodecamp.org</div>
                        </li>
                        <li>
                            <div className='certTitle'>Discrete Math and Analyzing Social Graphs</div>
                            <div className='certUrl'>coursera.org/verify/RAHD358BJ95W</div>
                        </li>
                    </ul>
                </div>
            </div>

*/