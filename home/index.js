const outputConverter = "./home/outputConverter.js";
const urlTemplate = "./Day%20{daynum}/part{partnum}.js";

async function loadCode(day, part) {
  const oldIframes = Array.from(document.querySelectorAll("iframe"));
  oldIframes.forEach((iframe) => {
    iframe.parentNode.removeChild(iframe);
  });
  let iframe = document.createElement("iframe");
  const html = `<body>
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
        .replace("{partnum}", part)}"></script>
  </body>`;
  const console = document.querySelector(".console");
  console.setAttribute("data-label", `Day ${day}`);
  console.appendChild(iframe);
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(html);
  iframe.contentWindow.document.close();
}

window.addEventListener(
  "load",
  function () {
    let daysOfAdvent = Math.min(
      Math.ceil((new Date() - new Date("2020-12-1")) / 1000 / 60 / 60 / 24),
      25
    );
    loadCode(daysOfAdvent, 1);
    for (let i = 1; i <= daysOfAdvent; i++) {
      let button = document.createElement("button");
      button.innerText = i;
      button.onclick = function () {
        loadCode(i, 1);
      };
      document.querySelector(".buttons").appendChild(button);
    }
  },
  false
);
