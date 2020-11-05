const express = require('express');
const favorites = require('./fav_controller');
const router = express.Router();
const axios = require('axios').default
const Hoop = require('../models/hoops.js')
const Player = require('../models/players.js')
//////////////////////////////////////////////////////////////////////////
//API TEAM Route
//////////////////////////////////////////////////////////////////////////
router.get('/teams', (req, res) =>{
      t = req.query.name
      console.log(t)
      axios.get(`https://www.balldontlie.io/api/v1/teams/?q=${t}`)
      .then(function (response) {
            console.log(response.data.data)
            res.render('hoops/apiteams.ejs',{hoops: response.data.data, currentUser: req.session.currentUser})
            })
            .catch(function (error) {
                  // handle error
                  console.log(error);
                  })
                  .then(function () {
                  // always executed
      })
})

router.post('/favorites', (req, res) =>{
      // Hoop.create({//res.render instead of create 
      //       shortname: req.body.shortname,
      //       team: response.data.data.full_name,
      //       city: response.data.data.city,
      //       conference: response.data.data.conference,
      //       division: response.data.data.division
      // })
      Hoop.create(req.body).then( hoop => {
            res.redirect('/favorites')
      }).catch(error => console.log(error))
})

//////////////////////////////////////////////////////////////////////////
//API PLAYER Route
//////////////////////////////////////////////////////////////////////////
router.get('/search', (req, res)=> {
      t = req.query.name
      axios.get(`https://www.balldontlie.io/api/v1/players/?q=${t}`).then(function(response){
            console.log(response.data.data)
            res.render('hoops/allplayers.ejs', {hoops: response.data.data, currentUser: req.session.currentUser})
      })
      .catch(function (error) {
            console.log(error);
      })
      .then(function (){

      })
})

router.post('/players', (req, res) => {
      Players.create(req.body).then(hoop => {
            res.redirect('/players')
      }).catch(error => console.log(error))
})

//ROUTES

//Index
router.get('/', (req, res) =>{
      Hoop.find({}).then( (allHoops)=> {
            res.render('hoops/index.ejs', { 
                  hoops: allHoops, currentUser: req.session.currentUser })
      }).catch(error=> console.log(error))
})



////////////////////Come back and visit. New and Edit Routes will be handled in the sessions and users controllers////////////////////////////////////////////


//Edit
router.get

//New
router.get('/new',(req, res)=>{
      res.render('hoops/new.ejs', { currentUser: req.session.currentUser })
} )
////////////////////////////////////////////////////////////////////////////


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
            Player.find({}).then( (allPlayers)=>{
                  res.render('hoops/allplayers.ejs', { currentUser: req.session.currentUser, players: allPlayers})
            })
            .catch(error => console.log(error))
      
})

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
// router.get('/favorites', (req, res) => {
//       console.log('This is coming from the Hoops Controller')
//       res.render('../views/favorites/favorites.ejs', { currentUser: req.session.currentUser })
// })

//Not sure if an edit route is needed 
//EDIT 

//UPDATE


//Delete
router.delete('/teams/:index', (req, res) =>{
      Hoop.findByIdAndDelete(req.params.index).then(deletedInput => {
            res.redirect('/favorites') //Takes me back to the favorites page
      }).catch(error => console.log(error))
      
})

//Delete All





module.exports = router