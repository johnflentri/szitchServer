const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../user/model')
// const Event = require('../event/model')
// const TeamEvent = require('../TeamEvent/model')

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
    allowNull: true
  },
  player2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  player3: {
    type: Sequelize.STRING,
    allowNull: true
  },
  player4: {
    type: Sequelize.STRING,
    allowNull: true
  },
  player5: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'teams'
})

Team.hasMany(User)
// Team.belongsToMany(Event, { through: TeamEvent, foreignKey: "teamId" })

module.exports = Team