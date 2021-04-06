const { User } = require("../models");

const userData = [
  {
    username: "John",
    email: "John@test.com",
    password: "johntest",
  },
  {
    username: "Jake",
    email: 'Jake@test.com',
    password: "jaketest",
  },
  {
    username: "Joe",
    email: 'Joe@test.com',
    password: "joestest",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
