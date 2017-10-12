import Ember from 'ember';

export default Ember.Controller.extend({

	boughtItemName: null,

	actions: {

		buy (item, player, shop) {

			let playerCash = player.get('cash');

			player.set('cash', playerCash -= item.get('cost'));

			if (item.get('quantity') === Infinity) {

				item.copy().then((copy) => {

					copy.setProperties({
						owner: player,
						quantity: 1
					});

					copy.save();

					player.save();

					this.set('boughtItemName', item.get('name'));

				});

			} else {

				shop.get('inventory').removeObject(item);

				player.get('inventory').pushObject(item);

			}
		},

		sell (item, player, shop) {
			let playerCash = player.get('cash');

			let shopInventory = shop.get('inventory');

			let shopInstanceItem = shopInventory.filterBy('name', item.get('name'));

			let shopHasItem = shopInstanceItem .length;

			player.set('cash', playerCash += item.get('sellValue'));

			player.get('inventory').removeObject(item);

			if (!shopHasItem) {

				shopInventory.pushObject(item);

			};

			item.save();

			shop.save();

			player.save();
		}
	}
});
