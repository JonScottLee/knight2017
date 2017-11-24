import DS from 'ember-data';
import Copyable from 'ember-cli-copyable';

export default DS.Model.extend(Copyable, {

	name: DS.attr('string'),
	hp: DS.attr('number')

});
