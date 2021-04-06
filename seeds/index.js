const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = require("./user.js");
const seedPost = require("./postSeeds");
const seedcomments = require("./commentSeeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await userData();
  await seedPost();
  await seedcomments();

  process.exit(0);
};

seedDatabase();
