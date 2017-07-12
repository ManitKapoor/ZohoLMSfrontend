import Ember from 'ember';
import ENV from 'libapp/config/environment';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	model() {
		if(ENV.environment != "production")
			return [{ "type": "book", "id": "1", "title": "javaee", "author": "thomas michael", "edition": "4.2.1", "shelfno": "1", "issued": "Free" } ,{ "type": "book", "id": "3", "title": "JSP and Servlets", "author": "Steve Smith", "edition": "2.0", "shelfno": "4", "issued": "Free" } ,{ "type": "book", "id": "2", "title": "struts3", "author": "john clarke", "edition": "2.0.1", "shelfno": "2", "issued": "Free" } ,{ "type": "book", "id": "4", "title": "J2EE", "author": "Michael Joseph", "edition": "1.1", "shelfno": "H31", "issued": "Free" } ,{ "type": "book", "id": "4", "title": "Ember101", "author": "Scot batchon", "edition": "1.1.1", "shelfno": "3", "issued": "Free" } ,{ "type": "book", "id": "4", "title": "EmberJS", "author": "Davis Chuckoo", "edition": "2.14", "shelfno": "6", "issued": "Free" } ,{ "type": "book", "id": "4", "title": "EmberJS 2", "author": "Davis Chuckoo", "edition": "6.0.1", "shelfno": "6", "issued": "Free" } ,{ "type": "book", "id": "4", "title": "Angular JS", "author": "Davis Chuckoo", "edition": "8.2", "shelfno": "8", "issued": "Free" } ,{ "type": "book", "id": "4", "title": "Junit", "author": "Roman Roaster", "edition": "5.6", "shelfno": "9", "issued": "Free" } ,{ "type": "book", "id": "4", "title": "Qunit", "author": "Roman Roaster", "edition": "7.5", "shelfno": "C1", "issued": "Free" } ,{ "type": "book", "id": "4", "title": "Software process", "author": "John Steve", "edition": "2.1", "shelfno": "3", "issued": "Free" } ,{ "type": "book", "id": "4", "title": "Software process 2", "author": "John Steve", "edition": "1.01", "shelfno": "3", "issued": "Free" } ];
		return this.get('ajax').request('/LMS/BookAction');
	}
});
