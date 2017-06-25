var React = require('react');

function FriendList(props) {
	/* body... */
	return (
		<div>
			<h1>Friends</h1>
			<ul>
				{props.friends.map(function (name,index) {
					/* body... */
					return (
						<li key = {index}>{name}</li>
					)
				})}
			</ul>
		</div>
	)
}

module.exports = FriendList;