import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		remove (item, player) {
			item.set('equipped', false);
			item.save();
		},

		drop (item) {
			player.get('equippedItems').removeObject(item);
			item.destroyRecord();
		}

	}

});
