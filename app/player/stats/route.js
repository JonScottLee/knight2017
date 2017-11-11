import Ember from 'ember';

export default Ember.Route.extend({

	model () {
		return Ember.RSVP.hash({
			player: this.store.peekAll('player').get('firstObject'),
			items: this.store.findAll('item')
		});
	}

});
