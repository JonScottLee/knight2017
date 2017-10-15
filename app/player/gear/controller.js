import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		equip (item, player) {
			item.set('equipped', true);
			item.save();
		},

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
