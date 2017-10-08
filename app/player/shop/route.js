import Ember from 'ember';

export default Ember.Route.extend({

	model () {

		return Ember.RSVP.hash({
			player: this.store.peekAll('player').get('firstObject'),
			shop: this.store.peekRecord('player/shop', 0)
		});
	}
});
