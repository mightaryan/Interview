
export function createScoreBoard() {
 const obj = {
   "The Best Ever": 1000000
}
return obj
}


export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score
  return scoreBoard
}

export function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
    return scoreBoard;
}


export function updateScore(scoreBoard, player, points) {

    scoreBoard[player] += points;
  
  return scoreBoard
}


export function applyMondayBonus(scoreBoard) {
  for(let player in scoreBoard) {
    if (scoreBoard.hasOwnProperty(player)) {
    scoreBoard[player] += 100;
    }
  }
  return scoreBoard
}

export function normalizeScore(params) {
   const { score, normalizeFunction } = params;
    
    if (typeof score !== 'undefined' && typeof normalizeFunction === 'function') {
        return normalizeFunction(score);
    } else {
        return undefined;
    }
}
