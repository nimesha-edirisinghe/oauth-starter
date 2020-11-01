const express = require("express");

const app = express();

// set view engine
app.set("view engine", "ejs");

// create home route
app.get("/", (req, res) => {
  res.json({
    msg: "This is Home",
  });
});

app.listen(3000, () => {
  console.log("app now listening for requests on port 3000");
});
