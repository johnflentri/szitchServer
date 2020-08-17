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

router.post("/teamUsers", auth, async (req, res, next) => {
  try {
    const entity = {
      // isLatestContent: true,
      userId: req.user.id,
      teamId: req.body.teamId
    }
    const addUser = await TeamUsers.create(entity)
    res.send(addUser)
  } catch (error) {
  }
})

module.exports = router