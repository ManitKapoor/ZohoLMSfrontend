import Ember from 'ember';

export default Ember.Component.extend({
	// menu options
	addUser: true,
	addBook: null,
	viewUser: null,

	actions: {
		// action to set menu option
		setopt(opt) {
			this.set('addUser',null);
			this.set('addBook',null);
			this.set('viewUser',null);
			this.set(opt,true);
		}
	}
});
