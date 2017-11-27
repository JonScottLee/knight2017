import DS from 'ember-data';
import Copyable from 'ember-cli-copyable';

export default DS.Model.extend(Copyable, {
	currentHP: DS.attr('number'),
	maxHP: DS.attr('number'),
	name: DS.attr('string'),
	stats: DS.attr()
});
