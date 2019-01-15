import React from 'react';

const ScoreBox = ({score})=>{
    return (
        <div className="game-overlay">
            <div className="game-scorebox">
                <h3>You Found All The Diamonds!!!</h3>
                <h4>Score: {score}</h4>
            </div>
        </div>
    ); 
}

export default ScoreBox;