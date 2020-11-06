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
      axios.get(`https://www.balldontlie.io/api/v1/players/?per_page=100&search=${t}`).then(function(response){
            console.log(response.data.data)
            res.render('hoops/player.ejs', {players: response.data.data, currentUser: req.session.currentUser})
      })
      .catch(function (error) {
            console.log(error);
      })
      // .then(function (){

      // })
})
//===== This allows me to POST players to my favorites table in my favorites route
router.post('/player', (req, res) => {
      Player.create(req.body).then(hoop => {
            res.redirect('/favorites')
      }).catch(error => console.log(error))
})
/////////////////////////////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//All Players Page on the PLAYERS route
router.get('/players', (req, res) =>{
      axios.get(`https://www.balldontlie.io/api/v1/players`).then(response => {
            console.log(response.data.data)
            res.render('hoops/allplayers.ejs', {currentUser: req.session.currentUser, players: response.data.data})
      }).catch(error => (console.log(error)))
})
// allows you to post a player to your favorites from the PLAYERS route
router.post('/players', (req, res) => {
      Player.create(req.body).then(hoop => {
            res.redirect('/favorites')
      }).catch(error => console.log(error))
})
////////////////////////////////////////////////////////////////////////////

//Player Name Search ====== This is the route accessed after a SEARCH.
router.get('/player', (req, res) =>{
      axios.get(`https://www.balldontlie.io/api/v1/players`).then(response => {
            console.log(response.data.data)
            res.render('hoops/player.ejs', {currentUser: req.session.currentUser, players: response.data.data})
      }).catch(error => (console.log(error)))
})


//Player Comparison
router.get('/compare',(req, res)=>{
      res.render('hoops/comp.ejs', { currentUser: req.session.currentUser })
} )



//Not sure if an edit route is needed 
//EDIT 

//UPDATE


//Delete Teams
router.delete('/teams/:index', (req, res) =>{
      Hoop.findByIdAndDelete(req.params.index).then(deletedInput => {
            res.redirect('/favorites') //Takes me back to the favorites page
      }).catch(error => console.log(error))
      
})

//Delete Player

router.delete('/players/:index', (req, res) =>{
      Player.findByIdAndDelete(req.params.index).then(deletedInput => {
            res.redirect('/favorites') //Takes me back to the favorites page
      }).catch(error => console.log(error))
      
})




module.exports = router