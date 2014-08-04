import Ember from 'ember';

export default Ember.Controller.extend({
  needs:           ['sessions'],
  actions: {
    sign_up: function(){
      var auth = this.get('controllers.sessions.authClient');
      var _this = this;
      auth.createUser(this.get('email'), this.get('password'), function(error, user) {
        if (!error) {
          _this.store.createRecord('user', { email: user.email, uid: user.id}).save().then(function(){
            auth.login("password", {email: _this.get('email'), password: _this.get('password')});
          });
        } else {
          console.log(error);
        }
      });
    }
  }
});
