import Ember from 'ember';

export default Ember.Controller.extend({
  needs:           ['sessions'],
  logout: function(){
    var auth = this.get('controllers.sessions').logout();
  }
});
