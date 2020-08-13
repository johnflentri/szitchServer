const express = require('express')
const { Router } = express
const Content = require('./model')
// const AllContent = require('../userContent/model')
const auth = require('../auth/middleware');

const router = new Router()

// router.get('/userContent/:id', auth, async (req, res, next) => {
//   try {
//     const allContent = await Content.findAll()
//     res.json(allContent)
//   } catch (error) {
//   }
// })

router.get('/content', auth, async (req, res, next) => {
  try {
    const content = await Content.findAll()
    // const postsLocationId = locations.map(posts => posts.dataValues.locationId)
    // const posts = await Post.findAll({
    //   where: {
    //     locationId: postsLocationId
    //   }
    // })
    res.json(content)
  } catch (error) {
  }
})

// router.post('/locations/:id/post', auth, async (req, res, next) => {
//   try {
//     const entity = {
//       title: req.body.title,
//       content: req.body.content,
//       locationId: req.body.locationId,
//       userId: req.user.id
//     }
//     const post = await Post.create(entity)
//     res.send(post)
//   } catch (error) {
//     next(error)
//   }
// })

module.exports = router