const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../user/model')

const KillDeathRatio = db.define('killDeathRatio', {
  value: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'killDeathRatio'
})

KillDeathRatio.belongsTo(User)

module.exports = KillDeathRatio