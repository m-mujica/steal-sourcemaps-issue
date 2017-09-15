var stealTools = require("steal-tools");

stealTools
  .build({}, {
    sourceMaps: true,
    minify: true
  })
  .then(function() {
    console.log("DONE!");
  });
