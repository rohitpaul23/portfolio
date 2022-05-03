import '../../style/project.css'
import {useState} from 'react' 

function ExpandTab(props){
    const [viewContent, changeViewContent] = useState(<a className='view' href={props.pages} target='_blank'>View Demo</a>);
/*
    if (props.pages == 'na') {
        changeViewContent(<div className='view'>View not available</div>)
    }
    else if (props.pages == 'portfolio') {
        changeViewContent(<div className='view'>Already using it</div>)
    }
*/
    const closeFunc = () => {
        props.sethidden(true);
    }

   return <div className='expandTab'>
                <div className='close' onClick={closeFunc}>X</div>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <div className='clickable'>
                    <a className='code' href={props.url} target='_blank'>Get Code</a>
                    {viewContent}
                </div>
            </div>
}

export default ExpandTab;