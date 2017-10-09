import DS from 'ember-data';
import Copyable from 'ember-cli-copyable';

export default DS.Model.extend(Copyable, {
  name: DS.attr('string'),
  quantity: DS.attr('number'),
  description: DS.attr('string'),
  consumable: DS.attr('boolean'),
  value: DS.attr('number'),
  owner: DS.belongsTo('player')
});
