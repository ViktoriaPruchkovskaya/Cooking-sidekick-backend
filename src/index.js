const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

const appPath = path.join(__dirname, "../public");

app.use(express.static(appPath));

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(PORT, function() {
  console.log(`App listening on port  ${PORT}!`);
});
