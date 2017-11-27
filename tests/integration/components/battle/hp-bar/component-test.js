import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('battle/hp-bar', 'Integration | Component | battle/hp bar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{battle/hp-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#battle/hp-bar}}
      template block text
    {{/battle/hp-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
