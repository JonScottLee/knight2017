import Ember from 'ember';

let player = [{
  firstName: "Jon",
  lastName: "Lee"
}];

export default Ember.Route.extend({

	model() {

		let player;

		const hasPlayer = this.store.hasRecordForId('player', 0);

		if (!hasPlayer) {

			player = this.store.createRecord('player', {
				id: 0,
				firstName:"Jon",
				lastName: "Lee"
			});

			player.save();
		}

		return this.store.findAll('player');
	}

});
