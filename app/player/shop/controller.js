import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		buyItem (item, player) {

			item.copy().then((copy) => {

				copy.set('owner', player);

				copy.save();

				player.save();

			});
		}
	}
});
