import Ember from 'ember';

export default Ember.Route.extend({

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
			id: 'oneHandedSword',
			maxLevel: 1000,
			name: 'oneHandedSword',
		});

		let skill2 = this.store.createRecord('skill', {
			currentLevel: 1,
			description: 'Your fencing skill',
			friendlyName: 'Fencing',
			id: 'fencing',
			maxLevel: 1000,
			name: 'fencing',
		});

		let skill3 = this.store.createRecord('skill', {
			currentLevel: 1,
			description: 'Your ability to appear intimidating',
			friendlyName: 'Intimidating Look',
			id: 'intimidatingLook',
			maxLevel: 1000,
			name: 'intimidatingLook',
		});

		skill1.save();
		skill2.save();
		skill3.save();
	},

	makeDefaultGear () {
		let gear1 = this.store.createRecord('item', {
			consumable: false,
			cost: 2000,
			description: `It's not really that awesome.`,
			friendlyType: 'Weapon',
			friendlySubtype: 'One-Handed Sword',
			name: "Jon's Awesome Sword",
			quantity: 1,
			sellValue: parseInt(2000 * .8, 10),
			subType: 'oneHandedSword',
			type: 'weapon',
			wearable: true,
			stats: {
				atk: 10,
				def: 5
			},
			usedSkills: ['oneHandedSword', 'fencing']
		});

		let gear2 = this.store.createRecord('item', {
			consumable: false,
			cost: 1250,
			description: `It's not really that dashing.`,
			friendlyType: 'Accessory',
			friendlySubtype: 'Cape',
			name: "Jon's Dashing Cape",
			quantity: 1,
			sellValue: parseInt(1250 * .8, 10),
			subType: 'back',
			type: 'accessory',
			wearable: true,
			stats: {
				hp: 10,
				def: 1
			},
			usedSkills: ['intimidatingLook']
		});

		gear1.save();
		gear2.save();
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

		item1.save();
		item2.save();

		return [item1, item2];
	},

	configureGear () {
		let promises = [];
		let data = [];

		let gears;
		let skill;
		let allSkills;

		promises.push(this.store.findAll('item'));
		promises.push(this.store.findAll('skill'));

		Ember.RSVP.all(promises).then(function (data) {
			gears = data[0].filterBy('wearable', true);
			allSkills = data[1];

			gears.forEach((gear) => {
				if (gear.get('usedSkills')) {
					gear.get('usedSkills').forEach((skillRef) => {
						skill = allSkills.filterBy('name', skillRef).get('firstObject');
						gear.get('skill').pushObject(skill);
						gear.save();
					});
				}
			});
		});
	},

	configurePlayer () {
		let promises = [];
		let data = [];

		let player;
		let skills;
		let gear;

		promises.push(this.store.findAll('player'));
		promises.push(this.store.findAll('skill'));
		promises.push(this.store.findAll('item'));

		Ember.RSVP.all(promises).then(function (data) {
			player = data[0].get('firstObject');
			skills = data[1];
			gear = data[2].filterBy('wearable', true);

			skills.forEach((skill) => {
				player.get('skills').pushObject(skill);
			});

			gear.forEach((gear) => {
				player.get('inventory').pushObject(gear);
			});

			player.save();
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

	model () {
		return this.store.findAll('player');
	},

	actions: {
		handleSubmitInRoute (data) {
			let player = this.store.createRecord('player', {
		 		cash: 1525,
		 		inventory: this.getDefaultItems(),
		 		name: data.name,
		 		stats: this.getStats()
		 	});

		 	player.save();

		 	this.makeDefaultShop();

		 	this.makeDefaultSkills();

		 	this.makeDefaultGear();

		 	this.configurePlayer();

		 	this.configureGear();



		 	this.controllerFor('player').set('playerCreated', true);

		 	this.transitionTo('player');
		}
	}
});
