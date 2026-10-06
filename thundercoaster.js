// loop through each person
// see if they fit
// add them as a rider

function thundercoaster(peopleInLine, people) {
  let eligibleRiders = 0;

  for (let index = 0; index < peopleInLine; index++) {
    if (people[index].height >= 120 && people[index].age >= 12) {
      eligibleRiders++;
    } else if (people[index].height >= 120) {
      if (people[index].withAdult == "Y") {
        eligibleRiders++;
      }
    }
  }

  return eligibleRiders;
}

function createRider(height, age, withAdult) {
  return {
    height: height,
    age: age,
    withAdult: withAdult,
  };
}

const riders = [
  createRider(130, 14, "N"),
  createRider(125, 9, "Y"),
  createRider(125, 9, "N"),
  createRider(110, 15, "Y"),
  createRider(120, 12, "N"),
  createRider(119, 13, "Y"),
];

console.log(thundercoaster(6, riders));
