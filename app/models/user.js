import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  uid: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  links: DS.hasMany('link'),
  favorites: DS.hasMany('favorite', { async:true }),


  fullName: function() {
    return [this.get('firstName'), this.get('lastName')].join(' ');
  }.property('firstName', 'lastName'),
});
