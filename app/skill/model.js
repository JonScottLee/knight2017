import DS from 'ember-data';

export default DS.Model.extend({
	currentLevel: DS.attr('number'),
	description: DS.attr('string'),
	friendlyName: DS.attr('string'),
	maxLevel: DS.attr('number'),
	name: DS.attr('string')
});
