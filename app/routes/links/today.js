import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var today = moment();
    return this.store.all('link').filter(function(link){
      return moment(link.get('created_at')).isSame(today, 'day');
    });
  }
});
