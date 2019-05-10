const Sequelize = require("sequelize");
const database = require("./database");

const Ingredient = database.define("Ingredient", {
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
    type: Sequelize.STRING,
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

const Favorite = database.define("Favorite", {
  isFavorite:{
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Ingredient.belongsToMany(Recipe, {
  through: "RecipeIngredients",
  foreignKey: "IngredientId",
  otherKey: "RecipeId"
});
Recipe.belongsToMany(Ingredient, {
  through: "RecipeIngredients",
  foreignKey: "RecipeId",
  otherKey: "IngredientId"
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
  through: Favorite,
  foreignKey: "UserId",
  otherKey: "RecipeId"
});
Recipe.belongsToMany(User, {
  through: Favorite,
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
  Ingredient,
  Role,
  User,
  Step,
  Recipe,
  Favorite
  // RecipeSteps
};
