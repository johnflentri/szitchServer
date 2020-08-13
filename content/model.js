const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../user/model')

const Content = db.define('content', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  img: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Content