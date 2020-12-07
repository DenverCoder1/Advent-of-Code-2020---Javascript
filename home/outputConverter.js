console.log = function () {
  for (var i = 0; i < arguments.length; i++) {
    document.body.appendChild(document.createTextNode(arguments[i]));
    document.body.appendChild(document.createTextNode(" "));
  }
  document.body.appendChild(document.createElement("br"));
};

notFound = function () {
  console.log("Coming soon...");
};
