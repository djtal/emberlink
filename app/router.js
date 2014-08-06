import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberlinkENV.locationType
});

Router.map(function() {
  this.route('links');
  this.route('link/new');
  this.route('sign_up');
  this.resource('sessions', function() {
    this.route('sign_out',  { path: '/sign_out' });
    this.route('sign_in', { path: '/sign_in' });
  });
  this.route('user');
  this.route('userLinks', { path: '/links/:user_id' });
  this.route('links/today');
});

export default Router;
