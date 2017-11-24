import Ember from 'ember';

export default Ember.Route.extend({

	model() {

		let playerExists;

		this.store.findAll('player').then((player) => {
			playerExists = player.get('length');

			if (!playerExists) {
				this.transitionTo('player.create');
			} else {
				return player;
			}
		});
	}
});
