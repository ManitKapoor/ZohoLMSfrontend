import Ember from 'ember';
import ENV from 'libapp/config/environment';

export default Ember.Route.extend({

	ajax: Ember.inject.service(),

	// to get user books and authenticate him
	userdetails: Ember.inject.service(),

	// check if it is user
	beforeModel() {
		if(!this.get('userdetails').get('isUser'))
			this.replaceWith('/');
	},

	//getting required users books
	model() {
		if(ENV.environment != 'production')
			return [{ "type": "book", "id": "1", "title": "javaee", "author": "thomas michael", "edition": "4.2.1", "issueddate": "05:05:2017", "returndate": "05:06:2017" }];
		return this.get('ajax').request('/LMS/BookUserAction',{ method: "POST", data: { username: window.username }});
	}
});
