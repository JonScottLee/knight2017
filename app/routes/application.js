import Ember from 'ember';

export default Ember.Route.extend({

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('model', model.objectAt(0));
	},

	getDefaultItems () {

		let item1 = this.store.createRecord('item', {
			quantity: 1,
			consumable: true,
			name: "mana potion",
			description: `It's not very impressive`
		});

		item1.save();

		return [item1];
	},

	model() {

		let player;

		const hasPlayer = this.store.hasRecordForId('player', 0);

		if (!hasPlayer) {

			player = this.store.createRecord('player', {
				id: 0,
				firstName:"Jon",
				lastName: "Lee",
				items: this.getDefaultItems()
			});
		}

		return this.store.findAll('player');
	}
});
