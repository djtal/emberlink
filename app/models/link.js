import DS from 'ember-data';

var Link = DS.Model.extend({
    url: DS.attr('string'),
    name: DS.attr('string'),
    description: DS.attr('string'),
    created_at: DS.attr('date'),
});

Link.reopenClass({
  FIXTURES: [
    { id: 1, url: 'http://google.com', name: 'Google', description: "A great search engine", created_at: moment().subtract('months', 3).toDate() },
    { id: 2, url: 'http://yahoo.com', name: 'Yahoo', description: "A old search engine", created_at: moment().subtract('months', 2).toDate() }
  ]
});

export default Link;
