const { Recipe, Category, Origin, Difficulty } = require("../db/models");

async function recipeList(request, response) {
  try {
    const query = {};
    if (request.query.category) {
      query.categoryId = request.query.category;
    }
    if(request.query.origin){
      query.originId = request.query.origin;
    }
    if(request.query.difficulty){
      query.difficultyId = request.query.difficulty;
    }
    const recipes = await Recipe.findAll({
      where: query,
      include: [Category, Origin, Difficulty]
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
