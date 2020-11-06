//This will house all of the routes for the team(s) and/or player(s) the user establishes as their favorite(s)
const express = require('express')
const favorites = express.Router();
const Hoop = require('../models/hoops.js');
const Player = require('../models/players.js');

//ROUTES

//Index
favorites.get('/',(req, res)=>{
      console.log('printing favorites')
      Hoop.find({}).then( (allHoops)=>{
            Player.find({}).then( (allPlayers)=>{
                  res.render('favorites/favorites.ejs', { currentUser: req.session.currentUser, hoops: allHoops, players: allPlayers })
            })
      }).catch(error => console.log(error))
})

//Edit


//Delete


//Delete All


module.exports = favorites