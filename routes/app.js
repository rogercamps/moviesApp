const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const genres = require('../genres.json')
const movies = require('../movies.json')

app.use(bodyParser.json())

app.set('view engine', 'pug')

app.get('/movies', function(req, res) {
  console.log(movies);
  res.json({movies})
})




app.listen(3000, () => {
  console.log('The app is running on localhost:3000!');
})
