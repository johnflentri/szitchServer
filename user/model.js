const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.STRING,
    allowNull: true
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  protential: {
    type: Sequelize.STRING,
    allowNull: true
  },
  accuracyPercent: {
    type: Sequelize.STRING,
    allowNull: true
  },
  killDeathRatio: {
    type: Sequelize.STRING,
    allowNull: true
  },
  averageDamagePerRound: {
    type: Sequelize.STRING,
    allowNull: true
  },
  overallRank: {
    type: Sequelize.STRING,
    allowNull: true
  },
  avatarURL: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  newPlayer: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'users'
})

module.exports = User