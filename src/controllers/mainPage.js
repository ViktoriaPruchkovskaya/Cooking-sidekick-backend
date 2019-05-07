const { Recipe, Category, Origin } = require("../db/models");

async function recipeList(request, response) {
  try {
    const query = {};
    if (request.query.category) {
      query.categoryId = request.query.category;
    }
    const recipes = await Recipe.findAll({
      where: query,
      include: [Category, Origin]
    });
    response.header("Content-Type", "application/json");
    response.send(JSON.stringify(recipes));
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  recipeList
};
