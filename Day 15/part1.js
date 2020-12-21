const input = `0,12,6,13,20,1,17`;

const test = `0,3,6`;

const startingNums = input.split(",");

let turn = 1;

let lastSpoken;

let spokenBefore = false;

let lastSpokenMap = {};

function updateMap(num, spokenBefore) {
  if (spokenBefore) {
    lastSpokenMap[num].twoAgo = lastSpokenMap[num].last;
    lastSpokenMap[num].last = turn;
  }
  else {
    lastSpokenMap[num] = {
      last: turn,
      twoAgo: undefined
    };
  }
}

for (const num of startingNums) {
  spokenBefore = typeof lastSpokenMap[num] !== 'undefined';
  updateMap(num, spokenBefore);
  lastSpoken = num;
  console.log(`Turn ${turn}: ${num} is spoken`);
  turn++;
}

while (turn < 2021) {
  if (!spokenBefore) {
    let num = "0";
    spokenBefore = typeof lastSpokenMap[num] !== 'undefined'
    updateMap(num, spokenBefore);
    lastSpoken = num;
    console.log(`Turn ${turn}: ${num} is spoken`);
  }
  else {
    let turnSpokenLast = lastSpokenMap[lastSpoken].last;
    let turnSpokenTwoAgo = lastSpokenMap[lastSpoken].twoAgo;
    let num = (turnSpokenLast - turnSpokenTwoAgo).toString();
    spokenBefore = typeof lastSpokenMap[num] !== 'undefined'
    updateMap(num, spokenBefore);
    lastSpoken = num;
    console.log(`Turn ${turn}: ${num} is spoken`);
  }
  turn++;
}