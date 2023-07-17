const { Router } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
// const passport = require('passport');
var bodyParser = require('body-parser');
const router = require('./router/route');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
const ejs = require("ejs");
const passport = require('./middelware/passport');




//------------passport...................//

// const signUp_model = require('./model/signUp_model');
// var JwtStrategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;
// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'demo';

// passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {

//    await signUp_model.findOne({email: jwt_payload.email}).then((user)=>{
//     if (user) {
//       return done(null, user);
//   } else {
//       return done(null, false);
//     }
//    }
// ).catch((err)=>console.log(err))

// }));

mongoose.connect('mongodb+srv://tamoghna_test:tamoghna17@test.uvbxgla.mongodb.net/chirag')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Good Morning');
})


// app.use(bodyParser());
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
// app.use(initialize());
app.use(passport.initialize());

app.use('/',router)
app.use(express.json());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})