import React from 'react';
import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class AddForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let u = this.props.users;
    let maxId = Math.max.apply(Math, u.map(function(o){ return o.id }));
    var new_id = maxId + 1;

		var user = {
      id: new_id,
			firstName: this.refs.firstName.value.trim(),
			lastName: this.refs.lastName.value.trim(),
			address: this.refs.address.value.trim()
		}

    AppActions.saveUser(user);
	}

	render() {
		return (
			<div className="well">
				<h3>Add User</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="text" ref="firstName" className="form-control" placeholder="Add First Name..." />
					</div>
					<div className="form-group">
						<input type="text" ref="lastName" className="form-control" placeholder="Add Last Name..." />
					</div>
					<div className="form-group">
						<input type="text" ref="address" className="form-control" placeholder="Add Address..." />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

