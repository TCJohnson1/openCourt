const express = require('express')
const router = express.Router();

//ROUTES

//Index
router.get('/', (req, res) =>{
      res.render('hoops/index.ejs')
})

//Edit
router.get

//New
router.get('/new',(req, res)=>{
      res.render('hoops/new.ejs')
} )

//Login
router.get('')

//Register
router.get('users/new', (req, res)=>{
      res.render()
})

//Show
router.get('/show',(req, res)=>{
      res.render('hoops/show.ejs')
} )

//Teams
router.get('/teams',(req, res)=>{
      res.render('hoops/allteams.ejs')
} )

//Individual Team
router.get('/team', (req, res) =>{
      res.render('hoops/team.ejs')
})

//Players
router.get('/players',(req, res)=>{
      res.render('hoops/allplayers.ejs')
} )

//Individual Player
router.get('/player',(req, res)=>{
      res.render('hoops/player.ejs')
} )

//Player Comparison
router.get('/compare',(req, res)=>{
      res.render('hoops/comp.ejs')
} )

module.exports = router