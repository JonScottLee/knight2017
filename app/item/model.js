import DS from 'ember-data';
import Copyable from 'ember-cli-copyable';

export default DS.Model.extend(Copyable, {
  consumable: DS.attr('boolean'),
  cost: DS.attr('number'),
  description: DS.attr('string'),
  equipped: DS.attr('boolean'),
  friendlySubtype: DS.attr('string'),
  friendlyType: DS.attr('string'),
  name: DS.attr('string'),
  quantity: DS.attr(),
  sellValue: DS.attr('number'),
  skill: DS.hasMany('skill'),
  stats: DS.attr(),
  subType: DS.attr(),
  type: DS.attr(),
  usedSkills: DS.attr(),
  value: DS.attr('number'),
  wearable: DS.attr('boolean')
});
