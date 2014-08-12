import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],
  isAuthenticated: Ember.computed.alias('controllers.application.isAuthenticated'),
});
