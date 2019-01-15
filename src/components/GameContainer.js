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
               ]
    }
    render(){
        return(
            <div className="game-container">
                {this.state.tiles.map(item => <div className="game-tile">{item[0]}</div> )}
            </div>
        );
    }
}

export default GameContainer;