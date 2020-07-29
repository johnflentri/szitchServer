const express = require('express')
const { Router } = express
const bcrypt = require('bcrypt')
const User = require('./model')
const auth = require('../auth/middleware')

const router = new Router()

router.post('/user', async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    const encrypted = bcrypt.hashSync(password, 10)
    const entity = { username, email, password: encrypted }
    const user = await User.create(entity)
    res.send(user)
  } catch (error) {
    next(error)
  }
})

router.get('/user', auth, async (req, res, next) => {
  const { id } = req.user
  try {
    const user = await User.findByPk(id)
    const users = await User.findAll()
    res.json({ user, users })
  } catch (error) {
  }
})

router.get("/user/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (error) {
  }
})


module.exports = router