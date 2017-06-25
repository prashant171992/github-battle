var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

var Popular = require('./Popular');

var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Nav/>
					<Switch>
						<Route exact path='/' component = {Home} />
						<Route path='/popular' component = {Popular} />
						<Route path='/battle/results' component = {Results} />
						<Route exact path='/battle' component = {Battle} />
						<Route render={function () {
							/* body... */
							return (
								<p>Not found </p>
							)
						}}/>
					</Switch>
				</div>
			</Router>
		)
	}
}


module.exports = App;