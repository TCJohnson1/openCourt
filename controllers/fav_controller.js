//This will house all of the routes for the team(s) and/or player(s) the user establishes as their favorite(s)
const express = require('express')
const favorites = express.Router();


//ROUTES

//Index
favorites.get('/favorites',(req, res)=>{
      console.log('printing favorites')
      res.render('favorites/show.ejs', { currentUser: req.session.currentUser })
} )

//Edit


//Delete


//Delete All


module.exports = favorites