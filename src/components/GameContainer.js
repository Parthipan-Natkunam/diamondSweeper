import React from 'react';

import Tile from './Tile';

class GameContainer extends React.Component{
    state = {
        tiles: [],
        score: 64,
        totalTiles: 64
    }
    componentDidMount(){
        if(this.state.tiles.length > 0) {return}
        else{
            let tiles = [];
            let diamondCount = 0;
            let diamondIndices = [];
            while(diamondCount < 8){
                let randomPosition = Math.floor(Math.random()*this.state.totalTiles);
                if(diamondIndices.indexOf(randomPosition) === -1){
                    diamondIndices.push(randomPosition);
                    diamondCount++;
                }
            }
            Array(this.state.totalTiles).fill(0).forEach((item,index)=>{
               let tileState = void 0;
               tileState =  diamondIndices.indexOf(index) > -1 ? {hasDiamond: true, isOpen: false} : {hasDiamond: false, isOpen: false};
               tiles.push(tileState); 
            });
            this.setState({tiles});
        }
    }
    render(){
        return(
            <div className="game-container">
                {
                    Array(this.state.totalTiles).fill('0').map((item,index) => {
                        return(
                            <Tile key={index} position={index} tileState={this.state.tiles[index]}/>
                        ); 
                    })
                }
            </div>
        );
    }
}

export default GameContainer;