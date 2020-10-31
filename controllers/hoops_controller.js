const express = require('express');
const favorites = require('./fav_controller');
const router = express.Router();

//ROUTES
let currentUser;

//Redirect
// router.use((req, res, next) =>{
//       if (req.session.currentUser){
//             next()
//       }else {
//             res.redirect('/sessions/new')
//       }
// })

//Index
router.get('/', (req, res) =>{
      res.render('hoops/index.ejs', { currentUser: req.session.currentUser })
})

////////////////////Come back and visit. New and Edit Routes will be handled in the sessions and users controllers////////////////////////////////////////////


//Edit
router.get

//New
router.get('/new',(req, res)=>{
      res.render('hoops/new.ejs', { currentUser: req.session.currentUser })
} )
////////////////////////////////////////////////////////////////////////////

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

////////////////////Come back and visit. A list of every player doesnt really make sense to have////////////////////////////////////////////
//Players
router.get('/players',(req, res)=>{
      res.render('hoops/allplayers.ejs', { currentUser: req.session.currentUser })
} )
////////////////////////////////////////////////////////////////////////////

//Individual Player
router.get('/player',(req, res)=>{
      res.render('hoops/player.ejs', { currentUser: req.session.currentUser })
} )

//Player Comparison
router.get('/compare',(req, res)=>{
      res.render('hoops/comp.ejs', { currentUser: req.session.currentUser })
} )


//////////////////////////////////////////////////////////////////////////////////////////
// Favorites Routes Copy and Paste if this all needs to go into a Favorites Controller
//////////////////////////////////////////////////////////////////////////////////////////

//INDEX
//Test Favorites Route
router.get('/favorites', (req, res) => {
      console.log('This is coming from the Hoops Controller')
      res.render('../views/favorites/show.ejs', { currentUser: req.session.currentUser })
})

//Not sure if an edit route is needed 
//EDIT 

//UPDATE


//Delete
router.delete('/favorites:/index', (req, res) =>{
      //api.legnth = 0
      res.redirect('/favorites') //Takes me back to the favorites page
})

//Delete All





module.exports = router