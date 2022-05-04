import '../../style/project.css'
import {useState} from 'react' 

function ExpandTab(props){
    const [viewContent, changeViewContent] = useState(<a className='view' href={props.pages} target='_blank'>View Demo</a>);

    const afunc = (val) => {
        if (val == 'na') {
            return <div className='notView'>View not available</div>;
        }
        else if (val == 'portfolio') {
            return <div className='notView'>Already using it</div>;
        }
        else{
            return <a className='view' href={props.pages} target='_blank'>View Demo</a>;
        }

    }
    

    const closeFunc = () => {
        props.sethidden(true);
    }

   return <div className='expandTab'>
                <div className='close' onClick={closeFunc}>X</div>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <div className='clickable'>
                    <a className='code' href={props.url} target='_blank'>Get Code</a>
                    {afunc(props.pages)}
                </div>
            </div>
}

export default ExpandTab;