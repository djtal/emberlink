import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sign_up: function(){
      var myRef = new Firebase('https://scorching-fire-7239.firebaseio.com/')
      var auth = new FirebaseSimpleLogin(myRef, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          console.log(error);
        } else if (user) {
          console.log(user);
          if( isNewUser ) {
            console.log("new user created");
          }
          // user authenticated with Firebase
          console.log("User ID: " + user.uid + ", Provider: " + user.provider);
        } else {
          // user is logged out
        }
      });
      auth.createUser(this.get('email'), this.get('password'), function(error, user) {
        if (!error) {
          console.log('User Id: ' + user.uid + ', Email: ' + user.email);
        }
      });
    }
  }
});
