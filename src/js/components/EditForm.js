import React from 'react';
import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { id: this.props.userToEdit.id, firstName: this.props.userToEdit.firstName, lastName: this.props.userToEdit.lastName, address: this.props.userToEdit.address};
  }

  handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
    });
	}

  handleSubmit(e) {
    e.preventDefault();

    var user = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address
    }

    AppActions.updateUser(user);
  }

	render() {
		return(
			<div className="well">
				<h3>Edit User</h3>
        <form onSubmit={this.handleSubmit}>

					<div className="form-group">
						<label className="input-labels">First Name</label>
						<input value={this.state.firstName} name="firstName" type="text" onChange={this.handleInputChange} className="form-control" placeholder="Add Name..." />
					</div>
					<div className="form-group">
						<label className="input-labels">Last Name</label>
						<input value={this.state.lastName} name="lastName" type="text" onChange={this.handleInputChange} className="form-control" placeholder="Add Phone..." />
					</div>
					<div className="form-group">
						<label className="input-labels">Address</label>
						<input value={this.state.address} name="address" type="text" onChange={this.handleInputChange} className="form-control" placeholder="Add Email..." />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}