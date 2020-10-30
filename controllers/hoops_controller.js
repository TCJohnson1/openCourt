const express = require('express')
const router = express.Router();

//ROUTES
let currentUser;
//Index
router.get('/', (req, res) =>{
      res.render('hoops/index.ejs', { currentUser: req.session.currentUser })
})

//Edit
router.get

//New
router.get('/new',(req, res)=>{
      res.render('hoops/new.ejs', { currentUser: req.session.currentUser })
} )

// //Login
// router.get('/login', (req, res) =>{
//       res.render('')
// })

// //Register
// router.get('users/new', (req, res)=>{
//       res.render('users/new.ejs')
// })

//Show
router.get('/show',(req, res)=>{
      res.render('hoops/show.ejs', { currentUser: req.session.currentUser })
} )

//Teams
router.get('/teams',(req, res)=>{
      res.render('hoops/allteams.ejs', { currentUser: req.session.currentUser })
} )

//Individual Team
router.get('/team', (req, res) =>{
      res.render('hoops/team.ejs', { currentUser: req.session.currentUser })
})

//Players
router.get('/players',(req, res)=>{
      res.render('hoops/allplayers.ejs', { currentUser: req.session.currentUser })
} )

//Individual Player
router.get('/player',(req, res)=>{
      res.render('hoops/player.ejs', { currentUser: req.session.currentUser })
} )

//Player Comparison
router.get('/compare',(req, res)=>{
      res.render('hoops/comp.ejs', { currentUser: req.session.currentUser })
} )


module.exports = router