console.log = function () {
  for (var i = 0; i < arguments.length; i++) {
    let texts = arguments[i].toString().split("\n");
    texts.forEach(function (text, i) {
      document.body.appendChild(document.createTextNode(text));
      if (i < texts.length - 1) {
        document.body.appendChild(document.createElement("br"));
      }
    });
    document.body.appendChild(document.createTextNode(" "));
  }
  document.body.appendChild(document.createElement("br"));
};

notFound = function () {
  console.log("Coming soon...");
};
