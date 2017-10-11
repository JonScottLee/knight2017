import Ember from 'ember';

export default Ember.Component.extend({

	costColor: 'black',

	isDisabled: Ember.computed(function () {
		let that = this;

		let playerCash = this.get('player').get('cash');

		let tooExpensive = false;

		Promise.resolve(this.get('item')).then((item) => {

			tooExpensive = playerCash < item.get('cost');

			that.set('isDisabled', tooExpensive);

			if (tooExpensive) {
				that.set('costColor', 'red');
			}
		});
	}),

	tooExpensive: Ember.computed(function () {

		let that = this;

		let playerCash = this.get('player').get('cash');

		Promise.resolve(this.get('item')).then((item) => {
			that.set('isDisabled', playerCash < item.get('cost'));
		});
	})
});
