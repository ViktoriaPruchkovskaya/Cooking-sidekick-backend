const Sequelize = require("sequelize");
const database = require("./database");

const Ingridient = database.define("Ingridient", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

const Category = database.define("Category", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Origin = database.define("Origin", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Step = database.define("Step", {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// const RecipeStepsStep = database.define("RecipeSteps", {
//   position: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   }
// });

const User = database.define("User", {
  login: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  pass: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Role = database.define("Role", {
  role: {
    type: Sequelize.BOOLEAN, // 0 - user, 1 - admin
    allowNull: false
  }
});

const Difficulty = database.define("Difficulty", {
  difficulty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Recipe = database.define("Recipe", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pic: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Ingridient.belongsToMany(Recipe, {
  through: "RecipeIngridients",
  foreignKey: "IngridientId",
  otherKey: "RecipeId"
});
Recipe.belongsToMany(Ingridient, {
  through: "RecipeIngridients",
  foreignKey: "RecipeId",
  otherKey: "IngridientId"
});

Step.belongsToMany(Recipe, {
  through: "RecipeSteps",
  foreignKey: "StepId",
  otherKey: "RecipeId"
});
Recipe.belongsToMany(Step, {
  through: "RecipeSteps",
  foreignKey: "RecipeId",
  otherKey: "StepId"
});

User.belongsToMany(Recipe, {
  through: "Favorites",
  foreignKey: "UserId",
  otherKey: "RecipeId"
});
Recipe.belongsToMany(User, {
  through: "Favorites",
  foreignKey: "RecipeId",
  otherKey: "UserId"
});

Recipe.belongsTo(Origin);
Recipe.belongsTo(Category);
Recipe.belongsTo(Difficulty);

User.belongsTo(Role);

module.exports = {
  Origin,
  Category,
  Difficulty,
  Ingridient,
  Role,
  User,
  Step,
  Recipe,
  // RecipeSteps
};
