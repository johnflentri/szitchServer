const express = require('express')
const { Router } = express
const Event = require('./model')

const router = new Router()

router.get('/event', async (req, res, next) => {
  try {
    const event = await Event.findAll()
    res.json(event)
  } catch (error) {
  }
})

router.get("/event/:id", async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id)
    res.json(event)
  } catch (error) {
  }
})

// router.get('/user', auth, async (req, res, next) => {
//   try {
//     const userProfiles = await User.findAll()
//     res.json(userProfiles)
//   } catch (error) {
//   }
// })


module.exports = router