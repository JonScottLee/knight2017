import Ember from 'ember';

let items = [
	{
		quantity: 1,
		consumable: true,
		name: "mana potion",
		description: `It's not very impressive`
	},
	{
		quantity: 1,
		consumable: true,
		name: "hi-potion",
		description: `It's not very impressive`
	},
	{
		quantity: 1,
		consumable: true,
		name: "phoenix down",
		description: `It's not very impressive`
	}
];

export default Ember.Route.extend({

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('model', model.objectAt(0));
	},

	model() {

		let player;

		const hasPlayer = this.store.hasRecordForId('player', 0);

		if (!hasPlayer) {

			player = this.store.createRecord('player', {
				id: 0,
				firstName:"Jon",
				lastName: "Lee",
				items: items
			});
		}

		return this.store.findAll('player');
	}
});
