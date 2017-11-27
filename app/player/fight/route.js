import Ember from 'ember';

export default Ember.Route.extend({

	killEnemy () {
		let playerEXP = this.player.get('exp.current');

		let enemyEXPVal = this.enemy.get('exp.value');

		this.enemy.destroyRecord();

		this.controller.set('inBattle', false);

		clearInterval(this.playerInterval);

		this.controller.set('enemyKilled', true);

		this.controller.set('buttonText', 'New Fight');

		this.controller.set('isDisabled', false);

		playerEXP += enemyEXPVal;

		this.player.set('exp.current', playerEXP);

		this.player.save();
	},

	enemyTurn (enemy) {
		let playerHP = this.player.get('currentHP');

		let enemyDMG = this.enemy.get('stats.dmg');

		playerHP -= enemyDMG;

		this.player.set('currentHP', playerHP);

		this.player.save();
	},

	setupBattle () {
		let self = this;

		let promises = [];

		let data = [];

		let player;

		promises.push(this.store.findAll('player'));

		promises.push(this.store.findAll('enemy'));

		Ember.RSVP.all(promises).then(function (data) {

			self.player = data[0].get('firstObject');

			self.enemy = data[1].get('firstObject');

			self.playerInterval = setInterval(() => {

				self.enemyTurn();

			}, 2000);
		});
	},

	model () {
		return Ember.RSVP.hash({
			player: this.store.findRecord('player', 0),
			enemy: this.store.findAll('enemy')
		});
	},

	actions: {
		beginFight () {
			if (!this.controller.get('inBattle')) {
				let enemy = this.store.createRecord('enemy', {
					currentHP: 50,
					exp: {
						current: 0,
						cap: 0,
						value: 50
					},
					maxHP: 50,
					name: 'Green Slime',
					stats: {
						dmg: 5
					}
				});

				enemy.save();

				this.setupBattle();

				this.controller.set('inBattle', true);

				this.controller.set('enemyKilled', false);
			}
		},

		playerAction () {
			let enemyHP = this.enemy.get('currentHP');

			enemyHP -= 10;

			this.enemy.set('currentHP', enemyHP);

			if (enemyHP <= 0) {
				this.killEnemy();
			}

			this.controller.set('attackBtnDisabled', true);

			this.controller.set('attackBtnText', 'Recovering...');

			setTimeout(() => {

				this.controller.set('attackBtnDisabled', false);

				this.controller.set('attackBtnText', 'Attack!');

			}, 1000);
		}
	}
});
