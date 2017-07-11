import Ember from 'ember';
import ENV from 'libapp/config/environment';

export default Ember.Component.extend({
	// data about stored in users
	users: [{ id: "1", username: 'JohnCena', role: "ADMIN"},{ id: "2", username: 'Postgres', role: "ADMIN"}],

	ajax: Ember.inject.service(),

	init() {
		this._super(...arguments);
		// getting data in production environment
		if(ENV.environment == "production")
			this.get('ajax').request('/LMS/UserAction').then((result) => this.set('users',result));
	}

});
