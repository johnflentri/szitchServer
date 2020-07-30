const User = require("../user/model");
const bcrypt = require("bcrypt");

module.exports = async function seedUsersAndStatistics() {
  const userPassword = bcrypt.hashSync("1", 10)

  const user1 = await User.create({
    username: "NewGuy24",
    email: "1",
    password: userPassword,
    accuracyPercent: 29,
    killDeathRatio: 0.87
  });

  const user2 = await User.create({
    username: "CompetitiveCasualDude",
    email: "2",
    password: userPassword,
    accuracyPercent: 61,
    killDeathRatio: 1.05
  });

  const user4 = await User.create({
    username: "ProAim123",
    email: "3",
    password: userPassword,
    accuracyPercent: 85,
    killDeathRatio: 1.55
  });

  const user3 = await User.create({
    username: "ConsistentGamerGuy1",
    email: "4",
    password: userPassword,
    accuracyPercent: 50,
    killDeathRatio: 1.01
  });
}