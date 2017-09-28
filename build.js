var path = require("path");
var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
  config: path.join(__dirname, "package.json!npm")
}, {
  minify: false,
  sourceMaps: true
});

buildPromise.then(function() {
  console.log("DONE!");
});
