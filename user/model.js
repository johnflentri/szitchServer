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
  accuracyPercent: {
    type: Sequelize.STRING,
    allowNull: true
  },
  killDeathRatio: {
    type: Sequelize.STRING,
    allowNull: true
  },
}, {
  timestamps: false,
  tableName: 'users'
})

module.exports = User