// loop through megabytes spent
// add difference between mb limit and mb spent to a variable
// return

function tarifa(megabyteLimit, months, megaBytesSpent) {
  let avaliableMegabytes = 0;

  for (let i = 0; i < months; i++) {
    avaliableMegabytes += megabyteLimit - megaBytesSpent[i];
  }

  return avaliableMegabytes + megabyteLimit;
}

console.log(tarifa(15, 3, [15, 10, 20]));
