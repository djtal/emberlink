import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'link',
  needs: ['application'],
  sortProperties: ['created_at'],
  sortAscending: false,

  isAuthenticated: Ember.computed.alias('controllers.application.isAuthenticated'),
});
