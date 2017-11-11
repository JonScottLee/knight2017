import Ember from 'ember';

export default Ember.Route.extend({

	model (params) {
		return Ember.RSVP.hash({
			player: this.store.findAll('player'),
			skill: this.store.find('skill', params.skill_id)
		});
	}
});
