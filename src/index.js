
 // @flow

 /**
 * Check if value already exist in path to avoid duplicates
 * @param  {Array<number>} path - array represents distinst leaves possition where frog can jump
 * @param  {number} position - represents the second when leaf occur
 * @returns if the possition is already marked in path
 */
const isNotInPathYet = (path : Array<number>, position : number) : boolean => !path[position];

/**
 * Mark given position as ready to jump.
 * @param  {Array<number>} path - array represents distinst leaves possition where frog can jump
 * @param  {number} position - represents the second when leaf occur
 * @param  {number} markedJumpReadyIndicator - any number interpreted as truthy
 * @returns Here work on reference.
 */
const addToPath = (path : Array<number>, position : number, markedJumpReadyIndicator = 1) => path[position] = markedJumpReadyIndicator;

/**
 * Check if all leaves to make path between starting point and destination are added
 * @param  {number} pointsToCreatePath - number of points
 * @param  {number} destination - resents the number of distinct leaves neccessary to jump
 * @returns boolean - determine if frog can start to jump
 */
const canAlreadyJump = (pointsToCreatePath : number, destination : number) : boolean => pointsToCreatePath === destination;

/**
 * Returns earliest second where frog can start to cross river by jumping the leaves.
 * If it is impossible returns -1
 * time complexity O(N)
 * @param  {number} X - where frog want to be
 * @param  {Array<number>} A - resents the position where one leaf falls at time K, measured in seconds. possiblePositions[K]
 * @returns number - earliest second where frog can start jump, if impossible returns -1
 */
export default function solution(X : number, A : Array<number>) : number {
    const NO_SOLUTION = -1,
    INCREMENT = 1,
    path = [],
    possiblePositions = A,
    DESTINATION = X;
    let leavesToCreatePath = 0;
    
    //loope over possible possition
    for(let second = 0; second < possiblePositions.length; second += INCREMENT){
        let position = possiblePositions[second];

        if(isNotInPathYet(path, position)){

            addToPath(path, position);
            leavesToCreatePath += 1;

            if(canAlreadyJump(leavesToCreatePath, DESTINATION)){
                const soonestPossibleJumpMoment = second;
                return soonestPossibleJumpMoment;
            }
        }
    }
   
    return NO_SOLUTION;
}