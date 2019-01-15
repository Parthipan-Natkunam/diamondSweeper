import React from 'react';

class GameContainer extends React.Component{
    state = {
        tiles: [
                    [0],[0],[0],[0],[0],[0],[0],[0],
                    [0],[0],[0],[0],[0],[0],[0],[0],
                    [0],[0],[0],[0],[0],[0],[0],[0],
                    [0],[0],[0],[0],[0],[0],[0],[0],
                    [0],[0],[0],[0],[0],[0],[0],[0],
                    [0],[0],[0],[0],[0],[0],[0],[0],
                    [0],[0],[0],[0],[0],[0],[0],[0],
                    [0],[0],[0],[0],[0],[0],[0],[0]
               ],
        score: 64
    }
    render(){
        return(
            <div className="game-container">
                {this.state.tiles.map(item => <div className="game-tile unknown"></div> )}
            </div>
        );
    }
}

export default GameContainer;