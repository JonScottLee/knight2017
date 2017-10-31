import Ember from 'ember';

export default Ember.Route.extend({

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('model', model.objectAt(0));
	},

	getStats () {
		return {
			hp:100,
			mp: 20,
			def: 10,
			atk: 10
		};
	},

	getDefaultItems () {

		let item1 = this.store.createRecord('item', {
			quantity: 1,
			consumable: true,
			name: "mana potion",
			description: `It's not very impressive.`,
			cost: 200,
			sellValue: parseInt(200 * .8, 10)
		});

		let item2 = this.store.createRecord('item', {
			quantity: 1,
			consumable: true,
			name: "revive",
			description: `d e a d b o y e doin a lazarus`,
			cost: 1000,
			sellValue: parseInt(1000 * .8, 10)
		});

		let gear1 = this.store.createRecord('item', {
			quantity: 1,
			consumable: false,
			wearable: true,
			name: "Jon's Awesome Sword",
			description: `It's not really that awesome.`,
			cost: 2000,
			sellValue: parseInt(2000 * .8, 10),
			type: 'weapon',
			subType: 'sword',
			stats: {
				atk: 10,
				def: 5
			}
		});

		let gear2 = this.store.createRecord('item', {
			quantity: 1,
			consumable: false,
			wearable: true,
			name: "Jon's Dashing Cape",
			description: `It's not really that dashing.`,
			cost: 1250,
			sellValue: parseInt(1250 * .8, 10),
			type: 'accessory',
			subType: 'back',
			stats: {
				hp: 10,
				def: 1
			}
		});

		gear1.save();
		gear2.save();

		item1.save();
		item2.save();

		return [item1, item2, gear1, gear2];
	},

	makeDefaultPlayer () {
		let player;

		this.store.findAll('player').then((thePlayer) => {

			if (!thePlayer.get('length')) {

				player = this.store.createRecord('player', {
			 		firstName:"Jon",
			 		lastName: "Lee",
			 		inventory: this.getDefaultItems(),
			 		cash: 1525,
			 		stats: this.getStats()
			 	});

			 	player.save();

			 	return player;
			}
		});
	},

	makeDefaultShop () {
		let shop;

		let item1 = this.store.createRecord('item', {
			quantity: Infinity,
			consumable: true,
			name: "mana potion",
			description: `It's not very impressive.`,
			cost: 200,
			sellValue: parseInt(1000 * .8, 10),
			isInfinite: true
		});

		item1.save();

		this.store.findAll('player/shop').then((theShop) => {

			if (!theShop.get('length')) {

				shop = this.store.createRecord('player/shop', {
					id: 0,
			 		name: "WTF",
			 		inventory: [item1]
			 	});

			 	shop.save();

			 	return shop;
			}
		});
	},

	model() {

		this.makeDefaultPlayer();

		this.makeDefaultShop();

		return this.store.findAll('player');
	}
});
