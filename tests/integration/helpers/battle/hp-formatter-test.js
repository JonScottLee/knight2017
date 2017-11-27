
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('battle/hp-formatter', 'helper:battle/hp-formatter', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{battle/hp-formatter inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

