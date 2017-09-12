import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import  { EventEmitter } from 'events';

class AppStore extends EventEmitter {
	constructor() {
		super()

		this.users = [
			{
        id: 1,
        firstName: "Louis",
        lastName: "C.K.",
        address: "117 Macdougal St, New York, NY 10012"
      },
			{
        id: 2,
        firstName: "Jimmy",
        lastName: "Fallon",
        address: "1 Rockefeller Plaza, New York, NY 10020"
      },
      {
        id: 3,
        firstName: "Conan",
        lastName: "O'Brien",
        address: "4000 Warner Blvd, Burbank, CA 91522"
      },
		];

		this.user_to_edit = '';

	}

	getUsers(){
		return this.users;
	}

	saveUser(user){
		this.users.push(user);
	}

	setUsers(users){
		this.users = users;
	}

	removeUser(userId){
		let index = this.users.findIndex(x => x.id === userId);
		this.users.splice(index, 1);
		this.user_to_edit = '';
	}

	setUserToEdit(user){
		this.user_to_edit = user;
	}

	getUserToEdit(){
		return this.user_to_edit;
	}

	updateUser(user){
		for(let i=0; i < this.users.length; i++){
			if(this.users[i].id == user.id){
				this.users.splice(i, 1);
				this.users.push(user);
				this.user_to_edit = '';
			}
		}
	}

	emitChange(){
		this.emit("change");
	}

	addChangeListener(callback){
		this.on('change', callback);
	}

	removeChangeListener(callback){
		this.removeListener('change', callback);
	}


	handleActions(action) {
		switch(action.type) {
			case AppConstants.SAVE_USER: {
				console.log('Saving User...');

				// Store Save
				this.saveUser(action.user);

				//Emit Change
				this.emit("change");
				break;
			}

			case AppConstants.RECEIVE_USERS: {
				console.log('Receiving Users...');

				// Store Save
				this.setUsers(action.users);

				//Emit Change
				this.emit("change");
				break;
			}

			case AppConstants.REMOVE_USER: {
				console.log('Removing User...');

				// Store Remove
				this.removeUser(action.userId);

				//Emit Change
				this.emit("change");
				break;
			}

			case AppConstants.EDIT_USER: {

				// Store Remove
				this.setUserToEdit(action.user);

				//Emit Change
				this.emit("change");
				break;
			}

			case AppConstants.UPDATE_USER: {
				console.log('Updating User...');

				// Store Update
				this.updateUser(action.user);

				//Emit Change
				this.emit("change");
				break;
			}
		}
	}
}

	const appStore = new AppStore;
	AppDispatcher.register(appStore.handleActions.bind(appStore));

	export default appStore;