import '../../style/project.css'
import { useState } from 'react';
import Tab from './tab';

function ProjectBody(){

     const [count, increaseCount] = useState(0);
     const incCount = () => console.log('hey');

     incCount();     
    return (
        <div className='body'>
            <h3>Project</h3>
            <div className='project'>
                <Tab title = 'TicTacToe'
                     desc = 'A TicTacToe game, play against other player or try defeating unbeatable computer'
                     url = 'https://github.com/rohitpaul23/'
                     gridNo = {count}
                     incFunc = {incCount}/>
                <Tab title = 'Rock Paper Scissor'
                     desc = 'A Rock Paper Scissor game, play against computer and its randomness'
                     url = 'https://github.com/rohitpaul23/'
                     gridNo = {count}
                     incFunc = {incCount}/>
                <Tab title = 'Wiki'
                     desc = 'Get the top wiki link for anything searched with a gif'
                     url = 'https://github.com/rohitpaul23/'
                     gridNo = {count}
                     incFunc = {incCount}/>
                <Tab title = 'Sketch Book'
                     desc = 'Draw your imagination in a retro style pixelated sheet'
                     url = 'https://github.com/rohitpaul23/'
                     gridNo = {count}
                     incFunc = {incCount}/>
                <Tab title = 'Portfolio'
                     desc = 'My portfolio, you are already seeing that'
                     url = 'https://github.com/rohitpaul23/'
                     gridNo = {count}
                     incFunc = {incCount}/>
                <Tab title = 'Social Networking Site'
                     desc = 'A Semantic Social networking site to test message and upload status'
                     url = 'https://github.com/rohitpaul23/'
                     gridNo = {count}
                     incFunc = {incCount}/>
                <Tab title = 'Movie Reviewer'
                     desc = 'Review movie and based on all review look for the best movie to watch on'
                     url = 'https://github.com/rohitpaul23/'
                     gridNo = {count}
                     incFunc = {incCount}/>
            </div>
            <h3>Publication</h3>
            <div className='publication'>
                <Tab title = 'VarDenGrid'
                     desc = 'A variable density clustering algorithm that does not require any user input'
                     url = 'https://github.com/rohitpaul23/'/>
            </div>
        </div>
    );
}

export default ProjectBody;