import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

export function saveUser(user) {
	AppDispatcher.dispatch({
		type: AppConstants.SAVE_USER,
		user: user
	});
}

export function receiveUsers(users) {
	AppDispatcher.dispatch({
		type: AppConstants.RECEIVE_USERS,
		users: users
	});
}

export function removeUser(userId) {
	AppDispatcher.dispatch({
		type: AppConstants.REMOVE_USER,
		userId: userId
	});
}

export function editUser(user) {
	console.log(user);
	AppDispatcher.dispatch({
		type: AppConstants.EDIT_USER,
		user: user
	});
}

export function updateUser(user) {
	AppDispatcher.dispatch({
		type: AppConstants.UPDATE_USER,
		user: user
	});
}