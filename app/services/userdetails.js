import Ember from 'ember';

export default Ember.Service.extend({
	// user auth details from tomcat JDBC realem connected to Postgres
	username: window.username,
	isUser: window.isUser,
	isAdmin: window.isAdmin,
	isManager: window.isManager
});
