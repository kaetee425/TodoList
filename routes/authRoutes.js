const passport = require('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const passportInfo = require('../middleware/passport')
require ('../models/gAuth')

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	})
};