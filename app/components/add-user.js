import Ember from 'ember';
import ENV from 'libapp/config/environment';
export default Ember.Component.extend({
	// user attributes
	name: null,
	password: null,
	role: null,

	ajax: Ember.inject.service(),

	// display result after ajax
	res: null,

	actions: {

		adduser() {
			this.set('role',this.$('#roled :selected').val());
			if(ENV.environment == "production")
				this.get('ajax').request('/LMS/AddUserAction',{ method: "POST", data: { name: this.get('name'), password: this.get('password'), role: this.get('role') } }).then((resul) => this.set("res",resul.result) );
			else{
				this.set("res","Add User!");
			}
		},

		resetResult() {
			this.set('res',null);
		}
		
	}
});
