var React = require('react');



class Clock extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(function() {
		 	return this.tick();
		}.bind(this),1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState(function () {
			/* body... */
			return {
				date: new Date()
			}
		});
	}

	render() {
		return (
			<div>
				<h2>Time is : {this.state.date.toLocaleTimeString()} </h2>
			</div>
		)
	}
}

module.exports = Clock;