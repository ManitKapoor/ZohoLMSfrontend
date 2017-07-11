import Ember from 'ember';

export default Ember.Route.extend({
	// getting requred user details
	userdetails: Ember.inject.service(),

	// checking for role if it is admin or not
	beforeModel() {
		if(!this.get('userdetails').get('isAdmin'))
			this.replaceWith('/');
	}
});
