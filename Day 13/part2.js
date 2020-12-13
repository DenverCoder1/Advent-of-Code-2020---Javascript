const input = `1008141
17,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,523,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,19,x,x,x,23,x,x,x,x,x,x,x,787,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29`;

const test = `939
7,13,x,x,59,x,31,19`;

const lines = test.split("\n");

const buses = lines[1]
  .split(",")
  .map((x, i) => [Number(x), i])
  .filter((x) => !isNaN(x[0]));

const product = buses.reduce((acc, bus) => acc * bus[0], 1);

let firstAlignment = -1;

let t = 0;

while (++t) {
  if (buses.every((bus) => {
    return ((t + bus[1]) % bus[0] == 0);
  })) {
    firstAlignment = t;
    break;
  }
}

console.log("First alignment:", firstAlignment);