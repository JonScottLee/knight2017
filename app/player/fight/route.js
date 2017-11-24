import Ember from 'ember';

export default Ember.Route.extend({

	killEnemy () {
		this.enemy.destroyRecord();

		this.inBattle = false;

		clearInterval(this.playerInterval);

		this.controller.set('enemyKilled', true);

		this.controller.set('buttonText', 'New Fight');

		this.controller.set('isDisabled', false);
	},

	playerTurn (player) {
		let enemyHP = this.enemy.get('hp');

		enemyHP -= 10;

		this.enemy.set('hp', enemyHP);

		if (enemyHP <= 0) {
			this.killEnemy();
		}
	},

	enemyTurn (enemy) {

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

				self.playerTurn(player);

				// self.enemyTurn(enemy);

			}, 500);

			self.inBattle = true;

			self.controller.set('buttonText', 'Fight in progress...');

			self.controller.set('isDisabled', true);
		});
	},

	model () {
		return Ember.RSVP.hash({
			player: this.store.findAll('player'),
			enemy: this.store.findAll('enemy')
		});
	},

	actions: {
		beginFight () {
			if (!this.inBattle) {
				let enemy = this.store.createRecord('enemy', {
					name: 'Green Slime',
					hp: 50
				});

				enemy.save();

				this.setupBattle();

				this.controller.set('enemyKilled', false);
			}
		}
	}
});
