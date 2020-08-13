const express = require('express')
const { Router } = express
const Team = require('./model')
const auth = require('../auth/middleware');

const router = new Router()

router.get('/teams', auth, async (req, res, next) => {
  try {
    const team = await Team.findAll()
    res.json(team)
  } catch (error) {
  }
})

module.exports = router