import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('link');
  },
  actions: {
    willTransition: function(transition) {
      if(this.currentModel.get('isNew')) {
        this.currentModel.destroyRecord();
      }
    }
  }
});
