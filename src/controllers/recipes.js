const { Recipe, Ingridient, Step } = require("../db/models");

async function recipeList(request, response) {
    try {
        console.log("request is received");
        const recipes = await Recipe.findAll({
            include: [Ingridient, Step]
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