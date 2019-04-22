const Sequelize = require("sequelize");

const database = new Sequelize("master", "", "", {
  host: "localhost\SQLEXPRESS",
  dialect: "sql",
  pool: {
    max: 11,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

module.exports = database;
// Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;