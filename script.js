let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10) 
};

const getAbsoluteDistance = (scrtTrgt, plyr) => {
  return Math.abs(scrtTrgt - plyr);
};

const compareGuesses = (hmn, cmtr, scrtTrgt) => {
  if(hmn > 9 || hmn < 0) {
    return alert("This number is out of range.  Please put a number between 0-9.");
  }
  const humanDifference = getAbsoluteDistance(scrtTrgt, hmn);
  const computerDifference = getAbsoluteDistance(scrtTrgt, cmtr);
  
  return humanDifference <= computerDifference;
};

const updateScore = (wnnr) => {
  if(wnnr === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const advanceRound = () => currentRoundNumber ++;
