import ExpandTab from './expandTab.js'
import {useState} from 'react';


function Tab(props){
    const [toView10, changeView10] = useState(0);
    const [toView12, changeView12] = useState(0);
    const [toViewB, changeViewB] = useState(0);
    const [toViewM, changeViewM] = useState(0);
    const [toViewO, changeViewO] = useState(0);


    const expandContent = () => {
        if (props.title === "Class 10") {
            if (toView10 == 0) {
                changeView10(1);
            } else {
                changeView10(0);
            }
        }
        else if (props.title === "Class 12") {
            if (toView12 == 0) {
                changeView12(1);
            } else {
                changeView12(0);
            }
        }
        else if (props.title === "Bachelor") {
            if (toViewB == 0) {
                changeViewB(1);
            } else {
                changeViewB(0);
            }
        }
        else if (props.title === "Masters") {
            if (toViewM == 0) {
                changeViewM(1);
            } else {
                changeViewM(0);
            }
        }
        else if (props.title === "Other Certification") {
            if (toViewO == 0) {
                changeViewO(1);
            } else {
                changeViewO(0);
            }
        }
    }

    return (
        <div className='educationSection'>
            <div className='bar' onClick={expandContent}>{props.title}</div>
            <ExpandTab className='content' topic={props.title} toView10={toView10} toView12={toView12} toViewB={toViewB} toViewM={toViewM} toViewO={toViewO}/>
        </div>
    );
}

export default Tab;
