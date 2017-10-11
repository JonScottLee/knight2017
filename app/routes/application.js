import Ember from 'ember';

export default Ember.Route.extend({

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('model', model.objectAt(0));
	},

	getDefaultGear () {
		let gear1 = this.store.createRecord('item', {
			quantity: 1,
			consumable: false,
			wearable: true,
			name: "Jon's Awesome Sword",
			description: `It's not really that awesome.`,
			cost: 2000
		});

		let gear2 = this.store.createRecord('item', {
			quantity: 1,
			consumable: false,
			wearable: true,
			name: "Jon's Dashing Cape",
			description: `It's not really that dashing.`,
			cost: 1250
		});

		gear1.save();
		gear2.save();

		return [gear1, gear2];
	},

	getDefaultItems () {

		let item1 = this.store.createRecord('item', {
			quantity: 1,
			consumable: true,
			name: "mana potion",
			description: `It's not very impressive.`,
			cost: 200
		});

		let item2 = this.store.createRecord('item', {
			quantity: 1,
			consumable: true,
			name: "revive",
			description: `d e a d b o y e doin a lazarus`,
			cost: 20000
		});

		item1.save();
		item2.save();

		return [item1, item2];
	},

	makeDefaultShop () {
		let shop;

		let item1 = this.store.createRecord('item', {
			quantity: 1,
			consumable: true,
			name: "mana potion",
			description: `It's not very impressive.`,
			cost: 20000
		});

		item1.save();

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
			 		items: this.getDefaultItems(),
			 		gear: this.getDefaultGear(),
			 		cash: 1525
			 	});

			 	player.save();

			 	return player;

			}
		});

		this.makeDefaultShop();

		return this.store.findAll('player');
	}
});
