const Sequelize = require("sequelize");

const database = new Sequelize("cookingapp", "cookingapp", ".CookingApp123", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 11,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

module.exports = database;
