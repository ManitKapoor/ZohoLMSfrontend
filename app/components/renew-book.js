import Ember from 'ember';
import ENV from 'libapp/config/environment';
export default Ember.Component.extend({

	// book issue attributes required for return
	title: '',
	name: '',

	//to display result after ajax
	res: null,

	ajax: Ember.inject.service(),

	actions: {
		renewBook() {
			if(ENV.environment == "production")
				this.get('ajax').request('/LMS/RenewBookAction',{ method: "POST", data: { title: this.get('title'), name: this.get('name') } }).then((resul) => this.set('res',resul.result) );
			else{
				this.set('res',"Renewed charge: 0");
			}
			this.$('#renewbookform')[0].reset();
		},
		resetResult() {
			this.set('res',null);
		}
	}
});
