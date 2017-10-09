import Ember from 'ember';

export default Ember.Controller.extend({

	boughtItemName: null,

	actions: {

		buyItem (item, player) {

			item.copy().then((copy) => {

				copy.set('owner', player);

				copy.save();

				player.save();

				this.set('boughtItemName', item.get('name'));

			});
		}
	}
});
