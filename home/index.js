const outputConverter = "./home/outputConverter.js";
const urlTemplate = "./Day%20{daynum}/part{partnum}.js";
const titles = [
  "Day 1: Report Repair",
  "Day 2: Password Philosophy",
  "Day 3: Toboggan Trajectory",
  "Day 4: Passport Processing",
  "Day 5: Binary Boarding",
  "Day 6: Custom Customs",
  "Day 7: Handy Haversacks",
  "Day 8: Handheld Halting",
  "Day 9: Encoding Error",
  "Day 10: Adapter Array",
  "Day 11: Seating System",
  "Day 12: Rain Risk",
  "Day 13: Shuttle Search",
  "Day 14",
  "Day 15",
  "Day 16",
  "Day 17",
  "Day 18",
  "Day 19",
  "Day 20",
  "Day 21",
  "Day 22",
  "Day 23",
  "Day 24",
  "Day 25",
];

function loadCode(day) {
  const part = document
    .querySelector("input[name=tab]:checked")
    .id.replace(/[^\d]+/g, "");
  const title = titles[day - 1];
  const titleLength = titles[day - 1].length;
  const oldIframes = Array.from(document.querySelectorAll("iframe"));
  oldIframes.forEach((iframe) => {
    iframe.parentNode.removeChild(iframe);
  });
  let iframe = document.createElement("iframe");
  const html = `<head>
      <style>
      body {
        background: black;
        font-family: monospace;
        color: white;
        font-size: 120%;
        overflow-wrap: anywhere;
      }
      pre {
        white-space: pre-wrap;
        word-break: break-all;
      }
      </style>
      <script src="${outputConverter}"></script>
      <script onerror="notFound()" src="${urlTemplate
        .replace("{daynum}", `${day}`.padStart(2, "0"))
        .replace("{partnum}", part)}" defer></script>
  </head>
  <body>
  <pre>
  _____${"_".repeat(titleLength)}_____
 / \\    ${" ".repeat(titleLength)}    \\
 \\_,| -- ${title} -- |
    |    ${" ".repeat(titleLength)}    |
    |${" ".repeat(titleLength / 2)} Part ${part} ${" ".repeat(
    Math.ceil(titleLength / 2)
  )}|
    |  ___${"_".repeat(titleLength)}___|__
    \\_/____${"_".repeat(titleLength)}____/
  </pre>
  </body>`;
  const console = document.querySelector(".console");
  console.setAttribute("aria-label", `Day ${day}`);
  console.appendChild(iframe);
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(html);
  iframe.contentWindow.document.close();
}

function changeTab() {
  const day = document
    .querySelector(".console")
    .getAttribute("aria-label")
    .replace(/[^\d]+/g, "");
  loadCode(day);
}

window.addEventListener(
  "load",
  function () {
    // calculate number of days to show
    let daysOfAdvent = Math.min(
      Math.ceil((new Date() - new Date("2020-12-1")) / 1000 / 60 / 60 / 24),
      25
    );
    // create buttons
    for (let i = 1; i <= daysOfAdvent; i++) {
      let button = document.createElement("button");
      button.innerText = i;
      button.setAttribute("aria-label", titles[i - 1]);
      button.onclick = function () {
        loadCode(i);
        // toggle active button
        Array.from(document.querySelectorAll("button.active")).forEach(
          (btn) => {
            btn.classList.remove("active");
          }
        );
        this.classList.add("active");
      };
      if (i == 1) {
        button.classList.add("active");
      }
      document.querySelector(".buttons").appendChild(button);
    }
    // load code at start
    loadCode(1, 1);
    // add listeners to tabs
    Array.from(document.querySelectorAll("input[name=tab]")).forEach((tab) => {
      tab.addEventListener("click", changeTab, false);
    });
  },
  false
);
