import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.controllerFor('sessions').get('currentUser');
  },
});
