const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../user/model')

const Team = db.define('team', {
  teamName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  teamLogo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  player1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  player2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  player3: {
    type: Sequelize.STRING,
    allowNull: false
  },
  player4: {
    type: Sequelize.STRING,
    allowNull: false
  },
  player5: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'teams'
})

Team.hasMany(User)

module.exports = Team