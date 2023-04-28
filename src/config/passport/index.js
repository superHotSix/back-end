const passport = require('passport');
const local = require('./local');

module.exports = () => {
  
  passport.use(local);
  
  passport.serializeUser((user, callback) => {
    callback(null, user);
  });

  passport.deserializeUser((obj, callback) => {
    callback(null, obj);
  });
};