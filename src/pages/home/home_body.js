import '../../style/intro.css';
import Intro from './intro';
import Quotation from './quotes';
import Notification from './notification';

function HomeBody(){
    return (
        <div className='body'>
            <Intro />
            <Quotation />
            <Notification />
        </div>
    );
}

export default HomeBody;