import Ember from 'ember';

export default Ember.Component.extend({

	// user details service for getting user auth details
	userdetails: Ember.inject.service(),

	// principal username
	username: Ember.computed('userdetails', function() { return this.get('userdetails').get('username'); }),

	// role attributes
	isUser: Ember.computed('userdetails', function() { return this.get('userdetails').get('isUser');}),
	isAdmin: Ember.computed('userdetails', function() { return this.get('userdetails').get('isAdmin');}),
	isManager: Ember.computed('userdetails', function() { return this.get('userdetails').get('isManager');})
});
