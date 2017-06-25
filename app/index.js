var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

// state
// lifecycle event
// UI


var App = require('./components/App');


ReactDOM.render(
	<App/>,
	document.getElementById('app')
);

// class Users extends React.Component {
//   render() {
//     var friends = this.props.list.filter(function(name){
//       return name.friend === true
//     });
    
//    var nonFriends = this.props.list.filter(function(name){
//       return name.friend !== true
//     }) ; 
//     return (
//       <div>
//         <h1>Friends</h1>
//         <ul>
//           {/*Create an <li> for every name in the list array who is also your friend*/
//            friends.map(function(user){
//              return <li key = {user.name}>{user.name}</li>
//            })
//           }
//         </ul>
        
//         <hr />
        
//         <h1> Non Friends </h1>
//         <ul>
//           {/*Create an <li> for every name in the list array who is NOT your friend*/
//           nonFriends.map(function(user){
//              return <li key = {user.name}>{user.name}</li>
//            })
//           }
//         </ul>        
//       </div>
//     )
//   }
// }

// // class Badge extends React.Component {

// // 	render() {
// // 		return (
// // 			<div>
// // 				 <img
// // 				 	src={this.props.img}
// // 				 	alt='Avatar'
// // 				 	style={{width: 100,height: 100}}
// // 				 />

// // 				 <h1>Name: {this.props.name}</h1>
// // 				 <h1>UserName: {this.props.username}</h1>

// // 			 </div>
// // 		)
// // 	}

// // }

// // Badge.propTypes = {
// // 	img: PropTypes.string.isRequired,
// // 	name: PropTypes.string.isRequired,
// // 	username: PropTypes.string.isRequired
// // }

// // ReactDOM.render(
// // 	<Badge
// // 		name='Prashant'
// // 		username='prashant171992'
// // 		img='https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAFGAAAAJGIxNDQyNTY3LTk5ZTItNDI4Ny1hMTI0LTlmM2RiYzVkNDBlMA.jpg'
// // 	/>,
// // 	document.getElementById('app')
// // );

// Users.propTypes = {
// 	list: PropTypes.arrayOf(PropTypes.shape({
// 		name: PropTypes.string.isRequired,
// 		friend: PropTypes.bool.isRequired,
// 	})),
// }

// ReactDOM.render(
//   <Users list={[
//     { name: 'Tyler', friend: true },
//     { name: 'Ryan', friend: true },
//     { name: 'Michael', friend: false },
//     { name: 'Mikenzi', friend: false },
//     { name: 'Jessica', friend: true },
//     { name: 'Dan', friend: false } ]} 
//   />,
//   document.getElementById('app')
// );