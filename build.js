var stealTools = require("steal-tools");

stealTools
  .build(
    {
      main: "main",
      config: __dirname + "/package.json!npm"
    },
    {
      sourceMaps: true,
      minify: true
    }
  )
  .then(function() {
    console.log("DONE!");
  });
