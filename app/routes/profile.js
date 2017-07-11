import Ember from 'ember';
import ENV from 'libapp/config/environment';
export default Ember.Route.extend({

	ajax: Ember.inject.service(),

	//getting user profile json object
	model() {
		if(ENV.environment != 'production')
			return { "name": "postgres", "role": "ADMIN" };
		return this.get('ajax').request('/LMS/ProfileAction',{ method: "POST", data: { username: window.username }});
	}
});
