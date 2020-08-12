const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  organisation: {
    type: Sequelize.STRING,
    allowNull: false
  },
  eventName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  region: {
    type: Sequelize.STRING,
    allowNull: true
  },
  logo: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  prize1: {
    type: Sequelize.STRING,
    allowNull: true
  },
  prize2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  prize3: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'events'
})

module.exports = Event