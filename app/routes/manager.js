import Ember from 'ember';

export default Ember.Route.extend({
	userdetails: Ember.inject.service(),

	// checking if role is manager or not
	beforeModel() {
		if(!this.get('userdetails').get('isManager'))
			this.replaceWith('/');
	}
});
