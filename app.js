const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const session = require('session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
// const user = require('./routes/routes.js');

app.use(bodyParser.json());
app.use(session => ({
    secret: 'i am developer',
    resave: true,
    saveUnitialized: true
}));
const FACEBOOK_APP_ID = '',
    FACEBOOK_APP_SECRET = '';
const fbOpts = {
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,  
    callbackURL: "http://localhost:5000//auth/facebook/callback"
};
const fbCallback = function (accessToken, refreshToken, profile, cb) {
    console.log(accessToken, refreshToken, profile);
};
passport.use(new FacebookStrategy(fbOpts, fbCallback));
app.route('/')
    .get(passport.authenticate('facebook'));

app.route('auth/facebook/callback')
    .get(function (req, res) {
        res.send('check status of request');
    })
app.listen(5000);