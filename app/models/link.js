import DS from 'ember-data';

var Link = DS.Model.extend({
    url: DS.attr('string'),
    name: DS.attr('string'),
    description: DS.attr('string'),
    created_At: DS.attr('date'),
});

Link.reopenClass({
  FIXTURES: [
    { id: 1, url: 'http://google.com', name: 'Google', description: "A great search engine" },
    { id: 2, title: 'http://yahoo.com', name: 'Yahoo', description: "A old search engine" }
  ]
});

export default Link;
