
 // @flow

 /**
 * Determine if exist path from starting position to destination jumping over given leaves - positions
 * @param  {Array<number>} possiblePositions - resents the position where one leaf falls at time K, measured in seconds. possiblePositions[K]
 * @param  {number} destinationPosition - where frog want to be
 * @returns {boolean} - if is possible to get into destinationPosition on this river leaves - possiblePositions
 */
function isPath(possiblePositions : Array<number>, destinationPosition : number) : boolean{
    const increment = 1,
    startingPosition = 1;

    for(let i = startingPosition; i <= destinationPosition; i+= increment){
        if(!possiblePositions.includes(i)){
            return false;
        }
    }

    return true;
}
/**
 * @param  {Array<number>} possiblePositions - resents the position where one leaf falls at time K, measured in seconds. possiblePositions[K]
 * @param  {number} destinationPosition - where frog want to be
 * @returns {number} i - earlies jump point
 */
function calculateEarliestJumpPoint(possiblePositions : Array<number>, destinationPosition : number) : number{
    const increment = 1;
    let testPathArray = [];
    
    for(let i = 0; i < possiblePositions.length; i+=increment){
        testPathArray.push(possiblePositions[i]);

        if(isPath(testPathArray, destinationPosition)){
            return i;
        }
    }
}
/**
 * Returns earliest second where frog can start to cross river by jumping o leafs. If it is impossible returns -1
 * @param  {number} X - where frog want to be
 * @param  {Array<number>} A - resents the position where one leaf falls at time K, measured in seconds. possiblePositions[K]
 * @returns number - earliest second where frog can start jump, if impossible returns -1
 */
export default function solution(X : number, A : Array<number>) : number {
    const NO_SOLUTION = -1;
    const possiblePositions = A,
    destinationPosition = X;
    
    const pathExist = isPath(possiblePositions, destinationPosition);
    if(destinationPosition && pathExist){
        return calculateEarliestJumpPoint(possiblePositions, destinationPosition);
    }
   
    return NO_SOLUTION
}