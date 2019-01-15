import React from 'react';

class Tile extends React.Component{
    render(){
        let {position,tileState} = this.props;
        let cssClasses = ["game-tile"];
        if(tileState){
            if(tileState.isOpen && tileState.hasDiamond) {cssClasses.push(" diamond")}
            else if(!tileState.isOpen) { cssClasses.push(" unknown")}
        }
        return(
            <div className= {cssClasses.join('')} position={position}></div>
        );
    }
}

export default Tile;