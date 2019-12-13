const express = require('express');

const recipe = require('./recipes-model')

const router = express.Router();

router.get('/recipes/', (req, res) => {
  recipe.getRecipes()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});
router.get('/recipes/:id/shoppingList', (req, res) => {
    recipe.getShoppingList(req.params.id)
    .then(schemes => {
      res.json(schemes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
  });
  router.get('/recipes/:id/instructions', (req, res) => {
    recipe.getInstructions(req.params.id)
    .then(schemes => {
      res.json(schemes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
  });
  router.get('/ingredients/:id/recipes', (req, res) => {
    recipe.getIngredients(req.params.id)
    .then(schemes => {
      res.json(schemes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
  });
  
  

module.exports = router