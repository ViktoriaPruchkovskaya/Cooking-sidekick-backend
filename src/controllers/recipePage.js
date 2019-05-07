const { Recipe, Ingridient, Step } = require("../db/models");

async function recipePage(request, response) {
    try {
        const recipe = await Recipe.findAll({
            where: { id: request.params.id },
            include: [Ingridient, Step]
        });
        response.header("Content-Type", "application/json");
        response.send(JSON.stringify(recipe));
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    recipePage
};