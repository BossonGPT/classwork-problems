// loop through duels
// if master is in the duel
// check to see who wins
// change master
// if master isnt in duel
// continue

function elder(originalMaster, numberOfDuels, duels) {
  let wizardsObeyed = { [originalMaster]: 1 };
  let wandMaster = originalMaster;

  for (let index = 0; index < numberOfDuels; index++) {
    const duel = duels[index];

    const winner = duel[0];
    const loser = duel[1];

    if (wandMaster != winner && wandMaster != loser) {
      continue;
    }

    if (wandMaster === winner) {
      continue;
    }

    // now if the master is the loser
    wandMaster = winner;
    wizardsObeyed[winner] = wizardsObeyed[winner]
      ? wizardsObeyed[winner] + 1
      : 1;
  }

  return [wandMaster, Object.keys(wizardsObeyed).length];
}

elder("A", 3, [
  ["B", "A"],
  ["C", "B"],
  ["D", "A"]
]).forEach((x) => console.log(x));
