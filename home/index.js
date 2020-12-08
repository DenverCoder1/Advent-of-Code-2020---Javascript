const outputConverter = "./home/outputConverter.js";
const urlTemplate = "./Day%20{daynum}/part{partnum}.js";

function loadCode(day) {
  const oldIframes = Array.from(document.querySelectorAll("iframe"));
  const part = document
    .querySelector("input[name=tab]:checked")
    .getAttribute("aria-label")
    .replace(/[^\d]+/g, "");
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
      }
      </style>
      <script src="${outputConverter}"></script>
      <script onerror="notFound()" src="${urlTemplate
          .replace("{daynum}", `${day}`.padStart(2, "0"))
          .replace("{partnum}", part)}" defer></script>
  </head>
  <body>
      Part ${part}<br/>
      ------<br/><br/>
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
      button.setAttribute("aria-label", `Day ${i}`);
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
