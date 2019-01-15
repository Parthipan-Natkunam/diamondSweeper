import React from 'react';

class Tile extends React.Component{
    callClickHandler(){
        this.props.clickHandler(this.props.position);
    }
    render(){
        let {tileState} = this.props;
        let cssClasses = ["game-tile"];
        if(tileState){
            if(tileState.isOpen && tileState.hasDiamond) {cssClasses.push(" diamond")}
            else if(!tileState.isOpen) { cssClasses.push(" unknown")}
        }
        return(
            <div className= {cssClasses.join('')} onClick={this.callClickHandler.bind(this)}></div>
        );
    }
}

export default Tile;