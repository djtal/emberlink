import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'link',
  needs: ['application'],

  isAuthenticated: Ember.computed.alias('controllers.application.isAuthenticated'),
});
