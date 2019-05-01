const { Recipe } = require("../db/models");

async function recipeList(request, response) {
    try {
        console.log("request is received");
        const recipes = await Recipe.findAll();
        response.header("Content-Type", "application/json");
        response.send(JSON.stringify(recipes));
    } catch (error) {
        console.error(error);
    }
}


// Example of client side
// const response = await fetch("/recipes");
// const parsed_response = await response.json();
// Fetch API. (Axios.)


// function RecipeList() {
//     const [recipes, setRecipes] = useState({});

//     useEffect(() => {
//         const response = await fetch("api/recipes");
//         const parsed_response = await response.json();
//         setRecipes(parsed_response);
//     }, []);

//     return (
//         recipes.map((item) => <Item/>)
//     );
// }

// const obj = [
//     {
//         "id": 1,
//         "title": "Refrigerator Cookies",
//         "description": "These will freeze well for several months.",
//         "pic": "https://images.media-allrecipes.com/userphotos/560x315/1055677.jpg",
//         "createdAt": "2019-04-29T19:38:39.000Z",
//         "updatedAt": "2019-04-29T19:38:39.000Z",
//         "OriginId": 3,
//         "CategoryId": 1,
//         "DifficultyId": 1
//     }
// ];

// obj[0].id == 1;

// recipe ID 1
// step ID 3, 1, 2
// recipe step 1,3,1; 1,1,2; 1,2,3;


module.exports = {
    recipeList
};