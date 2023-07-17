const passport = require('passport');
const signUp_model = require('../model/signUp_model');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'demo';

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {

   await signUp_model.findOne({email: jwt_payload.email}).then((user)=>{
    if (user) {
      return done(null, user);
  } else {
      return done(null, false);
    }
   }
).catch((err)=>console.log(err))

}));

module.exports = passport;

