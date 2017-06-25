var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');


var styles = {
	content: {
		textAlign: 'center',
		fontSize: '35px'
	}
}

class Loading extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: props.text
		};
	}

	componentDidMount() {
		var stopper = this.props.text + '...';
		this.interval = window.setInterval(function (argument) {
			/* body... */
			if (this.state.text === stopper) {
				this.setState(function () {
					/* body... */
					return {
						text: this.props.text
					}
				})
			} else {
				this.setState(function (prevState) {
					/* body... */
					return {
						text: prevState.text + '.'
					}
				})
			}
		}.bind(this), this.props.speed)
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return (
			<p style = {styles.content}>
				{this.state.text}
			</p>
		)
	}
}

Loading.propTypes = {
	text: PropTypes.string.isRequired,
	speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
	text: 'Loading',
	speed: 300
};

module.exports = Loading;