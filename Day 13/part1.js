const input = `1008141
17,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,523,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,19,x,x,x,23,x,x,x,x,x,x,x,787,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29`;

const test = `939
7,13,x,x,59,x,31,19`;

const lines = input.split("\n");

const depTime = Number(lines[0]);

const buses = lines[1].split(",").map(x => Number(x)).filter(x => !isNaN(x));

let time = depTime - 1;

let firstBus = -1, wait;

while (firstBus < 0 && ++time) {
  for (const bus of buses) {
    if (time % bus == 0) {
      firstBus = bus;
      wait = time - depTime;
      break;
    }
  }
}

console.log("First bus:", firstBus);

console.log("Wait:", wait)

console.log("Product:", firstBus * wait);