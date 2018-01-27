const router = require('express').Router()
const {User} = require('../db/models')
const { literal } = require('sequelize')
const { resetCode } = require('../../secrets')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'username','isRat']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/rats', (req, res, next) => {
  User.findAll({
    where: {
      isRat: true
    },
    attributes: ['id', 'username', 'points', 'isRat']
  })
  .then(users => res.json(users))
    .catch(next)
})

router.get('/humans', (req, res, next) => {
  User.findAll({
    where: {
      isRat: false
    },
    attributes: ['id', 'username', 'points', 'isRat']
  })
  .then(users => res.json(users))
    .catch(next)
})

router.get('/rats/points', (req, res, next) => {
  User.getTotalRatPoints()
  .then(points => res.json(points))
    .catch(next)
})

router.get('/humans/points', (req, res, next) => {
  User.getTotalHumanPoints()
  .then(points => res.json(points))
    .catch(next)
})

//TEST THIS ONE MORE
router.post('/:id/add', (req, res, next) => {
  User.findOne(
    { where: { id: req.params.id }},
  ).then(user => user.update(
    { points: user.points + 1 },
  ))
   .then(user => res.json(user))
  /*.then(user => {
    //if logged in, send status(200) (use sockets to show clicker updates later?)
    //if not logged in, redirect to signup with referral
    if(req.user) res.redirect('/users/'+req.params.id);
    else res.redirect('/landing?'+req.params.id);  
  })*/
  .catch(next)
})

router.post('/:id/reset', (req, res, next) => {
  console.log("req.body",req.body)
  if (req.body.code !== resetCode) res.status(200).send('Could not reset points.');
  User.findOne(
    { where: { id: req.params.id }},
  ).then(user => user.update(
    { points: 0 },
  ))
  .then(user => res.json(user))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  User.findOne({
    where: {id: req.params.id},
    attributes: ['id', 'username', 'points', 'isRat']
  })
  .then(user => res.json(user))
  .catch(next)
})