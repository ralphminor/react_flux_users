import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import AddForm from './AddForm.js';
import EditForm from './EditForm.js';
import UserList from './UserList.js';

function getAppState(){
	return {
		users: AppStore.getUsers(),
		userToEdit: AppStore.getUserToEdit()
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
		if (this.state.userToEdit == '') {
			var form = <AddForm users={this.state.users} />
		} else {
			var form = <EditForm userToEdit={this.state.userToEdit} />
		}
		return(
			<div>
				<Navbar inverse fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">React Flux Users</a>
					</Navbar.Brand>
				</Navbar.Header>
				</Navbar>
				{form}
				<UserList users={this.state.users} />
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;