import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		buyItem (item, player) {

			let newItem = this.store.createRecord('item');

			let name = item.get('name');

			newItem.set('name', name);

			newItem.set('owner', player);

			newItem.save();

			player.save();

		}
	}

});
