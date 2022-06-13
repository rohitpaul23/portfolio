import '../../style/project.css'
import {useState} from 'react' 

function ExpandTab(props){
    const [viewContent, changeViewContent] = useState(<a className='view' href={props.pages} target='_blank'>View Demo</a>);

    const codefunc = (val) => {
        if (val == 'paper') {
            return <a className='code' href={props.url} target='_blank'>View Paper</a>;
        }
        else{
            return <a className='code' href={props.url} target='_blank'>Get Code</a>;
        }
    }

    const afunc = (val) => {
        if (val == 'na' || val == 'paper') {
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
                    {codefunc(props.pages)}
                    {afunc(props.pages)}
                </div>
            </div>
}

export default ExpandTab;