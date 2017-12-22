const mongoose = require('./db-connection')
const seedData = require('./seed-data')

const Player = mongoose.model('Player')

mongoose.Promise = Promise

// plant the seeds!
// seed your local db with some data
Player
    .remove({})
    .then(function() {
        console.log('Planting seeds...')
        return Player.collection.insert(seedData)
    })
    .then(function() {
        console.log('Your db has been seeded!')
        process.exit()
    })

