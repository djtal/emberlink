import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://scorching-fire-7239.firebaseio.com/')
});
