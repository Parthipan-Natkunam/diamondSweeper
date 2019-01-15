import React from 'react';

import Tile from './Tile';

import {generateRandomNumber,sweepFourVertices} from '../Helpers';

class GameContainer extends React.Component{
    state = {
        tiles: [],
        score: 64,
        totalTiles: 64,
        foundDiamonds: 0
    }
    initializeStateObject(diamondIndices){
        let tiles = []; 
        Array(this.state.totalTiles).fill(0).forEach((item,index)=>{
            let tileState = void 0;
            tileState =  diamondIndices.indexOf(index) > -1 ? {hasDiamond: true, isOpen: false} : {hasDiamond: false, isOpen: false};
            tiles.push(tileState); 
         });
         this.setState({tiles});
    }
    componentDidMount(){
        if(this.state.tiles.length > 0) {return}
        else{
            let diamondCount = 0;
            let diamondIndices = [];
            while(diamondCount < 8){
                let randomPosition = generateRandomNumber(this.state.totalTiles);
                if(diamondIndices.indexOf(randomPosition) === -1){
                    diamondIndices.push(randomPosition);
                    diamondCount++;
                }
            }
            this.initializeStateObject.bind(this)(diamondIndices);  
        }
    }
    changeOpenState(tilePosition){
        let tileStates = this.state.tiles.slice(); //slicing to prevent state mutation
        let diamondsFound = this.state.foundDiamonds;
        let currentScore = this.state.score;
        if(!tileStates[tilePosition].isOpen){
            tileStates[tilePosition].isOpen = !tileStates[tilePosition].isOpen;
            currentScore--;
            if(tileStates[tilePosition].hasDiamond){ diamondsFound++; }
            else{
                let hint = sweepFourVertices(tilePosition,tileStates);
                console.log(hint);
            }
        }
        this.setState({
            tiles: tileStates,
            foundDiamonds: diamondsFound,
            score: currentScore
        });
    }
    render(){
        const scoreBox = (
            <div className="game-overlay">
                <div className="game-scorebox">
                    <h3>You Found All The Diamonds!!!</h3>
                    <h4>Score: {this.state.score}</h4>
                </div>
            </div>
        ); 
        return(
            <React.Fragment>
                <div className="game-container">
                    {
                        Array(this.state.totalTiles).fill('0').map((item,index) => {
                            return(
                                <Tile key={index} position={index} tileState={this.state.tiles[index]} clickHandler={this.changeOpenState.bind(this)}/>
                            ); 
                        })
                    }
                </div> 
                { this.state.foundDiamonds === 8 ? scoreBox : null}
            </React.Fragment>
        );
    }
}

export default GameContainer;