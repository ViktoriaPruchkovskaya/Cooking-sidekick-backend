const express = require('express');

const {recipeList} = require('./controllers/recipes');

const router = express.Router();

router.get("/api/", function(request, response) {
    response.send("Hello");
});
router.get("/api/recipes", recipeList);

module.exports = router;