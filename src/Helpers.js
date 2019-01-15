function generateGameBoundryObject(){
     return {
        "top": Array.from(Array(8).keys()),
        "bottom": Array(8).fill(8).map((item,index)=> (item*(item-1)) + index),
        "left": Array(8).fill(8).map((item,index)=> item*index),
        "right": Array(8).fill(8).map((item,index)=> (item*(index+1)) - 1)
    }
}
const bounds = generateGameBoundryObject();

export function generateRandomNumber(maxLimit){
    return Math.floor(Math.random()*maxLimit);
}

export function sweepFourVertices(origIndex,tilesArr){
    const boundries = bounds;
    let i = 0;
    let prevScannedQuads = {};
    if(boundries.right.indexOf(origIndex) > -1) {prevScannedQuads.right = origIndex}
    if(boundries.left.indexOf(origIndex) > -1) {prevScannedQuads.left = origIndex}
    if(boundries.top.indexOf(origIndex) > -1) {prevScannedQuads.top = origIndex}
    if(boundries.bottom.indexOf(origIndex) > -1) {prevScannedQuads.bottom = origIndex}
   // while(boundries.right.indexOf(prevScannedQuads.right) === -1 || boundries.left.indexOf(prevScannedQuads.left) === -1 || boundries.top.indexOf(prevScannedQuads.top) === -1 || boundries.bottom.indexOf(prevScannedQuads.bottom) === -1  ){
    while(i < 2402){
        // scan the right node
        if(boundries.right.indexOf(prevScannedQuads.right) === -1){
            let tileToRight = void 0;
            if(prevScannedQuads.right !== void 0) {
                tileToRight = prevScannedQuads.right + 1;
            }else{
                tileToRight = origIndex + 1;
            }
            if(tilesArr[tileToRight].hasDiamond){ return " hint-right";}
            else{prevScannedQuads.right = tileToRight; }
        }
        //scan the left node
        if(boundries.left.indexOf(prevScannedQuads.left) === -1){
            let tileToLeft = void 0;
            if(prevScannedQuads.left !== void 0) {
                tileToLeft = prevScannedQuads.left - 1;
            }else{
                tileToLeft = origIndex - 1;
            }
            if(tilesArr[tileToLeft].hasDiamond){ return " hint-left"}
            else{prevScannedQuads.left = tileToLeft; }
        }
        //scan the top node
        if(boundries.top.indexOf(prevScannedQuads.top) === -1){
            let tileToTop = void 0;
            if(prevScannedQuads.top !== void 0) {
                tileToTop = prevScannedQuads.top - 7;
            }else{
                tileToTop = origIndex - 7;
            }
            if(tilesArr[tileToTop].hasDiamond){ return " hint-up"}
            else{prevScannedQuads.left = tileToTop; }
        }
        //scan the bottom node
        if(boundries.bottom.indexOf(prevScannedQuads.bottom) === -1){
            let tileToBottom = void 0;
            if(prevScannedQuads.bottom !== void 0) {
                tileToBottom = prevScannedQuads.bottom + 7;
            }else{
                tileToBottom = origIndex + 7;
            }
            if(tilesArr[tileToBottom].hasDiamond){ return " hint-down"}
            else{prevScannedQuads.bottom = tileToBottom; }
        }
        i++;
    }
}