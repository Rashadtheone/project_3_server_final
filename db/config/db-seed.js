const mongoose = require('./db-connection')
const seedData = require('./seed-data')

const Review = mongoose.model('Review')

mongoose.Review = Promise

// plant the seeds!
// seed your local db with some data
Review
    .remove({})
    .then(function() {
        console.log('Planting seeds...')
        return Review.collection.insert(seedData)
    })
    .then(function() {
        console.log('Your db has been seeded!')
        process.exit()
    })

