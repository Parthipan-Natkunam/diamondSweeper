import React from 'react';

class GameContainer extends React.Component{
    state = {
        tiles: [
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0]
               ],
        score: 64
    }
    render(){
        return(
            <div className="game-container">
                {Array(64).fill('0').map((item,index) => <div key={index} className="game-tile unknown"></div> )}
            </div>
        );
    }
}

export default GameContainer;