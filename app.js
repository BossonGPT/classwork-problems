//N is how many alpacas
//X is how many happy alpacas
//alpaca is happy if their happiness index and the alpaca to the right add up to an even number

//start the happinessindex of n as odd if X is less than N, and even if X is the same as N
//loop from 0 to n-1 with an incremental variable of i
//find the happinessindex of i - 1
//if you want it to be even, and its even, add 2
//if you want it to be even, and its odd, add 1
//if you want it to be odd, and its odd, add 2
//if you want it to be odd, and its even, add 1
//

function happyAlpacas(N, X) {
  let alpacaHappinessIndex = [];

  let beginningNumber = N > X ? 13 : 12;
  let happyAlpacas = 0;
  for (let alpaca = 0; alpaca < N - 1; alpaca++) {
    const lastNumber =
      alpaca - 1 == -1 ? beginningNumber : alpacaHappinessIndex[alpaca - 1];

    // we want even
    if (happyAlpacas < X) {
      // if it is odd
      if (lastNumber % 2 != 0) {
        alpacaHappinessIndex[alpaca] = lastNumber + 1;
      } else if (lastNumber % 2 == 0) {
        alpacaHappinessIndex[alpaca] = lastNumber + 2;
      }

      happyAlpacas++;
      continue;
    }

    //want odd
    if (happyAlpacas >= X) {
      // if it is odd
      if (lastNumber % 2 != 0) {
        alpacaHappinessIndex[alpaca] = lastNumber + 2;
      } else if (lastNumber % 2 == 0) {
        alpacaHappinessIndex[alpaca] = lastNumber + 1;
      }
    }
  }

  alpacaHappinessIndex.push(beginningNumber);

  return alpacaHappinessIndex;
}

console.log(happyAlpacas(6, 6));
