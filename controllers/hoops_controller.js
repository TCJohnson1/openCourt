const express = require('express')
const router = express.Router();

router.get('/', (req, res) =>{
      res.render('hoops/index.ejs')
})

router.get('/new',(req, res)=>{
      res.render('hoops/new.ejs')
} )

router.get('/show',(req, res)=>{
      res.render('hoops/show.ejs')
} )

router.get('/teams',(req, res)=>{
      res.render('hoops/allteams.ejs')
} )

router.get('/team', (req, res) =>{
      res.render('hoops/team.ejs')
})

router.get('/players',(req, res)=>{
      res.render('hoops/allplayers.ejs')
} )

router.get('/player',(req, res)=>{
      res.render('hoops/player.ejs')
} )

router.get('/compare',(req, res)=>{
      res.render('hoops/comp.ejs')
} )



module.exports = router