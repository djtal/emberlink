import Ember from 'ember';

export default Ember.Component.extend({
  isRead: false,
  classNames: ['link'],

  // may be use Ember.computed.and for currentUser and isFavorite. Should try it
  isFavorite: function(){
    var _this = this;
    var res = false;
    if (Ember.isEmpty(this.get('currentUser'))) { return true; }
    this.get('currentUser.favorites').then(function(favs){
      res = !Ember.isEmpty(favs.findBy('link.id', _this.get('link.id')));
      _this.set("isFavorite", res);
    });
    return res;
  }.property('currentUser.favorites'),



  actions: {
    favorite: function(){
      this.triggerAction({action: this.get('favoriteAction')});
      this.set('isFavorite', true);
    },

    unfavorite: function(){
      this.triggerAction({action: this.get('unFavoriteAction')});
      this.set('isFavorite', false);
    },

    markAsRead: function(){
      if (!this.get('isRead')) {
        console.log("markAsRead : " + this.get('link.name'));
        this.set('isRead', true);
      }
    }
  }
});
