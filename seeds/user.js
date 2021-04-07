const { User } = require("../models");

const userData = [
  {
    username: "Johnny Boy",
    name: "John",
    email: "John@test.com",
    password: "johntest",
  },
  {
    username: "Jake the Man",
    name: "Jake",
    email: 'Jake@test.com',
    password: "jaketest",
  },
  {
    username: "Joey",
    name: "Joe",
    email: 'Joe@test.com',
    password: "joestest",
  },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
