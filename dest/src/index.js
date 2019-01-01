"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = solution;

/**
* Determine if exist path from starting position to destination jumping over given leaves - positions
* @param  {Array<number>} possiblePositions - resents the position where one leaf falls at time K, measured in seconds. possiblePositions[K]
* @param  {number} destinationPosition - where frog want to be
* @returns {boolean} - if is possible to get into destinationPosition on this river leaves - possiblePositions
*/
function isPath(possiblePositions, destinationPosition) {
    var increment = 1,
        startingPosition = 1;

    for (var i = startingPosition; i <= destinationPosition; i += increment) {
        if (!possiblePositions.includes(i)) {
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
function calculateEarliestJumpPoint(possiblePositions, destinationPosition) {
    var increment = 1;
    var testPathArray = [],
        result = -1;

    for (var i = 0; i < possiblePositions.length; i += increment) {
        testPathArray.push(possiblePositions[i]);

        if (isPath(testPathArray, destinationPosition)) {
            result = i;
            break;
        }
    }

    return result;
}
/**
 * Returns earliest second where frog can start to cross river by jumping o leafs. If it is impossible returns -1
 * @param  {number} X - where frog want to be
 * @param  {Array<number>} A - resents the position where one leaf falls at time K, measured in seconds. possiblePositions[K]
 * @returns number - earliest second where frog can start jump, if impossible returns -1
 */
function solution(X, A) {
    var NO_SOLUTION = -1;
    var possiblePositions = A,
        destinationPosition = X;

    var pathExist = isPath(possiblePositions, destinationPosition);
    if (destinationPosition && pathExist) {
        return calculateEarliestJumpPoint(possiblePositions, destinationPosition);
    }

    return NO_SOLUTION;
}