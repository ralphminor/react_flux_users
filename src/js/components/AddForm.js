import React from 'react';
import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class AddForm extends React.Component {

  constructor(props) {
		super(props);
		this.state = { id: '', firstName: '', lastName: '', address: ''};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
    });
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
						<input value={this.state.firstName} name="firstName" type="text" ref="firstName" className="form-control" placeholder="Add First Name..." onChange={this.handleInputChange}/>
					</div>
					<div className="form-group">
						<input value={this.state.lastName} name="lastName" type="text" ref="lastName" className="form-control" placeholder="Add Last Name..." onChange={this.handleInputChange}/>
					</div>
					<div className="form-group">
						<input value={this.state.address} name="address" type="text" ref="address" className="form-control" placeholder="Add Address..." onChange={this.handleInputChange}/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

