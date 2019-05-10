const express = require('express');

const {recipePage} = require('./controllers/recipePage');
const {recipeList} = require('./controllers/mainPage');
const {dailyRecipe} = require ('./controllers/dailyRecipe')

const router = express.Router();

router.get("/api/", function(request, response) {
    response.send("Hello");
});
router.get("/api/recipe/:id", recipePage);
router.get("/api/recipes", recipeList);
router.get("/api/dailyRecipe", dailyRecipe)

module.exports = router;