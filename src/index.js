const express = require("express");
const path = require("path");
const db = require("./db/database");
const models = require("./db/models");
const app = express();
const router = require("./routes");

const PORT = process.env.PORT || 8080;

const appPath = path.join(__dirname, "../public");

app.use(express.static(appPath));
app.use(router);

function startListen(app, port) {
  app.listen(port, function() {
    console.log(`App listening on port  ${PORT}!`);
  });
}

db.sync().then(() => {
  console.log("Database synchronized");
  startListen(app, PORT);
}).catch((error) => {
  console.error(error);
});
