import React from 'react';
import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class EditForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(fieldName, event) {
    var newState = event.target.value;
    var selected = this.state;
    selected.name = newState;
    this.setState({selected: selected});
  }

  handleSubmit(e) {
    e.preventDefault();

    var user = {
      id: this.props.userToEdit.id,
      firstName: this.refs.firstName.value.trim(),
      lastName: this.refs.lastName.value.trim(),
      address: this.refs.address.value.trim()
    }

    AppActions.updateUser(user);
  }

	render() {
		return(
			<div className="well">
				<h3>Edit User</h3>
        <form onSubmit={this.handleSubmit}>

					<div className="form-group">
						<input type="text" ref="firstName" onChange={this.handleChange.bind(this, 'firstName')} value={this.props.userToEdit.firstName} className="form-control" placeholder="Add Name..." />
					</div>
					<div className="form-group">
						<input type="text" ref="lastName" onChange={this.handleChange.bind(this, 'lastName')} value={this.props.userToEdit.lastName} className="form-control" placeholder="Add Phone..." />
					</div>
					<div className="form-group">
						<input type="text" ref="address" className="form-control" onChange={this.handleChange.bind(this, 'address')} value={this.props.userToEdit.address} placeholder="Add Email..." />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}