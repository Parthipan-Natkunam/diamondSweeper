import React from 'react';

class Tile extends React.Component{
    callClickHandler(){
        this.props.clickHandler(this.props.position);
    }
    render(){
        let {tileState,hint,position} = this.props;
        let cssClasses = ["game-tile"];
        if(tileState){
            if(tileState.isOpen){
                if(tileState.hasDiamond) {cssClasses.push(" diamond");}
            }
            else{ cssClasses.push(" unknown");}
        }
        if(hint && hint.index === position){
            cssClasses.push(hint.class);
        }
        return(
            <div className= {cssClasses.join('')} onClick={this.callClickHandler.bind(this)}></div>
        );
    }
}

export default Tile;