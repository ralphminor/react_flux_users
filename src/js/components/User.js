import React from 'react';
import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class User extends React.Component {
	constructor() {
		super();
	}

	handleRemove(i, j) {
		AppActions.removeUser(i);
	}

	handleEdit(i, j) {
		AppActions.editUser(i);
	}

	render() {
		return(
			<tr>
				<td>{this.props.user.id}</td>
				<td>{this.props.user.firstName}</td>
				<td>{this.props.user.lastName}</td>
				<td>{this.props.user.address}</td>
				<td><a href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.user)}>Edit</a> <a href="#" className="btn btn-danger" onClick={this.handleRemove.bind(this, this.props.user.id)}>Remove</a></td>
			</tr>
		);
	}


}