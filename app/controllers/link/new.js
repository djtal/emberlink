import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createLink: function() {
      var controller = this;
      this.get('model').save().then(function() {
        controller.transitionToRoute('links');
      });
    }
  }
});
