import DS from 'ember-data';

export default DS.Model.extend({
	cash: DS.attr('number'),
	firstName: DS.attr('string'),
	inventory: DS.hasMany('item'),
	equippedItems: DS.hasMany('item'),
	lastName: DS.attr('string'),
	stats: DS.attr(),
	skills: DS.hasMany('skill')
});
