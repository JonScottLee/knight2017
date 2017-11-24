import DS from 'ember-data';

export default DS.Model.extend({
	cash: DS.attr('number'),
	equippedItems: DS.hasMany('item'),
	inventory: DS.hasMany('item'),
	name: DS.attr('string'),
	siege: DS.attr('string'),
	skills: DS.hasMany('skill'),
	stats: DS.attr()
});
