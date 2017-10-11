import Ember from 'ember';

export default Ember.Controller.extend({

	boughtItemName: null,

	actions: {

		buy (item, player, shop) {

			let playerCash = player.get('cash');

			player.set('cash', playerCash -= item.get('cost'));

			if (item.get('isInfinite')) {

				item.copy().then((copy) => {

					copy.set('owner', player);

					copy.save();

					player.save();

					this.set('boughtItemName', item.get('name'));

				});

			} else {

				shop.get('inventory').removeObject(item);

				player.get('items').pushObject(item);

			}
		},

		sell (item, player, shop) {
			let playerCash = player.get('cash');

			let shopInventory = shop.get('inventory');

			let shopInstanceItem = shopInventory.filterBy('name', item.get('name'));

			let shopHasItem = shopInstanceItem .length;

			player.set('cash', playerCash += item.get('sellValue'));

			player.get('items').removeObject(item);

			if (!shopHasItem) {

				shopInventory.pushObject(item);

			};

			item.save();

			shop.save();

			player.save();
		}
	}
});
