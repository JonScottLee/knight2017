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
			description: `It's not very impressive.`
		});

		let gear1 = this.store.createRecord('item', {
			quantity: 1,
			consumable: false,
			wearable: true,
			name: "Jon's Awesome Sword",
			description: `It's not really that awesome.`
		});

		let gear2 = this.store.createRecord('item', {
			quantity: 1,
			consumable: false,
			wearable: true,
			name: "Jon's Dashing Cape",
			description: `It's not really that dashing.`
		});

		item1.save();
		gear1.save();
		gear2.save();

		return [item1, gear1, gear2];
	},

	makeDefaultShop () {
		let shop;

		this.store.findAll('player/shop').then((theShop) => {

			if (!theShop.get('length')) {

				shop = this.store.createRecord('player/shop', {
					id: 0,
			 		name: "WTF",
			 		inventory: this.getDefaultItems()
			 	});

			 	shop.save();

			 	return shop;
			}
		});
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

		this.makeDefaultShop();

		return this.store.findAll('player');
	}
});
