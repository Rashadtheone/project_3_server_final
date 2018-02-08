const express   = require('express')
const mongoose  = require('../db/config/db-connection')
const Spotify   = require('node-spotify-api')
const router    = express.Router()

// Spotify request keys
// EXPORT TO ENV VARIABLE
const spotify = new Spotify({
  id: '058ba811504e418d8b67bbc6ed8a0707',
  secret: ''
})

// get latest releases
router.get('/new-releases', function (req, res) {
  spotify
    .request('https://api.spotify.com/v1/browse/new-releases')
    .then(function (data) {
      res.json(data)
    })
    .catch(function (err) {
      console.log(err)
    })
})

// search for album by name
router.get('/search/:album', function (req, res) {
  spotify
    .search({ type: 'album', query: req.params.album })
    .then(function (response) {
      let newRes = response.albums.items
      res.json(newRes)
    })
    .catch(function (err) {
      console.log(err)
    })
})

// get full album details by album id
router.get('/details/:id', function (req, res) {
  spotify
    .request('https://api.spotify.com/v1/albums/' + req.params.id)
    .then(function (response) {
      res.json(response)
    })
    .catch(function (err) {
      console.log(err)
    })
})

module.exports = router
