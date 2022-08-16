import '../../style/project.css'
import Tab from './tab';
import ExpandTab from './expandTab';
import {useState} from 'react';

function ProjectBody(){
    const [hidden, setHidden] = useState(true);
    const [exptitle, changeTitle] = useState('');
    const [expdesc, changeDesc] = useState('');
    const [expurl, changeUrl] = useState('');
    const [exppages, changePages] = useState('');

    return (
        <div className='body'>
            {!hidden && <ExpandTab title = {exptitle}
                       desc = {expdesc}
                       url = {expurl}
                       pages = {exppages}
                       sethidden = {setHidden}
                       />}
            <h3>Project</h3>
            <div className='project'>
                <Tab title = 'TicTacToe'
                     desc = 'A TicTacToe game, play against other player or try defeating unbeatable computer'
                     url = 'https://github.com/rohitpaul23/tic-tac-toe'
                     pages = 'https://rohitpaul23.github.io/tic-tac-toe/index.html'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Rock Paper Scissor'
                     desc = 'A Rock Paper Scissor game, play against computer and its randomness'
                     url = 'https://github.com/rohitpaul23/rock-paper-scissor'
                     pages = 'https://rohitpaul23.github.io/rock-paper-scissor/tictactoe.html'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Wiki'
                     desc = 'Get the top wiki link for anything searched with a gif'
                     url = 'https://github.com/rohitpaul23/wiki'
                     pages = 'https://rohitpaul23.github.io/wiki/index.html'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Sketch Book'
                     desc = 'Draw your imagination in a retro style pixelated sheet'
                     url = 'https://github.com/rohitpaul23/paint-board'
                     pages = 'https://rohitpaul23.github.io/paint-board/index.html'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Portfolio'
                     desc = 'My portfolio, you are already seeing that'
                     url = 'https://github.com/rohitpaul23/portfolio'
                     pages = 'portfolio'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Social Networking Site'
                     desc = 'A Semantic Social networking site to test message and upload status'
                     url = 'https://github.com/rohitpaul23/btechProject'
                     pages = 'na'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Mini Messenger'
                     desc = 'A simple messenger app '
                     url = 'https://github.com/rohitpaul23/mini-messenger'
                     pages = 'https://quiet-harbor-74174.herokuapp.com/'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Local Library'
                     desc = 'A library to store, update and delete books and there genre, author and instances'
                     url = 'https://github.com/rohitpaul23/local-library'
                     pages = 'https://secure-dusk-89745.herokuapp.com/catalog'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Density-based Clustering Algorithm'
                     desc = 'Two Density-based clustering algorithm which is DBSCAN and DENCLUE with preprocessing that includes scaling and missing data treatment with an option to visualize data plots'
                     url = 'https://github.com/rohitpaul23/density_based_clustering'
                     pages = 'na'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Regression model and GDA'
                     desc = 'Implementing linear and logistic regression model and Gaussian Discriminative model for real world dataset from scratch'
                     url = 'https://github.com/rohitpaul23/regression_and_gda'
                     pages = 'na'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Text classification using Naive Bayes'
                     desc = 'Implementing Naive Bayes classifier to classify each of the Amazon Digital Music review Text into one of the given categories from scratch'
                     url = 'https://github.com/rohitpaul23/naive_bayes'
                     pages = 'na'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Decision Tree and Random Forest'
                     desc = 'Implementing Decision Tree and Random Forest to classify whether a client subscribed (y/n?) for Bank Marketing Dataset from scratch'
                     url = 'https://github.com/rohitpaul23/decisiontree_randomforest'
                     pages = 'na'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Neural Network'
                     desc = 'Work with the Poker Hand dataset available on the UCI repository to implement a generic neural network architecture to learn a model for multi-class classification'
                     url = 'https://github.com/rohitpaul23/neural_network'
                     pages = 'na'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Convolutional Neural Network on FMNIST Dataset'
                     desc = 'Comparitive analysis of different model. Also, Applying the concept of Regularization and ResNet to Improve the CNN Model.'
                     url = 'https://github.com/rohitpaul23/cnn_fmnist'
                     pages = 'na'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'Kaggle Dataset'
                     desc = 'Worked on different kaggle datasets/competition'
                     url = 'https://github.com/rohitpaul23/kaggleAssign'
                     pages = 'na'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
                <Tab title = 'K-Means'
                     desc = 'K-Means clustering algorithm from scratch using python. Also upgrading KMean using the concept of KMean++'
                     url = 'https://github.com/rohitpaul23/k-mean'
                     pages = 'na'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
            </div>
            <h3>Publication</h3>
            <div className='publication'>
                <Tab title = 'VarDenGrid'
                     desc = 'A variable density clustering algorithm that does not require any user input and able to get variable density cluster. Comparitively worked well compared to state-of-the-art algorithm DBSCAN and OPTICS.'
                     url = 'https://ieeexplore.ieee.org/document/9691627'
                     pages = 'paper'
                     changetitle = {changeTitle} 
                     changedesc = {changeDesc} 
                     changeurl = {changeUrl}
                     changepages = {changePages}
                     sethidden = {setHidden}
                     />
            </div>
        </div>
    );
}

export default ProjectBody;