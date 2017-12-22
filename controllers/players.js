// application imports
const express = require('express')
const router = express.Router()
const mongoose = require('../db/config/db-connection')

// mongoose.model to retrieve the Test [replace with your own] model
const Player = mongoose.model('Player')

// GET ROUTES //
router.get('/', function(req, res) {
    Player
        .find({})
        .then(function(data) {
            res.json(data)
        })
})

router.get('/:name', function(req, res) {
    Player
        .findOne({name: req.params.name})
        .then(function(data) {
            res.json(data)
        })
})

// POST ROUTES //
router.post('/', function(req, res) {
    Player
        .create(req.body)
        .then(function(data) {
            res.json(data)
        })
})

// PUT ROUTES //
router.put('/:name', function(req, res) {
    Player
        .findOneAndUpdate({ name: req.params.name} , req.body)
        .then(function(data) {
            res.json(data)
        })
})

// DELETE ROUTES //
router.delete('/:name', function(req, res) {
    Player
        .findOneAndRemove({ name: req.params.name} , req.body)
        .then(function(data) {
            res.json(data)
        })
})

// export router
module.exports = router
