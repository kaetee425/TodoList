'use strict'

const { Strategy: LocalStrategy } = require ('passport-local')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require ('mongoose')
const keys = require('../config/keys')
const authRoutes = require('../routes/authRoutes')

const User = mongoose.model('users');

	
module.exports = function(passport){
	passport.use(new LocalStrategy (
		{
			usernameField: 'username'
		},
		async function(username, password, done) {
			const dbUser = await db.User.findOne({where: { username }})

			if (!dbUser) {
				return done(null, false, {
					message: "Incorrect username."
				})
			}

			else if ( !dbUser.validPassword(passowrd) ) {
				return done(null, false, {
					message: "Incorrect passowrd."
				})
			}
			return done(null, dbUser)
		}
	))

	passport.use(
		new GoogleStrategy({
			clientID:keys.googleClientID,
			clientSecret:keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		}, 
			(accessToken, refreshToken, profile, done) => {
				User.findOne({ googleId: profile.id })
					.then((existingUser) => {
						if (existingUser) {
							done(null, existingUser)
						} else {
							new User({ googleId: profile.id })
								.save()
								.then(user => done(null, user))
						}
					})

			}
		)
	);

	passport.serializeUser ((user, done) => {
		done(null, user.id)
	});

	passport.deserializeUser((id, done) => {
		User.findById(id)
			.then(user => {
				done(null, user)
			})
	});
}

