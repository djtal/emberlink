import Ember from 'ember';

export default Ember.Controller.extend({
  needs:           ['sessions'],
  actions: {
    sign_in: function(){
      var auth = this.get('controllers.sessions.authClient');
      auth.login("password", {email: this.get('email'), password: this.get('password')});
    }
  }
});
