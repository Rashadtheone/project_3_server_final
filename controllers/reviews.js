const express   = require('express')
const mongoose  = require('../db/config/db-connection')
const router    = express.Router()
const Review    = mongoose.model('Review')
const Comment   = mongoose.model('Comment')

// get all reviews
router.get('/', function (req, res) {
    Review
        .find({})
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
        })
})

// get review by id
router.get('/:_id', function (req, res) {
    Review
        .findOne({ _id: req.params._id })
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
        })
})

// create new review
router.post('/', function (req, res) {
    Review
        .create(req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
        })
})

// create new comment
router.post('/add-comments/:_id/', function (req, res) {
    Review
        .findOne({ _id: req.params._id })
        .then(function (review) {
            comment = new Comment(req.body)
            review.comments.push(comment)
            review.save()
                .then(function (data) {
                    res.json(data)
                })
        })
        .catch(function (err) {
            console.log(err)
        })
})

// update review
router.put('/:_id', function (req, res) {
    Review
        .findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
        })
})

// delete review
router.delete('/:_id', function (req, res) {
    Review
        .findOneAndRemove({ _id: req.params._id }, req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
        })
})

module.exports = router
