// application imports
const express = require('express')
const router = express.Router()
const mongoose = require('../db/config/db-connection')
const Spotify = require('node-spotify-api')

// Spotify request keys
const spotify = new Spotify({
  id: '058ba811504e418d8b67bbc6ed8a0707',
  secret: '360cb210a04e4d97a5378818a5b2f6bf'
})

// GET ROUTES //
router.get('/new-releases', function (req, res) {
  spotify
    .request('https://api.spotify.com/v1/browse/new-releases')
    .then(function (data) {
      res.json(data)
    })
})

router.get('/search/:album', function (req, res) {
  spotify
    .search({ type: 'album', query: req.params.album })
    .then(function (response) {
      let newRes = response.albums.items
      res.json(newRes);
    })
    .catch(function (err) {
      console.log(err);
    });
})

router.get('/details/:id', function (req, res) {
  spotify
    .request('https://api.spotify.com/v1/albums/' + req.params.id)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (err) {
      console.log(err);
    });
})

// export router
module.exports = router
