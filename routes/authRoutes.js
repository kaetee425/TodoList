const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const isAuthenicated = require('../middleware/isAuth.js')

module.exports = app => {

	//passport 
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		res.redirect('/tasks')
	});


	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
	
	app.get('/api/logout', (req, res) => {
		req.logout();
		// res.send(req.user);
		res.redirect('/');
	});

	app.put('/api/users/', function (req, res) {
	 	console.log(req.user)
    User.findOneAndUpdate(req.user._id, function (err, user) {
      if (err)
        res.send(err);
        console.log('this is req.body: ', req.body);
        //
     
      user.save(function (err) {
        if(err)
          res.send(err);
        res.json({ message: "user was updated "});
      });
    });
  });
};