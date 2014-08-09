import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

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
    },

    unfavorite: function(){
      var _this = this;
      this.get('currentUser.favorites').then(function(favs){
        var fav = favs.findBy('link.id', _this.get('model.id'));
        fav.deleteRecord();
      });
    }
  }

});
