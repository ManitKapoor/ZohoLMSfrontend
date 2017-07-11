import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('catalogue');
  this.route('mybook');
  this.route('admin');
  this.route('manager');
  this.route('profile');
});

export default Router;
