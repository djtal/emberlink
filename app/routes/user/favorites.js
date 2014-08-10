import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var user = this.controllerFor('sessions').get('currentUser');
    console.log(user);
    return user.get('favorites');
  }
});
