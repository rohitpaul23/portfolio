import {useState} from 'react';

function Tab(props){
    const [srcField, changeSrc] = useState(<img src = {props.gif} />)

    function MouseOver(event) {
        changeSrc(<div className='name'>{props.name}</div>);
    }
    function MouseOut(event) {
        changeSrc(<img src = {props.gif} />);
    }

    return (  
        <div className="tabSkill" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            {srcField}
        </div>
    )
}

export default Tab;