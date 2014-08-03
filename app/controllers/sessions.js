import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    var _this = this;
    var myRef = new Firebase('https://scorching-fire-7239.firebaseio.com/')
    this.authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        console.log(user);
        // user authenticated with Firebase
        _this.setProperties({currentUser: user});
        console.log("User ID: " + user.uid + ", Provider: " + user.provider);
      } else {
        // user is logged out
        console.log("sign out");
      }
    });
  },

  logout: function(){
    this.get('authClient').logout();
    this.setProperties({currentUser: user});
  }
});
