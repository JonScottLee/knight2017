import DS from 'ember-data';

export default DS.Model.extend({
	cash: DS.attr('number'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	items: DS.hasMany('item')
});
