const { Recipe } = require('../models');

const recipedata =
[
  {
    "title": "Chicken Recipe",
    "image_url": "http://google.com",
    "ingredients": "1 tablespoon extra-virgin olive oil, cup white wine, garlic, 1pound chicken",
    "hoto_recipe": "Heat the oil in a pan in medium heat. cut chicken and fry in hot oil until you see brownish color, 3 minutes on each side. Add white wine, garlic, chilli powder to the pan while cooking; once you see its tender, its done.",
    "category": "Appetizer",
    "userId": 1
  },
  {
    "title": "Ginger Chicken Recipe",
    "image_url": "http://google.com",
    "ingredients": "1 tablespoon extra-virgin olive oil, cup white wine, garlic, 1pound chicken",
    "hoto_recipe": "Heat the oil in a pan in medium heat. cut chicken and fry in hot oil until you see brownish color, 3 minutes on each side. Add white wine, garlic, chilli powder to the pan while cooking; once you see its tender, its done.",
    "category": "Entree",
    "userId": 2
  },
  {
    "title": "Omlette",
    "image_url": "http://google.com",
    "ingredients": "1 tablespoon extra-virgin olive oil, add eggs, garlic",
    "hoto_recipe": "Heat the oil in a pan in medium heat. cut chicken and fry in hot oil until you see brownish color, 3 minutes on each side. Add white wine, garlic, chilli powder to the pan while cooking; once you see its tender, its done.",
    "category": "Breakfast",
    "userId": 3
  },
  {
    "title": "Icecream",
    "image_url": "http://google.com",
    "ingredients": "Icecream",
    "hoto_recipe": "Icecream",
    "category": "Dessert",
    "userId": 4
  }
];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;