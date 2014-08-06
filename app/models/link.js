import DS from 'ember-data';

var Link = DS.Model.extend({
    url: DS.attr('string'),
    name: DS.attr('string'),
    description: DS.attr('string'),
    created_at: DS.attr('date'),
    user: DS.belongsTo('user')
});

export default Link;
