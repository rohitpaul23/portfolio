import '../../style/project.css'

function Tab(props){

    const tabCount = props.gridNo;
    console.log(props.gridNo);
    const incrementGridNo = () => {
        console.log(props.incFunc);
        console.log(props.gridNo);
    }

    incrementGridNo();

    const expandFunc = () => {
        alert(props.desc);
   }     

   return <div onClick={expandFunc}>{props.title}</div>
}

export default Tab;