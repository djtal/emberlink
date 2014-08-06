import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.RSVP.hash({
      links: this.store.all('link').filterBy('user.id', params.user_id),
      user: this.store.all('user').findBy('id', params.user_id )
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model.links);
    controller.set('user', model.user);
  }
});
