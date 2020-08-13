const Sequelize = require('sequelize')
const db = require('../db')

const Content = db.define('content', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  img: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'content'
})

module.exports = Content