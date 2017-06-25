var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var FriendList = require('./FriendList');
var api = require('../utils/api');
var Loading = require('./Loading');

function SelectLanguage(props) {
	var languages = ['All','JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

		return (
			<div>
				<ul className = 'languages'>
					{	
						languages.map(function (lang) {
							/* body... */
							//console.log(this);
							return (
								<li 
								style = {lang === props.selectedLang ? { color : '#d0021b'} : null}
								onClick = {props.onSelect.bind(this,lang)}	
								key = {lang}>
									{lang}
								</li>
							)
						})
					}
				</ul>
			</div>
		)
}

SelectLanguage.propTypes =  {
	selectedLang: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
};

function RepoGrid(props) {
	/* body... */
	return (
		<ul className = 'popular-list'>
			{props.repos.map(function (repo, index) {
				return (
					<li key={repo.name} className='popular-item'> 
						<div className='popular-rank'>#{index + 1}</div>
						<ul className='space-list-items'>
							<li>
								<img className='avatar' src={repo.owner.avatar_url} alt={'Avatar for ' + repo.owner.login} />
							</li>
							<li><a href={repo.html_url}>{repo.name}</a></li>
							<li>@{repo.owner.login}</li>
							<li>{repo.stargazers_count} stars</li>
						</ul>
					</li>
				)
					
			})}
		</ul>
	)
}

RepoGrid.propTypes = {
	props: PropTypes.array
}

// class SelectLanguage extends React.Component {


// 	render() {
		
// 	}
// }

class Popular extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		}

		//this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount() {
		// AJAX
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(lang) {
		this.setState(function() {
			return {
				selectedLanguage: lang,
				repos: null
			}
		});

		api.fetchPopularRepos(lang)
			.then(function (repos) {
				/* body... */
				this.setState(function () {
					/* body... */
					return {
						repos: repos
					}
				})
			}.bind(this));
	}

	render() {
		//console.log(this);
		return (
			<div>
			<SelectLanguage
			 selectedLang = {this.state.selectedLanguage}
			 onSelect = {this.updateLanguage.bind(this)}
			/>
			{!this.state.repos 
				? <Loading text = {'LOADING'} />
				: <RepoGrid repos={this.state.repos} />
				
			}
			</div>
			
		)
		
		
	}
}

module.exports = Popular;