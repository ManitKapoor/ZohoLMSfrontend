import Ember from 'ember';

export default Ember.Component.extend({
	// menu options
	issueBook: true,
	renewBook: null,

	actions: {
		// action to set menu option
		setopt(opt) {
			this.set('issueBook',null);
			this.set('renewBook',null);
			this.set(opt,true);
		}
	}
});
