import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('number'),
  description: DS.attr('string'),
  consumable: DS.attr('boolean'),
  value: DS.attr('number'),
  owner: DS.belongsTo('player')
});
