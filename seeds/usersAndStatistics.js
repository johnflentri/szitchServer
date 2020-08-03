const User = require("../user/model");
const bcrypt = require("bcrypt");

module.exports = async function seedUsersAndStatistics() {
  const userPassword = bcrypt.hashSync("1", 10)

  const user1 = await User.create({
    username: "NewGuy24",
    email: "1",
    password: userPassword,
    accuracyPercent: 29,
    killDeathRatio: 0.87,
    overallRank: 4,
    avatarURL: "https://www.pngkey.com/png/detail/902-9020252_igo-ninja-icon-ninja-free.png"
  });

  const user2 = await User.create({
    username: "CompetitiveCasualDude",
    email: "2",
    password: userPassword,
    accuracyPercent: 61,
    killDeathRatio: 1.05,
    overallRank: 2,
    avatarURL: "https://www.pngkit.com/png/full/259-2598968_collection-of-free-directrix-download-on-ubisafe-ninja.png"
  });

  const user4 = await User.create({
    username: "ProAim123",
    email: "3",
    password: userPassword,
    accuracyPercent: 85,
    killDeathRatio: 1.55,
    overallRank: 1,
    avatarURL: "https://i.ya-webdesign.com/images/ninja-clipart-png-7.png"
  });

  const user3 = await User.create({
    username: "ConsistentGamerGuy1",
    email: "4",
    password: userPassword,
    accuracyPercent: 50,
    killDeathRatio: 1.01,
    overallRank: 3,
    avatarURL: "https://lh3.googleusercontent.com/proxy/JH4vvwZt-ooRUFCZw2TYMQQWrUdRf_xiA1RUGQFfDTob8EAesiX4pQviDpPlGnUKdfKptWEpIQzh4dSASCUuBz2rY-7LCBPP_fTyBkm561oL1gOfAn1GKAoiVTCFC1qfk1PcA_4"
  });
}