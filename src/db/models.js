const Sequelize = require("sequelize");

const Ingridient = database.define("Ingridient", {
  ingridientsName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Category = database.define("Category", {
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Origin = database.define("Origin", {
  natCuisine: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const RecipeStep = database.define("RecipeStep", {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stepNum: {
    type: Sequelize.INTEGER, 
    allowNull: false
  }
});

const RecipePic = database.define("RecipePic", {
  pic: {
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
Recipe.belongsTo(RecipePic);
Recipe.belongsTo(RecipeStep);

User.belongsTo(Role);

module.exports = {
  Origin,
  Category,
  Difficulty,
  Ingridient,
  Role,
  User,
  RecipePic,
  RecipeStep,
  Recipe
};
