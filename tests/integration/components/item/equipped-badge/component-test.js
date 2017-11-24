import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item/equipped-badge', 'Integration | Component | item/equipped badge', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{item/equipped-badge}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#item/equipped-badge}}
      template block text
    {{/item/equipped-badge}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
