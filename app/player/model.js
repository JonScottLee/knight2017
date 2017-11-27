import DS from 'ember-data';

export default DS.Model.extend({
	cash: DS.attr('number'),
	currentHP: DS.attr('number'),
	equippedItems: DS.hasMany('item'),
	inventory: DS.hasMany('item'),
	maxHP: DS.attr('number'),
	name: DS.attr('string'),
	siege: DS.attr('string'),
	skills: DS.hasMany('skill'),
	stats: DS.attr()
});
