import Ember from 'ember';

export default Ember.Route.extend({

	model () {
		return Ember.RSVP.hash({
			player: this.store.peekAll('player').get('firstObject'),
			skills: this.store.findAll('skill')
		});
	}

});
