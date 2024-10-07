require('dotenv')
const LocalStrategy = require('passport-local')
const passport = require('passport')

passport.use(new LocalStrategy(userModel.authenticate()))
