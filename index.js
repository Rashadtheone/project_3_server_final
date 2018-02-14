const express           = require('express')
const bodyParser        = require('body-parser')
const cors              = require('cors')
const session              = require('client-sessions')
const reviewsController = require('./controllers/reviews')
const albumsController  = require('./controllers/albums')

// create instance of express
const app = express()

// body-parser config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// cors config
app.use(cors())

// User Auth set up 
// app.use(session({
//   cookieName: 'mySession', //of coookie object!
//   secret: 'dfoasjdfiuahsiudfhoa', //random ungessable string
//   duration: 24 * 60 * 60 * 1000, // how long it last
//   activeDuration: 1000 * 60 * 60 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds 
// }));


// //using Auth 
// app.use(function(req, res, next) {
//   if (req.mySession.seenyou) {
//     res.setHeader('seen you!', 'true')
//   } else {
//     // setting a property will automatically cause a Set-Cookie response 
//     // to be sent 
//     req.mySession.seenyou = true;
//     res.setHeader('X-Seen-You', 'false');
//   }
// })


// controllers
app.use('/reviews', reviewsController)
app.use('/albums', albumsController)

// port config
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})

