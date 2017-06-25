var axios = require('axios');

var baseUsersUrl= 'https://api.github.com/users/'
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id=" + id + "&client_secret=" + sec;

function getProfile (username) {
	// body... 
	return axios.get(baseUsersUrl + username + params)
	      .then(function (user) {
	      	/* body... */
	      	return user.data;
	      });
}

function getRepos (username) {
	// body... 
	return axios.get(baseUsersUrl + username + '/repos' + params + '&per_page=100')
}

function getStarCount (repos) {
	// body... 
	return repos.data.reduce(function (count,repo) {
		/* body... */
		return count + repo.stargazers_count;
	},0);
}

function calculateScore (profile, repos) {
	// body... 
	var followers = profile.followers;
	var totalStars = getStarCount(repos);

	return (followers*3) + totalStars;
}

function handlleError (error) {
	// body... 
	console.warn(error);
	return null;
}

function getUserData (player) {
	// body... 
	return axios.all(
		[	
			getProfile(player),
			getRepos(player)
		 ]
	).then(function (data) {
		/* body... */
		var profile = data[0];
		var repos = data[1];
		return {
			profile: profile,
			score: calculateScore(profile, repos)
		}
	});
}


function sortPlayers (players) {
	// body... 
	return players.sort(function (a,b) {
		/* body... */
		return b.score - a.score;
	});
}

module.exports = {
	battle: function (players) {
		return axios.all(players.map(getUserData))
		.then(sortPlayers)
		.catch(handlleError);
	},
	fetchPopularRepos: function (language) {
		/* body... */
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

		return axios.get(encodedURI).then(function (response) {
			/* body... */
			return response.data.items;
		});	
	}
}