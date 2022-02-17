const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedRecipe = require('./recipeData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUser();
  console.log('--------------');

  await seedRecipe();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  process.exit(0);
};

seedAll();