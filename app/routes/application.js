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

		this.store.findAll('player').then((thePlayer) => {

			if (!thePlayer.get('length')) {

				player = this.store.createRecord('player', {
			 		firstName:"Jon",
			 		lastName: "Lee",
			 		items: this.getDefaultItems()
			 	});

			 	player.save();

			 	return player;

			}
		});

		return this.store.findAll('player');
	}
});
