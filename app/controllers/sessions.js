import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    var _this = this;
    var myRef = new Firebase('https://scorching-fire-7239.firebaseio.com/');
    this.authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        _this.store.find('user').then(function(datas) {
          var locUser = datas.findBy('uid', user.id);
          if (Ember.isEmpty(locUser)) {
            _this.store.createRecord('user', { email: user.email, uid: user.id}).save().then(function(){
              _this.setProperties({currentUser: locUser});
            });
          } else {
            _this.setProperties({currentUser: locUser});
          }
        });
        _this.transitionToRoute('links');
      } else {
        // user is logged out
        _this.setProperties({currentUser: null});
        _this.transitionToRoute('links');
      }
    });
  },

  logout: function(){
    this.get('authClient').logout();
  }
});
