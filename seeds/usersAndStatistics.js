const User = require("../user/model");
const Event = require("../event/model");
const Content = require("../content/model");
const bcrypt = require("bcrypt");

// import smokeTutorialImage from '../src/images/smokeTutorialImage.jpg'

module.exports = async function seedUsersAndStatistics() {
  const userPassword = bcrypt.hashSync("1", 10)

  const user1 = await User.create({
    username: "ProTege",
    email: "1",
    password: userPassword,
    age: "15",
    protential: "A",
    bio: "I live and breath CSGO, I also just started playing",
    accuracyPercent: 62,
    killDeathRatio: 1.78,
    averageDamagePerRound: 159,
    overallRank: 2,
    avatarURL: "https://us.123rf.com/450wm/sudowoodo/sudowoodo1708/sudowoodo170800023/84484695-stock-vector-cartoon-ninja-drawing-in-chibi-manga-style-cute-vector-illustration-.jpg?ver=6",
    newPlayer: false
  });

  const user2 = await User.create({
    username: "CompetitiveCasualDude",
    email: "2",
    password: userPassword,
    age: "23",
    protential: "D",
    bio: "Playing for 2 years, looking to join a good team and win local tournaments",
    accuracyPercent: 61,
    killDeathRatio: 1.05,
    averageDamagePerRound: 80,
    overallRank: 3,
    avatarURL: "https://i.ya-webdesign.com/images/ninja-clipart-png-7.png",
    newPlayer: true
  });

  const user3 = await User.create({
    username: "ProAim123",
    email: "3",
    password: userPassword,
    age: "25",
    protential: "C-",
    bio: "I've played entry-frag position for semi-pro teams, can play multiple positions",
    accuracyPercent: 85,
    killDeathRatio: 1.55,
    averageDamagePerRound: 99,
    overallRank: 1,
    avatarURL: "https://www.pngkit.com/png/full/259-2598968_collection-of-free-directrix-download-on-ubisafe-ninja.png",
    newPlayer: true
  });

  const user4 = await User.create({
    username: "ConsistentGamerGuy1",
    email: "4",
    password: userPassword,
    age: "19",
    protential: "C+",
    bio: "I just play for fun",
    accuracyPercent: 50,
    killDeathRatio: 1.09,
    averageDamagePerRound: 76,
    overallRank: 4,
    avatarURL: "https://image.freepik.com/free-vector/cute-black-ninja_123847-92.jpg",
    newPlayer: true
  });

  const user5 = await User.create({
    username: "SprayAndPray",
    email: "5",
    password: userPassword,
    age: "18",
    protential: "C+",
    bio: "I am good at running and shooting",
    accuracyPercent: 42,
    killDeathRatio: 1.18,
    averageDamagePerRound: 61,
    overallRank: 5,
    avatarURL: "https://i.pinimg.com/736x/28/e2/b9/28e2b91905fe4ab4737f8ca88ceb0226.jpg",
    newPlayer: true
  });

  const user6 = await User.create({
    username: "NewGuy24",
    email: "6",
    password: userPassword,
    age: "16",
    protential: "B",
    bio: "I want to get good and be pro one day!",
    accuracyPercent: 29,
    killDeathRatio: 0.87,
    averageDamagePerRound: 75,
    overallRank: 6,
    avatarURL: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7283/ninja-clipart-md.png",
    newPlayer: true
  });

  const CologneESL = await Event.create({
    organisation: "Amsterdam Amateur League",
    eventName: "Knockout Tournament",
    date: "August 18 - 30, 2020",
    region: "Europe",
    logo: "data:image/png;base64,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",
    prize1: "€250",
    prize2: "€75",
    prize3: "€25",
  });
  const DreamHackMasters = await Event.create({
    organisation: "DreamHack",
    eventName: "Masters",
    date: "September 18 - 30, 2020",
    region: "Europe",
    logo: "data:image/png;base64,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",
    prize1: "€250",
    prize2: "€75",
    prize3: "€25",
  });

  const smokeTutorial = await Content.create({
    isLatestContent: true,
    title: "Smoke Tutorial",
    img: 'https://i.ytimg.com/vi/3j_vbimOu5g/maxresdefault.jpg',
  });
  const awpClutch = await Content.create({
    isLatestContent: true,
    title: "Awp Clutch",
    img: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/144765230/original/d05ddb322c8341bd2bb373ba5a639862bb0fd641/make-you-a-csgo-youtube-thumbnail.png',
  });
  const wow = await Content.create({
    isLatestContent: true,
    title: "wow",
    img: 'https://i.pinimg.com/originals/19/c3/73/19c373384913cc6d6e987e34a85a8260.jpg',
  });

  user1.addContent(smokeTutorial)
  user2.addContent(awpClutch)
  user3.addContent(wow)
}
