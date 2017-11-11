import Ember from 'ember';

export default Ember.Route.extend({

	model () {
		return Ember.RSVP.hash({
			player: this.store.peekAll('player').get('firstObject'),
			items: this.store.findAll('item')
		});
	},

	actions: {

		equip (item, player) {

			item.set('equipped', true);

			item.save();

			this.refresh();
		},

		remove (item, player) {
			item.set('equipped', false);

			item.save();

			this.refresh();
		},
	}
});
