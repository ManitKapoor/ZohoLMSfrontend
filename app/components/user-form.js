import Ember from 'ember';

export default Ember.Component.extend({
	// user details service for getting user auth details
	userdetails: Ember.inject.service(),

	// principal username
	username: Ember.computed('userdetails', function() { return this.get('userdetails').get('username'); }),

	// role attributes
	isUser: Ember.computed('userdetails', function() { return this.get('userdetails').get('isUser');}),
	isAdmin: Ember.computed('userdetails', function() { return this.get('userdetails').get('isAdmin');}),
	isManager: Ember.computed('userdetails', function() { return this.get('userdetails').get('isManager');}),

	actions: {
		setopt(opt) {

			//setting active option
			this.$("#homeopt").attr('class',"");
			this.$("#menu1opt").attr('class',"");
			this.$("#"+opt+"opt").attr('class',"active");

			// display selected tab and hide others
			this.$("#home").attr('class',"tab-pane fade");
			this.$("#menu1").attr('class',"tab-pane fade");
			this.$("#"+opt).attr('class',"tab-pane fade in active");
		}
	}
});
