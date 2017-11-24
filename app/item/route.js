import Ember from 'ember';

export default Ember.Route.extend({

	model() {

		return Ember.RSVP.hash({
			player: this.store.findAll('player'),
			item: this.store.findAll('item'),
			skill: this.store.findAll('skill')
		});
	}
});
