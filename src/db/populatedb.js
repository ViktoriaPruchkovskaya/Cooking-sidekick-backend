const sequelize_fixtures = require("sequelize-fixtures");
const db = require("./database");
const models = require("./models");

db.sync({ force: true })
  .then(() => {
    sequelize_fixtures
      .loadFile(__dirname + "/fixtures/initial.json", models)
      .then(() => {
        console.log(`Database succesfully populated.`);
        process.exit(0);
      })
      .catch(error => {
        console.log(`Database populating error.`);
        console.error(error);
        process.exit(1);
      });
  })
  .catch(error => {
    console.error(error);
  });
