import Ember from 'ember';

export default Ember.Controller.extend({

	boughtItemName: null,

	actions: {

		buy (item, player) {

			let playerCash = player.get('cash');

			player.set('cash', playerCash -= item.get('cost'));

			item.copy().then((copy) => {

				copy.set('owner', player);

				copy.save();

				player.save();

				this.set('boughtItemName', item.get('name'));

			});
		},

		sell (item, player, shop) {
			let playerCash = player.get('cash');

			player.set('cash', playerCash += item.get('sellValue'));

			player.get('items').removeObject(item);

			shop.get('inventory').pushObject(item);

			item.save();

			shop.save();

			player.save();
		}
	}
});
