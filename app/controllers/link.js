import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  isFavorite: function(){
    var _this = this;
    var res = false;
    this.get('currentUser.favorites').then(function(favs){
      res = !Ember.isEmpty(favs.findBy('link.id', _this.get('id')));
    });
    return res;
  }.property('currentUser.favorites'),

  actions: {
    favorite: function(){
      var _this = this;
      var fav = this.store.createRecord('favorite', {
        link: this.get('model'),
        user: this.get('currentUser')
      });
      this.get('currentUser.favorites').then(function(favs){
        favs.addObject(fav);
        _this.get('currentUser').save().then(function(){
          fav.save();
        });
      });
    }
  }

});
