//npm modules
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const bcrypt = require('bcrypt-nodejs');

// configure passport.js to use the local strategy
passport.use(new LocalStrategy(												
  { usernameField: 'email' },
  (email, password, done) => {
    axios.get(`http://localhost:5000/users?email=${email}`)					//Looking for id,pwd w/ email
    .then(res => {
      const user = res.data[0]
      if (!user) {
        return done(null, false, { message: 'Invalid credentials.\n' });	//no user	
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Invalid credentials.\n' });	//pwd dont match
      }
      return done(null, user);												//ok
    })
    .catch(error => done(error));
  }
));


// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  console.log('Inside serializeUser callback. User id is save to the session file store here')
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  axios.get(`http://localhost:5000/users/${id}`)
  .then(res => done(null, res.data) )
  .catch(error => done(error, false))
});

// create the server
const app = express();

// add & configure middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  genid: (req) => {
    console.log('Inside session middleware genid function')
    console.log(`Request object sessionID from client: ${req.sessionID}`)
    return uuidv4() // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

// create the homepage route at '/'
app.get('/', (req, res) => {
  //res.send(`You got home page!\n`)
  res.sendFile(__dirname + "/index.html");
})

// create the login get and post routes
app.get('/login', (req, res) => {
  res.send(`You got the login page!\n`)
})

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(info) {return res.send(info.message)}
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.login(user, (err) => {
      if (err) { return next(err); }
      return res.redirect('/authrequired');
    })
  })(req, res, next);
})

app.get('/authrequired', (req, res) => {
  if(req.isAuthenticated()) {
    res.send('you hit the authentication endpoint\n')
  } else {
    res.redirect('/')
  }
})

// tell the server what port to listen on
app.listen(3000, () => {
  console.log('Listening on localhost:3000')
})