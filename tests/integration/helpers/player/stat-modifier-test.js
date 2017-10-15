
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('player/stat-modifier', 'helper:player/stat-modifier', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{player/stat-modifier inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

