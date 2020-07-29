const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../user/model')

const Accuracy = db.define('accuracy', {
  value: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'accuracy'
})

Accuracy.belongsTo(User)

module.exports = Accuracy