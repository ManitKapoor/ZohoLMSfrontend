import Ember from 'ember';
import ENV from 'libapp/config/environment';

export default Ember.Component.extend({
	// book attributes for adding
	title: null,
	author: null,
	edition: null,
	shelfno: null,

	// display result for ajax
	res: null,

	ajax: Ember.inject.service(),

	actions: {

		addbook() {
			if(ENV.environment == "production")
				this.get('ajax').request('/LMS/AddBookAction',{ method: "POST", data: { title: this.get('title'), edition: this.get('edition'), author: this.get('author'), shelfno: this.get('shelfno') } }).then((resul) => this.set("res",resul.result) );
			else {
				this.set("res","Added Book!");
			}
		},
		
		resetResult() {
			this.set('res',null);
		}
	}
});
