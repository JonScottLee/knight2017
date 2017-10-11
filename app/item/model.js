import DS from 'ember-data';
import Copyable from 'ember-cli-copyable';

export default DS.Model.extend(Copyable, {
  consumable: DS.attr('boolean'),
  cost: DS.attr('number'),
  description: DS.attr('string'),
  name: DS.attr('string'),
  owner: DS.belongsTo('player'),
  quantity: DS.attr(),
  isInfinite: DS.attr('boolean'),
  value: DS.attr('number'),
  wearable: DS.attr('boolean'),
  sellValue: DS.attr('number')
});
