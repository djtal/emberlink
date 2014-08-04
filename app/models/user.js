import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  uid: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: function() {
    return [this.get('firstName'), this.get('lastName')].join(' ');
  }.property('firstName', 'lastName'),
});
