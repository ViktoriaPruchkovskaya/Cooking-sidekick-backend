const { Recipe } = require("../db/models");
const Op = require("sequelize").Op;

async function dailyRecipe(request, response) {
  try {
    const dRecipe = await Recipe.findAll({
      where: { id: {
        [Op.in]: [1, 2]
      } }
    });
    response.header("Content-Type", "application/json");
    response.send(JSON.stringify(dRecipe));
  } catch (error) {
    console.error(error);
  }
}
// function randId(){
//   Math.floor(1 + Math.random() * (2 + 1 - 1))
// }

module.exports = {
  dailyRecipe
};
