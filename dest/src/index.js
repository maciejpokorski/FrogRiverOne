"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = solution;

/**
* Check if value already exist in path to avoid duplicates
* @param  {Array<number>} path - array represents distinst leaves possition where frog can jump
* @param  {number} position - represents the second when leaf occur
* @returns if the possition is already marked in path
*/
var isNotInPathYet = function isNotInPathYet(path, position) {
  return !path[position];
};

/**
 * Mark given position as ready to jump.
 * @param  {Array<number>} path - array represents distinst leaves possition where frog can jump
 * @param  {number} position - represents the second when leaf occur
 * @param  {number} markedJumpReadyIndicator - any number interpreted as truthy
 * @returns Here work on reference.
 */
var addToPath = function addToPath(path, position) {
  var markedJumpReadyIndicator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return path[position] = markedJumpReadyIndicator;
};

/**
 * Check if all leaves to make path between starting point and destination are added
 * @param  {number} pointsToCreatePath - number of points
 * @param  {number} destination - resents the number of distinct leaves neccessary to jump
 * @returns boolean - determine if frog can start to jump
 */
var canAlreadyJump = function canAlreadyJump(pointsToCreatePath, destination) {
  return pointsToCreatePath === destination;
};

/**
 * Returns earliest second where frog can start to cross river by jumping o leafs. If it is impossible returns -1
 * @param  {number} X - where frog want to be
 * @param  {Array<number>} A - resents the position where one leaf falls at time K, measured in seconds. possiblePositions[K]
 * @returns number - earliest second where frog can start jump, if impossible returns -1
 */
function solution(X, A) {
  var NO_SOLUTION = -1,
      INCREMENT = 1,
      path = [],
      possiblePositions = A,
      DESTINATION = X;
  var leavesToCreatePath = 0;

  //loope over possible possition
  for (var second = 0; second < possiblePositions.length; second += INCREMENT) {
    var position = possiblePositions[second];

    if (isNotInPathYet(path, position)) {

      addToPath(path, position);
      leavesToCreatePath += 1;

      if (canAlreadyJump(leavesToCreatePath, DESTINATION)) {
        var soonestPossibleJumpMoment = second;
        return soonestPossibleJumpMoment;
      }
    }
  }

  return NO_SOLUTION;
}