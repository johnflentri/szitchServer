const Sequelize = require("sequelize");
const db = require("../db");

const UserContent = db.define("user_Content", {
  isLatestContent: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  userId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contentId: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = UserContent;