var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function(){

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: '8c75af93c8e16964bcb1',
		clientSecret: '84d571c4de6f09d1e1ea94484366dfafcc925e45',
		callbackURL: 'http://192.168.99.100:3000/auth/github/callback'
	},function(accessToken,refreshToken,profile,done){
		Usuario.findOrCreate(
			{ "login": profile.username},
			{"nome": profile.username},
			function(erro,usuario){
				if(erro){
					console.log(erro);
					return done(erro);
				}
				return done(null,usuario);
			});
	}));

	passport.serializeUser(function(usuario,done){
		done(null,usuario._id);
	});

	passport.deserializeUser(function(id,done){
		Usuario.findById(id).exec()
		.then(function(usuario){
			done(null,usuario);
		});
	});
};