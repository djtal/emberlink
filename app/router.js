import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberlinkENV.locationType
});

Router.map(function() {
  this.route('links');
  this.route('link/new');
});

export default Router;
