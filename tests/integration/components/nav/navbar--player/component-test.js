import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav/navbar--player', 'Integration | Component | nav/navbar  player', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav/navbar--player}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nav/navbar--player}}
      template block text
    {{/nav/navbar--player}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
