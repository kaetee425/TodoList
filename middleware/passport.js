'use strict'

const { Strategy: LocalStrategy } = require ('passport-local')
const db = require ('../models')

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

	passport.serializeUser (({ id }, cb) => {
		cb(null, { id })
	})

	passport.deserializeUser(({ id }, cb) => {
		db.User.findOne ({ where: { id }, attributes: ['username', 'id'] })
			.then( user => {
				cb(null, user)
			})
	})
}