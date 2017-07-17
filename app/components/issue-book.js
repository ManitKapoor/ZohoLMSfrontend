import Ember from 'ember';
import ENV from 'libapp/config/environment';

export default Ember.Component.extend({

	// attributes for giving book to user
	title: '',
	name: '',

	//to result after ajax
	res: null,

	ajax: Ember.inject.service(),

	actions: {
		issueBook() {
			if(ENV.environment == "production")
				this.get('ajax').request('/LMS/IssueBookAction',{ method: "POST", data: { title: this.get('title'), name: this.get('name') } }).then((resul) => this.set('res',resul.result) );
			else{
				this.set('res',"Issued Book");
			}
			this.$('#issuebookform')[0].reset();
		},
		resetResult() {
			this.set('res',null);
		}
	}
});
