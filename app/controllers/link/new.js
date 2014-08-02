import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createLink: function() {
      var controller = this;
      this.get('model').set('created_at', new Date())
      this.get('model').save().then(function() {
        controller.transitionToRoute('links');
      });
    }
  }
});
