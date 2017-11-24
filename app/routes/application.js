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

	makeDefaultSkills () {
		let skill1 = this.store.createRecord('skill', {
			currentLevel: 1,
			description: 'Your skill at wielding one-handed swords',
			friendlyName: 'One-Handed Swords',
			id: 'oneHandedSwords',
			maxLevel: 1000,
			name: 'oneHandedSwords',
		});

		let skill2 = this.store.createRecord('skill', {
			currentLevel: 1,
			description: 'Your fencing skill',
			friendlyName: 'Fencing',
			id: 'fencing',
			maxLevel: 1000,
			name: 'fencing',
		});

		skill1.save();
		skill2.save();
	},

	getDefaultSkills () {
		return this.store.findRecord('skill', 'oneHandedSwords');
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

	getPlayer () {
		return this.store.findAll('player');
	},

	configurePlayer () {

		let promises = [];
		let data = [];

		let player;
		let skills;

		promises.push(this.store.findAll('player'));
		promises.push(this.store.findAll('skill'));

		Ember.RSVP.all(promises).then(function (data) {
			player = data[0].get('firstObject');
			skills = data[1];

			skills.forEach((skill) => {
				player.get('skills').pushObject(skill);
				player.save();
			});
		});
	},

	makeDefaultPlayer () {
		let store = this.store;

		let promise = this.getPlayer();
		let playerExists;
		let player;

		let fulfill = function (player) {
			playerExists = player.get('length');

			if (!playerExists) {

				player = store.createRecord('player', {
			 		cash: 1525,
			 		firstName:"Jon",
			 		inventory: this.getDefaultItems(),
			 		lastName: "Lee",
			 		stats: this.getStats(),
			 	});

			 	player.save();
			 }
		}.bind(this);

		promise.then(fulfill);
	},

	makeDefaultShop () {
		let shop;

		let item1 = this.store.createRecord('item', {
			quantity: Infinity,
			consumable: true,
			name: "mana potion",
			description: `It's not very impressive.`,
			cost: 200,
			sellValue: parseInt(200 * .8, 10),
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

		this.makeDefaultSkills();

		this.configurePlayer();

		this.makeDefaultPlayer();

		this.makeDefaultShop();

		return this.store.findAll('player');
	}
});
