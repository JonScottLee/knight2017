import Ember from 'ember';

let player = [{
  firstName: "Jon",
  lastName: "Lee"
}];

export default Ember.Route.extend({

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('model', model.objectAt(0));
	},

	model() {

		let player;

		const hasPlayer = this.store.hasRecordForId('player', 0);

		if (!hasPlayer) {

			player = this.store.createRecord('player', {
				id: 0,
				firstName:"Jon",
				lastName: "Lee"
			});
		}

		return this.store.findAll('player');
	}
});
