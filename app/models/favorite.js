import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  link: DS.belongsTo('link'),
  created_at: DS.attr('date')
});
