const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = require("./user.js");
const seedPost = require("./postSeeds");
const seedcomments = require("./commentSeeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, seedPost, seedcomments, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
