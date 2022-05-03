import '../../style/education.css'
import Tab from './tab';

function EducationBody(){
     
    return (
        <div className='education'>
            <Tab title='Class 10' />
            <Tab title='Class 12' />
            <Tab title='Bachelor' />
            <Tab title='Masters' />
            <Tab title='Other Certification' />
        </div>
    );
}

export default EducationBody;