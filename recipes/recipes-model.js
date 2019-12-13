const db = require('../data/dbConfig');

function getRecipes(){
    return db("recipe")
}
function getShoppingList(id){
    return db("ingredient").select("measurement","amount","name").join('quantity', {'ingredient.id': 'ingredients_id'}).where({"recipe_id":id})
}
function getInstructions(id){
    return db("instruction").where({"recipes_id":id})
}
function getIngredients(id){
    return db("recipe").join('ingredient', {'recipe.id': 'recipe_id'}).where({"ingredient.id":id})
}
// 
module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getIngredients

}

