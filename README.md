# Facebook-login-api--callback with PassportJS and Passport Facebook Strategy

# Tutorial
http://www.passportjs.org/packages/passport-facebook/
# Install
$ npm install passport-facebook
# Configuration
`````````
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
`````````
# Routs
// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
````````
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
````````                
# Permissions
```
app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'read_stream' })
);
*Multiple permissions can be specified as an array.*
 app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['read_stream', 'publish_actions'] })
);
```

# Link
``
<a href="/auth/facebook">Login with Facebook</a>
``
