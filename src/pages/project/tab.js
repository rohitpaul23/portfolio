import '../../style/project.css'

function Tab(props){

    const expandFunc = () => {
        props.changetitle(props.title);
        props.changedesc(props.desc);
        props.changeurl(props.url);
        props.changepages(props.pages);
        props.sethidden(false);
   }     

   return <div onClick={expandFunc}>{props.title}</div>
}

export default Tab;