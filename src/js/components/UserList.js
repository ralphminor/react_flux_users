import React from 'react';
import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import User from './User.js';

export default class UserList extends React.Component {
	constructor() {
		super();
	}

	render() {
		this.props.users.sort(function(a, b) { return a.id - b.id});
		return(
			<div>
				<h3>Users</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Address</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.users.map(function(user, index){
								return(
									<User user={user} key={index} />
								)
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}